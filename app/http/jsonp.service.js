System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var JsonPService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            /**
                This uses jsonp to get data from multiple servers on diff domain
            **/
            JsonPService = (function () {
                function JsonPService(jsonp) {
                    this.jsonp = jsonp;
                    this.URL = "http://localhost:8080/api/books";
                    console.log("JsonPService called");
                }
                JsonPService.prototype.getBooks = function () {
                    console.log("getBooks() service called");
                    return this.jsonp.get(this.URL).map(function (res) { return res.json(); });
                };
                JsonPService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Jsonp !== 'undefined' && http_1.Jsonp) === 'function' && _a) || Object])
                ], JsonPService);
                return JsonPService;
                var _a;
            }());
            exports_1("JsonPService", JsonPService);
        }
    }
});
//# sourceMappingURL=jsonp.service.js.map