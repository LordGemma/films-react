import { connect } from 'react-redux';
import { Films } from '../../Components/Films';
import { getFilms } from '../../store/films/actions';

const mapStateToProps = (state) => {
    const { filmsList } = state.films;
    return {
        filmsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms: () => dispatch(getFilms())
    }
}

export const FilmsContainer = connect(mapStateToProps, mapDispatchToProps)(Films);