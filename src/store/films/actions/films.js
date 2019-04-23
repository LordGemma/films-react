import { getFilmsData, getFilmData } from '../../../services';
import { GET_ALL_FILMS, GET_FILM } from './actionTypes';
import history from '../../../history';

export const getFilms = () => {
    return (dispatch) => {
        getFilmsData()
        .then(({ data }) => {
            dispatch({
                type: GET_ALL_FILMS,
                payload: data,
            });
        })
        .catch( error => {
            console.log(error);
        } );
    }
};

export const getFilm = (filmId) => {
    return (dispatch) => {
        getFilmData(filmId)
        .then(({ data }) => {
            dispatch({
                type: GET_FILM,
                payload: data,
            });
            history.push(`/film/${filmId}`);
        })
        .catch( error => {
            console.log(error);
        } );
    }
}