angular.module('myApp.newsCtrl', [])
	.controller('newsCtrl', ['$scope', function($scope) {
		$scope.newsList = [{
			title: '这是新闻标题这是新闻标题这是新闻标题这是新闻标题',
			time: '2016-10-1 10:12:18',
			des: '这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述',
			content: '<p>这是内容一</p>'
		}, {
			title: '这是新闻标题',
			des: '这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述',
			time: '2016-10-1 10:12:18',
			content: '<p>这是内容二</p>'
		}, {
			title: '这是新闻标题',
			des: '这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述',
			time: '2016-10-1 10:12:18',
			content: '<p>这是内容二</p>'
		}, {
			title: '这是新闻标题',
			des: '这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述',
			time: '2016-10-1 10:12:18',
			content: '<p>这是内容二</p>'
		}, {
			title: '这是新闻标题',
			des: '这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述',
			time: '2016-10-1 10:12:18',
			content: '<p>这是内容二</p>'
		}, {
			title: '这是新闻标题',
			des: '这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述',
			time: '2016-10-1 10:12:18',
			content: '<p>这是内容二</p>'
		}];
		$scope.newsData = $scope.newsList[0].content;
		ww = document.body.clientWidth;
		$scope.$on('isM', function(event, data) {
			$scope.isM = data;
		})
		$scope.newsContainerClose = function() {
			$('.close-panel').addClass('hidden')
			$('.news-container').removeClass('active')
			$(body).css('overflow', 'auto')
		}
	}])
	.directive('newsChange', function() {
		return {
			restrict: 'A',
			link: function(scope, ele, attr) {

				ele.on('click', function() {
					scope.$apply(function() {
						scope.$parent.newsData = scope.item.content;
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
	.directive('fixTop', function(comService) {
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

					ww > 768 ? ele.css('height', wh + "px") : '';
					scope.$on('isScroll', function(event, data) {
						if (data && ww > 768) {
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
					})
					scope.$on('isResize', function(event, data) {
						offsetTop = $('.news-container').offset().top;
						eleWidth = ele[0].offsetWidth;
						contentWidth = $('.content').width();
						ww = data.ww;
						wh = data.wh;
						if (ww > 768 && isfixed) {
							ele.css({
								width: '30%',
								height: wh + "px",
								right: (ww - contentWidth) / 2 + 'px'
							})
						} else if (ww > 768 && !isfixed) {
							ele.css({
								width: '30%',
								height: wh + "px"
							})
						} else if (ww < 768) {

							ele.css({
								position: 'static',
								top: '0',
								right: '0',
								width: '100%',
								height: 'auto'
							})

						}
					})

					ele.on('scroll', function() {
						if (wh + ele[0].scrollTop > $('.news-list ul').outerHeight(true)) {
							comService.ajax({
								url: "",
								data: '',
								success: function() {

								}
							})
						}
					})
				}, 100)
			}
		}
	})