import { useContext, useEffect } from "react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";
import style from "./MealsRoot.module.css";
import App from "../../App";
import CartContext from "../../componenets/Store/cart-context";

const MealsRoot = () => {
  const { mealRoot } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mealRoot]);

  const ctx = useContext(CartContext);
  console.log(ctx.isOne);
  const backHandler = () => {
    ctx.changeMenu(-ctx.isOne);
  };
  return (
    <section className={style.orderItemsSection}>
      <App></App>
      <nav className={style.mealNavigation}>
        <ul>
          <li>
            <NavLink
              to={"one"}
              className={({ isActive }) => {
                if (isActive && ctx.isOne > 1) {
                  return style.navlinkActive;
                }
              }}
              style={{
                backgroundColor: `${
                  ctx.isOne === 1 ? "rgba(198, 40, 60, 1)" : ""
                }`,
              }}
              end
            >
              Sushi
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"two"}
              className={({ isActive }) =>
                isActive ? style.navlinkActive : ""
              }
            >
              Ramen
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"three"}
              className={({ isActive }) =>
                isActive ? style.navlinkActive : ""
              }
            >
              Drinks
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* All children pages will go here */}
      <div className={style.mealsCard}>
        <Outlet />
      </div>
      <div className={style.backToHome}>
        <Link to={"/Home"} onClick={backHandler}>
          <span>&larr;</span> Back To Home Page
        </Link>
      </div>
    </section>
  );
};

export default MealsRoot;
