angular.module('myApp.comDirective', []).
directive('pagDt', function() {
	return {
		restrict: 'A',
		link: function(scope, ele, attr) {
			ele.on('click', function() {
				//获取页码

			})
		}
	}
})