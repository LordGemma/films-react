import React from 'react';
import './TopBar.scss';
import { FilmsCount } from './FilmsCount';

export const TopBar = (props) => {
    const {
        searchResult,
        filmsList
    } = props;
    const isSearchPage = window.location.pathname.split('/')[1] === 'search';
    const dataStorage = isSearchPage ? searchResult : filmsList;
    return (
        <div className="top-bar">
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <FilmsCount films={dataStorage} />
                    </div>
                    <div className="col-6">sorting block</div>
                </div>
            </div>
        </div>
    );
};