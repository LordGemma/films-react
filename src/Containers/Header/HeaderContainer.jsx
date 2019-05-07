import { connect } from "react-redux";
import { Header } from "../../Components/Header";
import { getFilms } from "../../store/films/actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const { searchResult } = state.search;
  return {
    filmsList: searchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => dispatch(getFilms({ search: "gemini" }))
  };
};

export const HeaderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
