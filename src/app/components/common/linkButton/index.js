import React from "react";
import { Link } from "react-router-dom";
import "./linkbutton.scss";

const LinkButton = ({ label, to, className }) => {
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
};

export default LinkButton;
