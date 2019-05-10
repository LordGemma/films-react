import React, { Component } from "react";
import _ from "lodash";

import { Film } from "./Film";

export class Films extends Component {
  fetchData() {
    const isSearchPage = window.location.pathname.split('/')[1] === 'search';
    const {
      match: {
        params: {
          searchBy,
          searchQuery
        }
      },
    } = this.props;
    const searchParams = isSearchPage ? {searchBy, searchQuery} : {};
    this.props.getFilms(searchParams);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const isSearchPage = window.location.pathname.split('/')[1] === 'search';
    const dataStorage = isSearchPage ? 'searchResult' : 'filmsList';
    if (!_.isEqual(this.props[dataStorage], prevProps[dataStorage])) {
      this.fetchData();
    }
  }

  render() {
    const { error, loading, filmsList, searchResult } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    const isSearchPage = window.location.pathname.split('/')[1] === 'search';
    const dataStorage = isSearchPage ? searchResult : filmsList;

    return (
      <div className="films-container">
        <div className="row">
          {dataStorage.map(film => (
            <Film key={film.id} film={film} />
          ))}
        </div>
      </div>
    );
  }
}
