import "./Pagination.scss";
import arrow from "../../assets/svgs/Icon_Arrow.svg";

const Pagniation = ({ handleClick }) => {
  return (
    <div className="pagination">
      <button
        id="previous-slide"
        className="pagination__btn"
        value={"-1"}
        onClick={handleClick}
      >
        <img
          className="pagination__btn-arrow pagination__btn-arrow--1"
          src={arrow}
          alt="left arrow"
        />
      </button>
      <button
        id="next-slide"
        className="pagination__btn pagination__btn-flip"
        value={"1"}
        onClick={handleClick}
      >
        <img className="pagination__btn-arrow" src={arrow} alt="left arrow" />
      </button>
    </div>
  );
};

export default Pagniation;
