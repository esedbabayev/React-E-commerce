// Router
import { Route, Routes } from "react-router-dom";

// Components
import Container from "./components/Container";
import Header from "./components/Header";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Container>
      <Header />
      <main className="my-20 font-satoshi">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
