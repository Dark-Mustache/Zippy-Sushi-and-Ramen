import React from "react";
import AvailableMealsTwo from "../../componenets/Meals/AvailableMealsTwo";
import { useContext, useEffect } from "react";
import CartContext from "../../componenets/Store/cart-context";
import style from "./MealsPageTwo.module.css";

const MealsPageTwo = () => {
  const ctx = useContext(CartContext);
  let preventFirst = 0;
  useEffect(() => {
    ctx.changeMenu(1);
    if (preventFirst === 0) {
      preventFirst++;
      return;
    }
  }, [preventFirst, ctx]);
  return (
    <div className={style.contain}>
      <AvailableMealsTwo />
    </div>
  );
};

export default MealsPageTwo;
