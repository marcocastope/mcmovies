import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentMovie, createMovie} from '../../actions/movieActions';
import isEmpty from '../../is-empty/isEmpty';
import classes from './EditMovie.scss';
import FormGroup from '../../components/Common/FormGroup/FormGroup';
import Button from '../../components/Common/Button/Button';

class EditMovie extends Component {
	state = {
		name: '',
		year: '',
		poster: '',
		directors: ''
	}

	componentDidMount() {
		this.props.getCurrentMovie(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.movie.movie) {
			const movie = nextProps.movie.movie;
			const directors = movie.directors.join(',')

			movie.name = !isEmpty(movie.name) ? movie.name : '';
			movie.year = !isEmpty(movie.year) ? movie.year : '';
			movie.poster = !isEmpty(movie.poster) ? movie.poster : '';

			this.setState({
				name: movie.name,
				year: movie.year,
				poster: movie.poster,
				directors: directors
			})
		}
	}

	clickSaveHandle = (e) => {
		e.preventDefault();

		const movieData = {
			name: this.state.name,
			year: this.state.year,
			poster: this.state.poster,
			directors: this.state.directors.split(' , ')
		}

		this.props.createMovie(movieData, this.props.history)
	}

	onChangeHandle = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		return (
			<div className={classes.Container} >
			<h2 className={classes.Title} >Editar Película</h2>
			<form className={classes.Form} >
				<FormGroup
					label="Nombre de Película"
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.onChangeHandle}
				/>
				<FormGroup
					label="Año de Estreno"
					type="text"
					name="year"
					value={this.state.year}
					onChange={this.onChangeHandle}
				/>
				<FormGroup
					label="Director(s)"
					type="text"
					name="directors"
					value={this.state.directors}
					onChange={this.onChangeHandle}
				/>
				<FormGroup
					label="Poster"
					type="text"
					name="poster"
					value={this.state.poster}
					onChange={this.onChangeHandle}
				/>
				<Button btnType="Normal" click={this.clickSaveHandle} >Actualizar</Button>
			</form>
		</div>
		)
	}
}

const mapStateToProps = state => ({
	movie: state.movie
});

export default connect(mapStateToProps, { getCurrentMovie, createMovie })(withRouter(EditMovie));