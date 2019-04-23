import React, { Fragment } from 'react';
import { Footer } from '../Footer';
import FilmHeader from './FilmHeader';

const FilmDetail = ({ film, sameFilmsByGenre }) => {
    return (
        <Fragment>
            <div className='film-content'>
                <FilmHeader />
                <div className="container">

                </div>
            </div>
            <div className="same-genre">

            </div>
            <Footer />
        </Fragment>
    );
};

export default FilmDetail;