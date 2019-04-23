import React, { Fragment } from 'react';
import { Footer } from '../Footer';
import FilmHeader from './FilmHeader';
import { Poster, Title } from '../Films/Film';
import './FilmDetail.scss';

export const FilmDetail = ({ filmData, sameFilmsByGenre }) => {
    const { id, title, poster_path, genres, release_date } = filmData;
    return (
        <Fragment>
            <div className='film-content w-100'>
                <FilmHeader />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Poster url={poster_path} filmTitle={title}/>
                        </div>
                        <div className="col-8">
                            <Title title={title} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="same-genre">

            </div>
            <Footer />
        </Fragment>
    );
};