// Index: http://localhost/views/task/index.html

app.controller('TaskCtrl', function ($scope, $filter, taskRestangular, $rootScope) {

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

  $scope.moveMyItem = function(item, fromIndex, toIndex) {
    $scope.myitems.splice(fromIndex, 1);
    $scope.myitems.splice(toIndex, 0, item);
  };
  $scope.logout = function() {
    var webView = new steroids.views.WebView("/logout.html");
    steroids.layers.push(webView);
  };
  $scope.showanalytics = function() {
    var webView = new steroids.views.WebView("/views/task/analytics.html");
    steroids.layers.push(webView);
  }

  $scope.showPage = 1; 

  $scope.ownerID = steroids.view.params['user'];


  // Fetch all objects from the local JSON (see app/models/task.js)
  taskRestangular.all('task').getList().then(function(tasks){
    $scope.items = tasks;
    $scope.myitems = $filter('filter')(tasks, {owner_id: steroids.view.params['user']});
  });


});


// Show: http://localhost/views/task/show.html?id=<id>

app.controller('AnalyticCtrl', function ($scope, $filter, taskRestangular) {

  taskRestangular.all('task').getList().then(function(tasks){
    $scope.items = tasks;
    $scope.myitems = $filter('filter')(tasks, {owner_id: steroids.view.params['user']});
  });


});
