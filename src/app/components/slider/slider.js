import React from "react";
import Slider from "react-slick";

const defaultSetting = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  arrows: true
};

const SlickSlider = ({ settings, children, merge }) => {
  const settting = settings || defaultSetting;
  return (
    <Slider {...settting} {...merge}>
      {" "}
      {children}{" "}
    </Slider>
  );
};

export default SlickSlider;
