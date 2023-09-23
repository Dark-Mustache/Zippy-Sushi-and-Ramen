import { useContext, useEffect } from "react";

import CartContext from "../../componenets/Store/cart-context";

import AvailableMeals from "../../componenets/Meals/AvailableMeals";
const MealsPageOne = () => {
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
      <AvailableMeals />
    </div>
  );
};
export default MealsPageOne;
