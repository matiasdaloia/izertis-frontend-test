import PropTypes from "prop-types";
const Button = ({ bg, color }) => {
  return (
    <button
      className={`btn border rounded px-5 grid place-items-center text-[${color}] bg-[${bg}]`}
    >
      Button
    </button>
  );
};

Button.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string
};

export default Button;
