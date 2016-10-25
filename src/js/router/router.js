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
         controller: 'worksCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/controllers/worksCtrl.js'
             ]).then(function() {
               // inject the lazy loaded service

             });

           }]
         }
       })
       .state('news', {
         url: '/news',
         templateUrl: '/views/news.html',
         controller: 'newsCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/controllers/newsCtrl.js'
             ]).then(function() {
               // inject the lazy loaded service

             });

           }]
         }
       })
       .state('home', {
         url: '/home',
         templateUrl: '/views/home.html',
         controller: 'homeCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/lib/slider.js',
               'src/js/controllers/homeCtrl.js'
             ]).then(function() {
               // inject the lazy loaded service

             });

           }]
         }
       }).
     state('pdf', {
         url: '/viewer',
         templateUrl: '/views/pdf.html',
         controller: 'pdfCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             return $ocLazyLoad.load([
               'src/js/lib/pdfCtrl.js'
             ]).then(function() {

             })
           }]
         }
       })
       .state('observed', {
         url: '/observed',
         templateUrl: '/views/observed.html',
         controller: 'observedCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/controllers/observedCtrl.js',
               'src/js/lib/pdfobject.min.js'
             ]).then(function() {
               // inject the lazy loaded service

             });
           }]
         }
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