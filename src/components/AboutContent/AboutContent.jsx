import "./AboutContent.scss";
import aboutUs from "../../assets/data/aboutUs";
import officeImage from "../../assets/images/office.jpg";

const AboutContent = () => {
  const getClass = (element = "", modifier = "") => {
    const block = "about-content";
    const blockElement = block + element;
    if (modifier.length) {
      return blockElement + " " + blockElement + modifier;
    }
    return blockElement;
  };

  const list = aboutUs[5].map((li) => (
    <li className={getClass("__list-item")} key={li}>
      {li}
    </li>
  ));

  return (
    <div className={getClass()}>
      <h1 className={getClass("__heading")}>About Us</h1>
      <p className={getClass("__text", "--bold")}>{aboutUs[0]}</p>
      <p className={getClass("__text")}>
        {aboutUs[1][0]}
        <span className={getClass("__text", "--highlight")}>
          {aboutUs[1][1]}
        </span>
        {aboutUs[1][2]}
      </p>
      <p className={getClass("__text")}>{aboutUs[2]}</p>
      <img className={getClass("__image")} src={officeImage} alt="our office" />
      <p className={getClass("__text")}>{aboutUs[3]}</p>
      <h2 className={getClass("__title")}>{aboutUs[4]}</h2>
      <ul className={getClass("__list")}>{list}</ul>
      <p className={getClass("__text")}>{aboutUs[6]}</p>
      <p className={getClass("__text")}>{aboutUs[7]}</p>
    </div>
  );
};

export default AboutContent;
