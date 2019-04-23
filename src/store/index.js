import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger,
        reduxImmutableStateInvariant()
      )
    )
  )
};