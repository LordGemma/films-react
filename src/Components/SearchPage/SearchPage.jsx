import React, { Fragment } from 'react';
import { Footer } from '../Footer';
import './SearchPage.scss';
import { Header } from '../Header';
import { FilmsContainer } from '../../Containers/Films';

export const SearchPage = () => (
  <Fragment>
    <Header />
    <main className="search-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FilmsContainer />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </Fragment>
);
