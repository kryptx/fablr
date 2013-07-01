'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('fablr.services', []).
	value('version', '0.1').
	factory('user', ['$http', function($http) {
		return {
			get: function(callback) {
				$http.get('http://api.fablr.com:8080/author', { withCredentials: true }).success(function(data) {
					callback(data);
				}).error(function() {
					callback(false);
				});
			}
		}
	}]);
