import axios from "lib/axios";
import Button from "components/Core/Button/Button";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useCart from "hooks/useCart";
import Spinner from "components/Core/Spinner/Spinner";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [options, setOptions] = useState({
    colorCode: "",
    storageCode: ""
  });
  const [loading, setLoading] = useState(false);
  const handleOptions = e => {
    const { name, value } = e.target;

    setOptions(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const { addToCart } = useCart();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/product/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="grid lg:grid-cols-2 items-center px-4 min-h-[80vh] relative">
      <Link
        to="/"
        className="fixed left-0 top-0 m-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        &larr;
      </Link>
      {loading && <Spinner />}
      <div className="w-full">
        <img
          src={product?.imgUrl}
          className="w-full h-[500px] object-contain  "
        />
      </div>
      <div className="flex justify-start items-start flex-col">
        <h1 className="text-xl font-bold capitalize">
          {product?.brand} {product?.model}{" "}
        </h1>
        <div>
          <div>
            Hadware: {product?.cpu} cpu, {product?.internalMemory} internal
            memory, {product?.ram}
          </div>
          <div>
            Camera:
            {typeof product?.primaryCamera === typeof []
              ? product?.primaryCamera.join(" ")
              : product?.primaryCamera}
            &nbsp;rear, {product?.secondaryCmera} front
          </div>

          <div className="py-3">
            <h2 className="font-semibold">Please select a color</h2>
            <select
              name="colorCode"
              className="px-2 border rounded bg-[#eee] py-2"
              required
              onChange={handleOptions}
            >
              <option>Select a color</option>
              {product.options?.colors?.map(color => (
                <option key={color.code} value={color.code}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <div className="py-3">
            <h2 className="font-semibold">Please select a storage</h2>
            <div className="flex py-2 gap-4">
              {product.options?.storages?.map((storage, index) => (
                <span key={index} className="flex gap-2">
                  <input
                    type="radio"
                    name="storageCode"
                    onChange={handleOptions}
                    value={storage.code}
                    id={`storage-${index}`}
                  />
                  <label htmlFor={`storage-${index}`}>{storage.name}</label>
                </span>
              ))}
            </div>
          </div>
        </div>
        <Button
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full rounded"
          onClick={() => addToCart({ id: product.id, ...options })}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
