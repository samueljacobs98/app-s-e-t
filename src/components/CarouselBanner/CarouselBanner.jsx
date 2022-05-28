import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import "./CarouselBanner.scss";
import Button from "../Button/Button";
import { getRequest } from "../../utils/fetchUtils";

const CarouselBanner = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const url =
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";
    const newData = await getRequest(url);
    setData(newData.Details);
    return newData.Details;
  };

  useEffect(() => {
    getData();
  }, []);

  const slides = data.map((slide, index) => {
    return (
      <SwiperSlide
        key={"slide" + index}
        className={"slide slide-" + index}
        style={{ backgroundImage: `url(${slide.ImageUrl})` }}
      >
        <div className="slide-info">
          <h1 className="slide-info__header">{slide.Title}</h1>
          <p className="slide-info__text">{slide.Subtitle}</p>
          <Button
            text="Contact us"
            order="primary"
            link={true}
            location={"contact"}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      {data && (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="carousel"
        >
          {slides}
        </Swiper>
      )}
    </>
  );
};

export default CarouselBanner;
