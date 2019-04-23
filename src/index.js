import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { configureStore } from './store'
import {  BrowserRouter as Router } from 'react-router-dom';

import App from "./App";

const store = configureStore()

ReactDom.render((
<Provider store={store}>
<Router>
    <App />

    </Router>
</Provider>
), document.getElementById("app"));

module.hot.accept();

