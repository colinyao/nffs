angular.module('myApp.newsCtrl', [])
	.controller('newsCtrl', ['$scope', 'newsData', function($scope, newsData) {
		var listData = {
			index: 0,
			num: 6,
			maxIndex: Math.floor(newsData.data.length / 6),
			flag: true
		}
		$scope.newsList = newsData.data.slice(0, listData.num);
		$scope.newsContent = $scope.newsList[0].news_content;

		$scope.$on('isM', function(event, data) {
			$scope.isM = data;
		})
		$scope.$emit('to-parent-isM', true); //初始化时，$on isM加载在broadcast之前，导致$on不执行,先发送一条指令给父级，然后再调用broadcast
		$scope.$on('isLoadMore', function(evet, data) {
			if (data && $scope.isM) {
				$scope.newsMore()
			}
		})
		$scope.newsContainerClose = function() {
			$('.close-panel').addClass('hidden')
			$('.news-container').removeClass('active')
			$(body).css('overflow', 'auto')
		}
		$scope.newsMore = function() {
			if (listData.index < listData.maxIndex) {
				if (listData.flag) {
					listData.flag = false;
					++listData.index;
					$scope.$apply(function() {
						$scope.newsList = newsData.data.slice(0, (listData.index + 1) * listData.num);
						listData.flag = true;
					})
				}
			} else {
				$scope.newsMore = function() {
					return false
				};
			}
		}
	}])
	.directive('newsChange', function() {
		return {
			restrict: 'A',
			link: function(scope, ele, attr) {
				ele.on('click', function() {
					scope.$apply(function() {
						scope.$parent.newsContent = scope.item.news_content;
					})
					if (scope.$parent.isM) {
						$('.close-panel').removeClass('hidden')
						$('.news-container').addClass('active')
						$(body).css('overflow', 'hidden')
					}
				})

			}
		}
	})
	.directive('fixTop', function() {
		return {
			restrict: "A",
			link: function(scope, ele, attr) {
				setTimeout(function() {
					var offsetTop = ele[0].offsetTop,
						eleWidth = ele[0].offsetWidth,
						contentWidth = $('.content').width(),
						ww = window.document.body.clientWidth,
						wh = window.innerHeight,
						isfixed = false;

					var handleScroll = function(data) {
						if (data) {
							var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

							if (scrollTop >= offsetTop) {
								ele.css({
									position: 'fixed',
									top: '0',
									width: eleWidth + 'px',
									right: (ww - contentWidth) / 2 + 'px'
								})
								isfixed = true;
							} else {
								ele.css('position') == 'fixed' ? ele.css({
									position: 'static',
									top: '0',
									right: '0',
									width: '30%'
								}) : ''
								isfixed = false;
							}
							//加上上边框
						}
					}
					handleScroll(true)
					scope.$on('isScroll', function(event, data) {
						handleScroll(data)
					})
					scope.$on('isResize', function(event, data) {
						offsetTop = $('.news-container').offset().top;
						eleWidth = contentWidth * 0.3;
						contentWidth = $('.content').width();
						ww = data.ww;
						wh = data.wh;
						if (isfixed) {
							console.log(contentWidth * 0.3)
							ele.css({
								width: eleWidth + "px",
								right: (ww - contentWidth) / 2 + 'px'
							})
						} else if (!isfixed) {
							ele.css({
								width: '30%',
							})
						}
					})

					ele.on('scroll', function() {
						if (490 + ele[0].scrollTop > $('.news-list ul').outerHeight(true) - 10) {
							scope.newsMore()
						}
					})
				}, 100)
			}
		}
	})