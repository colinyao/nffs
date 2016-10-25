angular.module('myApp.homeCtrl', []).
controller('homeCtrl', ['$scope', function($scope) {
		$scope.banners = [{
			imgUrl: 'src/images/banner.png'
		}, {
			imgUrl: 'src/images/banner.png'
		}, {
			imgUrl: 'src/images/banner.png'
		}];
		$scope.filters = [{
			imgUrl: 'src/images/filter1.png'
		}, {
			imgUrl: 'src/images/filter1.png'
		}, {
			imgUrl: 'src/images/filter1.png'
		}]

	}])
	.directive('bannerInit', function() {
		return {
			restrict: "A",
			link: function(scope, ele, attr) {
				if (scope.$last == true) {
					$(function() {
						var bannerSlider = new Slider($('#banner_tabs'), {
							time: 5000,
							delay: 400,
							event: 'hover',
							auto: true,
							mode: 'fade',
							controller: $('#bannerCtrl'),
							activeControllerCls: 'active'
						});
						$('#banner_tabs .flex-prev').click(function() {
							bannerSlider.prev()
						});
						$('#banner_tabs .flex-next').click(function() {
							bannerSlider.next()
						});
					})
				}

			}
		}
	})