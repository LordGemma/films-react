import React, { Fragment } from "react";

export const RadioButton = ({ text, radioGroup, value, active, changed }) => {
  return (
    <Fragment>
      <input
        type="radio"
        id={`radio${text}`}
        name={radioGroup}
        value={value}
        checked={active}
        onChange={changed}
      />
      <label htmlFor={`radio${text}`}>{text}</label>
    </Fragment>
  );
};
