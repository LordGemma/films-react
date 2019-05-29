// @flow

import React from 'react';
import './Logo.scss';

export const Logo = ({ title }: string) => (
  <div className="logo">
    <p>{title || 'netflixroulette'}</p>
  </div>
);
