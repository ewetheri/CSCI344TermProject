



(function() {
    console.log("running client");
    var app = angular.module('score', []);
    
    app.controller('ScoreController',  [ '$scope',    function($scope) {
        $scope.scores = "";
        
        $scope.experience = $scope.name = $scope.date = "";
       
        $.getJSON('getScores', function(result) {
            
            $scope.scores = result;          
            /*$scope.name = $scope.scores[0].name;         
            $scope.experience = $scope.scores[0].experience;
            $scope.date = $scope.scores[0].date;*/
            $scope.$apply();
        });
        
           

        
        
    } ]);
}());
