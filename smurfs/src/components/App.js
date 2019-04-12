import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs, addSmurfs } from '../actions';
import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}
	render() {
		// console.log('APP PRPS', this.props);
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your Redux version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
				<SmurfsList smurfs={this.props.smurfs} />
				<div className="addform">
					<AddSmurfForm addSmurfs={this.props.addSmurfs} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('MSTP', state);
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		addingSmurf: state.addingSmurf,
		error: state.error
	};
};

export default connect(mapStateToProps, { getSmurfs, addSmurfs })(App);
