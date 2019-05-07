import { GET_SEARCH_RESULT } from '../actions/actionTypes';

const initialState = {
    loading: false,
    searchResult: [],
    searchBy: 'title',
    searchQuery: '',
};

export const searchReducer = (state = initialState, action) => {
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