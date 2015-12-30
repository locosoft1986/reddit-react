import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-browserify';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';

import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';

import IconButton from 'material-ui/lib/icon-button';
import Divider from 'material-ui/lib/divider';

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
			loaded: false
		};
	}

	componentDidMount() {
		this.setState({loaded: true});
	}

    render() {
		let avatar;
		let hasImage = (this.props.post_hint === 'image');
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
				style={
					{pos: spring(!this.state.loaded? 1000 + 500 * this.props.index: 0, [30, 11])}
				}>
				{curr =>
					<div>
						<Card
							initiallyExpanded={false}
							style={{
								margin: '5px',
								padding: '20px',
								marginBottom: '25px',
								transform: `translate3d(0, ${curr.pos}px, 0)`,
							}}>
							<CardHeader
								actAsExpander={hasImage}
    							showExpandableButton={hasImage}
							    title={this.props.subreddit}
							    subtitle={this.props.author}
							    avatar={avatar} />

							{hasImage?
								<CardMedia style={{
									marginRight: '-20px',
									marginLeft: '-20px'
								}} expandable={true}>
									<img src={this.props.url} />
								</CardMedia> :''
							}

							<h3 style={{
								margin: '20px',
								fontWeight: 'normal'
							}}>{this.props.title}</h3>

							<Divider />

						</Card>
					</div>
				}
			</Motion>
        );
    }
}
