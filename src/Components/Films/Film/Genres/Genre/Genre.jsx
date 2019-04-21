import React from "react";
import "./Genre.scss";

const Genre = ({ genre }) => {
  return <span className="genre badge badge-secondary">{genre}</span>;
};

export default Genre;
