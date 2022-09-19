import { useQuery } from "@tanstack/react-query";
import axios from 'lib/axios';

const fetchProducts = async () => {
  try {
    const { data } = await axios.get('/api/product');
    return data;
  } catch (error) {
    return error.message;
  }
};

export const useProducts = () => {
  const { data, isFetching, isError } = useQuery(['getProducts'], fetchProducts);

  return {
    data,
    isFetching,
    isError
  };
};
