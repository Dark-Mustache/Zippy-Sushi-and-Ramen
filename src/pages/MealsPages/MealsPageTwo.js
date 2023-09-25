import React from "react";
import AvailableMealsTwo from "../../componenets/Meals/AvailableMealsTwo";
import { useContext, useEffect } from "react";
import CartContext from "../../componenets/Store/cart-context";
import style from "./MealsPageTwo.module.css";

const MealsPageTwo = () => {
  const ctx = useContext(CartContext);
  const { changeMenu } = ctx;

  let preventFirst = 0;
  useEffect(() => {
    if (preventFirst === 0) {
      preventFirst++;
      return;
    }
    changeMenu(1);
  }, [preventFirst, changeMenu]);
  return (
    <div className={style.contain}>
      <AvailableMealsTwo />
    </div>
  );
};

export default MealsPageTwo;
