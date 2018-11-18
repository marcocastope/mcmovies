import React from 'react';
import Proptypes from 'prop-types';

import classes from './FormGroup.scss';
import Aux from '../../../hoc/Aux';


const formGroup = ({
	label,
	onChange,
	name,
	type,
	value
}) => (
	<Aux>
		<label className={classes.Label} >{label}</label>
		<input 
			className={classes.Input} 
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			/>
	</Aux>
);

formGroup.propTypes = {
	onChange: Proptypes.func.isRequired,
	name: Proptypes.string.isRequired,
	value: Proptypes.string.isRequired,
	type: Proptypes.string.isRequired,
	label: Proptypes.string
};

formGroup.defaultProps = {
	type: 'text'
}

export default formGroup;