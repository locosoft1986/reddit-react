import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';
import injectTapEventPlugin from 'react-tap-event-plugin';

import history from 'history';
import {Router, Route, Link, IndexRoute} from 'react-router';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from './Theme.jsx';

import AppBar from 'material-ui/lib/app-bar';

import Index from './Index.jsx';
import Nav from './Nav.jsx';

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

	constructor() {
		super();
		this.state = {
			open: false
		};
		this.handleNavTap = this.handleNavTap.bind(this);
	}

	handleNavTap() {
		this.setState({open: !this.state.open});
	}

	render() {
		return (
			<div>
				<Nav open={this.state.open} handleNavTap={this.handleNavTap} zDepth={2}/>
				<AppBar
					zDepth={0}
					title="Reddit React"
					style={{
						position: 'fixed',
						top: '0px'
					}}
					onLeftIconButtonTouchTap={this.handleNavTap}
				/>
			</div>
		);
	}
}

ReactDOM.render((
	<Header></Header>
), document.getElementById('topBar'));
