// Router
import { Route, Routes, useLocation } from "react-router-dom";

// Components
import Container from "./components/Container";
import Header from "./components/Header";
import Layout from "./components/Layout";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SingIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Hooks
import { useEffect } from "react";

// Redux Hooks
import { useDispatch } from "react-redux";

// Actions
import { setCartItems } from "./slices/cart.slice";

const App = () => {

  const userId = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();

  const getSpecificCart = async () => {
    const response = await fetch(
      `http://localhost:3000/carts?userId=${userId}`
    );
    const data = await response.json();

    dispatch(setCartItems(data));
  };

  useEffect(() => {
    getSpecificCart();
  }, [userId]);

  const { pathname } = useLocation();
  return (
    <Container>
      {pathname === "/sign-in" || pathname === "/sign-up" ? "" : <Header />}
      <main className="my-20 font-satoshi">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
