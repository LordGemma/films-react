import React, { Component, Fragment } from "react";
import 'bootstrap/scss/bootstrap.scss'
import './App.scss';

import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div className="entry-point">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;