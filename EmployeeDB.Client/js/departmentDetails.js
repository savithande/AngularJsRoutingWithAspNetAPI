angular.module('myApp')
    .controller('departmentDetailsController', ['$scope', '$http', function ($scope, $http) {
        $scope.departmentDetails = [];

        //Read the Department data from the databse
        $scope.departmentDetails =

            $http({
                method: 'get',
                url: 'https://localhost:44317/api/departmentDetails'
            })
                .then(res => {
                    $scope.departmentDetails = res.data
                }).catch(err => { console.log(err) });

        //Delete the department details fom the table
        $scope.dltEmployee = function (deptId) {
            alert("do you want to delete this Employee");
            var url = 'https://localhost:44317/api/departmentDetails/' + deptId;
            return $http({
                method: 'delete',
                data: deptId,
                url: url

            }).then(function (response) { alert("data deleted successfully") });
        }

        //Inserting the department data
        $scope.InsertDept = function (DepartmentDetails) {

           /* alert("enter the dept details");*/
                $http({
                    method: 'post',
                    data: DepartmentDetails,
                    url: 'https://localhost:44317/api/departmentDetails',
/*                    headers: { 'Content-Type': 'multipart/form-data' }
*/                }).then(function (response) { alert("Inserted employee details successfully") });
        }

        //Get the department details based on Id from DB

        $scope.DepartmentDetails = { deptId: "", deptName: "", numOfEmployees: "" }
        $scope.DeptGetById = function (deptId) {
            $http.get('https://localhost:44317/api/departmentDetails/' + deptId).then(function (response) {

                $scope.DepartmentDetails = response.data;
            });
        }

        //Update the DepartmentDetails 

        $scope.UpdateDeptDetails = function (deptformdata) {
            confirm("Are you Sure, You want to update department Id : " + deptformdata.deptId);
            debugger;
            $http.put('https://localhost:44317/api/departmentDetails/', deptformdata).then(function () {
                
                alert("Updated Successfully")
            });
        }

    }]);