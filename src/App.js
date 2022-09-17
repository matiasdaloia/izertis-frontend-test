import Layout from "components/Layout";
import { ProductsProvider } from "hooks/useProducts";
import Product from "pages/Product";
import Products from "pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
