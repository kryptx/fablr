'use strict';

// Declare app level module which depends on filters, and services
angular.module('fablr', ['fablr.filters', 'fablr.services', 'fablr.directives', 'fablr.controllers']).
	config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.when('/home', {templateUrl: '/views/home.html'});
		$routeProvider.when('/story', {templateUrl: '/views/story.html', controller: 'Story'});
		// $routeProvider.when('/story/:id', {templateUrl: 'views/story.html', controller: 'Story'});
		// $routeProvider.when('/story/:id/:prev/:current', {templateUrl: 'views/story.html', controller: 'Story'});
		$routeProvider.when('/author/:id', {templateUrl: '/views/author.html', controller: 'Author'});
		$routeProvider.when('/latest', {templateUrl: '/views/latest.html', controller: 'Latest'});
		$routeProvider.otherwise({redirectTo: '/home'});

		// $httpProvider.defaults.useXDomain = true;
		// delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$locationProvider.html5Mode(true);

	}]).

	run(['$rootScope', 'User', function($rootScope, User) {
		User.get(function(data) {
			$rootScope.user = data;
		});
	}]);
