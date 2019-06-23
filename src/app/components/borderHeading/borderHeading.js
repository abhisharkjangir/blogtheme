import React from "react";
import "./borderHeading.scss";
const BorderHeading = ({ text }) => {
  return (
    <div className="heading-wrapper">
      <h2 className="heading">{text}</h2>
    </div>
  );
};

export default BorderHeading;
