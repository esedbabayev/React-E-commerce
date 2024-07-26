// Components
import ProductDetail from "../components/ProductDetail";
import ProductImage from "../components/ProductImage";
import ProductFilter from "../components/ProductFilter";

const ProductPage = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <ProductDetail />
      <ProductImage />
      <ProductFilter />
    </div>
  );
};

export default ProductPage;
