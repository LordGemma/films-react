import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { TopBar } from '../../Components/Header/TopBar';

const mapStateToProps = state => {
  const { filmData, filmsList } = state.films;
  return {
    filmData,
    filmsList
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
