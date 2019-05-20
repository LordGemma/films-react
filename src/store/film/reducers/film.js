import {
  GET_FILM_BEGIN,
  GET_FILM_SUCCESS,
  GET_FILM_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  filmData: {},
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        filmData: action.payload.film,
      };
    case GET_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        filmData: {},
      };
    default:
      return state;
  }
};
