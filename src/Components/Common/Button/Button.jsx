import React from "react";
import "./Button.scss";

export const Button = ({ text, buttonClass, type, clicked }) => {
  return (
    <button className={`button ${buttonClass}`} type={type} onClick={clicked}>
      {text}
    </button>
  );
};
