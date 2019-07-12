import React from "react";

const Image = ({ src, alt, className, width, height }) => {
  return <img src={src} alt={alt} className={className ? className : ""} width={width} height={height} />;
};

export default Image;
