var loginApp = angular.module('loginApp', ['LoginModel', 'ngTouch']);


// Index: http://localhost/views/login/index.html

loginApp.controller('IndexCtrl', function ($scope, LoginRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/login/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/login.js)
  LoginRestangular.all('login').getList().then( function(logins) {
    $scope.logins = logins;
  });

  // Native navigation
  steroids.view.navigationBar.show("User Login");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/login/show.html?id=<id>

loginApp.controller('ShowCtrl', function ($scope, $filter, LoginRestangular) {

  // Fetch all objects from the local JSON (see app/models/login.js)
  LoginRestangular.all('login').getList().then( function(logins) {
    // Then select the one based on the view's id query parameter
    $scope.login = $filter('filter')(logins, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Login: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
