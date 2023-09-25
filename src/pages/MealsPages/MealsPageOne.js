// import { useContext, useEffect, useState } from "react";

// import CartContext from "../../componenets/Store/cart-context";

import AvailableMeals from "../../componenets/Meals/AvailableMeals";
const MealsPageOne = () => {
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
      <AvailableMeals />
    </div>
  );
};
export default MealsPageOne;
