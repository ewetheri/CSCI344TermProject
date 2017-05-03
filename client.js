







(function() {
    console.log("running client");
    var app = angular.module('score', []);

    app.controller('ScoreController',  [ '$scope',    function($scope) {
        $scope.scores = "";

        $scope.experience = $scope.name = $scope.date = "";

        $.getJSON('getScores', function(result) {

            $scope.scores = result;

            $scope.$apply();
        });

        $scope.all = function() {
            $.getJSON('getAll', function(res) {
                $scope.scores = res;
            })
        }



    } ]);
}());
