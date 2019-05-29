// @flow

import React, { PureComponent } from 'react';
import Genre from './Genre/Genre';

type GenresType = {
  filmId: string,
  genres: number[],
}

class Genres extends PureComponent<GenresType> {
  render() {
    const {
      filmId,
      genres,
    } = this.props;
    return (
      <div className="genres">
        {genres.map(genre => (
          <Genre key={`${filmId}-${genre}`} genre={genre} />
        ))}
      </div>
    );
  }
}

export default Genres;
