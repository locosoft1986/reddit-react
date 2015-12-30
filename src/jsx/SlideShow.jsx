import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import {Motion, spring} from 'react-motion';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from './Theme.jsx';

import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

export default class SlideShow extends React.Component {
	static get childContextTypes () {
		return {muiTheme: React.PropTypes.object};
	}

	getChildContext () {
		return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
	}

	constructor() {
		super();
		this.state = {direction: false};
		this.changeDirection = this.changeDirection.bind(this);
	}

	changeDirection() {
		this.setState({direction: !this.state.direction});
	}

	render() {
		return (
			<div>
			  <Motion style={{x: spring(this.state.direction? 10: 50, [21, 40])}}>
				{({x}) =>
					<div
						style={{
							background: 'url("")',
							maxWidth: '100%',
							height: '300px',
							backgroundPosition: `30% ${x}%`
						}}
						className="col-md-12"
					/>
				}
			  </Motion>

	        </div>
		);
	}
}
