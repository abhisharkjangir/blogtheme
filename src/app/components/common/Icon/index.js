import React from "react";

const Icon = ({ name, className }) => {
  return <i className={`icon-${name} ${className ? className : ""}`} />;
};

export default Icon;
