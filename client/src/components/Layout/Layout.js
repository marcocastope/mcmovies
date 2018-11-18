import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.scss';

class Layout extends Component {
	state = {
		show: false
	}

	toggleMenuHandle = () => {
		this.setState((prevState => {
			return { show: !prevState.show }
		}))
	}

	render() {
		return (
			<Aux>
				<Toolbar 
					open={this.state.show} 
					click={this.toggleMenuHandle} 
				/>
				<main className={classes.Container} >
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;