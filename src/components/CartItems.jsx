// Components
import CartItem from "./CartItem";

// Redux Hooks
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div
      id="cartList"
      className="border-y border-neutral-100 pt-10 pb-20 flex overflow-x-auto gap-20"
    >
      {/* {Product Item } */}
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItems;
