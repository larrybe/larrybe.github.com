(function () {
    angular.module('Financials', [])
    .directive('highestGrossing', function () {
        return {
            restrict: 'E',
            templateUrl: 'highestgrossing.html'
        }
    })
})