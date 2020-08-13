angular.module('myApp')
    .controller('departmentDetailsController', ['$scope', '$http', function ($scope, $http) {
        $scope.departmentDetails = [];

        $scope.departmentDetails =

            $http({
                method: 'get',
                url: 'https://localhost:44317/api/departmentDetails'
            })
                .then(res => {
                    $scope.departmentDetails = res.data
                }).catch(err => { console.log(err) });
    }]);