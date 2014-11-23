// Index: http://localhost/views/task/index.html

app.controller('TaskCtrl', function ($scope, taskRestangular) {

  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 }
  ];
  

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/task/show.html?id="+id);
    steroids.layers.push(webView);
  };

  $scope.myTasks = 1; 


  // Fetch all objects from the local JSON (see app/models/task.js)
  taskRestangular.all('task').getList().then(function(tasks){
    $scope.tasks = tasks;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("tasks");

});


// Show: http://localhost/views/task/show.html?id=<id>

app.controller('ShowCtrl', function ($scope, $filter, taskRestangular) {

  // Fetch all objects from the local JSON (see app/models/task.js)
  taskRestangular.all('task').getList().then( function(tasks) {
    // Then select the one based on the view's id query parameter
    $scope.task = $filter('filter')(tasks, {task_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("task " + steroids.view.params.id );

});
