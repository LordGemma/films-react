// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Genres from './Genres';
import Poster from './Poster';
import Title from './Title';
import Year from './Year';
import './Film.scss';

export type FilmType = {
  film: {
    id: string,
    title: string,
    poster_path: string,
    genres: string[],
    release_date: string,
  },
  clicked?: void,
}

class Film extends PureComponent<FilmType> {
  static defaultProps = {
    clicked: () => null,
  };

  render() {
    const {
      film: {
        id,
        title,
        poster_path,
        genres,
        release_date,
      },
      clicked,
    } = this.props;
    return (
      <div className="col-4">
        <div className="row film">
          <div className="col-12">
            <Link to={`/film/${id}`}>
              <Poster
                clicked={clicked}
                url={poster_path}
                filmTitle={title}
              />
            </Link>
          </div>
          <div className="col-8">
            <Link to={`/film/${id}`}>
              <Title title={title} />
            </Link>
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
  }
}

export default Film;
