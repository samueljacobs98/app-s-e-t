import "./Navbar.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/home">
        Home
      </Link>
      <Link className="navbar__link" to="/about">
        About Us
      </Link>
      <Link className="navbar__link" to="/contact">
        Contact Us
      </Link>
      <Button text="Log in" type="secondary" />
    </nav>
  );
};

export default Navbar;
