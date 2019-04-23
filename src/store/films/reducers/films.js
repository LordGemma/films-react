import { GET_FILMS } from '../actions/actionTypes';

const initialState = {
    loading: false,
    filmsList: [],
};

export const films = (state = initialState, action) => {
    switch(action.type) {
        case GET_FILMS:
            return {
                ...state,
                filmsList: action.payload
            };
        default:
            return state;
    }
};
