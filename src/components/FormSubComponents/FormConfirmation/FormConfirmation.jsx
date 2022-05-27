import "./FormConfirmation.scss";
import tick from "../../../assets/svgs/Icon_Valid.svg";

const FormConfirmation = () => {
  return (
    <div className="confirm">
      <img className="confirm__image" src={tick} alt="submission confirmed" />
      <h3 className="confirm__header">Your message has been sent</h3>
      <p>We will be in contact with you within 24 hours.</p>
    </div>
  );
};

export default FormConfirmation;
