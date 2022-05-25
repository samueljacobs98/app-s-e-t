import "./Header.scss";
import logo from "../../assets/svgs/Logo.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <nav className="header">
      <img className="header__logo" src={logo} alt="company logo" />
      <Navbar />
    </nav>
  );
};

export default Header;
