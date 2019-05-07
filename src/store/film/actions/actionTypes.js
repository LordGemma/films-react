export const GET_FILM_BEGIN = "GET_FILM_BEGIN";
export const GET_FILM_SUCCESS = "GET_FILM_SUCCESS";
export const GET_FILM_FAILURE = "GET_FILM_FAILURE";

export const fetchFilmBegin = () => ({
    type: GET_FILM_BEGIN
  });
  
  export const fetchFilmSuccess = film => ({
    type: GET_FILM_SUCCESS,
    payload: { film }
  });
  
  export const fetchFilmFailure = error => ({
    type: GET_FILM_FAILURE,
    payload: { error }
  });