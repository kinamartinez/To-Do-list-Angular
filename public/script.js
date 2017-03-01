/**
 * Created by karina on 28/02/17.
 */
"use strict";

app.controller('someText', ['$scope', function($scope) {
    $scope.someNames = [];
    $scope.submit = function(){
       if ($scope.text){
           $scope.someNames.push(this.text);
        $scope.text = "";}
    };
    $scope.removeText = function () {
        $scope.someNames.splice(this.$index, 1);
    }
}]);



