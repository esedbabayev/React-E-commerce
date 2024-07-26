// Router
import { Link } from "react-router-dom";

import Tshirt from "../images/t-shirt.png";

const Product = ({ id, img, title, price, category }) => {
  return (
    <div className="col-span-4 cursor-pointer">
      <Link to={`/products/${id}`}>
        <div className="mb-4 border border-neutral-200 rounded-lg">
          <img src={Tshirt} alt="" className="w-full" />
        </div>
        <div className="flex justify-between font-bold">
          <div>
            <h1 className="text-lg">Title</h1>
            <p className=" text-neutral-500">Category</p>
          </div>
          <h1 className="text-lg">
            <span>Price</span>
            AZN
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
