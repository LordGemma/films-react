import { connect } from "react-redux";
import { Search } from "../../Components/Header/Search";
import { getSearchResult } from "../../store/search/actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const { searchText, searchBy, loading, error } = state.search;
  return {
    searchBy,
    searchText,
    loading,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilms: params => dispatch(getSearchResult(params))
  };
};

export const SearchContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
