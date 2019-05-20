import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Common/Logo';

const FilmHeader = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 d-flex justify-content-between">
        <Logo />
        <Link to="/">Search</Link>
      </div>
    </div>
  </div>
);

export default FilmHeader;
