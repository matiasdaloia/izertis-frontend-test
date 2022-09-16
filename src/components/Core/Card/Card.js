import Proptypes, { string } from "prop-types";
const Card = ({ product }) => {
  return (
    <div className="flex flex-col font-sans bg-[white]  border rounded-xl w-[100%] h-full">
      <div className="flex justify-center relative pt-2">
        <img
          src={product.imgUrl}
          alt=""
          className="rounded-xl"
          loading="lazy"
        />
      </div>

      <div className="p-2">
        <h1 className="text-lg font-bold">{product.model}</h1>
        <p className="text-lg font-semibold text-[#ffa500]">${product.price}</p>
        <small>{product.brand}</small>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: Proptypes.shape({
    id: string,
    brand: string,
    price: string,
    imgUrl: string,
    model: string
  })
};
export default Card;
