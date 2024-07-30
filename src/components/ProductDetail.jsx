// Images
import Yellow from "../images/Yellow.png";

const ProductDetail = ({ product }) => {
  return (
    <div className="col-span-3">
      <h4 className="font-bold text-neutral-500">
        {product?.category.replaceAll("_", " & ")}
      </h4>
      <h1 className="font-black text-5xl leading-normal w-1/2 mb-8">
        {product?.name}
      </h1>
      <div className="relative font-black text-4xl">
        <span className="relative z-10">{product?.price} AZN</span>
        <img
          src={Yellow}
          alt="yellow curved line"
          className="absolute left-0 -top-1/4"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
