import React from "react";
import "./loader.scss";
const Loader = ({ value, message }) => {
  return value ? (
    <div className="loader">{message || "Loading... Please wait!"}</div>
  ) : null;
};

export default Loader;
