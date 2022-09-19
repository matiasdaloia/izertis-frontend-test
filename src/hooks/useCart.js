import { createContext, useContext } from "react";
import axios from "lib/axios";
import Proptypes from "prop-types";
import { useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //fetch data in useEffect
  const [cart, setCart] = useState({});
  const itemsInCart = localStorage.getItem("cartCount");
  const addToCart = async item => {
    const { data } = await axios.post("/api/cart", item);
    setCart(data);
    localStorage.setItem("cartCount", data.count);
  };

  return (
    <CartContext.Provider value={{ addToCart, itemsInCart, cart }}>
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
