webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-currency></app-currency>\n  <app-currency></app-currency>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_currency_service__ = __webpack_require__("../../../../../src/app/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_currency_component__ = __webpack_require__("../../../../../src/app/currency/currency.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__currency_currency_component__["a" /* CurrencyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_lightning_ng_lightning__["a" /* NglModule */].forRoot()
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_currency_service__["a" /* CurrencyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/currency/currency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outer {\n    margin: auto;\n    width: 300px;\n    border: 2px solid rgb(133, 144, 133);\n    padding: 10px 15px 10px 15px;\n    text-align: center;\n    background: #b3b5b50d;\n    font-family: Arial, Helvetica, sans-serif;\n    color: #4D4D18;\n}\nselect {\n    width: 38.3%;\n    padding: 9px 20px;\n    margin: 0;\n    display: inline-block;\n    border: 2px solid #ccc;\n    border-radius: 3px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    text-align: center;\n    font-size: 10px;\n    height: 37px;\n}\ninput[type=number] {\n    width: 60%;\n    padding: 9px 20px;\n    margin: 0 5px 0 0;\n    display: inline-block;\n    border: 2px solid #ccc;\n    border-radius: 3px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-size: 13px;\n    height: 37px;\n    float: left;\n}\n.outerLink{\n    cursor: pointer;\n    text-align: right;\n    color: BLUE;\n    margin: 5px 0 0 0;\n}\n.outerLink span {\n    display: block;\n    padding: 7px 0 0 0;\n    color: #4d4d4d;\n    font-size: 12px;\n    font-style: italic\n}\n.outContainer{\n    text-align: left;\n}\n.outContainer label {\n    float: left;\n    padding: 10px 0 7px;\n    text-align: left;\n    width: 100%\n}\nh4 {\n    color: #000;\n    margin: 0;\n    padding: 10px 0 5px;\n    font-weight: normal;\n    text-align: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slds-m-top--large\">\n  <div class=\"outer\">\n    <h4>\n      Currency Converter\n    </h4>\n    <div class=\"outContainer\">\n      <label>Type in amount and select currency</label>\n      <input [(ngModel)]='outAmount' type=\"number\" (ngModelChange)=\"onOutAmountChange($event)\">\n      <select class=\"customSelect\" [(ngModel)]='selectedConvert' (ngModelChange)=\"onOutSelect($event)\">\n        <option>{{selectedConvert}}</option>\n        <option *ngFor=\"let i of outArr\" [ngValue]=i>{{ i.code }}</option>\n      </select>\n    </div>  \n    <div class=\"outContainer\">\n      <label>Converted amount</label>\n      <input [(ngModel)]='inputAmount' [readonly]=\"true\" type=\"number\" (ngModelChange)=\"onBaseAmountChange($event)\">\n      <select [(ngModel)]='selectedBase' (ngModelChange)=\"onBaseSelect($event)\">\n        <option *ngFor=\"let i of currencyOptions\" [ngValue]=i>{{ i }}</option>\n      </select>\n    </div>\n    <div class=\"outerLink\">\n      <a (click)=\"showDetails()\">Disclaimer</a>\n      <span *ngIf=\"canShow\" class=\"\">The Conversion rates are obtained from a public api.</span>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_currency_service__ = __webpack_require__("../../../../../src/app/services/currency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(curreancyService) {
        this.curreancyService = curreancyService;
        this.selectedBase = 'USD';
        this.selectedConvert = 'EUR';
        this.currencyOptions = ['USD', 'CAD', 'EUR'];
        this.outArr = [];
        this.currencyMap = [];
        this.canShow = false;
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.curreancyService.getExchangeRate(this.selectedBase, 'EUR,CAD')
            .subscribe(function (data) {
            _this.inputBaseAmount = 0.00;
            _this.inputAmount = "0.00";
            _this.setInitialValues(data);
            var outAmount = _this.outBaseAmount * parseInt(_this.inputAmount);
            _this.outAmount = "0.00";
        });
    };
    CurrencyComponent.prototype.onBaseAmountChange = function (event) {
        this.outAmount = (event * this.outBaseAmount).toString();
    };
    CurrencyComponent.prototype.onOutAmountChange = function (event) {
        this.outAmount = event;
        this.inputAmount = this.decimalPipe(event * (1 / this.outBaseAmount));
    };
    CurrencyComponent.prototype.onBaseSelect = function (event) {
        var _this = this;
        this.selectedBase = event;
        var symbols = this.currencyOptions.filter(function (code) { return code !== _this.selectedBase; });
        this.outArr = symbols;
        this.selectedConvert = symbols[0];
        if (this.selectedConvert == event) {
            this.initializeInputs();
        }
        this.curreancyService.getExchangeRate(this.selectedBase, symbols.toString())
            .subscribe(function (data) {
            _this.currencyMap = [];
            _this.setInitialValues(data);
            _this.inputBaseAmount = _this.inputBaseAmount;
            var outAmount = parseInt(_this.inputAmount) * _this.outBaseAmount;
            _this.outAmount = _this.decimalPipe(outAmount);
        });
    };
    CurrencyComponent.prototype.onOutSelect = function (event) {
        if (this.selectedConvert == event) {
        }
        this.selectedConvert = event.code;
        this.outBaseAmount = event.rate;
        var outAmount = this.outBaseAmount * parseInt(this.inputAmount);
        this.outAmount = this.decimalPipe(outAmount);
    };
    CurrencyComponent.prototype.setInitialValues = function (data) {
        var _this = this;
        Object.entries(data.rates).map(function (key, i) {
            if (key[0] == _this.selectedConvert) {
                _this.outBaseAmount = Number(key[1]);
            }
            _this.currencyMap.push({ 'code': key[0], 'rate': Number(key[1]) });
        });
        this.outArr = this.currencyMap.filter(function (rate) { return rate.code !== _this.selectedConvert; });
    };
    CurrencyComponent.prototype.showDetails = function () {
        this.canShow = !this.canShow;
    };
    CurrencyComponent.prototype.decimalPipe = function (num) {
        return (Number(num) * 100 / 100).toFixed(2);
    };
    CurrencyComponent.prototype.initializeInputs = function () {
        this.inputAmount = "0.00";
        this.outAmount = "0.00";
    };
    CurrencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-currency',
            template: __webpack_require__("../../../../../src/app/currency/currency.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currency/currency.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_currency_service__["a" /* CurrencyService */]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/currency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
    }
    CurrencyService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    CurrencyService.prototype.getExchangeRate = function (base, symbols) {
        var apiUrl = 'https://api.fixer.io/latest?base=' + base + '&symbols=' + symbols;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map