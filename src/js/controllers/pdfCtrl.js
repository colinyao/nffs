angular.module('myApp.pdfCtrl', []).
controller('pdfCtrl', ['$scope', '$sce', '$stateParams', function($scope, $sce, $stateParams) {
	var baseUrl = "/nffs/viewer.html?file="
	$scope.pdfUrl = $sce.trustAsResourceUrl(baseUrl + $stateParams.file);
	$scope.back = function() {
		window.history.back()
	}
}])