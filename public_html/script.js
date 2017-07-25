/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myapp",[]);
app.controller("mainCtrl",function($scope){
    $scope.items = ['apple','banana','mango'];
    $scope.additem = function(){
        $scope.items.push($scope.newitem);
    };
    $scope.remove = function(item){
        $scope.items.splice(item,1);
    };
});