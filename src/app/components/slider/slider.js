import React from "react";
import Slider from "react-slick";

const defaultSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  arrows: true,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SlickSlider = ({ settings, children, merge }) => {
  const settting = settings || defaultSetting;
  return (
    <Slider {...settting} {...merge}>
      {children}
    </Slider>
  );
};

export default SlickSlider;
