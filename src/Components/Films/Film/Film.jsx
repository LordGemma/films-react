import React from "react";

import { Genres } from "./Genres";
import { Poster } from "./Poster";
import { Title } from "./Title";
import { Year } from "./Year";
import "./Film.scss";

export const Film = ({ film }) => {
  const { id, title, poster_path, genres, release_date } = film;
  return (
    <div className="col-4">
      <div className="row film">
        <div className="col-12">
          <Poster url={poster_path} filmTitle={title} />
        </div>
        <div className="col-8">
          <Title title={title} />
        </div>
        <div className="col-4">
          <Year date={release_date} />
        </div>
        <div className="col-12 align-self-end">
          <Genres filmId={id} genres={genres} />
        </div>
      </div>
    </div>
  );
};
