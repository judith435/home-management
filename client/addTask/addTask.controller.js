homeManagementApp.controller('addTaskCtrl', function addTask($scope, taskService, familyMemberService) {

    fillFamilyMembersDDL();

    function fillFamilyMembersDDL() {
        familyMemberService.getFamilyMembers(function(familyMembers) {
            $scope.options = familyMembers.data[0];
        });
    }

    $scope.addTask = function()  {

        validateInput();
        if ($scope.errorsFound) { return; }

        let index = 0;
        var task = {
            description: $scope.description,
            familyMember: $scope.familyMember
        };

        taskService.addTask(task, function(response) {
            $scope.message = (JSON.stringify(response.data));
        });
        
        $scope.errorsFound = false;
    } 
    
    function validateInput() {
        $scope.errorsFound = false;

        $scope.taskDescription_errorMessage = !$scope.description ? 'Task Description required' : '';
        $scope.errorsFound = $scope.taskDescription_errorMessage !== '' || $scope.errorsFound;

        $scope.familyMember_errorMessage = !$scope.familyMember ? 'Please select Family Member' : '';
        $scope.errorsFound = $scope.familyMember_errorMessage !== '' || $scope.errorsFound;
    }    

});


