var taskApp = angular.module('taskApp', ['taskModel', 'mobile-angular-ui']);

// Index: http://localhost/views/task/index.html

taskApp.controller('IndexCtrl', function ($scope, taskRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/task/show.html?id="+id);
    steroids.layers.push(webView);
  };

  $scope.direct = function(url) {
    webView = new steroids.views.WebView("/views/task/"+ url + ".html");
    steroids.layers.push(webView);
  };



  // Fetch all objects from the local JSON (see app/models/task.js)
  taskRestangular.all('task').getList().then(function(tasks){
    $scope.tasks = tasks;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("tasks");

});


// Show: http://localhost/views/task/show.html?id=<id>

taskApp.controller('ShowCtrl', function ($scope, $filter, taskRestangular) {

  // Fetch all objects from the local JSON (see app/models/task.js)
  taskRestangular.all('task').getList().then( function(tasks) {
    // Then select the one based on the view's id query parameter
    $scope.task = $filter('filter')(tasks, {task_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("task " + steroids.view.params.id );

});
