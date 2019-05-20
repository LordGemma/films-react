import React, { Fragment } from 'react';
import { Footer } from '../Footer';
import './Main.scss';
import { Header } from '../Header';
import { FilmsContainer } from '../../Containers/Films';

export const Main = () => (
  <Fragment>
    <Header />
    <main className="main">
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
