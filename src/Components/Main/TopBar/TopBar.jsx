import React from 'react';
import './TopBar.scss';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className='container'>
                <div className="row">
                    <div className="col-6">number of films</div>
                    <div className="col-6">sorting block</div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;