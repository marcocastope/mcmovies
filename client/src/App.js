import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout/Layout';
import Movies from './containers/Movies/Movies';
import CreateMovie from './containers/CreateMovie/CreateMovie';
import EditMovie from './containers/EditMovie/EditMovie';

class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<Router>
					<div className="App" >
						<Layout>
							<Route exact path="/" component={Movies} />
							<Route exact path="/create-movie" component={CreateMovie} />
							<Route exact path="/edit-movie/:id" component={EditMovie} />
						</Layout>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App;