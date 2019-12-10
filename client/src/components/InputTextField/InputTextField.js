import React from "react";
import "./InputTextField.css";

const InputTextField = props => {
  let { variation = "default", type, name, placeholder, onChange } = props;

  return (
    <input
      className={`InputTextField__container--${variation}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputTextField;
