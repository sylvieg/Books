'use strict'
<!-- module booksApp -->
var booksApp = angular.module('booksApp',[]);

booksApp.controller('booksController', function($scope, $http, $log) {
	$scope.books = {};
	$scope.bibkey = '';
	$scope.message = '';
	$scope.getBooks = function() {
		if (!$scope.bibkey.length) {
			$scope.message= 'Please enter keys';
			return;
		}
		$scope.message = '';
		var url = '/find/' + $scope.bibkey;
		$http({
			method: 'GET',
			url: url
		}).success(function(data){
			$log.info('Done');
			$scope.books = data;
			if (Object.keys(data).length == 0) $scope.message = 'Incorrect keys';
		}).error(function(data, status) {
			$scope.message = "Request failed";
			$log.error("Request books failed");
		});
	}
});
