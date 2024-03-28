"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["src_app_admin_codigos-promocionales_codigos-promocionales_module_ts"],{

/***/ 7418:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/codigos-promocionales/codigos-promocionales-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesRoutingModule": () => (/* binding */ CodigosPromocionalesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigos-promocionales.component */ 8816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesComponent }];
class CodigosPromocionalesRoutingModule {
}
CodigosPromocionalesRoutingModule.ɵfac = function CodigosPromocionalesRoutingModule_Factory(t) { return new (t || CodigosPromocionalesRoutingModule)(); };
CodigosPromocionalesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CodigosPromocionalesRoutingModule });
CodigosPromocionalesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CodigosPromocionalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8816:
/*!********************************************************************************!*\
  !*** ./src/app/admin/codigos-promocionales/codigos-promocionales.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesComponent": () => (/* binding */ CodigosPromocionalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CodigosPromocionalesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CodigosPromocionalesComponent.ɵfac = function CodigosPromocionalesComponent_Factory(t) { return new (t || CodigosPromocionalesComponent)(); };
CodigosPromocionalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodigosPromocionalesComponent, selectors: [["app-codigos-promocionales"]], decls: 2, vars: 0, template: function CodigosPromocionalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "codigos-promocionales works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RpZ29zLXByb21vY2lvbmFsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1986:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/codigos-promocionales/codigos-promocionales.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigosPromocionalesModule": () => (/* binding */ CodigosPromocionalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigos-promocionales-routing.module */ 7418);
/* harmony import */ var _codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigos-promocionales.component */ 8816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class CodigosPromocionalesModule {
}
CodigosPromocionalesModule.ɵfac = function CodigosPromocionalesModule_Factory(t) { return new (t || CodigosPromocionalesModule)(); };
CodigosPromocionalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CodigosPromocionalesModule });
CodigosPromocionalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CodigosPromocionalesModule, { declarations: [_codigos_promocionales_component__WEBPACK_IMPORTED_MODULE_1__.CodigosPromocionalesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _codigos_promocionales_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigosPromocionalesRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_codigos-promocionales_codigos-promocionales_module_ts.js.map