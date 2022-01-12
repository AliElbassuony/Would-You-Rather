import React, { Component} from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import LoadingBar from 'react-redux-loading'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
			return (
				<div className="app">
					
					 <LoadingBar />
					 { 
					 	(	!this.props.load ?
							(this.props.loading === true ? <Login/> : <Dashboard/>) : null
						)
					}
					
					
				</div> 	
			);
	}
}

function mapStateToProps({authedUser, loadingBar}) {
	return {
		loading : authedUser === null,
		load: loadingBar.default
	};
}

export default connect(mapStateToProps)(App);
