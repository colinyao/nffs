 angular.module('myApp.router', ['ui.router', 'oc.lazyLoad'])
   .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('about', {
         url: '/about',
         templateUrl: '/views/about.html',
         controller: 'aboutCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/lib/slider.js',
               'src/js/controllers/aboutCtrl.js'
             ]).then(function() {
               // inject the lazy loaded service

             });

           }]
         }
       })
       .state('works', {
         url: '/works',
         templateUrl: '/views/works.html',
       })
       .state('news', {
         url: '/news',
         templateUrl: '/views/news.html'
       })
       .state('atmaster', {
         url: '/atmaster',
         templateUrl: '/views/atmaster.html',
       })
       .state('observed', {
         url: '/observed',
         templateUrl: '/views/observed.html',
       })
       .state('contact', {
         url: '/contact',
         templateUrl: '/views/contact.html',
       });
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