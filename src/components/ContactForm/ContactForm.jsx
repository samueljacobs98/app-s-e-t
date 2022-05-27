import { useState } from "react";
import Button from "../Button/Button";
import FormAddress from "../FormSubComponents/FormAddress/FormAddress";
import FormDetails from "../FormSubComponents/FormDetails/FormDetails";
import FormHeader from "../FormSubComponents/FormHeader/FormHeader";
import FormPhone from "../FormSubComponents/FormPhone/FormPhone";
import "./ContactForm.scss";

const ContactForm = () => {
  const [showPhone2, setShowPhone2] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const updateShowPhone2 = () => {
    setShowPhone2(true);
  };

  const updateShowAddress = (e) => {
    setShowAddress(e.target.checked);
  };

  const addressCheckbox = (
    <div className="field__checkbox">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={updateShowAddress}
      />
      <label htmlFor="checkbox">Add address details</label>
    </div>
  );

  return (
    <form className="form">
      <fieldset className="field">
        <FormHeader />
        <FormDetails />
        {showPhone2 ? (
          <FormPhone n={2} />
        ) : (
          <Button
            text="Add new phone number"
            onClick={updateShowPhone2}
            order="secondary"
          />
        )}
        <label className="field__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="field__text-area"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        {addressCheckbox}
        {showAddress && <FormAddress />}
        <Button text="Submit" order="primary" type="submit" />
      </fieldset>
    </form>
  );
};

export default ContactForm;
