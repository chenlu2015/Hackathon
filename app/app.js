var app = angular.module('myApp', ['ngTouch', 'taskModel']);

// Index: http://localhost/views/login/index.html

app.controller('LoginCtrl', function ($scope) {

  // Native navigation
  steroids.view.navigationBar.show("User Login");
  steroids.view.setBackgroundColor("#FFFFFF");

  $scope.tasks = function() {
    webView = new steroids.views.WebView("/views/task/index.html");
    steroids.layers.push(webView);
  }

});

