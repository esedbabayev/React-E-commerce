import Tshirt from "../images/t-shirt.png";
import cartSlice from "../slices/cart.slice";

// Hooks
import { useState } from "react";

// Redux Hooks
import { useDispatch } from "react-redux";

// Actions
import { removeFromCart, changeProductAmount } from "../slices/cart.slice";

const CartItem = ({ cartItem }) => {
  const [count, setCount] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const newQuantity = +count + 1;
    if (count < 10) {
      setCount(+count + 1);
      dispatch(changeProductAmount({ cartItem, newQuantity }));
    }
  };

  const decrementHandler = () => {
    const newQuantity = count - 1;
    if (count > 1) {
      setCount(+count - 1);
      dispatch(changeProductAmount({ cartItem, newQuantity }));
    }
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="flex gap-5 h-96 min-w-fit">
      <div className="border border-neutral-200 rounded-lg">
        <img src={cartItem.product?.image} alt="" className="h-full" />
      </div>
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-bold">{cartItem.product?.name}</h3>
          <h4 className="font-bold text-neutral-500">
            {cartItem.product?.category.replaceAll("_", " & ")}
          </h4>
        </div>
        <div className="flex gap-5">
          <div
            style={{ backgroundColor: `#${cartItem.product?.color}` }}
            className={`h-8 w-8 border flex items-center justify-center rounded-full cursor-pointer`}
          ></div>
          <div className="font-bold bg-[#1D1D1D] uppercase text-white w-9 h-9 flex items-center justify-center rounded-lg">
            {cartItem?.size}
          </div>
        </div>
        <div>
          {cartItem.quantity > 1 ? (
            <span className="font-medium text-xl">
              {cartItem.quantity} x {cartItem.product?.price} AZN |
              <span className="font-black">
                {(cartItem.quantity * cartItem.product?.price).toFixed(2)}
              </span>
            </span>
          ) : (
            <span className="font-black text-xl">
              {cartItem.product?.price} AZN
            </span>
          )}
        </div>
        <div>
          <div className="flex items-center gap-6 font-black mb-8">
            <button onClick={decrementHandler} className="text-3xl">
              -
            </button>
            <input
              readOnly
              type="number"
              min="1"
              max="100"
              value={count}
              className="border h-14 text-2xl text-center rounded-md"
            />
            <button onClick={incrementHandler} className="text-3xl">
              +
            </button>
          </div>
          <button
            onClick={removeFromCartHandler}
            className="flex items-center justify-between rounded-lg font-black uppercase text-white bg-black text-medium px-4 py-3 w-72"
          >
            Remove
            <img src="../assets/icons/remove.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
