// @flow

import React from 'react';
import './Title.scss';

type TitleType = {
  title: string,
}

const Title = ({ title }: TitleType) => <h3 className="film-title">{title}</h3>;

export default Title;
