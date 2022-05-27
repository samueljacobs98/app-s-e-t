import "./Button.scss";

const Button = ({ text, order, onClick, type = "button" }) => {
  return (
    <button type={type} className={"button button--" + order} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
