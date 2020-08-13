angular.module('myApp')
    .controller('employeeDetailsController', ['$scope', '$http', function ($scope, $http) {
        $scope.employeeDetails = [];

        $scope.employeeDetails =

            $http({
                method: 'get',
                url: 'https://localhost:44317/api/employeeDetails'
            })
                .then(res => {
                    $scope.employeeDetails = res.data
                }).catch(err => { console.log(err) });
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

 


