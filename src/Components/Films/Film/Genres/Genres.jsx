import React from "react";
import Genre from "./Genre/Genre";

export const Genres = ({ filmId, genres }) => (
  <div className="genres">
    {genres.map(genre => (
      <Genre key={`${filmId}-${genre}`} genre={genre} />
    ))}
  </div>
);
