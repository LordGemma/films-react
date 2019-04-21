import { combineReducers } from 'redux';
import { films } from './films/reducers';

export const rootReducer = combineReducers({
    films
});