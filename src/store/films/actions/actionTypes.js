export const GET_ALL_FILMS_BEGIN = 'GET_ALL_FILMS_BEGIN';
export const GET_ALL_FILMS_SUCCESS = 'GET_ALL_FILMS_SUCCESS';
export const GET_ALL_FILMS_FAILURE = 'GET_ALL_FILMS_FAILURE';

export const FILMS_WITH_SAME_GENRES = 'FILMS_WITH_SAME_GENRES';

export const fetchFilmsBegin = () => ({
  type: GET_ALL_FILMS_BEGIN,
});

export const fetchFilmsSuccess = films => ({
  type: GET_ALL_FILMS_SUCCESS,
  payload: { films },
});

export const fetchFilmsFailure = error => ({
  type: GET_ALL_FILMS_FAILURE,
  payload: { error },
});
