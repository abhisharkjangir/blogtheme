import React from "react";

import "./checkbox.scss";
import Wrapper from "../wrapper";

const Checkbox = ({
  id,
  name,
  value,
  onChange,
  label,
  disabled,
  className
}) => (
  <Wrapper className="">
    <div className="checkbox-container">
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type="checkbox"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={className}
        />
        <span className="checkmark" />
      </label>
    </div>
  </Wrapper>
);

export default Checkbox;
