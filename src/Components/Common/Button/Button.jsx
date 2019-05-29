// @flow

import React from 'react';
import './Button.scss';

type ButtonType = {
  text: string,
  buttonClass: string,
  type: string,
  clicked: void,
}

export const Button = ({
  text,
  buttonClass,
  type,
  clicked,
}: ButtonType) => {
  const bClass = buttonClass || '';
  return (
    <button
      className={`button ${bClass}`}
      type={type}
      onClick={clicked}
    >
      {text}
    </button>
  );
};
