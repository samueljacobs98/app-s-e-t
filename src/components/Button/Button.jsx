import "./Button.scss";

const Button = ({ text, type }) => {
  // Button Types:
  //  - Primary
  //  - Secondary
  //  - Nav

  return <button className={"button button--" + type}>{text}</button>;
};

export default Button;
