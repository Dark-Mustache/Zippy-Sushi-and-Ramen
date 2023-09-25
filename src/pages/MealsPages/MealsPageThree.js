import React from "react";
import AvailableMealsThree from "../../componenets/Meals/AvailableMealsThree";
// import { useContext, useEffect, useState } from "react";
// import CartContext from "../../componenets/Store/cart-context";

const MealsPageThree = () => {
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
    <div>
      <AvailableMealsThree />
    </div>
  );
};

export default MealsPageThree;
