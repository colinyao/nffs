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


	}]).
directive('navHover', function() {
	return {
		restrict: "A",
		link: function(scope, ele, attr) {
			if (scope.$last) {
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