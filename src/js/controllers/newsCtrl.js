angular.module('myApp.newsCtrl',[])
.controller('newsCtrl',['$scope',function($scope){
	$scope.newsList=[{
           title:'这是新闻标题',
           content:'<p>这是内容</p>'
	},{
          title:'这是新闻标题',
          content:'<p>这是内容</p>'
	}];
       $scope.newsData=$scope.newsList[0].content;

}])