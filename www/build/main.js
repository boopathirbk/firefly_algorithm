webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newpage1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Newpage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Newpage1Page = (function () {
    function Newpage1Page(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Newpage1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Newpage1Page');
    };
    Newpage1Page.prototype.onButtonClicked = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        modal.present();
    };
    return Newpage1Page;
}());
Newpage1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newpage1',template:/*ion-inline-start:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\newpage1\newpage1.html"*/'<!--\n  Generated template for the Newpage1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ALGORITHM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>Firefly algorithm\n\nThe firefly algorithm (FA) is a nature-inspired optimization method [7], which maintains a population of fireflies to find the global optimum of an optimization problem.\n\nIn FA, the distance between any two fireflies  and  at  and , respectively, can be defined as the Euclidean distance , which is formulated as follows,</p>\n\n<p>(1)\nwhere  is the dimension of an optimization problem.\n\nIndeed, the larger the distance  is, the less light the fireflies can see from each other. Accordingly, it is necessary to define monotonically decreasing functions for light intensity and attractiveness, respectively. They are presented in Eqs. (2) and (3).\n</p>\n<p>(2)\nwhere  is initial light intensity, and  is the light absorption coefficient, which controls the decrease of light intensity. Accordingly, the attractiveness  of a firefly is defined as shown in Eq. (3).\n</p>\n<p>(3)\nwhere  is a constant, which is the attractiveness at .\n\nThe step of a firefly  is attracted to move to another more attractive (brighter) firefly  is determined by\n</p>\n<p>(4)\nwhere  is a constant vector  and  is the time step,  is drawn from a normal distribution .  is the step size of the th firefly moving. The first term is the attraction from the th firefly, while the second term is randomization controlled by , which is a constant in the range of . Therefore, the update of the th firefly is formulated as follows,</p>\n<p>\n(5)\n\nThe Eqs. (4) and (5) show that the th firefly will move towards the th firefly, which is a more attractive one.</p>\n<p><button ion-button (click)="onButtonClicked()">\n   BACK\n  </button></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\newpage1\newpage1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], Newpage1Page);

//# sourceMappingURL=newpage1.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newpage2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Newpage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Newpage2Page = (function () {
    function Newpage2Page(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Newpage2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Newpage2Page');
    };
    Newpage2Page.prototype.onButtonClicked = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        modal.present();
    };
    return Newpage2Page;
}());
Newpage2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newpage2',template:/*ion-inline-start:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\newpage2\newpage2.html"*/'<!--\n  Generated template for the Newpage2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PROGRAM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>#include < iostream.h></p>\n<p>#include <  stdio.h></p>\n<p>#include < stdlib.h></p>\n<p>#include < math.h></p>\n<p>#include < time.h></p>\n<p>#include < string.h></p>\n<p>#include < memory.h></p>\n<p>#define < DUMP	1</p>\n<p>#define < MAX_FFA	1000</p>\n<p>#define < MAX_D	1000</p>\n<p>using namespace std;</p>\n<p>int D = 1000;	// dimension of the problem</p>\n<p>int n = 20;	// number of fireflies</p>\n<p>int MaxGeneration;	// number of iterations</p>\n<p>int NumEval;	// number of evaluations</p>\n<p>int Index[MAX_FFA];	// sort of fireflies according to fitness values</p>\n<p>double ffa[MAX_FFA][MAX_D];	// firefly agents</p>\n<p>double ffa_tmp[MAX_FFA][MAX_D]; // intermediate population</p>\n<p>double f[MAX_FFA];	// fitness values</p>\n<p>double I[MAX_FFA];	// light intensity</p>\n<p>double nbest[MAX_FFA]; // the best solution found so far</p>\n<p>double lb[MAX_D];	// upper bound</p>\n<p>double ub[MAX_D];	// lower bound</p>\n<p>double alpha = 0.5;	// alpha parameter</p>\n<p>double betamin = 0.2; // beta parameter</p>\n<p>double gama = 1.0;	// gamma parameter</p>\n<p>double fbest;	// the best objective function</p>\n<p>typedef double (*FunctionCallback)(double sol[MAX_D]);</p>\n<p>/*benchmark functions */</p>\n\n<p>/*Write your own objective function */</p>\n\n<p>// optionally recalculate the new alpha value</p>\n<p>new double alpha</p>\n\n<p>double delta;	// delta parameter</p>\n<p>delta = 1.0-pow((pow(10.0, -4.0)/0.9), 1.0/(double) NGen);</p>\n<p>return (1-delta)*alpha;</p>\n\n<p>// initialize the firefly population</p>\n<p>void init_ffa()</p>\n\n<p>int i, j;</p>\n<p>double r;</p>\n<p>// initialize upper and lower bounds</p>\n<p>for (i=0;i D;i++)</p>\n\n<p>lb[i] = 0.0;</p>\n<p>ub[i] = 2.0;</p>\n\n<p>for (i=0;i n;i++)</p>\n\n<p>for (j=0;j D;j++)</p>\n\n<p>r = ( (double)rand() / ((double)(RAND_MAX)+(double)(1)) );</p>\n<p>ffa[i][j]=r*(ub[j]-lb[j])+lb[j];</p>\n\n<p>f[i] = 1.0;	// initialize attractiveness</p>\n<p>I[i] = f[i];</p>\n<p>GET CODE HERE<a href="https://drive.google.com/file/d/0BwIEV2yTZbuXM1VQSXM5ai1FNkFOelRaa2pjWldoN2xySEFV/view?usp=sharing">CPP CODE</a></p>\n<p><button ion-button (click)="onButtonClicked()">\n   BACK\n  </button></p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\newpage2\newpage2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], Newpage2Page);

//# sourceMappingURL=newpage2.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newpage3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Newpage3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Newpage3Page = (function () {
    function Newpage3Page(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Newpage3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Newpage3Page');
    };
    Newpage3Page.prototype.onButtonClicked = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        modal.present();
    };
    return Newpage3Page;
}());
Newpage3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newpage3',template:/*ion-inline-start:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\newpage3\newpage3.html"*/'<!--\n  Generated template for the Newpage3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>OUTPUT</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<img src="assets/imgs/new.PNG">\n<p><button ion-button (click)="onButtonClicked()">\n   BACK\n  </button></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\newpage3\newpage3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], Newpage3Page);

//# sourceMappingURL=newpage3.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/newpage1/newpage1.module": [
		265,
		2
	],
	"../pages/newpage2/newpage2.module": [
		266,
		1
	],
	"../pages/newpage3/newpage3.module": [
		267,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_newpage1_newpage1__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newpage2_newpage2__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newpage3_newpage3__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_newpage1_newpage1__["a" /* Newpage1Page */],
            __WEBPACK_IMPORTED_MODULE_8__pages_newpage2_newpage2__["a" /* Newpage2Page */],
            __WEBPACK_IMPORTED_MODULE_9__pages_newpage3_newpage3__["a" /* Newpage3Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/newpage1/newpage1.module#Newpage1PageModule', name: 'Newpage1Page', segment: 'newpage1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newpage2/newpage2.module#Newpage2PageModule', name: 'Newpage2Page', segment: 'newpage2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newpage3/newpage3.module#Newpage3PageModule', name: 'Newpage3Page', segment: 'newpage3', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_newpage1_newpage1__["a" /* Newpage1Page */],
            __WEBPACK_IMPORTED_MODULE_8__pages_newpage2_newpage2__["a" /* Newpage2Page */],
            __WEBPACK_IMPORTED_MODULE_9__pages_newpage3_newpage3__["a" /* Newpage3Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\boo\Desktop\ionic\fireflyboo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\boo\Desktop\ionic\fireflyboo\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newpage1_newpage1__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpage2_newpage2__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newpage3_newpage3__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.onButtonClicked1 = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__newpage1_newpage1__["a" /* Newpage1Page */]);
        modal.present();
    };
    HomePage.prototype.onButtonClicked2 = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newpage2_newpage2__["a" /* Newpage2Page */]);
        modal.present();
    };
    HomePage.prototype.onButtonClicked3 = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__newpage3_newpage3__["a" /* Newpage3Page */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FIREFLY ALGORITHM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="assets/imgs/logo.png">\n  <p>What is Firefly Algorithm</p>\n  <p> 1. The Firefly Algorithm is a computationally efficient, nature-inspired, population-based metaheuristic that derives its solution approach based upon the characteristics of fireflies. Learn more in: A Nature-Inspired Metaheuristic Approach for Generating Alternatives</p>\n  <p>2. The Firefly Algorithm is a computationally efficient, biologically-inspired, population-based metaheuristic that derives its solution approach based upon the characteristics of fireflies. Learn more in: Bio-Inspired Modelling to Generate Alternatives</p>\n  <p>3. Population based meta-heuristic method which is inspired from flashing light behaviour of fireflies in nature. Learn more in: Population-Based vs. Single Point Search Meta-Heuristics for a PID Controller Tuning</p>\n  <p>4. An algorithm that simulates the luminescence properties of fireflies based on the group search. Learn more in: Swarm Intelligent Optimization Algorithms and Its Application in Mobile Robot Path Planning </p>\n  <p><button clas=\'blink\'ion-button (click)="onButtonClicked1()">\n   VIEW ALGORITHM\n  </button></p>\n  <p><button ion-button (click)="onButtonClicked2()">\n   VIEW PROGRAM\n  </button></p>\n  <p><button ion-button (click)="onButtonClicked3()">\n   VIEW OUTPUT\n  </button></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\boo\Desktop\ionic\fireflyboo\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map