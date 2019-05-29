// @flow

import React from 'react';

import './Poster.scss';

type PosterType = {
  url: string,
  filmTitle: string,
}

const Poster = ({ url, filmTitle }: PosterType) => (
  <figure className="film-poster figure">
    <img className="figure-img img-fluid" src={url} alt={`${filmTitle} poster`} />
  </figure>
);

export default Poster;
