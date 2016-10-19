angular.module('myApp.comService', []).
service('comService', function() {
	var Common = function(obj) {
		this.init(obj)
	}
	Common.prototype = {
		constructor: Common,
		init: function(obj) {
			this.obj = obj;
			return this;
		},
             
	}



	function common(obj) {
		var c = new Common(obj);
		return c;
	}
	return common;
})