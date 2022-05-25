import { useState } from "react";
import Button from "../Button/Button";
import "./ContactForm.scss";

const ContactForm = () => {
  const [showPhone2] = useState(false);

  const block = "field";

  return (
    <form className="form">
      <fieldset className={block}>
        <legend className={block + "__legend"}>Contact Us</legend>
        <p>
          Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
          aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at
          vix.
        </p>
        <label htmlFor="name">Full name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email address</label>
        <input type="text" name="email" id="email" required />
        <label htmlFor="phone1">
          Phone number 01 <span>- optional</span>
        </label>
        <input type="text" name="phone1" id="phone1" />
        {showPhone2 && (
          <>
            <label htmlFor="phone2">
              Phone number 02 <span>- optional</span>
            </label>
            <input type="text" name="phone2" id="phone2" />
          </>
        )}
        {/* Add button ^^ */}
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <label htmlFor="checkbox">Add address details</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        {/* Add submit button */}
        <Button text="Submit" type="primary" />
      </fieldset>
    </form>
  );
};

export default ContactForm;
