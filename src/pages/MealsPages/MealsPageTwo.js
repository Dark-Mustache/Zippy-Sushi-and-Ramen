import React from "react";
import AvailableMealsTwo from "../../componenets/Meals/AvailableMealsTwo";
// import { useContext, useEffect, useState } from "react";
// import CartContext from "../../componenets/Store/cart-context";
import style from "./MealsPageTwo.module.css";

const MealsPageTwo = () => {
  // const ctx = useContext(CartContext);
  // const { changeMenu } = ctx;

  // // let preventFirst = 0;
  // const [preventFirst, setPreventFirst] = useState(true);
  // useEffect(() => {
  //   if (preventFirst) {
  //     setPreventFirst(false);
  //     return;
  //   } else {
  //     // changeMenu(1);
  //   }
  // }, [preventFirst, changeMenu]);
  return (
    <div className={style.contain}>
      <AvailableMealsTwo />
    </div>
  );
};

export default MealsPageTwo;
