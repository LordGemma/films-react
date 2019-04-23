import { GET_SEARCH_RESULT } from '../actions/actionTypes';

const initialState = {
    loading: false,
    searchResult: [],
};

export const search = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload
            };
        default:
            return state;
    }
};