import axios from 'axios';

axios.defaults.baseURL = 'https://reactjs-cdp.herokuapp.com/';

export function getFilmsData() {
    return new Promise((resolve, reject) => {
        axios.get(`movies`)
        .then(films => {
            resolve(films.data);
        })
        .catch(error => {
            reject(error);
        });        
    })
}

export function getFilmData(filmId) {
    return axios.get(`movies/${filmId}`);
}