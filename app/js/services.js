'use strict';

/* Services */

angular.module('fablr.services', []).
	factory('User', ['$http', function($http) {
		return {
			get: function(callback) {
				$http.get('http://api.fablr.com:8080/author', { withCredentials: true }).success(function(data) {
					callback(data);
				}).error(function() {
					callback(false);
				});
			}
		}
	}]).
	value('Categories', [
		{ name: 'Adventure', type: 'Stories' },
		{ name: 'Drama', type: 'Stories' },
		{ name: 'Mystery', type: 'Stories' },
		{ name: 'Suspense', type: 'Stories' },
		{ name: 'Computers', type: 'Guides' },
		{ name: 'Financial', type: 'Guides' },
		{ name: 'Homeowner', type: 'Guides' },
		{ name: 'Medicine', type: 'Guides' }
	]);
