'use strict';

/* Services */

angular.module('fablr.services', []).
	factory('User', ['$http', 'APIUrl', function($http, APIUrl) {
		return {
			get: function(callback) {
				$http.get(APIUrl + '/author', { withCredentials: true }).success(function(data) {
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
	]).
	value('APIUrl', 'http://api.fablr.com:8080');
