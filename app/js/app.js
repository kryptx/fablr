'use strict';

// Declare app level module which depends on filters, and services
angular.module('fablr', ['fablr.filters', 'fablr.services', 'fablr.directives', 'fablr.controllers']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider.when('/home', {templateUrl: 'views/home.html'});
		$routeProvider.when('/story', {templateUrl: 'views/newStory.html', controller: 'Story'});
		$routeProvider.otherwise({redirectTo: '/home'});
		$locationProvider.html5Mode(true);

	}]).

	run(['$rootScope', 'User', function($rootScope, User) {
		User.get(function(data) {
			$rootScope.user = data;
		});
	}]);
