angular.module('myApp.worksCtrl', []).
controller('worksCtrl', ['$scope', 'comService', function($scope, comService) {
		$scope.works = {
			maxIndex: '5',
			list: [{
				imgUrl: '../src/images/work-item.png',
				companyName: '平安银行',
				workDes: '品牌形象、数字营销',
				workId: '0'
			}, {
				imgUrl: '../src/images/work-item.png',
				companyName: '平安银行',
				workDes: '品牌形象、数字营销',
				workId: '1'
			}, {
				imgUrl: '../src/images/work-item.png',
				companyName: '平安银行',
				workDes: '品牌形象、数字营销',
				workId: '2'
			}, {
				imgUrl: '../src/images/work-item.png',
				companyName: '平安银行',
				workDes: '品牌形象、数字营销',
				workId: '3'
			}]
		}
		$scope.currentIndex = 0;
		$scope.openLoadMore = true;
		$scope.$on('isLoadMore', function(event, data) {
			if (data == true && $scope.currentIndex < $scope.works.maxIndex && $scope.openLoadMore) {
				$scope.openLoadMore = false;
				comService.ajax({
					url: "underfined",
					data: {
						pagination: ++$scope.currentIndex
					},
					success: function(data) {
						$scope.works.list.contact(data);
						$scope.openLoadMore = true;
					}
				})
			}
		})
		$scope.isPopUp = false;
		$scope.workData = '<img src="../src/images/workData.png"/>';

	}])
	.directive('workShow', ['comService', function(comService) {
		return {
			restrict: 'AE',
			scope: 'false',
			replace: 'true',
			link: function(scope, ele, attr) {
				ele.on('click', function() {
					angular.element(document.body).css('overflow', 'hidden')
						//$('body').css('overflow', 'hidden')
					scope.$apply(function() {
							scope.$parent.isPopUp = true; //ng-repeat生成的元素scope为子scope
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
	.directive('workModal', function() {
		return {
			restrict: 'AE',
			scope: 'false',
			replace: 'true',
			template: "<div class='work-modal' ng-class={'active':isPopUp}><div class='bg'></div><div class='modal-container'><div class='close-panel'><div class='close' ng-click='modalClose()'></div></div><div  class='modal-content' ng-bind-html='workData | trustHtml'></div></div></div>",
			link: function(scope, ele, attr) {
				// scope.isPopUp = isPopUp.getter().isPopUp
				scope.modalClose = function() {
					scope.isPopUp = false;
					angular.element(document.body).css('overflow', 'auto')
				};

			}
		}
	})