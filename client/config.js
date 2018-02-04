homeManagementApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'taskList/taskList.html'
    })
    .when('/TodoList', {
        templateUrl: 'taskList/taskList.html'
    })
    .when('/AddTodo', {
        templateUrl: 'addTask/addTask.html'
    })
});