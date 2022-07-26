(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ventas_ventas_module_ts"), __webpack_require__.e("default-src_app_consultas_consultas_module_ts"), __webpack_require__.e("src_app_public_public_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./public/public.module */ 1627)).then((m) => m.PublicModule),
    },
    {
        path: 'consultas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ventas_ventas_module_ts"), __webpack_require__.e("default-src_app_consultas_consultas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./consultas/consultas.module */ 8001)).then((m) => m.ConsultasModule),
    },
    {
        path: 'compra_tus_juegos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_ventas_ventas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ventas/ventas.module */ 5268)).then((m) => m.VentasModule),
    },
    {
        path: 'codigosPromocionales',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./codigos-promocionales/codigos-promocionales.module */ 8166)).then((m) => m.CodigosPromocionalesModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _consultas_services_consultas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultas/services/consultas.service */ 8717);





class AppComponent {
  constructor(router, consultas) {
    this.router = router;
    this.consultas = consultas;
    this.title = 'loteriaNacionalWeb';
    this.token = '';
    this.isDetail = false;
    this.isDetail = false;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        let data = decodeURIComponent(event.url);

        if (data.includes('compra_tus_juegos?token')) {
          let url = data.split('?token=')[0];
          this.token = data.split('?token=')[1];
          this.router.navigateByUrl(`${url}/${this.token}`);
        }

        if (data.includes('compra_tus_juegos/detalle')) {
          this.isDetail = true;
          let url;
          let ticketId;

          if (data.includes('?ticketId')) {
            url = data.split('?ticketId=')[0];
            ticketId = data.split('?ticketId=')[1];
            this.router.navigateByUrl(`${url}/${ticketId}`);
          }
        }
      }

      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {}

      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError) {
        console.log(event.error);
      }
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.consultas.recuperarUltimosResultados();
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_consultas_services_consultas_service__WEBPACK_IMPORTED_MODULE_1__.ConsultasService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./juegos/loteria/loteria.module */ 8015);
/* harmony import */ var _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./juegos/lotto/lotto.module */ 3366);
/* harmony import */ var _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./juegos/pozo/pozo.module */ 458);
/* harmony import */ var _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./juegos/millonaria/millonaria.module */ 4181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _codigos_promocionales_codigos_promocionales_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./codigos-promocionales/codigos-promocionales.module */ 8166);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_3__.LoteriaModule,
            _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_4__.LottoModule,
            _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_5__.PozoModule,
            _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_6__.MillonariaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _codigos_promocionales_codigos_promocionales_module__WEBPACK_IMPORTED_MODULE_7__.CodigosPromocionalesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        ], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_3__.LoteriaModule,
        _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_4__.LottoModule,
        _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_5__.PozoModule,
        _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_6__.MillonariaModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _codigos_promocionales_codigos_promocionales_module__WEBPACK_IMPORTED_MODULE_7__.CodigosPromocionalesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule], exports: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] }); })();


/***/ }),

/***/ 4580:
/*!*******************************************************************************!*\
  !*** ./src/app/codigos-promocionales/codigos-promocionales-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesRoutingModule": () => (/* binding */ CodigosPromocionalesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigos-promocionales.component */ 893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesComponent }];
class CodigosPromocionalesRoutingModule {
}
CodigosPromocionalesRoutingModule.ɵfac = function CodigosPromocionalesRoutingModule_Factory(t) { return new (t || CodigosPromocionalesRoutingModule)(); };
CodigosPromocionalesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CodigosPromocionalesRoutingModule });
CodigosPromocionalesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CodigosPromocionalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 893:
/*!**************************************************************************!*\
  !*** ./src/app/codigos-promocionales/codigos-promocionales.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesComponent": () => (/* binding */ CodigosPromocionalesComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_codigos_promocionales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/codigos-promocionales.service */ 16);



class CodigosPromocionalesComponent {
  constructor(codigosService) {
    this.codigosService = codigosService;
    this.codigos = [];
  }

  ngOnInit() {//this.codigos = (await this.codigosService.obtenerCodigos() as any).values

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {})();
  }

  generarTxt() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.codigos = _this.codigosService.obtenerTxt().subscribe(data => {
        var fileName = "";
        const contentDisposition = data.headers.get('Content-Disposition');

        if (contentDisposition) {
          const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = fileNameRegex.exec(contentDisposition);

          if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, '');
          }
        }

        const blob = new Blob([data.body], {
          type: "text/txt"
        });
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = fileName;
        element.click();
      }, error => {
        throw new Error(error.error.message);
      });
    })();
  }

}

CodigosPromocionalesComponent.ɵfac = function CodigosPromocionalesComponent_Factory(t) {
  return new (t || CodigosPromocionalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_codigos_promocionales_service__WEBPACK_IMPORTED_MODULE_1__.CodigosPromocionalesService));
};

CodigosPromocionalesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CodigosPromocionalesComponent,
  selectors: [["app-codigos-promocionales"]],
  decls: 2,
  vars: 0,
  consts: [[3, "click"]],
  template: function CodigosPromocionalesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CodigosPromocionalesComponent_Template_button_click_0_listener() {
        return ctx.generarTxt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Generar archivo de codigos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: ["button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 40px;\n  height: 30px;\n  padding: 5px 50px;\n  outline: none;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n  background-color: #28AAE1;\n  border: 1px solid #28AAE1;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28AAE1;\n  transition: background-color 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnb3MtcHJvbW9jaW9uYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQVplO0VBYWYsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFmYTtFQWdCYix5QkFBQTtBQUZGO0FBR0U7RUFDRSxzQkFBQTtFQUNBLGNBbkJXO0VBb0JYLHNDQUFBO0FBREoiLCJmaWxlIjoiY29kaWdvcy1wcm9tb2Npb25hbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOEFBRTE7XG5idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 8166:
/*!***********************************************************************!*\
  !*** ./src/app/codigos-promocionales/codigos-promocionales.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesModule": () => (/* binding */ CodigosPromocionalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigos-promocionales-routing.module */ 4580);
/* harmony import */ var _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigos-promocionales.component */ 893);
/* harmony import */ var _components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/popup-promo/popup-promo.component */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class CodigosPromocionalesModule {
}
CodigosPromocionalesModule.ɵfac = function CodigosPromocionalesModule_Factory(t) { return new (t || CodigosPromocionalesModule)(); };
CodigosPromocionalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CodigosPromocionalesModule });
CodigosPromocionalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CodigosPromocionalesModule, { declarations: [_codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_1__.CodigosPromocionalesComponent, _components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__.PopupPromoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesRoutingModule], exports: [_components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__.PopupPromoComponent] }); })();


/***/ }),

/***/ 9894:
/*!***************************************************************************************!*\
  !*** ./src/app/codigos-promocionales/components/popup-promo/popup-promo.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupPromoComponent": () => (/* binding */ PopupPromoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class PopupPromoComponent {
    constructor() {
        this.closePromo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    close() {
        this.closePromo.emit();
    }
}
PopupPromoComponent.ɵfac = function PopupPromoComponent_Factory(t) { return new (t || PopupPromoComponent)(); };
PopupPromoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupPromoComponent, selectors: [["app-popup-promo"]], outputs: { closePromo: "closePromo" }, decls: 13, vars: 0, consts: [[1, "blackBox", 3, "click"], ["id", "myModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-header"], ["aria-label", "Close", 1, "close", 3, "click"], [1, "modal-content"], [1, "modal-body"], ["target", "_parent", "href", "https://www.loteria.com.ec/compra-tus-boletos"], ["src", "assets/BANNERWEB-POPUP.jpg", 1, "Desktop", 3, "click"], ["src", "assets/BANNERWEB-600X450.jpg", 1, "Ipad", 2, "max-width", "100%", 3, "click"], ["src", "assets/BANNERPOPUPMOBILE-480X710.jpg", 1, "Mobile", 3, "click"]], template: function PopupPromoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPromoComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPromoComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_10_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Ipad[_ngcontent-%COMP%], .Mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.Desktop[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 500000;\n  position: fixed;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  width: 75%;\n  cursor: pointer;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  \n  \n  display: flex;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.65);\n  padding: 5px;\n  border-radius: 25px;\n  right: 0;\n  position: absolute;\n  z-index: 1000000;\n  margin: -15px;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  width: 2em;\n  height: 2em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  cursor: pointer;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n@media (max-width: 1240px) {\n  .Desktop[_ngcontent-%COMP%], .Mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Ipad[_ngcontent-%COMP%] {\n    display: block;\n    width: 96vw;\n  }\n}\n\n@media (max-width: 600px) {\n  .Desktop[_ngcontent-%COMP%], .Ipad[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Mobile[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXByb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0k7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDTjs7QUFBTTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyV0FBQTtFQUdBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7O0FBR0k7RUFDRSxZQUFBO0FBRE47O0FBTUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRTs7SUFFRSxhQUFBO0VBSEY7O0VBS0E7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTs7SUFFRSxhQUFBO0VBSEY7O0VBS0E7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoicG9wdXAtcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSXBhZCxcbi5Nb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uRGVza3RvcCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsIHtcbiAgei1pbmRleDogNTAwMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNzUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpdiB7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgICAvKiB0b3A6IC0xMHB4OyAqL1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDEwMDAwMDA7XG4gICAgICBtYXJnaW46IC0xNXB4O1xuICAgICAgLmNsb3NlIHtcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjMwMDAnJTNlJTNjcGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMDExLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDkuNDE0IDhsNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAxMC0xLjQxNHonLyUzZSUzYy9zdmclM2VcIilcbiAgICAgICAgICBjZW50ZXIvMWVtIGF1dG8gbm8tcmVwZWF0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgICAubW9kYWwtY29udGVudCB7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuICB9XG59XG5cbi5ibGFja0JveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogODAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjQwcHgpIHtcbiAgLkRlc2t0b3AsXG4gIC5Nb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLklwYWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5NnZ3O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuRGVza3RvcCxcbiAgLklwYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLk1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 16:
/*!*********************************************************************************!*\
  !*** ./src/app/codigos-promocionales/services/codigos-promocionales.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesService": () => (/* binding */ CodigosPromocionalesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class CodigosPromocionalesService {
    constructor(http) {
        this.http = http;
        this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.source;
    }
    obtenerCodigos() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        //let endpoint = "/inquiry";
        let address = "/codigosPromocionales";
        let endpoint = "/getCodCsv";
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http
                .get(address, {
                headers: headers,
            })
                .subscribe((data) => {
                resolve(data);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    /*   obtenerTxt() {
      let address = "";
      let endpoint = "/getTxt";
      address = this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        this.http
          .get<Blob>(address, {
            observe: "response",
            responseType: "blob" as "json",
          })
          .subscribe(
            (data: HttpResponse<Blob>) => {
              let contentDisposition = data.headers.get("content-disposition");
              resolve(data.body);
            },
            (error: any) => {
              reject(new Error(error.error.message));
            }
          );
      });
    } */
    obtenerTxt() {
        let address = "/codigosPromocionales";
        let endpoint = "/getTxt";
        address = this.mySource + address + endpoint;
        return this.http.get(address, {
            observe: "response",
            responseType: "blob",
        });
    }
}
CodigosPromocionalesService.ɵfac = function CodigosPromocionalesService_Factory(t) { return new (t || CodigosPromocionalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CodigosPromocionalesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CodigosPromocionalesService, factory: CodigosPromocionalesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 8717:
/*!*********************************************************!*\
  !*** ./src/app/consultas/services/consultas.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasService": () => (/* binding */ ConsultasService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_juegos_loteria_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/juegos/loteria/services/consulta.service */ 8514);
/* harmony import */ var src_app_juegos_lotto_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/juegos/lotto/services/consulta.service */ 6151);
/* harmony import */ var src_app_juegos_pozo_services_consulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/juegos/pozo/services/consulta.service */ 9398);
/* harmony import */ var src_app_juegos_millonaria_services_consulta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/juegos/millonaria/services/consulta.service */ 2054);






class ConsultasService {
  constructor(loteria, lotto, pozo, millonaria) {
    this.loteria = loteria;
    this.lotto = lotto;
    this.pozo = pozo;
    this.millonaria = millonaria;
  }

  recuperarUltimosResultados() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield Promise.all([_this.loteria.getUltimoResultado(), _this.lotto.getUltimoResultado(), _this.pozo.getUltimoResultado(), _this.millonaria.getUltimoResultado()]);
    })();
  }

}

ConsultasService.ɵfac = function ConsultasService_Factory(t) {
  return new (t || ConsultasService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_juegos_loteria_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_juegos_lotto_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_juegos_pozo_services_consulta_service__WEBPACK_IMPORTED_MODULE_3__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_juegos_millonaria_services_consulta_service__WEBPACK_IMPORTED_MODULE_4__.ConsultaService));
};

ConsultasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ConsultasService,
  factory: ConsultasService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6431:
/*!************************************************************************!*\
  !*** ./src/app/juegos/loteria/components/boletin/boletin.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletinComponent": () => (/* binding */ BoletinComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 8514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);







function BoletinComponent_div_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function BoletinComponent_div_3_img_1_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r4.handleImgError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.boletinImagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function BoletinComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Parece que aun no se ha cargado el bolet\u00EDn de este sorteo. Mientras el equipo de Loter\u00EDa Nacional se encarga de esto, pas\u00E9ate por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "nuestros juegos online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " y disfruta de todos los juegos que tenemos para ti. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BoletinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoletinComponent_div_3_img_1_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoletinComponent_div_3_div_2_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.imgNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.imgNotFound);
  }
}

function BoletinComponent_app_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 9);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

class BoletinComponent {
  constructor(actRoute, router, consulta) {
    this.actRoute = actRoute;
    this.router = router;
    this.consulta = consulta;
    this.imgNotFound = false;
    this.showBox = false;
    this.isLoading = false;
    this.loadingMessage = "Buscando el boletin";
    this.actRoute.params.subscribe(params => {
      this.sorteo = params["sorteo"];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      /* console.log("En la consulta de loteria"); */
      _this.triggerLoader();

      _this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      _this.boletinImagen = yield _this.consulta.obtenerBoletin(_this.sorteo);
      _this.showBox = true;

      _this.dismissLoader();
    })();
  }

  handleImgError() {
    this.imgNotFound = true;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

}

BoletinComponent.ɵfac = function BoletinComponent_Factory(t) {
  return new (t || BoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService));
};

BoletinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BoletinComponent,
  selectors: [["loteria-boletin"]],
  decls: 5,
  vars: 2,
  consts: [[1, "boletin_oficial"], ["class", "container_boletin", 4, "ngIf"], ["loader", "loteria", 3, "message", 4, "ngIf"], [1, "container_boletin"], ["alt", "Imagen del boletin de loteria nacional", 3, "src", "error", 4, "ngIf"], ["class", "boletinNotFound", 4, "ngIf"], ["alt", "Imagen del boletin de loteria nacional", 3, "src", "error"], [1, "boletinNotFound"], ["href", "https://www.loteria.com.ec/casino", "target", "_parent"], ["loader", "loteria", 3, "message"]],
  template: function BoletinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bolet\u00EDn Oficial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BoletinComponent_div_3_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoletinComponent_app_loader_4_Template, 1, 1, "app-loader", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #28aae1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhXO0FBSGYiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XG4uYm9sZXRpbl9vZmljaWFsIHtcbiAgaDEge1xuICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 3892:
/*!**************************************************************************!*\
  !*** ./src/app/juegos/loteria/components/consulta/consulta.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaComponent": () => (/* binding */ ConsultaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 8514);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r4.sorteo, " - ", option_r4.fecha, " ");
  }
}

function ConsultaComponent_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r5.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r5.sorteo, " - ", option_r5.fecha, " ");
  }
}

function ConsultaComponent_app_loader_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 22);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

function ConsultaComponent_app_error_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeError", function ConsultaComponent_app_error_60_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("msg", ctx_r3.errorMessage);
  }
}

class ConsultaComponent {
  constructor(router, consulta, changeDetectorRef) {
    this.router = router;
    this.consulta = consulta;
    this.changeDetectorRef = changeDetectorRef;
    this.combinacionesAux = "";
    this.characterCount = 0;
    this.previousLength = 0;
    this.resultados = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.maxDigits = 5;
    this.numbers = [];
    this.cameFromBackspace = false;
    this.isLoading = false;
    this.loadingMessage = "Consultando los resultados";
    this.isError = false;
    this.errorMessage = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();
    })();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = "default";
    this.sorteoBoletin = "default";
    this.changeDetectorRef.markForCheck();
  }

  validateField() {
    this.changeDetectorRef.detectChanges();
    this.validate();
    this.changeDetectorRef.markForCheck();
  }

  validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacionesAux.length;
    let addComma = false;

    if (this.previousLength > currentLength) {
      if (this.combinacionesAux[currentLength - 1] == ",") {
        this.combinacionesAux = this.combinacionesAux.slice(0, -1);
        this.cameFromBackspace = true;
      }
    } else {
      this.numbers = this.combinacionesAux.split(", ");

      if (this.cameFromBackspace) {
        let lastNumber = this.numbers[this.numbers.length - 1];
        let auxLength = lastNumber.length;
        let number = lastNumber[auxLength - 1];
        this.numbers[this.numbers.length - 1] = lastNumber.slice(0, -1);
        this.numbers.push(number);
        this.cameFromBackspace = false;
      }

      this.combinacionesAux = "";
      let numbersLength = this.numbers.length;
      let lastNumberAux = this.numbers[numbersLength - 1];
      lastNumberAux = lastNumberAux.replace(reg, "");

      if (lastNumberAux.length == this.maxDigits + 1) {
        let lastNumber = lastNumberAux[this.maxDigits];
        let beforeLastNumber = lastNumberAux.slice(0, -1);
        this.numbers.pop();
        this.numbers.push(beforeLastNumber);
        this.numbers.push(lastNumber);
      }

      numbersLength = this.numbers.length;
      this.numbers.forEach((number, index) => {
        number = number.replace(reg, "");
        this.combinacionesAux = `${this.combinacionesAux}${number}`;

        if (number.length == this.maxDigits && index != numbersLength - 1) {
          this.combinacionesAux = `${this.combinacionesAux}, `;
        }
      });
    }

    this.previousLength = this.combinacionesAux.length;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  preventArrow(e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }

  moveCursorToEnd(e) {
    this.changeDetectorRef.detectChanges();
    let el = e.target;

    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }

    this.changeDetectorRef.markForCheck();
  }

  buscarBoletoGanador() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.triggerLoader();

        if (!_this2.combinacionesAux.length) throw new Error("Por favor, escribe al menos una combinación que quieras consultar");
        let aux = _this2.combinacionesAux;

        if (_this2.combinacionesAux[_this2.combinacionesAux.length - 1] == " ") {
          aux = _this2.combinacionesAux.slice(0, -2);
        }

        let combinaciones = aux.split(", ");
        combinaciones = combinaciones.map((combinacion, index) => {
          let auxLength = combinacion.length;

          if (auxLength != 0) {
            if (auxLength < _this2.maxDigits) {
              let auxAdd = _this2.maxDigits - auxLength;

              for (let i = 1; i <= auxAdd; i++) {
                combinacion = `0${combinacion}`;
              }
            }

            return combinacion;
          }
        });

        if (_this2.sorteoGanador == "default") {
          _this2.dismissLoader();

          _this2.openError("Por favor, selecciona un sorteo");

          return;
        }

        let data = yield _this2.consulta.recuperarBoletoGanador(_this2.sorteoGanador, combinaciones);

        _this2.resultados.emit(data);

        _this2.dismissLoader();
      } catch (e) {
        _this2.dismissLoader();

        _this2.openError(e.message);

        console.log(e);
      }
    })();
  }

  buscarBoletin() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sorteoBoletin == "default") {
        _this3.openError("Por favor, selecciona un sorteo");

        return;
      }

      _this3.router.navigateByUrl(`/consultas/loteria/boletin/${_this3.sorteoBoletin}`);
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

}

ConsultaComponent.ɵfac = function ConsultaComponent_Factory(t) {
  return new (t || ConsultaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

ConsultaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConsultaComponent,
  selectors: [["loteria-consulta"]],
  outputs: {
    resultados: "resultados"
  },
  decls: 61,
  vars: 7,
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "loteria", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "loteria", 3, "message"], [3, "msg", "closeError"]],
  template: function ConsultaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Consultas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ingresa la combinaci\u00F3n principal de tu boleto.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Luego elige la fecha del sorteo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Los boletos a consultar deben corresponder a la misma fecha y puedes revisar de los ultimos 3 meses. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Consulta por Boleto y Sorteo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Ingresa numero(s) de boleto(s):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function ConsultaComponent_Template_input_keydown_30_listener($event) {
        return ctx.preventArrow($event);
      })("click", function ConsultaComponent_Template_input_click_30_listener($event) {
        return ctx.moveCursorToEnd($event);
      })("focus", function ConsultaComponent_Template_input_focus_30_listener($event) {
        return ctx.moveCursorToEnd($event);
      })("input", function ConsultaComponent_Template_input_input_30_listener() {
        return ctx.validateField();
      })("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.combinacionesAux = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 5 digitos de la combinaci\u00F3n principal de tu boleto. Puedes consultar varios boletos a la vez, separados por coma. Ejemplo: 12345,67897 (5 digitos) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_37_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ConsultaComponent_option_40_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_41_listener() {
        return ctx.buscarBoletoGanador();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_53_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, ConsultaComponent_option_56_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_57_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, ConsultaComponent_app_loader_59_Template, 1, 1, "app-loader", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ConsultaComponent_app_error_60_Template, 1, 1, "app-error", 20);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.combinacionesAux);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoGanador);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoBoletin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent],
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #35aee2;\n  border: 2px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #35aee2;\n  border: 1px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #35aee2;\n  border: 1px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #35aee2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkVTtBQU1oQjs7QUFhUTtFQUNFLGNBcEJNO0VBcUJOLHlCQUFBO0FBWFY7O0FBaUJNO0VBQ0UsY0E1QlE7QUFhaEI7O0FBb0JZO0VBQ0UsaUJBQUE7QUFsQmQ7O0FBK0JVO0VBQ0UsZ0JBQUE7RUFFQSx5QkFsREk7RUFtREoseUJBQUE7QUE5Qlo7O0FBK0JZO0VBQ0UsY0FyREU7QUF3QmhCOztBQWlDUTtFQUNFLHlCQTFETTtFQTJETix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlESTtBQStCaEI7O0FBc0NFO0VBQ0UseUJBdEVZO0FBa0NoQiIsImZpbGUiOiJjb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1sb3RlcmlhOiAjMzVhZWUyO1xuXG4laW5wdXQge1xuICBwYWRkaW5nOiAxM3B4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGNvbG9yOiAjOTc3NDc0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRjb2xvci1sb3RlcmlhO1xufVxuXG4uY29udGFpbmVyX2NvbnN1bHRhIHtcbiAgLmN1ZXJwb19ib2xldGluIHtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgfVxuXG4gICAgLmV4cGxpY2FjaW9uIHtcbiAgICAgIC5jb250ZW50X2V4cGxpY2FjaW9uIHtcbiAgICAgICAgLmljb25vIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWxvdGVyaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uc3VsdGFfYm9sZXRvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3RlcmlhO1xuICAgICAgfVxuICAgICAgLmZvcm11bGFyaW8ge1xuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIC5pbnB1dF9jb250ZW50IHtcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgICAgICAgLyogUmVjdGFuZ2xlIDM4ICovXG4gICAgICAgICAgICAgIEBleHRlbmQgJWlucHV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgICAgICAgICAgIEBleHRlbmQgJWlucHV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgLyogUmVjdGFuZ2xlIDYgKi9cblxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90ZXJpYTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdGVyaWE7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGllX2JvbGV0aW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3RlcmlhO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 769:
/*!**********************************************************************!*\
  !*** ./src/app/juegos/loteria/components/sorteo/sorteo.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorteoComponent": () => (/* binding */ SorteoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SorteoComponent {
    constructor() { }
    ngOnInit() {
    }
}
SorteoComponent.ɵfac = function SorteoComponent_Factory(t) { return new (t || SorteoComponent)(); };
SorteoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SorteoComponent, selectors: [["loteria-sorteo"]], decls: 2, vars: 0, template: function SorteoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sorteo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0ZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9072:
/*!****************************************************************************************!*\
  !*** ./src/app/juegos/loteria/components/ticket-consulta/ticket-consulta.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketConsultaComponent": () => (/* binding */ TicketConsultaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function TicketConsultaComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ticket.sorteo.fecha);
} }
function TicketConsultaComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](number_r2);
} }
class TicketConsultaComponent {
    constructor() { }
    ngOnInit() {
        this.ticketNumbers = this.ticket.ticketNumbers;
        this.sorteo = this.ticket.numeroSorteo;
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["loteria-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 16, vars: 3, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketConsultaComponent_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PRIMERA SUERTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Entero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TicketConsultaComponent_p_15_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sorteo N\u00B0 ", ctx.ticket.numeroSorteo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.sorteo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  text-align: center;\n  -webkit-text-stroke: 2px #28aae1;\n  color: #28aae1;\n  font-family: \"Monstserrat Bold\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #28aae1;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  text-transform: uppercase;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  border: 4px solid #28aae1;\n  border-radius: 150px;\n  padding: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-weight: bold;\n  font-size: 22px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQU5GO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFZTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVZSO0FBY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWNNO0VBQ0UsWUFBQTtBQVpSO0FBY007RUFDRSwrQkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBWlI7QUFlTTtFQUNFLFdBQUE7RUFDQSxtQ0FsRFc7RUFtRFgsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFiUjtBQWlCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZk47QUFpQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBakVPO0VBa0VQLCtCQXZFUTtFQXdFUixnQkFBQTtBQWZSO0FBa0JNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBMUVPO0VBMkVQLG1DQS9FVztBQStEbkI7QUFvQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQXZGYTtBQXFFbkI7QUFvQk07RUFDRSxrQkFBQTtBQWxCUjtBQW9CUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBbEJWO0FBcUJRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFuQlY7QUFxQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FuSE87RUFvSFAsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW5CWjtBQXdCTTtFQUNFLGtCQUFBO0FBdEJSO0FBd0JRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBdEJWO0FBeUJRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBdkJWO0FBeUJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQS9JTztFQWdKUCxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZCWiIsImZpbGUiOiJ0aWNrZXQtY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItYm90dG9uOiAjMjhhYWUxO1xuXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19sb2dvIHtcbiAgICB9XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2JhcnJhIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICAudGlja2V0X3RpdHVsbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRfbW9udG8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpY2tldF9lbnRlcm9fZnJhY2Npb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG5cbiAgICAgIC50aWNrZXRfZW50ZXJvIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9444:
/*!************************************************************************************!*\
  !*** ./src/app/juegos/loteria/components/ticket-ventas/ticket-ventas.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketVentasComponent": () => (/* binding */ TicketVentasComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);





function TicketVentasComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const number_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](number_r1);
  }
}

class TicketVentasComponent {
  constructor() {
    this.deleteTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.deleteFraccion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.ticketIndex = _this.ticket.combinacion;
      _this.fraccion = _this.ticket.seleccionados;
      _this.ticketNumbers = _this.ticket.display;
      _this.sorteoNumber = _this.sorteo.sorteo;
      _this.date = _this.sorteo.fecha;
    })();
  }

  deleteBoleto() {
    this.deleteTicket.emit();
  }

}

TicketVentasComponent.ɵfac = function TicketVentasComponent_Factory(t) {
  return new (t || TicketVentasComponent)();
};

TicketVentasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TicketVentasComponent,
  selectors: [["loteria-ticket-ventas"]],
  inputs: {
    ticket: "ticket",
    sorteo: "sorteo"
  },
  outputs: {
    deleteTicket: "deleteTicket",
    deleteFraccion: "deleteFraccion"
  },
  decls: 24,
  vars: 4,
  consts: [[1, "contenedor_informacion_ticket"], [1, "fractionsBox"], ["class", "fraccion", 4, "ngFor", "ngForOf"], ["src", "assets/trash.svg", "alt", "", 1, "trash", 3, "click"], ["src", "assets/img/loteria-sombra-2.png", "alt", "", 1, "logoTicket"], [1, "fraccion"]],
  template: function TicketVentasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Juego: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loter\u00EDa Nacional");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sorteo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Fecha: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Combinaci\u00F3n: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Fracciones:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TicketVentasComponent_p_21_Template, 2, 1, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketVentasComponent_Template_img_click_22_listener() {
        return ctx.deleteBoleto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sorteoNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ticket.combinacion);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fraccion);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #28AAE1;\n  background-color: #28AAE1;\n  box-sizing: border-box;\n  position: relative;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Monstserrat SemiBold\";\n  margin: 2px;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  width: 35px;\n  height: 35px;\n  font-weight: bold;\n  background-color: transparent;\n  border: 4.5px solid white;\n  border-radius: 150px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  top: 20px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  top: 110px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 100px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 120px;\n    top: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQVphO0VBYWIseUJBYmE7RUFjYixzQkFBQTtFQUNBLGtCQUFBO0FBTkY7QUFPRTtFQUNFLGtDQXBCYTtFQXFCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMSjtBQU1JO0VBQ0UsbUNBMUJhO0FBc0JuQjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFMSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0F0Q2E7RUF1Q2IsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBSk47QUFPRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFMSjtBQU9FO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0FBTEo7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBTEo7QUFTQTtFQUVJO0lBQ0UsZUFBQTtFQVBKO0VBVUs7SUFDRCxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQVJKO0FBQ0Y7QUFXQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQVZKO0FBQ0YiLCJmaWxlIjoidGlja2V0LXZlbnRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOEFBRTE7XG5cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICB9XG4gIH1cbiAgLmZyYWN0aW9uc0JveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLmZyYWNjaW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogNC41cHggc29saWQgd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgICB9XG4gIH1cbiAgaW1nLnRyYXNoe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6NiU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoMTA5JSk7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgIH1cbiAgaW1nLnRyYXNoOmhvdmVye1xuICAgIHdpZHRoOjglO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgfVxuICBpbWcubG9nb1RpY2tldHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MzAlO1xuICAgIHRvcDogMTEwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgIHB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICBpbWcubG9nb1RpY2tldCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICB0b3A6IDEwMHB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gICAgaW1nLmxvZ29UaWNrZXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgdG9wOiAxMDBweDtcbiAgICB9XG4gIH1cbn1cblxuIl19 */"]
});

/***/ }),

/***/ 5832:
/*!******************************************************************************************!*\
  !*** ./src/app/juegos/loteria/components/ultimo-resultado/ultimo-resultado.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimoResultadoComponent": () => (/* binding */ UltimoResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ticket-consulta/ticket-consulta.component */ 9072);



class UltimoResultadoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        let data = JSON.parse(localStorage.getItem("loteriaNacionalUltimoResultado"));
        this.ticketNumbers = data.ultimoResultadoLoteria.combinacion1.split("");
        this.ticketGanador = {
            ticketIndex: data.ultimoResultadoLoteria.codigo,
            description: "Boleto Ganador",
            ticketNumbers: this.ticketNumbers,
            numeroSorteo: data.numeroSorteo,
            sorteo: data.sorteo
        };
    }
    verUltimoBoletin() {
        let sorteo = this.ticketGanador.numeroSorteo;
        this.router.navigateByUrl(`/consultas/loteria/boletin/${sorteo}`);
    }
    verResultados() {
        this.router.navigateByUrl(`/consultas/loteria`);
    }
}
UltimoResultadoComponent.ɵfac = function UltimoResultadoComponent_Factory(t) { return new (t || UltimoResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["loteria-ultimo-resultado"]], decls: 12, vars: 1, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "assets/img/loteria-sombra.png", "alt", ""], ["size", "2px"], [1, "scroll"], [3, "ticket"], [1, "boton_comprar"], [3, "click"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "loteria-ticket-consulta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_8_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_10_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "BUSCAR OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ctx.ticketGanador);
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%] {\n  \n  width: 90%;\n  max-width: 400px;\n  min-width: 320px;\n  padding: 15px;\n  margin: 20px auto;\n  background: #ffffff;\n  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);\n  border-radius: 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin: 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n  visibility: hidden;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #28AAE1;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: space-around;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 10px;\n  margin-right: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #28AAE1;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 10px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #28AAE1;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  color: #000;\n  font-size: 12px;\n  text-align: left;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 30px;\n  background-color: #28AAE1;\n  border: 1px solid #28AAE1;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28AAE1;\n}\n.texto[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  font-size: 14px;\n  text-align: center;\n  margin: auto;\n  margin-top: 5px;\n}\n.ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  text-align: center;\n  font-family: \"Monstserrat Bold\";\n  font-size: 17px;\n  color: #fff;\n}\n.ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxnQkFBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFQSjtBQVNJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFQTjtBQVNJO0VBQ0UsU0FBQTtFQUNBLCtCQWxDVTtFQW1DVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQXZDVztBQThCZjtBQVlFO0VBQ0UsY0FBQTtBQVZKO0FBWUk7RUFDRSx3QkFBQTtBQVZOO0FBYUk7RUFDRSxXQUFBO0FBWE47QUFjSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVpOO0FBZUk7RUFDRSxtQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWROO0FBZ0JNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQWRSO0FBb0JVO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBbEJaO0FBc0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFwQlI7QUFzQlE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFwQlY7QUFzQlU7RUFDRSxXQUFBO0FBcEJaO0FBc0JVO0VBQ0UsK0JBekdJO0VBMEdKLGVBQUE7RUFDQSxpQkFBQTtBQXBCWjtBQXVCVTtFQUNFLFdBQUE7RUFDQSxtQ0EvR087RUFnSFAsZUFBQTtFQUNBLGtCQUFBO0FBckJaO0FBeUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXZCVjtBQXlCVTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFoSUk7RUFpSUosZ0JBQUE7QUF2Qlo7QUEwQlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FuSUc7RUFvSUgsbUNBeElPO0FBZ0huQjtBQTRCUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQS9JUztBQXFIbkI7QUE0QlU7RUFDRSxrQkFBQTtBQTFCWjtBQTRCWTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUExQmQ7QUE2Qlk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQTNCZDtBQTZCYztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FyS0c7RUFzS0gsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEzQmhCO0FBZ0NVO0VBQ0UsbUJBQUE7QUE5Qlo7QUFnQ1k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUE5QmQ7QUFpQ1k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUEvQmQ7QUFpQ2M7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBaE1HO0VBaU1ILGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBL0JoQjtBQXdDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXRDSjtBQXdDSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQXROUztFQXVOVCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0E1Tlc7RUE2TlgsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUF0Q047QUF3Q007RUFDRSxzQkFBQTtFQUNBLGNBbE9PO0FBNExmO0FBNENBO0VBQ0UsV0FBQTtFQUNBLCtCQS9PYztFQWdQZCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXpDRjtBQTRDQTtFQUNFLGtCQUFBO0FBekNGO0FBMkNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBN1BZO0VBOFBaLGVBQUE7RUFDQSxXQUFBO0FBekNKO0FBNENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUExQ0o7QUE0Q0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBMVFhO0VBMlFiLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUExQ04iLCJmaWxlIjoidWx0aW1vLXJlc3VsdGFkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOEFBRTE7XG5cbi5jb250ZW5lZG9yX3RpY2tldCB7XG4gIC8qIFJlY3RhbmdsZSA3ICovXG5cbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgLmxvZ29fdGlja2V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cblxuICBociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1ib3R0b247XG4gIH1cblxuICAuc2Nyb2xsIHtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvIHtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG5cbiAgICAgICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19sb2dvIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fYmFycmEge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgLnRpY2tldF90aXR1bG8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpY2tldF9tb250byB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuXG4gICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1ib3R0b247XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGlja2V0X2VudGVyb19mcmFjY2lvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuXG4gICAgICAgICAgLnRpY2tldF9lbnRlcm8ge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuXG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuXG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcblxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm90b25fY29tcHJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50ZXh0byB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRpY2tldF9lbnRlcm8ge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG5cbiAgaDUge1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICBwIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgbWFyZ2luOiAwcHggNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6117:
/*!********************************************************************!*\
  !*** ./src/app/juegos/loteria/components/venta/venta.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaComponent": () => (/* binding */ VentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class VentaComponent {
    constructor() { }
    ngOnInit() {
    }
}
VentaComponent.ɵfac = function VentaComponent_Factory(t) { return new (t || VentaComponent)(); };
VentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["loteria-venta"]], decls: 2, vars: 0, template: function VentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8015:
/*!**************************************************!*\
  !*** ./src/app/juegos/loteria/loteria.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoteriaModule": () => (/* binding */ LoteriaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consulta/consulta.component */ 3892);
/* harmony import */ var _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sorteo/sorteo.component */ 769);
/* harmony import */ var _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/venta/venta.component */ 6117);
/* harmony import */ var _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/boletin/boletin.component */ 6431);
/* harmony import */ var _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ultimo-resultado/ultimo-resultado.component */ 5832);
/* harmony import */ var _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ticket-consulta/ticket-consulta.component */ 9072);
/* harmony import */ var _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-ventas/ticket-ventas.component */ 9444);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class LoteriaModule {
}
LoteriaModule.ɵfac = function LoteriaModule_Factory(t) { return new (t || LoteriaModule)(); };
LoteriaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LoteriaModule });
LoteriaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LoteriaModule, { declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_1__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_2__.VentaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_3__.BoletinComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule], exports: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_1__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_2__.VentaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_3__.BoletinComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent] }); })();


/***/ }),

/***/ 8514:
/*!*************************************************************!*\
  !*** ./src/app/juegos/loteria/services/consulta.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaService": () => (/* binding */ ConsultaService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ConsultaService {
  constructor(http) {
    this.http = http;
    this.today = new Date();
    this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.source;
  }

  recuperarSorteosJugados() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    var address = '/loteria';
    let endpoint = '/cache';
    endpoint = `${endpoint}/sorteosJugados`;
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(address, {
        headers: headers
      }).subscribe(data => {
        let sorteosJugados = data.values;
        console.log(sorteosJugados);
        sorteosJugados.sort(this.ordenaSorteos);
        resolve(sorteosJugados);
      });
    });
  }

  ordenaSorteos(a, b) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo, combinaciones) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '';
    let address = '/loteria';
    endpoint = `${endpoint}/ganador`;
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      combinaciones
    };
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        let boletoGanador = data;
        resolve(boletoGanador);
      }, error => {
        reject(new Error(error.error.message));
      });
    });
  }

  getUltimoResultado() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let address = '/loteria';
      let endpoint = '/cache/ultimoResultado';
      let auxAddress = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(auxAddress, {
          headers: headers
        }).subscribe(data => {
          let response;
          let loteriaNacional = data;
          localStorage.setItem('loteriaNacionalUltimoResultado', JSON.stringify(loteriaNacional));
          response = {
            tipo: 'loteriaNacional',
            data: loteriaNacional
          };
          resolve(response);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  obtenerBoletin(sorteo) {
    let sourceBoletines = `${this.mySource}/uploads/boletines/`;
    return new Promise((resolve, reject) => {
      let boletinAddress = `${sourceBoletines}T1${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }

}

ConsultaService.ɵfac = function ConsultaService_Factory(t) {
  return new (t || ConsultaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

ConsultaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConsultaService,
  factory: ConsultaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5303:
/*!**********************************************************************!*\
  !*** ./src/app/juegos/lotto/components/boletin/boletin.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletinComponent": () => (/* binding */ BoletinComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 6151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);







function BoletinComponent_div_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function BoletinComponent_div_3_img_1_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r4.handleImgError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.boletinImagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function BoletinComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Parece que aun no se ha cargado el bolet\u00EDn de este sorteo. Mientras el equipo de Loter\u00EDa Nacional se encarga de esto, pas\u00E9ate por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "nuestros juegos online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " y disfruta de todos los juegos que tenemos para ti. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BoletinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoletinComponent_div_3_img_1_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoletinComponent_div_3_div_2_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.imgNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.imgNotFound);
  }
}

function BoletinComponent_app_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 9);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

class BoletinComponent {
  constructor(actRoute, router, consulta) {
    this.actRoute = actRoute;
    this.router = router;
    this.consulta = consulta;
    this.imgNotFound = false;
    this.showBox = false;
    this.isLoading = false;
    this.loadingMessage = "Buscando el boletin";
    this.actRoute.params.subscribe(params => {
      this.sorteo = params["sorteo"];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      /* console.log("En la consulta de loteria"); */
      _this.triggerLoader();

      _this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      _this.boletinImagen = yield _this.consulta.obtenerBoletin(_this.sorteo);
      _this.showBox = true;

      _this.dismissLoader();
    })();
  }

  handleImgError() {
    console.log("Img not found");
    this.imgNotFound = true;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

}

BoletinComponent.ɵfac = function BoletinComponent_Factory(t) {
  return new (t || BoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService));
};

BoletinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BoletinComponent,
  selectors: [["lotto-boletin"]],
  decls: 5,
  vars: 2,
  consts: [[1, "boletin_oficial"], ["class", "container_boletin", 4, "ngIf"], ["loader", "lotto", 3, "message", 4, "ngIf"], [1, "container_boletin"], ["alt", "Imagen del boletin de lotto", 3, "src", "error", 4, "ngIf"], ["class", "boletinNotFound", 4, "ngIf"], ["alt", "Imagen del boletin de lotto", 3, "src", "error"], [1, "boletinNotFound"], ["href", "https://www.loteria.com.ec/casino", "target", "_parent"], ["loader", "lotto", 3, "message"]],
  template: function BoletinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bolet\u00EDn Oficial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BoletinComponent_div_3_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoletinComponent_app_loader_4_Template, 1, 1, "app-loader", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhXO0FBSGYiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICNiNTFmMjA7XG4uYm9sZXRpbl9vZmljaWFsIHtcbiAgaDEge1xuICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 2643:
/*!************************************************************************!*\
  !*** ./src/app/juegos/lotto/components/consulta/consulta.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaComponent": () => (/* binding */ ConsultaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 6151);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r4.sorteo, " - ", option_r4.fecha, " ");
  }
}

function ConsultaComponent_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r5.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r5.sorteo, " - ", option_r5.fecha, " ");
  }
}

function ConsultaComponent_app_loader_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 22);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

function ConsultaComponent_app_error_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeError", function ConsultaComponent_app_error_60_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("msg", ctx_r3.errorMessage);
  }
}

class ConsultaComponent {
  constructor(router, consulta, changeDetectorRef) {
    this.router = router;
    this.consulta = consulta;
    this.changeDetectorRef = changeDetectorRef;
    this.combinacionesAux = '';
    this.maxDigits = 6;
    this.numbers = [];
    this.previousLength = 0;
    this.cameFromBackspace = false;
    this.resultados = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isLoading = false;
    this.loadingMessage = 'Consultando los resultados';
    this.isError = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log('En la consulta de loteria');
      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();
    })();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = 'default';
    this.sorteoBoletin = 'default';
    this.changeDetectorRef.markForCheck();
  }

  validateField() {
    this.changeDetectorRef.detectChanges();
    this.validate();
    this.changeDetectorRef.markForCheck();
  }

  validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacionesAux.length;
    let addComma = false;

    if (this.previousLength > currentLength) {
      if (this.combinacionesAux[currentLength - 1] == ',') {
        this.combinacionesAux = this.combinacionesAux.slice(0, -1);
        this.cameFromBackspace = true;
      }
    } else {
      this.numbers = this.combinacionesAux.split(', ');

      if (this.cameFromBackspace) {
        let lastNumber = this.numbers[this.numbers.length - 1];
        let auxLength = lastNumber.length;
        let number = lastNumber[auxLength - 1];
        this.numbers[this.numbers.length - 1] = lastNumber.slice(0, -1);
        this.numbers.push(number);
        this.cameFromBackspace = false;
      }

      this.combinacionesAux = '';
      let numbersLength = this.numbers.length;
      let lastNumberAux = this.numbers[numbersLength - 1];
      lastNumberAux = lastNumberAux.replace(reg, '');

      if (lastNumberAux.length == this.maxDigits + 1) {
        let lastNumber = lastNumberAux[this.maxDigits];
        let beforeLastNumber = lastNumberAux.slice(0, -1);
        this.numbers.pop();
        this.numbers.push(beforeLastNumber);
        this.numbers.push(lastNumber);
      }

      numbersLength = this.numbers.length;
      this.numbers.forEach((number, index) => {
        number = number.replace(reg, '');
        this.combinacionesAux = `${this.combinacionesAux}${number}`;

        if (number.length == this.maxDigits && index != numbersLength - 1) {
          this.combinacionesAux = `${this.combinacionesAux}, `;
        }
      });
    }

    this.previousLength = this.combinacionesAux.length;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  preventArrow(e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }

  moveCursorToEnd(e) {
    this.changeDetectorRef.detectChanges();
    let el = e.target;

    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }

    this.changeDetectorRef.markForCheck();
  }

  buscarBoletoGanador() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.triggerLoader();

        if (!_this2.combinacionesAux.length) throw new Error('Por favor, escribe al menos una combinación que quieras consultar');
        let aux = _this2.combinacionesAux;

        if (_this2.combinacionesAux[_this2.combinacionesAux.length - 1] == ' ') {
          aux = _this2.combinacionesAux.slice(0, -2);
        }

        let combinaciones = aux.split(', ');
        combinaciones = combinaciones.map((combinacion, index) => {
          let auxLength = combinacion.length;

          if (auxLength != 0) {
            if (auxLength < _this2.maxDigits) {
              let auxAdd = _this2.maxDigits - auxLength;

              for (let i = 1; i <= auxAdd; i++) {
                combinacion = `0${combinacion}`;
              }
            }

            return combinacion;
          }
        });

        if (_this2.sorteoGanador == 'default') {
          _this2.dismissLoader();

          _this2.openError('Por favor, selecciona un sorteo');

          return;
        }

        let data = yield _this2.consulta.recuperarBoletoGanador(_this2.sorteoGanador, combinaciones);
        console.log(data);

        _this2.resultados.emit(data);

        _this2.dismissLoader();
      } catch (e) {
        _this2.dismissLoader();

        _this2.openError(e.message);

        console.log(e);
      }
    })();
  }

  buscarBoletin() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sorteoBoletin == 'default') {
        _this3.openError('Por favor, selecciona un sorteo');

        return;
      }

      _this3.router.navigateByUrl(`/consultas/lotto/boletin/${_this3.sorteoBoletin}`);
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

}

ConsultaComponent.ɵfac = function ConsultaComponent_Factory(t) {
  return new (t || ConsultaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

ConsultaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConsultaComponent,
  selectors: [["lotto-consulta"]],
  outputs: {
    resultados: "resultados"
  },
  decls: 61,
  vars: 7,
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "lotto", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "lotto", 3, "message"], [3, "msg", "closeError"]],
  template: function ConsultaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Consultas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ingresa la combinaci\u00F3n principal de tu boleto.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Luego Elige la fecha del sorteo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Los boletos a consultar deben corresponder a la misma fecha y puedes revisar de los ultimos 3 meses. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Consulta por Boleto y Sorteo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Ingresa numero(s) de boleto(s):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function ConsultaComponent_Template_input_keydown_30_listener($event) {
        return ctx.preventArrow($event);
      })("click", function ConsultaComponent_Template_input_click_30_listener($event) {
        return ctx.moveCursorToEnd($event);
      })("focus", function ConsultaComponent_Template_input_focus_30_listener($event) {
        return ctx.moveCursorToEnd($event);
      })("input", function ConsultaComponent_Template_input_input_30_listener() {
        return ctx.validateField();
      })("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.combinacionesAux = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 6 d\u00EDgitos de la combinaci\u00F3n principal de tu boleto. Puedes consultar varios boletos a la vez, separados por coma. Ejemplo: 123445, 678978 (6 digitos) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_37_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ConsultaComponent_option_40_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_41_listener() {
        return ctx.buscarBoletoGanador();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_53_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, ConsultaComponent_option_56_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_57_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, ConsultaComponent_app_loader_59_Template, 1, 1, "app-loader", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ConsultaComponent_app_error_60_Template, 1, 1, "app-error", 20);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.combinacionesAux);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoGanador);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoBoletin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent],
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #b51f20;\n  border: 2px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG5cbiVpbnB1dCB7XG4gIHBhZGRpbmc6IDEzcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgY29sb3I6ICM5Nzc0NzQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xufVxuXG4uY29udGFpbmVyX2NvbnN1bHRhIHtcbiAgLmN1ZXJwb19ib2xldGluIHtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgIH1cblxuICAgIC5leHBsaWNhY2lvbiB7XG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XG4gICAgICAgIC5pY29ubyB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uc3VsdGFfYm9sZXRvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgIH1cbiAgICAgIC5mb3JtdWxhcmlvIHtcbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAuaW5wdXRfY29udGVudCB7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBpZV9ib2xldGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9149:
/*!********************************************************************!*\
  !*** ./src/app/juegos/lotto/components/sorteo/sorteo.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorteoComponent": () => (/* binding */ SorteoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SorteoComponent {
    constructor() { }
    ngOnInit() {
    }
}
SorteoComponent.ɵfac = function SorteoComponent_Factory(t) { return new (t || SorteoComponent)(); };
SorteoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SorteoComponent, selectors: [["lotto-sorteo"]], decls: 2, vars: 0, template: function SorteoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sorteo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0ZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5191:
/*!**************************************************************************************!*\
  !*** ./src/app/juegos/lotto/components/ticket-consulta/ticket-consulta.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketConsultaComponent": () => (/* binding */ TicketConsultaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function TicketConsultaComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ticket.sorteo.fecha);
} }
function TicketConsultaComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](number_r2);
} }
class TicketConsultaComponent {
    constructor() { }
    ngOnInit() {
        this.description = this.ticket.description;
        this.ticketNumbers = this.ticket.ticketNumbers;
        this.sorteo = this.ticket.sorteo;
        this.numeroSorteo = this.ticket.numeroSorteo;
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["lotto-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 14, vars: 3, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketConsultaComponent_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PRIMERA SUERTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TicketConsultaComponent_p_13_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sorteo N\u00B0 ", ctx.ticket.numeroSorteo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.sorteo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  -webkit-text-stroke: 2px #b51f20;\n  text-align: center;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #b51f20;\n  border-radius: 150px;\n  padding: 20px;\n  font-weight: bold;\n  font-size: 22px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQU5GO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFZTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVZSO0FBY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWNNO0VBQ0UsWUFBQTtBQVpSO0FBY007RUFDRSwrQkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBWlI7QUFlTTtFQUNFLFdBQUE7RUFDQSxtQ0FsRFc7RUFtRFgsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFiUjtBQWtCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBa0JNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQWxFTTtFQW1FTiwrQkF4RVE7RUF5RVIsZ0JBQUE7QUFoQlI7QUFtQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0EzRU07RUE0RU4sbUNBaEZXO0FBK0RuQjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBeEZhO0FBcUVuQjtBQXFCTTtFQUNFLGtCQUFBO0FBbkJSO0FBcUJRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFuQlY7QUFzQlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXBCVjtBQXNCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0E1R087RUE4R1AseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBckJaO0FBMEJNO0VBQ0Usa0JBQUE7QUF4QlI7QUEwQlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUF4QlY7QUEyQlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUF6QlY7QUEyQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBNUlPO0VBNklQLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBekJaIiwiZmlsZSI6InRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1sb3R0bzogI2I1MWYyMDtcblxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkbyB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fbG9nbyB7XG4gICAgfVxuXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19iYXJyYSB7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgLnRpY2tldF90aXR1bG8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRfbW9udG8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1sb3R0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICB9XG5cbiAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpY2tldF9lbnRlcm9fZnJhY2Npb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG5cbiAgICAgIC50aWNrZXRfZW50ZXJvIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 555:
/*!**********************************************************************************!*\
  !*** ./src/app/juegos/lotto/components/ticket-ventas/ticket-ventas.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketVentasComponent": () => (/* binding */ TicketVentasComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/venta.service */ 2736);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);






function TicketVentasComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.sorteo.combinacion3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.ticket.combinacion3);
  }
}

function TicketVentasComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.sorteo.combinacion2, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.ticket.combinacion2);
  }
}

function TicketVentasComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.sorteo.combinacion4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.ticket.combinacion4);
  }
}

function TicketVentasComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.sorteo.combinacion5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.antojito.nombre);
  }
}

class TicketVentasComponent {
  constructor(lotteryService) {
    this.lotteryService = lotteryService;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.ticketIndex = _this.ticket.combinacion1;
      _this.ticketNumbers = _this.ticket.display;
      _this.sorteoNumber = _this.sorteo.sorteo;
      _this.date = _this.sorteo.fecha;
      _this.antojito = _this.lotteryService.obtenerCaracteristicasDeAntojito(_this.ticket.combinacion5);
    })();
  }

  deleteTicket() {
    this.delete.emit();
  }

}

TicketVentasComponent.ɵfac = function TicketVentasComponent_Factory(t) {
  return new (t || TicketVentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_venta_service__WEBPACK_IMPORTED_MODULE_1__.VentaService));
};

TicketVentasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TicketVentasComponent,
  selectors: [["lotto-ticket-ventas"]],
  inputs: {
    ticket: "ticket",
    sorteo: "sorteo"
  },
  outputs: {
    delete: "delete"
  },
  decls: 23,
  vars: 7,
  consts: [[1, "contenedor_informacion_ticket"], [4, "ngIf"], ["src", "assets/trash.svg", "alt", "", 1, "trash", 3, "click"], ["src", "assets/img/lotto-sombra.png", "alt", "", 1, "logoTicket"]],
  template: function TicketVentasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Juego: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Lotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Sorteo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Fecha: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Combinaci\u00F3n principal: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TicketVentasComponent_p_17_Template, 4, 2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TicketVentasComponent_p_18_Template, 4, 2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TicketVentasComponent_p_19_Template, 4, 2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TicketVentasComponent_p_20_Template, 4, 2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketVentasComponent_Template_img_click_21_listener() {
        return ctx.deleteTicket();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sorteoNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ticket.combinacion1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ticket.combinacion3 != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ticket.combinacion2 != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ticket.combinacion4 != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ticket.combinacion5 && ctx.ticket.combinacion5 != "");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n  background-color: #b51f20;\n  position: relative;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  top: 20px;\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  bottom: 5px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 132px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 115px;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJhO0VBY2IseUJBZGE7RUFlYixrQkFBQTtFQUNBLHNCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBcENhO0VBcUNiLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQVBKO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBKO0FBV0E7RUFFSTtJQUNFLGVBQUE7RUFUSjtFQVdFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUFUSjtBQUNGO0FBWUE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFYSjtBQUNGIiwiZmlsZSI6InRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItYm90dG9uOiAjYjUxZjIwO1xuXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwIHtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgfVxuICB9XG4gIC5mcmFjdGlvbnNCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5mcmFjY2lvbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICBtYXJnaW46IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxNiU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuICBpbWcudHJhc2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpXG4gICAgICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gIH1cbiAgaW1nLnRyYXNoOmhvdmVyIHtcbiAgICB3aWR0aDogOCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG4gIGltZy5sb2dvVGlja2V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3R0b206IDVweDtcbiAgICByaWdodDogNXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBpbWcubG9nb1RpY2tldCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICB0b3A6IDEzMnB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gICAgaW1nLmxvZ29UaWNrZXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMTVweDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 2092:
/*!****************************************************************************************!*\
  !*** ./src/app/juegos/lotto/components/ultimo-resultado/ultimo-resultado.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimoResultadoComponent": () => (/* binding */ UltimoResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ticket-consulta/ticket-consulta.component */ 5191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function UltimoResultadoComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Lotto Plus:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UltimoResultadoComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.ticketLottoPlus);
} }
function UltimoResultadoComponent_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lottito:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const lottito_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lottito_r8);
} }
function UltimoResultadoComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UltimoResultadoComponent_ng_container_12_ng_container_1_Template, 5, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.ticketLottito);
} }
function UltimoResultadoComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nos vemos jefe:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UltimoResultadoComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.ticketNosVemosJefe);
} }
function UltimoResultadoComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Antojito:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UltimoResultadoComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.ticketAntojito);
} }
class UltimoResultadoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        let data = JSON.parse(localStorage.getItem('lottoUltimoResultado'));
        this.ticketNumbers = data.ultimoResultadoLotto.combinacion1.split('');
        this.ticketLottoPlus = data.resultadoLottoPlus.combinacion2; //.split("");
        this.ticketNosVemosJefe = data.resultadoNosVemosJefe.combinacion4; //.split("");
        if (data.resultadoAntojito && data.resultadoAntojito.combinacion5) {
            this.ticketAntojito = data.resultadoAntojito.combinacion5; //.split("");
        }
        this.ticketLottito = data.resultadosLottito.map((resultado) => {
            return resultado.combinacion3; //.split("");
        });
        this.ticketGanador = {
            ticketIndex: data.ultimoResultadoLotto.codigo,
            description: 'Boleto Ganador',
            ticketNumbers: this.ticketNumbers,
            ticketLottoPlus: this.ticketLottoPlus,
            ticketLottito: this.ticketLottito,
            numeroSorteo: data.numeroSorteo,
            sorteo: data.sorteo,
        };
    }
    verUltimoBoletin() {
        let sorteo = this.ticketGanador.numeroSorteo;
        this.router.navigateByUrl(`/consultas/lotto/boletin/${sorteo}`);
    }
    verResultados() {
        this.router.navigateByUrl(`/consultas/lotto`);
    }
}
UltimoResultadoComponent.ɵfac = function UltimoResultadoComponent_Factory(t) { return new (t || UltimoResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["lotto-ultimo-resultado"]], decls: 22, vars: 8, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "assets/img/lotto-sombra-2.png", "alt", ""], ["size", "2px"], [1, "scroll"], [3, "ticket"], [1, "texto"], [1, "texto_premios"], [4, "ngIf"], [1, "boton_comprar"], [3, "click"], [4, "ngFor", "ngForOf"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "lotto-ticket-consulta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "PREMIOS ESPECIALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UltimoResultadoComponent_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UltimoResultadoComponent_p_11_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UltimoResultadoComponent_ng_container_12_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UltimoResultadoComponent_p_13_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UltimoResultadoComponent_p_14_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UltimoResultadoComponent_p_15_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UltimoResultadoComponent_p_16_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_18_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_20_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "BUSCAR OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ctx.ticketGanador);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketLottoPlus != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketLottoPlus != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketLottito && ctx.ticketLottito.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketNosVemosJefe != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketNosVemosJefe != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketAntojito);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticketAntojito);
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".contenedor_ticket[_ngcontent-%COMP%] {\n  \n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 30px;\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: repeat(6, auto);\n  text-align: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxnQkFBQTtFQUNGOzs7Ozs7Ozs7OztJQUFBO0FBS0E7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFMSjtBQU9JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFMTjtBQU9JO0VBQ0UsU0FBQTtFQUNBLCtCQXBDVTtFQXFDVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTE47QUFTRTtFQUNFLFVBQUE7RUFDQSxxQkF4Q1U7QUFpQ2Q7QUFVRTtFQUNFLGNBQUE7RUFVQTs7O1NBQUE7QUFkSjtBQU1JO0VBQ0Usd0JBQUE7QUFKTjtBQU9JO0VBQ0UsV0FBQTtBQUxOO0FBYUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFYTjtBQWNJO0VBQ0UsbUJBQUE7QUFaTjtBQWVJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBYk47QUFlTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFiUjtBQWVRO0VBQ0Usa0JBQUE7QUFiVjtBQWVVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFiWjtBQWlCUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZlY7QUFpQlU7RUFDRSxtQ0F0R087RUF1R1AsZUFBQTtBQWZaO0FBb0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFuQlI7QUFxQlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBbkJWO0FBcUJVO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQTlISTtFQStISixlQUFBO0FBbkJaO0FBc0JVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBaklFO0VBa0lGLCtCQXZJSTtBQW1IaEI7QUF3QlE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBaEpTO0FBMEhuQjtBQXdCVTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUF0Qlo7QUF5QlU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FBeEJaO0FBMEJZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBeEJkO0FBMkJZO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQXpCZDtBQStCTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTdCUjtBQStCUTtFQUNFLFdBQUE7QUE3QlY7QUFtQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQ0o7QUFtQ0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFqTVE7RUFrTVIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBdk1XO0VBd01YLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBakNOO0FBbUNNO0VBQ0Usc0JBQUE7RUFDQSxjQTdNTTtBQTRLZDtBQXNDRTtFQUNFLFlBQUE7RUFDQSwrQkF6Tlk7RUEwTlosZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FBckNKO0FBd0NFO0VBQ0Usa0JBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBdk9VO0VBd09WLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF0Q047QUF5Q0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXZDTjtBQXlDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FyUFc7RUFzUFgsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXZDUjtBQTRDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQTVDSjtBQThDSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNUNOIiwiZmlsZSI6InVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG5cbi5jb250ZW5lZG9yX3RpY2tldCB7XG4gIC8qIHdpZHRoOiAzNCU7ICovXG4vKiAgIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG5cbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAqL1xuICAubG9nb190aWNrZXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMDtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGhyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICB9XG5cbiAgLnNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgfVxuXG4gICAgLyogJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmluY3JlbWVudCxcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9ICovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgIC5jb250ZW5lZG9yX3RpdHVsbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDlweDtcblxuICAgICAgICAuY29udGVuZWRvcl9sb2dvIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW5lZG9yX2luZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogYXV0byAxMHB4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbmVkb3JfbW9udG9fcHJlbWlvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5tb250b19zb3J0ZW8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcblxuICAgICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAkY29sb3ItbG90dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IGxlZnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG5cbiAgICAgICAgICAubnVtZXJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVuZWRvcl9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG5cbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVtZXJvcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbmVkb3JfY29kaWdvX2JhcnJhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvdG9uX2NvbXByYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvOztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dG8ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcblxuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC50aWNrZXRfZW50ZXJvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG5cbiAgICBoNSB7XG4gICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgIHAge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dG9fcHJlbWlvcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5802:
/*!******************************************************************!*\
  !*** ./src/app/juegos/lotto/components/venta/venta.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaComponent": () => (/* binding */ VentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class VentaComponent {
    constructor() { }
    ngOnInit() {
    }
}
VentaComponent.ɵfac = function VentaComponent_Factory(t) { return new (t || VentaComponent)(); };
VentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["lotto-venta"]], decls: 2, vars: 0, template: function VentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3366:
/*!**********************************************!*\
  !*** ./src/app/juegos/lotto/lotto.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottoModule": () => (/* binding */ LottoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consulta/consulta.component */ 2643);
/* harmony import */ var _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/boletin/boletin.component */ 5303);
/* harmony import */ var _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sorteo/sorteo.component */ 9149);
/* harmony import */ var _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/venta/venta.component */ 5802);
/* harmony import */ var _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ultimo-resultado/ultimo-resultado.component */ 2092);
/* harmony import */ var _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ticket-consulta/ticket-consulta.component */ 5191);
/* harmony import */ var _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-ventas/ticket-ventas.component */ 555);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class LottoModule {
}
LottoModule.ɵfac = function LottoModule_Factory(t) { return new (t || LottoModule)(); };
LottoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LottoModule });
LottoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LottoModule, { declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__.BoletinComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__.VentaComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule], exports: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__.VentaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__.BoletinComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent] }); })();


/***/ }),

/***/ 6151:
/*!***********************************************************!*\
  !*** ./src/app/juegos/lotto/services/consulta.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaService": () => (/* binding */ ConsultaService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ConsultaService {
  constructor(http) {
    this.http = http;
    this.today = new Date();
    this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.source;
  }

  recuperarSorteosJugados() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '/cache';
      var address = '/lotto';
      endpoint = `${endpoint}/sorteosJugados`;
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(address, {
          headers: headers
        }).subscribe(data => {
          let sorteosJugados = data.values;
          console.log(sorteosJugados);
          sorteosJugados.sort(_this.ordenaSorteos);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  ordenaSorteos(a, b) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo, combinaciones) {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '';
      let address = '/lotto';
      endpoint = `${endpoint}/ganador`;
      address = _this2.mySource + address + endpoint;
      let body = {
        sorteo,
        combinaciones
      };
      console.log(body);
      return new Promise((resolve, reject) => {
        _this2.http.post(address, body, {
          headers: headers
        }).subscribe(data => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  getUltimoResultado() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let address = '/lotto';
      let endpoint = '/cache/ultimoResultado';
      let auxAddress = _this3.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this3.http.get(auxAddress, {
          headers: headers
        }).subscribe(data => {
          let response;
          let lotto = data;
          localStorage.setItem('lottoUltimoResultado', JSON.stringify(lotto));
          response = {
            tipo: 'lotto',
            data: lotto
          };
          resolve(response);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  obtenerBoletin(sorteo) {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let sourceBoletines = `${_this4.mySource}/uploads/boletines/`;
      return new Promise((resolve, reject) => {
        let boletinAddress = `${sourceBoletines}T2${sorteo}.jpg`;
        resolve(boletinAddress);
      });
    })();
  }

}

ConsultaService.ɵfac = function ConsultaService_Factory(t) {
  return new (t || ConsultaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

ConsultaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConsultaService,
  factory: ConsultaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2736:
/*!********************************************************!*\
  !*** ./src/app/juegos/lotto/services/venta.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaService": () => (/* binding */ VentaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class VentaService {
    constructor(http) {
        this.http = http;
        this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.source;
    }
    obtenerSorteo(authData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let endpoint = `/cache/sorteosDisponibles`;
        let address = '/lotto';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http
                .get(address, {
                params: {
                    lotteryToken: authData.lotteryToken,
                    user: authData.user,
                },
                headers: headers,
            })
                .subscribe((data) => {
                let sorteosDisponibles = data;
                sorteosDisponibles.sort(this.ordenaSorteos);
                resolve(sorteosDisponibles);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    ordenaSorteos(a, b) {
        let a1 = a['sorteo'];
        let b1 = b['sorteo'];
        return a1 - b1;
    }
    obtenerTickets(sorteo, combinacion, combinacionFigura, tipoSeleccion, authData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let endpoint = '';
        let body = {
            sorteo,
            lotteryToken: authData.lotteryToken,
            user: authData.user,
            combinacion,
            combinacionFigura,
            tipoSeleccion,
        };
        endpoint = `${endpoint}/combinacionesDisponibles`;
        let address = '/lotto';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http.post(address, body, { headers: headers }).subscribe((data) => {
                let combinacionesDisponibles = data.combinaciones;
                resolve(combinacionesDisponibles);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    obtenerCaracteristicasDeAntojito(antojito) {
        let antojitos = [
            {
                ruta: "assets/antojitos/1.jpg",
                identificador: "01",
                nombre: "Choclo con queso",
            },
            {
                ruta: "assets/antojitos/13.jpg",
                identificador: "13",
                nombre: "Cangrejo criollo",
            },
            {
                ruta: "assets/antojitos/10.jpg",
                identificador: "10",
                nombre: "Quimbolitos",
            },
            {
                ruta: "assets/antojitos/14.jpg",
                identificador: "14",
                nombre: "Carne en palito",
            },
            {
                ruta: "assets/antojitos/6.jpg",
                identificador: "06",
                nombre: "Caldo de bola",
            },
            {
                ruta: "assets/antojitos/2.jpg",
                identificador: "02",
                nombre: "Muchín con miel",
            },
            {
                ruta: "assets/antojitos/12.jpg",
                identificador: "12",
                nombre: "Higos con queso",
            },
            {
                ruta: "assets/antojitos/8.jpg",
                identificador: "08",
                nombre: "Patacones con queso",
            },
            {
                ruta: "assets/antojitos/15.jpg",
                identificador: "15",
                nombre: "Hayaca",
            },
            {
                ruta: "assets/antojitos/4.jpg",
                identificador: "04",
                nombre: "Pescado frito",
            },
            {
                ruta: "assets/antojitos/7.jpg",
                identificador: "07",
                nombre: "Llapingacho",
            },
            {
                ruta: "assets/antojitos/11.jpg",
                identificador: "11",
                nombre: "Coco helado",
            },
            {
                ruta: "assets/antojitos/5.jpg",
                identificador: "05",
                nombre: "Cuy",
            },
            {
                ruta: "assets/antojitos/3.jpg",
                identificador: "03",
                nombre: "Humitas",
            },
            {
                ruta: "assets/antojitos/9.jpg",
                identificador: "09",
                nombre: "Melcocha",
            },
            {
                ruta: "assets/antojitos/16.jpg",
                identificador: "16",
                nombre: "Empanadas de morocho",
            },
        ];
        let aux = antojitos.find((x) => parseInt(x.identificador) === parseInt(antojito));
        return aux;
    }
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7110:
/*!***************************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/boletin/boletin.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletinComponent": () => (/* binding */ BoletinComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 2054);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);







function BoletinComponent_div_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function BoletinComponent_div_3_img_1_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r4.handleImgError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.boletinImagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function BoletinComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Parece que aun no se ha cargado el bolet\u00EDn de este sorteo. Mientras el equipo de Loter\u00EDa Nacional se encarga de esto, pas\u00E9ate por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "nuestros juegos online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " y disfruta de todos los juegos que tenemos para ti.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BoletinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoletinComponent_div_3_img_1_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoletinComponent_div_3_div_2_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.imgNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.imgNotFound);
  }
}

function BoletinComponent_app_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 9);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

class BoletinComponent {
  constructor(actRoute, router, consulta) {
    this.actRoute = actRoute;
    this.router = router;
    this.consulta = consulta;
    this.imgNotFound = false;
    this.showBox = false;
    this.isLoading = false;
    this.loadingMessage = "Buscando el boletin";
    this.actRoute.params.subscribe(params => {
      this.sorteo = params["sorteo"];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      /* console.log("En la consulta de loteria"); */
      _this.triggerLoader();

      _this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      _this.boletinImagen = yield _this.consulta.obtenerBoletin(_this.sorteo);
      _this.showBox = true;

      _this.dismissLoader();
    })();
  }

  handleImgError() {
    this.imgNotFound = true;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

}

BoletinComponent.ɵfac = function BoletinComponent_Factory(t) {
  return new (t || BoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService));
};

BoletinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BoletinComponent,
  selectors: [["millonaria-boletin"]],
  decls: 5,
  vars: 2,
  consts: [[1, "boletin_oficial"], ["class", "container_boletin", 4, "ngIf"], ["loader", "millonaria", 3, "message", 4, "ngIf"], [1, "container_boletin"], ["alt", "Imagen del boletin de la millonaria", 3, "src", "error", 4, "ngIf"], ["class", "boletinNotFound", 4, "ngIf"], ["alt", "Imagen del boletin de la millonaria", 3, "src", "error"], [1, "boletinNotFound"], ["href", "https://www.loteria.com.ec/casino", "target", "_parent"], ["loader", "millonaria", 3, "message"]],
  template: function BoletinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bolet\u00EDn Oficial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BoletinComponent_div_3_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoletinComponent_app_loader_4_Template, 1, 1, "app-loader", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsMkJBQUE7QUFFRTtFQUNFLGNBSlc7QUFGZiIsImZpbGUiOiJib2xldGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuJGNvbG9yLWJvdHRvbjogI2I1MWYyMDtcbi8qICRjb2xvci1sb3R0bzogI2I1MWYyMDsgKi9cbi5ib2xldGluX29maWNpYWwge1xuICBoMSB7XG4gICAgY29sb3I6ICRjb2xvci1ib3R0b247XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 2705:
/*!*****************************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/consulta/consulta.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaComponent": () => (/* binding */ ConsultaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 2054);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r4.sorteo, " - ", option_r4.fecha, " ");
  }
}

function ConsultaComponent_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r5.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r5.sorteo, " - ", option_r5.fecha, " ");
  }
}

function ConsultaComponent_app_loader_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 23);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

function ConsultaComponent_app_error_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeError", function ConsultaComponent_app_error_67_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("msg", ctx_r3.errorMessage);
  }
}

class ConsultaComponent {
  constructor(router, consulta, changeDetectorRef) {
    this.router = router;
    this.consulta = consulta;
    this.changeDetectorRef = changeDetectorRef;
    this.combinacion = '';
    this.serie = '';
    this.maxDigits = 4;
    this.numbers = [];
    this.previousLength = 0;
    this.cameFromBackspace = false;
    this.resultados = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isLoading = false;
    this.loadingMessage = 'Consultando los resultados';
    this.isError = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log('En la consulta de la millonaria');
      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();
    })();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = 'default';
    this.sorteoBoletin = 'default';
    this.changeDetectorRef.markForCheck();
  }

  validateCombinacion() {
    this.changeDetectorRef.detectChanges();
    let reg = /[^0-9]/g;
    this.combinacion = this.combinacion.replace(reg, '');
    this.changeDetectorRef.markForCheck();
  }

  validateSerie() {
    this.changeDetectorRef.detectChanges();
    let reg = /[^0-9]/g;
    this.serie = this.serie.replace(reg, '');
    this.changeDetectorRef.markForCheck();
  }

  validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacion.length;
    let addComma = false;

    if (this.previousLength > currentLength) {
      if (this.combinacion[currentLength - 1] == ',') {
        this.combinacion = this.combinacion.slice(0, -1);
        this.cameFromBackspace = true;
      }
    } else {
      this.numbers = this.combinacion.split(', ');

      if (this.cameFromBackspace) {
        let lastNumber = this.numbers[this.numbers.length - 1];
        let auxLength = lastNumber.length;
        let number = lastNumber[auxLength - 1];
        this.numbers[this.numbers.length - 1] = lastNumber.slice(0, -1);
        this.numbers.push(number);
        this.cameFromBackspace = false;
      }

      this.combinacion = '';
      let numbersLength = this.numbers.length;
      let lastNumberAux = this.numbers[numbersLength - 1];
      lastNumberAux = lastNumberAux.replace(reg, '');

      if (lastNumberAux.length == this.maxDigits + 1) {
        let lastNumber = lastNumberAux[this.maxDigits];
        let beforeLastNumber = lastNumberAux.slice(0, -1);
        this.numbers.pop();
        this.numbers.push(beforeLastNumber);
        this.numbers.push(lastNumber);
      }

      numbersLength = this.numbers.length;
      this.numbers.forEach((number, index) => {
        number = number.replace(reg, '');
        this.combinacion = `${this.combinacion}${number}`;

        if (number.length == this.maxDigits && index != numbersLength - 1) {
          this.combinacion = `${this.combinacion}, `;
        }
      });
    }

    this.previousLength = this.combinacion.length;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  preventArrow(e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }

  moveCursorToEnd(e) {
    this.changeDetectorRef.detectChanges();
    let el = e.target;

    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }

    this.changeDetectorRef.markForCheck();
  }

  buscarBoletoGanador() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.triggerLoader();

        if (!_this2.combinacion.length) throw new Error('Por favor, escribe la combinación que quieras consultar');
        /*       let aux = this.combinacion;
        if (this.combinacion[this.combinacion.length - 1] == " ") {
          aux = this.combinacion.slice(0, -2);
        }
               let combinaciones: Array<any> = aux.split(", ");
        combinaciones = combinaciones.map((combinacion, index) => {
          let auxLength = combinacion.length;
          if (auxLength != 0) {
            if (auxLength < this.maxDigits) {
              let auxAdd = this.maxDigits - auxLength;
              for (let i = 1; i <= auxAdd; i++) {
                combinacion = `0${combinacion}`;
              }
            }
            return combinacion;
          }
        });
        */

        if (_this2.sorteoGanador == 'default') {
          _this2.dismissLoader();

          _this2.openError('Por favor, selecciona un sorteo');

          return;
        }

        let combinaciones = [{
          principal: _this2.combinacion,
          serie: _this2.serie
        }];
        let data = yield _this2.consulta.recuperarBoletoGanador(_this2.sorteoGanador, combinaciones);

        _this2.resultados.emit(data);

        _this2.dismissLoader();
      } catch (e) {
        _this2.dismissLoader();

        _this2.openError(e.message);

        console.log(e);
      }
    })();
  }

  buscarBoletin() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sorteoBoletin == 'default') {
        _this3.openError('Por favor, selecciona un sorteo');

        return;
      }

      _this3.router.navigateByUrl(`/consultas/millonaria/boletin/${_this3.sorteoBoletin}`);
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

}

ConsultaComponent.ɵfac = function ConsultaComponent_Factory(t) {
  return new (t || ConsultaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

ConsultaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConsultaComponent,
  selectors: [["millonaria-consulta"]],
  outputs: {
    resultados: "resultados"
  },
  decls: 68,
  vars: 8,
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", "maxlength", "4", 3, "ngModel", "input", "ngModelChange"], ["name", "serie", "type", "text", 3, "ngModel", "input", "ngModelChange"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "millonaria", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "millonaria", 3, "message"], [3, "msg", "closeError"]],
  template: function ConsultaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Consultas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ingresa la combinaci\u00F3n principal y la serie de tu boleto.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Luego Elige la fecha del sorteo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Los boletos a consultar deben corresponder a la misma fecha y puedes revisar de los ultimos 3 meses. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Consulta por Boleto y Sorteo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Ingresa numero de boleto:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ConsultaComponent_Template_input_input_30_listener() {
        return ctx.validateCombinacion();
      })("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.combinacion = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 4 d\u00EDgitos de la combinaci\u00F3n principal de tu boleto. Solo puedes consultar un boleto a la vez. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Ingresa la serie de tu boleto:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ConsultaComponent_Template_input_input_37_listener() {
        return ctx.validateSerie();
      })("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.serie = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Ingresa todos los d\u00EDgitos de la serie de tu boleto. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_44_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ConsultaComponent_option_47_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_48_listener() {
        return ctx.buscarBoletoGanador();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_60_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ConsultaComponent_option_63_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_64_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ConsultaComponent_app_loader_66_Template, 1, 1, "app-loader", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ConsultaComponent_app_error_67_Template, 1, 1, "app-error", 21);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.combinacion);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.serie);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoGanador);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoBoletin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent],
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #b51f20;\n  border: 2px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG5cbiVpbnB1dCB7XG4gIHBhZGRpbmc6IDEzcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgY29sb3I6ICM5Nzc0NzQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xufVxuXG4uY29udGFpbmVyX2NvbnN1bHRhIHtcbiAgLmN1ZXJwb19ib2xldGluIHtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgIH1cblxuICAgIC5leHBsaWNhY2lvbiB7XG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XG4gICAgICAgIC5pY29ubyB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uc3VsdGFfYm9sZXRvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgIH1cbiAgICAgIC5mb3JtdWxhcmlvIHtcbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAuaW5wdXRfY29udGVudCB7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBpZV9ib2xldGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 1626:
/*!*************************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/sorteo/sorteo.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorteoComponent": () => (/* binding */ SorteoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SorteoComponent {
    constructor() { }
    ngOnInit() {
    }
}
SorteoComponent.ɵfac = function SorteoComponent_Factory(t) { return new (t || SorteoComponent)(); };
SorteoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SorteoComponent, selectors: [["millonaria-sorteo"]], decls: 2, vars: 0, template: function SorteoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sorteo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0ZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3170:
/*!*******************************************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/ticket-consulta/ticket-consulta.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketConsultaComponent": () => (/* binding */ TicketConsultaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function TicketConsultaComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ticket.sorteo.fecha);
} }
function TicketConsultaComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](number_r3);
} }
function TicketConsultaComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](number_r4);
} }
class TicketConsultaComponent {
    constructor() { }
    ngOnInit() {
        this.ticketNumbers = this.ticket.ticketNumbers;
        this.serieNumbers = this.ticket.serieNumbers;
        this.sorteo = this.ticket.numeroSorteo;
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["millonaria-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 21, vars: 4, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketConsultaComponent_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PRIMERA SUERTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Entero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TicketConsultaComponent_p_15_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Serie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TicketConsultaComponent_p_20_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sorteo N\u00B0 ", ctx.ticket.numeroSorteo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.sorteo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serieNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  text-align: center;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  border: 4px solid #b51f20;\n  border-radius: 150px;\n  padding: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-weight: bold;\n  font-size: 22px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQU5GO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFZTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVZSO0FBY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWNNO0VBQ0UsWUFBQTtBQVpSO0FBY007RUFDRSwrQkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBWlI7QUFlTTtFQUNFLFdBQUE7RUFDQSxtQ0FsRFc7RUFtRFgsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFiUjtBQWtCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBa0JNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQWxFTztFQW1FUCwrQkF4RVE7RUF5RVIsZ0JBQUE7QUFoQlI7QUFtQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0EzRU87RUE0RVAsbUNBaEZXO0FBK0RuQjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBeEZhO0FBcUVuQjtBQXFCTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBbkJSO0FBcUJRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFwQlY7QUF1QlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXJCVjtBQXVCVTtFQUNFLGNBQUE7RUFJQSxzQkFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQTlITztFQStIUCxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBMUJaO0FBK0JNO0VBQ0Usa0JBQUE7QUE3QlI7QUErQlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUE3QlY7QUFnQ1E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUE5QlY7QUFnQ1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBMUpPO0VBMkpQLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBOUJaIiwiZmlsZSI6InRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICNiNTFmMjA7XG5cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG8ge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2xvZ28ge1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fYmFycmEge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC50aWNrZXRfdGl0dWxvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlja2V0X21vbnRvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1ib3R0b247XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICB9XG5cbiAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRfZW50ZXJvX2ZyYWNjaW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuXG4gICAgICAudGlja2V0X2VudGVybyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIC8qIEVsbGlwc2UgMSAqL1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9568:
/*!***************************************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/ticket-ventas/ticket-ventas.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketVentasComponent": () => (/* binding */ TicketVentasComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);





function TicketVentasComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const number_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](number_r1);
  }
}

class TicketVentasComponent {
  constructor() {
    this.deleteTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.deleteFraccion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.ticketIndex = _this.ticket.combinacion1;
      _this.serie = _this.ticket.combinacion2;
      _this.fraccion = _this.ticket.seleccionados;
      _this.ticketNumbers = _this.ticket.display;
      _this.sorteoNumber = _this.sorteo.sorteo;
      _this.date = _this.sorteo.fecha;
    })();
  }

  deleteBoleto() {
    this.deleteTicket.emit();
  }

}

TicketVentasComponent.ɵfac = function TicketVentasComponent_Factory(t) {
  return new (t || TicketVentasComponent)();
};

TicketVentasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TicketVentasComponent,
  selectors: [["millonaria-ticket-ventas"]],
  inputs: {
    ticket: "ticket",
    sorteo: "sorteo"
  },
  outputs: {
    deleteTicket: "deleteTicket",
    deleteFraccion: "deleteFraccion"
  },
  decls: 28,
  vars: 5,
  consts: [[1, "contenedor_informacion_ticket"], [1, "fractionsBox"], ["class", "fraccion", 4, "ngFor", "ngForOf"], ["src", "assets/trash.svg", "alt", "", 1, "trash", 3, "click"], ["src", "assets/img/la-millonaria-sombra-2.png", "alt", "", 1, "logoTicket"], [1, "fraccion"]],
  template: function TicketVentasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Juego: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "La Millonaria");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sorteo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Fecha: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Combinaci\u00F3n: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Serie: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Fracciones:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TicketVentasComponent_p_25_Template, 2, 1, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketVentasComponent_Template_img_click_26_listener() {
        return ctx.deleteBoleto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sorteoNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ticket.combinacion1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ticket.combinacion2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fraccion);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n  background-color: #b51f20;\n  box-sizing: border-box;\n  position: relative;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Monstserrat SemiBold\";\n  margin: 2px;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  width: 35px;\n  height: 35px;\n  font-weight: bold;\n  background-color: transparent;\n  border: 4.5px solid white;\n  border-radius: 150px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  top: 20px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40%;\n  top: 130px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 100px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    top: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBWmE7RUFhYix5QkFiYTtFQWNiLHNCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQU9FO0VBQ0Usa0NBcEJhO0VBcUJiLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxKO0FBTUk7RUFDRSxtQ0ExQmE7QUFzQm5CO0FBT0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBTUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQXRDYTtFQXVDYixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFKTjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpR0FBQTtFQUVBLFdBQUE7RUFDQSwyQkFBQTtBQU5KO0FBUUU7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFOSjtBQVVBO0VBRUk7SUFDRSxlQUFBO0VBUko7RUFVRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBUko7QUFDRjtBQVdBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBVko7QUFDRiIsImZpbGUiOiJ0aWNrZXQtdmVudGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuJGNvbG9yLWJvdHRvbjogI2I1MWYyMDtcblxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwIHtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgfVxuICB9XG4gIC5mcmFjdGlvbnNCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5mcmFjY2lvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDQuNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgfVxuICB9XG4gIGltZy50cmFzaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNiU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpXG4gICAgICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgfVxuICBpbWcudHJhc2g6aG92ZXIge1xuICAgIHdpZHRoOiA4JTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gIH1cbiAgaW1nLmxvZ29UaWNrZXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRvcDogMTMwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaW1nLmxvZ29UaWNrZXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgdG9wOiAxMDBweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgIGltZy5sb2dvVGlja2V0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIHRvcDogMTIwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 4710:
/*!*********************************************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimoResultadoComponent": () => (/* binding */ UltimoResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ticket-consulta/ticket-consulta.component */ 3170);



class UltimoResultadoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        let data = JSON.parse(localStorage.getItem("laMillonariaUltimoResultado"));
        this.ticketNumbers = data.ultimoResultadoMillonaria.combinacion1.split("");
        this.serieNumbers = data.ultimoResultadoMillonaria.combinacion2.split("");
        this.ticketGanador = {
            ticketIndex: data.ultimoResultadoMillonaria.codigo,
            description: "Boleto Ganador",
            ticketNumbers: this.ticketNumbers,
            serieNumbers: this.serieNumbers,
            numeroSorteo: data.numeroSorteo,
            sorteo: data.sorteo
        };
    }
    verUltimoBoletin() {
        let sorteo = this.ticketGanador.numeroSorteo;
        this.router.navigateByUrl(`/consultas/millonaria/boletin/${sorteo}`);
    }
    verResultados() {
        this.router.navigateByUrl(`/consultas/millonaria`);
    }
}
UltimoResultadoComponent.ɵfac = function UltimoResultadoComponent_Factory(t) { return new (t || UltimoResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["millonaria-ultimo-resultado"]], decls: 12, vars: 1, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "../../../../assets/img/millonaria-consulta.png", "alt", ""], ["size", "2px"], [1, "scroll"], [3, "ticket"], [1, "boton_comprar"], [3, "click"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "millonaria-ticket-consulta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_8_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_10_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "BUSCAR OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ctx.ticketGanador);
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%] {\n  \n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 30px;\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: repeat(6, auto);\n  text-align: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxnQkFBQTtFQUNGOzs7Ozs7Ozs7OztJQUFBO0FBS0E7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFMSjtBQU9JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFMTjtBQU9JO0VBQ0UsU0FBQTtFQUNBLCtCQXBDVTtFQXFDVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTE47QUFTRTtFQUNFLFVBQUE7RUFDQSxxQkF4Q1U7QUFpQ2Q7QUFVRTtFQUNFLGNBQUE7RUFVQTs7O1NBQUE7QUFkSjtBQU1JO0VBQ0Usd0JBQUE7QUFKTjtBQU9JO0VBQ0UsV0FBQTtBQUxOO0FBYUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFYTjtBQWNJO0VBQ0UsbUJBQUE7QUFaTjtBQWVJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBYk47QUFlTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFiUjtBQWVRO0VBQ0Usa0JBQUE7QUFiVjtBQWVVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFiWjtBQWlCUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZlY7QUFpQlU7RUFDRSxtQ0F0R087RUF1R1AsZUFBQTtBQWZaO0FBb0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFuQlI7QUFxQlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBbkJWO0FBcUJVO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQTlISTtFQStISixlQUFBO0FBbkJaO0FBc0JVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBaklFO0VBa0lGLCtCQXZJSTtBQW1IaEI7QUF3QlE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBaEpTO0FBMEhuQjtBQXdCVTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUF0Qlo7QUF5QlU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FBeEJaO0FBMEJZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBeEJkO0FBMkJZO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQXpCZDtBQStCTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTdCUjtBQStCUTtFQUNFLFdBQUE7QUE3QlY7QUFtQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQ0o7QUFtQ0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFqTVE7RUFrTVIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBdk1XO0VBd01YLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBakNOO0FBbUNNO0VBQ0Usc0JBQUE7RUFDQSxjQTdNTTtBQTRLZDtBQXNDRTtFQUNFLFlBQUE7RUFDQSwrQkF6Tlk7RUEwTlosZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FBckNKO0FBd0NFO0VBQ0Usa0JBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBdk9VO0VBd09WLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF0Q047QUF5Q0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXZDTjtBQXlDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FyUFc7RUFzUFgsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXZDUjtBQTRDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQTVDSjtBQThDSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNUNOIiwiZmlsZSI6InVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG5cbi5jb250ZW5lZG9yX3RpY2tldCB7XG4gIC8qIHdpZHRoOiAzNCU7ICovXG4vKiAgIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG5cbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAqL1xuICAubG9nb190aWNrZXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMDtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGhyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICB9XG5cbiAgLnNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgfVxuXG4gICAgLyogJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmluY3JlbWVudCxcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9ICovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgIC5jb250ZW5lZG9yX3RpdHVsbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDlweDtcblxuICAgICAgICAuY29udGVuZWRvcl9sb2dvIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW5lZG9yX2luZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogYXV0byAxMHB4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbmVkb3JfbW9udG9fcHJlbWlvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5tb250b19zb3J0ZW8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcblxuICAgICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAkY29sb3ItbG90dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IGxlZnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG5cbiAgICAgICAgICAubnVtZXJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVuZWRvcl9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG5cbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnVtZXJvcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbmVkb3JfY29kaWdvX2JhcnJhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvdG9uX2NvbXByYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvOztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dG8ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcblxuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC50aWNrZXRfZW50ZXJvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG5cbiAgICBoNSB7XG4gICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgIHAge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dG9fcHJlbWlvcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4471:
/*!***********************************************************************!*\
  !*** ./src/app/juegos/millonaria/components/venta/venta.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaComponent": () => (/* binding */ VentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class VentaComponent {
    constructor() { }
    ngOnInit() {
    }
}
VentaComponent.ɵfac = function VentaComponent_Factory(t) { return new (t || VentaComponent)(); };
VentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["millonaria-venta"]], decls: 2, vars: 0, template: function VentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4181:
/*!********************************************************!*\
  !*** ./src/app/juegos/millonaria/millonaria.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MillonariaModule": () => (/* binding */ MillonariaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consulta/consulta.component */ 2705);
/* harmony import */ var _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/venta/venta.component */ 4471);
/* harmony import */ var _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sorteo/sorteo.component */ 1626);
/* harmony import */ var _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/boletin/boletin.component */ 7110);
/* harmony import */ var _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ultimo-resultado/ultimo-resultado.component */ 4710);
/* harmony import */ var _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ticket-consulta/ticket-consulta.component */ 3170);
/* harmony import */ var _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-ventas/ticket-ventas.component */ 9568);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class MillonariaModule {
}
MillonariaModule.ɵfac = function MillonariaModule_Factory(t) { return new (t || MillonariaModule)(); };
MillonariaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MillonariaModule });
MillonariaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MillonariaModule, { declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_1__.VentaComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__.SorteoComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_3__.BoletinComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule], exports: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_1__.VentaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_3__.BoletinComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent] }); })();


/***/ }),

/***/ 2054:
/*!****************************************************************!*\
  !*** ./src/app/juegos/millonaria/services/consulta.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaService": () => (/* binding */ ConsultaService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ConsultaService {
  constructor(http) {
    this.http = http;
    this.today = new Date();
    this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.source;
  }

  recuperarSorteosJugados() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json'); //let endpoint = "/inquiry";

      let endpoint = '/cache';
      var address = '/millonaria';
      endpoint = `${endpoint}/sorteosJugados`;
      console.log('Recuperando sorteos de pozo millonario');
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(address, {
          headers: headers
        }).subscribe(data => {
          let sorteosJugados = data.values;
          console.log(sorteosJugados);
          sorteosJugados.sort(_this.ordenaSorteos);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  ordenaSorteos(a, b) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo, combinaciones) {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let endpoint = '';
      let address = '/millonaria';
      endpoint = `${endpoint}/ganador`;
      address = _this2.mySource + address + endpoint;
      let body = {
        sorteo,
        combinaciones
      };
      return new Promise((resolve, reject) => {
        _this2.http.post(address, body, {
          headers: headers
        }).subscribe(data => {
          let boletoGanador = data;
          console.log(boletoGanador);
          resolve(boletoGanador);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  getUltimoResultado() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let address = '/millonaria';
      let endpoint = '/cache/ultimoResultado';
      let auxAddress = _this3.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this3.http.get(auxAddress, {
          headers: headers
        }).subscribe(data => {
          let response;
          let laMillonaria = data;
          localStorage.setItem('laMillonariaUltimoResultado', JSON.stringify(laMillonaria));
          response = {
            tipo: 'laMillonaria',
            data: laMillonaria
          };
          resolve(response);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  obtenerBoletin(sorteo) {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let sourceBoletines = `${_this4.mySource}/uploads/boletines/`;
      return new Promise((resolve, reject) => {
        let boletinAddress = `${sourceBoletines}T14${sorteo}.jpg`;
        resolve(boletinAddress);
      });
    })();
  }

}

ConsultaService.ɵfac = function ConsultaService_Factory(t) {
  return new (t || ConsultaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

ConsultaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConsultaService,
  factory: ConsultaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9022:
/*!*********************************************************************!*\
  !*** ./src/app/juegos/pozo/components/boletin/boletin.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletinComponent": () => (/* binding */ BoletinComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 9398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);







function BoletinComponent_div_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function BoletinComponent_div_3_img_1_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r4.handleImgError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.boletinImagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function BoletinComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Parece que aun no se ha cargado el bolet\u00EDn de este sorteo. Mientras el equipo de Loter\u00EDa Nacional se encarga de esto, pas\u00E9ate por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "nuestros juegos online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " y disfruta de todos los juegos que tenemos para ti.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BoletinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoletinComponent_div_3_img_1_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoletinComponent_div_3_div_2_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.imgNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.imgNotFound);
  }
}

function BoletinComponent_app_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 9);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

class BoletinComponent {
  constructor(actRoute, router, consulta) {
    this.actRoute = actRoute;
    this.router = router;
    this.consulta = consulta;
    this.imgNotFound = false;
    this.showBox = false;
    this.isLoading = false;
    this.loadingMessage = 'Buscando el boletin';
    this.actRoute.params.subscribe(params => {
      this.sorteo = params['sorteo'];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      /* console.log("En la consulta de loteria"); */
      _this.triggerLoader();

      _this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      _this.boletinImagen = yield _this.consulta.obtenerBoletin(_this.sorteo);
      _this.showBox = true;

      _this.dismissLoader();
    })();
  }

  handleImgError() {
    console.log('Img not found');
    this.imgNotFound = true;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

}

BoletinComponent.ɵfac = function BoletinComponent_Factory(t) {
  return new (t || BoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService));
};

BoletinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BoletinComponent,
  selectors: [["pozo-boletin"]],
  decls: 5,
  vars: 2,
  consts: [[1, "boletin_oficial"], ["class", "container_boletin", 4, "ngIf"], ["loader", "pozo", 3, "message", 4, "ngIf"], [1, "container_boletin"], ["alt", "Imagen del boletin de pozo millonario", 3, "src", "error", 4, "ngIf"], ["class", "boletinNotFound", 4, "ngIf"], ["alt", "Imagen del boletin de pozo millonario", 3, "src", "error"], [1, "boletinNotFound"], ["href", "https://www.loteria.com.ec/casino", "target", "_parent"], ["loader", "pozo", 3, "message"]],
  template: function BoletinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bolet\u00EDn Oficial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BoletinComponent_div_3_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoletinComponent_app_loader_4_Template, 1, 1, "app-loader", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhTO0FBSGIiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1wb3pvOiAjMDRiODY1O1xuLmJvbGV0aW5fb2ZpY2lhbCB7XG4gIGgxIHtcbiAgICBjb2xvcjogJGNvbG9yLXBvem87XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 126:
/*!***********************************************************************!*\
  !*** ./src/app/juegos/pozo/components/consulta/consulta.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaComponent": () => (/* binding */ ConsultaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 9398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r5.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r5.sorteo, " - ", option_r5.fecha, " ");
  }
}

function ConsultaComponent_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r6.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r6.sorteo, " - ", option_r6.fecha, " ");
  }
}

function ConsultaComponent_option_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r7.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" N\u00B0 ", option_r7.sorteo, " - ", option_r7.fecha, " ");
  }
}

function ConsultaComponent_app_loader_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 25);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r3.loadingMessage);
  }
}

function ConsultaComponent_app_error_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeError", function ConsultaComponent_app_error_93_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("msg", ctx_r4.errorMessage);
  }
}

class ConsultaComponent {
  constructor(router, consulta, changeDetectorRef) {
    this.router = router;
    this.consulta = consulta;
    this.changeDetectorRef = changeDetectorRef;
    this.boletoFinal = '';
    this.sorteoRango = '';
    this.combinacionesAux = '';
    this.maxDigits = 7;
    this.numbers = [];
    this.previousLength = 0;
    this.cameFromBackspace = false;
    this.resultados = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isLoading = false;
    this.loadingMessage = 'Consultando los resultados';
    this.isError = false;
    this.errorMessage = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log('En la consulta de loteria');
      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();
    })();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.sorteoGanador = 'default';
    this.sorteoBoletin = 'default';
    this.sorteoRango = 'default';
    this.changeDetectorRef.markForCheck();
  }

  validateField() {
    this.changeDetectorRef.detectChanges();
    this.validate();
    this.changeDetectorRef.markForCheck();
  }

  validate() {
    let reg = /[^0-9]/g;
    let currentLength = this.combinacionesAux.length;
    let addComma = false;

    if (this.previousLength > currentLength) {
      if (this.combinacionesAux[currentLength - 1] == ',') {
        this.combinacionesAux = this.combinacionesAux.slice(0, -1);
        this.cameFromBackspace = true;
      }
    } else {
      this.numbers = this.combinacionesAux.split(', ');

      if (this.cameFromBackspace) {
        let lastNumber = this.numbers[this.numbers.length - 1];
        let auxLength = lastNumber.length;
        let number = lastNumber[auxLength - 1];
        this.numbers[this.numbers.length - 1] = lastNumber.slice(0, -1);
        this.numbers.push(number);
        this.cameFromBackspace = false;
      }

      this.combinacionesAux = '';
      let numbersLength = this.numbers.length;
      let lastNumberAux = this.numbers[numbersLength - 1];
      lastNumberAux = lastNumberAux.replace(reg, '');

      if (lastNumberAux.length == this.maxDigits + 1) {
        let lastNumber = lastNumberAux[this.maxDigits];
        let beforeLastNumber = lastNumberAux.slice(0, -1);
        this.numbers.pop();
        this.numbers.push(beforeLastNumber);
        this.numbers.push(lastNumber);
      }

      numbersLength = this.numbers.length;
      this.numbers.forEach((number, index) => {
        number = number.replace(reg, '');
        this.combinacionesAux = `${this.combinacionesAux}${number}`;

        if (number.length == this.maxDigits && index != numbersLength - 1) {
          this.combinacionesAux = `${this.combinacionesAux}, `;
        }
      });
    }

    this.previousLength = this.combinacionesAux.length;
  }

  triggerLoader() {
    this.isLoading = true;
  }

  dismissLoader() {
    this.isLoading = false;
  }

  preventArrow(e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }

  moveCursorToEnd(e) {
    this.changeDetectorRef.detectChanges();
    let el = e.target;

    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }

    this.changeDetectorRef.markForCheck();
  }

  buscarBoletoGanador() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.triggerLoader();

        if (!_this2.combinacionesAux.length) throw new Error('Por favor, escribe al menos una combinación que quieras consultar');
        let aux = _this2.combinacionesAux;

        if (_this2.combinacionesAux[_this2.combinacionesAux.length - 1] == ' ') {
          aux = _this2.combinacionesAux.slice(0, -2);
        }

        let combinaciones = aux.split(', ');
        combinaciones = combinaciones.map((combinacion, index) => {
          let auxLength = combinacion.length;

          if (auxLength != 0) {
            if (auxLength < _this2.maxDigits) {
              let auxAdd = _this2.maxDigits - auxLength;

              for (let i = 1; i <= auxAdd; i++) {
                combinacion = `0${combinacion}`;
              }
            }

            return combinacion;
          }
        });

        if (_this2.sorteoGanador == 'default') {
          _this2.dismissLoader();

          _this2.openError('Por favor, selecciona un sorteo');

          return;
        }

        let data = yield _this2.consulta.recuperarBoletoGanador(_this2.sorteoGanador, combinaciones);
        console.log(data);

        _this2.resultados.emit(data);

        _this2.dismissLoader();
      } catch (e) {
        _this2.dismissLoader();

        _this2.openError(e.message);

        console.log(e);
      }
    })();
  }

  buscarBoletin() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sorteoBoletin == 'default') {
        _this3.openError('Por favor, selecciona un sorteo');

        return;
      }

      _this3.router.navigateByUrl(`/resultados/pozo_millonario_boletin/${_this3.sorteoBoletin}`);
    })();
  }

  buscarRango() {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this4.triggerLoader();

        console.log('Buscando por rango');

        if (_this4.sorteoRango == 'default') {
          _this4.dismissLoader();

          _this4.openError('Por favor, selecciona un sorteo');

          return;
        }

        if (!(_this4.boletoInicial && _this4.boletoInicial.length)) throw new Error('Por favor, escribe el número inicial del rango');
        if (!(_this4.boletoFinal && _this4.boletoFinal.length)) throw new Error('Por favor, escribe el número final del rango');
        let data = yield _this4.consulta.recuperarBoletoGanadorPorPlancha(_this4.boletoInicial, _this4.boletoFinal, _this4.sorteoRango);

        _this4.resultados.emit(data);

        _this4.dismissLoader(); //this.router.navigateByUrl(`/pozo_millonario_boletin/${this.sorteoBoletin}`);

      } catch (e) {
        _this4.dismissLoader();

        _this4.openError(e.message);

        console.log(e);
      }
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

}

ConsultaComponent.ɵfac = function ConsultaComponent_Factory(t) {
  return new (t || ConsultaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

ConsultaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConsultaComponent,
  selectors: [["pozo-consulta"]],
  outputs: {
    resultados: "resultados"
  },
  decls: 94,
  vars: 11,
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], [1, "consulta_boleto", "espacio"], ["name", "boletoInicial", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "boletoFinal", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "sorteoRango", "id", "sorteoRango", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "pozo", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "pozo", 3, "message"], [3, "msg", "closeError"]],
  template: function ConsultaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Consultas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ingresa los 7 d\u00EDgitos del N\u00B0 Cart\u00F3n.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Luego elige la fecha del sorteo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Si compraste por plancha, ingresa los 8 numeros seguidos del rango secuencial. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Los boletos a consultar deben corresponder a la misma fecha y puedes revisar de los ultimos 3 meses. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Consulta por Boleto y Sorteo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Ingresa numero(s) de boleto(s):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function ConsultaComponent_Template_input_keydown_35_listener($event) {
        return ctx.preventArrow($event);
      })("click", function ConsultaComponent_Template_input_click_35_listener($event) {
        return ctx.moveCursorToEnd($event);
      })("focus", function ConsultaComponent_Template_input_focus_35_listener($event) {
        return ctx.moveCursorToEnd($event);
      })("input", function ConsultaComponent_Template_input_input_35_listener() {
        return ctx.validateField();
      })("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.combinacionesAux = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Ingresa todos los 7 digitos del N\u00B0 Carton, incluyendo ceros (0) de la izquierda, ejemplo: 0037946. Puedes ingresar varios cartones a la vez, separados por coma. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_42_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ConsultaComponent_option_45_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_46_listener() {
        return ctx.buscarBoletoGanador();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_58_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, ConsultaComponent_option_61_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_62_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Consulta por Rango (Plancha)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Desde:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_74_listener($event) {
        return ctx.boletoInicial = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Hasta:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_80_listener($event) {
        return ctx.boletoFinal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_86_listener($event) {
        return ctx.sorteoRango = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, ConsultaComponent_option_89_Template, 2, 3, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_90_listener() {
        return ctx.buscarRango();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, ConsultaComponent_app_loader_92_Template, 1, 1, "app-loader", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, ConsultaComponent_app_error_93_Template, 1, 1, "app-error", 23);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.combinacionesAux);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoGanador);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoBoletin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.boletoInicial);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.boletoFinal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.sorteoRango);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent],
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #04b865;\n  border: 2px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVBGOztBQThCSTtFQUNFLGNBakNPO0FBTWI7O0FBZ0NRO0VBQ0UsY0F2Q0c7RUF3Q0gseUJBQUE7QUE5QlY7O0FBb0NNO0VBQ0UsY0EvQ0s7QUFhYjs7QUF1Q1k7RUFDRSxpQkFBQTtBQXJDZDs7QUFrRFU7RUFDRSxnQkFBQTtFQUVBLHlCQXJFQztFQXNFRCx5QkFBQTtBQWpEWjs7QUFrRFk7RUFDRSxjQXhFRDtBQXdCYjs7QUFvRFE7RUFDRSx5QkE3RUc7RUE4RUgseUJBQUE7QUFsRFY7O0FBb0RVO0VBQ0UsY0FqRkM7QUErQmI7O0FBeURFO0VBQ0UseUJBekZTO0FBa0NiIiwiZmlsZSI6ImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuJGNvbG9yLXBvem86ICMwNGI4NjU7XG4vLyRjb2xvci1wb3pvOiAjMDU3MzMzO1xuXG4laW5wdXQge1xuICBwYWRkaW5nOiAxM3B4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGNvbG9yOiAjOTc3NDc0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRjb2xvci1wb3pvO1xufVxuXG4lYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wb3pvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLy9jb2xvcjogJGNvbG9yLXBvem87XG4gICAgY29sb3I6ICMxODZiNzY7XG4gIH1cbn1cblxuLmNvbnRhaW5lcl9jb25zdWx0YSB7XG4gIC5jdWVycG9fYm9sZXRpbiB7XG4gICAgaDEge1xuICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgIH1cblxuICAgIC5leHBsaWNhY2lvbiB7XG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XG4gICAgICAgIC5pY29ubyB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1wb3pvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnN1bHRhX2JvbGV0byB7XG4gICAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcbiAgICAgIH1cbiAgICAgIC5mb3JtdWxhcmlvIHtcbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAuaW5wdXRfY29udGVudCB7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wb3pvO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXBvem87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBpZV9ib2xldGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 6754:
/*!*******************************************************************!*\
  !*** ./src/app/juegos/pozo/components/sorteo/sorteo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorteoComponent": () => (/* binding */ SorteoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SorteoComponent {
    constructor() { }
    ngOnInit() {
    }
}
SorteoComponent.ɵfac = function SorteoComponent_Factory(t) { return new (t || SorteoComponent)(); };
SorteoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SorteoComponent, selectors: [["pozo-sorteo"]], decls: 2, vars: 0, template: function SorteoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sorteo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0ZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7255:
/*!*************************************************************************************!*\
  !*** ./src/app/juegos/pozo/components/ticket-consulta/ticket-consulta.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketConsultaComponent": () => (/* binding */ TicketConsultaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function TicketConsultaComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ticket.sorteo.fecha);
} }
function TicketConsultaComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](number_r2);
} }
class TicketConsultaComponent {
    constructor() { }
    ngOnInit() {
        this.description = this.ticket.description;
        this.ticketNumbers = this.ticket.ticketNumbers;
        this.numeroSorteo = this.ticket.numeroSorteo;
        this.sorteo = this.ticket.sorteo;
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["pozo-ticket-consulta"]], inputs: { ticket: "ticket", mascotaPath: "mascotaPath", mascota: "mascota" }, decls: 16, vars: 5, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"], [1, "texto_premios"], [3, "src", "alt"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketConsultaComponent_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "N\u00DAMEROS GANADORES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TicketConsultaComponent_p_13_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sorteo N\u00B0 ", ctx.ticket.numeroSorteo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.sorteo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mascotaPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.mascota);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["@charset \"UTF-8\";\n.contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  \n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  text-align: center;\n  -webkit-text-stroke: 2px #04b865;\n  color: #04b865;\n  font-family: \"Monstserrat Bold\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #04b865;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #04b865;\n  border-radius: 150px;\n  padding: 20px;\n  font-weight: bold;\n  font-size: 22px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFRaEI7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQU5KO0FBWU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFWUjtBQWNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFaSjtBQWNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWk47QUFjTTtFQUNFLFlBQUE7QUFaUjtBQWNNO0VBQ0UsK0JBN0NRO0VBOENSLGVBQUE7RUFDQSxpQkFBQTtBQVpSO0FBZU07RUFDRSxXQUFBO0VBQ0EsbUNBbkRXO0VBb0RYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFkUjtBQWtCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBa0JNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQXBFSztFQXFFTCwrQkExRVE7RUEyRVIsZ0JBQUE7QUFoQlI7QUFtQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0E3RUs7RUE4RUwsbUNBbEZXO0FBaUVuQjtBQXFCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQXpGYTtBQXNFbkI7QUFvQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFsQlI7QUFtQlE7RUFDRSxXQUFBO0FBakJWO0FBb0JNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBbEJSO0FBb0JRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFsQlY7QUFxQlE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFuQlY7QUFxQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBdkhPO0VBd0hQLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW5CWjtBQXdCTTtFQUNFLGtCQUFBO0FBdEJSO0FBd0JRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBdEJWO0FBeUJRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBdkJWO0FBeUJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQXRKTztFQXVKUCxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZCWiIsImZpbGUiOiJ0aWNrZXQtY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItcG96bzogIzA0Yjg2NTtcbi8vJGNvbG9yLXBvem86ICMwNTczMzM7XG5cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG8ge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2xvZ28ge1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fYmFycmEge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC50aWNrZXRfdGl0dWxvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8qIFNvcnRlbyBOwrAgNjY5NyAwMy8wMS8yMDIyIDIxOjAwOjAwICovXG5cbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlja2V0X21vbnRvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1wb3pvO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXBvem87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRfZW50ZXJvX2ZyYWNjaW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAudGV4dG9fcHJlbWlvcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudGlja2V0X2VudGVybyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuICAgICAgICBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpY2tldF9mcmFjY2lvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuICAgICAgICBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1410:
/*!*********************************************************************************!*\
  !*** ./src/app/juegos/pozo/components/ticket-ventas/ticket-ventas.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketVentasComponent": () => (/* binding */ TicketVentasComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/venta.service */ 3630);




class TicketVentasComponent {
  constructor(lotteryService) {
    this.lotteryService = lotteryService;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.ticketIndex = _this.ticket.combinacion1;
      _this.ticketNumbers = _this.ticket.display;
      _this.sorteoNumber = _this.sorteo.sorteo;
      _this.date = _this.sorteo.fecha;
      _this.mascota = _this.lotteryService.obtenerCaracteristicasDeMascota(_this.ticket.mascota);
    })();
  }

  obtenerAnimal(mascota) {
    return this.lotteryService.obtenerMascota(mascota);
  }

  deleteTicket() {
    this.delete.emit();
  }

}

TicketVentasComponent.ɵfac = function TicketVentasComponent_Factory(t) {
  return new (t || TicketVentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_venta_service__WEBPACK_IMPORTED_MODULE_1__.VentaService));
};

TicketVentasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TicketVentasComponent,
  selectors: [["pozo-ticket-ventas"]],
  inputs: {
    ticket: "ticket",
    sorteo: "sorteo"
  },
  outputs: {
    delete: "delete"
  },
  decls: 24,
  vars: 4,
  consts: [[1, "contenedor_informacion_ticket"], [1, "combinacion"], ["src", "assets/trash.svg", "alt", "", 1, "trash", 3, "click"], ["src", "assets/img/pozo-sombra.png", "alt", "", 1, "logoTicket"]],
  template: function TicketVentasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Juego: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Pozo Millonario");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Sorteo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Fecha: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Mascota: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Combinaci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketVentasComponent_Template_img_click_22_listener() {
        return ctx.deleteTicket();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sorteoNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.mascota.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ticketNumbers.join(", "));
    }
  },
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n  background-color: #04b865;\n  box-sizing: border-box;\n  position: relative;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .combinacion[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  top: 20px;\n  right: 20px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  top: 110px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 100px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJXO0VBY1gseUJBZFc7RUFlWCxzQkFBQTtFQUNBLGtCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxtQ0FoQ2U7QUEwQm5CO0FBUUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQU5KO0FBT0k7RUFDRSxtQ0F4Q2E7RUF5Q2IsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBTE47QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlHQUFBO0VBRUEsMkJBQUE7QUFQSjtBQVNFO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBUEo7QUFVQTtFQUVJO0lBQ0UsZUFBQTtFQVJKO0VBVUU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQVJKO0FBQ0Y7QUFXQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBVko7QUFDRiIsImZpbGUiOiJ0aWNrZXQtdmVudGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuJGNvbG9yLXBvem86ICMwNGI4NjU7XG5cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcG96bztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgIH1cbiAgfVxuICAuY29tYmluYWNpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgfVxuICAuZnJhY3Rpb25zQm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuZnJhY2Npb24ge1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTYlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gIH1cbiAgaW1nLnRyYXNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA2JTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDM2MGRlZylcbiAgICAgIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoMTA5JSk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG4gIGltZy50cmFzaDpob3ZlciB7XG4gICAgd2lkdGg6IDglO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgfVxuICBpbWcubG9nb1RpY2tldCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdG9wOiAxMTBweDtcbiAgICByaWdodDogNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaW1nLmxvZ29UaWNrZXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgdG9wOiAxMDBweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgIGltZy5sb2dvVGlja2V0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 3809:
/*!***************************************************************************************!*\
  !*** ./src/app/juegos/pozo/components/ultimo-resultado/ultimo-resultado.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimoResultadoComponent": () => (/* binding */ UltimoResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/consulta.service */ 9398);
/* harmony import */ var _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ticket-consulta/ticket-consulta.component */ 7255);




class UltimoResultadoComponent {
    constructor(router, consulta) {
        this.router = router;
        this.consulta = consulta;
        this.mascota = "01";
    }
    ngOnInit() {
        let data = JSON.parse(localStorage.getItem("pozoMillonarioUltimoResultado"));
        this.ticketNumbers = data.ultimoResultadoPozo.combinacion2.match(/.{1,2}/g);
        this.mascota = data.mascota;
        this.mascotaPath = this.consulta.obtenerMascota(this.mascota);
        this.ticketGanador = {
            ticketIndex: data.ultimoResultadoPozo.codigo,
            description: "Boleto Ganador",
            ticketNumbers: this.ticketNumbers,
            mascota: this.mascota,
            numeroSorteo: data.numeroSorteo,
            codigo: data.ultimoResultadoPozo.codigo,
            sorteo: data.sorteo
        };
    }
    verUltimoBoletin() {
        let sorteo = this.ticketGanador.numeroSorteo;
        this.router.navigateByUrl(`/consultas/pozo/boletin/${sorteo}`);
    }
    verResultados() {
        this.router.navigateByUrl(`/consultas/pozo`);
    }
}
UltimoResultadoComponent.ɵfac = function UltimoResultadoComponent_Factory(t) { return new (t || UltimoResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_consulta_service__WEBPACK_IMPORTED_MODULE_0__.ConsultaService)); };
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["pozo-ultimo-resultado"]], decls: 12, vars: 3, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "../../../../assets/img/pozo-sombra.png", "alt", ""], ["size", "2px"], [1, "scroll"], [3, "ticket", "mascotaPath", "mascota"], [1, "boton_comprar"], [3, "click"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "pozo-ticket-consulta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_8_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_10_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "BUSCAR OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ticket", ctx.ticketGanador)("mascotaPath", ctx.mascotaPath)("mascota", ctx.mascota);
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_1__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%] {\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n  visibility: hidden;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #04b865;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  background-color: #c3c3c3;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: space-evenly;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 3px;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  background-color: #fff;\n  color: #444;\n  margin-right: 4px;\n  font-family: \"Monstserrat Regular\";\n  font-size: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 70px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  background-color: #fff;\n  padding: 5px 30px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  width: 25%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 30px;\n  background-color: #04b865;\n  border: 1px solid #04b865;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #04b865;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDQTs7Ozs7Ozs7O3dCQUFBO0FBRUE7QUFRRTtFQUNFLFlBQUE7RUFDQSwrQkFyQlk7RUFzQlosZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FBUEo7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFQSjtBQVNJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFQTjtBQVNJO0VBQ0UsU0FBQTtFQUNBLCtCQTNDVTtFQTRDVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQWhEUztBQXVDYjtBQVlFO0VBQ0UsY0FBQTtFQVVBOzs7U0FBQTtBQWhCSjtBQVFJO0VBQ0Usd0JBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBZUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZk47QUFpQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFmUjtBQWlCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFmVjtBQWlCVTtFQUNFLG1DQXJHTztFQXNHUCxlQUFBO0VBQ0Esa0JBQUE7QUFmWjtBQWtCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBaEJaO0FBa0JZO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBMUhHO0VBMkhILGVBQUE7QUFoQmQ7QUFxQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFuQlY7QUFxQlU7RUFDRSxrQkFBQTtBQW5CWjtBQXFCWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBbkJkO0FBdUJVO0VBQ0UsYUFBQTtBQXJCWjtBQXVCWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQXJCZDtBQXVCYztFQUNFLFdBQUE7RUFDQSxZQUFBO0FBckJoQjtBQTRCTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBMUJSO0FBNEJRO0VBQ0UsV0FBQTtBQTFCVjtBQWdDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTlCSjtBQWdDSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUdBLHlCQXJMTztFQXVMUCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0E1TFc7RUE2TFgsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFqQ047QUFtQ007RUFDRSxzQkFBQTtFQUVBLGNBbk1LO0FBaUtiIiwiZmlsZSI6InVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItcG96bzogIzA0Yjg2NTtcbi8vJGNvbG9yLXBvem86ICMwNTczMzM7XG5cbi5jb250ZW5lZG9yX3RpY2tldCB7XG4vKiAgIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87ICovXG4gIC50ZXh0byB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5sb2dvX3RpY2tldCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAwO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgaHIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcG96bztcbiAgfVxuXG4gIC5zY3JvbGwge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgIH1cblxuICAgIC8qICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfSAqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLmFycmliYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2MzO1xuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hYmFqbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAuY29udGVuZWRvcl9sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVuZWRvcl9pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIC5jb250ZW5pZG8ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVuZWRvcl9jb2RpZ29fYmFycmEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMjUlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm90b25fY29tcHJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG5cbiAgICAgIC8vICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wb3pvO1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAvL2NvbG9yOiAkY29sb3ItcG96bztcbiAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 7083:
/*!*****************************************************************!*\
  !*** ./src/app/juegos/pozo/components/venta/venta.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaComponent": () => (/* binding */ VentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class VentaComponent {
    constructor() { }
    ngOnInit() {
    }
}
VentaComponent.ɵfac = function VentaComponent_Factory(t) { return new (t || VentaComponent)(); };
VentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["pozo-venta"]], decls: 2, vars: 0, template: function VentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 458:
/*!********************************************!*\
  !*** ./src/app/juegos/pozo/pozo.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PozoModule": () => (/* binding */ PozoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consulta/consulta.component */ 126);
/* harmony import */ var _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/boletin/boletin.component */ 9022);
/* harmony import */ var _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sorteo/sorteo.component */ 6754);
/* harmony import */ var _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/venta/venta.component */ 7083);
/* harmony import */ var _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ultimo-resultado/ultimo-resultado.component */ 3809);
/* harmony import */ var _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ticket-consulta/ticket-consulta.component */ 7255);
/* harmony import */ var _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-ventas/ticket-ventas.component */ 1410);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class PozoModule {
}
PozoModule.ɵfac = function PozoModule_Factory(t) { return new (t || PozoModule)(); };
PozoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PozoModule });
PozoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PozoModule, { declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__.BoletinComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__.VentaComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule], exports: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
        _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__.SorteoComponent,
        _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__.VentaComponent,
        _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__.BoletinComponent,
        _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent,
        _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__.TicketConsultaComponent,
        _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__.TicketVentasComponent] }); })();


/***/ }),

/***/ 9398:
/*!**********************************************************!*\
  !*** ./src/app/juegos/pozo/services/consulta.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaService": () => (/* binding */ ConsultaService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ConsultaService {
  constructor(http) {
    this.http = http;
    this.today = new Date();
    this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.source;
  }

  recuperarSorteosJugados() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json'); //let endpoint = "/inquiry";

      let endpoint = '/cache';
      var address = '/pozo';
      endpoint = `${endpoint}/sorteosJugados`;
      console.log('Recuperando sorteos de pozo millonario');
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(address, {
          headers: headers
        }).subscribe(data => {
          let sorteosJugados = data.values;
          console.log(sorteosJugados);
          sorteosJugados.sort(_this.ordenaSorteos);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  ordenaSorteos(a, b) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo, combinaciones) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '';
    let address = '/pozo';
    endpoint = `${endpoint}/ganador`;
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      combinaciones
    };
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        let boletoGanador = data;
        console.log(boletoGanador);
        resolve(boletoGanador);
      }, error => {
        reject(new Error(error.error.message));
      });
    });
  }

  recuperarBoletoGanadorPorPlancha(boletoInicial, boletoFinal, sorteo) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/pozo';
    let endpoint = '/plancha';
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      boletoInicial,
      boletoFinal
    };
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        let boletoGanador = data;
        console.log(boletoGanador);
        resolve(boletoGanador);
      });
    });
  }

  getUltimoResultado() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '/cache/ultimoResultado';
    let address = '/pozo';
    let auxAddress = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(auxAddress, {
        headers: headers
      }).subscribe(data => {
        let response;
        let pozoMillonario = data;
        localStorage.setItem('pozoMillonarioUltimoResultado', JSON.stringify(pozoMillonario));
        response = {
          tipo: 'pozoMillonario',
          data: pozoMillonario
        };
        resolve(response);
      }, error => {
        reject(new Error(error.error.message));
      });
    });
  }

  obtenerBoletin(sorteo) {
    let sourceBoletines = `${this.mySource}/uploads/boletines/`;
    return new Promise((resolve, reject) => {
      let boletinAddress = `${sourceBoletines}T5${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }

  obtenerMascota(mascota) {
    let mascotaPath;

    switch (mascota) {
      case '01':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Camaron.png';
        break;

      case '02':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Delfin.png';
        break;

      case '03':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Perro.png';
        break;

      case '04':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Llama.png';
        break;

      case '05':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Papagayo.png';
        break;

      case '06':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Conejo.png';
        break;

      case '07':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Mono.png';
        break;

      case '08':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Galapago.png';
        break;

      case '09':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tucan.png';
        break;

      case '10':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Ballena.png';
        break;

      case '11':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Oso.png';
        break;

      case '12':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Foca.png';
        break;

      case '13':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Cangrejo.png';
        break;

      case '14':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Condor.png';
        break;

      case '15':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Iguana.png';
        break;

      case '16':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Caballo.png';
        break;

      case '17':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Rana.png';
        break;

      case '18':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tiburon.png';
        break;

      case '19':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Caracol.png';
        break;

      case '20':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Oveja.png';
        break;

      case '21':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Gallo.png';
        break;

      case '22':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Abeja.png';
        break;

      case '23':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Mariposa.png';
        break;

      case '24':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Pez.png';
        break;

      case '25':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Pinguino.png';
        break;

      case '26':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png';
        break;

      case '27':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Vaca.png';
        break;

      case '28':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Chanchito.png';
        break;

      case '29':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tigre.png';
        break;

      case '30':
        mascotaPath = 'assets/mascotas/mascotas pozo millonario-Gato.png';
        break;

      default:
        break;
    }

    return mascotaPath;
  }

}

ConsultaService.ɵfac = function ConsultaService_Factory(t) {
  return new (t || ConsultaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

ConsultaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConsultaService,
  factory: ConsultaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3630:
/*!*******************************************************!*\
  !*** ./src/app/juegos/pozo/services/venta.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaService": () => (/* binding */ VentaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class VentaService {
    constructor(http) {
        this.http = http;
        this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.source;
        this.obtenerAnimalesSelecionados();
        this.obtenerAnimalesTabs();
    }
    obtenerSorteo(authData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let endpoint = `/cache/sorteosDisponibles`;
        let address = '/pozo';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http
                .get(address, {
                params: {
                    lotteryToken: authData.lotteryToken,
                    user: authData.user,
                },
                headers: headers,
            })
                .subscribe((data) => {
                let sorteosDisponibles = data;
                sorteosDisponibles.sort(this.ordenaSorteos);
                resolve(sorteosDisponibles);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    ordenaSorteos(a, b) {
        let a1 = a['sorteo'];
        let b1 = b['sorteo'];
        return a1 - b1;
    }
    obtenerTickets(sorteo, combinacion, combinacionFigura, tipoSeleccion, authData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let endpoint = '';
        let body = {
            sorteo,
            lotteryToken: authData.lotteryToken,
            user: authData.user,
            combinacion,
            combinacionFigura,
            tipoSeleccion,
        };
        endpoint = `${endpoint}/combinacionesDisponibles`;
        let address = '/pozo';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http.post(address, body, { headers: headers }).subscribe((data) => {
                let combinacionesDisponibles = data.combinaciones;
                resolve(combinacionesDisponibles);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    obtenerMascota(mascota) {
        let mascotaPath;
        switch (mascota) {
            case '01':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Camaron.png';
                break;
            case '02':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Delfin.png';
                break;
            case '03':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Perro.png';
                break;
            case '04':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Llama.png';
                break;
            case '05':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Papagayo.png';
                break;
            case '06':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Conejo.png';
                break;
            case '07':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Mono.png';
                break;
            case '08':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Galapago.png';
                break;
            case '09':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tucan.png';
                break;
            case '10':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Ballena.png';
                break;
            case '11':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Oso.png';
                break;
            case '12':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Foca.png';
                break;
            case '13':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Cangrejo.png';
                break;
            case '14':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Condor.png';
                break;
            case '15':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Iguana.png';
                break;
            case '16':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Caballo.png';
                break;
            case '17':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Rana.png';
                break;
            case '18':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tiburon.png';
                break;
            case '19':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Caracol.png';
                break;
            case '20':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Oveja.png';
                break;
            case '21':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Gallo.png';
                break;
            case '22':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Abeja.png';
                break;
            case '23':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Mariposa.png';
                break;
            case '24':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Pez.png';
                break;
            case '25':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Pinguino.png';
                break;
            case '26':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png';
                break;
            case '27':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Vaca.png';
                break;
            case '28':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Chanchito.png';
                break;
            case '29':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Tigre.png';
                break;
            case '30':
                mascotaPath = 'assets/mascotas/mascotas pozo millonario-Gato.png';
                break;
            default:
                break;
        }
        return mascotaPath;
    }
    obtenerAnimalesSelecionados() {
        this.animales = [
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Camaron.png',
                identificador: '01',
                nombre: 'Camarón',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Cangrejo.png',
                identificador: '13',
                nombre: 'Cangrejo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Ballena.png',
                identificador: '10',
                nombre: 'Ballena',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Condor.png',
                identificador: '14',
                nombre: 'Cóndor',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Conejo.png',
                identificador: '06',
                nombre: 'Conejo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Delfin.png',
                identificador: '02',
                nombre: 'Delfín',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Foca.png',
                identificador: '12',
                nombre: 'Foca',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Galapago.png',
                identificador: '08',
                nombre: 'Galápago',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Iguana.png',
                identificador: '15',
                nombre: 'Iguana',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Llama.png',
                identificador: '04',
                nombre: 'Llama',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Mono.png',
                identificador: '07',
                nombre: 'Mono',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Oso.png',
                identificador: '11',
                nombre: 'Oso',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Papagayo.png',
                identificador: '05',
                nombre: 'Papagayo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Perro.png',
                identificador: '03',
                nombre: 'Perro',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Tucan.png',
                identificador: '09',
                nombre: 'Tucán',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Caballo.png',
                identificador: '16',
                nombre: 'Caballo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Rana.png',
                identificador: '17',
                nombre: 'Rana',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Tiburon.png',
                identificador: '18',
                nombre: 'Tiburón',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Caracol.png',
                identificador: '19',
                nombre: 'Caracol',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Oveja.png',
                identificador: '20',
                nombre: 'Oveja',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Gallo.png',
                identificador: '21',
                nombre: 'Gallo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Abeja.png',
                identificador: '22',
                nombre: 'Abeja',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Mariposa.png',
                identificador: '23',
                nombre: 'Mariposa',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Pez.png',
                identificador: '24',
                nombre: 'Pez',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Pinguino.png',
                identificador: '25',
                nombre: 'Pingüino',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png',
                identificador: '26',
                nombre: 'Cocodrilo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Vaca.png',
                identificador: '27',
                nombre: 'Vaca',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Chanchito.png',
                identificador: '28',
                nombre: 'Chanchito',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Tigre.png',
                identificador: '29',
                nombre: 'Tigre',
                status: false,
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Gato.png',
                identificador: '30',
                nombre: 'Gato',
                status: false,
            },
        ];
        localStorage.setItem('animalesSeleccionados', JSON.stringify(this.animales));
    }
    obtenerAnimalesTabs() {
        this.animalesTabs = [];
        localStorage.setItem('animalesTabs', JSON.stringify(this.animalesTabs));
    }
    obtenerCaracteristicasDeMascota(mascota) {
        let animales = [
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Camaron.png',
                identificador: '01',
                nombre: 'Camarón',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Cangrejo.png',
                identificador: '13',
                nombre: 'Cangrejo',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Ballena.png',
                identificador: '10',
                nombre: 'Ballena',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Condor.png',
                identificador: '14',
                nombre: 'Cóndor',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Conejo.png',
                identificador: '06',
                nombre: 'Conejo',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Delfin.png',
                identificador: '02',
                nombre: 'Delfín',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Foca.png',
                identificador: '12',
                nombre: 'Foca',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Galapago.png',
                identificador: '08',
                nombre: 'Galápago',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Iguana.png',
                identificador: '15',
                nombre: 'Iguana',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Llama.png',
                identificador: '04',
                nombre: 'Llama',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Mono.png',
                identificador: '07',
                nombre: 'Mono',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Oso.png',
                identificador: '11',
                nombre: 'Oso',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Papagayo.png',
                identificador: '05',
                nombre: 'Papagayo',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Perro.png',
                identificador: '03',
                nombre: 'Perro',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Tucan.png',
                identificador: '09',
                nombre: 'Tucán',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Caballo.png',
                identificador: '16',
                nombre: 'Caballo',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Rana.png',
                identificador: '17',
                nombre: 'Rana',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Tiburon.png',
                identificador: '18',
                nombre: 'Tiburón',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Caracol.png',
                identificador: '19',
                nombre: 'Caracol',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Oveja.png',
                identificador: '20',
                nombre: 'Oveja',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Gallo.png',
                identificador: '21',
                nombre: 'Gallo',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Abeja.png',
                identificador: '22',
                nombre: 'Abeja',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Mariposa.png',
                identificador: '23',
                nombre: 'Mariposa',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Pez.png',
                identificador: '24',
                nombre: 'Pez',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Pinguino.png',
                identificador: '25',
                nombre: 'Pingüino',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Cocodrilo.png',
                identificador: '26',
                nombre: 'Cocodrilo',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Vaca.png',
                identificador: '27',
                nombre: 'Vaca',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Chanchito.png',
                identificador: '28',
                nombre: 'Chanchito',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Tigre.png',
                identificador: '29',
                nombre: 'Tigre',
            },
            {
                ruta: 'assets/mascotas/mascotas pozo millonario-Gato.png',
                identificador: '30',
                nombre: 'Gato',
            },
        ];
        let aux = animales.find((x) => x.identificador === mascota);
        return aux;
    }
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3444:
/*!*********************************************!*\
  !*** ./src/app/shared/autotab.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoTabDirective": () => (/* binding */ AutoTabDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AutoTabDirective {
    onInput(input) {
        const length = input.value.length;
        const maxLength = input.attributes.maxlength.value;
        if (length >= maxLength) {
            this.appAutoTab.focus();
        }
    }
}
AutoTabDirective.ɵfac = function AutoTabDirective_Factory(t) { return new (t || AutoTabDirective)(); };
AutoTabDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoTabDirective, selectors: [["", "appAutoTab", ""]], hostBindings: function AutoTabDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoTabDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
    } }, inputs: { appAutoTab: "appAutoTab" } });


/***/ }),

/***/ 3772:
/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class ErrorComponent {
    constructor() {
        this.msg = "";
        this.title = "ERROR";
        this.closeError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.msg = this.msg.replace(/^\:/, "");
    }
    close() {
        this.closeError.emit("Cerrando error");
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { msg: "msg", title: "title" }, outputs: { closeError: "closeError" }, decls: 12, vars: 2, consts: [[1, "blackBox", 3, "click"], [1, "logBox"], [1, "closeButton"], [1, "closeB", 3, "click"], [1, "errorHeader"], [1, "errorContent"], ["type", "button", 1, "formButton", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_9_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CERRAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
    } }, styles: [".logBox[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 3px;\n  max-height: 80%;\n  z-index: 100000;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  overflow: hidden;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.formButton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 52px;\n  color: white;\n  background-color: red;\n  margin: auto;\n  margin-top: 5px;\n  margin-bottom: 23px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: red;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.formButton[_ngcontent-%COMP%]:hover {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]:active {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-size: 23px;\n  font-weight: bold;\n  width: 100%;\n  text-decoration: none !important;\n}\n\n.formButton[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.closeButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 23px;\n  height: 23px;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  color: white;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: red;\n}\n\n.errorHeader[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 23px;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n  margin: 0;\n  text-align: center;\n}\n\n.errorContent[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n  padding-top: 42px;\n  padding-bottom: 42px;\n  margin: 0;\n  text-align: center;\n}\n\n@media screen and (max-width: 1000px) {\n  .logBox[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFFRTtJQUNFLFVBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ0JveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICAuYmxhY2tCb3gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA4MDAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5mb3JtQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuZm9ybUJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmZvcm1CdXR0b246YWN0aXZlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuZm9ybUJ1dHRvbiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZvcm1CdXR0b246aG92ZXIgcCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLmJ1dHRvbkJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5jbG9zZUJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMjNweDtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gIH1cbiAgXG4gIC5jbG9zZUJ1dHRvbiAuY2xvc2VCIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMjAwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmNsb3NlQnV0dG9uIC5jbG9zZUI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC5lcnJvckhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmVycm9yQ29udGVudCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLXRvcDogNDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cbiAgLmxvZ0JveCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgXG4gIH1cbiAgICBcblxufSJdfQ== */"] });


/***/ }),

/***/ 605:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LoaderComponent {
    constructor() {
        this.message = "";
        this.loader = "";
        this.loaderPath = 'assets/loader.gif';
        this.logoPath = "";
    }
    ngOnInit() {
        switch (this.loader) {
            case 'lotto':
                this.logoPath = 'assets/img/lotto-sombra-2.png';
                //this.logoPath = "assets/lottoLoader.gif";
                break;
            case 'pozo':
                this.logoPath = 'assets/img/pozo-sombra.png';
                //this.logoPath = "assets/pozoLoader.gif";
                break;
            case 'millonaria':
                this.logoPath = 'assets/img/millonaria-consulta.png';
                //this.logoPath = "assets/pozoLoader.gif";
                break;
            default:
                this.logoPath = 'assets/img/loteria-sombra.png';
                //this.logoPath = "assets/loteriaLoader.gif";
                break;
        }
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { message: "message", loader: "loader" }, decls: 7, vars: 3, consts: [[1, "blackBox"], [1, "loadBox"], ["alt", "", 1, "loadLogo", 3, "src"], ["alt", "", 1, "loadIcon", 3, "src"], [1, "loadText"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.loaderPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".loadBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100000;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadIcon[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadLogo[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.loadBox[_ngcontent-%COMP%]   .loadText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #29352f;\n  text-align: center;\n  width: 100%;\n  white-space: nowrap;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 20px;\n}\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n@media screen and (max-width: 1000px) {\n  .loadBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadIcon[_ngcontent-%COMP%] {\n    width: 50%;\n    height: auto;\n  }\n  .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadLogo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .loadBox[_ngcontent-%COMP%]   .loadText[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7QUFFUjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUFBTjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQURKO0FBS0U7RUFFRTtJQUNFLFVBQUE7RUFISjtFQUtJO0lBQ0UsWUFBQTtFQUhOO0VBSU07SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQUZSO0VBSU07SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUZSO0VBTUk7SUFDRSxtQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRCb3gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgXG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmxvYWRJY29uIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB9XG4gICAgICAubG9hZExvZ28ge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5sb2FkVGV4dCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMjkzNTJmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIH1cbiAgICBcbiAgLmJsYWNrQm94IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogODAwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIFxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIFxuICAgIC5sb2FkQm94IHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgXG4gICAgICBkaXYge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIC5sb2FkSWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRMb2dvIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5sb2FkVGV4dCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuICAgICAgXG4gIFxuICB9Il19 */"] });


/***/ }),

/***/ 3359:
/*!*****************************************!*\
  !*** ./src/app/shared/paginacion-es.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSpanishPaginatorIntl": () => (/* binding */ getSpanishPaginatorIntl)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 8021);

const getRangeLabel = (page, pageSize, length) => {
    if (length == 0 || pageSize == 0) {
        return `0 van ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const startPage = page + 1;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    const endPage = Math.ceil(length / pageSize);
    //return `${startIndex + 1} - ${endIndex} de ${length}`;
    return `Página ${page + 1} de  ${endPage}`;
};
function getSpanishPaginatorIntl() {
    const paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = "Items por pagina:";
    paginatorIntl.nextPageLabel = "Anterior";
    paginatorIntl.previousPageLabel = "Siguiente";
    paginatorIntl.getRangeLabel = getRangeLabel;
    return paginatorIntl;
}


/***/ }),

/***/ 2343:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/paginate.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatePipe": () => (/* binding */ PaginatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PaginatePipe {
    transform(array, page_size, page_number) {
        if (!array.length)
            return [];
        /* if(page_size === 'all') {
          return array
        } */
        page_size = page_size || 6;
        page_number = page_number || 1;
        --page_number;
        // @ts_ignore
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(); };
PaginatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginacion", type: PaginatePipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader/loader.component */ 605);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error/error.component */ 3772);
/* harmony import */ var _style_paginator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-paginator.directive */ 6560);
/* harmony import */ var _autotab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autotab.directive */ 3444);
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/paginate.pipe */ 2343);
/* harmony import */ var _paginacion_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginacion-es */ 3359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorIntl,
            useValue: (0,_paginacion_es__WEBPACK_IMPORTED_MODULE_5__.getSpanishPaginatorIntl)(),
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent,
        _style_paginator_directive__WEBPACK_IMPORTED_MODULE_2__.StylePaginatorDirective,
        _autotab_directive__WEBPACK_IMPORTED_MODULE_3__.AutoTabDirective,
        _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule], exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent,
        _style_paginator_directive__WEBPACK_IMPORTED_MODULE_2__.StylePaginatorDirective,
        _autotab_directive__WEBPACK_IMPORTED_MODULE_3__.AutoTabDirective,
        _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe] }); })();


/***/ }),

/***/ 6560:
/*!*****************************************************!*\
  !*** ./src/app/shared/style-paginator.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePaginatorDirective": () => (/* binding */ StylePaginatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ 8021);


class StylePaginatorDirective {
    constructor(matPag, vr, ren) {
        this.matPag = matPag;
        this.vr = vr;
        this.ren = ren;
        this._currentPage = 1;
        this._pageGapTxt = "...";
        this._buttons = [];
        this._showTotalPages = 2;
        //Sub to rerender buttons when next page and last page is used
        this.matPag.page.subscribe((v) => {
            this.switchPage(v.pageIndex);
        });
    }
    get inc() {
        return this._showTotalPages % 2 == 0
            ? this.showTotalPages / 2
            : (this.showTotalPages - 1) / 2;
    }
    get lastPageIndex() {
        return this.matPag.getNumberOfPages() - 1;
    }
    get showTotalPages() {
        return this._showTotalPages;
    }
    set showTotalPages(value) {
        this._showTotalPages = value % 2 == 0 ? value + 1 : value;
    }
    buildPageNumbers() {
        const actionContainer = this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions");
        const nextPageNode = this.vr.element.nativeElement.querySelector("button.mat-paginator-navigation-next");
        const prevButtonCount = this._buttons.length;
        // remove buttons before creating new ones
        if (this._buttons.length > 0) {
            this._buttons.forEach((button) => {
                this.ren.removeChild(actionContainer, button);
            });
            //Empty state array
            this._buttons.length = 0;
        }
        //initialize next page and last page buttons
        if (this._buttons.length == 0) {
            let nodeArray = this.vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[2]
                .childNodes;
            /*       let node = // Numero de elementos en el paginador
            this.vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[0]
            .childNodes[2];
            console.log(this.vr.element.nativeElement);
            let paginatorBox = this.vr.element.nativeElement
            paginatorBox.class = 'paginatorBox';
             */
            /* node.style.visibility = 'hidden'; */
            //node.style.display = 'none';
            /* node.parentNode.removeChild(node); */
            /* this.ren.setStyle(node, "background-color", "#E3E4E5"); */
            setTimeout(() => {
                for (let i = 0; i < nodeArray.length; i++) {
                    if (nodeArray[i].nodeName === "BUTTON") {
                        this.ren.setStyle(nodeArray[i], "color", "white");
                        this.ren.setStyle(nodeArray[i], "margin", "2px");
                        if (nodeArray[i].disabled) {
                            this.ren.setStyle(nodeArray[i], "background-color", "#E3E4E5");
                        }
                        else {
                            this.ren.setStyle(nodeArray[i], "background-color", "#293133"); /* #04b865 */
                        }
                    }
                }
            });
        }
        let dots = false;
        for (let i = 0; i < this.matPag.getNumberOfPages(); i = i + 1) {
            if ((i < this._showTotalPages &&
                this._currentPage < this._showTotalPages &&
                i > this._rangeStart) ||
                (i >= this._rangeStart && i <= this._rangeEnd)) {
                this.ren.insertBefore(actionContainer, this.createButton(i, this.matPag.pageIndex), nextPageNode);
            }
            else {
                if (i > this._rangeEnd && !dots) {
                    this.ren.insertBefore(actionContainer, this.createButton(this._pageGapTxt, this.matPag.pageIndex), nextPageNode);
                    dots = true;
                }
            }
        }
    }
    createButton(i, pageIndex) {
        const linkBtn = this.ren.createElement("mat-button");
        this.ren.setStyle(linkBtn, "display", "none");
        const pagingTxt = isNaN(i) ? this._pageGapTxt : +(i + 1);
        const text = this.ren.createText(pagingTxt + "");
        this.ren.addClass(linkBtn, "mat-custom-page");
        switch (i) {
            case pageIndex:
                this.ren.setAttribute(linkBtn, "disabled", "disabled");
                break;
            case this._pageGapTxt:
                this.ren.listen(linkBtn, "click", () => {
                    this.switchPage(this._currentPage + this._showTotalPages);
                });
                break;
            default:
                this.ren.listen(linkBtn, "click", () => {
                    this.switchPage(i);
                });
                break;
        }
        this.ren.appendChild(linkBtn, text);
        //Add button to private array for state
        this._buttons.push(linkBtn);
        return linkBtn;
    }
    initPageRange() {
        this._rangeStart = this._currentPage - this._showTotalPages / 2;
        this._rangeEnd = this._currentPage + this._showTotalPages / 2;
        this.buildPageNumbers();
    }
    /*   private initPageRange(): void {
      const middleIndex = (this._rangeStart + this._rangeEnd) / 2;
  
      this._rangeStart = this.calcRangeStart(middleIndex);
      this._rangeEnd = this.calcRangeEnd(middleIndex);
  
      this.buildPageNumbers();
    } */
    switchPage(i) {
        this._currentPage = i;
        this.matPag.pageIndex = i;
        this.initPageRange();
    }
    ngAfterViewInit() {
        this._rangeStart = 0;
        this._rangeEnd = this._showTotalPages - 1;
        this.initPageRange();
    }
}
StylePaginatorDirective.ɵfac = function StylePaginatorDirective_Factory(t) { return new (t || StylePaginatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__.MatPaginator, 11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
StylePaginatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StylePaginatorDirective, selectors: [["", "style-paginator", ""]], inputs: { showTotalPages: "showTotalPages" } });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //source: 'http://localhost:100',
    source: 'https://ventas-api-prueba.loteria.com.ec',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map