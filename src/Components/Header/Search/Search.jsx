import React, { Component } from "react";

import { RadioButton } from "../../Common/RadioButton";
import { Button } from "../../Common/Button";
import "./Search.scss";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      searchBy: "title"
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params,
      }
    } = this.props;

    const currentLocation = window.location.pathname.split('/')[1];

    if(currentLocation === 'search') {
      this.setState({
        searchQuery: params.searchQuery,
        searchBy: params.searchBy,
      })
    }
  }

  handleChangeSearch(event) {
    const value = event.target.value;
    this.setState({
      searchQuery: value
    });
  }

  handleChangeSearchBy(event) {
    const value = event.target.value;
    this.setState({
      searchBy: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      history,
      match: {
        path
      },
      getFilms
    } = this.props;

    const { searchQuery, searchBy } = this.state;

    const searchData = {
      searchBy: searchBy,
      search: searchQuery
    };

    getFilms(searchData);

    history.push(`/search/${searchQuery}/${searchBy}`);

    this.setState({
      searchQuery: "",
      searchBy: "title"
    });
  }

  render() {
    return (
      <form className="search">
        <div className="form-group">
          <h3>Find your movie</h3>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control search-input"
            value={this.state.searchQuery}
            onChange={this.handleChangeSearch}
          />
        </div>
        <div className="row">
          <div className="col-8">
            <span>Sort by</span>
            <div className="radio-toolbar">
              <RadioButton
                text="Title"
                radioGroup="search"
                value="title"
                changed={this.handleChangeSearchBy}
                active={this.state.searchBy === "title"}
              />
              <RadioButton
                text="Genre"
                radioGroup="search"
                value="genre"
                changed={this.handleChangeSearchBy}
                active={this.state.searchBy === "genre"}
              />
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-end">
            <Button text="Search" type="submit" clicked={this.handleSubmit} />
          </div>
        </div>
      </form>
    );
  }
}
