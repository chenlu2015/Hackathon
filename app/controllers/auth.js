'use strict';
 
app.controller('AuthCtrl',
  function ($scope, $location, Auth, User, $rootScope) {

    // Native navigation
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

    $scope.show = 'login';

    $scope.goback = function() {
     steroids.layers.pop();
    }


  });