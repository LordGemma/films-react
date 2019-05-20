import {
  SORT_FILMS_BY_RATING,
  SORT_FILMS_BY_RELEASE_DATE,
} from '../actions/actionTypes';

const initialState = {
  sortByRating: false,
  sortByReleaseDate: false,
};

export const sorting = (state = initialState, action) => {
  switch (action.type) {
    case SORT_FILMS_BY_RATING:
      return {
        ...state,
        sortByRating: true,
        sortByReleaseDate: false,
      };
    case SORT_FILMS_BY_RELEASE_DATE:
      return {
        ...state,
        sortByRating: false,
        sortByReleaseDate: true,
      };
    default:
      return state;
  }
};
