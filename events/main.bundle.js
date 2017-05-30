webpackJsonp([1,5],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetEventsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetEventsService = (function () {
    function GetEventsService(http) {
        this.http = http;
        this.EventsUrl = "./../assets/events.json";
    }
    GetEventsService.prototype.getEvents = function () {
        return this.http.get(this.EventsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GetEventsService.prototype.getEvent = function (id) {
        return this.getEvents()
            .map(function (events) { return events.find(function (event) { return event.id === id; }); });
    };
    GetEventsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.events || {};
    };
    GetEventsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_observable__["Observable"].throw(errMsg);
    };
    GetEventsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GetEventsService);
    return GetEventsService;
    var _a;
}());
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/get-events.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 334;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(517),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_events_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_list_events_list_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__ = __webpack_require__(456);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var appRoutes = [
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__["a" /* EventDetailComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__events_list_events_list_component__["a" /* EventsListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__events_list_events_list_component__["a" /* EventsListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__["a" /* EventDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__get_events_service__["a" /* GetEventsService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgPatterns; });
var BgPatterns = (function () {
    function BgPatterns() {
    }
    BgPatterns.prototype.pattern = function (patternNum, ctx, w, h) {
        if (patternNum == 0) {
            ctx.lineWidth = 10;
            var multiplyer = 25;
            for (var i = 0; i < 50; i++) {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(239, 233, 210, 0.3)';
                ctx.moveTo(0, i * multiplyer);
                ctx.lineTo(w, i * multiplyer);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(i * multiplyer, 0);
                ctx.lineTo(i * multiplyer, w);
                ctx.stroke();
            }
        }
        if (patternNum == 1) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 7; i++) {
                for (var j = 0; j < 15; j++) {
                    ctx.fillStyle = '#eeeeee';
                    ctx.beginPath();
                    if (i % 2 == 1) {
                        ctx.moveTo(j * 100 + 50, i * 100 + 25);
                        ctx.arc(j * 100 + 50, i * 100 + 25, 30, 0, Math.PI * 2);
                    }
                    else {
                        ctx.moveTo(j * 100, i * 100 + 25);
                        ctx.arc(j * 100, i * 100 + 25, 30, 0, Math.PI * 2);
                    }
                    ctx.fill();
                }
            }
        }
        if (patternNum == 2) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 15; j++) {
                    ctx.fillStyle = '#e5e2c2';
                    ctx.beginPath();
                    if (i % 2 == 1) {
                        ctx.moveTo(j * 100 + 50, i * 100 + 25);
                        ctx.arc(j * 100 + 50, i * 100 + 25, 5, 0, Math.PI * 2);
                    }
                    else {
                        ctx.moveTo(j * 100, i * 100 + 25);
                        ctx.arc(j * 100, i * 100 + 25, 5, 0, Math.PI * 2);
                    }
                    ctx.fill();
                }
            }
        }
        if (patternNum == 3) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j < 30; j++) {
                    ctx.fillStyle = '#e5e2c2';
                    ctx.beginPath();
                    if (i % 2 == 1) {
                        ctx.moveTo(j * 50 + 23, i * 50);
                        ctx.arc(j * 50 + 23, i * 50, 5, 0, Math.PI * 2);
                    }
                    else {
                        ctx.moveTo(j * 50, i * 50);
                        ctx.arc(j * 50, i * 50, 5, 0, Math.PI * 2);
                    }
                    ctx.fill();
                }
            }
        }
        if (patternNum == 4) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 30; i++) {
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(i * 50, h);
                ctx.lineTo(i * 50 - 150, 0);
                ctx.stroke();
            }
        }
        if (patternNum == 5) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 30; i++) {
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(i * 50 - 100, h);
                ctx.lineTo(i * 50 + 50, 0);
                ctx.stroke();
            }
        }
        /*if (patternNum == 6) {
            ctx.fillStyle = 'teal';
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            for (var i = 0; i < 30; i++) {
                ctx.beginPath();
                ctx.moveTo(i * 50 - 100, h);
                ctx.lineTo(i * 50 + 100, 0);
                ctx.stroke();
            }
            for (var i = 0; i < 30; i++) {
                ctx.beginPath();
                ctx.moveTo(i * 50, h);
                ctx.lineTo(i * 50 - 200, 0);
                ctx.stroke();
            }
        }*/
        if (patternNum == 6) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            for (var i = 0; i < 30; i++) {
                ctx.beginPath();
                ctx.moveTo(i * 50 - 400, h);
                ctx.lineTo(i * 50 + 400, 0);
                ctx.stroke();
            }
            for (var i = 0; i < 30; i++) {
                ctx.beginPath();
                ctx.moveTo(i * 50, h);
                ctx.lineTo(i * 50 - 400, 0);
                ctx.stroke();
            }
        }
        if (patternNum == 7) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            for (var i = 0; i < 21; i++) {
                ctx.beginPath();
                ctx.moveTo(0, h * (i / 21));
                ctx.lineTo(w, h * (i / 21));
                ctx.stroke();
            }
        }
        if (patternNum == 8) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j < 30; j++) {
                    ctx.fillStyle = '#e5e2c2';
                    ctx.beginPath();
                    if (i % 2 == 1) {
                        ctx.moveTo(j * 50 + 23, i * 50);
                        ctx.arc(j * 50 + 23, i * 50, 2, 0, Math.PI * 2);
                    }
                    else {
                        ctx.moveTo(j * 50, i * 50);
                        ctx.arc(j * 50, i * 50, 4, 0, Math.PI * 2);
                    }
                    ctx.fill();
                }
            }
        }
        if (patternNum == 9) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            for (var i = 0; i < 60; i++) {
                for (var j = 0; j < 30; j++) {
                    ctx.fillStyle = '#cccccc';
                    ctx.beginPath();
                    if (i % 2 == 1) {
                        ctx.moveTo(j * 50 + 23, i * 50);
                        ctx.arc(j * 50 + 23, i * 10, 2, 0, Math.PI * 2);
                    }
                    else {
                        ctx.moveTo(j * 50, i * 50);
                        ctx.arc(j * 50, i * 10, 2, 0, Math.PI * 2);
                    }
                    ctx.fill();
                }
            }
        }
    };
    return BgPatterns;
}());
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/bgpatterns.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_events_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bgpatterns__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventDetailComponent = (function () {
    function EventDetailComponent(getEvents, route, location, bgPatterns, titleService) {
        this.getEvents = getEvents;
        this.route = route;
        this.location = location;
        this.bgPatterns = bgPatterns;
        this.titleService = titleService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.getEvents.getEvent(params['id']); })
            .subscribe(function (event) {
            _this.event = event;
            _this.titleService.setTitle(event.name + ' | Cultural Events');
        });
        //------------------------------------------------------------
        var w = window.innerWidth;
        var h = window.innerHeight;
        var patternNumber = Math.floor(Math.random() * 10);
        //let patternNumber: number = 0;
        var bgCanvas = this.bgCanvasRef.nativeElement;
        var bgCTX = bgCanvas.getContext('2d');
        var bgCanvasW = bgCanvas.width;
        var bgCanvasH = bgCanvas.height;
        this.bgPatterns.pattern(patternNumber, bgCTX, bgCanvasW, bgCanvasH);
        //-------------------------------------------------------------       
        var that = this;
        var divW = this.eventDetailRef.nativeElement.offsetWidth;
        var nameCanvas = this.nameCanvasRef.nativeElement;
        var nameCanvasW = nameCanvas.width;
        var nameCanvasH = nameCanvas.height;
        var ctx = nameCanvas.getContext('2d');
        //rects-----------------------------------------------------------
        that.route.params
            .switchMap(function (params) { return that.getEvents.getEvent(params['id']); })
            .subscribe(function (event) {
            for (var i = 0; i < 9; i++) {
                ctx.globalAlpha = 0.6;
                var x = Math.random() * (120 - 75) + 75;
                var rectW = Math.random() * (1420 - 1340) + 1340;
                ctx.fillStyle = event.info.colors[0];
                if (i > 4) {
                    ctx.fillStyle = event.info.colors[1];
                }
                ctx.fillRect(x, 100 + (i * 20), rectW, 40);
                ctx.globalAlpha = 1;
            }
            //brush strokes---------------------------------------------------        
            /*for (var i = 0; i < 19; i++) {
                ctx.beginPath();
                //Math.random() * (max - min) + min;
                let x: number = Math.random() * (50 - 45) + 45;
                let y: number = 50 + (i * (Math.random() * (5 - 4) + 4));
                let cx1: number = x;
                let cy1: number = y + Math.random() * (12 - 10) + 10;
                let cx2: number = Math.random() * (720 - 680) + 680;
                let cy2: number = y + (10 + i);
                let x2: number = Math.random() * (750 - 710) + 710;
                let y2: number = y + Math.random() * (5 - 4) + 4;
                ctx.strokeStyle = 'red';
                if (i > 9) {
                    ctx.strokeStyle = "blue";
                }
                ctx.lineWidth = 5;
                ctx.moveTo(x, y);
                ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
                ctx.stroke();
            }*/
            /*ctx.strokeStyle = 'red';
            ctx.lineWidth = 10;
            ctx.moveTo(50, 50);
            ctx.bezierCurveTo(50, 70, 720, 70, 750, 70);
            ctx.moveTo(50, 60);
            ctx.bezierCurveTo(50, 75, 720, 90, 750, 75);
            ctx.moveTo(50, 70);
            ctx.bezierCurveTo(50, 80, 720, 110, 750, 80);
            ctx.stroke();*/
            //Name------------------------------------------------------------
            var printName = function () {
                ctx.beginPath();
                ctx.fillStyle = event.info.colors[2];
                ctx.strokeStyle = event.info.colors[3];
                ctx.lineWidth = 4;
                ctx.font = '200px "Ramabhadra", sans-serif';
                ctx.textAlign = 'center';
                var nameLength = event.shortName.length;
                if (nameLength >= 13 && nameLength < 14) {
                    ctx.font = '180px "Ramabhadra", sans-serif';
                }
                else if (nameLength >= 14 && nameLength < 16) {
                    ctx.font = '170px "Ramabhadra", sans-serif';
                }
                else if (nameLength >= 16) {
                    ctx.font = '135px "Ramabhadra", sans-serif';
                    ctx.fillText(event.shortName.toUpperCase(), nameCanvasW / 2, nameCanvasH / 1.55);
                    ctx.strokeText(event.shortName.toUpperCase(), nameCanvasW / 2, nameCanvasH / 1.55);
                    return;
                }
                ctx.fillText(event.shortName.toUpperCase(), nameCanvasW / 2, nameCanvasH / 1.5);
                ctx.strokeText(event.shortName.toUpperCase(), nameCanvasW / 2, nameCanvasH / 1.5);
            };
            WebFont.load({
                google: {
                    families: ['Ramabhadra']
                },
                active: function () { printName(); }
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('eventdetaildiv'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], EventDetailComponent.prototype, "eventDetailRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('bgcanvas'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object)
    ], EventDetailComponent.prototype, "bgCanvasRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('namecanvas'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _c) || Object)
    ], EventDetailComponent.prototype, "nameCanvasRef", void 0);
    EventDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_5__bgpatterns__["a" /* BgPatterns */]],
            selector: 'app-event-detail',
            template: __webpack_require__(518),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__get_events_service__["a" /* GetEventsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__get_events_service__["a" /* GetEventsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__bgpatterns__["a" /* BgPatterns */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__bgpatterns__["a" /* BgPatterns */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === 'function' && _h) || Object])
    ], EventDetailComponent);
    return EventDetailComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/event-detail.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_events_service__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsListComponent = (function () {
    function EventsListComponent(getEventsService, titleService) {
        this.getEventsService = getEventsService;
        this.titleService = titleService;
    }
    EventsListComponent.prototype.getEvents = function () {
        var _this = this;
        this.getEventsService.getEvents().subscribe(function (events) { return _this.events = events; });
    };
    EventsListComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Cultural Events");
        this.getEvents();
        var w = window.innerWidth;
        var h = window.innerHeight;
        var canvas = this.canvasRef.nativeElement;
        var ctx = canvas.getContext('2d');
        var gradientColors = [
            ['#391552', '#914C8A'],
            ['#151E64', '#125074'],
            ['#66244d', '#246655'],
            ['#00B294', '#6CFFE6'],
            ['#5f2C82', '#49A09D'],
            ['#DA22FF', '#9733EE'],
            ['#2B5876', '#4E4376'],
            ['#C33764', '#1D2671']
        ];
        var gc = gradientColors[Math.floor(Math.random() * 8)];
        //let gc = gradientColors[4];
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, gc[0]);
        gradient.addColorStop(1, gc[1]);
        ctx.fillStyle = gradient;
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        //second canvas--------------------------------------
        var secondCanvas = this.SecondCanvasRef.nativeElement;
        secondCanvas.width = w;
        secondCanvas.height = h;
        var secondCTX = secondCanvas.getContext('2d');
        //secondCTX.fillStyle = '#C33764';
        //secondCTX.strokeStyle = '#C33764';
        secondCTX.fillStyle = gc[Math.floor(Math.random() * 2)];
        secondCTX.strokeStyle = gc[Math.floor(Math.random() * 2)];
        for (var i = 0; i < 10; i++) {
            var x = Math.random() * (w / 0.9);
            var y = Math.random() * (h / 0.9);
            secondCTX.moveTo(x, y);
            secondCTX.lineWidth = 2;
            secondCTX.shadowOffsetX = 0.5;
            secondCTX.shadowOffsetY = 0.5;
            secondCTX.shadowColor = '#000';
            secondCTX.strokeRect(x, y, 10, 10);
        }
        for (var i = 0; i < 10; i++) {
            var x = Math.random() * (w / 0.9);
            var y = Math.random() * (h / 0.9);
            secondCTX.moveTo(x, y);
            secondCTX.arc(x, y, 5, 0, Math.PI * 2);
        }
        secondCTX.fill();
        for (var i = 0; i < 10; i++) {
            secondCTX.save();
            secondCTX.beginPath();
            var x = Math.random() * (w / 0.9);
            var y = Math.random() * (h / 0.9);
            secondCTX.translate(x, y);
            secondCTX.rotate(Math.random() * 180 * Math.PI / 180);
            secondCTX.moveTo(0, 0);
            secondCTX.lineTo(10, 5);
            secondCTX.lineTo(0, 10);
            secondCTX.closePath();
            secondCTX.stroke();
            secondCTX.restore();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('mycanvas'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], EventsListComponent.prototype, "canvasRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('secondcanvas'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object)
    ], EventsListComponent.prototype, "SecondCanvasRef", void 0);
    EventsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-events-list',
            template: __webpack_require__(519),
            styles: [__webpack_require__(514)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__get_events_service__["a" /* GetEventsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__get_events_service__["a" /* GetEventsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _d) || Object])
    ], EventsListComponent);
    return EventsListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/events-list.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/brobbey/larry/webdev/events/src/environment.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, ".back {\n  font-size: 1.4em;\n  text-decoration: none;\n  font-family: 'Roboto Slab', serif;\n  color: #1168af; }\n  .back span {\n    color: #888; }\n  .back:before {\n    content: '\\2190'; }\n\n.eventdetail {\n  position: relative;\n  margin: auto;\n  box-shadow: 0px 0px 5px #000000;\n  background-color: #fff;\n  height: auto; }\n  @media screen and (min-width: 1440px) {\n    .eventdetail {\n      width: 70%;\n      top: 50px; } }\n  @media screen and (max-width: 1439px) and (min-width: 850px) {\n    .eventdetail {\n      width: 800px;\n      top: 50px; } }\n  @media screen and (max-width: 849px) and (min-width: 1px) {\n    .eventdetail {\n      width: 100%;\n      box-shadow: none; } }\n\n.event-name {\n  font-family: sans-serif;\n  position: relative;\n  margin: 0;\n  display: none; }\n  .event-name h1 {\n    font-size: 6em;\n    text-align: center;\n    text-transform: uppercase;\n    margin: 0; }\n\n#bgcanvas {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  z-index: -1000; }\n  @media screen and (max-width: 849px) and (min-width: 1px) {\n    #bgcanvas {\n      display: none; } }\n\n#namecanvas {\n  width: 100%; }\n\n.event-main {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n\n.event-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 50px; }\n  .event-row:nth-child(2) .event-brief {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    @media screen and (max-width: 500px) {\n      .event-row:nth-child(2) .event-brief {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2; } }\n  .event-row:nth-child(2) .event-image {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n    .event-row:nth-child(2) .event-image img {\n      left: 10%;\n      float: right; }\n      @media screen and (max-width: 849px) and (min-width: 501px) {\n        .event-row:nth-child(2) .event-image img {\n          left: 0; } }\n      @media screen and (max-width: 500px) {\n        .event-row:nth-child(2) .event-image img {\n          left: 0; } }\n    @media screen and (max-width: 500px) {\n      .event-row:nth-child(2) .event-image {\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; } }\n  @media screen and (max-width: 500px) {\n    .event-row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n\n.event-image {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%; }\n  @media screen and (max-width: 500px) {\n    .event-image {\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%; } }\n  .event-image img {\n    position: relative;\n    right: 10%; }\n    @media screen and (min-width: 2000px) {\n      .event-image img {\n        width: 38.5em; } }\n    @media screen and (max-width: 1999px) and (min-width: 1440px) {\n      .event-image img {\n        width: 31.25em; } }\n    @media screen and (max-width: 1439px) and (min-width: 1779px) {\n      .event-image img {\n        width: 38em; } }\n    @media screen and (max-width: 1100px) and (min-width: 850px) {\n      .event-image img {\n        width: 28.5em; } }\n    @media screen and (max-width: 849px) and (min-width: 501px) {\n      .event-image img {\n        width: 24em;\n        right: 0; } }\n    @media screen and (max-width: 500px) {\n      .event-image img {\n        width: 100%;\n        right: 0; } }\n\n.event-brief {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  text-align: center; }\n  .event-brief h3 {\n    font-family: 'Anton', sans-serif; }\n  .event-brief p {\n    font-family: 'Roboto', sans-serif; }\n  @media screen and (max-width: 500px) {\n    .event-brief {\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%; } }\n  .event-brief h3 {\n    font-size: 1.5em; }\n  .event-brief p {\n    display: block;\n    font-size: 1em;\n    width: 75%;\n    margin-left: auto;\n    margin-right: auto; }\n  @media screen and (min-width: 2000px) {\n    .event-brief h3 {\n      font-size: 1.7em; }\n    .event-brief p {\n      font-size: 1.35em; } }\n\n@media screen and (max-width: 849px) and (min-width: 501px) {\n  .event-image-right {\n    left: 0; } }\n\n@media screen and (max-width: 500px) {\n  .event-image-right {\n    left: 0; } }\n\n.event-summary {\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 1.2em;\n  font-family: 'Roboto Slab', serif; }\n  .event-summary p {\n    margin: 0; }\n  .event-summary a {\n    color: #1168af; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, ".events-list-main {\n  margin: auto; }\n  @media screen and (min-width: 1440px) {\n    .events-list-main {\n      width: 80%; } }\n  @media screen and (max-width: 1439px) and (min-width: 850px) {\n    .events-list-main {\n      width: 800px; } }\n  @media screen and (max-width: 849px) and (min-width: 501px) {\n    .events-list-main {\n      width: 100%; } }\n  @media screen and (max-width: 500px) {\n    .events-list-main {\n      width: 100%; } }\n\n.events-list {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n  @media screen and (min-width: 501px) {\n    .events-list {\n      top: 150px; } }\n\nheader {\n  color: #fff; }\n  header h1 {\n    font-family: 'Roboto Slab', serif;\n    text-transform: uppercase; }\n  header p {\n    font-size: 1.3em;\n    font-family: 'Slabo 27px', serif; }\n\n.event-div {\n  background-color: rgba(255, 255, 255, 0.9);\n  margin: 5px 0;\n  box-sizing: border-box;\n  box-shadow: 10px 10px 40px -25px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transition: box-shadow ease-out .3s;\n  transition: box-shadow ease-out .3s; }\n  .event-div:hover {\n    box-shadow: 40px 40px 40px -25px rgba(0, 0, 0, 0.5); }\n  .event-div div {\n    padding: 10px; }\n  .event-div p {\n    display: inline; }\n    .event-div p:not(:last-of-type)::after {\n      content: \" \\2022\";\n      color: #d0d0d0; }\n  @media screen and (min-width: 1440px) {\n    .event-div {\n      width: 23.5%; }\n      .event-div:not(:nth-child(4n)) {\n        margin-right: 2%; }\n      .event-div:nth-child(2n+1) {\n        border-radius: 3px 3px 25px 3px; }\n      .event-div:nth-child(2n+2) {\n        border-radius: 3px 3px 3px 25px; } }\n  @media screen and (max-width: 1439px) and (min-width: 501px) {\n    .event-div {\n      width: 32%; }\n      .event-div:nth-child(3n+1) {\n        margin-right: 2%; }\n      .event-div:nth-child(3n+3) {\n        margin-left: 2%; }\n      .event-div:nth-child(2n+1) {\n        border-radius: 3px 3px 25px 3px; }\n      .event-div:nth-child(2n+2) {\n        border-radius: 3px 3px 3px 25px; } }\n  @media screen and (max-width: 500px) {\n    .event-div {\n      width: 100%;\n      border-radius: 5px 5px 5px 5px; } }\n\n.event-box {\n  height: 100%; }\n\n.event-date {\n  font-family: 'Sansita', sans-serif;\n  font-size: 1.5em;\n  color: #188ed3; }\n\n.event-name {\n  font-family: 'Sansita', sans-serif;\n  font-size: 1.5em;\n  color: #000; }\n\n.event-location {\n  font-family: 'Slabo 27px', serif;\n  font-size: 1.2em;\n  color: #808080; }\n\n.event-brief {\n  font-family: 'Slabo 27px', serif;\n  font-size: 1.175em;\n  color: #989898; }\n\na {\n  text-decoration: none; }\n\n#first-canvas {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -100; }\n\n#second-canvas {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  z-index: -99; }\n  @media screen and (max-width: 500px) {\n    #second-canvas {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<canvas #bgcanvas id=\"bgcanvas\" width=\"1200\" height=\"600\"></canvas>\n\n<div #eventdetaildiv class=\"eventdetail\">\n\t<a routerLink=\"/\" routerLinkActive=\"active\" class=\"back\"><span>Back to</span> Cultural Events</a>\n\t<canvas #namecanvas id=\"namecanvas\" width=\"1600\" height=\"400\"></canvas>\n\t<div *ngIf=\"event\">\n\t\t<header>\n\t\t\t<div class=\"event-name\">\n\t\t\t\t<h1>{{event.shortName}}</h1>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div class=\"event-main\">\n\t\t\t<div class=\"event-row\" *ngFor=\"let desc of event.info.desc; let i = index\">\n\t\t\t\t<div class=\"event-image\">\n\t\t\t\t\t<img [src]=\"'../../assets/img/'+event.id+'/'+i+'.jpg'\" width=\"400px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"event-brief\">\n\t\t\t\t\t<h3><span>{{desc[0]}}</span><br /><span>{{desc[1]}}</span></h3>\n\t\t\t\t\t<p>{{desc[2]}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"event-summary\">\n\t\t\t<p>{{event.name}}</p>\n\t\t\t<span *ngIf=\"event.info.website\"><a target=\"_blank\" rel=\"noopener noreferrer\" [href]=event.info.website>{{event.info.website}}</a></span>\n\t\t\t<p>\n\t\t\t\t<span *ngIf=\"event.location.venue\">{{event.location.venue}}, </span>\n\t\t\t\t<span *ngIf=\"event.location.city\">{{event.location.city}}, </span>\n\t\t\t\t<span *ngIf=\"event.location.state\">{{event.location.state}}, </span> {{event.location.country}}\n\t\t\t</p>\n\t\t\t<p>{{event.date.start[0] | date:'MMM d'}}<span *ngIf=\"event.date.end\"> - {{event.date.end[0] | date:'MMM d, yyyy'}}</span>\n\t\t\t\t<span *ngIf=\"event.date.start[1]\"> \n\t\t\t\t\t\t& {{event.date.start[1] | date:'MMM d'}} - {{event.date.end[1] | date:'MMM d, yyyy'}}\n\t\t\t\t\t\t</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"events-list-main\">\n    <header>\n        <h1>Cultural<br/>Events</h1>\n        <p>A small list of popular cultural events around the world.</p>\n    </header>\n    <div class=\"events-list\">\n        <div *ngFor=\"let event of events\" class=\"event-div\">\n            <a [routerLink]=\"['', event.id]\" routerLinkActive=\"active\">\n                <div class=\"event-box\">\n                <p class=\"event-date\">{{event.date.start[0] | date:'MMM d'}}</p>\n                <p class=\"event-name\">{{event.name}}</p>\n                <p class=\"event-location\">\n                    <span *ngIf=\"event.location.city\">{{event.location.city}},</span>\n                    <span *ngIf=\"event.location.state\">{{event.location.state}},</span>\n                    {{event.location.country}}\n                </p>\n                <p class=\"event-brief\">{{event.info.brief}}</p>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n<canvas #mycanvas id=\"first-canvas\"></canvas>\n<canvas #secondcanvas id=\"second-canvas\"></canvas>"

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ })

},[541]);
//# sourceMappingURL=main.bundle.js.map