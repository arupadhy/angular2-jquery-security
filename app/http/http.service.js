System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1;
    var HttpTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            /**
                This uses observables to get data over http from a remote server.
            **/
            HttpTestService = (function () {
                function HttpTestService(_http) {
                    this._http = _http;
                }
                HttpTestService.prototype.extractData = function (res) {
                    console.log(res);
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    console.log(body);
                    console.log(body.data);
                    return body.data || {};
                };
                HttpTestService.prototype.authenticate = function (user) {
                    var headers = new http_2.Headers();
                    headers.append('Authorization', 'Basic YXJ2aW5kOnRlc3Q=');
                    headers.append('X-Requested-With', 'XMLHttpRequest');
                    headers.append('Access-Control-Allow-Origin', '*');
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Get,
                        url: 'http://localhost:8080/secure/api/books',
                        headers: headers
                    });
                    var req = new http_1.Request(options);
                    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    //headers.append('X-Requested-With', 'XMLHttpRequest');
                    return this._http.request(req)
                        .map(function (res) { return res.json(); }).catch(this.handleError);
                };
                HttpTestService.prototype.getCurrentTime = function () {
                    return this._http.get('http://localhost:8080/api/books')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                HttpTestService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                HttpTestService.prototype.postJSON = function () {
                };
                HttpTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], HttpTestService);
                return HttpTestService;
                var _a;
            }());
            exports_1("HttpTestService", HttpTestService);
        }
    }
});
//# sourceMappingURL=http.service.js.map