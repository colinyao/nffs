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
		addClass: function(classname) {
			var className = this.obj.className;
			var index = this.obj.className.indexOf(classname);
			if (index == -1) {
				this.obj.className = className + " " + classname;
			}
			return this;
		},
		removeClass: function(classname) {
			var className = this.obj.className;
			var index = this.obj.className.indexOf(classname);
			if (index != -1) {
				this.obj.className = className.substring(0, index - 1) + className.substring(index + classname.length)
			}
			return this;
		},
		hasClass: function(classname) {
			var index = this.obj.className.indexOf(classname);
			if (index != -1) {
				return true;
			}
			return false;
		}
	}



	function common(obj) {
		var c = new Common(obj);
		return c;
	}
	return common;
})