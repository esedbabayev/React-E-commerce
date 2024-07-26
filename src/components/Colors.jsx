// Icons
import Chevron from "../icons/chevron";

// Components
import Color from "./Color";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2 pb-4",
};

const Colors = () => {
  return (
    <div className="border-b">
      <button className={styles.btn}>
        <span className="font-bold">Color</span>
        <div>
          <Chevron className={`${styles.icon}`} color="black" />
        </div>
      </button>
      <ul className={styles.ul}>
        <Color color="black" />
      </ul>
    </div>
  );
};

export default Colors;
