import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createMovie } from '../../actions/movieActions';
import classes from './CreateMovie.scss';
import FormGroup from '../../components/Common/FormGroup/FormGroup';
import Button from '../../components/Common/Button/Button';

class CreateMovie extends Component {
	state = {
		name: '',
		year: '',
		poster: '',
		directors: ''
	}

	onchangeHandle = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	registerMovieHandle = (e) => {
		e.preventDefault();
		const movieData = {
			name: this.state.name,
			year: this.state.year,
			poster: this.state.poster,
			directors: this.state.directors.split(' , ')
		}

		this.props.createMovie(movieData, this.props.history);
	}
	render() {
		return (
			<div className={classes.Container} >
				<h2 className={classes.Title} >Registra una Película</h2>
				<form className={classes.Form} >
					<FormGroup
						label="Nombre de Película"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.onchangeHandle}
					/>
					<FormGroup
						label="Año de Estreno"
						type="text"
						name="year"
						value={this.state.year}
						onChange={this.onchangeHandle}
					/>
					<FormGroup
						label="Director(s)"
						type="text"
						name="directors"
						value={this.state.directors}
						onChange={this.onchangeHandle}
					/>
					<FormGroup
						label="Poster"
						type="text"
						name="poster"
						value={this.state.poster}
						onChange={this.onchangeHandle}
					/>
					<Button btnType="Normal"  click={this.registerMovieHandle} >Registrar Película</Button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	movie: state.movie
})

export default connect(mapStateToProps, { createMovie })(withRouter(CreateMovie));