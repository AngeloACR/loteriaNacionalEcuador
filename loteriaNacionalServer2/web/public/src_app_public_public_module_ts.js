"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["src_app_public_public_module_ts"],{

/***/ 5701:
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoutingModule": () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.component */ 9703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _public_component__WEBPACK_IMPORTED_MODULE_0__.PublicComponent },
    { path: ':token', component: _public_component__WEBPACK_IMPORTED_MODULE_0__.PublicComponent },
];
class PublicRoutingModule {
}
PublicRoutingModule.ɵfac = function PublicRoutingModule_Factory(t) { return new (t || PublicRoutingModule)(); };
PublicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PublicRoutingModule });
PublicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9703:
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicComponent": () => (/* binding */ PublicComponent)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ventas_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ventas/services/ventas.service */ 1987);
/* harmony import */ var _consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consultas/components/ultimos-resultados/ultimos-resultados.component */ 7403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/error/error.component */ 3772);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 605);









function PublicComponent_app_error_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeError", function PublicComponent_app_error_14_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("msg", ctx_r0.errorMessage)("title", ctx_r0.errorTitle);
  }
}

function PublicComponent_app_loader_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 14);
  }
}

class PublicComponent {
  constructor(actRoute, ventas) {
    this.actRoute = actRoute;
    this.ventas = ventas;
    this.ventasLink = '/compra_tus_juegos';
    this.consultasLink = '/consultas/loteria';
    this.juegosLink = 'https://www.loteria.com.ec/#/juegos';
    this.isLoading = false;
    this.puntosDeLaSuerteLink = 'https://www.loteria.com.ec/#/contenido/puntos-suerte';
    this.isError = false;
    this.isLoading = true;
    this.actRoute.params.subscribe(params => {
      this.token = params['token'];
      this.ventasLink = `${this.ventasLink}/${this.token}`;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.isLoading = true;

        if (_this.token) {
          let data = yield _this.ventas.authUser(_this.token);
        }

        _this.isLoading = false;
      } catch (error) {
        _this.isLoading = false;

        _this.openError(error.message, "Error");
      }
    })();
  }

  checkToken(e) {
    if (!this.token) {
      e.stopPropagation();
      e.preventDefault();
      this.authError();
      return;
    }
  }

  authError() {
    this.openError('Por favor, para poder comprar tu boleto preferido, deberás iniciar sesión en tu cuenta', 'Aviso');
  }

  openError(msg, title) {
    this.errorTitle = title.toUpperCase();
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

}

PublicComponent.ɵfac = function PublicComponent_Factory(t) {
  return new (t || PublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ventas_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService));
};

PublicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PublicComponent,
  selectors: [["app-public"]],
  decls: 16,
  vars: 6,
  consts: [["id", "desktopLanding"], [1, "separador"], ["id", "mobileLanding"], ["target", "_parent", 1, "landingButton", "compras", 3, "href", "click"], ["src", "assets/img/webicon01.png", "alt", ""], ["target", "_parent", 1, "landingButton", "consulta", 3, "href"], ["src", "assets/img/webicon02.png", "alt", ""], ["target", "_parent", 1, "landingButton", "juegos", 3, "href"], ["src", "assets/img/webicon03.png", "alt", ""], ["target", "_parent", 1, "landingButton", "suerte", 3, "href"], ["src", "assets/img/webicon04.png", "alt", ""], [3, "msg", "title", "closeError", 4, "ngIf"], ["loader", "loteria", 4, "ngIf"], [3, "msg", "title", "closeError"], ["loader", "loteria"]],
  template: function PublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "CONSULTAR RESULTADOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "consultas-ultimos-resultados");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PublicComponent_Template_a_click_6_listener($event) {
        return ctx.checkToken($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PublicComponent_app_error_14_Template, 1, 2, "app-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PublicComponent_app_loader_15_Template, 1, 0, "app-loader", 12);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.ventasLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.consultasLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.juegosLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.puntosDeLaSuerteLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_2__.UltimosResultadosComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
  styles: ["#desktopLanding[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#desktopLanding[_ngcontent-%COMP%]   .separador[_ngcontent-%COMP%] {\n  margin: auto;\n  border-bottom: 1px solid #021151;\n  width: 100%;\n  margin: 23px 0;\n}\n#desktopLanding[_ngcontent-%COMP%]   .separador[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #021151;\n  margin: 0;\n}\n#mobileLanding[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 778px) {\n  #desktopLanding[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #mobileLanding[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%] {\n    width: 45vw;\n    height: 45vw;\n    margin: 20px 0;\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FBQ047QUFHQTtFQUNFLGFBQUE7QUFBRjtBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFFRjtFQURFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBR0o7RUFGSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBSU47RUFGSTtJQUNFLFlBQUE7RUFJTjtBQUNGIiwiZmlsZSI6InB1YmxpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuI2Rlc2t0b3BMYW5kaW5nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnNlcGFyYWRvciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAyMTE1MTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyM3B4IDA7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAjMDIxMTUxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiNtb2JpbGVMYW5kaW5nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3OHB4KSB7XHJcbiAgI2Rlc2t0b3BMYW5kaW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNtb2JpbGVMYW5kaW5nIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC5sYW5kaW5nQnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgIGhlaWdodDogNDV2dztcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 1627:
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicModule": () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-routing.module */ 5701);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public.component */ 9703);
/* harmony import */ var _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consultas/consultas.module */ 8001);
/* harmony import */ var _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ventas/ventas.module */ 5268);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class PublicModule {
}
PublicModule.ɵfac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_2__.ConsultasModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__.VentasModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_public_component__WEBPACK_IMPORTED_MODULE_1__.PublicComponent], imports: [_public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_2__.ConsultasModule,
        _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__.VentasModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_public_public_module_ts.js.map