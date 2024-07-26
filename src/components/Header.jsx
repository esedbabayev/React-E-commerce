// Router
import { Link } from "react-router-dom";

// Logo
import Logo from "../images/Logo.png";
import Search from "../images/search.png";
import Cart from "../images/cart.png";

// Styles
const styles = {
  header: "my-10 flex items-center justify-between font-satoshi",
  logo: "h-12 w-10",
  ul: "flex gap-20",
  li: "text-3xl font-black",
  span: "text-yellow-400",
  btnGroup: "flex gap-5",
  btn: "bg-[#1d1d1d] border-2 transition-all duration-200 hover:border-yellow-400 h-12 w-12 flex items-center justify-center rounded-full",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="logo" className="h-full w-full" />
        </Link>
      </div>
      <nav>
        <ul className={styles.ul}>
          <Link to="/products">
            <li className={styles.li}>
              Products<span className={styles.span}>.</span>
            </li>
          </Link>
          <Link to="/collections">
            <li className={styles.li}>
              Collections<span className={styles.span}>.</span>
            </li>
          </Link>
          <Link to="/account">
            <li className={styles.li}>
              Accounts<span className={styles.span}>.</span>
            </li>
          </Link>
          <Link to="/help">
            <li className={styles.li}>
              Help<span className={styles.span}>.</span>
            </li>
          </Link>
        </ul>
      </nav>
      <div className={styles.btnGroup}>
        <Link to="/cart">
          <button className={styles.btn}>
            <img src={Cart} alt="cart" className="w-4" />
          </button>
        </Link>
        <button className={styles.btn}>
          <img src={Search} alt="search" className="w-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
