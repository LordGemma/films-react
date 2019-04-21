import { getFilmsData } from '../../../services';
import { GET_FILMS } from './actionTypes';

export const getFilms = () => {
    return (dispatch) => {
        getFilmsData()
        .then(({ data }) => {
            dispatch({
                type: GET_FILMS,
                payload: data,
            });
        })
        .catch( error => {
            console.log(error);
        } );
        
    }
};