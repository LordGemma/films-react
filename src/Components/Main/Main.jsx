import React from "react";
import "./Main.scss";
import { FilmsContainer } from '../../Containers/Films';

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FilmsContainer />
          </div>
        </div>
      </div>
    </main>
  );
};
