// Icons
import Chevron from "../icons/chevron";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2",
};

const Colors = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={dropDownHandler} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <Chevron className={`${styles.icon} ${isOpen ? "rotate-0" : "rotate-180"}`} color="black" />
        </div>
      </button>
      {isOpen && (
        <ul className={styles.ul}>
          <Size title="Extra Small">xs</Size>
          <Size title="Small">s</Size>
          <Size title="Medium">m</Size>
          <Size title="Large">l</Size>
          <Size title="Extra Large">xl</Size>
        </ul>
      )}
    </div>
  );
};

export default Colors;
