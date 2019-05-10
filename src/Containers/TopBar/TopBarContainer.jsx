import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { TopBar } from '../../Components/Header/TopBar';

const mapStateToProps = state => {
  const { filmsList } = state.films;
  const { searchResult } = state.search;
  return {
    filmsList,
    searchResult,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const TopBarContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopBar)
);
