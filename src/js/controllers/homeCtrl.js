angular.module('myApp.homeCtrl', []).
controller('homeCtrl', ['$scope', 'indexInfo', function($scope, indexInfo) {
		$scope.banners = indexInfo.data.index_banner;
		$scope.filters = indexInfo.data.index_content;
		$scope.des = [{
			title: "我们是谁",
			content: "搭建微信微博博客、SNS等社会化媒体平台，运营及营销，建立品牌与用户之间的强关系，帮助企业进行有效推广。"
		}, {
			title: "我们的作品",
			content: "基于深刻的消费者洞察，为品牌量身打造全套数字营销传播方案，已大创意贯穿数字营销各环节。"
		}, {
			title: "核心优势",
			content: "在策略层面构建全方位品牌体系，为品牌规划建立核心竞争力，以塑造强势品牌为目标，建立与众不同的品牌识别，为品牌设立目标、方向、原则与指导策略。"
		}]
	}])
	.directive('bannerInit', function() {
		return {
			restrict: "A",
			link: function(scope, ele, attr) {
				if (scope.$last == true) {
					$(function() {
						var bannerSlider = new Slider($('#banner_tabs'), {
							time: 5000,
							delay: 400,
							event: 'hover',
							auto: true,
							mode: 'fade',
							controller: $('#bannerCtrl'),
							activeControllerCls: 'active'
						});
						$('#banner_tabs .flex-prev').click(function() {
							bannerSlider.prev()
						});
						$('#banner_tabs .flex-next').click(function() {
							bannerSlider.next()
						});
					})
				}

			}
		}
	})