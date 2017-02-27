angular.module('myApp',['ui-router'])
.config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home',{
              url:'/home',
              templateUrl: "../home/homeTmpl.html",
              controller: '../home/homeCtrl.js',
              data: {
                css: '../home/homeStyle.css'
              }
          })
          state('view1',{
              url:'/',
              templateUrl: "../home/view1Tmpl.html",
              data: {
                css: '../home/view1Style.css'
              }
          })
          state('view2',{
              url:'/',
              templateUrl: "../home/view2Tmpl.html",
              data: {
                css: '../home/view2Style.css'
              }
          })
          state('view3',{
              url:'/',
              templateUrl: "../home/view3Tmpl.html",
              data: {
                css: '../home/view3Style.css'
              }
          })
          state('view4',{
              url:'/',
              templateUrl: "../home/view4Tmpl.html",
              data: {
                css: '../home/view4Style.css'
              }
          });

      $urlRouterProvider
          .otherwise('/');
  });
