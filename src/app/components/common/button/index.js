import React from "react";
import "./button.scss";
/**
 * Button Variations
 * Size : Small(btn-xs) Medium(btn-md) Large(btn-lg)
 */

const Button = ({ label, type, onClick, className, disabled, variations }) => {
  let btnClass = "";
  if (className) {
    btnClass = className;
  }

  if (variations) {
    btnClass = `${btnClass} ${variations}`;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={btnClass}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
