import {
  GET_ALL_FILMS_BEGIN,
  GET_ALL_FILMS_SUCCESS,
  GET_ALL_FILMS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  filmsList: [],
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FILMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ALL_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        filmsList: action.payload.films
      };
    case GET_ALL_FILMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        filmsList: []
      };
    default:
      return state;
  }
};
