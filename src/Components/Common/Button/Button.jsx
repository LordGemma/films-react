import React from "react";
import "./Button.scss";

export const Button = ({ text, buttonClass, type, clicked }) => {
  const bClass = buttonClass || '';
  return (
    <button className={`button ${bClass}`} type={type} onClick={clicked}>
      {text}
    </button>
  );
};
