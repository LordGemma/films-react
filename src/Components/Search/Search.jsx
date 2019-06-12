// @flow

import React, { Component } from 'react';

import { RadioButton } from '../Common/RadioButton';
import { Button } from '../Common/Button';
import './Search.scss';

type SearchType = {
  match: {
    params: any,
    path: string,
  },
  history: any,
  getFilms: void,
};

export class Search extends Component<SearchType> {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      searchBy: 'title',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params,
      },
    } = this.props;

    const currentLocation = window.location.pathname.split('/')[1];

    if (currentLocation === 'search') {
      this.setState({
        searchQuery: params.searchQuery,
        searchBy: params.searchBy,
      });
    }
  }

  handleChangeSearch(event) {
    const { value } = event.target;
    this.setState({
      searchQuery: value,
    });
  }

  handleChangeSearchBy(event) {
    const { value } = event.target;
    this.setState({
      searchBy: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      history,
      match: {
        path,
      },
      getFilms,
    } = this.props;

    const { searchQuery, searchBy } = this.state;

    if (searchQuery.length) {
      const searchData = {
        searchBy,
        search: searchQuery,
      };

      getFilms(searchData);

      history.push(`/search/${searchQuery}/${searchBy}`);
    }
  }

  render() {
    const {
      searchQuery,
      searchBy,
    } = this.state;
    return (
      <form className="search">
        <div className="form-group">
          <h3>Find your movie</h3>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control search-input"
            value={searchQuery}
            onChange={this.handleChangeSearch}
          />
        </div>
        <div className="row">
          <div className="col-8">
            <span>Search by</span>
            <div className="radio-toolbar">
              <RadioButton
                text="Title"
                radioGroup="search"
                value="title"
                changed={this.handleChangeSearchBy}
                active={searchBy === 'title'}
              />
              <RadioButton
                text="Genre"
                radioGroup="search"
                value="genre"
                changed={this.handleChangeSearchBy}
                active={searchBy === 'genre'}
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
