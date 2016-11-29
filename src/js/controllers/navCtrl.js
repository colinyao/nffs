angular.module('myApp.navCtrl', [])
	.controller('navCtrl', ["$scope", function($scope) {
		$scope.nav = [{
			link: 'home',
			eng: 'HOME',
			chinese: "首页"
		}, {
			link: 'about',
			eng: 'ABOUT',
			chinese: "关于风尚"
		}, {
			link: 'works',
			eng: 'WORKS',
			chinese: "风尚案例"
		}, {
			link: 'news',
			eng: 'NEWS',
			chinese: "风尚动态"
		}, {
			link: 'observed',
			eng: 'OBSERVED',
			chinese: "风尚观察"
		}, {
			link: 'atmaster',
			eng: 'AT MASTER',
			chinese: "艾特大师"
		}, {
			link: 'contact',
			eng: 'CONTACT',
			chinese: "联系风尚"
		}];
		$scope.isCollapse = false;
		$scope.collapse = function() {
			$scope.isCollapse = !$scope.isCollapse;
		}
		$scope.$on('$stateChangeSuccess', function(event, data) {
			if ($scope.isCollapse) {
				$scope.isCollapse = false;
			}
		})
	}]).
directive('navScroll', function() {
	return {
		restrict: "A",
		link: function(scope, ele, attr) {

			$(document).on('scroll', function() {
				scope.$broadcast('isScroll', true);
				var wrapperHieght = $('.wrapper').outerHeight(true),
					clientHeight = $(window).height(),
					scrollTop = $(document).scrollTop();
				scrollTop > 10 ? $('.navbar').addClass('navbar-fixed-top') : $('.navbar').removeClass('navbar-fixed-top') //搞不定了，只能让jquery帮下忙了
				scrollTop + clientHeight > wrapperHieght - 50 ? scope.$broadcast('isLoadMore', true) : scope.$broadcast('isLoadMore', false);
			})

		}
	}
}).
directive('windowResize', function() {
	return {
		restrict: 'A',
		link: function(scope, ele, attr) {
			var ww, wh;
			window.onresize = function() {
				scope.$broadcast('isResize', {
					ww: document.documentElement.clientWidth || document.body.clientWidth,
				})

			}
		}
	}
}).
directive('activeHover', function() {
	return {
		restrict: "A",
		link: function(scope, ele, attr) {
			if (scope.$last && scope.nav != undefined) {
				ele.addClass('no-m');
			}
			ele.on('mouseenter', function() {
				if (!ele.hasClass('hover')) {
					ele.addClass('hover')
				}
			})
			ele.on('mouseleave', function() {
				if (ele.hasClass('hover')) {
					ele.removeClass('hover')
				}
			})
		}
	}
})