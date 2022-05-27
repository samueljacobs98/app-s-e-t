import "./FormPhone.scss";

const FormPhone = ({ n }) => {
  return (
    <>
      <label className="phone__label" htmlFor={"phone" + n}>
        {`Phone number 0${n} `}
        <span>- optional</span>
      </label>
      <input
        className="phone__input"
        type="text"
        name={"phone" + n}
        id={"phone" + n}
      />
    </>
  );
};

export default FormPhone;
