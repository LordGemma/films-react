import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Search } from '../../Components/Search';
import { getSearchResult } from '../../store/search/actions';

const mapStateToProps = (state) => {
  const {
    searchText, searchBy, loading, error,
  } = state.search;
  return {
    searchBy,
    searchText,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getFilms: params => dispatch(getSearchResult(params)),
});

export const SearchContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search),
);
