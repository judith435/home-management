homeManagementApp.service('taskService', function($http) {
    
    this.getTasks = function (success) { 
        $http.get('http://localhost:8081/task',{}).then(success, error);
    }

    this.addTask = function(task, success, error) {
        $http({
            url: 'http://localhost:8081/task',
            method: 'POST',
            params: { task: task }
        }).then(success, error);
    }

    this.deleteTask = function(task, success, error) {
        $http({
            url: 'http://localhost:8081/task',
            method: 'DELETE',
            params: { task: task }
        }).then(success, error);
    }

    function error(response) {
        alert("Sorry Error occured in $http: " + JSON.stringify(response));
    }
});
