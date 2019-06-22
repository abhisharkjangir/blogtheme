import React from "react";

const Form = ({autoComplete,children}) => (
  <form autoComplete={autoComplete}>
    {children}
  </form>
);

export default Form;
