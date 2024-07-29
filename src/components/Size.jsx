import React from "react";

// Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// Actions
import { selectSizes } from "../slices/sizes.slice";

const Size = ({ children }) => {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.sizes.selectedSizes);

  const selectSize = () => {
    dispatch(selectSizes(children));
  };

  const isSelected = selectedSize.includes(children);
  return (
    <li
      onClick={selectSize}
      className={`${isSelected ? "bg-black text-white" : "bg-gray-200 text-black"} font-bold uppercase  w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg`}
    >
      {children}
    </li>
  );
};

export default Size;
