angular.module('myApp.aboutCtrl', []).
controller('aboutCtrl', ['$scope', '$http', 'aboutInfo', function($scope, $http, aboutInfo) {

		$scope.aboutInfo = aboutInfo.data;
		//console.log($scope.aboutInfo)
		$scope.members = '';
		$scope.partners = '';
		$scope.invites = '';
		$scope.tabIndex = 1;
		$scope.tab = function(index) {
			$scope.tabIndex = index
			switch (index) {
				case 2:
					if ($scope.members == '' || $scope.members == null) {
						$http({
							method: 'get',
							url: 'http://nffs.xulog.com/nffs/api/about_team'
						}).success(function(data) {
							setTimeout(function() {
								$scope.$apply(function() {
									$scope.members = data;
								})
							})
						})
					}
					break;
				case 3:
					if ($scope.partners == '' || $scope.partners == null) {
						$http({
							method: 'get',
							url: 'http://nffs.xulog.com/nffs/api/about_coo'
						}).success(function(data) {
							setTimeout(function() {
								$scope.$apply(function() {
									$scope.partners = data;

								})
							})
						})
					}
					break;
				case 4:
					if ($scope.invites == '' || $scope.invites == null) {
						$http({
							method: 'get',
							url: 'http://nffs.xulog.com/nffs/api/about_invite'
						}).success(function(data) {
							setTimeout(function() {
								$scope.$apply(function() {
									$scope.invites = data;
								})
							})
						})
					}
					break;
				default:
					break;
			}
		}
	}])
	.directive('reHeight', function() {
		return {
			restrict: 'A',
			link: function(scope, ele, attr) {
				if (scope.$last == true) {
					$(".fs-team-img").eq(0).find('img').on('load', function() {
						var h = $(this).height();
						$(".fs-team-img").height(h + "px");
					})

				}
			}
		}
	})