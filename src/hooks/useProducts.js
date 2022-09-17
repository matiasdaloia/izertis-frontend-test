import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Proptypes from "prop-types";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //fetch data in useEffect
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://front-test-api.herokuapp.com/api/product"
      );

      setProducts(data);
    })();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
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
