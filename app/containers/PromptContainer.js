import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },
	getInitialState: function() {
		return {
			city: ''
		}
	},
	updateCity: function(e) {
		this.setState({
			city: e.target.value
		});
	},

	onSubmitWeather: function(e) {
		e.preventDefault()
		this.context.router.push('/forcast/' + this.state.city)
	},

	render: function() {
		return (
			<div className="prompt-container">
				{this.props.title ? <h2 className="content-header">{this.props.title}</h2> : ''}
				<form onSubmit={this.onSubmitWeather}>
					<input type="text" 
						placeholder="Enter City" 
						onChange={this.updateCity}
						value={this.state.city} 
					/>
						<button className="btn btn-success">Get Weather</button>
				</form>
			</div>
		)
	}
});