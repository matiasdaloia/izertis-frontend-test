import { useParams } from "react-router";
import ProductDetail from "components/Product/ProductDetail";
import AddToCartButton from "components/Product/AddToCartButton";

const Product = () => {
  const { id } = useParams();

  return (
    <ProductDetail id={id}>
      <ProductDetail.Image />
      <div>
        <ProductDetail.Attributes />
        <ProductDetail.Options />
        <AddToCartButton />
      </div>
    </ProductDetail>
  );
};

export default Product;
