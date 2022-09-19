import Card from "components/Core/Card/Card";
import Spinner from "components/Core/Spinner/Spinner";
import { useProducts } from "hooks/useProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { data, isFetching } = useProducts();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleSearch = keyword => {
    const filtered = data.filter(
      product =>
        product.brand.toLowerCase().includes(keyword.toLowerCase()) ||
        product.model.toLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(filtered);
  };

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <section>
      <h1 className="text-4xl p-2 text-center">Products</h1>
      <div className="flex my-4">
        <input
          type="search"
          onChange={e => handleSearch(e.target.value)}
          placeholder="Search by name or brand"
          className="w-[80%] md:w-[50%] rounded-xl px-3 mx-auto py-2 text-lg bg-[#eee]"
        />
      </div>

      <div className="flex justify-around px-20ß">
        <div className="container grid place-items-center grid-cols-2 auto-rows-[1fr] md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 px-5">
          {products?.map(product =>
            <Link to={`/products/${product.id}`} key={product.id}>
              <Card product={product} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
