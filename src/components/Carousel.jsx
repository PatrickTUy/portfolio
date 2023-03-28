import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({slidesToShow, slidesToScroll, style, children}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div >
      <Slider {...settings} className={`${style}`}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
