import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';
import injectTapEventPlugin from 'react-tap-event-plugin';

import history from 'history';
import {Router, Route, Link, IndexRoute} from 'react-router';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';
import CustomTheme from './Theme.jsx';

import Toolbar from 'material-ui/lib/toolbar/toolbar';

import Index from './Index.jsx';

import TextField from 'material-ui/lib/text-field';

injectTapEventPlugin();

ReactDOM.render((
	<Router>
		<Route path='/' component={Index}/>
	</Router>
), document.getElementById('app'));

class Header extends React.Component {

	static get childContextTypes () {
		return {muiTheme: React.PropTypes.object};
	}

	getChildContext () {
		return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
	}

	render() {
		return (
			<div>
				<Toolbar
					style={{
						height: 'auto',
						paddingTop: '10px',
						paddingBottom: '10px'
					}}
				>
					<TextField floatingLabelText="SUBREDDIT" primary={true}/>
				</Toolbar>
			</div>
		);
	}
}

ReactDOM.render((
	<Header></Header>
), document.getElementById('topBar'));
