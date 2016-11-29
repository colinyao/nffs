angular.module('myApp.worksCtrl', []).
controller('worksCtrl', ['$scope', function($scope) {
		$scope.workContent = [{
			example_type: '2',
			example_src: 'src/images/1.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '2',
			example_src: 'src/images/1.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '2',
			example_src: 'src/images/1.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '2',
			example_src: 'src/images/1.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}, {
			example_type: '1',
			example_src: 'src/images/2.png',
			example_name: '结算卡',
			example_summary: '这是个好卡'
		}];

		var listData = {
			index: 0,
			num: 8,
			maxIndex: Math.floor($scope.workContent.length / 8),
			flag: true
		}
		var long = [0, 0, 0, 0];

		$scope.works = $scope.workContent.slice(0, (listData.index + 1) * listData.num)
		$scope.worksList0 = [];
		$scope.worksList1 = [];
		$scope.worksList2 = [];
		$scope.worksList3 = [];
		$scope.worksList4 = [];
		updateListData($scope.works.slice(listData.index * listData.num, (listData.index + 1) * listData.num))

		$scope.$on('isLoadMore', function(event, data) {
			if (data == true && listData.flag) {
				console.log(listData.maxIndex)
				if (listData.index < listData.maxIndex) {

					listData.flag = false;
					++listData.index;
					$scope.$apply(function() {
						$scope.works = $scope.workContent.slice(0, (listData.index + 1) * listData.num);
						updateListData($scope.works.slice(listData.index * listData.num, (listData.index + 1) * listData.num))
						listData.flag = true;
					})
				} else {
					listData.flag = false;
				}
			}
		})



		function updateListData(latestData) {

			for (var i in latestData) {
				var min = Math.min.apply(min, long);
				var index = long.indexOf(min);
				latestData[i].type = index;
				$scope["worksList" + index].push(latestData[i])
				long[index] = long[index] + Number(latestData[i].example_type)
			}
		}

		$scope.isPopUp = false;
		// $scope.workData = '';

		$scope.mtyy = '';
		$scope.zhyx = '';
		$scope.zhcl = '';
		$scope.tabIndex = 1;
		$scope.tab = function(index) {
			$scope.tabIndex = index
			switch (index) {
				case 2:
					if ($scope.members == '' || $scope.members == null) {
						// $http({
						// 	method: 'get',
						// 	url: 'http://nffs.xulog.com/nffs/api/about_team'
						// }).success(function(data) {
						// 	setTimeout(function() {
						// 		$scope.$apply(function() {
						// 			$scope.members = data;
						// 		})
						// 	})
						// })
					}
					break;
				case 3:
					if ($scope.partners == '' || $scope.partners == null) {
						// $http({
						// 	method: 'get',
						// 	url: 'http://nffs.xulog.com/nffs/api/about_coo'
						// }).success(function(data) {
						// 	setTimeout(function() {
						// 		$scope.$apply(function() {
						// 			$scope.partners = data;

						// 		})
						// 	})
						// })
					}
					break;

				default:
					break;
			}
		}
	}])
	.directive('workShow', ['$http', function($http) {
		return {
			restrict: 'AE',
			scope: 'false',
			replace: 'true',
			link: function(scope, ele, attr) {
				ele.on('click', function() {
					angular.element(document.body).css('overflow', 'hidden')
						//$('body').css('overflow', 'hidden')
					$http({
						method: 'get',
						url: '/nffs/api/work_detail/' + scope.work.example_id
					}).success(function(data) {
						setTimeout(function() {
							scope.$apply(function() {
								scope.$parent.workData = data.example_content;
								scope.$parent.isPopUp = true; //ng-repeat生成的元素scope为子scope
							})
						})

					})

					// comService.ajax({
					// 	url: 'undefined',
					// 	data: {
					// 		workId: scope.work.workId
					// 	},
					// 	success: function(data) {

					// 		scope.$apply(function() {
					// 			scope.$parent.workData = data;
					// 			scope.$parent.isPopUp = true;
					// 		})

					// 	}
					// })

				})
			}
		}
	}])