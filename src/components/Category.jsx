import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectCategories as selectCategoryAction } from "../slices/categories.slice";

const Category = ({ children }) => {
  const dispatch = useDispatch();

  const selectedCategories = useSelector(
    (state) => state.categories.selectedCategories
  );

  const isSelected = selectedCategories.includes(children);

  const selectCategory = () => {
    dispatch(selectCategoryAction(children));
  };

  return (
    <li
      onClick={selectCategory}
      className={`${isSelected && "font-black"} cursor-pointer text-black`}
    >
      {children.replaceAll("_", " & ")}
    </li>
  );
};

export default Category;
