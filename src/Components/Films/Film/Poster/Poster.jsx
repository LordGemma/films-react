import React from "react";

import "./Poster.scss";

export const Poster = ({ url, filmTitle }) => {
  return (
    <figure className="film-poster figure">
        <a href="#">
            <img className="figure-img img-fluid" src={url} alt={`${filmTitle} poster`} />
        </a>
    </figure>
  );
};
