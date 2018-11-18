import React from 'react';

import classes from './Toggle.scss';

const toggle = (props) => (
	<div className={classes.Toggle} onClick={props.clicked} >
		<div className={classes.Line} ></div>
		<div className={classes.Line} ></div>
		<div className={classes.Line} ></div>
	</div>
);
export default toggle;