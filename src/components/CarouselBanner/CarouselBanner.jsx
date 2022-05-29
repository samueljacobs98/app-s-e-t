import { useEffect, useState } from "react";
import "./CarouselBanner.scss";
import Button from "../Button/Button";
import { getRequest } from "../../utils/fetchUtils";
import { getBooleanArray, getNewSlide } from "../../utils/utils";
import Pagniation from "../Pagination/Pagniation";
import Dots from "../Dots/Dots";

const CarouselBanner = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dotsArr, setDotsArr] = useState([]);

  const getData = async () => {
    const url =
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";
    const newData = await getRequest(url);
    setData(newData.Details);
    setDotsArr(getBooleanArray(newData.Details.length, 0));
  };

  const handleClick = (e) => {
    const newSlide = getNewSlide(e.target.value === "1", data, currentSlide);
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const length = data.length;
    const slide = currentSlide;

    const newDotsArr = getBooleanArray(length, slide);

    setDotsArr(newDotsArr);
  }, [currentSlide, data]);

  useEffect(() => {
    getData();
  }, []);

  const slides = data.map((slide, index) => {
    return (
      <div
        key={"slide" + index}
        className="slide"
        style={{ backgroundImage: `url(${slide.ImageUrl})` }}
      >
        <div className="slide__info">
          <h1 className="slide__info-header">{slide.Title}</h1>
          <p className="slide__info-text">{slide.Subtitle}</p>
          <Button
            text="Contact us"
            order="primary"
            link={true}
            location={"contact-us"}
          />
        </div>
        <Pagniation handleClick={handleClick} />
        <Dots dotsArr={dotsArr} />
        <div className="slide__overlay"></div>
      </div>
    );
  });

  return <>{slides[currentSlide]}</>;
};

export default CarouselBanner;
