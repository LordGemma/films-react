import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Films } from '../../Components/Films';
import { getFilms } from '../../store/films/actions';

const mapStateToProps = (state) => {
  const { filmsList, loading, error } = state.films;
  const { searchResult } = state.search;
  return {
    searchResult,
    filmsList,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getFilms: params => dispatch(getFilms(params)),
});

export const FilmsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Films));
