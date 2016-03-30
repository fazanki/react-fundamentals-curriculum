import React from 'react';
import Header from './Header';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Header  />
				<div className="wrapper">
					{this.props.children}
				</div>
			</div>
		)
	}
});
