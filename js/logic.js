var myapp = angular.module("mainApp",[]);
myapp.controller("testController",function($scope)
{
    $scope.value=data.food;
    console.log($scope.value);
})