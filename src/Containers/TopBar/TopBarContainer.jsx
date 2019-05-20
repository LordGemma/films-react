import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TopBar } from '../../Components/Header/TopBar';
import {
  sortFilmsByRating,
  sortFilmsByReleaseDate,
} from '../../store/sorting/actions';

const mapStateToProps = (state) => {
  const { searchResult } = state.search;
  const {
    sortByReleaseDate,
    sortByRating,
  } = state.sorting;
  return {
    searchResult,
    sortByReleaseDate,
    sortByRating,
  };
};

const mapDispatchToProps = dispatch => ({
  sortFilmsByRating: list => dispatch(sortFilmsByRating(list)),
  sortFilmsByReleaseDate: list => dispatch(sortFilmsByReleaseDate(list)),
});

export const TopBarContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TopBar),
);
