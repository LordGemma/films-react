import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import { Main } from './Components/Main';
import { FilmContainer } from './Containers/Films/FilmContainer';
import { SearchPage } from './Components/SearchPage';
import { NotFound } from './Components/404';

class App extends PureComponent {
  render() {
    return (
      <div className="entry-point">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/film/:id" component={FilmContainer} />
            <Route path="/search/:searchQuery/:searchBy" component={SearchPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
