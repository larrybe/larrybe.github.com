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
    .factory('sortFilms', ['$filter', function ($filter) {
        return function (array, expression) {
            return $filter('orderBy')(array, expression, true);
        }
    }])
    .factory('currencyFormat', ['$filter', function ($filter) {
        return function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (Math.floor(amount).toString().length < 4) {
                if (amount % 1 === 0) {
                    return $filter('currency')(amount, '$', 0) + ' Million';
                } else {
                    return $filter('currency')(amount, '$', 1) + ' Million';
                }
            } else {
                return $filter('currency')(amount / 1000, '$', 3) + ' Billion';
            };
        }
    }])
    .factory('getTotal', function () {
        return function (array, property, optProp) {
            var total = 0;
            if (!optProp) {
                for (var i = 0; i < array.length; i++) {
                    total += array[i][property];
                }
                return total;
            } else {
                for (var i = 0; i < array.length; i++) {
                    total += array[i][property][optProp];
                }
                return total;
            }
        }
    })
    .factory('timeFormat', function () {
        return function (timeInMinutes) {
            if (timeInMinutes % 60 === 0) {
                return timeInMinutes / 60 + ' Hours';
            } else {
                return Math.floor(timeInMinutes / 60) + ' Hours' + ' & ' + timeInMinutes % 60 + ' Minutes';
            }
        }
    })
    .factory('getAverage', function () {
        return function (array, property) {
            var total = 0;
            for (var i = 0; i < array.length; i++) {
                total += array[i][property];
            }
            return total / array.length;
        }
    })
    .factory('groupGenres', [function () {
        return function (array, genre) {
            var groupedGenres = {};
            var currentArray;
            for (var i = 0; i < genre.length; i++) {
                for (var j = 0; j < array.length; j++) {
                    if (array[j]['genre'] === genre[i]) {
                        if (angular.isObject(array[j].worldwide)) {
                            currentArray = { title: array[j].title, gross: array[j].worldwide.actual };
                        } else {
                            currentArray = { title: array[j].title, gross: array[j].worldwide };
                        }
                        if (!groupedGenres[genre[i]]) {
                            groupedGenres[genre[i]] = [];
                            groupedGenres[genre[i]].push(currentArray);
                        } else {
                            groupedGenres[genre[i]].push(currentArray);
                        }
                    }
                }
            }
            return groupedGenres;
        }
    }])
    .factory('genreLength', [function () {
        return function (array, genre) {
            if (!array[genre]) {
                return 0;
            } else {
                return array[genre].length;
            }
        }
    }])
    .factory('genreGross', [function () {
        return function (array, property) {
            if (!array) {
                return 0;
            }
            var total = 0;
            for (var i = 0; i < array.length; i++) {
                total += array[i][property];
            }
            return total;
        }
    }])
    .factory('groupSources', [function () {
        return function (array, sourceArray) {

            var sources = {};
            var groupedSources = {};
            for (var i = 0; i < sourceArray.length; i++) {
                for (var j = 0; j < array.length; j++) {
                    for (var k = 0; k < array[i].source.length; k++) {
                        var currentArray = { title: [], gross: 0 };
                        if (array[j].source[k] === sourceArray[i]) {
                            if (angular.isObject(array[j].worldwide)) {
                                currentArray = { title: array[j].title, gross: array[j].worldwide.actual };
                            } else {
                                currentArray = { title: array[j].title, gross: array[j].worldwide };
                            }
                            if (!groupedSources[sourceArray[i]]) {
                                groupedSources[sourceArray[i]] = [];
                                groupedSources[sourceArray[i]].push(currentArray);
                            } else {
                                groupedSources[sourceArray[i]].push(currentArray);
                            }
                        }
                    }
                }
            }
            return groupedSources;
        }
    }])
    .factory('sourceTitles', function () {
        return function (array, sourceArray) {
            var titles = [];
            for (var i = 0; i < array[sourceArray].length; i++) {
                titles.push(array[sourceArray][i].title)
            }
            return titles.join(", ")
        }
    })
    .factory('makeGrossingChart', ['currencyFormat', 'getTotal', function (currencyFormat, getTotal) {
        return function (year, select, idName, color, offsetY, data, domain, range, propertyName, optProperty) {
            var ramp = d3.scale.linear().domain(domain).range(range);
            var offsetX = 0;
            var total = currencyFormat(getTotal(data, propertyName));
            var svg = d3.select(select);

                var g = svg.append('g')
                    .attr('id', idName);

            var year = g.append('g')
                    .append('text')
                    .text(year)
                    .attr('x', 0)
                    .attr('y', offsetY + 20)
                    .style('fill', '#000');

            var bars = g.style('fill', function (d, i) { return d3.rgb(color[0], color[1], color[2]) })
                    .selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                    .attr('height', 30)
                    .style('stroke', 'white')
                    .style('stroke-width', '.2px')
                    .attr('y', offsetY)
                    .attr('data-index', function (d, i) {
                        return i
                    })
                    .attr('data-title', function (d, i) {
                        return d['title']
                    });
            function totalTickLine() {
                return d3.select('#'+idName)
                         .append('g')
                         .attr('x', 0)
                         .attr('y', 0)
                         .attr('id', idName + "-total-tick")                                        
                         .append('line')
                         .attr('x1', 0)
                         .attr('y1', 0)
                         .attr('x2', 0)
                         .attr('y2', 50)
                         .attr('stroke-width', .3)
                         .attr('stroke', 'black')
                         .attr('stroke', 'black')
            }
            function totalAmount() {
                return d3.select('#' + idName + '-total-tick')
                            .append('text')
                            .attr('id', idName + '-total-amount')
                            .attr('width', '50px')
                            .attr('x', '-95')
                            .attr('y', '45')

            }
            if (optProperty) {
                bars.attr('width', function (d) { return ramp(d[propertyName][optProperty]); })
                    .attr('x', function (d, i) {
                        i == 0 ? offsetX = 35 : offsetX += ramp(data[i - 1][propertyName][optProperty]);
                        return offsetX;
                    })
                    .each(function (d, i) {
                        if (i == 24) {
                            var that = d3.select(this);
                            var y = that.attr('y');
                            var positionX = parseFloat(that.attr('width')) + parseFloat(offsetX);
                            var totalTick = totalTickLine();
                            var totalTickAmount = totalAmount();
                        }
                    })
            } else {
                bars.attr('width', function (d) { return ramp(d[propertyName]); })
                    .attr('data-amount', function (d, i) {
                        return currencyFormat(d[propertyName]);
                    })
                    .attr('x', function (d, i) {
                        i == 0 ? offsetX = 35 : offsetX += ramp(data[i - 1][propertyName]);
                        return offsetX;
                    })
                    .each(function (d, i) {
                        if (i == 24) {
                            var that = d3.select(this);
                            var positionX = parseFloat(that.attr('width')) + parseFloat(offsetX);
                            var totalTick = totalTickLine()
                            d3.select('#'+idName+'-total-tick').attr('transform', 'translate(' + positionX + ', ' + offsetY + ')')
                            var totalTickAmount = totalAmount().text(total);                                         
                        }
                    })
            }
            bars.on('mouseover', mouseOver);
            bars.on('mouseout', mouseOut);

            function mouseOver(d) {
                var svgWidth = parseFloat(svg.style('width'));
                var that = d3.select(this);
                var x = parseFloat(that.attr('x'));
                var offsetX = parseFloat(that.attr('width')) + x;
                var y = that.attr('y');
                var dx = 0;
                var barInfo = d3.select('#' + idName)
                        .append('g')
                        .attr('class', idName + '-bar-info')
                        .attr('x', 0)
                        .attr('y', 0)
                        .attr('transform', 'translate(' + offsetX + ',' + offsetY + ')')
                var ticks = d3.select('.' + idName + '-bar-info')
                        .append('line')
                        .attr('x1', 0)
                        .attr('y1', 30)
                        .attr('x2', 0)
                        .attr('y2', -10)
                        .attr('stroke-width', .3)
                        .attr('stroke', 'black')
                        .attr('stroke', 'black')
                var barDetailsTitle = d3.select('.' + idName + '-bar-info')
                        .append('text')
                        .attr('x', 0)
                        .attr('y', -25)
                        .text(that.attr('data-title'))
                        .attr('dx', function () {                           
                            if (this.getBBox().width + x > svgWidth) {
                                dx = -that.attr('data-title').length / .14;
                            } else {
                                dx = 0;
                            }
                            return dx
                        })
                        .append('tspan')
                        .attr('dy', 15)
                        .text(that.attr('data-amount'))
                        .attr('x', function () {
                            if (this.getBBox().width + x > svgWidth) {
                                dx = -that.attr('data-title').length / .14;
                                d3.select('.' + idName + '-bar-info text').attr('dx', dx)
                            } else {
                                dx = 0;
                            }
                            return dx
                        })
            }

            function mouseOut(d) {
                var that = d3.select(this);
                d3.select('.' + idName + '-bar-info').remove();
            }

            var test = g.append('g')
                     .selectAll('text')
                     .data(bars[0][24])
                     .enter()
                     .append('text')
                     .text(function (d) { return d })
                     .attr('y', function (d, i) { return i * 10 })

            var lineData = [{ 'x': 0, 'y': 0 }, { 'x': 0, 'y': 40 },
                                { 'x': -15, 'y': 40 }]

            var lineFunction = d3.svg.line()
                            .x(function (d) { return d.x })
                            .y(function (d) { return d.y })
                            .interpolate('linear')
        }
    }])
    .factory('updateGrossingChart', ['currencyFormat', 'getTotal', function (currencyFormat, getTotal) {
        return function (select, data, domain, range, propertyName, optProperty) {
            var ramp = d3.scale.linear().domain(domain).range(range);
            var offsetX = 0;
            var positionX = 0;
            var positionY = 0;
            var total = currencyFormat(getTotal(data, propertyName, optProperty));
            var svg = d3.select('#'+ select)
                    .selectAll('rect')
                    .data(data)
                    .transition()
                    .duration(200)
                    .ease("ease-out")
                    .attr('data-amount', function (d, i) {
                        return currencyFormat(d[propertyName][optProperty])
                    })
                    .attr('width', function (d) { return ramp(d[propertyName][optProperty]); })
                    .attr('x', function (d, i) {
                        i == 0 ? offsetX = 35 : offsetX += ramp(data[i - 1][propertyName][optProperty]);
                        return offsetX;
                    })
                    .each(function (d, i) {
                        if (i == 24) {
                            var that = d3.select(this);
                            positionY = that.attr('y');
                            positionX = parseFloat(that.attr('width')) + parseFloat(offsetX);
                                }
                    })
            var totalTick = d3.select('#' + select + '-total-tick')
                        .transition()
                        .duration(200)
                        .ease("ease-out")
                        .attr('transform', 'translate(' + positionX + ', ' + positionY + ')');
            var tickAmount = d3.select('#'+select+'-total-amount')
                        .text(total)
        }
    }])
    .directive('grossing', ['filmsList', 'sortFilms', 'currencyFormat', 'getTotal', 'makeGrossingChart', 'updateGrossingChart', function (filmsList, sortFilms, currencyFormat, getTotal, makeGrossingChart, updateGrossingChart) {
        return {
            restrict: 'E',
            templateUrl: '/scripts/directives/highestgrossing.html',
            controller: function ($scope) {
                $scope.adjusted = 'false';
                filmsList.then(function (data) {
                    $scope.films = data.data;
                    var sortedGross05 = sortFilms($scope.films.five, 'worldwide.actual');
                    var sortedGross15 = sortFilms($scope.films.fifteen, 'worldwide');
                    $scope.highestGross15 = { title: sortedGross15[0].title, gross: currencyFormat(sortedGross15[0].worldwide) };
                    $scope.totalGross15 = currencyFormat(getTotal(sortedGross15, 'worldwide'));
                    makeGrossingChart('2015', '#total-gross .chart svg', 'grossing15', [77, 188, 233], 40, sortedGross15, [170, 2100], [1, 90], 'worldwide');
                    makeGrossingChart('2005', '#total-gross .chart svg', 'grossing05', [252, 157, 154], 140, sortedGross05, [170, 2100], [1, 90], 'worldwide', 'actual');
                    $scope.$watch('adjusted', function () {
                        if ($scope.adjusted === 'false') {
                            $scope.highestGross05 = { title: sortedGross05[0].title, gross: currencyFormat(sortedGross05[0].worldwide.actual) };
                            $scope.totalGross05 = currencyFormat(getTotal(sortedGross05, 'worldwide', 'actual'));
                            updateGrossingChart('grossing05', sortedGross05, [170, 2100], [1, 90], 'worldwide', 'actual');
                        } else {
                            $scope.highestGross05 = { title: sortedGross05[0].title, gross: currencyFormat(sortedGross05[0].worldwide.adjusted) };
                            $scope.totalGross05 = currencyFormat(getTotal(sortedGross05, 'worldwide', 'adjusted'));
                            updateGrossingChart('grossing05', sortedGross05, [170, 2100], [1, 90], 'worldwide', 'adjusted');
                        }
                    });
                });
            }
        }
    }])
.directive('budget', ['filmsList', 'sortFilms', 'currencyFormat', 'getTotal', 'makeGrossingChart', 'updateGrossingChart', function (filmsList, sortFilms, currencyFormat, getTotal, makeGrossingChart, updateGrossingChart) {
    return {
        restrict: 'E',
        templateUrl: '/scripts/directives/budget.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                $scope.films = data.data;
                var sortedBudget05 = sortFilms($scope.films.five, 'budget.actual');
                var sortedBudget15 = sortFilms($scope.films.fifteen, 'budget');
                $scope.highestBudget15 = { title: sortedBudget15[0].title, gross: currencyFormat(sortedBudget15[0].budget) };
                $scope.totalBudget15 = currencyFormat(getTotal(sortedBudget15, 'budget'));
                makeGrossingChart('2015', '#budget .chart svg', 'budget15', [77, 188, 233], 40, sortedBudget15, [10, 600], [1, 120], 'budget');
                makeGrossingChart('2005', '#budget .chart svg', 'budget05', [252, 157, 154], 140, sortedBudget05, [10, 600], [1, 120], 'budget', 'actual');
                $scope.$watch('adjusted', function () {
                    if ($scope.adjusted === 'false') {
                        $scope.highestBudget05 = { title: sortedBudget05[0].title, gross: currencyFormat(sortedBudget05[0].budget.actual) };
                        $scope.totalBudget05 = currencyFormat(getTotal(sortedBudget05, 'budget', 'actual'));
                        updateGrossingChart('budget05', sortedBudget05, [10, 600], [1, 120], 'budget', 'actual');
                    } else {
                        $scope.highestBudget05 = { title: sortedBudget05[0].title, gross: currencyFormat(sortedBudget05[0].budget.adjusted) };
                        $scope.totalBudget05 = currencyFormat(getTotal(sortedBudget05, 'budget', 'adjusted'));
                        updateGrossingChart('budget05', sortedBudget05, [10, 600], [1, 120], 'budget', 'adjusted');
                    }
                })
            });
        }
    }
}])
.directive('time', ['filmsList', 'sortFilms', 'timeFormat', 'getTotal', function (filmsList, sortFilms, timeFormat, getTotal) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/time.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                $scope.films = data.data;
                var sortedTime05 = sortFilms($scope.films.five, 'time');
                var sortedTime15 = sortFilms($scope.films.fifteen, 'time');
                $scope.longestFilm05 = { title: sortedTime05[0].title, time: timeFormat(sortedTime05[0].time) };
                $scope.longestFilm15 = { title: sortedTime15[0].title, time: timeFormat(sortedTime15[0].time) };
                $scope.totalTime05 = timeFormat(getTotal(sortedTime05, 'time'));
                $scope.totalTime15 = timeFormat(getTotal(sortedTime15, 'time'));
            })
        }
    }
}])
.directive('genre', ['filmsList', 'groupGenres', 'genreLength', 'genreGross', 'currencyFormat', function (filmsList, groupGenres, genreLength, genreGross, currencyFormat) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/genre.html',
        controller: function ($scope) {
            $scope.genres = ['Fantasy', 'Sci-Fi', 'Animation', 'Action', 'Comedy', 'Drama', 'Romance']
            filmsList.then(function (data) {
                $scope.films = data.data;
                $scope.genresFive = groupGenres($scope.films.five, $scope.genres);
                $scope.genresFifteen = groupGenres($scope.films.fifteen, $scope.genres);
                $scope.genreLength = genreLength;
                $scope.genreGross = genreGross;
                $scope.currencyFormat = currencyFormat;
            })
        }
    }
}])
.directive('sources', ['filmsList', 'groupSources', 'genreLength', 'genreGross', 'sourceTitles', function (filmsList, groupSources, genreLength, genreGross, sourceTitles) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/sources.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                $scope.films = data.data;
                $scope.sources = ['Original', 'Book', 'Sequel', 'Remake', 'Folktale', 'Comic', 'Short Film', 'Short Story'];
                $scope.sourcesFive = groupSources($scope.films.five, $scope.sources);
                $scope.sourcesFifteen = groupSources($scope.films.fifteen, $scope.sources);
                $scope.sourceGross = genreGross;
                $scope.sourceLength = genreLength;
                $scope.sourceTitles = sourceTitles;
            })
        }
    }
}])
.directive('reviews', ['filmsList', function (filmsList) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/reviews.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                $scope.films = data.data;
                $scope.reviewSite = 'rottentomatoes';
            })
        }
    }
}])