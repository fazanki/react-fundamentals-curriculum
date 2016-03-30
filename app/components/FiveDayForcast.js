import React from 'react';
import OpenWeatherHelper from '../utils/openWeatherHelper';

function ForcastItem (props) {
	return <li className="fiveDayForcast-item" onClick={props.onShowDetails} data-id={props.keyId}>
					<i className={"icon-"+props.day.weather[0].icon}></i>
					<img src={"http://openweathermap.org/img/w/"+props.day.weather[0].icon+".png"} />
					<p>Date {OpenWeatherHelper.timeConverter(props.day.dt)}</p>
			</li>
}

export default function (props) {
	return <ul className="fiveDayForcast"> {	
 			props.fiveDaysForecast.map((day, i) => <ForcastItem day={day} onShowDetails={props.onShowDetails} keyId={i}  key={i} />)
 	}
 	</ul>
}