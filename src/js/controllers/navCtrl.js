angular.module('myApp.navCtrl', [])
	.controller('navCtrl', ["$scope", function($scope) {
		$scope.nav = [{
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
	}]).
directive('navScroll', function() {
	return {
		restrict: "A",
		link: function(scope, ele, attr) {

			$(document).on('scroll', function() {
				var wrapperHieght = $('.wrapper').outerHeight(true),
					clientHeight = $(window).height(),
					scrollTop = $(document).scrollTop();
				scrollTop != 0 ? $('.navbar').css({
						background: "rgba(247,247,247,0.7)"
					}) : $('.navbar').css({
						background: 'transparent'
					}) //搞不定了，只能让jquery帮下忙了
				scrollTop + clientHeight > wrapperHieght - 100 ? scope.$broadcast('isLoadMore', true) : scope.$broadcast('isLoadMore', false);
			})

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