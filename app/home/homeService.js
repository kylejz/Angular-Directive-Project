var app = angular.module('directivePractice');

app.service('homeService', function($q, $http) {

	this.getWeather = function(city) {
		var dfrd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
		}).then(function(response) {
			var info = {
				temp: Math.round((response.data.main.temp - 273.15) * 1.8 + 32),
				weather: response.data.weather[0].description
				};
			console.log(info)
			dfrd.resolve(info);
		})
		return dfrd.promise;
	}
})