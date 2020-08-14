angular.module('myApp')
    .controller('employeeDetailsController', ['$scope', '$http', function ($scope, $http) {
        $scope.employeeDetails = [];


        // get the Employee data from the table 
        $scope.employeeDetails =

            $http({
                method: 'get',
                url: 'https://localhost:44317/api/employeeDetails'
            })
                .then(res => {
                    $scope.employeeDetails = res.data
                }).catch(err => { console.log(err) });

        //delete the Employee data from the data
        $scope.dltEmployee = function (empId) {
            alert("do you want to delete this employee");
            var url = "https://localhost:44317/api/employeeDetails/" + empId;

            return $http({
                method: 'delete',
                data: empId,
                url: url
            });
        }

        //Insert the Employee data 
        $scope.InsertEmp = function (EmployeeDetails) {
            $http({
                method: 'post',
                data: EmployeeDetails,
                url: 'https://localhost:44317/api/employeeDetails',
                header: { 'Content-Type': 'multipart/form-data' }
            }).then(function (response) { alert("Inserted employee details successfully") });
        }

        //Get the Department data based on the Employee Id
        $scope.EmployeeDetails = { empId: "", empName: "", empSalary: "", empSalary: "" }
        $scope.EmptGetById = function (empId) {
            $http.get('https://localhost:44317/api/employeeDetails/' + empId).then(function (response) {

                $scope.EmployeeDetails = response.data;
            });
        }

        //Update the EmployeeDetails 

        $scope.UpdateEmpDetails = function (empformdata) {
            confirm("Are you Sure, You want to update Employee Id : " + empformdata.empId);
            debugger;
            $http.put('https://localhost:44317/api/employeeDetails/', empformdata).then(function () {

                alert("Updated Successfully")
            });
        }
    }]);






/*angular.module('myApp')
    .controller('employeeDetailsController', ['$scope','$http', function ($scope, $http) {
        $scope.employeeDetails = [];

        $scope.getemployeeDetails =

            $http({
                method: 'get',
                url: 'http://localhost:8080/api/employeeDetails'
            })
                .then(function (response) { $scope.employeeDetails = response.data.employeeDetails }, function (response) { alert("No data Found") });

            *//*$http.ajax({
            method: 'get',
            url: 'http://localhost:8080/api/employeeDetails',
            xhrFields: {
                withCredentials: true
            }
        })
            .then(function (response) { $scope.employeeDetails = response.data.employeeDetails }, function (response) { alert("No data Found") });
*/


        /*.then(function (response) {
                    if (!response.data.employeeDetails) { return; }
                    $scope.employeeDetails = response.data.employeeDetails;
                }, function (response) {
                    if (!response.data) { return; }
                    alert("Employees " + response.data);
                });*/
    /*$scope.testName = 'hello';*/
/*
        $http.ajax({
            type: 'get',
            url: 'http://www.example.com/api/test',
            xhrFields: {
                withCredentials: true
            }*/
              /*.then(function (response) { $scope.employeeDetails = response.data.employeeDetails }, function (response) { alert("No data Found") });*//*


    }]);*/

 


