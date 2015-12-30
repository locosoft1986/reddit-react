import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';

import {Motion, spring, presets} from 'react-motion';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';
import CustomTheme from './Theme.jsx';

export default class Post extends React.Component {

	static get childContextTypes () {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext () {
        return {muiTheme: ThemeManager.getMuiTheme(CustomTheme)};
    }

	constructor() {
		super();
		this.state = {
			loaded: false,
			over: false
		};
		this.handleMouseover = this.handleMouseover.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	componentDidMount() {
		this.setState({loaded: true});
	}

	handleMouseover() {
		this.setState({over: true});
	}

	handleMouseLeave() {
		this.setState({over: false});
	}

    render() {
		let image, avatar;
		let hasImage = this.props.post_hint === 'image';
		if (hasImage)
			image = (
				<CardMedia expandable={true}>
					<img src={this.props.url} />
				</CardMedia>
			);

		if (this.props.thumbnail !== "" && this.props.thumbnail !== "self")
			avatar = <Avatar src={this.props.thumbnail}/>;
		else
			avatar = (
				<Avatar
					backgroundColor={Colors.red500}
					icon={<FontIcon className="material-icons">speaker_notes</FontIcon>} />
			);

        return (
			<Motion
				style={{x: spring(!this.state.loaded? -2000  - 500 * this.props.index: 0, [30, 11])}}>
				{curr =>
					<Card
						initiallyExpanded={!hasImage}
						onMouseOver={this.handleMouseover}
						onMouseLeave={this.handleMouseLeave}
						onClick={this.props.handleClick.bind(this, this.props.id)}
						style={{
							margin: '30px',
							transform: `translate3d(${curr.x}px, 0, 0)`,
							cursor: 'pointer' }}
						zDepth={this.state.over? 3: 1}>
						<CardHeader
							actAsExpander={hasImage}
							showExpandableButton={hasImage}
						    title={this.props.subreddit}
						    subtitle={this.props.author}
						    avatar={avatar} />
						{image}
						<h3 style={{
							margin: '20px',
							fontWeight: 'normal'
						}}>{this.props.title}</h3>
					</Card>
				}
			</Motion>
        );
    }
}
