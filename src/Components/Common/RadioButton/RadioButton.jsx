import React, { Fragment } from 'react';

export const RadioButton = ({
  text,
  radioGroup,
  value,
  active,
  changed,
}) => (
  <Fragment>
    <input
      type="radio"
      id={`radio${text}`}
      name={radioGroup}
      value={value}
      checked={active}
      onChange={changed}
    />
    <label
      id={`label${text}`}
      htmlFor={`radio${text}`}
    >
      {text}
    </label>
  </Fragment>
);
