import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from './Theme.jsx';

import Grid from './Grid.jsx';

export default class Index extends React.Component {

	static get childContextTypes () {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext () {
        return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
    }

	constructor() {
		super();
		this.state = {data: []};
	}

	componentWillMount() {
		$.ajax({
			url: 'https://www.reddit.com/.json',
			method: 'GET',
			success: result => {
				this.setState({data: result.data.children});
			}
		});
	}

    render() {
        return (
			<Grid data={this.state.data} />
        );
    }
}
