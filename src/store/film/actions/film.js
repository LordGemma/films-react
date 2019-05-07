import {  
    getFilmData,
} from '../../../services';

import { 
    fetchFilmBegin,
    fetchFilmSuccess,
    fetchFilmFailure
 } from './actionTypes';

export const getFilm = (filmId) => {
    return (dispatch) => {
        dispatch(fetchFilmBegin());
        getFilmData(filmId)
        .then(({ data }) => {
            dispatch(fetchFilmSuccess(data));
        })
        .catch( error => {
            dispatch(fetchFilmFailure(error));
            console.log(error);
        } );
    }
}