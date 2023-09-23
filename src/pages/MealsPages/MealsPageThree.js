import React from "react";
import AvailableMealsThree from "../../componenets/Meals/AvailableMealsThree";
import { useContext, useEffect } from "react";
import CartContext from "../../componenets/Store/cart-context";

const MealsPageThree = () => {
  const ctx = useContext(CartContext);
  let preventFirst = 0;
  useEffect(() => {
    if (preventFirst === 0) {
      preventFirst++;
      return;
    }
    ctx.changeMenu(1);
  }, [preventFirst, ctx]);
  return (
    <div>
      <AvailableMealsThree />
    </div>
  );
};

export default MealsPageThree;
