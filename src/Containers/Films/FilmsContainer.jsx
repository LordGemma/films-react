import { connect } from 'react-redux';
import { Films } from '../../Components/Films';
import { getFilms, getFilm } from '../../store/films/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    const { filmsList } = state.films;
    return {
        filmsList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToFilm: (id) => dispatch(getFilm(id)),
        getFilms: () => dispatch(getFilms()),
    }
}

export const FilmsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Films));