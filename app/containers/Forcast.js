import React from 'react';
import OpenWeatherHelper from '../utils/openWeatherHelper';
import FiveDayForcast from '../components/FiveDayForcast'

export default React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },
	getInitialState: function() {
		return {
			isLoading: true,
			fiveDaysForecast: []
		}
	},
	getFiveDaysForecast: function(city) {
		OpenWeatherHelper.fiveDayForcast(city)
			.then(function(data) {
				this.setState({
					isLoading: false,
					fiveDaysForecast: data.list,
					city: city
				});
		}.bind(this))
	},
	componentDidMount: function() {
		this.getFiveDaysForecast(this.props.routeParams.city)
	},
	onShowDetails: function(e) {
		let id = e.currentTarget.dataset.id;
		this.context.router.push({
			pathname: '/detail/'+this.state.city,
			state: {
				dayForecast: this.state.fiveDaysForecast[id]
			}
		});
	},
	render: function() {
		return (
			<div>
				{
					this.state.isLoading === true ?
					<p> Is Loading </p> :
					<div>
						<h2 className="city-title">{this.state.city}</h2>
						<FiveDayForcast fiveDaysForecast={this.state.fiveDaysForecast} onShowDetails={this.onShowDetails}  />
					</div>
				}
			</div>
		)
	}
});