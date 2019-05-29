// @flow

import React, { Fragment } from 'react';

type RadioButtonType = {
  text: string,
  radioGroup: string,
  value: string,
  active: boolean,
  changed: void,
}

export const RadioButton = ({
  text,
  radioGroup,
  value,
  active,
  changed,
}: RadioButtonType) => (
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
