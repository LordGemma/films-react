import React, { Component } from "react";
import _ from "lodash";

import { Film } from "./Film";

export class Films extends Component {
  fetchData() {
    this.props.getFilms();
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.filmsList, prevProps.filmsList)) {
      this.fetchData();
    }
  }

  render() {
    const { error, loading, filmsList } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="films-container">
        <div className="row">
          {filmsList.map(film => (
            <Film key={film.id} film={film} />
          ))}
        </div>
      </div>
    );
  }
}
