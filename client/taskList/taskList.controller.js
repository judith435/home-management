homeManagementApp.controller('taskListCtrl', function handleTasks($scope, taskService) {

    getTasks();
    
    function getTasks() {
        taskService.getTasks(function(familyTasks) {
            const tasks = familyTasks.data;
            if(tasks.length > 0) {
                $scope.keys = Object.keys(tasks[0]);
                $scope.tasks = (familyTasks.data);
             }
             else {
                $scope.message = 'no tasks found for family'; 
             }
            
        });
    }

    $scope.deleteTask = function(task)  {

        taskService.deleteTask(task, function(response) {
            $scope.message = (JSON.stringify(response.data));
        });
        
    } 

});
