import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import Paper from 'material-ui/lib/paper';

import {Motion, spring, presets} from 'react-motion';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from './Theme.jsx';

export default class Viewer extends React.Component {

	static get childContextTypes () {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext () {
        return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
    }

	constructor() {
		super();
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		this.setState({loaded: true});
	}

	componentWillReceiveProps() {

	}

    render() {
        return (
			<p>Test</p>
        );
    }
}
