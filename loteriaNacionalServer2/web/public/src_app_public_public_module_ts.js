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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ventas_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ventas/components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consultas/components/ultimos-resultados/ultimos-resultados.component */ 7403);



class PublicComponent {
    constructor() {
        this.ventasLink = 'https://www.loteria.com.ec/#/loteria/compra_tus_juegos';
        this.consultasLink = '/consultas/loteria';
        this.juegosLink = 'https://www.loteria.com.ec/#/juego';
        this.puntosDeLaSuerteLink = 'https://www.loteria.com.ec/#/contenido/puntos-suerte';
    }
    ngOnInit() { }
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) { return new (t || PublicComponent)(); };
PublicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublicComponent, selectors: [["app-public"]], decls: 12, vars: 5, consts: [["id", "desktopLanding"], [3, "home"], ["id", "mobileLanding"], ["target", "_parent", 1, "landingButton", "compras", 3, "href"], ["src", "assets/img/box01.png", "alt", ""], ["target", "_parent", 1, "landingButton", "consulta", 3, "href"], ["src", "assets/img/box02.png", "alt", ""], ["target", "_parent", 1, "landingButton", "juegos", 3, "href"], ["src", "assets/img/box03.png", "alt", ""], ["target", "_parent", 1, "landingButton", "suerte", 3, "href"], ["src", "assets/img/box04.png", "alt", ""]], template: function PublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ventas-menu-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "consultas-ultimos-resultados");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("home", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.ventasLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.consultasLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.juegosLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.puntosDeLaSuerteLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_ventas_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__.MenuHeaderComponent, _consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_1__.UltimosResultadosComponent], styles: ["#desktopLanding[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n#mobileLanding[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 778px) {\n  #desktopLanding[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #mobileLanding[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%] {\n    width: 45vw;\n    height: 45vw;\n    margin: 20px 0;\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.compras[_ngcontent-%COMP%] {\n    background: #27a9e1;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.compras[_ngcontent-%COMP%]   img.loteria[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.compras[_ngcontent-%COMP%]   img.carrito[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.consulta[_ngcontent-%COMP%] {\n    background: #d12a2a;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.juegos[_ngcontent-%COMP%] {\n    background: #021151;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.juegos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #mobileLanding[_ngcontent-%COMP%]   .landingButton.suerte[_ngcontent-%COMP%] {\n    background: #005490;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjs7RUFDQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQUVGO0VBREU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFHSjtFQUZJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFJTjtFQUZJO0lBQ0UsWUFBQTtFQUlOO0VBRkk7SUFDRSxtQkFBQTtFQUlOO0VBSE07SUFDRSxVQUFBO0VBS1I7RUFITTtJQUNFLFVBQUE7RUFLUjtFQUZJO0lBQ0UsbUJBQUE7RUFJTjtFQUZJO0lBSUUsbUJBQUE7RUFDTjtFQUpNO0lBQ0UsV0FBQTtFQU1SO0VBRkk7SUFDRSxtQkFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoicHVibGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiNkZXNrdG9wTGFuZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbW9iaWxlTGFuZGluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzhweCkge1xuICAjZGVza3RvcExhbmRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI21vYmlsZUxhbmRpbmcge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAubGFuZGluZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogNDV2dztcbiAgICAgIGhlaWdodDogNDV2dztcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgICYuY29tcHJhcyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyN2E5ZTE7XG4gICAgICAgIGltZy5sb3RlcmlhIHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIGltZy5jYXJyaXRvIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmNvbnN1bHRhIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2QxMmEyYTtcbiAgICAgIH1cbiAgICAgICYuanVlZ29zIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDIxMTUxO1xuICAgICAgfVxuICAgICAgJi5zdWVydGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1NDkwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-routing.module */ 5701);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public.component */ 9703);
/* harmony import */ var _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consultas/consultas.module */ 8001);
/* harmony import */ var _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ventas/ventas.module */ 5268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class PublicModule {
}
PublicModule.ɵfac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_2__.ConsultasModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__.VentasModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_public_component__WEBPACK_IMPORTED_MODULE_1__.PublicComponent], imports: [_public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_2__.ConsultasModule,
        _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_3__.VentasModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_public_public_module_ts.js.map