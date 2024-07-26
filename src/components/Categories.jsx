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
  return (
    <div className="border-b">
      <button className={styles.btn}>
        <span className="font-bold">Category</span>
        <div>
          <Chevron className={`${styles.icon} `} color="black" />
        </div>
      </button>
      <ul className={styles.ul}>
        <Category />
        <Category />
        <Category />
      </ul>
    </div>
  );
};

export default Categories;
