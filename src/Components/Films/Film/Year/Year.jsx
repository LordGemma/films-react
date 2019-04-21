import React from "react";

export const Year = ({ date }) => {
  const year = new Date(date).getFullYear();
  return <p className='badge badge-light'>{year}</p>;
};
