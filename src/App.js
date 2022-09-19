import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Layout from "components/Layout";
import { CartProvider } from "hooks/useCart";
import Product from "pages/Product";
import Products from "pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
