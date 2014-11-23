var app = angular.module('myApp', ['ngTouch', 'taskModel', 'firebase', 'ngRoute']);


app.constant('FIREBASE_URL', 'https://taskrhackathon.firebaseIO.com/');

// app.config(function ($routeProvider) {
// $routeProvider
//   .when('/', {
//     templateUrl: 'views/posts.html',
//     controller: 'PostsCtrl'
//   })
//   .when('/posts/:postId', {
//     templateUrl: 'views/showpost.html',
//     controller: 'PostViewCtrl'
//   })
//   .when('/register', {
//     templateUrl: 'views/register.html',
//     controller: 'AuthCtrl'
//   })
//   .when('/login', {
//     templateUrl: 'views/login.html',
//     controller: 'AuthCtrl'
//   })
//   .when('/users/:username', {
//     templateUrl: 'views/profile.html',
//     controller: 'ProfileCtrl'
//   })
//   .otherwise({
//     redirectTo: '/'
//   });
// });
app.controller('LoginCtrl', function ($scope) {

  // Native navigation
  steroids.view.navigationBar.show("User Login");
  steroids.view.setBackgroundColor("#FFFFFF");

  $scope.tasks = function() {
    webView = new steroids.views.WebView("/views/task/index.html");
    steroids.layers.push(webView);
  }

});

