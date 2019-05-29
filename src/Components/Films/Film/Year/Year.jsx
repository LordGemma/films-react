// @flow

import React from 'react';

type YearType = {
  date: string
}

const Year = ({ date }: YearType) => {
  const year = new Date(date).getFullYear();
  return <p className="badge badge-light">{year}</p>;
};

export default Year;
