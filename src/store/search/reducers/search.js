import { 
    GET_SEARCH_RESULT_BEGIN,
    GET_SEARCH_RESULT_SUCCESS,
    GET_SEARCH_RESULT_FAILURE,
    SET_SEARCH_SETTINGS,
 } from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    searchResult: [],
    searchBy: 'title',
    searchQuery: '',
};

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCH_RESULT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_SEARCH_RESULT_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResult: action.payload.list,
            };
            case GET_SEARCH_RESULT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                searchResult: [],
            };
            case SET_SEARCH_SETTINGS:
                return {
                    ...state,
                    searchBy: action.payload.searchBy,
                    searchQuery: action.payload.searchQuery,
                }; 
        default:
            return state;
    }
};