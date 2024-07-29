// Icons
import Chevron from "../icons/chevron";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

// React Hooks
import { useSelector } from "react-redux";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2",
};

const Colors = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sizes = useSelector((state) => state.sizes.sizes);

  const dropDownHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={dropDownHandler} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <Chevron
            className={`${styles.icon} ${isOpen ? "rotate-0" : "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {isOpen && (
        <ul className={styles.ul}>
          {sizes.map((size) => (
            <Size key={size}>{size}</Size>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
