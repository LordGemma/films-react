import { getFilmsData } from "../../../services";
import {
  fetchSearchBegin,
  fetchSearchSuccess,
  fetchSearchFailure,
  setSearchSetting,
} from "./actionTypes";

export const getSearchResult = params => {
  return dispatch => {
    dispatch(fetchSearchBegin());
    getFilmsData(params)
      .then(({ data }) => {
        dispatch(setSearchSetting(params));
        dispatch(fetchSearchSuccess(data.data));
      })
      .catch(error => {
        dispatch(fetchSearchFailure(error));
        console.log(error);
      });
  };
};
