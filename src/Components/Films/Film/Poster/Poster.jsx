import React from "react";

import "./Poster.scss";

export const Poster = ({ url, filmTitle, clicked }) => {
  return (
    <figure onClick={clicked} className="film-poster figure">
            <img className="figure-img img-fluid" src={url} alt={`${filmTitle} poster`} />
    </figure>
  );
};
