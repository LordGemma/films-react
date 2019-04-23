import React, { Component } from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss'
import './App.scss';

import { Main } from './Components/Main';
import { NotFound } from './Components/404';


class App extends Component {
  render() {
    return (
      <div className="entry-point">
          <Switch>
            <Route path="/" exact component={ Main } />              
            <Route component={ NotFound } />
          </Switch>
      </div>
    );
  }
}

export default App;