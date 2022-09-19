import { useQuery } from "@tanstack/react-query";
import axios from 'lib/axios';

const fetchSingleProduct = async (id) => {
    try {
        const { data } = await axios.get(`/api/product/${id}`);

        return data;
    } catch (error) {
        return error.message;
    }
};

export const useSingleProduct = (productId) => {
    const { data, isFetching, isError, isLoading } = useQuery(['getProduct'], () => fetchSingleProduct(productId));

    return {
        data,
        isFetching,
        isError,
        isLoading
    };
};
