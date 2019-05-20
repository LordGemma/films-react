import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { loadState } from '../utils';

const persistedState = loadState();

export function configureStore() {
  return createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger,
        reduxImmutableStateInvariant(),
      ),
    ),
  );
}
