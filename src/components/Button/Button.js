import "./Button.css";

const Button = ({ onClick, children, classNames, disabled }) => {
  return (
    <button
      className={`btn ${classNames}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
