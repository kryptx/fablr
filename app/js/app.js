'use strict';


// Declare app level module which depends on filters, and services
angular.module('fablr', ['fablr.filters', 'fablr.services', 'fablr.directives', 'fablr.controllers']).
	config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
		$routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'Home'});
		// $routeProvider.when('/view2', {templateUrl: 'partials/home.html', controller: 'MyCtrl2'});
		$routeProvider.otherwise({redirectTo: '/home'});
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
		$locationProvider.html5Mode(true);
	}]);
