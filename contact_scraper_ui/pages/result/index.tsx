import type { NextPage } from "next";
import Navigation from "../../Components/shared/navigation";
import CartContainer from "../../Components/features/cart";

const Cart: NextPage = () => {
  return (
    <>
      <Navigation />
      <CartContainer />
    </>
  );
};

export default Cart;
