import { useState } from "react";
import Button from "../Button/Button";
import FormAddress from "../FormSubComponents/FormAddress/FormAddress";
import FormConfirmation from "../FormSubComponents/FormConfirmation/FormConfirmation";
import FormDetails from "../FormSubComponents/FormDetails/FormDetails";
import FormHeader from "../FormSubComponents/FormHeader/FormHeader";
import FormPhone from "../FormSubComponents/FormPhone/FormPhone";
import { getBody, postRequest } from "../../utils/fetchUtils";
import "./ContactForm.scss";

const ContactForm = () => {
  const [showPhone2, setShowPhone2] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateShowPhone2 = () => {
    setShowPhone2(true);
  };

  const updateShowAddress = (e) => {
    setShowAddress(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url =
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit";
    const body = getBody(event.target, showAddress);
    const success = postRequest(url, body);

    success
      ? setFormSubmitted(true)
      : alert("Something went wrong... please try again!");
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
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="field">
        <FormHeader />
        {formSubmitted ? (
          <FormConfirmation />
        ) : (
          <>
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
              maxLength="500"
              required
            ></textarea>
            {addressCheckbox}
            {showAddress && <FormAddress />}
            <Button text="Submit" order="primary" type="submit" />
          </>
        )}
      </fieldset>
    </form>
  );
};

export default ContactForm;
