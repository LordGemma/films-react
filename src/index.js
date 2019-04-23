import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { Router } from 'react-router-dom';
import history from './history';

import App from "./App";

const store = configureStore()

ReactDom.render((
<Provider store={store}>
<Router history={history}>
    <App />

    </Router>
</Provider>
), document.getElementById("app"));

module.hot.accept();

