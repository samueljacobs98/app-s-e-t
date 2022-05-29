import "./Navbar.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        Home
      </Link>
      <Link className="navbar__link" to="/about-us">
        About Us
      </Link>
      <Link className="navbar__link" to="/contact-us">
        Contact Us
      </Link>
      <Button text="Log in" order="secondary" />
    </nav>
  );
};

export default Navbar;
