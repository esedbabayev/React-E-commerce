// Router
import { Link } from "react-router-dom";

import Tshirt from "../images/t-shirt.png";

const Product = ({ product }) => {
  return (
    <div className="col-span-4 cursor-pointer">
      <Link to={`/products/${product.id}`}>
        <div className="mb-4 border border-neutral-200 rounded-lg">
          <img src={product.image} alt="" className="w-full" />
        </div>
        <div className="flex justify-between font-bold">
          <div>
            <h1 className="text-lg">{product.name}</h1>
            <p className=" text-neutral-500">
              {product.category.replaceAll("_", " & ")}
            </p>
          </div>
          <h1 className="text-lg">
            <span>{product.price}</span>
            AZN
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
