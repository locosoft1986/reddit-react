import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Nav extends React.Component {
	render () {
		return (
			<div>
				<LeftNav
					open={this.props.open}
					docked={false}
					onRequestChange={this.props.handleNavTap}>
					<MenuItem>Login</MenuItem>
				</LeftNav>
			</div>
		);
	}
}
