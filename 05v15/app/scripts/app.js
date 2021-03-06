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
                return $filter('currency')(amount, '$', 0)
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
    .factory('getRoi', ['$filter', 'getTotal', function ($filter, getTotal) {
        return function (array) {
            var totalBudget = 0, totalGross = 0;
            if (array[0]['worldwide']['actual']) {
                totalBudget = getTotal(array, 'budget', 'actual');
                totalGross = getTotal(array, 'worldwide', 'actual');
            } else {
                totalBudget = getTotal(array, 'budget');
                totalGross = getTotal(array, 'worldwide');
            }
            var roi = ((totalGross - totalBudget) / totalBudget) * 100;
            return $filter('number')(roi, 0) + '%';
        }
    }])
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
    .factory('reviews', function () {
        return function (array) {

        }
    })
    .factory('classed', function () {
        return function (str) {
            var string = str;
            string = string.replace(/\s+/g, '-').toLowerCase();
            return string;
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
                return d3.select('#' + idName)
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
                            var totalTickAmount = totalAmount()
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
                            d3.select('#' + idName + '-total-tick').attr('transform', 'translate(' + positionX + ', ' + offsetY + ')')
                            var totalTickAmount = totalAmount().text(total)
                                .attr('x', function () {
                                    return -(this.getBBox().width + 3)
                                });
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
            var svg = d3.select('#' + select)
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
            var tickAmount = d3.select('#' + select + '-total-amount')
                        .text(total)
                        .attr('x', function () {
                            return -(this.getBBox().width + 3)
                        });
        }
    }])
    .factory('freshOrRotten', function () {
        return function (score) {
            if (score >= 60) {
                return 'fresh';
            } else {
                return 'rotten';
            }
        }
    })
    .factory('drawStars', function () {
        return function (select, stars) {
            var fullStarsNum = Math.floor(stars);
            var halfStarsNum = Math.ceil(stars % 1);
            var fullStarImg = "../../images/star.svg";
            var halfStarImg = "../../images/half-star.svg";
            var offsetX = 0;
            var width = 25;
            var svgElemWidth = width * Math.ceil(stars);
            var height = 25;

            var svg = d3.select('#' + select + ' svg')
                        .attr('shape-rendering', 'optimizeQuality')
                        .attr('style', 'width:' + svgElemWidth + 'px');

            function starsLoop(i, imgUrl) {
                for (var index = 0; index < i; index++) {
                    svg.append('svg:image')
                    .attr('xlink:href', imgUrl)
                    .attr('shape-rendering', 'optimizeQuality')
                    .attr('x', offsetX)
                    .attr('y', 0)
                    .attr('width', width)
                    .attr('height', height);
                    offsetX += 25;
                }
            }

            function reviewStars(i, j) {
                if (i) {
                    starsLoop(i, fullStarImg);
                }
                if (j) {
                    starsLoop(j, halfStarImg);
                }
            }

            reviewStars(fullStarsNum, halfStarsNum);

        }
    })
    .factory('sticky', [function () {
        return function (section) {
            var sectionId = '#' + section;
            var sectionHeader = section + ' header';
            var currentOffset = $(sectionHeader).offset().top;
            var cssTop = parseFloat($(sectionHeader).css('top'));
            $(window).scroll(function () {
                if (!window.matchMedia('(max-width: 720px)').matches) {
                    var scrollPosition = $(window).scrollTop() - $(sectionId).offset().top;
                    if (scrollPosition <= 0) {
                        //$(sectionHeader).offset({ top: currentOffset });
                        $(sectionHeader).css('top', 0);
                    } else {
                        if ($(sectionHeader).height() + 20 > $(sectionId).height() - scrollPosition) {
                            //$(sectionHeader).offset({ top: $(sectionId).offset().top + $(sectionId).height() - $(sectionHeader).height() });
                            $(sectionHeader).css('top', parseFloat($(sectionId).css('top')) + $(sectionId).height() - $(sectionHeader).height());
                        } else {
                            //$(sectionHeader).offset({ top: scrollPosition + currentOffset });
                            $(sectionHeader).css('top', scrollPosition + cssTop);
                        }
                    }
                } else {
                    return;
                }
            });
            $(window).resize(function () {
                if (window.matchMedia('(max-width: 720px)').matches) {
                    $(sectionHeader).css('top', 0);
                }

            })
        }
    }])
    .directive('grossing', ['filmsList', 'sortFilms', 'currencyFormat', 'getTotal', 'makeGrossingChart', 'updateGrossingChart', 'sticky', function (filmsList, sortFilms, currencyFormat, getTotal, makeGrossingChart, updateGrossingChart, sticky) {
        return {
            restrict: 'E',
            templateUrl: '/scripts/directives/grossing.html',
            controller: function ($scope) {
                $scope.adjusted = 'false';
                filmsList.then(function (data) {
                    $scope.films = data.data;
                    var sortedGross05 = sortFilms($scope.films.five, 'worldwide.actual');
                    var sortedGross15 = sortFilms($scope.films.fifteen, 'worldwide');
                    var totalGross15 = getTotal(sortedGross15, 'worldwide');
                    $scope.highestGross15 = { title: sortedGross15[0].title, gross: currencyFormat(sortedGross15[0].worldwide) };
                    $scope.totalGross15 = currencyFormat(totalGross15);
                    $scope.revenueUS05 = (getTotal(sortedGross05, 'domestic', 'actual') /getTotal(sortedGross05, 'worldwide', 'actual'))*100;
                    $scope.revenueUS15 = (getTotal(sortedGross15, 'domestic') / getTotal(sortedGross15, 'worldwide'))*100;
                    makeGrossingChart('2015', '#grossing .chart svg', 'grossing15', [77, 188, 233], 140, sortedGross15, [170, 2100], [1, 110], 'worldwide');
                    makeGrossingChart('2005', '#grossing .chart svg', 'grossing05', [252, 157, 154], 40, sortedGross05, [170, 2100], [1, 110], 'worldwide', 'actual');
                    $scope.$watch('adjusted', function () {
                        if ($scope.adjusted === 'false') {
                            $scope.highestGross05 = { title: sortedGross05[0].title, gross: currencyFormat(sortedGross05[0].worldwide.actual) };
                            $scope.totalGross05 = currencyFormat(getTotal(sortedGross05, 'worldwide', 'actual'));
                            $scope.grossingDifference = currencyFormat(getTotal(sortedGross15, 'worldwide') - getTotal(sortedGross05, 'worldwide', 'actual'));
                            $scope.percentIncrease = ((getTotal(sortedGross15, 'worldwide') - getTotal(sortedGross05, 'worldwide', 'actual')) / getTotal(sortedGross05, 'worldwide', 'actual')) * 100;
                            updateGrossingChart('grossing05', sortedGross05, [170, 2100], [1, 110], 'worldwide', 'actual');
                        } else {
                            $scope.highestGross05 = { title: sortedGross05[0].title, gross: currencyFormat(sortedGross05[0].worldwide.adjusted) };
                            $scope.totalGross05 = currencyFormat(getTotal(sortedGross05, 'worldwide', 'adjusted'));
                            $scope.grossingDifference = currencyFormat(getTotal(sortedGross15, 'worldwide') - getTotal(sortedGross05, 'worldwide', 'adjusted'));
                            $scope.percentIncrease = ((getTotal(sortedGross15, 'worldwide') - getTotal(sortedGross05, 'worldwide', 'adjusted')) / getTotal(sortedGross05, 'worldwide', 'adjusted')) * 100;
                            updateGrossingChart('grossing05', sortedGross05, [170, 2100], [1, 110], 'worldwide', 'adjusted');
                        }
                    });
                    sticky('grossing');
                });
            }
        }
    }])
.directive('budget', ['filmsList', 'sortFilms', 'currencyFormat', 'getTotal', 'makeGrossingChart', 'updateGrossingChart', 'getRoi', 'sticky', function (filmsList, sortFilms, currencyFormat, getTotal, makeGrossingChart, updateGrossingChart, getRoi, sticky) {
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
                $scope.roi05 = getRoi(sortedBudget05);
                $scope.roi15 = getRoi(sortedBudget15);
                makeGrossingChart('2015', '#budget .chart svg', 'budget15', [77, 188, 233], 140, sortedBudget15, [10, 600], [1, 150], 'budget');
                makeGrossingChart('2005', '#budget .chart svg', 'budget05', [252, 157, 154], 40, sortedBudget05, [10, 600], [1, 150], 'budget', 'actual');
                $scope.$watch('adjusted', function () {
                    if ($scope.adjusted === 'false') {
                        $scope.highestBudget05 = { title: sortedBudget05[0].title, gross: currencyFormat(sortedBudget05[0].budget.actual) };
                        $scope.totalBudget05 = currencyFormat(getTotal(sortedBudget05, 'budget', 'actual'));
                        $scope.budgetDifference = currencyFormat((getTotal(sortedBudget15, 'budget') - getTotal(sortedBudget05, 'budget', 'actual')))
                        updateGrossingChart('budget05', sortedBudget05, [10, 600], [1, 150], 'budget', 'actual');
                    } else {
                        $scope.highestBudget05 = { title: sortedBudget05[0].title, gross: currencyFormat(sortedBudget05[0].budget.adjusted) };
                        $scope.totalBudget05 = currencyFormat(getTotal(sortedBudget05, 'budget', 'adjusted'));
                        $scope.budgetDifference = currencyFormat((getTotal(sortedBudget15, 'budget') - getTotal(sortedBudget05, 'budget', 'adjusted')))
                        updateGrossingChart('budget05', sortedBudget05, [10, 600], [1, 150], 'budget', 'adjusted');
                    }
                })
                sticky('budget')
            });
        }
    }
}])
.directive('time', ['filmsList', 'sortFilms', 'timeFormat', 'getTotal', '$filter', 'sticky', function (filmsList, sortFilms, timeFormat, getTotal, $filter, sticky) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/time.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                $scope.films = data.data;
                var sortedTime05 = sortFilms($scope.films.five, 'time');
                var sortedTime15 = sortFilms($scope.films.fifteen, 'time');
                var total05 = getTotal(sortedTime05, 'time');
                var total15 = getTotal(sortedTime15, 'time')
                $scope.longestFilm05 = { title: sortedTime05[0].title, time: timeFormat(sortedTime05[0].time) };
                $scope.longestFilm15 = { title: sortedTime15[0].title, time: timeFormat(sortedTime15[0].time) };
                $scope.averageTime05 = timeFormat($filter('number')(total05 / 25, 0));
                $scope.averageTime15 = timeFormat($filter('number')(total15 / 25, 0));
                $scope.totalTime05 = timeFormat(total05);
                $scope.totalTime15 = timeFormat(total15);
                sticky('time')
            })
        }
    }
}])
.directive('genre', ['filmsList', 'groupGenres', 'genreLength', 'genreGross', 'currencyFormat', 'classed', 'sticky', function (filmsList, groupGenres, genreLength, genreGross, currencyFormat, classed, sticky) {
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
                sticky('genre')
            })
        }
    }
}])
.directive('sources', ['filmsList', 'groupSources', 'genreLength', 'genreGross', 'sourceTitles', 'classed', 'sticky', function (filmsList, groupSources, genreLength, genreGross, sourceTitles, classed, sticky) {
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
                $scope.classed = classed;
                sticky('sources')
            })
        }
    }
}])
.directive('reviews', ['filmsList', 'sortFilms', 'currencyFormat', 'freshOrRotten', 'drawStars', 'getTotal', 'sticky', function (filmsList, sortFilms, currencyFormat, freshOrRotten, drawStars, getTotal, sticky) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/reviews.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                $scope.films = data.data;
                $scope.currencyFormat;
                $scope.reviews05 = sortFilms($scope.films.five, 'worldwide.actual');
                $scope.reviews15 = sortFilms($scope.films.fifteen, 'worldwide');
                $scope.averageRT05 = (getTotal($scope.reviews05, 'reviews', 'rt') / 25);
                $scope.averageRT15 = (getTotal($scope.reviews15, 'reviews', 'rt') / 25);
                $scope.totalRE05 = (getTotal($scope.reviews05, 'reviews', 're'));
                $scope.totalRE15 = (getTotal($scope.reviews15, 'reviews', 're'));
                $scope.fresh = freshOrRotten;
                $scope.drawStars = drawStars;
                sticky('reviews')
            })
        }
    }
}])
.directive('awards', ['filmsList', 'sortFilms', 'sticky', function (filmsList, sortFilms, sticky) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/awards.html',
        controller: function ($scope) {
            filmsList.then(function (data) {
                sticky('awards')
            })
        }
    }
}])