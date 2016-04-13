'use strict';

/**
 * @ngdoc overview
 * @name 515App
 * @description
 * # 515App
 *
 * Main module of the application.
 */
angular
  .module('515App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .otherwise({
            redirectTo: '/'
        })
  })
    .factory('filmsList', ['$http', function ($http) {
        return $http.get('./films.json');
    }])
    .factory('sortFilms', ['$filter', '$log', function ($filter, $log) {
        return function (array, expression) {
            return $filter('orderBy')(array, expression, true);
        }
    }])
    .directive('moneyMatters', ['filmsList', 'sortFilms', function (filmsList, sortFilms) {
        return {
            restrict: 'E',
            templateUrl: '/scripts/highestgrossing.html',
            controller: function ($scope, $log) {
                $scope.options = { region: 'worldwide', adjusted: 'false' };
                filmsList.then(function (data) {
                    $scope.films = data.data;
                    $scope.$watch('options', function () {
                        if ($scope.options.region === 'worldwide') {
                            $scope.highestGrossingFive = sortFilms($scope.films.five, 'worldwide.actual');
                            $scope.highestGrossingFifteen = sortFilms($scope.films.five, 'worldwide.actual');
                        } else {
                            $scope.highestGrossingFive = sortFilms($scope.films.five, 'domestic.actual');
                            $scope.highestGrossingFifteen = sortFilms($scope.films.five, 'domestic.actual');
                        }
                    }, true)
                });
            }
        }
    }])
/*var sorted = {
    five: {
        worldwide: {},
        domestic: {},
        budget: {}
    },
    fifteen: {
        worldwide: {},
        domestic: {},
        budget: {}
    }
};
$scope.options = { region: 'world', adjusted: 'false' };
$scope.highestGrossing
$scope.initMoneyMatters = function (array1, array2) {
    sorted.five.worldwide = $filter('orderBy')(array1, 'worldwide.actual', true);
    sorted.five.domestic = $filter('orderBy')(array1, 'domestic.actual', true);
    sorted.five.budget = $filter('orderBy')(array1, 'budget.actual', true);
    sorted.fifteen.worldwide = $filter('orderBy')(array2, 'worldwide', true);
    sorted.fifteen.domestic = $filter('orderBy')(array2, 'domestic', true);
    sorted.fifteen.budget = $filter('orderBy')(array2, 'budget', true);
    $log.log(sorted.five.domestic);
    $scope.highestGrossing = sorted;
}

$scope.test = $scope.highestGrossing.five.worldwide[0].title
if ($scope.options.region === 'world') {
    if ($scope.options.adjusted === 'false') {
    }
}*/
/*$scope.highestGrossingTitle = function (array) {
    if (array) {
        if ($scope.region === 'world') {
            sortedArray = $filter('orderBy')(array, 'worldwide', true);
            return sortedArray[0].title;
        } else {
            sortedArray = $filter('orderBy')(array, 'domestic', true);
            return sortedArray[0].title;
        }
    }
};*/
/*$scope.$watch('options', function () {
    if ($scope.options.adjusted === 'true') {
        $log.log($scope.options);
    }

}, true)
$scope.highestGrossing = function (array) {
    if (array) {
        sortedArray = $filter('orderBy')(array, 'domestic', true);
        return sortedArray[0].domestic;
    }
};
$scope.totalGrossing = function (array) {
    var totalGross = 0;
    if (array) {
        for (var i = 0; i < array.length; i++) {
            totalGross += array[i].domestic;
        }
    }
    return totalGross;
}
$scope.largestBudgetTitle = function (array) {
    if (array) {
        sortedArray = $filter('orderBy')(array, 'budget', true);
        return sortedArray[0].title;
    }
};
$scope.largestBudget = function (array) {
    if (array) {
        sortedArray = $filter('orderBy')(array, 'budget', true);
        return sortedArray[0].budget;
    }
};*/
