import React from 'react';
import './TopBar.scss';
import { FilmsCount } from './FilmsCount';
import { Sorting } from './Sorting';

export const TopBar = (props) => {
  const {
    searchResult,
  } = props;
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <FilmsCount films={searchResult} />
          </div>
          <div className="col-4">
            <Sorting {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
