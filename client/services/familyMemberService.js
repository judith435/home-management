homeManagementApp.service('familyMemberService', function($http) {
    
    this.getFamilyMembers = function (success) { 
        $http.get('http://localhost:8081/family/ddl',{}).then(success, error);
    }


    function error(response) {
        alert("Sorry Error occured in $http: " + JSON.stringify(response));
    }
});
