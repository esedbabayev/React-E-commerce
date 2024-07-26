// Components
import Size from "./Size";

// Images
import Cart from "../images/cart.png";

// Hooks
import { useState } from "react";

const ProductFilter = (props) => {
  return (
    <div className="col-span-4">
      {/* Color */}
      <div className="mb-10">
        <h3 className="text-xs font-bold mb-3">Product color</h3>
        <div
          style={{
            backgroundColor: "red",
          }}
          className="h-8 w-8 rounded-full"
        ></div>
      </div>
      {/* Size */}
      <div className="mb-28">
        <h3 className="text-xs font-bold mb-3">Choose your size</h3>
        <ul className="flex flex-wrap gap-2">
          <Size title="Extra Small">xs</Size>
          <Size title="Small">s</Size>
          <Size title="Medium">m</Size>
          <Size title="Large">l</Size>
          <Size title="Extra Large">xl</Size>
        </ul>
      </div>
      {/* Counter */}
      <div className="flex items-center gap-6 font-black mb-8">
        <button className="text-3xl">-</button>
        <input
          type="number"
          min="1"
          max="100"
          className="border h-14 text-2xl text-center rounded-md"
        />
        <button className="text-3xl">+</button>
      </div>
      {/* Add To Cart */}
      <button className="w-full  flex rounded-lg font-black uppercase duration-200 justify-between items-center bg-[#1d1d1d] hover:bg-[#0075ff] text-white text-xl px-8 py-6">
        Add To Cart
        <span>
          <img src={Cart} alt="cart" />
        </span>
      </button>
    </div>
  );
};

export default ProductFilter;
