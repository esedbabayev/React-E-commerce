// Images
import { useEffect, useState } from "react";

// Components
import Product from "./Product";

// Actions
import { setCategories } from "../slices/categories.slice";
import { setColors } from "../slices/colors.slice";

// Hooks
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProduts] = useState();

  const dispatch = useDispatch();

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();

    setProduts(data);

    const categories = [...new Set(data.map((product) => product.category))];
    const colors = [...new Set(data.map((product) => product.color))];

    dispatch(setCategories(categories));
    dispatch(setColors(colors));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="col-span-9">
      <div className="mb-4">
        <h1 className="font-medium">Showing 2 results</h1>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {products?.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
