import PropTypes from "prop-types";
const Button = ({ bg, color, className, children }) => {
  return (
    <button
      className={`btn border rounded px-5 grid place-items-center text-[${color}] bg-[${bg}] ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
