// Components
import EmptyCart from "../components/EmptyCart";
import Filter from "../components/Filter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-20">
      <Filter />
      <Products />
    {/* <EmptyCart /> */}
    </div>
  );
};

export default Home;
