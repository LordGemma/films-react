import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FilmDetail } from '../../Components/FilmDetails';
import { getFilm } from '../../store/film/actions';

const mapStateToProps = (state) => {
  const { filmData, loading, error } = state.film;
  return {
    filmData,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getFilm: id => dispatch(getFilm(id)),
});

export const FilmContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FilmDetail),
);
