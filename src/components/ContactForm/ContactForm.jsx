import { useState } from "react";
import Button from "../Button/Button";
import "./ContactForm.scss";

const ContactForm = () => {
  const [showPhone2, setShowPhone2] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const block = "field";

  const updateShowPhone2 = () => {
    setShowPhone2(true);
  };

  const updateShowAddress = (e) => {
    setShowAddress(e.target.checked);
  };

  const addressJSX = (
    <>
      <div>
        <label htmlFor="address-line-1">Address line 1</label>
        <input type="text" name="address-line-1" id="address-line-1" required />
        <label htmlFor="address-line-2">
          Address line 2 <span>- optional</span>
        </label>
        <input type="text" name="address-line-2" id="address-line-2" />
      </div>
      <div>
        <div>
          <label htmlFor="city-town">City/Town</label>
          <input type="text" name="city-town" id="city-town" required />
          <label htmlFor="state-county" required>
            State/County
          </label>
          <input type="text" name="state-county" id="state-county" />
        </div>
        <div>
          <label htmlFor="postcode">Postcode</label>
          <input type="text" name="postcode" id="postcode" required />
          <label htmlFor="country" required>
            Country
          </label>
          <input type="text" name="country" id="country" />
        </div>
      </div>
    </>
  );

  return (
    <form className="form">
      <fieldset className={block}>
        <legend className={block + "__legend"}>Contact Us</legend>
        <p>
          Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
          aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at
          vix.
        </p>
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email address</label>
          <input type="text" name="email" id="email" required />
        </div>
        <label htmlFor="phone1">
          Phone number 01 <span>- optional</span>
        </label>
        <input type="text" name="phone1" id="phone1" />
        {showPhone2 ? (
          <>
            <label htmlFor="phone2">
              Phone number 02 <span>- optional</span>
            </label>
            <input type="text" name="phone2" id="phone2" />
          </>
        ) : (
          <Button
            text="Add new phone number"
            onClick={updateShowPhone2}
            order="secondary"
          />
        )}
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={updateShowAddress}
          />
          <label htmlFor="checkbox">Add address details</label>
        </div>
        {showAddress && addressJSX}
        <Button text="Submit" order="primary" type="submit" />
      </fieldset>
    </form>
  );
};

export default ContactForm;
