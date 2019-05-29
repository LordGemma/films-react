// @flow

import axios from 'axios';
import { baseURL } from '../utils';

axios.defaults.baseURL = baseURL;

export function getFilmsData(params: {}) {
  return axios.get('movies', {
    params,
  });
}

export function getFilmData(filmId: string) {
  return axios.get(`movies/${filmId}`);
}
