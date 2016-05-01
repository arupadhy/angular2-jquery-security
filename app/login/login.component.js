System.register(['angular2/core', './login.service'], function(exports_1, context_1) {
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
    var core_1, core_2, login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(elRef, loginService) {
                    this.elRef = elRef;
                    this.loginService = loginService;
                    this.user = {};
                }
                LoginComponent.prototype.authenticate = function (user) {
                    console.log(user);
                };
                LoginComponent.prototype.ngOnInit = function () {
                    $('#login').dialog({
                        autoOpen: false,
                        height: 300,
                        width: 350,
                        modal: true,
                        show: {
                            effect: "blind",
                            duration: 1000
                        },
                        hide: {
                            effect: "explode",
                            duration: 1000
                        }
                    });
                    $(this.elRef.nativeElement).find('button').on('click', function () {
                        $('#login').dialog('open');
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        templateUrl: 'app/login/login.component.html',
                        styleUrls: ['app/login/login.component.css'],
                        providers: [login_service_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_2.ElementRef !== 'undefined' && core_2.ElementRef) === 'function' && _a) || Object, login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
                var _a;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map