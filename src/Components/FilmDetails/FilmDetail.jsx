// @flow

import React, { Fragment, Component } from 'react';
import _ from 'lodash';
import { Footer } from '../Footer';
import FilmHeader from './FilmHeader';
import {
  Poster,
  Title,
  Genres,
  FilmType,
} from '../Films/Film';
import './FilmDetail.scss';

type FilmDetailType = {
  match: any,
  filmData: {
    ...FilmType,
    overview: string,
  },
  getFilm: void,
  error: any,
  loading: boolean,
}

export class FilmDetail extends Component<FilmDetailType> {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { filmData } = this.props;
    if (!_.isEqual(filmData, prevProps.filmData)) {
      this.fetchData();
    }
  }

  fetchData() {
    const {
      match: {
        params: {
          id,
        },
      },
      getFilm,
    } = this.props;
    getFilm(id);
  }

  render() {
    const {
      error,
      loading,
      filmData: {
        id,
        title,
        poster_path,
        release_date,
        genres,
        overview,
      },
    } = this.props;

    if (error) {
      return (
        <div>
Error!
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Fragment>
        <div className="film-content w-100">
          <FilmHeader />
          <div className="container">
            <div className="row">
              <div className="col-4">
                <Poster url={poster_path} filmTitle={title} />
              </div>
              <div className="col-8">
                <div className="card h-100">
                  <div className="card-header">
                    <Title title={title} />
                    <span className="badge">{release_date}</span>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{overview}</p>
                  </div>
                  <div className="card-footer text-muted">
                    {genres && <Genres filmId={id} genres={genres} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="same-genre" />
        <Footer />
      </Fragment>
    );
  }
}
