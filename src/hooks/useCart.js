import { createContext, useContext } from "react";
import axios from "lib/axios";
import Proptypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const addToCart = async item => {
  try {
    const { data } = await axios.post('/api/cart', item);

    localStorage.setItem("cartCount", data.count);
    toast.success(`${data.count} items successfully added to cart!`);

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { data, isLoading, isError, mutate } = useMutation((item) => addToCart(item));
  const itemsInCart = localStorage.getItem("cartCount");

  return (
    <CartContext.Provider value={{ addToCart: mutate, isLoading, isError, itemsInCart, cart: data }}>
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
