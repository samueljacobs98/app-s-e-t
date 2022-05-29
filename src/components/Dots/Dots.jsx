import "./Dots.scss";
import activeDot from "../../assets/svgs/Icon_Dot-Active.svg";
import inactiveDot from "../../assets/svgs/Icon_Dot-Inactive.svg";

const Dots = ({ dotsArr }) => {
  const dotsJSX = dotsArr.map((dot, index) => (
    <img
      src={dot ? activeDot : inactiveDot}
      alt={dot ? "active" : "inactive"}
      className="dots__dot"
      key={"dot-" + index}
    />
  ));
  return <div className="dots">{dotsJSX}</div>;
};

export default Dots;
