import { GET_ALL_FILMS, GET_FILM } from '../actions/actionTypes';

const initialState = {
    loading: false,
    filmsList: [],
    filmData: {},
};

export const films = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_FILMS:
            return {
                ...state,
                filmsList: action.payload
            };
        case GET_FILM: 
            return {
                ...state,
                filmData: action.payload
            }
        default:
            return state;
    }
};
