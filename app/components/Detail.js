import React from 'react';
import OpenWeatherHelper from '../utils/openWeatherHelper';

export default React.createClass({
	getInitialState: function() {
		return {
			dayForecast: this.props.location.state.dayForecast
		}
	},
	render: function() {
		const data = this.state.dayForecast;
		return ( 
			<div>	
				<h1 className="city-title">{this.props.params.city}</h1>
				<img src={"http://openweathermap.org/img/w/"+this.state.dayForecast.weather[0].icon+".png"}  />
				<p>Date {OpenWeatherHelper.timeConverter(this.state.dayForecast.dt)}</p>
				<p>Humidity: {data.humidity}</p>
				<p>Min temp: {data.temp.max} degrees</p>
				<p>Max temp: {data.temp.min} degrees</p>
			</div>
		)
	}
});