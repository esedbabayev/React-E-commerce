// Images
import { useEffect, useState } from "react";

// Components
import Product from "./Product";

const Products = () => {
  return (
    <div className="col-span-9">
      <div className="mb-4">
        <h1 className="font-medium">Showing 2 results</h1>
      </div>
      <div className="grid grid-cols-12 gap-5"></div>
    </div>
  );
};

export default Products;
