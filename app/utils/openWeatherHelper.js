import axios from 'axios';

const key = '1926b29491d6c478c549461ff576879e';
const units = '&units=metric';

let helpers = {
	fiveDayForcast: function(city) {
		return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +'&type=accurate&APPID='+ key + '&cnt=5' + units)
			.then(function(response) {
				return response.data;
				})
			.catch(function(err) {
	  		console.warn('Error in Five Days Forecast' + err);
		});
	},
	
	timeConverter: function(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	  return time;
	}
}

export default helpers;