import { connect } from "react-redux";
import { getFilmsCount } from "../../store/films/actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const { filmData, filmsList } = state.films;
  return {
    filmData,
    filmsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmsCount: () => dispatch(getFilmsCount())
  };
};

export const FilmContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmDetail)
);
