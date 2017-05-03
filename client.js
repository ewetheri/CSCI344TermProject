




(function() {
    $(document).ready(function() {
        $("#ten").hide();
    })
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
            $("#all").hide();
            $("#ten").show();
            $.getJSON('getAll', function(res) {
                $scope.scores = res;
                $scope.$apply();
            })
        }

        $scope.ten = function() {
            $("#all").show();
            $("#ten").hide();
            $.getJSON('getScores', function(res) {
                $scope.scores = res;
                $scope.$apply();
            })
        }

    } ]);
}());
