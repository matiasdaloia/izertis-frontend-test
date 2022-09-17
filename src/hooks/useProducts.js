import { createContext, useContext, useEffect, useState } from "react";
import axios from "lib/axios";
import Proptypes from "prop-types";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  //fetch data in useEffect
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/product");

        setProducts(data);
      } catch (error) {
        setErr(err);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ loading, products, err }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: Proptypes.node
};

export const useProducts = () => {
  return useContext(ProductsContext);
};

export default useProducts;
