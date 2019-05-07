import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadState, saveState } from './utils';

import App from "./App";

const persistedState = loadState();

const store = configureStore();
store.subscribe(() => {
    saveState(store.getState());
})

ReactDom.render((
<Provider store={store}>
    <App />
</Provider>
), document.getElementById("app"));

module.hot.accept();

