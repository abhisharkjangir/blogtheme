import React from "react";
import "./select.scss";
import Wrapper from "../wrapper";

const Select = ({
  id,
  type,
  name,
  value,
  onChange,
  label,
  disabled,
  className,
  options
}) => (
  <Wrapper className="mb-3">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
    >
      {options &&
        options.map(op => (
          <option key={op.id} value={op.id}>
            {op.name}
          </option>
        ))}
    </select>
  </Wrapper>
);

export default Select;
