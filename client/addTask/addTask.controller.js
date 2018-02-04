homeManagementApp.controller('addTaskCtrl', function addProduct($scope, taskService, familyMemberService) {
    fillFamilyMembersDDL();
    function fillFamilyMembersDDL() {
        familyMemberService.getFamilyMembers(function(familyMembers) {
            $scope.options = familyMembers.data[0];
        });
    }

    // $scope.addTask = function()  {
    //     $scope.errorsFound = false;
    //     // $scope.form.fields.forEach(function(field) {
    //     //     field.errorMessage = (!field.content)  && field.required ? field.description + ' required' : '';
    //     //     $scope.errorsFound = field.errorMessage !== '' || $scope.errorsFound;
    //     // });
    //     // if ($scope.errorsFound) { return; }
    //     // alert ('no errors found!!!');

    //     let index = 0;
    //     task = {
    //         productName: $scope.form.fields[index].content,
    //         supplierID: $scope.form.fields[++index].content,
    //         categoryID: $scope.form.fields[++index].content,
    //         quantityPerUnit: $scope.form.fields[++index].content,
    //         unitPrice: $scope.form.fields[++index].content,
    //         discontinued: $scope.form.fields[++index].content
    //     };

    //     $scope.duplicateProductErrorMessage = '';
    //     if (!productService.checkDuplicateProduct(product))
    //     {
    //         $scope.errorsFound = true;
    //         $scope.duplicateProductErrorMessage = 'product with same name, supplier and category already exists';
    //         return;
    //     } 

    //     productService.addProduct(product, function(response) {
    //         $scope.message = (JSON.stringify(response.data));
    //     });
    //     $scope.errorsFound = false;
    //     $scope.duplicateFound = false;
    // }  


});


