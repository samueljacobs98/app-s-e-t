import "./FormDetails.scss";
import FormPhone from "../FormPhone/FormPhone";

const FormDetails = () => {
  return (
    <>
      <div className="details">
        <div className="details__container">
          <label className="details__label" htmlFor="name">
            Full name
          </label>
          <input
            className="details__input"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="details__container">
          <label className="details__label" htmlFor="email">
            Email address
          </label>
          <input
            className="details__input"
            type="text"
            name="email"
            id="email"
            required
          />
        </div>
      </div>
      <FormPhone n="1" />
    </>
  );
};

export default FormDetails;
