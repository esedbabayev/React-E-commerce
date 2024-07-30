// Components
import Size from "./Size";

// Images
import Cart from "../images/cart.png";

// Hooks
import { useState } from "react";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import {
  addToCard,
  removeFromCart,
  changeProductAmount,
} from "../slices/cart.slice";

const ProductFilter = ({ product }) => {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const dispatch = useDispatch();

  const sizes = useSelector((state) => state.sizes.sizes);

  const incrementHandler = () => {
    if (count < 10) {
      setCount(+count + 1);
    }
  };

  const decrementHandler = () => {
    if (count > 1) {
      setCount(+count - 1);
    }
  };

  const selectSizeHandler = (size) => {
    setSelectedSize(size);
  };

  const addToCardHandler = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const selectedProduct = {
      quantity: +count,
      size: selectedSize,
      product,
    };

    dispatch(addToCard(selectedProduct));
  };

  return (
    <div className="col-span-4">
      {/* Color */}
      <div className="mb-10">
        <h3 className="text-xs font-bold mb-3">Product color</h3>
        <div
          style={{
            backgroundColor: `#${product?.color}`,
          }}
          className="h-8 w-8 rounded-full"
        ></div>
      </div>
      {/* Size */}
      <div className="mb-28">
        <h3 className="text-xs font-bold mb-3">Choose your size</h3>
        <ul className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isAvailable = product?.size.includes(size);
            return (
              <li
                key={size}
                onClick={() => isAvailable && selectSizeHandler(size)}
                className={`${
                  size === selectedSize
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                } 
             font-bold uppercase ${
               !isAvailable && "bg-red-500"
             } w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg`}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Counter */}
      <div className="flex items-center gap-6 font-black mb-8">
        <button onClick={decrementHandler} className="text-3xl">
          -
        </button>
        <input
          type="number"
          min="1"
          max="100"
          className="border h-14 text-2xl text-center rounded-md"
          value={+count}
          readOnly
          // onChange={}
        />
        <button onClick={incrementHandler} className="text-3xl">
          +
        </button>
      </div>
      {/* Add To Cart */}
      <button
        onClick={addToCardHandler}
        className="w-full  flex rounded-lg font-black uppercase duration-200 justify-between items-center bg-[#1d1d1d] hover:bg-[#0075ff] text-white text-xl px-8 py-6"
      >
        Add To Cart
        <span>
          <img src={Cart} alt="cart" />
        </span>
      </button>
    </div>
  );
};

export default ProductFilter;
