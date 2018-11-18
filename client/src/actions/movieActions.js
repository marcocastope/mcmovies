import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE, GET_ERRORS, GET_MOVIE } from './types';
import axios from 'axios';

const URI = 'http://localhost:8080/api/movies';

export const getMovies = () => dispatch => {
	axios.get(`${URI}`)
		.then(res => dispatch({
			type: GET_MOVIES,
			payload: res.data
		}))
		.catch(err => dispatch({
			type: GET_MOVIES,
			payload: null
		}))
}

export const getCurrentMovie = id => dispatch => {
	axios.get(`${URI}/${id}`)
		.then(res => dispatch({
			type: GET_MOVIE,
			payload: res.data
		}))
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: res.response.data
		}))
}

export const createMovie = (movieData, history) => dispatch => {
	axios.post(`${URI}`, movieData)
		.then(res => history.push('/'))
		.catch(err => console.log(err))
}


export const deleteMovie = id => dispatch => {
	axios.delete(`${URI}/${id}`)
		.then(res => dispatch({
			type: DELETE_MOVIE,
			payload: res.data
		}))
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}))
}