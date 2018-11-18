import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.scss';
import Button from '../Button/Button';

const card = (props) => (
	<div className={classes.Card} >
		<img src={props.poster} alt={props.name} className={classes.Poster} />
		<h2 className={classes.Title} >{props.name}</h2>
		<div className={classes.Data} >
			<div className={classes.List} >
				<span className={classes.Item} >Estreno: </span>
				<p>{props.year}</p>
			</div>
			<div className={classes.List} >
				<span className={classes.Item} >Directores: </span>
				<p>{props.directors}</p>
			</div>
			<div className={classes.Buttons} >
				<Link to={`edit-movie/${props.edit}`}  className={classes.Button} >Editar</Link>
				<Button btnType="Delete" click={props.delete} >Eliminar</Button>
			</div>
		</div>
	</div>
);

export default card;