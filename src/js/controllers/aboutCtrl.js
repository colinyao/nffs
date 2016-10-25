angular.module('myApp.aboutCtrl', []).
controller('aboutCtrl', ['$scope', function($scope) {
	$scope.tabIndex = 1;
	$scope.tab = function(index) {
		$scope.tabIndex = index
	}
	$scope.members = [{
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}, {
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}, {
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}, {
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}, {
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}, {
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}, {
		imgUrl: '../src/images/img.png',
		name: '王宏林',
		position: '董事长',
		motto: '行者无疆'
	}];

	$scope.partners = [{
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}, {
		imgUrl: '../src/images/partners.png'
	}];

	$scope.invite = ""
}])