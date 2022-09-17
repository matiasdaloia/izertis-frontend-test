import axios from "axios";
import Button from "components/Core/Button/Button";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://front-test-api.herokuapp.com/api/product/${id}`
      );
      setProduct(data);
      console.log(data);
    })();
  }, []);
  return (
    <div className="grid lg:grid-cols-2 items-center px-4 min-h-[80vh] relative">
      <Link
        to="/"
        className="fixed left-0 top-0 mx-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        &larr;
      </Link>

      <div className="w-full">
        <img
          src={product?.imgUrl}
          className="w-full h-[500px] object-contain  "
        />
      </div>
      <div className="flex justify-start items-start flex-col">
        <h1 className="text-xl font-bold">
          {product?.brand} {product?.model}{" "}
        </h1>
        <div>
          <div>
            Hadware: {product?.cpu} cpu, {product?.internalMemory} internal
            memory, {product?.ram}
          </div>
          <div>
            Camera: {product?.primaryCamera?.join(" ")} rear,{" "}
            {product?.secondaryCamera} front
          </div>
          <div className="py-3">
            <h2 className="font-semibold">Please select a color</h2>
            <div className="flex py-2 gap-4">
              {product.options?.colors?.map((color, index) => (
                <>
                  <span
                    key={index}
                    className={`w-8 h-8 rounded-[32px]`}
                    style={{ backgroundColor: color.name.toLowerCase() }}
                  />
                </>
              ))}
            </div>
          </div>
          <div className="py-3">
            <h2 className="font-semibold">Please select a storage</h2>
            <div className="flex py-2 gap-4">
              {product.options?.storages?.map((storage, index) => (
                <span key={index} className="flex gap-2">
                  <input
                    type="radio"
                    name="storage"
                    value={storage.code}
                    id={`storage-${index}`}
                  />
                  <label htmlFor={`storage-${index}`}>{storage.name}</label>
                </span>
              ))}
            </div>
          </div>
        </div>
        <Button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full rounded">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
