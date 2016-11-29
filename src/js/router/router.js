 angular.module('myApp.router', ['ui.router', 'oc.lazyLoad'])
   .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('about', {
         url: '/about',
         templateUrl: '/nffs/views/about.html',
         controller: 'aboutCtrl',
         resolve: {
           aboutInfo: function($http, $rootScope) {
             return $http({
               method: 'get',
               url: 'http://nffs.xulog.com/nffs/api/about_info'
             });
           },
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
         templateUrl: "/nffs/views/works.html",
         views: {
           "body@workContent": {
             templateUrl: '/nffs/templates/worksList.html'
           }
         },
         controller: 'worksCtrl',
         resolve: {
           // workInfo: function($http) {
           //   return $http({
           //     method: 'get',
           //     url: 'http://nffs.xulog.com/nffs/api/work_info'
           //   });
           // },
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/lib/slider.js',
               'src/js/controllers/worksCtrl.js'
             ]).then(function() {
               // inject the lazy loaded service

             });
           }]
         }
       })
       .state('works.detail', {
         url: '/works/:id',
         views: {
           "body@workContent": {
             templateUrl: '/nffs/templates/workDetail.html'
           }
         }
       })
       .state('news', {
         url: '/news',
         templateUrl: '/nffs/views/news.html',
         controller: 'newsCtrl',
         resolve: {
           newsData: function($http) {
             return $http({
               method: 'get',
               url: 'http://nffs.xulog.com/nffs/api/news_list'
             })
           },
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
         templateUrl: '/nffs/views/home.html',
         controller: 'homeCtrl',
         resolve: {
           indexInfo: function($http) {

             return $http({
               method: 'get',
               url: 'http://nffs.xulog.com/nffs/api/index_info'
             });
           },
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
       }).state('pdf', {
         url: '/pdf?file', //定义了file参数名，才能在stateParams中获取到file
         templateUrl: '/nffs/views/pdf.html',
         controller: 'pdfCtrl',
         resolve: {
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             return $ocLazyLoad.load([
               'src/js/controllers/pdfCtrl.js'
             ]).then(function() {})
           }]
         }
       })
       .state('observed', {
         url: '/observed',
         templateUrl: '/nffs/views/observed.html',
         controller: 'observedCtrl',
         resolve: {
           pdfData: function($http) {
             return $http({
               method: 'get',
               url: 'http://nffs.xulog.com/nffs/api/pdf_info'
             });
           },
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
             return $ocLazyLoad.load([
               'src/js/controllers/observedCtrl.js',
             ]).then(function() {
               // inject the lazy loaded service

             });
           }]
         }
       })
       .state('contact', {
         url: '/contact',
         templateUrl: '/nffs/views/contact.html',
       })
       .state('atmaster', {
         url: '/atmaster',
         controller: function() {
           window.location.href = "http://www.aitaa.cn"
         }
       });;

     $urlRouterProvider.otherwise('/home');
   });