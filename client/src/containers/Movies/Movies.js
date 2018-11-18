import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies, deleteMovie } from '../../actions/movieActions';
import classes from './Movies.scss';
import Card from '../../components/Common/Card/Card';

class Movies extends Component {


	componentDidMount() {
		this.props.getMovies();
	}

	movieDeleteHandle = (id) => {
		this.props.deleteMovie(id)
	}

	render() {
		const { movies } = this.props.movie
		return (
			<div className={classes.Container} >
				{movies.map( movie => (
					<Card
						key={movie.id}
						poster={movie.poster}
						name={movie.name}
						year={movie.year}
						directors={movie.directors}
						delete={this.movieDeleteHandle.bind(this, movie.id)}
						edit={movie.id}
					/>
				))}
			</div>
		)
	}
}

Movies.propTypes = {
	getMovies: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movie: state.movie
})

export default connect(mapStateToProps, { getMovies, deleteMovie })(Movies);