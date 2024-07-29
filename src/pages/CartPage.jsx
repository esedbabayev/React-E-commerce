// Components
import CartHeader from "../components/CartHeader";
import CartItems from "../components/CartItems";
import CartBottom from "../components/CartBottom";

const cartPage = () => {
  return (
    <div className="space-y-10">
      {/* {Cart Top }*/}
      <CartHeader />
      {/* Cart Items */}
      <CartItems />
      {/* { Cart Bottom } */}
      <CartBottom />
    </div>
  );
};

export default cartPage;
