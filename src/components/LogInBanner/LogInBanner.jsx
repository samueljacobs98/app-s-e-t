import Button from "../Button/Button";
import "./LogInBanner.scss";
import logIn from "../../assets/data/logInBanner";

const LogInBanner = () => {
  const block = "log-in-banner";

  return (
    <section className={block}>
      <article className={block + "__container"}>
        <h2 className={block + "__container-heading"}>{logIn[0]}</h2>
        <p className={block + "__container-text"}>{logIn[1]}</p>
        <Button text="Log in" type="secondary" />
      </article>
    </section>
  );
};

export default LogInBanner;
