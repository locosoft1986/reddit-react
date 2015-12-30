import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from './Theme.jsx';

import Post from './Post.jsx';
import Viewer from './Viewer.jsx';

export default class Index extends React.Component {

	static get childContextTypes () {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext () {
        return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
    }

	constructor() {
		super();
		this.state = {data: [], currPost: ''};
		this.handleClick = this.handleClick.bind(this);
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

	handleClick(index) {
		this.setState({currPost: index});
	}

    render() {
		console.log(this.state.data);
		let posts = this.state.data.map((item, i) => (
			<Post
				index={i}
				key={item.data.id}
				id={item.data.id}
				author={item.data.author}
				title={item.data.title}
				subreddit={`\\r\\${item.data.subreddit}`}
				url={item.data.url}
				post_hint={item.data.post_hint}
				thumbnail={item.data.thumbnail}
				handleClick={this.handleClick}
			/>
		));
        return (
			<div className="row">
				<div
					className="col-md-4 col-sm-6"
					style={{
						marginTop: '70px',
						overflowY: 'scroll',
						height: '80%'
					}}>
					{posts}
				</div>
				<div
					className="col-md-8 col-sm-6"
					style={{
						marginTop: '70px',
					}}>
					<Viewer
						currPost={this.state.currPost}>
					</Viewer>
				</div>
			</div>
        );
    }
}
