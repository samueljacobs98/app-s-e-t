import Button from "../Button/Button";
import "./ContactBanner.scss";
import contactBanner from "../../assets/data/contactBanner";
import { Fragment } from "react";

const ContactBanner = () => {
  const block = "contact-banner";

  const text = contactBanner[2].map((para) => {
    return (
      <Fragment key={para}>
        {para}
        <br />
        <br />
      </Fragment>
    );
  });

  return (
    <section className={block}>
      <h2 className={block + "__heading"}>{contactBanner[0]}</h2>
      <h3 className={block + "__subheading"}>{contactBanner[1]}</h3>
      <p className={block + "__text"}>{text}</p>
      <Button
        text="Contact us"
        order="primary"
        link={true}
        location={"contact"}
      />
    </section>
  );
};

export default ContactBanner;
