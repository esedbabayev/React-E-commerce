import { useEffect, useState } from "react";

// Components
import Product from "./Product";
import EmptyCart from "./EmptyCart";

// Actions
import { setCategories } from "../slices/categories.slice";
import { setColors } from "../slices/colors.slice";
import { setSizes } from "../slices/sizes.slice";

// Hooks
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const selectedCategories = useSelector(
    (state) => state.categories.selectedCategories
  );

  const selectedColors = useSelector((state) => state.colors.selectedColors);

  const selectedSizes = useSelector((state) => state.sizes.selectedSizes);

  const dispatch = useDispatch();

  const getProducts = async () => {
    const url = "http://localhost:3000/products";
    const response = await fetch(url);
    const data = await response.json();

    const categories = [...new Set(data.map((product) => product.category))];
    const colors = [...new Set(data.map((product) => product.color))];
    // const sizes = [...new Set(data.map((product) => product.size))];

    dispatch(setCategories(categories));
    dispatch(setColors(colors));
    // dispatch(setSizes(sizes));

    setAllProducts(data);
    setFilteredProducts(data);
  };

  const filterProducts = () => {
    let products = allProducts;

    if (selectedCategories.length > 0) {
      products = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedColors.length > 0) {
      products = products.filter((product) =>
        selectedColors.includes(product.color)
      );
    }

    if (selectedSizes.length > 0) {
      products = products.filter((product) =>
        selectedSizes.includes(product.size)
      );
    }

    setFilteredProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategories, selectedColors]);

  return (
    <div className="col-span-9">
      <div className="mb-4">
        <h1 className="font-medium">
          Showing {filteredProducts.length} results
        </h1>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-12 gap-5">
          {filteredProducts.map((product) => (
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
