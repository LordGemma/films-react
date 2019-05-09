import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";

import { Main } from "./Components/Main";
import { FilmContainer } from "./Containers/Films/FilmContainer";
import { SearchContainer } from "./Containers/Search/SearchContainer";
import { NotFound } from "./Components/404";

class App extends Component {
  render() {
    return (
      <div className="entry-point">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/film/:id" component={FilmContainer} />
            <Route path="/search/:searchQuery/:searchBy" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
