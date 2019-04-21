import React, { Component } from "react";

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

  componentDidUpdate(prevProps, prevState) {
    this.setState({
      films: this.props.filmsList
    })
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
            <div>Nothing was found!</div>
          )}
        </div>
      </div>
    );
  }
}
