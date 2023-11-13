const express = require("express");
const cors = require("cors");
const app = express();
const usersRouter = require("./public/routers/usersRouter");
const loginRouter = require("./public/routers/loginRouter");
const signupRouter = require("./public/routers/signupRouter");
const userCartRouter = require("./public/routers/userCartRouter");
const AppError = require("./public/error/appError");
const path = require("path");

app.use(express.json());
app.use(cors());

// pre installation
// const __dirname = path.resolve();

// all routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/signup", signupRouter);
app.use("/api/v1/login", loginRouter);

app.use("/api/v1/userCart", userCartRouter);

// pre installation
app.use(express.static(path.join(__dirname, "client/dist")));

// Global error handling
app.all("*", (req, res, next) => {
  return next(
    new AppError(`No such routes: ${req.originalUrl} on this server`, 404)
  );
});

app.use((err, req, res, next) => {
  const status = err.status || "error";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status,
    message: err.message,
  });
});

module.exports = app;
