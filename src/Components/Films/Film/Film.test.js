import React from 'react';
import { shallow } from 'enzyme';
import Film from './Film';

describe('Film component', () => {
  const film = {
    id: 412302,
    title: 'Gemini',
    release_date: '2018-03-30',
    poster_path: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg',
    genres: ['Mystery', 'Thriller'],
  };

  it('renders', () => {
    const wrapper = shallow(<Film film={film} />);

    expect(wrapper.exists()).toBe(true);
  });
});
