import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
  text,
  order,
  onClick,
  link = false,
  type = "button",
  location = "home",
}) => {
  return link ? (
    <Link
      className={"button button--" + order}
      onClick={onClick}
      to={"/" + location}
    >
      {text}
    </Link>
  ) : (
    <button type={type} className={"button button--" + order} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
