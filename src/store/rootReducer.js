import { combineReducers } from 'redux';
import { filmsReducer as films } from './films/reducers';
import { filmReducer as film } from './film/reducers';
import { searchReducer as search } from './search/reducers';
import { sorting } from './sorting/reducers'

export const rootReducer = combineReducers({
    films,
    search,
    film,
    sorting,
});