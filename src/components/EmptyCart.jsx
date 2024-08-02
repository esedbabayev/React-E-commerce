// Images
import Empty from "../images/Empty.png";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import { clearCategories } from "../slices/categories.slice";
import { clearColors } from "../slices/colors.slice";

const EmptyCart = () => {
  const selectedCategories = useSelector(
    (state) => state.categories.selectedCategories
  );

  const selectedColors = useSelector((state) => state.colors.selectedColors);
  
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(clearCategories(selectedCategories));
    dispatch(clearColors(selectedColors))
  };

  return (
    <div className="col-span-9 flex flex-col items-center justify-center h-full">
      <div>
        <img src={Empty} alt="empty" />
      </div>
      <h1 className="text-3xl font-black mb-3 mt-8">
        Nothing found<span className="text-yellow-400">.</span>
      </h1>
      <p className="font-medium text-neutral-400 text-center mb-8">
        We could not find anything matching your <br /> needs. Try to look for
        something else
      </p>
      <button
        onClick={clearFilters}
        className="uppercase font-black text-white bg-black text-medium px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#0075ff]"
      >
        clear filters
      </button>
    </div>
  );
};

export default EmptyCart;
