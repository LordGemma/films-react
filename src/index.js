import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App';
import { saveState } from './utils';

const store = configureStore();
store.subscribe(() => {
  saveState(store.getState());
});

ReactDom.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));

module.hot.accept();
