import React, { Component } from "react";
import _ from 'lodash';

import { Film } from "./Film";

export class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    this.props.getFilms();
  }  

  componentDidUpdate() {
    if(!_.isEqual(this.state.films, this.props.filmsList)) {
      this.setState({
        films: this.props.filmsList
      })
    }
  }

  render() {
    return (
      <div className="films-container">
        <div className="row">
          {this.state.films.length ? (
            this.state.films.map(film => {
              return <Film key={film.id} film={film} />;
            })
          ) : (
            <div>No films found</div>
          )}
        </div>
      </div>
    );
  }
}
