import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItem.scss';

const navigationItem = (props) => (
	<li className={classes.Item} >
		<Link 
			className={classes.Link}
			to={props.link}
			onClick={props.click}
			>{props.children}</Link>
	</li>
);
export default navigationItem;