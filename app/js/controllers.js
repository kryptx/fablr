'use strict';

/* Controllers */

angular.module('fablr.controllers', []).
	controller('Login', ['$scope', 'user', function($scope, user) {
		user.get(function(data) {
			$scope.user = data;
		});
	}])
	.controller('Home', [function() {

	}]);