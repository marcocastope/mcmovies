import React from 'react';

import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../Toggle/Toggle';

const toolbar = (props) => (
	<header className={classes.Toolbar} >
		<div className={classes.Container} >
			<Logo />
			<Toggle clicked={props.click} />
			<nav className={[classes.Nav, props.open ? classes.Open : null].join(' ')}  >
				<NavigationItems  clicked={props.click}/>
			</nav>
		</div>
	</header>
);

export default toolbar;