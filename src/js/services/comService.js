angular.module('myApp.comService', []).
filter('trustHtml', function($sce) {
	return function(input) {
		return $sce.trustAsHtml(input);
	}
}).
service('comService', function($http) {
	var Common = function() {
		this.init()
	}
	Common.prototype = {
		constructor: Common,
		init: function() {
			return this;
		},
		paging: function(options) {
			this.ajax(options)
		},
		ajax: function(options) {
			var url = options.url;
			var data = options.data;
			$http.post(url, data, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				})
				.success(function(res) {
					if (data.success) {
						data.success(res)
					}
				}).error(function(res) {
					if (data.fail) {
						data.fail()
					}
					//console.log(JSON.stringify(res))
				})
		}
	}



	var c = new Common();

	return c;
})