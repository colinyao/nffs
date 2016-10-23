angular.module('myApp.newsCtrl',[])
.controller('newsCtrl',['$scope',function($scope){
	$scope.newsList=[{
           title:'这是新闻标题这是新闻标题这是新闻标题这是新闻标题',
           content:'<p>这是内容一</p>'
	},{
          title:'这是新闻标题',
          content:'<p>这是内容二</p>'
	}];
       $scope.newsData=$scope.newsList[0].content;

}])
.directive('newsChange',function(){
	return{
		restrict:'A',
		link:function(scope,ele,attr){
			ele.on('click',function(){
				scope.$apply(function(){
				     scope.$parent.newsData=scope.item.content;		
				})

			})
		}
	}
})