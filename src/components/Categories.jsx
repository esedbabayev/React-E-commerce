// Hooks
import { useState } from "react";

// Redux Hooks
import { useSelector } from "react-redux";

// Icons
import Chevron from "../icons/chevron";

// Components
import Category from "./Category";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full ",
  ul: "text-sm font-medium flex flex-col gap-5 pb-4",
  icon: "duration-200 w-4 h-4",
};

const Categories = () => {
  const categories = useSelector(state => state.categories.categories)
  
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button onClick={dropDownHandler} className={styles.btn}>
        <span className="font-bold">Category</span>
        <div>
          <Chevron
            className={`${styles.icon} ${isOpen ? "rotate-0" : "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {isOpen && (
        <ul className={styles.ul}>
          {categories.map(category => (
            <Category key={category}>{category}</Category>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
