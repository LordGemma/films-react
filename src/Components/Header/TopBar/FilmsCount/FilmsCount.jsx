import React from 'react';

export const FilmsCount = (props) => {
  const filmsCount = props.films.length;
  return (
    <p>
Number of films:
      {filmsCount}
    </p>
  );
};
