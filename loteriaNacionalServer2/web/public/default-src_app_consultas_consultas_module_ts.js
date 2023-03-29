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
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["consultas-menu"]], decls: 18, vars: 0, consts: [[1, "resultBox"], ["routerLink", "/inicio"], ["routerLink", "/consultas/loteria", "routerLinkActive", "active loteria"], ["routerLink", "/consultas/lotto", "routerLinkActive", "active lotto"], ["routerLink", "/consultas/facilotto", "routerLinkActive", "active facilotto"], ["routerLink", "/consultas/pozo", "routerLinkActive", "active pozo"], ["routerLink", "/consultas/revancha", "routerLinkActive", "active pozo"], ["routerLink", "/consultas/millonaria", "routerLinkActive", "active millonaria"], ["routerLink", "/compra_tus_juegos/", "routerLinkActive", "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "INICIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOTERIA NACIONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LOTTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FACILOTTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "POZO MILLONARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "POZO REVANCHA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LA MILLONARIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPRA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".resultBox[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  font-family: \"Monstserrat Regular\";\n  margin-top: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 18%;\n  height: 53px;\n  text-align: center;\n  border: 1px solid #011689;\n  border-radius: 26px;\n  color: #011689;\n  text-decoration: none;\n  font-size: 14px;\n  font-style: italic;\n  padding: 7.9px 12px;\n  font-family: \"Monstserrat SemiBold\";\n  margin-right: 7px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(7) {\n  font-size: 20px;\n  text-transform: uppercase;\n  text-decoration: underline;\n  font-weight: bold;\n  font-style: italic;\n}\n.resultBox[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  font-style: normal;\n  color: #fff;\n  border: none;\n}\n.resultBox[_ngcontent-%COMP%]   .loteria[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n}\n.resultBox[_ngcontent-%COMP%]   .lotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.resultBox[_ngcontent-%COMP%]   .facilotto[_ngcontent-%COMP%] {\n  background-color: #f08d3c;\n}\n.resultBox[_ngcontent-%COMP%]   .pozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n.resultBox[_ngcontent-%COMP%]   .millonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n@media screen and (max-width: 1000px) {\n  .resultBox[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    margin-top: 20px;\n  }\n  .resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 150px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n  .resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(7) {\n    right: unset;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQWJlO0VBY2YsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVhGO0FBYUU7RUFDRSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FsQ2U7RUFtQ2YsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWJKO0FBY0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFFQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWlCRTtFQUNFLHlCQWhEVztFQWlEWCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZko7QUFrQkU7RUFDRSx5QkF2RFc7QUF1Q2Y7QUFtQkU7RUFDRSx5QkExRFU7QUF5Q2Q7QUFvQkU7RUFDRSx5QkE3RGM7QUEyQ2xCO0FBcUJFO0VBQ0UseUJBaEVTO0FBNkNiO0FBcUJFO0VBQ0UseUJBbEVlO0FBK0NuQjtBQXVCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQXBCRjtFQXFCRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBRUEsYUFBQTtJQUNBLG1CQUFBO0VBcEJKO0VBcUJJO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VBbkJOO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjMjhhYWUxO1xyXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XHJcbiRjb2xvci1mYWNpbG90dG86ICNmMDhkM2M7XHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG4kY29sb3ItbWlsbG9uYXJpYTogI2I1MWYyMDtcclxuLy8kY29sb3ItcG96bzogIzA1NzMzMztcclxuXHJcbi5yZXN1bHRCb3gge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBhIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgIGhlaWdodDogNTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTE2ODk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG5cclxuICAgIGNvbG9yOiAjMDExNjg5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZzogNy45cHggMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb3RlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgfVxyXG5cclxuICAubG90dG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gIH1cclxuXHJcbiAgLmZhY2lsb3R0byB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZmFjaWxvdHRvO1xyXG4gIH1cclxuXHJcbiAgLnBvem8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgfVxyXG4gIC5taWxsb25hcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnJlc3VsdEJveCB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgJjpudGgtY2hpbGQoNykge1xyXG4gICAgICAgIHJpZ2h0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".resultadoBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  text-align: left;\n  font-size: 16px;\n  color: white;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 20px;\n  margin: auto;\n  align-self: center;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  margin: 0;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n@media screen and (max-width: 1000px) {\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFKRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSEo7QUFJSTtFQUNFLGtDQWJXO0VBY1gsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZOO0FBR007RUFDRSwrQkFwQlE7RUFxQlIsaUJBQUE7QUFEUjtBQUVRO0VBQ0UsV0FBQTtBQUFWO0FBR007RUFDRSxrQ0F6QlM7RUEwQlQsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRk47QUFHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRFI7QUFFUTtFQUNFLGtDQS9DTztFQWdEUCxlQUFBO0VBQ0EsU0FBQTtBQUFWO0FBQ1U7RUFDRSwrQkFyREk7RUFzREosaUJBQUE7QUFDWjtBQU9BO0VBR007SUFDRSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBTk47RUFPTTtJQUNFLG1CQUFBO0VBTFI7QUFDRiIsImZpbGUiOiJyZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuLnJlc3VsdGFkb0JveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5yZXN1bHRhZG9EZXRhbGxlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXRhaWxCb3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZGV0YWlsVGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnJlc3VsdGFkb0JveCB7XHJcbiAgICAucmVzdWx0YWRvRGV0YWxsZXMge1xyXG4gICAgICAuZGV0YWlsQm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLmRldGFpbFRleHQge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_positioning_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/positioning.directive */ 1343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resultado/resultado.component */ 5657);





function ResultadosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "consultas-resultado", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.loteriaBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ticket", ticket_r1)("tipoLoteria", ctx_r0.tipoLoteria)("isLoteriaNacional", ctx_r0.isLoteriaNacional);
} }
class ResultadosComponent {
    constructor() {
        this.isLoteriaNacional = false;
        this.isLotto = false;
        this.isPozoMillonario = false;
        this.tickets = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        switch (this.tipoLoteria) {
            case '1':
                this.loteriaBackground = {
                    backgroundLoteriaNacional: true,
                };
                break;
            case '2':
                this.loteriaBackground = {
                    backgroundLotto: true,
                };
                break;
            case '5':
                this.loteriaBackground = {
                    backgroundPozoMillonario: true,
                };
                break;
            case '17':
                this.loteriaBackground = {
                    backgroundPozoMillonario: true,
                };
                break;
            case '18':
                this.loteriaBackground = {
                    backgroundLotto: true,
                };
                break;
            case '14':
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
            if (this.tipoLoteria == '14') {
                ticket['serie'] = resultado.serie;
            }
            this.tickets.push(ticket);
        });
    }
    closeBox() {
        this.close.emit('');
    }
}
ResultadosComponent.ɵfac = function ResultadosComponent_Factory(t) { return new (t || ResultadosComponent)(); };
ResultadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResultadosComponent, selectors: [["consultas-resultados"]], inputs: { resultados: "resultados", tipoLoteria: "tipoLoteria", isLoteriaNacional: "isLoteriaNacional", isLotto: "isLotto", isPozoMillonario: "isPozoMillonario" }, outputs: { close: "close" }, decls: 3, vars: 1, consts: [[1, "blackBox", 3, "click"], ["floatingItem", "", 1, "resultsBox"], ["class", "resultBox", 4, "ngFor", "ngForOf"], [1, "resultBox"], [1, "messageBox", 3, "ngClass"], [3, "ticket", "tipoLoteria", "isLoteriaNacional"]], template: function ResultadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResultadosComponent_Template_div_click_0_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResultadosComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tickets);
    } }, directives: [_shared_positioning_directive__WEBPACK_IMPORTED_MODULE_0__.PositioningDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_1__.ResultadoComponent], styles: [".blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.resultsBox[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: transparent;\n  z-index: 10000;\n}\n\n.resultBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resultBox[_ngcontent-%COMP%]   .messageBox[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 1px;\n  border-radius: 23px;\n}\n\n.closeBox[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  border-radius: 500px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: red;\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\n.closeBox[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.backgroundLoteriaNacional[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n}\n\n.backgroundLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundPozoMillonario[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n\n@media screen and (max-width: 1000px) {\n  .resultsBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGFkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBREU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFEQTtFQUNFO0lBQ0UsVUFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoicmVzdWx0YWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFja0JveCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDgwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucmVzdWx0c0JveCB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuLnJlc3VsdEJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLm1lc3NhZ2VCb3gge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9zZUJveCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jbG9zZUJveDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhY2tncm91bmRMb3RlcmlhTmFjaW9uYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGFhZTE7XHJcbn1cclxuLmJhY2tncm91bmRMb3R0byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcclxufVxyXG4uYmFja2dyb3VuZFBvem9NaWxsb25hcmlvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRiODY1O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAucmVzdWx0c0JveCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/loteria/components/ultimo-resultado/ultimo-resultado.component */ 5832);
/* harmony import */ var _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/components/ultimo-resultado/ultimo-resultado.component */ 2092);
/* harmony import */ var _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../juegos/facilotto/components/ultimo-resultado/ultimo-resultado.component */ 2532);
/* harmony import */ var _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../juegos/pozo/components/ultimo-resultado/ultimo-resultado.component */ 3809);
/* harmony import */ var _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/pozoRevancha/components/ultimo-resultado/ultimo-resultado.component */ 9259);
/* harmony import */ var _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component */ 4710);







class UltimosResultadosComponent {
    constructor() { }
    ngOnInit() {
    }
}
UltimosResultadosComponent.ɵfac = function UltimosResultadosComponent_Factory(t) { return new (t || UltimosResultadosComponent)(); };
UltimosResultadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UltimosResultadosComponent, selectors: [["consultas-ultimos-resultados"]], decls: 7, vars: 0, consts: [[1, "selectionBox"], [1, "selectorBox"]], template: function UltimosResultadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "loteria-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "lotto-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "facilotto-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "pozo-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "revancha-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "millonaria-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_0__.UltimoResultadoComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_2__.UltimoResultadoComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_3__.UltimoResultadoComponent, _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_5__.UltimoResultadoComponent], styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  grid-gap: 10px 10% !important;\n  gap: 10px 10% !important;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  background-color: white;\n  padding: 20px 0;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 19%;\n}\n@media screen and (max-width: 1300px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    grid-gap: 10px 10% !important;\n    gap: 10px 10% !important;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 40%;\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltb3MtcmVzdWx0YWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUFBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLFVBQUE7QUFFSjtBQUVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7SUFBQSx3QkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBQ0Y7RUFBRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUVKO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUFDSjtBQUNGIiwiZmlsZSI6InVsdGltb3MtcmVzdWx0YWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb25Cb3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMTBweCAxMCUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgLnNlbGVjdG9yQm94IHtcclxuICAgIHdpZHRoOiAxOSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuc2VsZWN0aW9uQm94IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBnYXA6IDEwcHggMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNlbGVjdGlvbkJveCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _consultas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultas.component */ 6261);
/* harmony import */ var _containers_facilotto_boletin_facilotto_boletin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/facilotto-boletin/facilotto-boletin.component */ 1685);
/* harmony import */ var _containers_facilotto_facilotto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/facilotto/facilotto.component */ 1072);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home/home.component */ 58);
/* harmony import */ var _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/loteria-boletin/loteria-boletin.component */ 6504);
/* harmony import */ var _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/loteria/loteria.component */ 4002);
/* harmony import */ var _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/lotto-boletin/lotto-boletin.component */ 4625);
/* harmony import */ var _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/lotto/lotto.component */ 886);
/* harmony import */ var _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/millonaria-boletin/millonaria-boletin.component */ 5859);
/* harmony import */ var _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/millonaria/millonaria.component */ 7125);
/* harmony import */ var _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/pozo-boletin/pozo-boletin.component */ 6629);
/* harmony import */ var _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/pozo/pozo.component */ 1322);
/* harmony import */ var _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/revancha-boletin/revancha-boletin.component */ 687);
/* harmony import */ var _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/revancha/revancha.component */ 3199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);

















const routes = [
    {
        path: '',
        component: _consultas_component__WEBPACK_IMPORTED_MODULE_0__.ConsultasComponent,
        children: [
            {
                path: 'loteria/boletin/:sorteo',
                component: _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_4__.LoteriaBoletinComponent,
            },
            { path: 'lotto/boletin/:sorteo', component: _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_6__.LottoBoletinComponent },
            {
                path: 'facilotto/boletin/:sorteo',
                component: _containers_facilotto_boletin_facilotto_boletin_component__WEBPACK_IMPORTED_MODULE_1__.FacilottoBoletinComponent,
            },
            {
                path: 'pozo/boletin/:sorteo',
                component: _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_10__.PozoBoletinComponent,
            },
            {
                path: 'revancha/boletin/:sorteo',
                component: _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_12__.RevanchaBoletinComponent,
            },
            {
                path: 'millonaria/boletin/:sorteo',
                component: _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_8__.MillonariaBoletinComponent,
            },
            { path: 'loteria', component: _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__.LoteriaComponent },
            { path: 'lotto', component: _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_7__.LottoComponent },
            { path: 'facilotto', component: _containers_facilotto_facilotto_component__WEBPACK_IMPORTED_MODULE_2__.FacilottoComponent },
            {
                path: 'pozo',
                component: _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_11__.PozoComponent,
            },
            {
                path: 'revancha',
                component: _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_13__.RevanchaComponent,
            },
            { path: 'millonaria', component: _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_9__.MillonariaComponent },
            { path: '', component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent },
        ],
    },
];
class ConsultasRoutingModule {
}
ConsultasRoutingModule.ɵfac = function ConsultasRoutingModule_Factory(t) { return new (t || ConsultasRoutingModule)(); };
ConsultasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ConsultasRoutingModule });
ConsultasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ConsultasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px 100px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(2, auto);\n}\n.selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%] {\n  display: none;\n}\n.selectionBox[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    \n    font-family: \"Helvetica\";\n    font-style: italic;\n    font-weight: 700;\n    margin-left: 20px;\n    font-size: 18px;\n    color: #021151 !important;\n    text-transform: uppercase;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUVKO0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFFRjtFQURFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7RUFHSjtFQURJO0lBQ0UsaUNBQUE7SUFFQSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHlCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJjb25zdWx0YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0aW9uQm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMHB4IDEwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAub3Ryb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNvbnRlbmVkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnNlbGVjdGlvbkJveCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAub3Ryb3Mge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgLyogQ29uc3VsdGEgcG9yIEJvbGV0byB5IFNvcnRlbyAqL1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMjExNTEgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4364);
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
/* harmony import */ var _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./containers/revancha/revancha.component */ 3199);
/* harmony import */ var _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./containers/revancha-boletin/revancha-boletin.component */ 687);
/* harmony import */ var _juegos_pozoRevancha_pozo_revancha_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../juegos/pozoRevancha/pozo-revancha.module */ 9066);
/* harmony import */ var _containers_facilotto_facilotto_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./containers/facilotto/facilotto.component */ 1072);
/* harmony import */ var _containers_facilotto_boletin_facilotto_boletin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./containers/facilotto-boletin/facilotto-boletin.component */ 1685);
/* harmony import */ var _juegos_facilotto_facilotto_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../juegos/facilotto/facilotto.module */ 4007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2316);





























class ConsultasModule {
}
ConsultasModule.ɵfac = function ConsultasModule_Factory(t) { return new (t || ConsultasModule)(); };
ConsultasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: ConsultasModule });
ConsultasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
            _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasRoutingModule,
            _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__.LoteriaModule,
            _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__.LottoModule,
            _juegos_facilotto_facilotto_module__WEBPACK_IMPORTED_MODULE_26__.FacilottoModule,
            _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_16__.PozoModule,
            _juegos_pozoRevancha_pozo_revancha_module__WEBPACK_IMPORTED_MODULE_23__.PozoRevanchaModule,
            _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_17__.MillonariaModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_18__.VentasModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ConsultasModule, { declarations: [_consultas_component__WEBPACK_IMPORTED_MODULE_1__.ConsultasComponent,
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
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__.HomeComponent,
        _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_21__.RevanchaComponent,
        _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_22__.RevanchaBoletinComponent,
        _containers_facilotto_facilotto_component__WEBPACK_IMPORTED_MODULE_24__.FacilottoComponent,
        _containers_facilotto_boletin_facilotto_boletin_component__WEBPACK_IMPORTED_MODULE_25__.FacilottoBoletinComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
        _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasRoutingModule,
        _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__.LoteriaModule,
        _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__.LottoModule,
        _juegos_facilotto_facilotto_module__WEBPACK_IMPORTED_MODULE_26__.FacilottoModule,
        _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_16__.PozoModule,
        _juegos_pozoRevancha_pozo_revancha_module__WEBPACK_IMPORTED_MODULE_23__.PozoRevanchaModule,
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
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__.HomeComponent,
        _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_21__.RevanchaComponent,
        _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_22__.RevanchaBoletinComponent] }); })();


/***/ }),

/***/ 1685:
/*!***************************************************************************************!*\
  !*** ./src/app/consultas/containers/facilotto-boletin/facilotto-boletin.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacilottoBoletinComponent": () => (/* binding */ FacilottoBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_facilotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/facilotto/components/boletin/boletin.component */ 5571);
/* harmony import */ var _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/facilotto/components/ultimo-resultado/ultimo-resultado.component */ 2532);




class FacilottoBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(['/consultas/facilotto']);
    }
}
FacilottoBoletinComponent.ɵfac = function FacilottoBoletinComponent_Factory(t) { return new (t || FacilottoBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
FacilottoBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FacilottoBoletinComponent, selectors: [["app-facilotto-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function FacilottoBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "facilotto-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "facilotto-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FacilottoBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VER M\u00C1S RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_facilotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #f08d3c;\n    border: 1px solid #f08d3c;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #f08d3c;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2lsb3R0by1ib2xldGluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBRUE7O29CQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0FBREo7QUFHSTtFQUNFLFVBQUE7QUFETjtBQUlJO0VBQ0UsVUFBQTtBQUZOO0FBTUU7RUFDRTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFISjtFQUtJO0lBQ0UsY0FBQTtFQUhOOztFQU1FO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUhKO0VBSUk7SUFDRSxXQUFBO0VBRk47RUFJSTtJQUNFLGFBQUE7RUFGTjtBQUNGIiwiZmlsZSI6ImZhY2lsb3R0by1ib2xldGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIFxyXG4gICAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcclxuICAgICAgICAgIGdhcDogMzBweDsgKi9cclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBcclxuICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VsZWN0b3JCb3gge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5tYXNSZXN1bHRhZG9zIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwOGQzYztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwOGQzYztcclxuICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmMDhkM2M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 1072:
/*!***********************************************************************!*\
  !*** ./src/app/consultas/containers/facilotto/facilotto.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacilottoComponent": () => (/* binding */ FacilottoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_facilotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/facilotto/components/consulta/consulta.component */ 2905);
/* harmony import */ var _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/facilotto/components/ultimo-resultado/ultimo-resultado.component */ 2532);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function FacilottoComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function FacilottoComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("resultados", ctx_r1.resultados);
} }
function FacilottoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FacilottoComponent_div_4_consultas_resultados_1_Template, 1, 1, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class FacilottoComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
FacilottoComponent.ɵfac = function FacilottoComponent_Factory(t) { return new (t || FacilottoComponent)(); };
FacilottoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FacilottoComponent, selectors: [["app-facilotto"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "18", 3, "resultados", "close", 4, "ngIf"], ["tipoLoteria", "18", 3, "resultados", "close"]], template: function FacilottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "facilotto-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function FacilottoComponent_Template_facilotto_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "facilotto-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FacilottoComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_facilotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2lsb3R0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7a0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBREo7O0FBRUk7RUFDRSxVQUFBO0FBQU47O0FBR0k7RUFDRSxVQUFBO0FBRE47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFETjs7QUFLRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUZKO0VBR0k7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQUROO0VBR0k7SUFDRSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJmYWNpbG90dG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxCb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIFxyXG4gICAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XHJcbiAgICAgICAgZ2FwOiAzMHB4OyAqL1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLmNvbnN1bHRhQm94IHtcclxuICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICAubWVudUJveCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0b3JCb3gge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


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
    } }, directives: [_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_0__.UltimosResultadosComponent], styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLFVBQUE7QUFFTjtBQUVFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBQ0o7RUFBSTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb25Cb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLnNlbGVjdGlvbkJveCB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


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
    } }, directives: [_juegos_loteria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #35aee2;\n    border: 1px solid #35aee2;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #35aee2;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztvQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQU1BO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEY7RUFLRTtJQUNFLGNBQUE7RUFISjs7RUFNQTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFIRjtFQUlFO0lBQ0UsV0FBQTtFQUZKO0VBSUU7SUFDRSxhQUFBO0VBRko7QUFDRiIsImZpbGUiOiJsb3RlcmlhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XHJcbiAgICAgICAgZ2FwOiAzMHB4OyAqL1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAuY29uc3VsdGFCb3gge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RvckJveCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1hc1Jlc3VsdGFkb3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWVlMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNWFlZTI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMzVhZWUyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_loteria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/loteria/components/consulta/consulta.component */ 3892);
/* harmony import */ var _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/loteria/components/ultimo-resultado/ultimo-resultado.component */ 5832);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function LoteriaComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function LoteriaComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function LoteriaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoteriaComponent_div_4_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class LoteriaComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
LoteriaComponent.ɵfac = function LoteriaComponent_Factory(t) { return new (t || LoteriaComponent)(); };
LoteriaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoteriaComponent, selectors: [["consultas-loteria"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "1", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "1", 3, "isLoteriaNacional", "resultados", "close"]], template: function LoteriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "loteria-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function LoteriaComponent_Template_loteria_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "loteria-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoteriaComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_loteria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUVJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtBQUROOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBRE47O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGSjtFQUdJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFETjtFQUdJO0lBQ0UsYUFBQTtFQUROO0FBQ0YiLCJmaWxlIjoibG90ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgXHJcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XHJcbiAgICAgIGdhcDogMzBweDsgKi9cclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VsZWN0b3JCb3gge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgLm1lbnVCb3gge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


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
    } }, directives: [_juegos_lotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0FBRko7QUFNQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQUhGO0VBS0U7SUFDRSxjQUFBO0VBSEo7O0VBTUE7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBSEY7RUFJRTtJQUNFLFdBQUE7RUFGSjtFQUlFO0lBQ0UsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoibG90dG8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcclxuICAgICAgICBnYXA6IDMwcHg7ICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gIC5jb25zdWx0YUJveCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdG9yQm94IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFzUmVzdWx0YWRvcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUxZjIwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I1MWYyMDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNiNTFmMjA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_lotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/lotto/components/consulta/consulta.component */ 2643);
/* harmony import */ var _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/components/ultimo-resultado/ultimo-resultado.component */ 2092);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function LottoComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function LottoComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("resultados", ctx_r1.resultados);
} }
function LottoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LottoComponent_div_4_consultas_resultados_1_Template, 1, 1, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class LottoComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
LottoComponent.ɵfac = function LottoComponent_Factory(t) { return new (t || LottoComponent)(); };
LottoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LottoComponent, selectors: [["consultas-lotto"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "2", 3, "resultados", "close", 4, "ngIf"], ["tipoLoteria", "2", 3, "resultados", "close"]], template: function LottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "lotto-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function LottoComponent_Template_lotto_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "lotto-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LottoComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_lotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFFRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRkY7RUFHRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBREo7RUFHRTtJQUNFLGFBQUE7RUFESjtBQUNGIiwiZmlsZSI6ImxvdHRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsQm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xyXG4gICAgICBnYXA6IDMwcHg7ICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5jb25zdWx0YUJveCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdG9yQm94IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5tZW51Qm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, directives: [_juegos_millonaria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFVBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJtaWxsb25hcmlhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgXHJcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcclxuICAgICAgICBnYXA6IDMwcHg7ICovXHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgXHJcbiAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAubWFzUmVzdWx0YWRvcyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNTFmMjA7XHJcbiAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYjUxZjIwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_millonaria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/millonaria/components/consulta/consulta.component */ 2705);
/* harmony import */ var _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component */ 4710);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function MillonariaComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function MillonariaComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function MillonariaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MillonariaComponent_div_4_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class MillonariaComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
MillonariaComponent.ɵfac = function MillonariaComponent_Factory(t) { return new (t || MillonariaComponent)(); };
MillonariaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MillonariaComponent, selectors: [["consultas-millonaria"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "14", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "14", 3, "isLoteriaNacional", "resultados", "close"]], template: function MillonariaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "millonaria-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function MillonariaComponent_Template_millonaria_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "millonaria-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MillonariaComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_millonaria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0YsZUFBQTtBQURGOztBQUVJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtBQUROOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBRE47O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGSjtFQUdJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFETjtFQUdJO0lBQ0UsYUFBQTtFQUROO0FBQ0YiLCJmaWxlIjoibWlsbG9uYXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgXHJcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XHJcbiAgICAgIGdhcDogMzBweDsgKi9cclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgIC5tZW51Qm94IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgLmNvbnN1bHRhQm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


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
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(['/consultas/pozo']);
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
    } }, directives: [_juegos_pozo_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #04b865;\n    border: 1px solid #04b865;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #04b865;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztvQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFVBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJwb3pvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgXHJcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xyXG4gICAgICAgICAgZ2FwOiAzMHB4OyAqL1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIFxyXG4gICAgLmNvbnN1bHRhQm94IHtcclxuICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm1hc1Jlc3VsdGFkb3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRiODY1O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDRiODY1O1xyXG4gIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzA0Yjg2NTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgLmNvbnN1bHRhQm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0b3JCb3gge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_pozo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pozo/components/consulta/consulta.component */ 126);
/* harmony import */ var _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/pozo/components/ultimo-resultado/ultimo-resultado.component */ 3809);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function PozoComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function PozoComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function PozoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PozoComponent_div_4_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class PozoComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
PozoComponent.ɵfac = function PozoComponent_Factory(t) { return new (t || PozoComponent)(); };
PozoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PozoComponent, selectors: [["consultas-pozo"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "5", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "5", 3, "isLoteriaNacional", "resultados", "close"]], template: function PozoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "pozo-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function PozoComponent_Template_pozo_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "pozo-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PozoComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_pozo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0YsZUFBQTtBQURGOztBQUVJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtBQUROOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBRE47O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGSjtFQUdJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFETjtFQUdJO0lBQ0UsYUFBQTtFQUROO0FBQ0YiLCJmaWxlIjoicG96by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgXHJcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XHJcbiAgICAgIGdhcDogMzBweDsgKi9cclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgIC5tZW51Qm94IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgLmNvbnN1bHRhQm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 687:
/*!*************************************************************************************!*\
  !*** ./src/app/consultas/containers/revancha-boletin/revancha-boletin.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevanchaBoletinComponent": () => (/* binding */ RevanchaBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_pozoRevancha_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pozoRevancha/components/boletin/boletin.component */ 8731);
/* harmony import */ var _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/pozoRevancha/components/ultimo-resultado/ultimo-resultado.component */ 9259);




class RevanchaBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(['/consultas/revancha']);
    }
}
RevanchaBoletinComponent.ɵfac = function RevanchaBoletinComponent_Factory(t) { return new (t || RevanchaBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RevanchaBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RevanchaBoletinComponent, selectors: [["consultas-revancha-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function RevanchaBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "revancha-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "revancha-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RevanchaBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " VER M\u00C1S RESULTADOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_pozoRevancha_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #04b865;\n    border: 1px solid #04b865;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #04b865;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmFuY2hhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBQ0UsVUFBQTtBQUROO0FBSUk7RUFDRSxVQUFBO0FBRk47QUFNRTtFQUNFO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQUhKO0VBS0k7SUFDRSxjQUFBO0VBSE47O0VBTUU7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBSEo7RUFJSTtJQUNFLFdBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoicmV2YW5jaGEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICBcclxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XHJcbiAgICAgICAgICBnYXA6IDMwcHg7ICovXHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgXHJcbiAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAubWFzUmVzdWx0YWRvcyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGI4NjU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNGI4NjU7XHJcbiAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDRiODY1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWxlY3RvckJveCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 3199:
/*!*********************************************************************!*\
  !*** ./src/app/consultas/containers/revancha/revancha.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevanchaComponent": () => (/* binding */ RevanchaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_pozoRevancha_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pozoRevancha/components/consulta/consulta.component */ 9057);
/* harmony import */ var _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/pozoRevancha/components/ultimo-resultado/ultimo-resultado.component */ 9259);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function RevanchaComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function RevanchaComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("resultados", ctx_r1.resultados);
} }
function RevanchaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RevanchaComponent_div_4_consultas_resultados_1_Template, 1, 1, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class RevanchaComponent {
    constructor() {
        this.showResultados = false;
    }
    ngOnInit() { }
    toggleResultados(resultados) {
        this.resultados = resultados;
        this.showResultados = true;
    }
    closeBox() {
        this.showResultados = false;
    }
}
RevanchaComponent.ɵfac = function RevanchaComponent_Factory(t) { return new (t || RevanchaComponent)(); };
RevanchaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RevanchaComponent, selectors: [["consultas-revancha"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "17", 3, "resultados", "close", 4, "ngIf"], ["tipoLoteria", "17", 3, "resultados", "close"]], template: function RevanchaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "revancha-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function RevanchaComponent_Template_revancha_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "revancha-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RevanchaComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_pozoRevancha_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmFuY2hhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztnQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtFQUNGLGVBQUE7QUFERjs7QUFFSTtFQUNFLFVBQUE7QUFBTjs7QUFHSTtFQUNFLFVBQUE7QUFETjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQUROOztBQUtFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRko7RUFHSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBRE47RUFHSTtJQUNFLGFBQUE7RUFETjtBQUNGIiwiZmlsZSI6InJldmFuY2hhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsQm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICBcclxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcclxuICAgICAgZ2FwOiAzMHB4OyAqL1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5jb25zdWx0YUJveCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VsZWN0b3JCb3gge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgLm1lbnVCb3gge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAuY29uc3VsdGFCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgLnNlbGVjdG9yQm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 5571:
/*!**************************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/boletin/boletin.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletinComponent": () => (/* binding */ BoletinComponent)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 4262);
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
  selectors: [["facilotto-boletin"]],
  decls: 5,
  vars: 2,
  consts: [[1, "boletin_oficial"], ["class", "container_boletin", 4, "ngIf"], ["loader", "facilotto", 3, "message", 4, "ngIf"], [1, "container_boletin"], ["alt", "Imagen del boletin de facilotto", 3, "src", "error", 4, "ngIf"], ["class", "boletinNotFound", 4, "ngIf"], ["alt", "Imagen del boletin de facilotto", 3, "src", "error"], [1, "boletinNotFound"], ["href", "https://www.loteria.com.ec/casino", "target", "_parent"], ["loader", "facilotto", 3, "message"]],
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
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #f08d3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhXO0FBSGYiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjZjA4ZDNjO1xyXG4uYm9sZXRpbl9vZmljaWFsIHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 2905:
/*!****************************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/consulta/consulta.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaComponent": () => (/* binding */ ConsultaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 4262);
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
      range.collapse(false); //range.select();
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

      _this3.router.navigateByUrl(`/consultas/facilotto/boletin/${_this3.sorteoBoletin}`);
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
  selectors: [["facilotto-consulta"]],
  outputs: {
    resultados: "resultados"
  },
  decls: 61,
  vars: 7,
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], [1, "tag"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "facilotto", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "facilotto", 3, "message"], [3, "msg", "closeError"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Ingresa los 6 d\u00EDgitos de la combinaci\u00F3n principal de tu boleto. Puedes consultar varios boletos a la vez, separados por coma. Ejemplo: 12345, 67897 (5 digitos) ");
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #f08d3c;\n  border: 2px solid #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #f08d3c;\n  border: 1px solid #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #f08d3c;\n  border: 1px solid #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #f08d3c;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #f08d3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuJGNvbG9yLWxvdHRvOiAjZjA4ZDNjO1xyXG5cclxuJWlucHV0IHtcclxuICBwYWRkaW5nOiAxM3B4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBjb2xvcjogIzk3NzQ3NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbn1cclxuXHJcbi5jb250YWluZXJfY29uc3VsdGEge1xyXG4gIC5jdWVycG9fYm9sZXRpbiB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGxpY2FjaW9uIHtcclxuICAgICAgLmNvbnRlbnRfZXhwbGljYWNpb24ge1xyXG4gICAgICAgIC5pY29ubyB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25zdWx0YV9ib2xldG8ge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgfVxyXG4gICAgICAuZm9ybXVsYXJpbyB7XHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgIC5pbnB1dF9jb250ZW50IHtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xyXG4gICAgICAgICAgICAgIEBleHRlbmQgJWlucHV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAvKiBSZWN0YW5nbGUgNiAqL1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5waWVfYm9sZXRpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 2763:
/*!************************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/sorteo/sorteo.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
SorteoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SorteoComponent, selectors: [["facilotto-sorteo"]], decls: 2, vars: 0, template: function SorteoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sorteo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0ZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2409:
/*!******************************************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/ticket-consulta/ticket-consulta.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["facilotto-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 18, vars: 7, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_title"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  -webkit-text-stroke: 2px #f08d3c;\n  text-align: center;\n  color: #f08d3c;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #f08d3c;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  -webkit-text-stroke: 2px #f08d3c;\n  text-align: center;\n  font-style: italic;\n  color: #f08d3c;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #f08d3c;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #f08d3c;\n  border-radius: 150px;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n    padding: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFhTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsWUFBQTtBQWJSO0FBZU07RUFDRSx3QkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQk07RUFDRSxXQUFBO0VBQ0EsbUNBbERXO0VBbURYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZFI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FqRU07RUFrRU4saUNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFFTTtFQTJFTixtQ0EvRVc7QUE4RG5CO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFvQk07RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4Rk07RUF5Rk4sd0JBOUZRO0VBK0ZSLGdCQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBakdNO0VBa0dOLG1DQXRHVztBQW1GbkI7QUF1Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQTlHYTtBQXlGbkI7QUF5QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQWpJTztFQW1JUCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6Qlo7QUE4Qk07RUFDRSxrQkFBQTtBQTVCUjtBQThCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTVCVjtBQStCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTdCVjtBQStCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FqS087RUFrS1AsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3Qlo7QUFxQ0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0VBcENOO0FBQ0YiLCJmaWxlIjoidGlja2V0LWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1wcmVtaW86IFwiSGFudW1hblwiO1xyXG4kZnVlbnRlLXRpdHVsbzogXCJIZWx2ZXRpY2FcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItbG90dG86ICNmMDhkM2M7XHJcblxyXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkbyB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcblxyXG4gICAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2l6cXVpZXJkb19sb2dvIHtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2JhcnJhIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfZGVyZWNobyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAudGlja2V0X3RpdHVsbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aWNrZXRfbW9udG8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXByZW1pbyFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50aWNrZXRfdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGlja2V0X2VudGVyb19mcmFjY2lvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG5cclxuICAgICAgLnRpY2tldF9lbnRlcm8ge1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcblxyXG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAudGlja2V0X2VudGVybyB7XHJcbiAgICBkaXYge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1125:
/*!**************************************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/ticket-ventas/ticket-ventas.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketVentasComponent": () => (/* binding */ TicketVentasComponent)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/venta.service */ 8548);
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
  selectors: [["facilotto-ticket-ventas"]],
  inputs: {
    ticket: "ticket",
    sorteo: "sorteo"
  },
  outputs: {
    delete: "delete"
  },
  decls: 23,
  vars: 7,
  consts: [[1, "contenedor_informacion_ticket"], [4, "ngIf"], ["src", "assets/trash.svg", "alt", "", 1, "trash", 3, "click"], ["src", "assets/img/facilotto-sombra.png", "alt", "", 1, "logoTicket"]],
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #f08d3c;\n  background-color: #f08d3c;\n  position: relative;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  top: 20px;\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  bottom: 5px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 132px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 115px;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJhO0VBY2IseUJBZGE7RUFlYixrQkFBQTtFQUNBLHNCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBcENhO0VBcUNiLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQVBKO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBKO0FBV0E7RUFFSTtJQUNFLGVBQUE7RUFUSjtFQVdFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUFUSjtBQUNGO0FBWUE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFYSjtBQUNGIiwiZmlsZSI6InRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuJGNvbG9yLWJvdHRvbjogI2YwOGQzYztcclxuXHJcbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgIH1cclxuICB9XHJcbiAgLmZyYWN0aW9uc0JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5mcmFjY2lvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTYlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZy50cmFzaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMzYwZGVnKVxyXG4gICAgICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIGltZy50cmFzaDpob3ZlciB7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIGltZy5sb2dvVGlja2V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHRvcDogMTMycHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0IHtcclxuICAgIGltZy5sb2dvVGlja2V0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDExNXB4O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 2532:
/*!********************************************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/ultimo-resultado/ultimo-resultado.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimoResultadoComponent": () => (/* binding */ UltimoResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ticket-consulta/ticket-consulta.component */ 2409);




function UltimoResultadoComponent_ng_container_5_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const premio_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", premio_r4.nombre, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](premio_r4.combinacion);
} }
function UltimoResultadoComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PREMIOS ESPECIALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UltimoResultadoComponent_ng_container_5_ng_container_3_ng_container_4_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.premiosEspeciales);
} }
function UltimoResultadoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "facilotto-ticket-consulta", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UltimoResultadoComponent_ng_container_5_ng_container_3_Template, 5, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ctx_r0.ticketGanador);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
} }
function UltimoResultadoComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Los resultados no est\u00E1n disponibles por el momento, por favor revisa m\u00E1s tarde ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class UltimoResultadoComponent {
    constructor(router) {
        this.router = router;
        this.isError = false;
    }
    ngOnInit() {
        try {
            let data = JSON.parse(localStorage.getItem('facilottoUltimoResultado'));
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
        catch (e) {
            this.isError = true;
        }
    }
    verUltimoBoletin() {
        let sorteo = this.ticketGanador.numeroSorteo;
        this.router.navigateByUrl(`/consultas/facilotto/boletin/${sorteo}`);
    }
    verResultados() {
        this.router.navigateByUrl(`/consultas/facilotto`);
    }
}
UltimoResultadoComponent.ɵfac = function UltimoResultadoComponent_Factory(t) { return new (t || UltimoResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["facilotto-ultimo-resultado"]], decls: 12, vars: 2, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "assets/img/facilotto-sombra.png", "alt", ""], ["size", "2px"], [4, "ngIf"], [1, "boton_comprar"], [3, "click"], [1, "scroll"], [3, "ticket"], [1, "texto"], [1, "texto_premios"], [4, "ngFor", "ngForOf"], [1, "consultaError"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UltimoResultadoComponent_ng_container_5_Template, 4, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UltimoResultadoComponent_ng_container_6_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_8_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_10_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "BUSCAR OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #f08d3c;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #f08d3c;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #f08d3c;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px 30px;\n  background-color: #f08d3c;\n  border: 1px solid #f08d3c;\n  border-radius: 40px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #f08d3c;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-template-rows: repeat(4, auto);\n  text-align: left;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0VBQ0EsK0JBeEJVO0VBeUJWLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQTVCVTtBQW1CZDtBQVlFO0VBQ0UsY0FBQTtFQVVBOzs7U0FBQTtBQWhCSjtBQVFJO0VBQ0Usd0JBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBZUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFmTjtBQWlCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWZaO0FBbUJRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFqQlY7QUFtQlU7RUFDRSxtQ0ExRk87RUEyRlAsZUFBQTtBQWpCWjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBckJSO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXJCVjtBQXVCVTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFsSEk7RUFtSEosZUFBQTtBQXJCWjtBQXdCVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXJIRTtFQXNIRiwrQkEzSEk7QUFxR2hCO0FBMEJRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQXBJUztBQTRHbkI7QUEwQlU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBeEJaO0FBMkJVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQTFCWjtBQTRCWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFCZDtBQTZCWTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQmQ7QUFpQ007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEvQlI7QUFpQ1E7RUFDRSxXQUFBO0FBL0JWO0FBcUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbkNKO0FBcUNJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBckxRO0VBc0xSLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQTNMVztFQTRMWCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQW5DTjtBQXFDTTtFQUNFLHNCQUFBO0VBQ0EsY0FqTU07QUE4SmQ7QUF3Q0U7RUFDRSxZQUFBO0VBQ0EsK0JBN01ZO0VBOE1aLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQXZDSjtBQTBDRTtFQUNFLGtCQUFBO0FBeENKO0FBMENJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQTNOVTtFQTROVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBeENOO0FBMkNJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Q047QUEyQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBek9XO0VBME9YLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Q1I7QUE4Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUE5Q0o7QUFnREk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTlDTiIsImZpbGUiOiJ1bHRpbW8tcmVzdWx0YWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1sb3R0bzogI2YwOGQzYztcclxuXHJcbi5jb250ZW5lZG9yX3RpY2tldCB7XHJcbiAgLmxvZ29fdGlja2V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1sb3R0bztcclxuICB9XHJcblxyXG4gIC5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50LFxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAuY29udGVuZWRvcl90aXR1bG8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG5cclxuICAgICAgICAuY29udGVuZWRvcl9sb2dvIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yX2luZm8ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBhZGRpbmc6IGF1dG8gMTBweDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbmVkb3JfbW9udG9fcHJlbWlvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLm1vbnRvX3NvcnRlbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBsZWZ0O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcblxyXG4gICAgICAgICAgLm51bWVybyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVuZWRvcl9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbmVkb3JfY29kaWdvX2JhcnJhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdG9uX2NvbXByYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHRvIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC50aWNrZXRfZW50ZXJvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dG9fcHJlbWlvcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 745:
/*!**********************************************************************!*\
  !*** ./src/app/juegos/facilotto/components/venta/venta.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
VentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["facilotto-venta"]], decls: 2, vars: 0, template: function VentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4007:
/*!******************************************************!*\
  !*** ./src/app/juegos/facilotto/facilotto.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacilottoModule": () => (/* binding */ FacilottoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consulta/consulta.component */ 2905);
/* harmony import */ var _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/boletin/boletin.component */ 5571);
/* harmony import */ var _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sorteo/sorteo.component */ 2763);
/* harmony import */ var _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/venta/venta.component */ 745);
/* harmony import */ var _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ultimo-resultado/ultimo-resultado.component */ 2532);
/* harmony import */ var _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ticket-consulta/ticket-consulta.component */ 2409);
/* harmony import */ var _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-ventas/ticket-ventas.component */ 1125);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class FacilottoModule {
}
FacilottoModule.ɵfac = function FacilottoModule_Factory(t) { return new (t || FacilottoModule)(); };
FacilottoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FacilottoModule });
FacilottoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FacilottoModule, { declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
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

/***/ 4262:
/*!***************************************************************!*\
  !*** ./src/app/juegos/facilotto/services/consulta.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      var address = '/facilotto';
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
      let address = '/facilotto';
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
      let address = '/facilotto';
      let endpoint = '/cache/ultimoResultado';
      let auxAddress = _this3.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this3.http.get(auxAddress, {
          headers: headers
        }).subscribe(data => {
          let response;
          let facilotto = data;
          localStorage.setItem('facilottoUltimoResultado', JSON.stringify(facilotto));
          response = {
            tipo: 'facilotto',
            data: facilotto
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

/***/ 8548:
/*!************************************************************!*\
  !*** ./src/app/juegos/facilotto/services/venta.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        let address = '/facilotto';
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
        let address = '/facilotto';
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
        let address = '/facilotto';
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


/***/ })

}]);
//# sourceMappingURL=default-src_app_consultas_consultas_module_ts.js.map