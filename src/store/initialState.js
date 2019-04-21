export const initialState =  {
    search: {
        loading: false,
        query: '',
        searchBy: 'title',
    },
    filmsData: {
        loading: false,
        filmsList: [],
    },
    filmData: {
        loading: false,
        film: {}
    },
    sorting: {
        loading: false,
        sortingBy: 'asc'
    },
  };