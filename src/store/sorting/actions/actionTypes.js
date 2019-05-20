export const SORT_FILMS_BY_RATING = 'SORT_FILMS_BY_RATING';
export const SORT_FILMS_BY_RELEASE_DATE = 'SORT_FILMS_BY_RELEASE_DATE';

export const sortByRating = () => ({
  type: SORT_FILMS_BY_RATING,
});

export const sortByReleaseDate = () => ({
  type: SORT_FILMS_BY_RELEASE_DATE,
});
