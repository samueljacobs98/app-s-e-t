import Button from "../Button/Button";
import learnBanner from "../../assets/data/learnBanner";
import image from "../../assets/images/office.jpg";
import "./LearnBanner.scss";

const LearnBanner = () => {
  const getClass = (element = "", modifier = "") => {
    const block = "learn-banner";
    const blockElement = block + element;
    if (modifier.length) {
      return blockElement + " " + blockElement + modifier;
    }
    return blockElement;
  };

  const list = learnBanner[2].map((li) => (
    <li className={getClass("__container-list-item")} key={li}>
      {li}
    </li>
  ));

  return (
    <section className={getClass()}>
      <img className={getClass("__image")} src={image} alt="" />
      <div className={getClass("__container")}>
        <h2 className={getClass("__container-heading")}>{learnBanner[0]}</h2>
        <p className={getClass("__container-text")}>{learnBanner[1]}</p>
        <ul className={getClass("__container-list")}>{list}</ul>
        <Button
          text={"Learn more"}
          order={"primary"}
          link={true}
          location={"about-us"}
        />
      </div>
    </section>
  );
};

export default LearnBanner;
