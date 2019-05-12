import _ from 'lodash';
import {
    sortByRating,
    sortByReleaseDate,
} from './actionTypes';

import {
    fetchSearchBegin,
    fetchSearchSuccess,
    fetchSearchFailure,
} from '../../search/actions';

export const sortFilmsByRating = (list) => {
    return (dispatch) => {
        dispatch(fetchSearchBegin());
        dispatch(sortByRating());
        try {
            const sortedByRatingList = _.orderBy(list, ['vote_average'], ['desc']);
            dispatch(fetchSearchSuccess(sortedByRatingList));
        }
        catch(error) {
            dispatch(fetchSearchFailure(error));
        }
        
    }
};

export const sortFilmsByReleaseDate = (list) => {
    return (dispatch) => {
        dispatch(fetchSearchBegin());
        dispatch(sortByReleaseDate());
        try {
            const sortedByReleaseDateList = _.orderBy(list, ['release_date'], ['desc']);
            dispatch(fetchSearchSuccess(sortedByReleaseDateList));
        }
        catch(error) {
            dispatch(fetchSearchFailure(error));
        }
    }
}