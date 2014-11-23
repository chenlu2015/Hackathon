'use strict';
 
app.controller('AuthCtrl',
  function ($scope, $location, Auth, User, $rootScope) {

     // Native navigation
      steroids.view.navigationBar.show("User Login");
      steroids.view.setBackgroundColor("#FFFFFF");

    $scope.login = function () {
      Auth.login($scope.user);
    };

    $scope.register = function () {
      Auth.register($scope.user);
    };

    $scope.logout = function(){
      Auth.logout();
    }

    $scope.show = 'register';

    $scope.tasks = function() {
      var webView = new steroids.views.WebView("/views/task/index.html");
      steroids.layers.push(webView);
    }

  });