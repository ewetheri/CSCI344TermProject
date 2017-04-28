(function() {
    console.log("running client");
    var app = angular.module('score', []);
    
    app.controller('ScoreController',  [ '$scope',    function($scope) {
        $scope.name = "John";
        $scope.experience = "7,321";
        $scope.date = "4/5/15";
        
        $scope.all = function() {
			$.getJSON('getScores', function(result) {
					$scope.scores = result;
			});
		};
    } ]);
}());