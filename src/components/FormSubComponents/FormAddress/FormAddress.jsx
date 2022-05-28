import "./FormAddress.scss";

const FormAddress = () => {
  const postcodeValidation =
    "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

  return (
    <div className="address">
      <div className="address__container">
        <div className="address__item">
          <label className="address__label" htmlFor="address-line-1">
            Address line 1
          </label>
          <input
            className="address__input"
            type="text"
            name="address-line-1"
            id="address-line-1"
            required
          />
        </div>
        <div className="address__item">
          <label className="address__label" htmlFor="address-line-2">
            Address line 2 <span>- optional</span>
          </label>
          <input
            className="address__input"
            type="text"
            name="address-line-2"
            id="address-line-2"
          />
        </div>
      </div>
      <div className="address__container-rows">
        <div className="address__container-row">
          <div className="address__item">
            <label className="address__label" htmlFor="city-town">
              City/Town
            </label>
            <input
              className="address__input"
              type="text"
              name="city-town"
              id="city-town"
              required
            />
          </div>
          <div className="address__item">
            <label className="address__label" htmlFor="state-county" required>
              State/County
            </label>
            <input
              className="address__input"
              type="text"
              name="state-county"
              id="state-county"
              required
            />
          </div>
        </div>
        <div className="address__container-row">
          <div className="address__item">
            <label className="address__label" htmlFor="postcode">
              Postcode
            </label>
            <input
              className="address__input"
              type="text"
              name="postcode"
              id="postcode"
              pattern={postcodeValidation}
              title="UK Postcode"
              required
            />
          </div>
          <div className="address__item">
            <label className="address__label" htmlFor="country" required>
              Country
            </label>
            <input
              className="address__input"
              type="text"
              name="country"
              id="country"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddress;
