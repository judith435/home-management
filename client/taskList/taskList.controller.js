homeManagementApp.controller('taskListCtrl', function handleTasks($scope, taskService) {
    getTasks();
    
    function getTasks() {
        taskService.getTasks(function(familyTasks) {
            const tasks = familyTasks.data;
            $scope.keys = Object.keys(tasks[0]);
            $scope.tasks = (familyTasks.data);
        });
    }
});
