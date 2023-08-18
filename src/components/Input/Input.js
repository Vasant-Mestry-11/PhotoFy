import "./Input.css";

const Input = ({ type = "text", value, onChange, classNames, placeholder }) => {
  return (
    <input
      className={`input ${classNames}`}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
