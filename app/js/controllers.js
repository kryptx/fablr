'use strict';

/* Controllers */

angular.module('fablr.controllers', ['fablr.services']).
	controller('Story', ['$scope', 'Categories', function($scope, Categories) {
		$scope.categories = Categories;
		$scope.title = '';
		$scope.category = '';
		$scope.firstPage = '';
	}]);