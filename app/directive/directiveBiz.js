var app = angular.module('directivePractice');

app.directive('directiveBiz', function() {
	return {
		templateUrl: 'app/directive/dBizTmpl.html',
		link: function(scope, elem, attrs) {
			scope.showStuff = false;
			scope.toggler = true;
			elem.on('click', function() {
				scope.showStuff = !scope.showStuff;
				if (scope.showStuff) {
					scope.setUser({man: scope.user});
				}
				scope.toggler = !scope.toggler;
				scope.$apply(scope.showStuff);
			})
		},
		scope: {
			setUser: '&',
			user: '=',
			currentUser: '='
		},
		controller: function($scope) {
			$scope.$watch('currentUser', function() {
				if ($scope.currentUser !== $scope.user) {
					$scope.showStuff = false;
					$scope.toggler = true;
				}
			})
		}
	}
})

app.directive('dirWeather', function() {
	return {
		templateUrl: 'app/directive/tmpl2.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		},
		controller: function($scope) {
				$scope.loaded = false;
				$scope.$watch('currentUser', function() {	
					$scope.weatherCall({city: $scope.currentUser.city}).then(function(response) {
					$scope.loaded = true;
					$scope.temp = response.temp;
					$scope.weather = response.weather;
				})
			})
		}

	}
})