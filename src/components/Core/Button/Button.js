import PropTypes from "prop-types";
const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn border rounded px-5 grid place-items-center ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Button;
