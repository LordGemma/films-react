import React from 'react';

export const Sorting = ({
  sortByRating,
  sortByReleaseDate,
  sortFilmsByRating,
  sortFilmsByReleaseDate,
  searchResult,
}) => {
  const ratingClass = sortByRating ? 'btn btn-link btn-sm active' : 'btn btn-link btn-sm';
  const releaseDateClass = sortByReleaseDate ? 'btn btn-link btn-sm active' : 'btn btn-link btn-sm';
  return (
    <div className="sorting">
      <div className="row">
        <div className="col-4">Sort by: </div>
        <div className="col-8">
          <button
            type="button"
            className={releaseDateClass}
            onClick={() => sortFilmsByReleaseDate(searchResult)}
          >
release date
          </button>
          <button
            type="button"
            className={ratingClass}
            onClick={() => sortFilmsByRating(searchResult)}
          >
rating
          </button>
        </div>
      </div>
    </div>
  );
};
