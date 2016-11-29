angular.module('myApp.observedCtrl', []).
controller('observedCtrl', ['$scope', '$state', 'pdfData', function($scope, $state, pdfData) {

		$scope.pdfData = pdfData.data;
		//console.log($scope.pdfData)
		$scope.listData = {
			index: 0,
			num: 4,
			maxIndex: Math.floor($scope.pdfData.length / 4),
			pages: function() {
				var n = [];
				for (var i = 0; i <= $scope.listData.maxIndex; i++) {
					n.push(n.length);
				}

				return n
			}
		}


		$scope.pdfs = $scope.pdfData.slice($scope.listData.index * $scope.listData.num, $scope.listData.index * $scope.listData.num + 4);
		$scope.choosedPdf = {
			imgUrl: $scope.pdfs[0].imgUrl,
			pdfName: $scope.pdfs[0].pdfName,
			pdfSrc: $scope.pdfs[0].pdfSrc
		};

		$scope.showPDF = function() {
			$state.go("pdf", {
				file: $scope.choosedPdf.pdfSrc
			});
		}
	}])
	.directive('choosePdf', function() {
		return {
			resitrict: 'A',
			link: function(scope, ele, attr) {
				ele.on('click', function() {
					scope.$apply(function() {
						scope.$parent.choosedPdf = scope.item;
					})
				})
			}
		}
	})
	.directive('pageChange', function() {
		return {
			restrict: 'A',
			link: function(scope, ele, attr) {
				ele.on('click', function() {
					if (scope.item < scope.$parent.listData.maxIndex) {
						scope.$apply(function() {
							scope.$parent.pdfs = scope.$parent.pdfData.slice(scope.item * scope.$parent.listData.num, scope.item * scope.$parent.listData.num + 4)
						})
					}
				})
			}
		}
	})