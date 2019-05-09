export const GET_SEARCH_RESULT_BEGIN = 'GET_SEARCH_RESULT_BEGIN';
export const GET_SEARCH_RESULT_SUCCESS = 'GET_SEARCH_RESULT_SUCCESS';
export const GET_SEARCH_RESULT_FAILURE = 'GET_SEARCH_RESULT_FAILURE';
export const SET_SEARCH_SETTINGS = 'SET_SEARCH_SETTINGS';

export const fetchSearchBegin = () => ({
    type: GET_SEARCH_RESULT_BEGIN
  });
  
  export const fetchSearchSuccess = list => ({
    type: GET_SEARCH_RESULT_SUCCESS,
    payload: { list }
  });
  
  export const fetchSearchFailure = error => ({
    type: GET_SEARCH_RESULT_FAILURE,
    payload: { error }
  });

  export const setSearchSetting = ({searchBy, searchQuery}) => ({
    type: SET_SEARCH_SETTINGS,
    payload: {
      searchBy,
      searchQuery,
    }
  });