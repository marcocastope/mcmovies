import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.scss';

const navigationItems = (props) => (
	<ul className={classes.Items} >
		<NavigationItem link="/" click={props.clicked} >Películas</NavigationItem>
		<NavigationItem link="/create-movie" click={props.clicked}>Crear película</NavigationItem>
	</ul>
);

export default navigationItems;