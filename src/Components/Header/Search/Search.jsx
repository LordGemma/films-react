import React, { Component } from "react";

import { RadioButton } from "../../Common/RadioButton";
import { Button } from "../../Common/Button";
import { getSearchResult } from "../../../services";
import "./Search.scss";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      searchBy: "title"
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSearch(event) {
    const value = event.target.value;
    this.setState({
      searchText: value
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
    const { searchText, searchBy } = this.state;
    const searchData = {
      search: searchText,
      searchBy: searchBy,
    };
    console.log(searchData);
    this.props.getFilms(searchData);
    this.setState({
      searchText: "",
      searchBy: "title"
    })
    this.props.history.push(`search/${searchText}`);
  }

  render() {
    return (
      <form className='search'>
        <div className="form-group">
          <h3>Find your movie</h3>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control search-input"
            value={this.state.searchText}
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
