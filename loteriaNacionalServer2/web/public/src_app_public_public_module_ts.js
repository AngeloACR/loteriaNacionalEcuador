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
    /*   {
        path: 'consultas',
        loadChildren: () =>
          import('../consultas/consultas.module').then((m) => m.ConsultasModule),
      },
      {
        path: 'compra_tus_juegos',
        loadChildren: () =>
          import('../ventas/ventas.module').then((m) => m.VentasModule),
      }, */
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ventas_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ventas/components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consultas/components/ultimos-resultados/ultimos-resultados.component */ 7403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/error/error.component */ 3772);






function PublicComponent_app_error_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("closeError", function PublicComponent_app_error_18_Template_app_error_closeError_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.closeError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("msg", ctx_r0.errorMessage)("title", ctx_r0.errorTitle);
} }
class PublicComponent {
    constructor(actRoute) {
        this.actRoute = actRoute;
        this.ventasLink = '/compra_tus_juegos';
        this.consultasLink = '/consultas/loteria';
        this.juegosLink = 'https://www.loteria.com.ec/#/juegos';
        this.puntosDeLaSuerteLink = 'https://www.loteria.com.ec/#/contenido/puntos-suerte';
        this.isError = false;
        this.actRoute.params.subscribe((params) => {
            this.token = params['token'];
        });
    }
    ngOnInit() {
        this.ventasLink = `${this.ventasLink}/${this.token}`;
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
PublicComponent.ɵfac = function PublicComponent_Factory(t) { return new (t || PublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
PublicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PublicComponent, selectors: [["app-public"]], decls: 19, vars: 6, consts: [["id", "desktopLanding"], [1, "separador"], [3, "home"], ["id", "mobileLanding"], ["target", "_parent", 1, "landingButton", "compras", 3, "href", "click"], ["src", "assets/img/webicon01.png", "alt", ""], ["target", "_parent", 1, "landingButton", "consulta", 3, "href"], ["src", "assets/img/webicon02.png", "alt", ""], ["target", "_parent", 1, "landingButton", "juegos", 3, "href"], ["src", "assets/img/webicon03.png", "alt", ""], ["target", "_parent", 1, "landingButton", "suerte", 3, "href"], ["src", "assets/img/webicon04.png", "alt", ""], [3, "msg", "title", "closeError", 4, "ngIf"], [3, "msg", "title", "closeError"]], template: function PublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "COMPRAR BOLETO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ventas-menu-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "CONSULTAR RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "consultas-ultimos-resultados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PublicComponent_Template_a_click_10_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PublicComponent_app_error_18_Template, 1, 2, "app-error", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("home", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.ventasLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.consultasLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.juegosLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.puntosDeLaSuerteLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_ventas_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__.MenuHeaderComponent, _consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_1__.UltimosResultadosComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent], styles: ["#desktopLanding[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#desktopLanding[_ngcontent-%COMP%]   .separador[_ngcontent-%COMP%] {\n  margin: auto;\n  border-bottom: 1px solid #021151;\n  width: 92%;\n}\n#desktopLanding[_ngcontent-%COMP%]   .separador[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #021151;\n  margin: 0;\n}\n#mobileLanding[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 778px) {\n  #desktopLanding[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #mobileLanding[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%] {\n    width: 45vw;\n    height: 45vw;\n    margin: 20px 0;\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFBSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUFDTjtBQUdBO0VBQ0UsYUFBQTtBQUFGO0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjs7RUFDQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQUVGO0VBREU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFHSjtFQUZJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFJTjtFQUZJO0lBQ0UsWUFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoicHVibGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiNkZXNrdG9wTGFuZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5zZXBhcmFkb3Ige1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAyMTE1MTtcbiAgICB3aWR0aDogOTIlO1xuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjMDIxMTUxO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuI21vYmlsZUxhbmRpbmcge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc4cHgpIHtcbiAgI2Rlc2t0b3BMYW5kaW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNtb2JpbGVMYW5kaW5nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLmxhbmRpbmdCdXR0b24ge1xuICAgICAgd2lkdGg6IDQ1dnc7XG4gICAgICBoZWlnaHQ6IDQ1dnc7XG4gICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xufVxuIl19 */"] });


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