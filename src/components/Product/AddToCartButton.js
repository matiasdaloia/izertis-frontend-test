/* eslint-disable no-unused-vars */
import Button from "components/Core/Button/Button";
import Spinner from "components/Core/Spinner/Spinner";
import useCart from "hooks/useCart";
import { useContext } from "react";
import { ProductDetailContext } from "./ProductDetail";

const AddToCartButton = () => {
    const { data, options } = useContext(ProductDetailContext);
    const { addToCart, isLoading } = useCart();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <Button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full rounded"
                onClick={() => addToCart({ id: data.id, ...options })}
                disabled={
                    !options.colorCode || !options.storageCode
                }
            >
                Add to cart
            </Button>
        </div >
    );
};

export default AddToCartButton;