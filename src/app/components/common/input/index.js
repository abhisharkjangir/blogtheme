import React from "react";
import './input.scss';
import Wrapper from "../wrapper";

const Input = ({
  id,
  type,
  name,
  value,
  onChange,
  label,
  disabled,
  className
}) => (
  <Wrapper className='mb-3'>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
    />
  </Wrapper>
);

export default Input;
