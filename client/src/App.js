import React, {Component} from 'react';
import Prueba from './components/Prueba';
import Prueba2 from './components/Prueba2';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Holassa {this.props.name}</h1>
				<Prueba />
				<Prueba2 />
			</div>
		)
	}
}

export default App;