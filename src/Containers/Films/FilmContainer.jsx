import { connect } from 'react-redux';
import { FilmDetail } from '../../Components/FilmDetail';
import { getFilm } from '../../store/films/actions';

const mapStateToProps = (state) => {
    const { filmData } = state.films;
    return {
        filmData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilm: () => dispatch(getFilm())
    }
}

export const FilmContainer = connect(mapStateToProps, mapDispatchToProps)(FilmDetail);