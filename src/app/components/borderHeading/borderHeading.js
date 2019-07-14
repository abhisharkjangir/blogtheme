import React from "react";
import "./borderHeading.scss";
const BorderHeading = ({ text, heading }) => {
  const Heading = heading || 'h2';
  return (
    <div className="heading-wrapper">
      <Heading >{text}</Heading>
    </div>
  );
};

export default BorderHeading;
