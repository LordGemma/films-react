import { connect } from 'react-redux';
import { FilmDetail } from '../../Components/FilmDetails';
import { getFilm } from '../../store/films/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    const { filmData, filmsList } = state.films;
    return {
        filmData,
        filmsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilm: (id) => dispatch(getFilm(id))
    }
}

export const FilmContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetail));