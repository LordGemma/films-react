import React, { Fragment } from "react";
import { Header } from '../Header';
import { Footer } from '../Footer';
import "./Main.scss";
import { HeaderContainer } from '../../Containers/Header';
import { FilmsContainer } from '../../Containers/Films';
import { TopBar } from './TopBar';

export const Main = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <TopBar />
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
};
