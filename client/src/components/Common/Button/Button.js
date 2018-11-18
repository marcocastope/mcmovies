import React from 'react';

import classes from './Button.scss';

const button = (props) => (
	<button 
		onClick={props.click}
		className={[classes.Button, classes[props.btnType]].join(' ')} >{props.children}</button>
);

export default button;