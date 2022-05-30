import { Link } from "react-router-dom";
import "./Button.scss";
import buttonIcon from "../../assets/svgs/Icon_Submit.svg";

const Button = ({
  text,
  order,
  onClick,
  link = false,
  type = "button",
  location = "home",
}) => {
  const getClassName = () => {
    let name = "button button--" + order;
    if (type === "submit") {
      name += " button--submit";
    }
    return name;
  };

  return link ? (
    <Link className={getClassName()} onClick={onClick} to={"/" + location}>
      {text}
    </Link>
  ) : (
    <button type={type} className={getClassName()} onClick={onClick}>
      {type === "submit" && (
        <img className="button__icon" src={buttonIcon} alt="submit" />
      )}
      {text}
    </button>
  );
};

export default Button;
