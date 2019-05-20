import { getFilmsData } from '../../../services';

import {
  fetchFilmsBegin,
  fetchFilmsSuccess,
  fetchFilmsFailure,
} from './actionTypes';

export const getFilms = (params = {}) => (dispatch) => {
  dispatch(fetchFilmsBegin());
  getFilmsData(params)
    .then(({ data }) => {
      dispatch(fetchFilmsSuccess(data.data));
    })
    .catch((error) => {
      dispatch(fetchFilmsFailure(error));
    });
};
