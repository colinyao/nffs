 angular.module('myApp.router', ['ui.router'])
   .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('index', {
         url: '/',
         templateUrl: 'index.html'
       })
       .state('home', {
         url: '/home',
         templateUrl: '/views/home.html'
       })
       // .state('traffic', {
       //   url: '/traffic',
       //   templateUrl: '/views/traffic.html',
       //   controller: 'trafficCtrl',
       //   resolve: {
       //     loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
       //       // you can lazy load files for an existing module
       //       return $ocLazyLoad.load([
       //         'http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css',
       //         'src/js/service/mapService.js',
       //         'src/js/controller/trafficCtrl.js'
       //       ]).then(function() {
       //         // inject the lazy loaded service

     //       });

     //     }]
     //   }
     // });
     $urlRouterProvider.otherwise('/');
   });