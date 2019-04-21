import React from 'react';

import './title.scss';

export const Title = ({ title }) => {
    return (
        <h3 className='film-title'><a href="#">{title}</a></h3>
    );
};