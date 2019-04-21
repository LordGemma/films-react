import { GET_FILMS } from '../actions/actionTypes';
import { initialState } from '../../initialState';

const { filmsData } = initialState;

export const films = (state = filmsData, action) => {
    switch(action.type) {
        case GET_FILMS:
            return {
                ...state,
                filmsData: {
                    ...filmsData,
                    filmsList: action.payload
                }
            };
        default:
            return state;
    }
};
