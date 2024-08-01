// Images
import { useEffect, useState } from "react";

// Components
import Product from "./Product";
import EmptyCart from "./EmptyCart";

// Actions
import { setCategories } from "../slices/categories.slice";
import { setColors } from "../slices/colors.slice";

// Hooks
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [products, setProduts] = useState();

  const dispatch = useDispatch();

  const selectedCategories = useSelector(
    (state) => state.categories.selectedCategories
  );
  const selectedColors = useSelector((state) => state.colors.selectedColors);
  // const selectedSizes = useSelector((state) => state.sizes.selectedSizes);

  const getProducts = async () => {
    let url = "http://localhost:3000/products?";

    const categoryQueries =
      selectedCategories.length > 0
        ? selectedCategories.map((category) => `category=${category}`).join("&")
        : "";

    const colorQueries =
      selectedColors.length > 0
        ? selectedColors.map((color) => `color=${color}`).join("&")
        : "";

    const queries = [categoryQueries, colorQueries]
      .filter((item) => item.length)
      .join("&");

    url += queries;
    // console.log(url);

    const response = await fetch(url);
    const data = await response.json();

    const categories = [...new Set(data.map((product) => product.category))];
    const colors = [...new Set(data.map((product) => product.color))];

    if (url === "http://localhost:3000/products?") {
      dispatch(setCategories(categories));
      dispatch(setColors(colors));
    }
    setProduts(data);
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategories, selectedColors]);

  return (
    <div className="col-span-9">
      <div className="mb-4">
        <h1 className="font-medium">Showing {products?.length} results</h1>
      </div>
      {products?.length > 0 ? (
        <div className="grid grid-cols-12 gap-5">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Products;
