import { combineReducers } from 'redux';
import { films } from './films/reducers';
import { search } from './search/reducers';

export const rootReducer = combineReducers({
    films,
    search,
});