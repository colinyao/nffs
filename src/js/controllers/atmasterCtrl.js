angular.module('myApp.atmasterCtrl', []).
controller('atmasterCtrl', ['$scope', function($scope) {
	$scope.tabIndex = 1;
	$scope.tab = function(index) {
		$scope.tabIndex = index
	}
}])