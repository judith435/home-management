homeManagementApp.service('taskService', function($http) {
    
    this.getTasks = function (success) { 
        $http.get('http://localhost:8081/task',{}).then(success, error);
    }

    this.addTask = function(prod, success, error) {
        // $http({
        //     url: 'http://localhost:8081/product',
        //     method: 'POST',
        //     params: { product: prod }
        // }).then(success, error);
    }

    function error(response) {
        alert("Sorry Error occured in $http: " + JSON.stringify(response));
    }
});
