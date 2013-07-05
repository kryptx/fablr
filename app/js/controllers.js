'use strict';

/* Controllers */

angular.module('fablr.controllers', ['fablr.services']).

	controller('NewStory', ['$scope', '$http', '$location', 'Categories', 'APIUrl', function($scope, $http, $location, Categories, APIUrl) {
		$scope.categories = Categories;
		$scope.createStory = function() {
			$http.post(APIUrl + '/story', {
				title: $scope.title,
				category: $scope.category.name,
				firstPage: $scope.firstPage
			}, { withCredentials : true }).
			success(function(data, status) {
				$location.url('/story/' + data._id);
			}).
			error(function(data, status) {
				// display some kind of error modal?
			});
		}
	}]).

	controller('Latest', ['$scope', '$http', 'APIUrl', function($scope, $http, APIUrl) {
		$http.get(APIUrl + '/story/latest').
			success(function(data, status) {
				$scope.stories = data;
			}).
			error(function(data, status) {
				// display some kind of error modal?
				$scope.stories = [];
			});
		$scope.loadStory = function(id) {
			$location.url('/story/' + data._id);
		}
	}]).

	controller('Author', ['$scope', '$http', 'APIUrl', '$routeParams', function($scope, $http, APIUrl, $routeParams) {
		$http.get(APIUrl + '/author/' + $routeParams.id).
			success(function(data, status) {
				$scope.author = data;
			}).
			error(function(data, status) {
				// display some kind of error modal?
			});
	}]).

	controller('Story', ['$scope', '$http', 'APIUrl', '$routeParams', function($scope, $http, APIUrl, $routeParams) {
		$http.get(APIUrl + '/story/' + $routeParams.id).
			success(function(data, status) {
				$rootScope.story = data;
				$http.get(APIUrl + '/page/' + data.firstPage).
					success(function(pageData, status) {
						$scope.currentPage = pageData;
						$scope.previousPage = null;
					}).
					error(function(data, status) {
						// display some kind of error modal?
					});
			}).
			error(function(data, status) {
				// display some kind of error modal?
			});
	}]);