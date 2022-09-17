import { createContext, useContext, useState } from "react";
import axios from "lib/axios";
import Proptypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  //fetch data in useEffect

  const addToCart = async item => {
    const { data } = await axios.post("/api/cart", item);
    setCart(data);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: Proptypes.node
};

export const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
