import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/svgs/Logo.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <nav className="header">
      <Link className="navbar__link" to="/home">
        <img className="header__logo" src={logo} alt="company logo" />
      </Link>
      <Navbar />
    </nav>
  );
};

export default Header;
