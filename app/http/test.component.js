System.register(['angular2/core', './http.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_service_1, http_1;
    var HttpTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            // import {JsonPService} from './jsonp.service';
            HttpTestComponent = (function () {
                function HttpTestComponent(httpTestService) {
                    this.httpTestService = httpTestService;
                }
                HttpTestComponent.prototype.testGet = function () {
                    var _this = this;
                    this.httpTestService.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HttpTestComponent.prototype.testSecureGet = function () {
                    var _this = this;
                    this.httpTestService.authenticate({ username: "arvind", password: "test" })
                        .subscribe(function (data) { return _this.secureGet = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HttpTestComponent.prototype.testGetViaJsonP = function () {
                    // this.jsonp.request('https://restcountries.eu/rest/v1/name/India').subscribe(
                    // 	data => this.getDataViaJSONP = JSON.stringify(data),
                    // 	error => alert(error),
                    // 	() => console.log("FINISHED")
                    // 	);
                };
                HttpTestComponent.prototype.testPOST = function () {
                };
                HttpTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n\t\t\t\t<button (click)=\"testGet()\"> Test GET request </button><br>\n\t\t\t\t<p> Output: {{getData}}</p><br><br>\n\t\t\t\t<button (click) = \"testSecureGet()\">Test Secure GET request</button><br>\n\t\t\t\t<p> Output: {{secureGet}}</p>\n\t\t\t\t",
                        providers: [http_1.HTTP_PROVIDERS, http_service_1.HttpTestService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpTestService])
                ], HttpTestComponent);
                return HttpTestComponent;
            }());
            exports_1("HttpTestComponent", HttpTestComponent);
        }
    }
});
//# sourceMappingURL=test.component.js.map