import React, { Fragment } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const NotFound = () => {
    return (
        <Fragment>
            <Header />
            <div className='d-flex align-items-center'>
                <h3 className='d-flex justify-content-center'>No films found</h3>
            </div>
            <Footer />
        </Fragment>
    );
};