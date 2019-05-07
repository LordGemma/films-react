import { connect } from 'react-redux';
import { Films } from '../../Components/Films';
import { getFilms } from '../../store/films/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    const { filmsList, loading, error } = state.films;
    return {
        filmsList,
        loading,
        error,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms: () => dispatch(getFilms()),
    }
}

export const FilmsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Films));