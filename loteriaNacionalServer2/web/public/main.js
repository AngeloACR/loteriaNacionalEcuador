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
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _consultas_services_consultas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultas/services/consultas.service */ 8717);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/error/error.component */ 3772);






class AppComponent {
  constructor(router, consultas) {
    this.router = router;
    this.consultas = consultas;
    this.title = 'loteriaNacionalWeb';
    this.token = '';
    this.isDetail = false;
    this.showPromo = false;
    this.isDetail = false;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
        let data = decodeURIComponent(event.url);

        if (data.includes("inicio")) {
          this.showPromo = true;
        }

        if (data.includes('compra_tus_juegos?token') || data.includes('inicio?token')) {
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

      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {}

      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationError) {
        console.log(event.error);
      }
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.consultas.recuperarUltimosResultados();
    })();
  }

  closePromo() {
    this.showPromo = false;
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_consultas_services_consultas_service__WEBPACK_IMPORTED_MODULE_1__.ConsultasService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-error");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent],
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
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_3__.LoteriaModule,
            _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_4__.LottoModule,
            _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_5__.PozoModule,
            _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_6__.MillonariaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
            _codigos_promocionales_codigos_promocionales_module__WEBPACK_IMPORTED_MODULE_7__.CodigosPromocionalesModule,
        ], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_3__.LoteriaModule,
        _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_4__.LottoModule,
        _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_5__.PozoModule,
        _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_6__.MillonariaModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _codigos_promocionales_codigos_promocionales_module__WEBPACK_IMPORTED_MODULE_7__.CodigosPromocionalesModule], exports: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] }); })();


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_codigos_promocionales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/codigos-promocionales.service */ 16);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);





class CodigosPromocionalesComponent {
  constructor(codigosService) {
    this.codigosService = codigosService;
    this.codigos = [];
    this.showPromo = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.showPromo = yield _this.codigosService.getStatus(); //this.codigos = (await this.codigosService.obtenerCodigos() as any).values
    })();
  }

  imagenesSeleccionadas() {
    var _this2 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const myFiles = document.querySelector('#file').files;
      const formData = new FormData();
      if (!Object.keys(myFiles).length) return;
      Object.keys(myFiles).forEach(key => {
        formData.append(myFiles.item(key).name, myFiles.item(key));
      });
      const response = yield _this2.codigosService.cargarImagenes(formData);
    })();
  }

  generarTxt() {
    var _this3 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.codigos = _this3.codigosService.obtenerTxt().subscribe(data => {
        var fileName = '';
        const contentDisposition = data.headers.get('Content-Disposition');

        if (contentDisposition) {
          const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = fileNameRegex.exec(contentDisposition);

          if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, '');
          }
        }

        const blob = new Blob([data.body], {
          type: 'text/txt'
        });
        const element = document.createElement('a');
        element.href = URL.createObjectURL(blob);
        element.download = fileName;
        element.click();
      }, error => {
        throw new Error(error.error.message);
      });
    })();
  }

  changePopup() {
    var _this4 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.codigosService.setStatus(_this4.showPromo);
    })();
  }

}

CodigosPromocionalesComponent.ɵfac = function CodigosPromocionalesComponent_Factory(t) {
  return new (t || CodigosPromocionalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_codigos_promocionales_service__WEBPACK_IMPORTED_MODULE_1__.CodigosPromocionalesService));
};

CodigosPromocionalesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CodigosPromocionalesComponent,
  selectors: [["app-codigos-promocionales"]],
  decls: 9,
  vars: 1,
  consts: [[1, "containerBox"], [3, "ngModel", "ngModelChange", "change"], ["type", "button", "mat-raised-button", "", 3, "click"], ["hidden", "", "accept", "image/*", "multiple", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], [3, "click"]],
  template: function CodigosPromocionalesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-slide-toggle", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CodigosPromocionalesComponent_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
        return ctx.showPromo = $event;
      })("change", function CodigosPromocionalesComponent_Template_mat_slide_toggle_change_1_listener() {
        return ctx.changePopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Habilitar popup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CodigosPromocionalesComponent_Template_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

        return _r0.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Escoja la(s) imagen(es) del popup ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CodigosPromocionalesComponent_Template_input_change_5_listener() {
        return ctx.imagenesSeleccionadas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CodigosPromocionalesComponent_Template_button_click_7_listener() {
        return ctx.generarTxt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Generar archivo de codigos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.showPromo);
    }
  },
  directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".containerBox[_ngcontent-%COMP%] {\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.containerBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  height: 30px;\n  padding: 5px 50px;\n  outline: none;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n  background-color: #28aae1;\n  border: 1px solid #28aae1;\n}\n.containerBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28aae1;\n  transition: background-color 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnb3MtcHJvbW9jaW9uYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBR0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FkYTtFQWViLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBakJXO0VBa0JYLHlCQUFBO0FBREo7QUFFSTtFQUNFLHNCQUFBO0VBQ0EsY0FyQlM7RUFzQlQsc0NBQUE7QUFBTiIsImZpbGUiOiJjb2RpZ29zLXByb21vY2lvbmFsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XHJcbi5jb250YWluZXJCb3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigos-promocionales-routing.module */ 4580);
/* harmony import */ var _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigos-promocionales.component */ 893);
/* harmony import */ var _components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/popup-promo/popup-promo.component */ 9894);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









class CodigosPromocionalesModule {
}
CodigosPromocionalesModule.ɵfac = function CodigosPromocionalesModule_Factory(t) { return new (t || CodigosPromocionalesModule)(); };
CodigosPromocionalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CodigosPromocionalesModule });
CodigosPromocionalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesRoutingModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CodigosPromocionalesModule, { declarations: [_codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_1__.CodigosPromocionalesComponent, _components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__.PopupPromoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesRoutingModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule], exports: [_components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__.PopupPromoComponent] }); })();


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_codigos_promocionales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/codigos-promocionales.service */ 16);




class PopupPromoComponent {
  constructor(codigoPromocionalService) {
    this.codigoPromocionalService = codigoPromocionalService;
    this.closePromo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.bannerLink = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.bannerLink = yield _this.codigoPromocionalService.getBannerLink();
    })();
  }

  close() {
    this.closePromo.emit();
  }

}

PopupPromoComponent.ɵfac = function PopupPromoComponent_Factory(t) {
  return new (t || PopupPromoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_codigos_promocionales_service__WEBPACK_IMPORTED_MODULE_1__.CodigosPromocionalesService));
};

PopupPromoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PopupPromoComponent,
  selectors: [["app-popup-promo"]],
  outputs: {
    closePromo: "closePromo"
  },
  decls: 13,
  vars: 3,
  consts: [[1, "blackBox", 3, "click"], ["id", "myModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-header"], ["aria-label", "Close", 1, "close", 3, "click"], [1, "modal-content"], [1, "modal-body"], ["target", "_parent", "href", "https://www.loteria.com.ec/#/loteria/compra_tus_juegos"], [1, "Desktop", 3, "src", "click"], [1, "Ipad", 2, "max-width", "100%", 3, "src", "click"], [1, "Mobile", 3, "src", "click"]],
  template: function PopupPromoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopupPromoComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopupPromoComponent_Template_button_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_8_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_10_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_12_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.bannerLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.bannerLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.bannerLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".Ipad[_ngcontent-%COMP%], .Mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.Desktop[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 500000;\n  position: fixed;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  cursor: pointer;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  \n  \n  display: flex;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.65);\n  padding: 5px;\n  right: 0;\n  top: 0;\n  border-radius: 25px;\n  position: absolute;\n  z-index: 1000000;\n  margin: -15px;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  width: 20px;\n  height: 30px;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  cursor: pointer;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n@media (max-width: 1240px) {\n  .Desktop[_ngcontent-%COMP%], .Mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Ipad[_ngcontent-%COMP%] {\n    display: block;\n    width: 96vw;\n  }\n}\n\n@media (max-width: 600px) {\n  .Desktop[_ngcontent-%COMP%], .Ipad[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Mobile[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXByb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDSTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDTjs7QUFBTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyV0FBQTtFQUdBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7O0FBR0k7RUFDRSxZQUFBO0FBRE47O0FBRU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFOztJQUVFLGFBQUE7RUFIRjs7RUFLQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFOztJQUVFLGFBQUE7RUFIRjs7RUFLQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJwb3B1cC1wcm9tby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JcGFkLFxyXG4uTW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uRGVza3RvcCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHotaW5kZXg6IDUwMDAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXYge1xyXG4gICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgLyogdG9wOiAtMTBweDsgKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgICBtYXJnaW46IC0xNXB4O1xyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjMwMDAnJTNlJTNjcGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMDExLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDkuNDE0IDhsNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAxMC0xLjQxNHonLyUzZSUzYy9zdmclM2VcIilcclxuICAgICAgICAgIGNlbnRlci8xZW0gYXV0byBuby1yZXBlYXQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgIC5tb2RhbC1ib2R5e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ibGFja0JveCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDgwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gIC5EZXNrdG9wLFxyXG4gIC5Nb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLklwYWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTZ2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5EZXNrdG9wLFxyXG4gIC5JcGFkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5Nb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

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
    getBannerLink() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let address = '/codigosPromocionales';
        let endpoint = '/files';
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
    obtenerCodigos() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let address = '/codigosPromocionales';
        let endpoint = '/getCodCsv';
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
    getStatus() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let address = '/codigosPromocionales';
        let endpoint = '/status';
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
    setStatus(showPromo) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let address = '/codigosPromocionales';
        let endpoint = '/status';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            let body = { showPromo };
            this.http
                .post(address, body, {
                headers: headers,
            })
                .subscribe((data) => {
                resolve(data);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    cargarImagenes(formData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        let address = '/codigosPromocionales';
        let endpoint = '/files';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http
                .post(address, formData, {
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
      return new Promise<any>((resolve, reject) => {
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
        let address = '/codigosPromocionales';
        let endpoint = '/getTxt';
        address = this.mySource + address + endpoint;
        return this.http.get(address, {
            observe: 'response',
            responseType: 'blob',
        });
    }
}
CodigosPromocionalesService.ɵfac = function CodigosPromocionalesService_Factory(t) { return new (t || CodigosPromocionalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CodigosPromocionalesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CodigosPromocionalesService, factory: CodigosPromocionalesService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_juegos_loteria_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/juegos/loteria/services/consulta.service */ 8514);
/* harmony import */ var src_app_juegos_lotto_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/juegos/lotto/services/consulta.service */ 6151);
/* harmony import */ var src_app_juegos_pozo_services_consulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/juegos/pozo/services/consulta.service */ 9398);
/* harmony import */ var src_app_juegos_pozoRevancha_services_consulta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/juegos/pozoRevancha/services/consulta.service */ 759);
/* harmony import */ var src_app_juegos_millonaria_services_consulta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/juegos/millonaria/services/consulta.service */ 2054);







class ConsultasService {
  constructor(loteria, lotto, pozo, revancha, millonaria) {
    this.loteria = loteria;
    this.lotto = lotto;
    this.pozo = pozo;
    this.revancha = revancha;
    this.millonaria = millonaria;
  }

  recuperarUltimosResultados() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield Promise.all([_this.loteria.getUltimoResultado(), _this.lotto.getUltimoResultado(), _this.pozo.getUltimoResultado(), _this.revancha.getUltimoResultado(), _this.millonaria.getUltimoResultado()]);
    })();
  }

}

ConsultasService.ɵfac = function ConsultasService_Factory(t) {
  return new (t || ConsultasService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_juegos_loteria_services_consulta_service__WEBPACK_IMPORTED_MODULE_1__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_juegos_lotto_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_juegos_pozo_services_consulta_service__WEBPACK_IMPORTED_MODULE_3__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_juegos_pozoRevancha_services_consulta_service__WEBPACK_IMPORTED_MODULE_4__.ConsultaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_juegos_millonaria_services_consulta_service__WEBPACK_IMPORTED_MODULE_5__.ConsultaService));
};

ConsultasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #28aae1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhXO0FBSGYiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjMjhhYWUxO1xyXG4uYm9sZXRpbl9vZmljaWFsIHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICB9XHJcbn1cclxuIl19 */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 8514);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_40_Template(rf, ctx) {
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

function ConsultaComponent_option_56_Template(rf, ctx) {
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

function ConsultaComponent_app_loader_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 23);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

function ConsultaComponent_app_error_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 24);
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
    this.loadingMessage = 'Cargando datos';
    this.isError = false;
    this.errorMessage = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.triggerLoader();

      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();

      _this.dismissLoader();
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], [1, "tag"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "loteria", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "loteria", 3, "message"], [3, "msg", "closeError"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 5 digitos de la combinaci\u00F3n principal de tu boleto. Puedes consultar varios boletos a la vez, separados por coma. Ejemplo: 12345,67897 (5 digitos) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_37_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ConsultaComponent_option_40_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 17);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_53_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, ConsultaComponent_option_56_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_57_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, ConsultaComponent_app_loader_59_Template, 1, 1, "app-loader", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ConsultaComponent_app_error_60_Template, 1, 1, "app-error", 21);
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #35aee2;\n  border: 2px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #35aee2;\n  border: 1px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #35aee2;\n  border: 1px solid #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #35aee2;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #35aee2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkVTtBQU1oQjs7QUFhUTtFQUNFLGNBcEJNO0VBcUJOLHlCQUFBO0FBWFY7O0FBaUJNO0VBQ0UsY0E1QlE7QUFhaEI7O0FBb0JZO0VBQ0UsaUJBQUE7QUFsQmQ7O0FBK0JVO0VBQ0UsZ0JBQUE7RUFFQSx5QkFsREk7RUFtREoseUJBQUE7QUE5Qlo7O0FBK0JZO0VBQ0UsY0FyREU7QUF3QmhCOztBQWlDUTtFQUNFLHlCQTFETTtFQTJETix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlESTtBQStCaEI7O0FBc0NFO0VBQ0UseUJBdEVZO0FBa0NoQiIsImZpbGUiOiJjb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItbG90ZXJpYTogIzM1YWVlMjtcclxuXHJcbiVpbnB1dCB7XHJcbiAgcGFkZGluZzogMTNweCAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgY29sb3I6ICM5Nzc0NzQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJGNvbG9yLWxvdGVyaWE7XHJcbn1cclxuXHJcbi5jb250YWluZXJfY29uc3VsdGEge1xyXG4gIC5jdWVycG9fYm9sZXRpbiB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICAgIH1cclxuXHJcbiAgICAuZXhwbGljYWNpb24ge1xyXG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XHJcbiAgICAgICAgLmljb25vIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1sb3RlcmlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25zdWx0YV9ib2xldG8ge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3RlcmlhO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtdWxhcmlvIHtcclxuICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgLmlucHV0X2NvbnRlbnQge1xyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgLyogUmVjdGFuZ2xlIDM4ICovXHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdGVyaWE7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90ZXJpYTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3RlcmlhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBpZV9ib2xldGluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3RlcmlhO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
function TicketConsultaComponent_p_19_Template(rf, ctx) { if (rf & 1) {
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
        this.premio = this.ticket.valorPremio ? this.ticket.valorPremio : "";
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["loteria-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 20, vars: 7, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_title"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Entero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TicketConsultaComponent_p_19_Template, 2, 1, "p", 8);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, ctx.premio, "6.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  text-align: center;\n  -webkit-text-stroke: 2px #28aae1;\n  color: #28aae1;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #28aae1;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  text-align: center;\n  -webkit-text-stroke: 2px #28aae1;\n  color: #28aae1;\n  font-style: italic;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #28aae1;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  text-transform: uppercase;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  border: 4px solid #28aae1;\n  border-radius: 150px;\n  padding: 12px;\n  font-family: \"Monstserrat SemiBold\";\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n    padding: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFhTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsWUFBQTtBQWJSO0FBZU07RUFDRSx3QkE3Q1E7RUE4Q1IsZUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQk07RUFDRSxXQUFBO0VBQ0EsbUNBbkRXO0VBb0RYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZFI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FqRU87RUFrRVAsaUNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFFTztFQTJFUCxtQ0FoRlc7QUErRG5CO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFvQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBdkZPO0VBd0ZQLGtCQUFBO0VBQ0Esd0JBL0ZRO0VBZ0dSLGdCQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBakdPO0VBa0dQLG1DQXZHVztBQW9GbkI7QUF1Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQS9HYTtBQTBGbkI7QUF5QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBMUlPO0VBMklQLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF4Qlo7QUE4QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUE1QlY7QUErQlE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUE3QlY7QUErQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBcEtPO0VBcUtQLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBN0JaO0FBcUNBO0VBR007SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtFQXBDTjtBQUNGIiwiZmlsZSI6InRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIkhlbHZldGljYVwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wcmVtaW86IFwiSGFudW1hblwiO1xyXG5cclxuJGNvbG9yLWJvdHRvbjogIzI4YWFlMTtcclxuXHJcbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuXHJcbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2xvZ28ge1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fYmFycmEge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC50aWNrZXRfdGl0dWxvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRpY2tldF9tb250byB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wcmVtaW8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50aWNrZXRfdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGlja2V0X2VudGVyb19mcmFjY2lvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG5cclxuICAgICAgLnRpY2tldF9lbnRlcm8ge1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpY2tldF9mcmFjY2lvbiB7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAudGlja2V0X2VudGVybyB7XHJcbiAgICBkaXYge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #28AAE1;\n  background-color: #28AAE1;\n  box-sizing: border-box;\n  position: relative;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Monstserrat SemiBold\";\n  margin: 2px;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  width: 35px;\n  height: 35px;\n  font-weight: bold;\n  background-color: transparent;\n  border: 4.5px solid white;\n  border-radius: 150px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  top: 20px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  top: 110px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 100px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 120px;\n    top: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQVphO0VBYWIseUJBYmE7RUFjYixzQkFBQTtFQUNBLGtCQUFBO0FBTkY7QUFPRTtFQUNFLGtDQXBCYTtFQXFCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMSjtBQU1JO0VBQ0UsbUNBMUJhO0FBc0JuQjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFMSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0F0Q2E7RUF1Q2IsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBSk47QUFPRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFMSjtBQU9FO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0FBTEo7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBTEo7QUFTQTtFQUVJO0lBQ0UsZUFBQTtFQVBKO0VBVUs7SUFDRCxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQVJKO0FBQ0Y7QUFXQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQVZKO0FBQ0YiLCJmaWxlIjoidGlja2V0LXZlbnRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjMjhBQUUxO1xyXG5cclxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgIH1cclxuICB9XHJcbiAgLmZyYWN0aW9uc0JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5mcmFjY2lvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogNC41cHggc29saWQgd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpbWcudHJhc2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDo2JTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoMTA5JSk7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICBpbWcudHJhc2g6aG92ZXJ7XHJcbiAgICB3aWR0aDo4JTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgaW1nLmxvZ29UaWNrZXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICB0b3A6IDExMHB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIHRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"]
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
            sorteo: data.sorteo,
            valorPremio: parseFloat(data.premioPrincipal.valorPremio)
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
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n  visibility: hidden;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #28aae1;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: space-around;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 10px;\n  margin-right: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #28aae1;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 10px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #28aae1;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  color: #000;\n  font-size: 12px;\n  text-align: left;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px 30px;\n  background-color: #28aae1;\n  border: 1px solid #28aae1;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28aae1;\n}\n.texto[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  font-size: 14px;\n  text-align: center;\n  margin: auto;\n  margin-top: 5px;\n}\n.ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  text-align: center;\n  font-family: \"Monstserrat Bold\";\n  font-size: 17px;\n  color: #fff;\n}\n.ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxTQUFBO0VBQ0EsK0JBeEJVO0VBeUJWLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVBOO0FBV0U7RUFDRSxVQUFBO0VBQ0EscUJBN0JXO0FBb0JmO0FBWUU7RUFDRSxjQUFBO0FBVko7QUFZSTtFQUNFLHdCQUFBO0FBVk47QUFhSTtFQUNFLFdBQUE7QUFYTjtBQWNJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBWk47QUFlSTtFQUNFLG1CQUFBO0FBYk47QUFnQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZE47QUFnQk07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBZFI7QUFvQlU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFsQlo7QUFzQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXBCUjtBQXNCUTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQXBCVjtBQXNCVTtFQUNFLFdBQUE7QUFwQlo7QUFzQlU7RUFDRSwrQkEvRkk7RUFnR0osZUFBQTtFQUNBLGlCQUFBO0FBcEJaO0FBdUJVO0VBQ0UsV0FBQTtFQUNBLG1DQXJHTztFQXNHUCxlQUFBO0VBQ0Esa0JBQUE7QUFyQlo7QUF5QlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdkJWO0FBeUJVO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQXRISTtFQXVISixnQkFBQTtBQXZCWjtBQTBCVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXpIRztFQTBISCxtQ0E5SE87QUFzR25CO0FBNEJRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBcklTO0FBMkduQjtBQTRCVTtFQUNFLGtCQUFBO0FBMUJaO0FBNEJZO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTFCZDtBQTZCWTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBM0JkO0FBNkJjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQTNKRztFQTRKSCxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTNCaEI7QUFnQ1U7RUFDRSxtQkFBQTtBQTlCWjtBQWdDWTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTlCZDtBQWlDWTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQS9CZDtBQWlDYztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0F0TEc7RUF1TEgsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEvQmhCO0FBd0NFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdENKO0FBd0NJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBNU1TO0VBNk1ULHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQWxOVztFQW1OWCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQXRDTjtBQXdDTTtFQUNFLHNCQUFBO0VBQ0EsY0F4Tk87QUFrTGY7QUE0Q0E7RUFDRSxXQUFBO0VBQ0EsK0JBck9jO0VBc09kLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBekNGO0FBNENBO0VBQ0Usa0JBQUE7QUF6Q0Y7QUEyQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFuUFk7RUFvUFosZUFBQTtFQUNBLFdBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQTFDSjtBQTRDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FoUWE7RUFpUWIsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQTFDTiIsImZpbGUiOiJ1bHRpbW8tcmVzdWx0YWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XHJcblxyXG4uY29udGVuZWRvcl90aWNrZXQge1xyXG4gIC5sb2dvX3RpY2tldCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICB9XHJcblxyXG4gIC5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvIHtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG5cclxuICAgICAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2xvZ28ge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19iYXJyYSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAudGlja2V0X3RpdHVsbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpY2tldF9tb250byB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpY2tldF9lbnRlcm9fZnJhY2Npb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuXHJcbiAgICAgICAgICAudGlja2V0X2VudGVybyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGlja2V0X2ZyYWNjaW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm90b25fY29tcHJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50aWNrZXRfZW50ZXJvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcblxyXG4gIGg1IHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cclxuICAgIHAge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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
        sorteosJugados.sort(this.ordenaSorteos);
        sorteosJugados = this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
        resolve(sorteosJugados);
      });
    });
  }

  limpiaSorteosDeMasDe3Meses(sorteos) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter(sorteo => {
      let fechaSorteo = new Date(sorteo.fecha.split(' ')[0].split('/').reverse().join('-'));
      console.log(minDate.getTime(), fechaSorteo.getTime());
      return fechaSorteo.getTime() >= minDate.getTime();
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhXO0FBSGYiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjYjUxZjIwO1xyXG4uYm9sZXRpbl9vZmljaWFsIHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICB9XHJcbn1cclxuIl19 */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 6151);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_40_Template(rf, ctx) {
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

function ConsultaComponent_option_56_Template(rf, ctx) {
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

function ConsultaComponent_app_loader_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 23);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

function ConsultaComponent_app_error_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 24);
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
    this.loadingMessage = 'Cargando datos';
    this.isError = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.triggerLoader();

      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();

      _this.dismissLoader();
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], [1, "tag"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "lotto", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "lotto", 3, "message"], [3, "msg", "closeError"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 6 d\u00EDgitos de la combinaci\u00F3n principal de tu boleto. Puedes consultar varios boletos a la vez, separados por coma. Ejemplo: 123445, 678978 (6 digitos) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_37_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ConsultaComponent_option_40_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 17);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_53_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, ConsultaComponent_option_56_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_57_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, ConsultaComponent_app_loader_59_Template, 1, 1, "app-loader", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ConsultaComponent_app_error_60_Template, 1, 1, "app-error", 21);
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #b51f20;\n  border: 2px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuJGNvbG9yLWxvdHRvOiAjYjUxZjIwO1xyXG5cclxuJWlucHV0IHtcclxuICBwYWRkaW5nOiAxM3B4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBjb2xvcjogIzk3NzQ3NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbn1cclxuXHJcbi5jb250YWluZXJfY29uc3VsdGEge1xyXG4gIC5jdWVycG9fYm9sZXRpbiB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGxpY2FjaW9uIHtcclxuICAgICAgLmNvbnRlbnRfZXhwbGljYWNpb24ge1xyXG4gICAgICAgIC5pY29ubyB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25zdWx0YV9ib2xldG8ge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgfVxyXG4gICAgICAuZm9ybXVsYXJpbyB7XHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgIC5pbnB1dF9jb250ZW50IHtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xyXG4gICAgICAgICAgICAgIEBleHRlbmQgJWlucHV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAvKiBSZWN0YW5nbGUgNiAqL1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5waWVfYm9sZXRpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
function TicketConsultaComponent_p_17_Template(rf, ctx) { if (rf & 1) {
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
        this.premio = this.ticket.valorPremio ? this.ticket.valorPremio : "";
        this.sorteo = this.ticket.sorteo;
        this.numeroSorteo = this.ticket.numeroSorteo;
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["lotto-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 18, vars: 7, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_title"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TicketConsultaComponent_p_17_Template, 2, 1, "p", 8);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, ctx.premio, "6.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  -webkit-text-stroke: 2px #b51f20;\n  text-align: center;\n  color: #b51f20;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  -webkit-text-stroke: 2px #b51f20;\n  text-align: center;\n  font-style: italic;\n  color: #b51f20;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #b51f20;\n  border-radius: 150px;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n    padding: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFhTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsWUFBQTtBQWJSO0FBZU07RUFDRSx3QkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQk07RUFDRSxXQUFBO0VBQ0EsbUNBbERXO0VBbURYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZFI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FqRU07RUFrRU4saUNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFFTTtFQTJFTixtQ0EvRVc7QUE4RG5CO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFvQk07RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4Rk07RUF5Rk4sd0JBOUZRO0VBK0ZSLGdCQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBakdNO0VBa0dOLG1DQXRHVztBQW1GbkI7QUF1Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQTlHYTtBQXlGbkI7QUF5QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQWpJTztFQW1JUCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6Qlo7QUE4Qk07RUFDRSxrQkFBQTtBQTVCUjtBQThCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTVCVjtBQStCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTdCVjtBQStCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FqS087RUFrS1AsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3Qlo7QUFxQ0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0VBcENOO0FBQ0YiLCJmaWxlIjoidGlja2V0LWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1wcmVtaW86IFwiSGFudW1hblwiO1xyXG4kZnVlbnRlLXRpdHVsbzogXCJIZWx2ZXRpY2FcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XHJcblxyXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkbyB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcblxyXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19sb2dvIHtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2JhcnJhIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAudGlja2V0X3RpdHVsbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aWNrZXRfbW9udG8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXByZW1pbyFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50aWNrZXRfdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGlja2V0X2VudGVyb19mcmFjY2lvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG5cclxuICAgICAgLnRpY2tldF9lbnRlcm8ge1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcblxyXG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAudGlja2V0X2VudGVybyB7XHJcbiAgICBkaXYge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n  background-color: #b51f20;\n  position: relative;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  top: 20px;\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  bottom: 5px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 132px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 115px;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJhO0VBY2IseUJBZGE7RUFlYixrQkFBQTtFQUNBLHNCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBcENhO0VBcUNiLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQVBKO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBKO0FBV0E7RUFFSTtJQUNFLGVBQUE7RUFUSjtFQVdFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUFUSjtBQUNGO0FBWUE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFYSjtBQUNGIiwiZmlsZSI6InRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuJGNvbG9yLWJvdHRvbjogI2I1MWYyMDtcclxuXHJcbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgIH1cclxuICB9XHJcbiAgLmZyYWN0aW9uc0JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5mcmFjY2lvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTYlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZy50cmFzaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMzYwZGVnKVxyXG4gICAgICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIGltZy50cmFzaDpob3ZlciB7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIGltZy5sb2dvVGlja2V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHRvcDogMTMycHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDExNXB4O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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




function UltimoResultadoComponent_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const premio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", premio_r2.nombre, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](premio_r2.combinacion);
} }
function UltimoResultadoComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PREMIOS ESPECIALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UltimoResultadoComponent_ng_container_7_ng_container_4_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.premiosEspeciales);
} }
class UltimoResultadoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        let data = JSON.parse(localStorage.getItem('lottoUltimoResultado'));
        this.ticketNumbers = data.ultimoResultadoLotto.combinacion1.split('');
        this.premiosEspeciales = data.premiosEspeciales;
        this.ticketGanador = {
            ticketIndex: data.ultimoResultadoLotto.codigo,
            description: 'Boleto Ganador',
            ticketNumbers: this.ticketNumbers,
            premiosEspeciales: this.premiosEspeciales,
            numeroSorteo: data.numeroSorteo,
            sorteo: data.sorteo,
            valorPremio: data.premioPrincipal.valorPremio,
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
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["lotto-ultimo-resultado"]], decls: 13, vars: 2, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "assets/img/lotto-sombra-2.png", "alt", ""], ["size", "2px"], [1, "scroll"], [3, "ticket"], [4, "ngIf"], [1, "boton_comprar"], [3, "click"], [1, "texto"], [1, "texto_premios"], [4, "ngFor", "ngForOf"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UltimoResultadoComponent_ng_container_7_Template, 5, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_9_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_11_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "BUSCAR OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ctx.ticketGanador);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px 30px;\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-template-rows: repeat(4, auto);\n  text-align: left;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0VBQ0EsK0JBeEJVO0VBeUJWLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQTVCVTtBQW1CZDtBQVlFO0VBQ0UsY0FBQTtFQVVBOzs7U0FBQTtBQWhCSjtBQVFJO0VBQ0Usd0JBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBZUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFmTjtBQWlCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWZaO0FBbUJRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFqQlY7QUFtQlU7RUFDRSxtQ0ExRk87RUEyRlAsZUFBQTtBQWpCWjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBckJSO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXJCVjtBQXVCVTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFsSEk7RUFtSEosZUFBQTtBQXJCWjtBQXdCVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXJIRTtFQXNIRiwrQkEzSEk7QUFxR2hCO0FBMEJRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQXBJUztBQTRHbkI7QUEwQlU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBeEJaO0FBMkJVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQTFCWjtBQTRCWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFCZDtBQTZCWTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQmQ7QUFpQ007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEvQlI7QUFpQ1E7RUFDRSxXQUFBO0FBL0JWO0FBcUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbkNKO0FBcUNJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBckxRO0VBc0xSLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQTNMVztFQTRMWCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQW5DTjtBQXFDTTtFQUNFLHNCQUFBO0VBQ0EsY0FqTU07QUE4SmQ7QUF3Q0U7RUFDRSxZQUFBO0VBQ0EsK0JBN01ZO0VBOE1aLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQXZDSjtBQTBDRTtFQUNFLGtCQUFBO0FBeENKO0FBMENJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQTNOVTtFQTROVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBeENOO0FBMkNJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Q047QUEyQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBek9XO0VBME9YLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Q1I7QUE4Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUE5Q0o7QUFnREk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTlDTiIsImZpbGUiOiJ1bHRpbW8tcmVzdWx0YWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1sb3R0bzogI2I1MWYyMDtcclxuXHJcbi5jb250ZW5lZG9yX3RpY2tldCB7XHJcbiAgLmxvZ29fdGlja2V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1sb3R0bztcclxuICB9XHJcblxyXG4gIC5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50LFxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAuY29udGVuZWRvcl90aXR1bG8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG5cclxuICAgICAgICAuY29udGVuZWRvcl9sb2dvIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yX2luZm8ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBhZGRpbmc6IGF1dG8gMTBweDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbmVkb3JfbW9udG9fcHJlbWlvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLm1vbnRvX3NvcnRlbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBsZWZ0O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcblxyXG4gICAgICAgICAgLm51bWVybyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVuZWRvcl9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbmVkb3JfY29kaWdvX2JhcnJhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdG9uX2NvbXByYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHRvIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC50aWNrZXRfZW50ZXJvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dG9fcHJlbWlvcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
          sorteosJugados.sort(_this.ordenaSorteos);
          sorteosJugados = _this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  limpiaSorteosDeMasDe3Meses(sorteos) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter(sorteo => {
      let fechaSorteo = new Date(sorteo.fecha.split(' ')[0].split('/').reverse().join('-'));
      console.log(minDate.getTime(), fechaSorteo.getTime());
      return fechaSorteo.getTime() >= minDate.getTime();
    });
  }

  ordenaSorteos(a, b) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo, combinaciones) {
    var _this2 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
      return new Promise((resolve, reject) => {
        _this2.http.post(address, body, {
          headers: headers
        }).subscribe(data => {
          let boletoGanador = data;
          resolve(boletoGanador);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  getUltimoResultado() {
    var _this3 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
    getSorteo(sorteo) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let endpoint = `/getSorteo`;
        let address = '/lotto';
        address = this.mySource + address + endpoint;
        let body = {
            sorteo
        };
        return new Promise((resolve, reject) => {
            this.http
                .post(address, body, {
                headers: headers,
            })
                .subscribe((data) => {
                let sorteo = data;
                resolve(sorteo);
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsMkJBQUE7QUFFRTtFQUNFLGNBSlc7QUFGZiIsImZpbGUiOiJib2xldGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1ib3R0b246ICNiNTFmMjA7XHJcbi8qICRjb2xvci1sb3R0bzogI2I1MWYyMDsgKi9cclxuLmJvbGV0aW5fb2ZpY2lhbCB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 2054);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 24);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

function ConsultaComponent_app_error_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 25);
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
    this.loadingMessage = 'Cargando datos';
    this.isError = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.triggerLoader();

      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();

      _this.dismissLoader();
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", "maxlength", "4", 3, "ngModel", "input", "ngModelChange"], [1, "tag"], ["name", "serie", "type", "text", 3, "ngModel", "input", "ngModelChange"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "millonaria", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "millonaria", 3, "message"], [3, "msg", "closeError"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 4 d\u00EDgitos de la combinaci\u00F3n principal de tu boleto. Solo puedes consultar un boleto a la vez. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Ingresa la serie de tu boleto:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ConsultaComponent_Template_input_input_37_listener() {
        return ctx.validateSerie();
      })("ngModelChange", function ConsultaComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.serie = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Ingresa todos los d\u00EDgitos de la serie de tu boleto.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_44_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ConsultaComponent_option_47_Template, 2, 3, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 18);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Consulta por Boletin de Resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_60_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ConsultaComponent_option_63_Template, 2, 3, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_64_listener() {
        return ctx.buscarBoletin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ConsultaComponent_app_loader_66_Template, 1, 1, "app-loader", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ConsultaComponent_app_error_67_Template, 1, 1, "app-error", 22);
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #b51f20;\n  border: 2px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b51f20;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuJGNvbG9yLWxvdHRvOiAjYjUxZjIwO1xyXG5cclxuJWlucHV0IHtcclxuICBwYWRkaW5nOiAxM3B4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBjb2xvcjogIzk3NzQ3NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbn1cclxuXHJcbi5jb250YWluZXJfY29uc3VsdGEge1xyXG4gIC5jdWVycG9fYm9sZXRpbiB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGxpY2FjaW9uIHtcclxuICAgICAgLmNvbnRlbnRfZXhwbGljYWNpb24ge1xyXG4gICAgICAgIC5pY29ubyB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25zdWx0YV9ib2xldG8ge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgfVxyXG4gICAgICAuZm9ybXVsYXJpbyB7XHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgIC5pbnB1dF9jb250ZW50IHtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xyXG4gICAgICAgICAgICAgIEBleHRlbmQgJWlucHV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAvKiBSZWN0YW5nbGUgNiAqL1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5waWVfYm9sZXRpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
function TicketConsultaComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](number_r3);
} }
function TicketConsultaComponent_p_24_Template(rf, ctx) { if (rf & 1) {
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
        this.premio = this.ticket.valorPremio ? this.ticket.valorPremio : "";
        this.sorteo = this.ticket.numeroSorteo;
    }
}
TicketConsultaComponent.ɵfac = function TicketConsultaComponent_Factory(t) { return new (t || TicketConsultaComponent)(); };
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["millonaria-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 25, vars: 8, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_title"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Entero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TicketConsultaComponent_p_19_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Serie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TicketConsultaComponent_p_24_Template, 2, 1, "p", 8);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, ctx.premio, "6.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serieNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  text-align: center;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #b51f20;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  text-align: center;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #b51f20;\n  font-style: italic;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  border: 4px solid #b51f20;\n  border-radius: 150px;\n  padding: 12px;\n  font-family: \"Monstserrat SemiBold\";\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n    padding: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFhTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsWUFBQTtBQWJSO0FBZU07RUFDRSx3QkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQk07RUFDRSxXQUFBO0VBQ0EsbUNBbERXO0VBbURYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZFI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FqRU87RUFrRVAsaUNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFFTztFQTJFUCxtQ0EvRVc7QUE4RG5CO0FBcUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFuQk47QUFxQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBeEZPO0VBeUZQLGtCQUFBO0VBQ0Esd0JBL0ZRO0VBZ0dSLGdCQUFBO0FBbkJSO0FBc0JNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBbEdPO0VBbUdQLG1DQXZHVztBQW1GbkI7QUF3Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQS9HYTtBQXlGbkI7QUF3Qk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF0QlI7QUF3QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsY0FBQTtFQUVBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBakpPO0VBa0pQLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUExQlo7QUErQk07RUFDRSxrQkFBQTtBQTdCUjtBQStCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTdCVjtBQWdDUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTlCVjtBQWdDVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0E3S087RUE4S1AsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE5Qlo7QUFzQ0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0VBckNOO0FBQ0YiLCJmaWxlIjoidGlja2V0LWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1wcmVtaW86IFwiSGFudW1hblwiO1xyXG4kZnVlbnRlLXRpdHVsbzogXCJIZWx2ZXRpY2FcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjYjUxZjIwO1xyXG5cclxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG8ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG5cclxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fbG9nbyB7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19iYXJyYSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgLnRpY2tldF90aXR1bG8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGlja2V0X21vbnRvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXByZW1pbyFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRpY2tldF90aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aWNrZXRfZW50ZXJvX2ZyYWNjaW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcblxyXG4gICAgICAudGlja2V0X2VudGVybyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIC8qIEVsbGlwc2UgMSAqL1xyXG5cclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpY2tldF9mcmFjY2lvbiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC50aWNrZXRfZW50ZXJvIHtcclxuICAgIGRpdiB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n  background-color: #b51f20;\n  box-sizing: border-box;\n  position: relative;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Monstserrat SemiBold\";\n  margin: 2px;\n  padding: 5px;\n  text-align: center;\n  color: white;\n  width: 35px;\n  height: 35px;\n  font-weight: bold;\n  background-color: transparent;\n  border: 4.5px solid white;\n  border-radius: 150px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  top: 20px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40%;\n  top: 130px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 100px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    top: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBWmE7RUFhYix5QkFiYTtFQWNiLHNCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQU9FO0VBQ0Usa0NBcEJhO0VBcUJiLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxKO0FBTUk7RUFDRSxtQ0ExQmE7QUFzQm5CO0FBT0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBTUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQXRDYTtFQXVDYixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFKTjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpR0FBQTtFQUVBLFdBQUE7RUFDQSwyQkFBQTtBQU5KO0FBUUU7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFOSjtBQVVBO0VBRUk7SUFDRSxlQUFBO0VBUko7RUFVRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBUko7QUFDRjtBQVdBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBVko7QUFDRiIsImZpbGUiOiJ0aWNrZXQtdmVudGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1ib3R0b246ICNiNTFmMjA7XHJcblxyXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mcmFjdGlvbnNCb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAuZnJhY2Npb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IDQuNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW1nLnRyYXNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiA2JTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpXHJcbiAgICAgIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoMTA5JSk7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgaW1nLnRyYXNoOmhvdmVyIHtcclxuICAgIHdpZHRoOiA4JTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgaW1nLmxvZ29UaWNrZXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpbWcubG9nb1RpY2tldCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgICBpbWcubG9nb1RpY2tldCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICB0b3A6IDEyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
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
            sorteo: data.sorteo,
            valorPremio: data.premioPrincipal.valorPremio
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
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #b51f20;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px 30px;\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: repeat(6, auto);\n  text-align: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxTQUFBO0VBQ0EsK0JBeEJVO0VBeUJWLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQTVCVTtBQW1CZDtBQVlFO0VBQ0UsY0FBQTtFQVVBOzs7U0FBQTtBQWhCSjtBQVFJO0VBQ0Usd0JBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBZUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFmTjtBQWlCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWZaO0FBbUJRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFqQlY7QUFtQlU7RUFDRSxtQ0ExRk87RUEyRlAsZUFBQTtBQWpCWjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBckJSO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXJCVjtBQXVCVTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFsSEk7RUFtSEosZUFBQTtBQXJCWjtBQXdCVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXJIRTtFQXNIRiwrQkEzSEk7QUFxR2hCO0FBMEJRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQXBJUztBQTRHbkI7QUEwQlU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBeEJaO0FBMkJVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQTFCWjtBQTRCWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFCZDtBQTZCWTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQmQ7QUFpQ007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEvQlI7QUFpQ1E7RUFDRSxXQUFBO0FBL0JWO0FBcUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbkNKO0FBcUNJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBckxRO0VBc0xSLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQTNMVztFQTRMWCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQW5DTjtBQXFDTTtFQUNFLHNCQUFBO0VBQ0EsY0FqTU07QUE4SmQ7QUF3Q0U7RUFDRSxZQUFBO0VBQ0EsK0JBN01ZO0VBOE1aLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQXZDSjtBQTBDRTtFQUNFLGtCQUFBO0FBeENKO0FBMENJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQTNOVTtFQTROVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBeENOO0FBMkNJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Q047QUEyQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBek9XO0VBME9YLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Q1I7QUE4Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUE5Q0o7QUFnREk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTlDTiIsImZpbGUiOiJ1bHRpbW8tcmVzdWx0YWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1sb3R0bzogI2I1MWYyMDtcclxuXHJcbi5jb250ZW5lZG9yX3RpY2tldCB7XHJcbiAgLmxvZ29fdGlja2V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQsXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgIC5jb250ZW5lZG9yX3RpdHVsbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yX2xvZ28ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbmVkb3JfaW5mbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgcGFkZGluZzogYXV0byAxMHB4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVuZWRvcl9tb250b19wcmVtaW8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAubW9udG9fc29ydGVvIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcclxuXHJcbiAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVuZWRvcl9udW1lcm9zIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW46IGxlZnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuXHJcbiAgICAgICAgICAubnVtZXJvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250ZW5lZG9yX24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG5cclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubnVtZXJvcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVuZWRvcl9jb2RpZ29fYmFycmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm90b25fY29tcHJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHRvIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC50aWNrZXRfZW50ZXJvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dG9fcHJlbWlvcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0byk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json'); //let endpoint = "/inquiry";

      let endpoint = '/cache';
      var address = '/millonaria';
      endpoint = `${endpoint}/sorteosJugados`;
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(address, {
          headers: headers
        }).subscribe(data => {
          let sorteosJugados = data.values;
          sorteosJugados.sort(_this.ordenaSorteos);
          sorteosJugados = _this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  limpiaSorteosDeMasDe3Meses(sorteos) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter(sorteo => {
      let fechaSorteo = new Date(sorteo.fecha.split(' ')[0].split('/').reverse().join('-'));
      console.log(minDate.getTime(), fechaSorteo.getTime());
      return fechaSorteo.getTime() >= minDate.getTime();
    });
  }

  ordenaSorteos(a, b) {
    let a1 = a['sorteo'];
    let b1 = b['sorteo'];
    return b1 - a1;
  }

  recuperarBoletoGanador(sorteo, combinaciones) {
    var _this2 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
          resolve(boletoGanador);
        }, error => {
          reject(new Error(error.error.message));
        });
      });
    })();
  }

  getUltimoResultado() {
    var _this3 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

/***/ 759:
/*!******************************************************************!*\
  !*** ./src/app/juegos/pozoRevancha/services/consulta.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaService": () => (/* binding */ ConsultaService)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json'); //let endpoint = "/inquiry";

      let endpoint = '/cache';
      var address = '/pozoRevancha';
      endpoint = `${endpoint}/sorteosJugados`;
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(address, {
          headers: headers
        }).subscribe(data => {
          let sorteosJugados = data.values;
          sorteosJugados.sort(_this.ordenaSorteos);
          sorteosJugados = _this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  limpiaSorteosDeMasDe3Meses(sorteos) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter(sorteo => {
      let fechaSorteo = new Date(sorteo.fecha.split(' ')[0].split('/').reverse().join('-'));
      console.log(minDate.getTime(), fechaSorteo.getTime());
      return fechaSorteo.getTime() >= minDate.getTime();
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
    let address = '/pozoRevancha';
    endpoint = `${endpoint}/ganador`;
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      combinaciones
    };
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

  recuperarBoletoGanadorPorPlancha(boletoInicial, boletoFinal, sorteo) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/pozoRevancha';
    let endpoint = '/plancha';
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      boletoInicial,
      boletoFinal
    };
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        let boletoGanador = data;
        resolve(boletoGanador);
      });
    });
  }

  getUltimoResultado() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let endpoint = '/cache/ultimoResultado';
    let address = '/pozoRevancha';
    let auxAddress = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.get(auxAddress, {
        headers: headers
      }).subscribe(data => {
        let response;
        let pozoRevancha = data;
        localStorage.setItem('pozoRevanchaUltimoResultado', JSON.stringify(pozoRevancha));
        response = {
          tipo: 'pozoRevancha',
          data: pozoRevancha
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
      let boletinAddress = `${sourceBoletines}T17${sorteo}.jpg`;
      resolve(boletinAddress);
    });
  }

  obtenerMascota(mascota) {
    let mascotaPath;

    switch (mascota) {
      case '04':
        mascotaPath = 'assets/mascotas/Delfin.png';
        break;

      case '02':
        mascotaPath = 'assets/mascotas/Perro.png';
        break;

      case '08':
        mascotaPath = 'assets/mascotas/Llama.png';
        break;

      case '09':
        mascotaPath = 'assets/mascotas/Papagayo.png';
        break;

      case '01':
        mascotaPath = 'assets/mascotas/Conejo.png';
        break;

      case '10':
        mascotaPath = 'assets/mascotas/Mono.png';
        break;

      case '03':
        mascotaPath = 'assets/mascotas/Galapago.png';
        break;

      case '05':
        mascotaPath = 'assets/mascotas/Foca.png';
        break;

      case '06':
        mascotaPath = 'assets/mascotas/Condor.png';
        break;

      case '07':
        mascotaPath = 'assets/mascotas/Iguana.png';
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhTO0FBSGIiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItcG96bzogIzA0Yjg2NTtcclxuLmJvbGV0aW5fb2ZpY2lhbCB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 9398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/error/error.component */ 3772);










function ConsultaComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 26);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx_r3.loadingMessage);
  }
}

function ConsultaComponent_app_error_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-error", 27);
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
    this.loadingMessage = 'Cargando datos';
    this.isError = false;
    this.errorMessage = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.triggerLoader();

      _this.sorteosJugados = yield _this.consulta.recuperarSorteosJugados();

      _this.setSorteoDefault();

      _this.dismissLoader();
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sorteoBoletin == 'default') {
        _this3.openError('Por favor, selecciona un sorteo');

        return;
      }

      _this3.router.navigateByUrl(`/consultas/pozo/boletin/${_this3.sorteoBoletin}`);
    })();
  }

  buscarRango() {
    var _this4 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this4.triggerLoader();

        if (_this4.sorteoRango == 'default') {
          _this4.dismissLoader();

          _this4.openError('Por favor, selecciona un sorteo');

          return;
        }

        if (!(_this4.boletoInicial && _this4.boletoInicial.length)) throw new Error('Por favor, escribe el número inicial del rango');
        if (!(_this4.boletoFinal && _this4.boletoFinal.length)) throw new Error('Por favor, escribe el número final del rango');
        let data = yield _this4.consulta.recuperarBoletoGanadorPorPlancha(_this4.boletoInicial, _this4.boletoFinal, _this4.sorteoRango);

        _this4.resultados.emit(data);

        _this4.dismissLoader();
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
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], [1, "tag"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], [1, "consulta_boleto", "espacio"], ["name", "boletoInicial", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "boletoFinal", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "sorteoRango", "id", "sorteoRango", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "pozo", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "pozo", 3, "message"], [3, "msg", "closeError"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Ingresa todos los 7 digitos del N\u00B0 Carton, incluyendo ceros (0) de la izquierda, ejemplo: 0037946. Puedes ingresar varios cartones a la vez, separados por coma. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Selecciona el numero del sorteo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_42_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ConsultaComponent_option_45_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 17);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_58_listener($event) {
        return ctx.sorteoBoletin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, ConsultaComponent_option_61_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 17);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Consulta por Rango (Plancha)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Desde:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "input", 20);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "input", 21);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConsultaComponent_Template_select_ngModelChange_86_listener($event) {
        return ctx.sorteoRango = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, ConsultaComponent_option_89_Template, 2, 3, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConsultaComponent_Template_button_click_90_listener() {
        return ctx.buscarRango();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "VER RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, ConsultaComponent_app_loader_92_Template, 1, 1, "app-loader", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, ConsultaComponent_app_error_93_Template, 1, 1, "app-error", 24);
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #04b865;\n  border: 2px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #04b865;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVBGOztBQThCSTtFQUNFLGNBakNPO0FBTWI7O0FBZ0NRO0VBQ0UsY0F2Q0c7RUF3Q0gseUJBQUE7QUE5QlY7O0FBb0NNO0VBQ0UsY0EvQ0s7QUFhYjs7QUF1Q1k7RUFDRSxpQkFBQTtBQXJDZDs7QUFrRFU7RUFDRSxnQkFBQTtFQUVBLHlCQXJFQztFQXNFRCx5QkFBQTtBQWpEWjs7QUFrRFk7RUFDRSxjQXhFRDtBQXdCYjs7QUFvRFE7RUFDRSx5QkE3RUc7RUE4RUgseUJBQUE7QUFsRFY7O0FBb0RVO0VBQ0UsY0FqRkM7QUErQmI7O0FBeURFO0VBQ0UseUJBekZTO0FBa0NiIiwiZmlsZSI6ImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG4vLyRjb2xvci1wb3pvOiAjMDU3MzMzO1xyXG5cclxuJWlucHV0IHtcclxuICBwYWRkaW5nOiAxM3B4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBjb2xvcjogIzk3NzQ3NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkY29sb3ItcG96bztcclxufVxyXG5cclxuJWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLy9jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICBjb2xvcjogIzE4NmI3NjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXJfY29uc3VsdGEge1xyXG4gIC5jdWVycG9fYm9sZXRpbiB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcclxuICAgIH1cclxuXHJcbiAgICAuZXhwbGljYWNpb24ge1xyXG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XHJcbiAgICAgICAgLmljb25vIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1wb3pvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25zdWx0YV9ib2xldG8ge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtdWxhcmlvIHtcclxuICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgLmlucHV0X2NvbnRlbnQge1xyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgLyogUmVjdGFuZ2xlIDM4ICovXHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcG96bztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBpZV9ib2xldGluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["pozo-ticket-consulta"]], inputs: { ticket: "ticket", mascotaPath: "mascotaPath", mascota: "mascota" }, decls: 16, vars: 5, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_title"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"], [1, "texto_premios"], [3, "src", "alt"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["@charset \"UTF-8\";\n.contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  \n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 23px;\n  text-align: center;\n  -webkit-text-stroke: 2px #04b865;\n  color: #04b865;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #04b865;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  text-align: center;\n  -webkit-text-stroke: 2px #04b865;\n  font-style: italic;\n  color: #04b865;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #04b865;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #04b865;\n  border-radius: 150px;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 15px !important;\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFTaEI7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFVTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVJSO0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVZKO0FBWUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWTjtBQVlNO0VBQ0UsWUFBQTtBQVZSO0FBWU07RUFDRSx3QkF6Q1E7RUEwQ1IsZUFBQTtFQUNBLGlCQUFBO0FBVlI7QUFhTTtFQUNFLFdBQUE7RUFDQSxtQ0EvQ1c7RUFnRFgsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFFQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVpSO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkTjtBQWdCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FoRUs7RUFpRUwsaUNBQUE7RUFDQSxnQkFBQTtBQWRSO0FBaUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBekVLO0VBMEVMLG1DQTlFVztBQStEbkI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXZGSztFQXdGTCx3QkE3RlE7RUE4RlIsZ0JBQUE7QUFoQlI7QUFtQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FoR0s7RUFpR0wsbUNBckdXO0FBb0ZuQjtBQW9CSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQTNHYTtBQXlGbkI7QUFtQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFqQlI7QUFrQlE7RUFDRSxXQUFBO0FBaEJWO0FBbUJNO0VBQ0UsVUFBQTtBQWpCUjtBQWtCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaEJWO0FBbUJRO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBakJWO0FBbUJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQXZJTztFQXdJUCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqQlo7QUFzQk07RUFDRSxrQkFBQTtBQXBCUjtBQXNCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXBCVjtBQXVCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQXJCVjtBQXVCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0F0S087RUF1S1AsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFyQlo7QUE2QkE7RUFHTTtJQUNFLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBNUJOO0FBQ0YiLCJmaWxlIjoidGlja2V0LWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggOHB4O1xufVxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG8gLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19iYXJyYSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X3RpdHVsbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF90aXR1bG8gaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIC50aWNrZXRfdGl0dWxvIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF90aXR1bG8gcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogU29ydGVvIE7CsCA2Njk3IDAzLzAxLzIwMjIgMjE6MDA6MDAgKi9cbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X21vbnRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X21vbnRvIHA6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjMDRiODY1O1xuICBjb2xvcjogIzA0Yjg2NTtcbiAgZm9udC1mYW1pbHk6IFwiSGFudW1hblwiICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF9tb250byBwOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMwNGI4NjU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF90aXRsZSBwOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggIzA0Yjg2NTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzA0Yjg2NTtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF90aXRsZSBwOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMwNGI4NjU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF9lbnRlcm9fZnJhY2Npb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF9lbnRlcm9fZnJhY2Npb24gLnRleHRvX3ByZW1pb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X2VudGVyb19mcmFjY2lvbiAudGV4dG9fcHJlbWlvcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X2VudGVyb19mcmFjY2lvbiAudGlja2V0X2VudGVybyB7XG4gIHdpZHRoOiA1NSU7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF9lbnRlcm9fZnJhY2Npb24gLnRpY2tldF9lbnRlcm8gaDUge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIC50aWNrZXRfZW50ZXJvX2ZyYWNjaW9uIC50aWNrZXRfZW50ZXJvIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8gLnRpY2tldF9lbnRlcm9fZnJhY2Npb24gLnRpY2tldF9lbnRlcm8gZGl2IHAge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuICBib3JkZXI6IDRweCBzb2xpZCAjMDRiODY1O1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X2VudGVyb19mcmFjY2lvbiAudGlja2V0X2ZyYWNjaW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIC50aWNrZXRfZW50ZXJvX2ZyYWNjaW9uIC50aWNrZXRfZnJhY2Npb24gaDUge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyAudGlja2V0X2VudGVyb19mcmFjY2lvbiAudGlja2V0X2ZyYWNjaW9uIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9kZXJlY2hvIC50aWNrZXRfZW50ZXJvX2ZyYWNjaW9uIC50aWNrZXRfZnJhY2Npb24gZGl2IHAge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAudGlja2V0X2VudGVybyBkaXYgcCB7XG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/venta.service */ 3630);




class TicketVentasComponent {
  constructor(lotteryService) {
    this.lotteryService = lotteryService;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n  background-color: #04b865;\n  box-sizing: border-box;\n  position: relative;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .combinacion[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  top: 20px;\n  right: 20px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  top: 110px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 50px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJXO0VBY1gseUJBZFc7RUFlWCxzQkFBQTtFQUNBLGtCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxtQ0FoQ2U7QUEwQm5CO0FBUUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQU5KO0FBT0k7RUFDRSxtQ0F4Q2E7RUF5Q2IsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBTE47QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlHQUFBO0VBRUEsMkJBQUE7QUFQSjtBQVNFO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBUEo7QUFVQTtFQUVJO0lBQ0UsZUFBQTtFQVJKO0VBVUU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQVJKO0FBQ0Y7QUFXQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBVko7QUFDRiIsImZpbGUiOiJ0aWNrZXQtdmVudGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG5cclxuLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXItd2lkdGg6IDFweCAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcG96bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb21iaW5hY2lvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICB9XHJcbiAgLmZyYWN0aW9uc0JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5mcmFjY2lvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTYlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZy50cmFzaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpXHJcbiAgICAgIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoMTA5JSk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIGltZy50cmFzaDpob3ZlciB7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIGltZy5sb2dvVGlja2V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0b3A6IDExMHB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpbWcubG9nb1RpY2tldCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDUwcHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
        this.mascota = '01';
    }
    ngOnInit() {
        let data = JSON.parse(localStorage.getItem('pozoMillonarioUltimoResultado'));
        this.ticketNumbers = data.ultimoResultadoPozo.combinacion2.match(/.{1,2}/g);
        this.mascota = data.mascota;
        console.log();
        this.mascotaPath = this.consulta.obtenerMascota(this.mascota);
        this.ticketGanador = {
            ticketIndex: data.ultimoResultadoPozo.codigo,
            description: 'Boleto Ganador',
            ticketNumbers: this.ticketNumbers,
            mascota: this.mascota,
            numeroSorteo: data.numeroSorteo,
            codigo: data.ultimoResultadoPozo.codigo,
            sorteo: data.sorteo,
            valorPremio: data.premioPrincipal.valorPremio,
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
    } }, directives: [_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_1__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  margin-top: -20px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n  visibility: hidden;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #04b865;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  background-color: #c3c3c3;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: space-evenly;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .arriba[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 3px;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  background-color: #fff;\n  color: #444;\n  margin-right: 4px;\n  font-family: \"Monstserrat Regular\";\n  font-size: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 70px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  background-color: #fff;\n  padding: 5px 30px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .abajo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  width: 25%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px 30px;\n  background-color: #04b865;\n  border: 1px solid #04b865;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #04b865;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0U7RUFDRSxZQUFBO0VBQ0EsK0JBWFk7RUFZWixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUFUSjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFUSjtBQVdJO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBVEo7QUFXSTtFQUNFLFNBQUE7RUFDQSwrQkFsQ1U7RUFtQ1Ysa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVE47QUFhRTtFQUNFLFVBQUE7RUFDQSxxQkF2Q1M7QUE0QmI7QUFjRTtFQUNFLGNBQUE7RUFVQTs7O1NBQUE7QUFsQko7QUFVSTtFQUNFLHdCQUFBO0FBUk47QUFXSTtFQUNFLFdBQUE7QUFUTjtBQWlCSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWZOO0FBa0JJO0VBQ0UsbUJBQUE7QUFoQk47QUFtQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBakJOO0FBbUJNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBakJSO0FBbUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWpCVjtBQW1CVTtFQUNFLG1DQTVGTztFQTZGUCxlQUFBO0VBQ0Esa0JBQUE7QUFqQlo7QUFvQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQWxCWjtBQW9CWTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQWpIRztFQWtISCxlQUFBO0FBbEJkO0FBdUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBckJWO0FBdUJVO0VBQ0Usa0JBQUE7QUFyQlo7QUF1Qlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXJCZDtBQXlCVTtFQUNFLGFBQUE7QUF2Qlo7QUF5Qlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUF2QmQ7QUF5QmM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXZCaEI7QUE4Qk07RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQTVCUjtBQThCUTtFQUNFLFdBQUE7QUE1QlY7QUFrQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQ0o7QUFrQ0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFHQSx5QkE1S087RUE4S1AseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBbkxXO0VBb0xYLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBbkNOO0FBcUNNO0VBQ0Usc0JBQUE7RUFFQSxjQTFMSztBQXNKYiIsImZpbGUiOiJ1bHRpbW8tcmVzdWx0YWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG4vLyRjb2xvci1wb3pvOiAjMDU3MzMzO1xyXG5cclxuLmNvbnRlbmVkb3JfdGlja2V0IHtcclxuICAudGV4dG8ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcblxyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAubG9nb190aWNrZXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjppbmNyZW1lbnQsXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgIC5jb250ZW5lZG9yX251bWVyb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLmFycmliYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcclxuXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hYmFqbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgLmNvbnRlbmVkb3JfbG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbmVkb3JfaW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAuY29udGVuaWRvIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbmVkb3JfY29kaWdvX2JhcnJhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3Rvbl9jb21wcmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG5cclxuICAgICAgLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAvL2NvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json'); //let endpoint = "/inquiry";

      let endpoint = '/cache';
      var address = '/pozo';
      endpoint = `${endpoint}/sorteosJugados`;
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.get(address, {
          headers: headers
        }).subscribe(data => {
          let sorteosJugados = data.values;
          sorteosJugados.sort(_this.ordenaSorteos);
          sorteosJugados = _this.limpiaSorteosDeMasDe3Meses(sorteosJugados);
          resolve(sorteosJugados);
        });
      });
    })();
  }

  limpiaSorteosDeMasDe3Meses(sorteos) {
    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 90));
    return sorteos.filter(sorteo => {
      let fechaSorteo = new Date(sorteo.fecha.split(' ')[0].split('/').reverse().join('-'));
      console.log(minDate.getTime(), fechaSorteo.getTime());
      return fechaSorteo.getTime() >= minDate.getTime();
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
    let address = '/pozo';
    endpoint = `${endpoint}/ganador`;
    address = this.mySource + address + endpoint;
    let body = {
      sorteo,
      combinaciones
    };
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
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        let boletoGanador = data;
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
    console.log(mascota);

    switch (mascota) {
      case '04':
        mascotaPath = 'assets/mascotas/Delfin.png';
        break;

      case '02':
        mascotaPath = 'assets/mascotas/Perro.png';
        break;

      case '08':
        mascotaPath = 'assets/mascotas/Llama.png';
        break;

      case '09':
        mascotaPath = 'assets/mascotas/Papagayo.png';
        break;

      case '01':
        mascotaPath = 'assets/mascotas/Conejo.png';
        break;

      case '10':
        mascotaPath = 'assets/mascotas/Mono.png';
        break;

      case '03':
        mascotaPath = 'assets/mascotas/Galapago.png';
        break;

      case '05':
        mascotaPath = 'assets/mascotas/Foca.png';
        break;

      case '06':
        mascotaPath = 'assets/mascotas/Condor.png';
        break;

      case '07':
        mascotaPath = 'assets/mascotas/Iguana.png';
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
            case '04':
                mascotaPath = 'assets/mascotas/Delfin.png';
                break;
            case '02':
                mascotaPath = 'assets/mascotas/Perro.png';
                break;
            case '08':
                mascotaPath = 'assets/mascotas/Llama.png';
                break;
            case '09':
                mascotaPath = 'assets/mascotas/Papagayo.png';
                break;
            case '01':
                mascotaPath = 'assets/mascotas/Conejo.png';
                break;
            case '10':
                mascotaPath = 'assets/mascotas/Mono.png';
                break;
            case '03':
                mascotaPath = 'assets/mascotas/Galapago.png';
                break;
            case '05':
                mascotaPath = 'assets/mascotas/Foca.png';
                break;
            case '06':
                mascotaPath = 'assets/mascotas/Condor.png';
                break;
            case '07':
                mascotaPath = 'assets/mascotas/Iguana.png';
                break;
            default:
                break;
        }
        return mascotaPath;
    }
    obtenerAnimalesSelecionados() {
        this.animales = [
            {
                ruta: 'assets/mascotas/Condor.png',
                identificador: '06',
                nombre: 'Cóndor',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Iguana.png',
                identificador: '07',
                nombre: 'Iguana',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Conejo.png',
                identificador: '01',
                nombre: 'Conejo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Delfin.png',
                identificador: '04',
                nombre: 'Delfín',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Galapago.png',
                identificador: '03',
                nombre: 'Galápago',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Llama.png',
                identificador: '08',
                nombre: 'Llama',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Mono.png',
                identificador: '10',
                nombre: 'Mono',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Papagayo.png',
                identificador: '09',
                nombre: 'Papagayo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Perro.png',
                identificador: '02',
                nombre: 'Perro',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Foca.png',
                identificador: '05',
                nombre: 'Foca',
                status: false,
            },
        ];
        localStorage.setItem('animalesSeleccionados', JSON.stringify(this.animales));
    }
    obtenerCaracteristicasDeMascota(mascota) {
        let animales = [
            {
                ruta: 'assets/mascotas/Condor.png',
                identificador: '06',
                nombre: 'Cóndor',
            },
            {
                ruta: 'assets/mascotas/Iguana.png',
                identificador: '07',
                nombre: 'Iguana',
            },
            {
                ruta: 'assets/mascotas/Conejo.png',
                identificador: '01',
                nombre: 'Conejo',
            },
            {
                ruta: 'assets/mascotas/Delfin.png',
                identificador: '04',
                nombre: 'Delfín',
            },
            {
                ruta: 'assets/mascotas/Galapago.png',
                identificador: '03',
                nombre: 'Galápago',
            },
            {
                ruta: 'assets/mascotas/Llama.png',
                identificador: '08',
                nombre: 'Llama',
            },
            {
                ruta: 'assets/mascotas/Mono.png',
                identificador: '10',
                nombre: 'Mono',
            },
            {
                ruta: 'assets/mascotas/Papagayo.png',
                identificador: '09',
                nombre: 'Papagayo',
            },
            {
                ruta: 'assets/mascotas/Perro.png',
                identificador: '02',
                nombre: 'Perro',
            },
            {
                ruta: 'assets/mascotas/Foca.png',
                identificador: '05',
                nombre: 'Foca',
            },
        ];
        let aux = animales.find((x) => x.identificador === mascota);
        return aux;
    }
    obtenerAnimalesTabs() {
        this.animalesTabs = [];
        localStorage.setItem('animalesTabs', JSON.stringify(this.animalesTabs));
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _positioning_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../positioning.directive */ 1343);



class ErrorComponent {
    constructor() {
        this.msg = "";
        this.title = "ERROR";
        this.closeError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.msg = this.msg.replace(/^\:/, "");
    }
    close() {
        this.closeError.emit("Cerrando error");
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { msg: "msg", title: "title" }, outputs: { closeError: "closeError" }, decls: 12, vars: 3, consts: [[1, "blackBox", 3, "click"], ["floatingItem", "", 1, "logBox", 3, "offset"], [1, "closeButton"], [1, "closeB", 3, "click"], [1, "errorHeader"], [1, "errorContent"], ["type", "button", 1, "formButton", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_9_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CERRAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("offset", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.msg);
    } }, directives: [_positioning_directive__WEBPACK_IMPORTED_MODULE_0__.PositioningDirective], styles: [".logBox[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 3px;\n  max-height: 80%;\n  z-index: 100000;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  overflow: hidden;\n  width: 50%;\n  left: 50%;\n  top: 230px;\n  transform: translateX(-50%);\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.formButton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 52px;\n  color: white;\n  background-color: red;\n  margin: auto;\n  margin-top: 5px;\n  margin-bottom: 23px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: red;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.formButton[_ngcontent-%COMP%]:hover {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]:active {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-size: 23px;\n  font-weight: bold;\n  width: 100%;\n  text-decoration: none !important;\n}\n\n.formButton[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.closeButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 23px;\n  height: 23px;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  color: white;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: red;\n}\n\n.errorHeader[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 23px;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n  margin: 0;\n  text-align: center;\n}\n\n.errorContent[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n  padding-top: 42px;\n  padding-bottom: 42px;\n  margin: 0;\n  text-align: center;\n}\n\n@media screen and (max-width: 1000px) {\n  .logBox[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ0JveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG4gIHotaW5kZXg6IDEwMDAwMDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMjMwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uYmxhY2tCb3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA4MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtQnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxuICBib3JkZXItY29sb3I6IHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybUJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm1CdXR0b246YWN0aXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybUJ1dHRvbiBwIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm1CdXR0b246aG92ZXIgcCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJ1dHRvbkJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbiAuY2xvc2VCIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsb3NlQnV0dG9uIC5jbG9zZUI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvckhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yQ29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLXRvcDogNDJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubG9nQm94IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
    } }, styles: [".loadBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadIcon[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadLogo[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.loadBox[_ngcontent-%COMP%]   .loadText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #29352f;\n  text-align: center;\n  width: 100%;\n  white-space: nowrap;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 20px;\n}\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n@media screen and (max-width: 1000px) {\n  .loadBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadIcon[_ngcontent-%COMP%] {\n    width: 50%;\n    height: auto;\n  }\n  .loadBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .loadLogo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .loadBox[_ngcontent-%COMP%]   .loadText[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7QUFFUjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUFBTjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQURKO0FBS0U7RUFFRTtJQUNFLFVBQUE7RUFISjtFQUtJO0lBQ0UsWUFBQTtFQUhOO0VBSU07SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQUZSO0VBSU07SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUZSO0VBTUk7SUFDRSxtQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRCb3gge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIFxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAubG9hZEljb24ge1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2FkTG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5sb2FkVGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMjkzNTJmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgLmJsYWNrQm94IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDgwMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIFxyXG4gICAgLmxvYWRCb3gge1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC5sb2FkSWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZExvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmxvYWRUZXh0IHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIFxyXG4gIH0iXX0= */"] });


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

/***/ 1343:
/*!*************************************************!*\
  !*** ./src/app/shared/positioning.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositioningDirective": () => (/* binding */ PositioningDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PositioningDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    handleScroll(e) {
        let data = e.data.top ? e.data.top : 120;
        //this.offset + this.el.nativeElement.offsetHeight / 2;
        let position = Math.min(data - this.offset, e.target.innerHeight - this.offset);
        position = position > 0 ? position : 0;
        this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
        this.renderer.setStyle(this.el.nativeElement, 'max-height', `${e.data.screen}px`);
    }
    ngOnInit() { }
}
PositioningDirective.ɵfac = function PositioningDirective_Factory(t) { return new (t || PositioningDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
PositioningDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PositioningDirective, selectors: [["", "floatingItem", ""]], hostBindings: function PositioningDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("message", function PositioningDirective_message_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { offset: "offset" } });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader/loader.component */ 605);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error/error.component */ 3772);
/* harmony import */ var _style_paginator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-paginator.directive */ 6560);
/* harmony import */ var _autotab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autotab.directive */ 3444);
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/paginate.pipe */ 2343);
/* harmony import */ var _paginacion_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginacion-es */ 3359);
/* harmony import */ var _positioning_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positioning.directive */ 1343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorIntl,
            useValue: (0,_paginacion_es__WEBPACK_IMPORTED_MODULE_5__.getSpanishPaginatorIntl)(),
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent,
        _style_paginator_directive__WEBPACK_IMPORTED_MODULE_2__.StylePaginatorDirective,
        _autotab_directive__WEBPACK_IMPORTED_MODULE_3__.AutoTabDirective,
        _positioning_directive__WEBPACK_IMPORTED_MODULE_6__.PositioningDirective,
        _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule], exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent,
        _style_paginator_directive__WEBPACK_IMPORTED_MODULE_2__.StylePaginatorDirective,
        _autotab_directive__WEBPACK_IMPORTED_MODULE_3__.AutoTabDirective,
        _positioning_directive__WEBPACK_IMPORTED_MODULE_6__.PositioningDirective,
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