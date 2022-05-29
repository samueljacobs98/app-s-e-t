import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/svgs/Logo.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <Link className="navbar__link" to="/">
        <img className="header__logo" src={logo} alt="company logo" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
