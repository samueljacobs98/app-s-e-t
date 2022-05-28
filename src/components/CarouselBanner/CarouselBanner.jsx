import "./CarouselBanner.scss";
// import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

import Button from "../Button/Button";

const CarouselBanner = () => {
  const data = [
    { title: "title 1", text: "text 1" },
    { title: "title 2", text: "text 2" },
  ];
  const slides = data.map((slide, index) => (
    <SwiperSlide key={"slide" + index} className={"slide slide-" + index}>
      <div className="slide-info">
        <h1 className="slide-info__header">{slide.title}</h1>
        <p className="slide-info__text">{slide.text}</p>
        <Button
          text="Contact us"
          order="primary"
          link={true}
          location={"contact"}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <>
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
    </>
  );
};

export default CarouselBanner;
