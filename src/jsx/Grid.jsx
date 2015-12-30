import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from './Theme.jsx';

import Post from './Post.jsx';

export default class Grid extends React.Component {

	static get childContextTypes () {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext () {
        return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
    }

	handleClick(index) {
		console.log(index);
	}

    render() {
		let posts = [[], [], [], []];
		this.props.data.map((item, i) => {
			posts[i%4].push(
				<Post
					index={i/4}
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
			);
		});

        return (
			<div className="row" style={{
				padding: '20px'
			}}>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3"> {posts[0]} </div>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3"> {posts[1]} </div>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3"> {posts[2]} </div>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3"> {posts[3]} </div>
			</div>
        );
    }
}
