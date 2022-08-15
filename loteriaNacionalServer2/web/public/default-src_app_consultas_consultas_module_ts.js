"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["default-src_app_consultas_consultas_module_ts"],{

/***/ 4709:
/*!*************************************************************!*\
  !*** ./src/app/consultas/components/menu/menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["consultas-menu"]], decls: 12, vars: 0, consts: [[1, "resultBox"], ["routerLink", "/consultas/loteria", "routerLinkActive", "active loteria"], ["routerLink", "/consultas/lotto", "routerLinkActive", "active lotto"], ["routerLink", "/consultas/pozo", "routerLinkActive", "active pozo"], ["routerLink", "/consultas/millonaria", "routerLinkActive", "active millonaria"], ["routerLink", "/compra_tus_juegos/", "routerLinkActive", "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOTERIA NACIONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOTTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "POZO MILLONARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LA MILLONARIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "COMPRA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".resultBox[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  font-family: \"Monstserrat Regular\";\n  margin-top: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  width: 18%;\n  height: 53px;\n  border: 1px solid #011689;\n  border-radius: 26px;\n  color: #011689;\n  text-decoration: none;\n  font-size: 16px;\n  padding: 7.9px 12px;\n  font-family: \"Monstserrat SemiBold\";\n  margin-right: 7px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  font-size: 20px;\n  text-transform: uppercase;\n  position: absolute;\n  right: 0;\n  text-decoration: underline;\n  font-weight: bold;\n  font-style: italic;\n}\n.resultBox[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  color: #fff;\n  border: none;\n}\n.resultBox[_ngcontent-%COMP%]   .loteria[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n}\n.resultBox[_ngcontent-%COMP%]   .lotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.resultBox[_ngcontent-%COMP%]   .pozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n.resultBox[_ngcontent-%COMP%]   .millonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n@media screen and (max-width: 1000px) {\n  .resultBox[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    margin-top: 20px;\n  }\n  .resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 150px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n  .resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n    right: unset;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQVplO0VBYWYsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBWUU7RUFDRSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBakNlO0VBa0NmLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFiSjtBQWNJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYk47QUFpQkU7RUFDRSx5QkFqRFc7RUFrRFgsV0FBQTtFQUNBLFlBQUE7QUFmSjtBQWtCRTtFQUNFLHlCQXZEVztBQXVDZjtBQW1CRTtFQUNFLHlCQTFEVTtBQXlDZDtBQW9CRTtFQUNFLHlCQTdEUztBQTJDYjtBQW9CRTtFQUNFLHlCQS9EZTtBQTZDbkI7QUFzQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7RUFuQkY7RUFvQkU7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtFQW5CSjtFQW9CSTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQWxCTjtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItYm90dG9uOiAjMjhhYWUxO1xuJGNvbG9yLWxvdHRvOiAjYjUxZjIwO1xuJGNvbG9yLXBvem86ICMwNGI4NjU7XG4kY29sb3ItbWlsbG9uYXJpYTogI2I1MWYyMDtcbi8vJGNvbG9yLXBvem86ICMwNTczMzM7XG5cbi5yZXN1bHRCb3gge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBhIHtcbiAgICAvKiBSZWN0YW5nbGUgNiAqL1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHdpZHRoOiAxOCU7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTE2ODk7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcblxuICAgIGNvbG9yOiAjMDExNjg5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogNy45cHggMTJweDtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgfVxuXG4gIC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmxvdGVyaWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gIH1cblxuICAubG90dG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgfVxuXG4gIC5wb3pvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgfVxuICAubWlsbG9uYXJpYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5yZXN1bHRCb3gge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5657:
/*!***********************************************************************!*\
  !*** ./src/app/consultas/components/resultado/resultado.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultadoComponent": () => (/* binding */ ResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function ResultadoComponent_div_1_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SERIE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ticket.serie);
} }
function ResultadoComponent_div_1_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FRACCI\u00D3N: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.valorFraccion, " ");
} }
function ResultadoComponent_div_1_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aplican descuentos en premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResultadoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Bienvenido al ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pa\u00EDs de los Ganadores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eres una persona afortunada, \u00A1acabas de ganar un premio!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SORTEO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "COMBINACI\u00D3N: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ResultadoComponent_div_1_p_19_Template, 4, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PREMIO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ENTERO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResultadoComponent_div_1_p_28_Template, 4, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ResultadoComponent_div_1_p_29_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " C\u00F3bralo en tu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Punto de la suerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " m\u00E1s cercano, desc\u00FAbrelo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "aqu\u00ED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ticket.combinacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tipoLoteria == 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nombrePremio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.valorPremio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tipoLoteria == 1 || ctx_r0.tipoLoteria == 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.descripcionDescuento != "");
} }
function ResultadoComponent_div_2_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SERIE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.ticket.serie);
} }
function ResultadoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "D\u00E9mosle otro intento,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A1hoy no has ganado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Esta vez tu boleto no tiene premio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SORTEO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "COMBINACI\u00D3N: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ResultadoComponent_div_2_p_19_Template, 4, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A1Sigue intent\u00E1ndolo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Gracias a tu compra contribuyes a la obra social de la Junta de Beneficencia de Guayaquil. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ticket.combinacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tipoLoteria == 14);
} }
class ResultadoComponent {
    constructor() {
        this.isLoteriaNacional = false;
    }
    ngOnInit() {
        this.sorteo = this.ticket.sorteo;
        let resultado = this.ticket.resultado;
        console.log(resultado);
        if (resultado.status) {
            this.description = `Boleto ganador`;
            this.valorPremio = this.formatNumber(resultado.data.premio.valorPremio);
            this.descripcionDescuento = resultado.data.premio.descripcionDescuento;
            if (this.isLoteriaNacional) {
                this.valorFraccion = this.formatNumber(resultado.data.premio.valorFraccion);
            }
            this.nombrePremio = resultado.data.premio.nombre;
        }
        else {
            this.description = "Boleto perdedor";
        }
    }
    formatNumber(number) {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        return formatter.format(number);
    }
}
ResultadoComponent.ɵfac = function ResultadoComponent_Factory(t) { return new (t || ResultadoComponent)(); };
ResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultadoComponent, selectors: [["consultas-resultado"]], inputs: { ticket: "ticket", tipoLoteria: "tipoLoteria", isLoteriaNacional: "isLoteriaNacional" }, decls: 3, vars: 2, consts: [[1, "resultadoBox"], ["class", "resultadoDetalles", 4, "ngIf"], [1, "resultadoDetalles"], ["src", "assets/ganadorbrillante.png", "alt", ""], [1, "detailBox"], ["src", "assets/ganadorpremio.png", "alt", ""], [1, "detailText"], [4, "ngIf"], ["href", "https://www.loteria.com.ec/puntos-de-la-suerte", "target", "_parent"]], template: function ResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultadoComponent_div_1_Template, 39, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultadoComponent_div_2_Template, 25, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticket.resultado.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ticket.resultado.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".resultadoBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  text-align: left;\n  font-size: 16px;\n  color: white;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 20px;\n  margin: auto;\n  align-self: center;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  margin: 0;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n@media screen and (max-width: 1000px) {\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFKRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSEo7QUFJSTtFQUNFLGtDQWJXO0VBY1gsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZOO0FBR007RUFDRSwrQkFwQlE7RUFxQlIsaUJBQUE7QUFEUjtBQUVRO0VBQ0UsV0FBQTtBQUFWO0FBR007RUFDRSxrQ0F6QlM7RUEwQlQsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRk47QUFHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRFI7QUFFUTtFQUNFLGtDQS9DTztFQWdEUCxlQUFBO0VBQ0EsU0FBQTtBQUFWO0FBQ1U7RUFDRSwrQkFyREk7RUFzREosaUJBQUE7QUFDWjtBQU9BO0VBR007SUFDRSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBTk47RUFPTTtJQUNFLG1CQUFBO0VBTFI7QUFDRiIsImZpbGUiOiJyZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4ucmVzdWx0YWRvQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIC5yZXN1bHRhZG9EZXRhbGxlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAuZGV0YWlsQm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5kZXRhaWxUZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnJlc3VsdGFkb0JveCB7XG4gICAgLnJlc3VsdGFkb0RldGFsbGVzIHtcbiAgICAgIC5kZXRhaWxCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC5kZXRhaWxUZXh0IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6825:
/*!*************************************************************************!*\
  !*** ./src/app/consultas/components/resultados/resultados.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultadosComponent": () => (/* binding */ ResultadosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resultado/resultado.component */ 5657);




function ResultadosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "consultas-resultado", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.loteriaBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ticket_r1)("tipoLoteria", ctx_r0.tipoLoteria)("isLoteriaNacional", ctx_r0.isLoteriaNacional);
} }
class ResultadosComponent {
    constructor() {
        this.isLoteriaNacional = false;
        this.isLotto = false;
        this.isPozoMillonario = false;
        this.tickets = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        switch (this.tipoLoteria) {
            case "1":
                this.loteriaBackground = {
                    backgroundLoteriaNacional: true,
                };
                break;
            case "2":
                this.loteriaBackground = {
                    backgroundLotto: true,
                };
                break;
            case "5":
                this.loteriaBackground = {
                    backgroundPozoMillonario: true,
                };
                break;
            case "14":
                this.loteriaBackground = {
                    backgroundLotto: true,
                };
                break;
        }
        this.resultados.forEach((resultado) => {
            let description;
            let ticket = {
                sorteo: resultado.sorteo,
                description,
                combinacion: resultado.combinacion,
                resultado,
            };
            if (this.tipoLoteria == "14") {
                ticket['serie'] = resultado.serie;
            }
            this.tickets.push(ticket);
        });
    }
    closeBox() {
        this.close.emit("");
    }
}
ResultadosComponent.ɵfac = function ResultadosComponent_Factory(t) { return new (t || ResultadosComponent)(); };
ResultadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResultadosComponent, selectors: [["consultas-resultados"]], inputs: { resultados: "resultados", tipoLoteria: "tipoLoteria", isLoteriaNacional: "isLoteriaNacional", isLotto: "isLotto", isPozoMillonario: "isPozoMillonario" }, outputs: { close: "close" }, decls: 3, vars: 1, consts: [[1, "blackBox", 3, "click"], [1, "resultsBox"], ["class", "resultBox", 4, "ngFor", "ngForOf"], [1, "resultBox"], [1, "messageBox", 3, "ngClass"], [3, "ticket", "tipoLoteria", "isLoteriaNacional"]], template: function ResultadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResultadosComponent_Template_div_click_0_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResultadosComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tickets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_0__.ResultadoComponent], styles: [".blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.resultsBox[_ngcontent-%COMP%] {\n  width: 40%;\n  max-height: 80%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: transparent;\n  z-index: 10000;\n}\n\n.resultBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resultBox[_ngcontent-%COMP%]   .messageBox[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 1px;\n  border-radius: 23px;\n}\n\n.closeBox[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  border-radius: 500px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: red;\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\n.closeBox[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.backgroundLoteriaNacional[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n}\n\n.backgroundLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundPozoMillonario[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n\n@media screen and (max-width: 1000px) {\n  .resultsBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGFkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUFJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVOOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7QUFFSjs7QUFBRTtFQUNFLHlCQUFBO0FBR0o7O0FBQUU7RUFDRTtJQUNFLFVBQUE7RUFHSjtBQUNGIiwiZmlsZSI6InJlc3VsdGFkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ibGFja0JveCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDgwMDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAucmVzdWx0c0JveCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleDogMTAwMDA7XG4gIH1cbiAgXG4gIC5yZXN1bHRCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5tZXNzYWdlQm94IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXJnaW46IDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgfVxuICB9XG4gIFxuICAuY2xvc2VCb3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAuY2xvc2VCb3g6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5iYWNrZ3JvdW5kTG90ZXJpYU5hY2lvbmFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBQUUxO1xuICB9XG4gIC5iYWNrZ3JvdW5kTG90dG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG4gIH1cbiAgLmJhY2tncm91bmRQb3pvTWlsbG9uYXJpbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0Yjg2NTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLnJlc3VsdHNCb3gge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 7403:
/*!*****************************************************************************************!*\
  !*** ./src/app/consultas/components/ultimos-resultados/ultimos-resultados.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimosResultadosComponent": () => (/* binding */ UltimosResultadosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/loteria/components/ultimo-resultado/ultimo-resultado.component */ 5832);
/* harmony import */ var _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/components/ultimo-resultado/ultimo-resultado.component */ 2092);
/* harmony import */ var _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../juegos/pozo/components/ultimo-resultado/ultimo-resultado.component */ 3809);
/* harmony import */ var _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component */ 4710);





class UltimosResultadosComponent {
    constructor() { }
    ngOnInit() {
    }
}
UltimosResultadosComponent.ɵfac = function UltimosResultadosComponent_Factory(t) { return new (t || UltimosResultadosComponent)(); };
UltimosResultadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UltimosResultadosComponent, selectors: [["consultas-ultimos-resultados"]], decls: 5, vars: 0, consts: [[1, "selectionBox"], [1, "selectorBox"]], template: function UltimosResultadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "loteria-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "lotto-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pozo-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "millonaria-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_0__.UltimoResultadoComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_2__.UltimoResultadoComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_3__.UltimoResultadoComponent], styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  background-color: white;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 24%;\n}\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltb3MtcmVzdWx0YWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDRSxVQUFBO0FBRU47QUFFRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUNKO0VBQUk7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InVsdGltb3MtcmVzdWx0YWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb25Cb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAyNCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuc2VsZWN0aW9uQm94IHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 7309:
/*!*******************************************************!*\
  !*** ./src/app/consultas/consultas-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasRoutingModule": () => (/* binding */ ConsultasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _consultas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultas.component */ 6261);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/home/home.component */ 58);
/* harmony import */ var _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/loteria-boletin/loteria-boletin.component */ 6504);
/* harmony import */ var _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/loteria/loteria.component */ 4002);
/* harmony import */ var _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/lotto-boletin/lotto-boletin.component */ 4625);
/* harmony import */ var _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/lotto/lotto.component */ 886);
/* harmony import */ var _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/millonaria-boletin/millonaria-boletin.component */ 5859);
/* harmony import */ var _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/millonaria/millonaria.component */ 7125);
/* harmony import */ var _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/pozo-boletin/pozo-boletin.component */ 6629);
/* harmony import */ var _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/pozo/pozo.component */ 1322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '',
        component: _consultas_component__WEBPACK_IMPORTED_MODULE_0__.ConsultasComponent,
        children: [
            {
                path: 'loteria/boletin/:sorteo',
                component: _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_2__.LoteriaBoletinComponent,
            },
            { path: 'lotto/boletin/:sorteo', component: _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_4__.LottoBoletinComponent },
            {
                path: 'pozo/boletin/:sorteo',
                component: _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_8__.PozoBoletinComponent,
            },
            {
                path: 'millonaria/boletin/:sorteo',
                component: _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_6__.MillonariaBoletinComponent,
            },
            { path: 'loteria', component: _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_3__.LoteriaComponent },
            { path: 'lotto', component: _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_5__.LottoComponent },
            {
                path: 'pozo',
                component: _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_9__.PozoComponent,
            },
            { path: 'millonaria', component: _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_7__.MillonariaComponent },
            { path: '', component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
        ],
    },
];
class ConsultasRoutingModule {
}
ConsultasRoutingModule.ɵfac = function ConsultasRoutingModule_Factory(t) { return new (t || ConsultasRoutingModule)(); };
ConsultasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ConsultasRoutingModule });
ConsultasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ConsultasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 6261:
/*!**************************************************!*\
  !*** ./src/app/consultas/consultas.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasComponent": () => (/* binding */ ConsultasComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_consultas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/consultas.service */ 8717);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 4709);
/* harmony import */ var _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ultimos-resultados/ultimos-resultados.component */ 7403);









function ConsultasComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Consultar otros resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "consultas-ultimos-resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ConsultasComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "consultas-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConsultasComponent_div_0_div_3_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.notHome);
  }
}

class ConsultasComponent {
  constructor(router, consultas) {
    this.router = router;
    this.consultas = consultas;
    this.infoReady = false;
    this.notHome = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.consultas.recuperarUltimosResultados();
      _this.infoReady = true;

      _this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
          let data = decodeURIComponent(event.url);

          if (data.includes('consultas') && data.split("/")[1].length) {
            _this.notHome = true;
          }
        }

        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {}

        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationError) {
          console.log(event.error);
        }
      });
    })();
  }

}

ConsultasComponent.ɵfac = function ConsultasComponent_Factory(t) {
  return new (t || ConsultasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_consultas_service__WEBPACK_IMPORTED_MODULE_1__.ConsultasService));
};

ConsultasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConsultasComponent,
  selectors: [["app-consultas"]],
  decls: 1,
  vars: 1,
  consts: [["class", "selectionBox", 4, "ngIf"], [1, "selectionBox"], ["class", "otros", 4, "ngIf"], [1, "otros"]],
  template: function ConsultasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ConsultasComponent_div_0_Template, 4, 1, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.infoReady);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_3__.UltimosResultadosComponent],
  styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(2, auto);\n}\n.selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%] {\n  display: none;\n}\n.selectionBox[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    \n    font-family: \"Helvetica\";\n    font-style: italic;\n    font-weight: 700;\n    margin-left: 20px;\n    font-size: 18px;\n    color: #021151 !important;\n    text-transform: uppercase;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFFSjtBQUNBO0VBRUk7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQUNKO0VBQ0k7SUFDRSxpQ0FBQTtJQUVBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImNvbnN1bHRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb25Cb3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xuICAub3Ryb3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbnRlbmVkb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuc2VsZWN0aW9uQm94IHtcbiAgICAub3Ryb3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaDMge1xuICAgICAgICAvKiBDb25zdWx0YSBwb3IgQm9sZXRvIHkgU29ydGVvICovXG5cbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMwMjExNTEgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 8001:
/*!***********************************************!*\
  !*** ./src/app/consultas/consultas.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasModule": () => (/* binding */ ConsultasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultas-routing.module */ 7309);
/* harmony import */ var _consultas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultas.component */ 6261);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 4709);
/* harmony import */ var _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resultado/resultado.component */ 5657);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resultados/resultados.component */ 6825);
/* harmony import */ var _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/loteria/loteria.component */ 4002);
/* harmony import */ var _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/pozo/pozo.component */ 1322);
/* harmony import */ var _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/lotto/lotto.component */ 886);
/* harmony import */ var _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/millonaria/millonaria.component */ 7125);
/* harmony import */ var _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ultimos-resultados/ultimos-resultados.component */ 7403);
/* harmony import */ var _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/loteria-boletin/loteria-boletin.component */ 6504);
/* harmony import */ var _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/lotto-boletin/lotto-boletin.component */ 4625);
/* harmony import */ var _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/pozo-boletin/pozo-boletin.component */ 6629);
/* harmony import */ var _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/millonaria-boletin/millonaria-boletin.component */ 5859);
/* harmony import */ var _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../juegos/loteria/loteria.module */ 8015);
/* harmony import */ var _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../juegos/lotto/lotto.module */ 3366);
/* harmony import */ var _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../juegos/pozo/pozo.module */ 458);
/* harmony import */ var _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../juegos/millonaria/millonaria.module */ 4181);
/* harmony import */ var _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ventas/ventas.module */ 5268);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/home/home.component */ 58);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2316);























class ConsultasModule {
}
ConsultasModule.ɵfac = function ConsultasModule_Factory(t) { return new (t || ConsultasModule)(); };
ConsultasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: ConsultasModule });
ConsultasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasRoutingModule,
            _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__.LoteriaModule,
            _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__.LottoModule,
            _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_16__.PozoModule,
            _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_17__.MillonariaModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_18__.VentasModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](ConsultasModule, { declarations: [_consultas_component__WEBPACK_IMPORTED_MODULE_1__.ConsultasComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_3__.ResultadoComponent,
        _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_4__.ResultadosComponent,
        _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__.LoteriaComponent,
        _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_6__.PozoComponent,
        _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_7__.LottoComponent,
        _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_8__.MillonariaComponent,
        _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_9__.UltimosResultadosComponent,
        _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_10__.LoteriaBoletinComponent,
        _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_11__.LottoBoletinComponent,
        _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_12__.PozoBoletinComponent,
        _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_13__.MillonariaBoletinComponent,
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasRoutingModule,
        _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__.LoteriaModule,
        _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__.LottoModule,
        _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_16__.PozoModule,
        _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_17__.MillonariaModule,
        _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_18__.VentasModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__.SharedModule], exports: [_consultas_component__WEBPACK_IMPORTED_MODULE_1__.ConsultasComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_3__.ResultadoComponent,
        _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_4__.ResultadosComponent,
        _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__.LoteriaComponent,
        _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_6__.PozoComponent,
        _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_7__.LottoComponent,
        _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_8__.MillonariaComponent,
        _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_9__.UltimosResultadosComponent,
        _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_10__.LoteriaBoletinComponent,
        _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_11__.LottoBoletinComponent,
        _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_12__.PozoBoletinComponent,
        _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_13__.MillonariaBoletinComponent,
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__.HomeComponent] }); })();


/***/ }),

/***/ 58:
/*!*************************************************************!*\
  !*** ./src/app/consultas/containers/home/home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ultimos-resultados/ultimos-resultados.component */ 7403);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["consultas-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "consultas-ultimos-resultados");
    } }, directives: [_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_0__.UltimosResultadosComponent], styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLFVBQUE7QUFFTjtBQUVFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBQ0o7RUFBSTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb25Cb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLnNlbGVjdGlvbkJveCB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgLnNlbGVjdG9yQm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 6504:
/*!***********************************************************************************!*\
  !*** ./src/app/consultas/containers/loteria-boletin/loteria-boletin.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoteriaBoletinComponent": () => (/* binding */ LoteriaBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_loteria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/loteria/components/boletin/boletin.component */ 6431);
/* harmony import */ var _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/loteria/components/ultimo-resultado/ultimo-resultado.component */ 5832);




class LoteriaBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(["/consultas/loteria"]);
    }
}
LoteriaBoletinComponent.ɵfac = function LoteriaBoletinComponent_Factory(t) { return new (t || LoteriaBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoteriaBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoteriaBoletinComponent, selectors: [["consultas-loteria-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function LoteriaBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "loteria-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "loteria-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoteriaBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VER M\u00C1S RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_loteria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #35aee2;\n    border: 1px solid #35aee2;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #35aee2;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztvQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQU1BO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEY7RUFLRTtJQUNFLGNBQUE7RUFISjs7RUFNQTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFIRjtFQUlFO0lBQ0UsV0FBQTtFQUZKO0VBSUU7SUFDRSxhQUFBO0VBRko7QUFDRiIsImZpbGUiOiJsb3RlcmlhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcbiAgICAgICAgZ2FwOiAzMHB4OyAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIC5jb25zdWx0YUJveCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5zZWxlY3RvckJveCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1hc1Jlc3VsdGFkb3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWFlZTI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM1YWVlMjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICMzNWFlZTI7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4002:
/*!*******************************************************************!*\
  !*** ./src/app/consultas/containers/loteria/loteria.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoteriaComponent": () => (/* binding */ LoteriaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_loteria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/loteria/components/consulta/consulta.component */ 3892);
/* harmony import */ var _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/loteria/components/ultimo-resultado/ultimo-resultado.component */ 5832);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);





function LoteriaComponent_div_3_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function LoteriaComponent_div_3_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function LoteriaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoteriaComponent_div_3_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class LoteriaComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        console.log(this.resultados);
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
LoteriaComponent.ɵfac = function LoteriaComponent_Factory(t) { return new (t || LoteriaComponent)(); };
LoteriaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoteriaComponent, selectors: [["consultas-loteria"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "1", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "1", 3, "isLoteriaNacional", "resultados", "close"]], template: function LoteriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "loteria-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resultados", function LoteriaComponent_Template_loteria_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "loteria-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoteriaComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_loteria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0FBREo7O0FBR0k7RUFDRSxVQUFBO0FBRE47O0FBSUk7RUFDRSxVQUFBO0FBRk47O0FBTUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoibG90ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuY29uc3VsdGFCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 4625:
/*!*******************************************************************************!*\
  !*** ./src/app/consultas/containers/lotto-boletin/lotto-boletin.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottoBoletinComponent": () => (/* binding */ LottoBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_lotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/lotto/components/boletin/boletin.component */ 5303);
/* harmony import */ var _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/components/ultimo-resultado/ultimo-resultado.component */ 2092);




class LottoBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    verMasResultados() {
        this.router.navigate(["/consultas/lotto"]);
    }
}
LottoBoletinComponent.ɵfac = function LottoBoletinComponent_Factory(t) { return new (t || LottoBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LottoBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LottoBoletinComponent, selectors: [["consultas-lotto-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function LottoBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "lotto-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "lotto-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LottoBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VER M\u00C1S RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_lotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0FBRko7QUFNQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQUhGO0VBS0U7SUFDRSxjQUFBO0VBSEo7O0VBTUE7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBSEY7RUFJRTtJQUNFLFdBQUE7RUFGSjtFQUlFO0lBQ0UsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoibG90dG8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICBnYXA6IDMwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgLmNvbnN1bHRhQm94IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnNlbGVjdG9yQm94IHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubWFzUmVzdWx0YWRvcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjUxZjIwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2I1MWYyMDtcbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLmNvbnN1bHRhQm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 886:
/*!***************************************************************!*\
  !*** ./src/app/consultas/containers/lotto/lotto.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottoComponent": () => (/* binding */ LottoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_lotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/lotto/components/consulta/consulta.component */ 2643);
/* harmony import */ var _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/components/ultimo-resultado/ultimo-resultado.component */ 2092);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);





function LottoComponent_div_3_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function LottoComponent_div_3_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("resultados", ctx_r1.resultados);
} }
function LottoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LottoComponent_div_3_consultas_resultados_1_Template, 1, 1, "consultas-resultados", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class LottoComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        console.log(this.resultados);
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
LottoComponent.ɵfac = function LottoComponent_Factory(t) { return new (t || LottoComponent)(); };
LottoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LottoComponent, selectors: [["consultas-lotto"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "2", 3, "resultados", "close", 4, "ngIf"], ["tipoLoteria", "2", 3, "resultados", "close"]], template: function LottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "lotto-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resultados", function LottoComponent_Template_lotto_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "lotto-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LottoComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_lotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURGOztBQUVFO0VBQ0UsVUFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRkY7RUFHRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBREo7RUFHRTtJQUNFLGFBQUE7RUFESjtBQUNGIiwiZmlsZSI6ImxvdHRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICAvKiBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgZ2FwOiAzMHB4OyAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAuY29uc3VsdGFCb3gge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cblxuICAuc2VsZWN0b3JCb3gge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 5859:
/*!*****************************************************************************************!*\
  !*** ./src/app/consultas/containers/millonaria-boletin/millonaria-boletin.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MillonariaBoletinComponent": () => (/* binding */ MillonariaBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_millonaria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/millonaria/components/boletin/boletin.component */ 7110);
/* harmony import */ var _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component */ 4710);




class MillonariaBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(['/consultas/millonaria']);
    }
}
MillonariaBoletinComponent.ɵfac = function MillonariaBoletinComponent_Factory(t) { return new (t || MillonariaBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
MillonariaBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MillonariaBoletinComponent, selectors: [["consultas-millonaria-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function MillonariaBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "millonaria-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "millonaria-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MillonariaBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VER M\u00C1S RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_millonaria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFVBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJtaWxsb25hcmlhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWFzUmVzdWx0YWRvcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUxZjIwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I1MWYyMDtcbiAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNiNTFmMjA7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIC5jb25zdWx0YUJveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnNlbGVjdG9yQm94IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 7125:
/*!*************************************************************************!*\
  !*** ./src/app/consultas/containers/millonaria/millonaria.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MillonariaComponent": () => (/* binding */ MillonariaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_millonaria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/millonaria/components/consulta/consulta.component */ 2705);
/* harmony import */ var _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component */ 4710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);





function MillonariaComponent_div_3_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function MillonariaComponent_div_3_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function MillonariaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MillonariaComponent_div_3_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class MillonariaComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        console.log(this.resultados);
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
MillonariaComponent.ɵfac = function MillonariaComponent_Factory(t) { return new (t || MillonariaComponent)(); };
MillonariaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MillonariaComponent, selectors: [["consultas-millonaria"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "14", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "14", 3, "isLoteriaNacional", "resultados", "close"]], template: function MillonariaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "millonaria-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resultados", function MillonariaComponent_Template_millonaria_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "millonaria-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MillonariaComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_millonaria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0FBREo7O0FBR0k7RUFDRSxVQUFBO0FBRE47O0FBSUk7RUFDRSxVQUFBO0FBRk47O0FBTUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoibWlsbG9uYXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuY29uc3VsdGFCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 6629:
/*!*****************************************************************************!*\
  !*** ./src/app/consultas/containers/pozo-boletin/pozo-boletin.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PozoBoletinComponent": () => (/* binding */ PozoBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_pozo_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pozo/components/boletin/boletin.component */ 9022);
/* harmony import */ var _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/pozo/components/ultimo-resultado/ultimo-resultado.component */ 3809);




class PozoBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    verMasResultados() {
        this.router.navigate(["/consultas/pozo"]);
    }
}
PozoBoletinComponent.ɵfac = function PozoBoletinComponent_Factory(t) { return new (t || PozoBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PozoBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PozoBoletinComponent, selectors: [["consultas-pozo-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function PozoBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "pozo-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "pozo-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PozoBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VER M\u00C1S RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_pozo_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #04b865;\n    border: 1px solid #04b865;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #04b865;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztvQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFVBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJwb3pvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICAgICAgZ2FwOiAzMHB4OyAqL1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBcbiAgICAuY29uc3VsdGFCb3gge1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG4gIFxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1hc1Jlc3VsdGFkb3Mge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0Yjg2NTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNGI4NjU7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMDRiODY1O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuY29uc3VsdGFCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 1322:
/*!*************************************************************!*\
  !*** ./src/app/consultas/containers/pozo/pozo.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PozoComponent": () => (/* binding */ PozoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_pozo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pozo/components/consulta/consulta.component */ 126);
/* harmony import */ var _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/pozo/components/ultimo-resultado/ultimo-resultado.component */ 3809);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);





function PozoComponent_div_3_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function PozoComponent_div_3_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function PozoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PozoComponent_div_3_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class PozoComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        console.log(this.resultados);
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
PozoComponent.ɵfac = function PozoComponent_Factory(t) { return new (t || PozoComponent)(); };
PozoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PozoComponent, selectors: [["consultas-pozo"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "14", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "14", 3, "isLoteriaNacional", "resultados", "close"]], template: function PozoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "pozo-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resultados", function PozoComponent_Template_pozo_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "pozo-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PozoComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_pozo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0FBREo7O0FBR0k7RUFDRSxVQUFBO0FBRE47O0FBSUk7RUFDRSxVQUFBO0FBRk47O0FBTUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoicG96by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuY29uc3VsdGFCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_consultas_consultas_module_ts.js.map