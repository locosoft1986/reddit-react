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

    render() {
		let posts = [[], []];
		this.props.data.map((item, i) => {
			posts[i%2].push(
				<Post
					index={i/2}
					key={item.data.id}
					id={item.data.id}
					author={item.data.author}
					title={item.data.title}
					subreddit={`\\r\\${item.data.subreddit}`}
					url={item.data.url}
					post_hint={item.data.post_hint}
					thumbnail={item.data.thumbnail}
				/>
			);
		});

		const style = {
			overflowY: 'scroll',
			height: '80%',
		};
        return (
			<div className="row" style={{
				padding: '20px',
				marginTop: '70px'
			}}>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={style}> {posts[0]} </div>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={style}> {posts[1]} </div>
			</div>
        );
    }
}
