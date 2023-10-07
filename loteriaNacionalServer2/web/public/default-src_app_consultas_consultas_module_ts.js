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
    constructor(actRoute) {
        this.actRoute = actRoute;
        this.token = "";
        this.comprasLink = "/compra_tus_juegos/";
        this.actRoute.params.subscribe((params) => {
            this.token = params['token'];
        });
    }
    ngOnInit() {
        this.comprasLink = `/compra_tus_juegos/${this.token}`;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["consultas-menu"]], decls: 18, vars: 1, consts: [[1, "resultBox"], ["routerLink", "/consultas/loteria", "routerLinkActive", "active loteria"], ["routerLink", "/consultas/lotto", "routerLinkActive", "active lotto"], ["routerLink", "/consultas/pozo", "routerLinkActive", "active pozo"], ["routerLink", "/consultas/revancha", "routerLinkActive", "active pozo"], ["routerLink", "/consultas/millonaria", "routerLinkActive", "active millonaria"], ["routerLink", "/consultas/pega3/boletin", "routerLinkActive", "active pega3"], ["routerLink", "/consultas/bingazo", "routerLinkActive", "active bingazo"], ["routerLinkActive", "active", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "POZO REVANCHA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LA MILLONARIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PEGA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BINGAZO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPRA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.comprasLink);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".resultBox[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  font-family: \"Monstserrat Regular\";\n  margin-top: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 18%;\n  height: 53px;\n  text-align: center;\n  border: 1px solid #011689;\n  border-radius: 26px;\n  color: #011689;\n  text-decoration: none;\n  font-size: 14px;\n  font-style: italic;\n  padding: 7.9px 12px;\n  font-family: \"Monstserrat SemiBold\";\n  margin-right: 7px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  font-size: 20px;\n  text-transform: uppercase;\n  text-decoration: underline;\n  font-weight: bold;\n  font-style: italic;\n}\n.resultBox[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  font-style: normal;\n  color: #fff;\n  border: none;\n}\n.resultBox[_ngcontent-%COMP%]   .loteria[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n}\n.resultBox[_ngcontent-%COMP%]   .lotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.resultBox[_ngcontent-%COMP%]   .facilotto[_ngcontent-%COMP%] {\n  background-color: #ea5b80;\n}\n.resultBox[_ngcontent-%COMP%]   .pozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n.resultBox[_ngcontent-%COMP%]   .bingazo[_ngcontent-%COMP%] {\n  background-color: #283479;\n}\n.resultBox[_ngcontent-%COMP%]   .millonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.resultBox[_ngcontent-%COMP%]   .pega3[_ngcontent-%COMP%] {\n  background-color: #784494;\n}\n@media screen and (max-width: 1000px) {\n  .resultBox[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    margin-top: 20px;\n  }\n  .resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 150px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n  .resultBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    right: unset;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQWRlO0VBZWYsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVpGO0FBY0U7RUFDRSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FuQ2U7RUFvQ2YsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBRUEsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZk47QUFtQkU7RUFDRSx5QkFsRFc7RUFtRFgsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWpCSjtBQW9CRTtFQUNFLHlCQXpEVztBQXVDZjtBQXFCRTtFQUNFLHlCQTVEVTtBQXlDZDtBQXNCRTtFQUNFLHlCQS9EYztBQTJDbEI7QUF1QkU7RUFDRSx5QkFqRVM7QUE0Q2I7QUF3QkU7RUFDRSx5QkF0RVk7QUFnRGhCO0FBeUJFO0VBQ0UseUJBeEVlO0FBaURuQjtBQXlCRTtFQUNFLHlCQTFFVTtBQW1EZDtBQTJCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQXhCRjtFQTBCRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBRUEsYUFBQTtJQUNBLG1CQUFBO0VBekJKO0VBMkJJO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VBekJOO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG4kY29sb3ItZmFjaWxvdHRvOiAjZWE1YjgwO1xuJGNvbG9yLWJpbmdhem86ICMyODM0Nzk7XG4kY29sb3ItcG96bzogIzA0Yjg2NTtcbiRjb2xvci1taWxsb25hcmlhOiAjYjUxZjIwO1xuJGNvbG9yLXBlZ2EzOiAjNzg0NDk0O1xuXG4ucmVzdWx0Qm94IHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHdpZHRoOiAxOCU7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDExNjg5O1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG5cbiAgICBjb2xvcjogIzAxMTY4OTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nOiA3LjlweCAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgfVxuXG4gIC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5sb3RlcmlhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICB9XG5cbiAgLmxvdHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gIH1cblxuICAuZmFjaWxvdHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZmFjaWxvdHRvO1xuICB9XG5cbiAgLnBvem8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xuICB9XG5cbiAgLmJpbmdhem8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iaW5nYXpvO1xuICB9XG5cbiAgLm1pbGxvbmFyaWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICB9XG4gIC5wZWdhMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBlZ2EzO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucmVzdWx0Qm94IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });


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
            case '12':
                this.loteriaBackground = {
                    backgroundBingazo: true,
                };
                break;
            case '18':
                this.loteriaBackground = {
                    backgroundFacilotto: true,
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
    } }, directives: [_shared_positioning_directive__WEBPACK_IMPORTED_MODULE_0__.PositioningDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_1__.ResultadoComponent], styles: [".blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.resultsBox[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: transparent;\n  z-index: 10000;\n}\n\n.resultBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resultBox[_ngcontent-%COMP%]   .messageBox[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 1px;\n  border-radius: 23px;\n}\n\n.closeBox[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  border-radius: 500px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: red;\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\n.closeBox[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.backgroundLoteriaNacional[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n}\n\n.backgroundLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundFacilotto[_ngcontent-%COMP%] {\n  background-color: #EA5B80;\n}\n\n.backgroundPozoMillonario[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n\n.backgroundBingazo[_ngcontent-%COMP%] {\n  background-color: #283479;\n}\n\n@media screen and (max-width: 1000px) {\n  .resultsBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGFkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJyZXN1bHRhZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrQm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA4MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlc3VsdHNCb3gge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG4ucmVzdWx0Qm94IHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLm1lc3NhZ2VCb3gge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgfVxufVxuXG4uY2xvc2VCb3gge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNsb3NlQm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrZ3JvdW5kTG90ZXJpYU5hY2lvbmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YWFlMTtcbn1cblxuLmJhY2tncm91bmRMb3R0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG59XG5cbi5iYWNrZ3JvdW5kRmFjaWxvdHRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBNUI4MDtcbn1cblxuLmJhY2tncm91bmRQb3pvTWlsbG9uYXJpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNGI4NjU7XG59XG5cbi5iYWNrZ3JvdW5kQmluZ2F6byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODM0Nzk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucmVzdWx0c0JveCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxufSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/loteria/components/ultimo-resultado/ultimo-resultado.component */ 5832);
/* harmony import */ var _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/components/ultimo-resultado/ultimo-resultado.component */ 2092);
/* harmony import */ var _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ultimo-resultado/ultimo-resultado.component */ 4710);
/* harmony import */ var _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../juegos/pozo/components/ultimo-resultado/ultimo-resultado.component */ 3809);
/* harmony import */ var _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/pozoRevancha/components/ultimo-resultado/ultimo-resultado.component */ 9259);
/* harmony import */ var _juegos_bingazo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../juegos/bingazo/components/ultimo-resultado/ultimo-resultado.component */ 7769);
/* harmony import */ var _juegos_pega3_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../juegos/pega3/components/ultimo-resultado/ultimo-resultado.component */ 300);








class UltimosResultadosComponent {
    constructor() { }
    ngOnInit() {
    }
}
UltimosResultadosComponent.ɵfac = function UltimosResultadosComponent_Factory(t) { return new (t || UltimosResultadosComponent)(); };
UltimosResultadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UltimosResultadosComponent, selectors: [["consultas-ultimos-resultados"]], decls: 8, vars: 0, consts: [[1, "selectionBox"], [1, "selectorBox"], [1, "selectorBox", "especial"]], template: function UltimosResultadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "loteria-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "lotto-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "millonaria-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "pozo-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "revancha-ultimo-resultado", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "bingazo-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "pega3-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } }, directives: [_juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_0__.UltimoResultadoComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_2__.UltimoResultadoComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_3__.UltimoResultadoComponent, _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__.UltimoResultadoComponent, _juegos_bingazo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_5__.UltimoResultadoComponent, _juegos_pega3_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_6__.UltimoResultadoComponent], styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  background-color: white;\n  padding: 20px 0;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  min-width: 275px;\n  width: 30%;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox.especial[_ngcontent-%COMP%] {\n  min-width: 300px;\n  max-width: 590px;\n  width: 48%;\n}\n@media screen and (max-width: 1300px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-bottom: 10px;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox.especial[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox.especial[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltb3MtcmVzdWx0YWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNOO0FBSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQURGO0VBR0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFESjtFQUdJO0lBQ0UsVUFBQTtFQUROO0FBQ0Y7QUFNQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUpGO0VBTUU7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUFKSjtFQU1JO0lBQ0UsV0FBQTtFQUpOO0FBQ0YiLCJmaWxlIjoidWx0aW1vcy1yZXN1bHRhZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGlvbkJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIC5zZWxlY3RvckJveCB7XG4gICAgbWluLXdpZHRoOiAyNzVweDtcbiAgICB3aWR0aDogMzAlO1xuXG4gICAgJi5lc3BlY2lhbCB7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgbWF4LXdpZHRoOiA1OTBweDtcbiAgICAgIHdpZHRoOiA0OCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuc2VsZWN0aW9uQm94IHtcbiAgICB3aWR0aDogOTUlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAmLmVzcGVjaWFsIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlbGVjdGlvbkJveCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAmLmVzcGVjaWFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn0iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 1258);
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
/* harmony import */ var _containers_pega3_boletin_pega3_boletin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/pega3-boletin/pega3-boletin.component */ 3563);
/* harmony import */ var _containers_bingazo_boletin_bingazo_boletin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/bingazo-boletin/bingazo-boletin.component */ 7501);
/* harmony import */ var _containers_bingazo_bingazo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/bingazo/bingazo.component */ 3543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);




















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
            {
                path: 'pega3/boletin',
                component: _containers_pega3_boletin_pega3_boletin_component__WEBPACK_IMPORTED_MODULE_14__.Pega3BoletinComponent,
            },
            { path: 'loteria', component: _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__.LoteriaComponent },
            {
                path: 'bingazo/boletin/:sorteo',
                component: _containers_bingazo_boletin_bingazo_boletin_component__WEBPACK_IMPORTED_MODULE_15__.BingazoBoletinComponent,
            },
            { path: 'bingazo', component: _containers_bingazo_bingazo_component__WEBPACK_IMPORTED_MODULE_16__.BingazoComponent },
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
ConsultasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: ConsultasRoutingModule });
ConsultasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ConsultasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


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
  styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(2, auto);\n}\n.selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%] {\n  display: none;\n}\n.selectionBox[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .otros[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    \n    font-family: \"Helvetica\";\n    font-style: italic;\n    font-weight: 700;\n    margin-left: 20px;\n    font-size: 18px;\n    color: #021151 !important;\n    text-transform: uppercase;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFFSjtBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBRUY7RUFERTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBR0o7RUFESTtJQUNFLGlDQUFBO0lBRUEsd0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiY29uc3VsdGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGlvbkJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XG4gIC5vdHJvcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udGVuZWRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5zZWxlY3Rpb25Cb3gge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAub3Ryb3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaDMge1xuICAgICAgICAvKiBDb25zdWx0YSBwb3IgQm9sZXRvIHkgU29ydGVvICovXG5cbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMwMjExNTEgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 4364);
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
/* harmony import */ var _containers_pega3_boletin_pega3_boletin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./containers/pega3-boletin/pega3-boletin.component */ 3563);
/* harmony import */ var _juegos_pega3_pega3_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../juegos/pega3/pega3.module */ 6002);
/* harmony import */ var _containers_bingazo_bingazo_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./containers/bingazo/bingazo.component */ 3543);
/* harmony import */ var _containers_bingazo_boletin_bingazo_boletin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./containers/bingazo-boletin/bingazo-boletin.component */ 7501);
/* harmony import */ var _juegos_bingazo_bingazo_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../juegos/bingazo/bingazo.module */ 4917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 2316);


































class ConsultasModule {
}
ConsultasModule.ɵfac = function ConsultasModule_Factory(t) { return new (t || ConsultasModule)(); };
ConsultasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: ConsultasModule });
ConsultasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule,
            _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasRoutingModule,
            _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__.LoteriaModule,
            _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__.LottoModule,
            _juegos_bingazo_bingazo_module__WEBPACK_IMPORTED_MODULE_31__.BingazoModule,
            _juegos_pega3_pega3_module__WEBPACK_IMPORTED_MODULE_28__.Pega3Module,
            _juegos_facilotto_facilotto_module__WEBPACK_IMPORTED_MODULE_26__.FacilottoModule,
            _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_16__.PozoModule,
            _juegos_pozoRevancha_pozo_revancha_module__WEBPACK_IMPORTED_MODULE_23__.PozoRevanchaModule,
            _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_17__.MillonariaModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_18__.VentasModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](ConsultasModule, { declarations: [_consultas_component__WEBPACK_IMPORTED_MODULE_1__.ConsultasComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_3__.ResultadoComponent,
        _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_4__.ResultadosComponent,
        _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_5__.LoteriaComponent,
        _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_6__.PozoComponent,
        _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_7__.LottoComponent,
        _containers_bingazo_bingazo_component__WEBPACK_IMPORTED_MODULE_29__.BingazoComponent,
        _containers_bingazo_boletin_bingazo_boletin_component__WEBPACK_IMPORTED_MODULE_30__.BingazoBoletinComponent,
        _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_8__.MillonariaComponent,
        _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_9__.UltimosResultadosComponent,
        _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_10__.LoteriaBoletinComponent,
        _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_11__.LottoBoletinComponent,
        _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_12__.PozoBoletinComponent,
        _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_13__.MillonariaBoletinComponent,
        _containers_pega3_boletin_pega3_boletin_component__WEBPACK_IMPORTED_MODULE_27__.Pega3BoletinComponent,
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__.HomeComponent,
        _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_21__.RevanchaComponent,
        _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_22__.RevanchaBoletinComponent,
        _containers_facilotto_facilotto_component__WEBPACK_IMPORTED_MODULE_24__.FacilottoComponent,
        _containers_facilotto_boletin_facilotto_boletin_component__WEBPACK_IMPORTED_MODULE_25__.FacilottoBoletinComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule,
        _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasRoutingModule,
        _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_14__.LoteriaModule,
        _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_15__.LottoModule,
        _juegos_bingazo_bingazo_module__WEBPACK_IMPORTED_MODULE_31__.BingazoModule,
        _juegos_pega3_pega3_module__WEBPACK_IMPORTED_MODULE_28__.Pega3Module,
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
        _containers_bingazo_bingazo_component__WEBPACK_IMPORTED_MODULE_29__.BingazoComponent,
        _containers_bingazo_boletin_bingazo_boletin_component__WEBPACK_IMPORTED_MODULE_30__.BingazoBoletinComponent,
        _components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_9__.UltimosResultadosComponent,
        _containers_loteria_boletin_loteria_boletin_component__WEBPACK_IMPORTED_MODULE_10__.LoteriaBoletinComponent,
        _containers_lotto_boletin_lotto_boletin_component__WEBPACK_IMPORTED_MODULE_11__.LottoBoletinComponent,
        _containers_pozo_boletin_pozo_boletin_component__WEBPACK_IMPORTED_MODULE_12__.PozoBoletinComponent,
        _containers_millonaria_boletin_millonaria_boletin_component__WEBPACK_IMPORTED_MODULE_13__.MillonariaBoletinComponent,
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_19__.HomeComponent,
        _containers_revancha_revancha_component__WEBPACK_IMPORTED_MODULE_21__.RevanchaComponent,
        _containers_revancha_boletin_revancha_boletin_component__WEBPACK_IMPORTED_MODULE_22__.RevanchaBoletinComponent] }); })();


/***/ }),

/***/ 7501:
/*!***********************************************************************************!*\
  !*** ./src/app/consultas/containers/bingazo-boletin/bingazo-boletin.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BingazoBoletinComponent": () => (/* binding */ BingazoBoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_bingazo_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/bingazo/components/boletin/boletin.component */ 222);
/* harmony import */ var _juegos_bingazo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/bingazo/components/ultimo-resultado/ultimo-resultado.component */ 7769);




class BingazoBoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(['/consultas/bingazo']);
    }
}
BingazoBoletinComponent.ɵfac = function BingazoBoletinComponent_Factory(t) { return new (t || BingazoBoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
BingazoBoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BingazoBoletinComponent, selectors: [["consultas-bingazo-boletin"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"], [1, "masResultados", 3, "click"]], template: function BingazoBoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "bingazo-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "bingazo-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BingazoBoletinComponent_Template_button_click_3_listener() { return ctx.verMasResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VER M\u00C1S RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_bingazo_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_bingazo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmdhem8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJiaW5nYXpvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tYXNSZXN1bHRhZG9zIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjUxZjIwO1xuICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2I1MWYyMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgLmNvbnN1bHRhQm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ 3543:
/*!*******************************************************************!*\
  !*** ./src/app/consultas/containers/bingazo/bingazo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BingazoComponent": () => (/* binding */ BingazoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_bingazo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/bingazo/components/consulta/consulta.component */ 7631);
/* harmony import */ var _juegos_bingazo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/bingazo/components/ultimo-resultado/ultimo-resultado.component */ 7769);
/* harmony import */ var _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ventas/components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/resultados/resultados.component */ 6825);






function BingazoComponent_div_4_consultas_resultados_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "consultas-resultados", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function BingazoComponent_div_4_consultas_resultados_1_Template_consultas_resultados_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.closeBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isLoteriaNacional", true)("resultados", ctx_r1.resultados);
} }
function BingazoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BingazoComponent_div_4_consultas_resultados_1_Template, 1, 2, "consultas-resultados", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showResultados);
} }
class BingazoComponent {
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
BingazoComponent.ɵfac = function BingazoComponent_Factory(t) { return new (t || BingazoComponent)(); };
BingazoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BingazoComponent, selectors: [["consultas-bingazo"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "consultaBox", 3, "resultados"], [1, "selectorBox"], [1, "menuBox", 3, "miniBox"], ["class", "modalBox", 4, "ngIf"], [1, "modalBox"], ["tipoLoteria", "12", 3, "isLoteriaNacional", "resultados", "close", 4, "ngIf"], ["tipoLoteria", "12", 3, "isLoteriaNacional", "resultados", "close"]], template: function BingazoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "bingazo-consulta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resultados", function BingazoComponent_Template_bingazo_consulta_resultados_1_listener($event) { return ctx.toggleResultados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "bingazo-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ventas-menu-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BingazoComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("miniBox", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultados);
    } }, directives: [_juegos_bingazo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_bingazo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmdhem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUE7O2tCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUVFO0VBQ0UsVUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGRjtFQUdFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFESjtFQUdFO0lBQ0UsYUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoiYmluZ2F6by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICAvKiBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgZ2FwOiAzMHB4OyAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5jb25zdWx0YUJveCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5zZWxlY3RvckJveCB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG4gIC5tZW51Qm94IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuY29uc3VsdGFCb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, directives: [_juegos_facilotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #EA5B80;\n    border: 1px solid #EA5B80;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #EA5B80;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2lsb3R0by1ib2xldGluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBRUE7O29CQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0FBREo7QUFHSTtFQUNFLFVBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBTUU7RUFDRTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFISjtFQUtJO0lBQ0UsY0FBQTtFQUhOOztFQU1FO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUhKO0VBSUk7SUFDRSxXQUFBO0VBRk47RUFJSTtJQUNFLGFBQUE7RUFGTjtBQUNGIiwiZmlsZSI6ImZhY2lsb3R0by1ib2xldGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICAgIGdhcDogMzBweDsgKi9cbiAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgXG4gICAgLmNvbnN1bHRhQm94IHtcbiAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxuICBcbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgd2lkdGg6IDM2MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1hc1Jlc3VsdGFkb3Mge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNUI4MDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQTVCODA7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRUE1QjgwO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuY29uc3VsdGFCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


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
    } }, directives: [_juegos_facilotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_facilotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2lsb3R0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBREY7O0FBRUU7RUFDRSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFLQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUZGO0VBR0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQURKO0VBR0U7SUFDRSxhQUFBO0VBREo7QUFDRiIsImZpbGUiOiJmYWNpbG90dG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICBnYXA6IDMwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmNvbnN1bHRhQm94IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnNlbGVjdG9yQm94IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbiAgLm1lbnVCb3gge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
    } }, directives: [_juegos_loteria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #35aee2;\n    border: 1px solid #35aee2;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #35aee2;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztvQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7QUFGSjtBQU1BO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEY7RUFLRTtJQUNFLGNBQUE7RUFISjs7RUFNQTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFIRjtFQUlFO0lBQ0UsV0FBQTtFQUZKO0VBSUU7SUFDRSxhQUFBO0VBRko7QUFDRiIsImZpbGUiOiJsb3RlcmlhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcbiAgICAgICAgZ2FwOiAzMHB4OyAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIC5jb25zdWx0YUJveCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5zZWxlY3RvckJveCB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubWFzUmVzdWx0YWRvcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWVlMjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzVhZWUyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzM1YWVlMjtcbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLmNvbnN1bHRhQm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, directives: [_juegos_loteria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_loteria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUE7O2dCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUVJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsWUFBQTtBQUROOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBRE47O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGSjtFQUdJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFETjtFQUdJO0lBQ0UsYUFBQTtFQUROO0FBQ0YiLCJmaWxlIjoibG90ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcbiAgICAgIGdhcDogMzBweDsgKi9cbiAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLmNvbnN1bHRhQm94IHtcbiAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxuICBcbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgd2lkdGg6IDM2MHB4O1xuICAgIH1cbiAgICAubWVudUJveCB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAuY29uc3VsdGFCb3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });


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
    } }, directives: [_juegos_lotto_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFNQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQUhGO0VBS0U7SUFDRSxjQUFBO0VBSEo7O0VBTUE7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBSEY7RUFJRTtJQUNFLFdBQUE7RUFGSjtFQUlFO0lBQ0UsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoibG90dG8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICBnYXA6IDMwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgLmNvbnN1bHRhQm94IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnNlbGVjdG9yQm94IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tYXNSZXN1bHRhZG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUxZjIwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNTFmMjA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjYjUxZjIwO1xuICAgIH1cbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuY29uc3VsdGFCb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
    } }, directives: [_juegos_lotto_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_lotto_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFFRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRkY7RUFHRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBREo7RUFHRTtJQUNFLGFBQUE7RUFESjtBQUNGIiwiZmlsZSI6ImxvdHRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICBnYXA6IDMwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmNvbnN1bHRhQm94IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnNlbGVjdG9yQm94IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbiAgLm1lbnVCb3gge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
    } }, directives: [_juegos_millonaria_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n    border: 1px solid #b51f20;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #b51f20;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJtaWxsb25hcmlhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tYXNSZXN1bHRhZG9zIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjUxZjIwO1xuICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2I1MWYyMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgLmNvbnN1bHRhQm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"] });


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
    } }, directives: [_juegos_millonaria_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_millonaria_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUE7O2tCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUVFO0VBQ0UsVUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGRjtFQUdFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFESjtFQUdFO0lBQ0UsYUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoibWlsbG9uYXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICAvKiBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgZ2FwOiAzMHB4OyAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5jb25zdWx0YUJveCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5zZWxlY3RvckJveCB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG4gIC5tZW51Qm94IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuY29uc3VsdGFCb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3563:
/*!*******************************************************************************!*\
  !*** ./src/app/consultas/containers/pega3-boletin/pega3-boletin.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pega3BoletinComponent": () => (/* binding */ Pega3BoletinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _juegos_pega3_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pega3/components/boletin/boletin.component */ 6460);
/* harmony import */ var _juegos_pega3_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/pega3/components/ultimo-resultado/ultimo-resultado.component */ 300);




class Pega3BoletinComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    verMasResultados() {
        this.router.navigate(['/consultas/pega3']);
    }
}
Pega3BoletinComponent.ɵfac = function Pega3BoletinComponent_Factory(t) { return new (t || Pega3BoletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
Pega3BoletinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Pega3BoletinComponent, selectors: [["app-pega3-boletin"]], decls: 3, vars: 0, consts: [[1, "container"], [1, "consultaBox"], [1, "selectorBox"]], template: function Pega3BoletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "pega3-boletin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "pega3-ultimo-resultado", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_juegos_pega3_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_pega3_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #EA5B80;\n    border: 1px solid #EA5B80;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #EA5B80;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZ2EzLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBQ0UsVUFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFNRTtFQUNFO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQUhKO0VBS0k7SUFDRSxjQUFBO0VBSE47O0VBTUU7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBSEo7RUFJSTtJQUNFLFdBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoicGVnYTMtYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICBcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcbiAgICAgICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tYXNSZXN1bHRhZG9zIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTVCODA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUE1QjgwO1xuICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI0VBNUI4MDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgLmNvbnN1bHRhQm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"] });


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
    } }, directives: [_juegos_pozo_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #04b865;\n    border: 1px solid #04b865;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #04b865;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8tYm9sZXRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBOztvQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7QUFGTjtBQU1FO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBSEo7RUFLSTtJQUNFLGNBQUE7RUFITjs7RUFNRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJwb3pvLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICAgICAgZ2FwOiAzMHB4OyAqL1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBcbiAgICAuY29uc3VsdGFCb3gge1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG4gIFxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICB3aWR0aDogMzYwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWFzUmVzdWx0YWRvcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRiODY1O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA0Yjg2NTtcbiAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwNGI4NjU7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIC5jb25zdWx0YUJveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnNlbGVjdG9yQm94IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"] });


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
    } }, directives: [_juegos_pozo_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_pozo_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUE7O2tCQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUVFO0VBQ0UsVUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGRjtFQUdFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFESjtFQUdFO0lBQ0UsYUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoicG96by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICAvKiBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MSUgMWZyO1xuICAgICAgZ2FwOiAzMHB4OyAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5jb25zdWx0YUJveCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5zZWxlY3RvckJveCB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG4gIC5tZW51Qm94IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuY29uc3VsdGFCb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, directives: [_juegos_pozoRevancha_components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_0__.BoletinComponent, _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n@media screen and (max-width: 1000px) {\n  .masResultados[_ngcontent-%COMP%] {\n    background-color: #04b865;\n    border: 1px solid #04b865;\n  }\n  .masResultados[_ngcontent-%COMP%]:hover {\n    color: #04b865;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmFuY2hhLWJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFFQTs7b0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBQ0UsVUFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFNRTtFQUNFO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQUhKO0VBS0k7SUFDRSxjQUFBO0VBSE47O0VBTUU7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBSEo7RUFJSTtJQUNFLFdBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoicmV2YW5jaGEtYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICBcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDFmcjtcbiAgICAgICAgICBnYXA6IDMwcHg7ICovXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFxuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgXG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tYXNSZXN1bHRhZG9zIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGI4NjU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDRiODY1O1xuICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzA0Yjg2NTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgLmNvbnN1bHRhQm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuc2VsZWN0b3JCb3gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"] });


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
    } }, directives: [_juegos_pozoRevancha_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent, _juegos_pozoRevancha_components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_1__.UltimoResultadoComponent, _ventas_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_2__.MenuBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_3__.ResultadosComponent], styles: [".modalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  z-index: 100;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  \n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.container[_ngcontent-%COMP%]   .menuBox[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 30%;\n}\n\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .container[_ngcontent-%COMP%]   .consultaBox[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .container[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmFuY2hhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUVBOztrQkFBQTtFQUlBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFFRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRkY7RUFHRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBREo7RUFHRTtJQUNFLGFBQUE7RUFESjtBQUNGIiwiZmlsZSI6InJldmFuY2hhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcxJSAxZnI7XG4gICAgICBnYXA6IDMwcHg7ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmNvbnN1bHRhQm94IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnNlbGVjdG9yQm94IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbiAgLm1lbnVCb3gge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5jb25zdWx0YUJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zZWxlY3RvckJveCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #EA5B80;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxjQUhXO0FBSGYiLCJmaWxlIjoiYm9sZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICNFQTVCODA7XG4uYm9sZXRpbl9vZmljaWFsIHtcbiAgaDEge1xuICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICB9XG59XG4iXX0= */"]
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
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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
    this.maxDigits = 5;
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

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

  validarSorteo() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let validacion = yield _this2.consulta.validarSorteo(_this2.sorteoGanador);
      } catch (e) {
        throw new Error(e.error.message);
      }
    })();
  }

  buscarBoletoGanador() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this3.triggerLoader();

        if (!_this3.combinacionesAux.length) throw new Error('Por favor, escribe al menos una combinación que quieras consultar');
        let aux = _this3.combinacionesAux;

        if (_this3.combinacionesAux[_this3.combinacionesAux.length - 1] == ' ') {
          aux = _this3.combinacionesAux.slice(0, -2);
        }

        let combinaciones = aux.split(', ');
        combinaciones = combinaciones.map((combinacion, index) => {
          let auxLength = combinacion.length;

          if (auxLength != 0) {
            if (auxLength < _this3.maxDigits) {
              let auxAdd = _this3.maxDigits - auxLength;

              for (let i = 1; i <= auxAdd; i++) {
                combinacion = `0${combinacion}`;
              }
            }

            return combinacion;
          }
        });

        if (_this3.sorteoGanador == 'default') {
          _this3.dismissLoader();

          _this3.openError('Por favor, selecciona un sorteo');

          return;
        }

        yield _this3.validarSorteo();
        let data = yield _this3.consulta.recuperarBoletoGanador(_this3.sorteoGanador, combinaciones);

        _this3.resultados.emit(data);

        _this3.dismissLoader();
      } catch (e) {
        _this3.dismissLoader();

        _this3.openError(e.message);

        console.log(e);
      }
    })();
  }

  buscarBoletin() {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4.sorteoBoletin == 'default') {
        _this4.openError('Por favor, selecciona un sorteo');

        return;
      }

      _this4.router.navigateByUrl(`/consultas/facilotto/boletin/${_this4.sorteoBoletin}`);
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #EA5B80;\n  border: 2px solid #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #EA5B80;\n  border: 1px solid #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #EA5B80;\n  border: 1px solid #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #EA5B80;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #EA5B80;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICNFQTVCODA7XG5cbiVpbnB1dCB7XG4gIHBhZGRpbmc6IDEzcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgY29sb3I6ICM5Nzc0NzQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xufVxuXG4uY29udGFpbmVyX2NvbnN1bHRhIHtcbiAgLmN1ZXJwb19ib2xldGluIHtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgIH1cblxuICAgIC5leHBsaWNhY2lvbiB7XG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XG4gICAgICAgIC5pY29ubyB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uc3VsdGFfYm9sZXRvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgIH1cbiAgICAgIC5mb3JtdWxhcmlvIHtcbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAuaW5wdXRfY29udGVudCB7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBpZV9ib2xldGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gIH1cbn1cbiJdfQ== */"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, ctx.premio, "5.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  -webkit-text-stroke: 2px #EA5B80;\n  text-align: center;\n  color: #EA5B80;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #EA5B80;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  -webkit-text-stroke: 2px #EA5B80;\n  text-align: center;\n  font-style: italic;\n  color: #EA5B80;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #EA5B80;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #EA5B80;\n  border-radius: 150px;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n    padding: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFhTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsWUFBQTtBQWJSO0FBZU07RUFDRSx3QkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQk07RUFDRSxXQUFBO0VBQ0EsbUNBbERXO0VBbURYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZFI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FqRU07RUFrRU4saUNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFFTTtFQTJFTixtQ0EvRVc7QUE4RG5CO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFvQk07RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4Rk07RUF5Rk4sd0JBOUZRO0VBK0ZSLGdCQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBakdNO0VBa0dOLG1DQXRHVztBQW1GbkI7QUF1Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQTlHYTtBQXlGbkI7QUF5QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQWpJTztFQW1JUCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6Qlo7QUE4Qk07RUFDRSxrQkFBQTtBQTVCUjtBQThCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTVCVjtBQStCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTdCVjtBQStCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FqS087RUFrS1AsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3Qlo7QUFxQ0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0VBcENOO0FBQ0YiLCJmaWxlIjoidGlja2V0LWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1wcmVtaW86IFwiSGFudW1hblwiO1xuJGZ1ZW50ZS10aXR1bG86IFwiSGVsdmV0aWNhXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICNFQTVCODA7XG5cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG8ge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2xvZ28ge1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fYmFycmEge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC50aWNrZXRfdGl0dWxvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpY2tldF9tb250byB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWxvdHRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXByZW1pbyFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICB9XG5cbiAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICB9XG4gICAgfVxuICAgIC50aWNrZXRfdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1sb3R0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlja2V0X2VudGVyb19mcmFjY2lvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgLnRpY2tldF9lbnRlcm8ge1xuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRpY2tldF9lbnRlcm8ge1xuICAgIGRpdiB7XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #EA5B80;\n  background-color: #EA5B80;\n  position: relative;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  top: 20px;\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  bottom: 5px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 132px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 115px;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJhO0VBY2IseUJBZGE7RUFlYixrQkFBQTtFQUNBLHNCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBcENhO0VBcUNiLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQVBKO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBKO0FBV0E7RUFFSTtJQUNFLGVBQUE7RUFUSjtFQVdFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUFUSjtBQUNGO0FBWUE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFYSjtBQUNGIiwiZmlsZSI6InRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItYm90dG9uOiAjRUE1QjgwO1xuXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwIHtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgfVxuICB9XG4gIC5mcmFjdGlvbnNCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5mcmFjY2lvbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICBtYXJnaW46IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxNiU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuICBpbWcudHJhc2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpXG4gICAgICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gIH1cbiAgaW1nLnRyYXNoOmhvdmVyIHtcbiAgICB3aWR0aDogOCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG4gIGltZy5sb2dvVGlja2V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3R0b206IDVweDtcbiAgICByaWdodDogNXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBpbWcubG9nb1RpY2tldCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICB0b3A6IDEzMnB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gICAgaW1nLmxvZ29UaWNrZXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMTVweDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
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




function UltimoResultadoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "facilotto-ticket-consulta", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ticket", ctx_r0.ticketGanador);
} }
function UltimoResultadoComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
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
            this.ticketNumbers = data.ultimoResultadoFacilotto.combinacion1.split('');
            this.ticketGanador = {
                ticketIndex: data.ultimoResultadoFacilotto.codigo,
                description: 'Boleto Ganador',
                ticketNumbers: this.ticketNumbers,
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
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["facilotto-ultimo-resultado"]], decls: 12, vars: 2, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "assets/img/facilotto-sombra.png", "alt", ""], ["size", "2px"], [4, "ngIf"], [1, "boton_comprar"], [3, "click"], [1, "scroll"], [3, "ticket"], [1, "consultaError"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UltimoResultadoComponent_ng_container_5_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UltimoResultadoComponent_ng_container_6_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_8_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_10_listener() { return ctx.verResultados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "OTROS RESULTADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_0__.TicketConsultaComponent], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #ea5b80;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #ea5b80;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #ea5b80;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 58%;\n  padding: 15px 30px;\n  background-color: #ea5b80;\n  border: 1px solid #ea5b80;\n  border-radius: 15px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 10px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  width: 40%;\n  padding: 15px 15px !important;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #ea5b80;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-template-rows: repeat(4, auto);\n  text-align: left;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0VBQ0EsK0JBeEJVO0VBeUJWLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQTVCVTtBQW1CZDtBQVlFO0VBQ0UsY0FBQTtFQVVBOzs7U0FBQTtBQWhCSjtBQVFJO0VBQ0Usd0JBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBZUk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFmTjtBQWlCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWZaO0FBbUJRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFqQlY7QUFtQlU7RUFDRSxtQ0ExRk87RUEyRlAsZUFBQTtBQWpCWjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBckJSO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXJCVjtBQXVCVTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFsSEk7RUFtSEosZUFBQTtBQXJCWjtBQXdCVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXJIRTtFQXNIRiwrQkEzSEk7QUFxR2hCO0FBMEJRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQXBJUztBQTRHbkI7QUEwQlU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBeEJaO0FBMkJVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQTFCWjtBQTRCWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFCZDtBQTZCWTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQmQ7QUFpQ007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEvQlI7QUFpQ1E7RUFDRSxXQUFBO0FBL0JWO0FBcUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW5DSjtBQXFDSTtFQUtFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQXhMUTtFQXlMUix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0E5TFc7RUErTFgsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUF2Q047QUF5Qk07RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUF2QlI7QUFvQ007RUFDRSxzQkFBQTtFQUNBLGNBbk1NO0FBaUtkO0FBdUNFO0VBQ0UsWUFBQTtFQUNBLCtCQS9NWTtFQWdOWixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUF0Q0o7QUF5Q0U7RUFDRSxrQkFBQTtBQXZDSjtBQXlDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkE3TlU7RUE4TlYsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXZDTjtBQTBDSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBeENOO0FBMENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQTNPVztFQTRPWCxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBeENSO0FBNkNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBN0NKO0FBK0NJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUE3Q04iLCJmaWxlIjoidWx0aW1vLXJlc3VsdGFkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1sb3R0bzogI2VhNWI4MDtcblxuLmNvbnRlbmVkb3JfdGlja2V0IHtcbiAgLmxvZ29fdGlja2V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgaHIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItbG90dG87XG4gIH1cblxuICAuc2Nyb2xsIHtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICB9XG5cbiAgICAvKiAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50LFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH0gKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgLmNvbnRlbmVkb3JfdGl0dWxvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogOXB4O1xuXG4gICAgICAgIC5jb250ZW5lZG9yX2xvZ28ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbmVkb3JfaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiBhdXRvIDEwcHg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVuZWRvcl9tb250b19wcmVtaW8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLm1vbnRvX3NvcnRlbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuXG4gICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVuZWRvcl9udW1lcm9zIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1hcmdpbjogbGVmdDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgICAgIC5udW1lcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW5lZG9yX24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcblxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVuZWRvcl9jb2RpZ29fYmFycmEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm90b25fY29tcHJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIHdpZHRoOiA1OCU7XG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLnRpY2tldF9lbnRlcm8ge1xuICAgIHBhZGRpbmctbGVmdDogMTNweDtcblxuICAgIGg1IHtcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcblxuICAgICAgcCB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50ZXh0b19wcmVtaW9zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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


/***/ }),

/***/ 6460:
/*!**********************************************************************!*\
  !*** ./src/app/juegos/pega3/components/boletin/boletin.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletinComponent": () => (/* binding */ BoletinComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);






function BoletinComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" N\u00B0 ", option_r3, " ");
  }
}

function BoletinComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.boletin, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function BoletinComponent_app_loader_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader", 11);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("message", ctx_r2.loadingMessage);
  }
}

class BoletinComponent {
  constructor() {
    this.imgNotFound = false;
    this.showBox = false;
    this.isLoading = false;
    this.loadingMessage = 'Buscando el boletin';
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.triggerLoader();

      _this.sorteosJugados = JSON.parse(localStorage.getItem('pega3Sorteos'));
      _this.boletines = JSON.parse(localStorage.getItem('pega3Boletines'));
      _this.sorteoGanador = _this.sorteosJugados[0];
      _this.boletin = _this.boletines[0].ruta;
      _this.showBox = true;

      _this.dismissLoader();
    })();
  }

  changeBoletin() {
    this.showBox = false;
    this.boletin = "";
    let i = this.boletines.findIndex(o => o.sorteo == this.sorteoGanador);
    this.boletin = this.boletines[i].ruta;
    this.showBox = true;
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
  return new (t || BoletinComponent)();
};

BoletinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BoletinComponent,
  selectors: [["pega3-boletin"]],
  decls: 12,
  vars: 4,
  consts: [[1, "boletin_oficial"], [1, "input_content"], ["for", ""], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "change", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "container_boletin", 4, "ngIf"], ["loader", "pega3", 3, "message", 4, "ngIf"], [3, "value"], [1, "container_boletin"], ["alt", "Imagen del boletin de pega3", 3, "src"], ["loader", "pega3", 3, "message"]],
  template: function BoletinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Bolet\u00EDn Oficial");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ELIGE UN SORTEO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BoletinComponent_Template_select_change_6_listener() {
        return ctx.changeBoletin();
      })("ngModelChange", function BoletinComponent_Template_select_ngModelChange_6_listener($event) {
        return ctx.sorteoGanador = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Seleccione un sorteo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BoletinComponent_option_9_Template, 2, 2, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BoletinComponent_div_10_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BoletinComponent_app_loader_11_Template, 1, 1, "app-loader", 7);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sorteoGanador);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sorteosJugados);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
  styles: [".boletin_oficial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #784494;\n}\n\n.input_content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #784494;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 10px;\n}\n\n.input_content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #784494;\n  padding-right: 10px;\n  font-size: 25px;\n}\n\n.input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: white;\n  border: none;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxjQUpXO0FBSGY7O0FBV0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFTRTtFQUNFLFlBQUE7RUFDQSx5QkFuQlc7RUFvQlgsbUJBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVJKIiwiZmlsZSI6ImJvbGV0aW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItYm90dG9uOiAjNzg0NDk0O1xuXG4uYm9sZXRpbl9vZmljaWFsIHtcbiAgaDEge1xuICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICB9XG59XG5cbi5pbnB1dF9jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn0iXX0= */"]
});

/***/ }),

/***/ 6984:
/*!************************************************************************!*\
  !*** ./src/app/juegos/pega3/components/consulta/consulta.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaComponent": () => (/* binding */ ConsultaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/consulta.service */ 7586);
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
    this.maxDigits = 5;
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

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

  validarSorteo() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let validacion = yield _this2.consulta.validarSorteo(_this2.sorteoGanador);
      } catch (e) {
        throw new Error(e.error.message);
      }
    })();
  }

  buscarBoletoGanador() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this3.triggerLoader();

        if (!_this3.combinacionesAux.length) throw new Error('Por favor, escribe al menos una combinación que quieras consultar');
        let aux = _this3.combinacionesAux;

        if (_this3.combinacionesAux[_this3.combinacionesAux.length - 1] == ' ') {
          aux = _this3.combinacionesAux.slice(0, -2);
        }

        let combinaciones = aux.split(', ');
        combinaciones = combinaciones.map((combinacion, index) => {
          let auxLength = combinacion.length;

          if (auxLength != 0) {
            if (auxLength < _this3.maxDigits) {
              let auxAdd = _this3.maxDigits - auxLength;

              for (let i = 1; i <= auxAdd; i++) {
                combinacion = `0${combinacion}`;
              }
            }

            return combinacion;
          }
        });

        if (_this3.sorteoGanador == 'default') {
          _this3.dismissLoader();

          _this3.openError('Por favor, selecciona un sorteo');

          return;
        }

        yield _this3.validarSorteo();
        let data = yield _this3.consulta.recuperarBoletoGanador(_this3.sorteoGanador, combinaciones);

        _this3.resultados.emit(data);

        _this3.dismissLoader();
      } catch (e) {
        _this3.dismissLoader();

        _this3.openError(e.message);

        console.log(e);
      }
    })();
  }

  buscarBoletin() {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4.sorteoBoletin == 'default') {
        _this4.openError('Por favor, selecciona un sorteo');

        return;
      }

      _this4.router.navigateByUrl(`/consultas/pega3/boletin/${_this4.sorteoBoletin}`);
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
  selectors: [["pega3-consulta"]],
  outputs: {
    resultados: "resultados"
  },
  decls: 61,
  vars: 7,
  consts: [[1, "container_consulta"], [1, "cuerpo_boletin"], [1, "explicacion"], [1, "content_explicacion"], [1, "icono"], [1, "separador"], [1, "consulta_boleto"], [1, ""], ["action", "", 1, "formulario"], [1, "input"], [1, "input_content"], ["for", ""], ["name", "combinaciones", "type", "text", 3, "ngModel", "keydown", "click", "focus", "input", "ngModelChange"], [1, "tag"], ["name", "sorteoGanador", "id", "sorteoGanador", "placeholder", "", 3, "ngModel", "ngModelChange"], ["value", "default", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "consulta_boleto", "espacio"], ["name", "sorteoBoletin", "id", "sorteoBoletin", "placeholder", "", 3, "ngModel", "ngModelChange"], ["loader", "pega3", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "value"], ["loader", "pega3", 3, "message"], [3, "msg", "closeError"]],
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
  styles: [".container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 13px 0px;\n  padding-left: 6px;\n  color: #977474;\n  background-color: white;\n  border: none;\n  border-left: 4px solid #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .explicacion[_ngcontent-%COMP%]   .content_explicacion[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  color: #784494;\n  border: 2px solid #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .input_content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  \n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  background-color: #784494;\n  border: 1px solid #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #784494;\n  border: 1px solid #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .cuerpo_boletin[_ngcontent-%COMP%]   .consulta_boleto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #784494;\n}\n\n.container_consulta[_ngcontent-%COMP%]   .pie_boletin[_ngcontent-%COMP%] {\n  background-color: #784494;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVdJO0VBQ0UsY0FkUTtBQU1kOztBQWFRO0VBQ0UsY0FwQkk7RUFxQkoseUJBQUE7QUFYVjs7QUFpQk07RUFDRSxjQTVCTTtBQWFkOztBQW9CWTtFQUNFLGlCQUFBO0FBbEJkOztBQStCVTtFQUNFLGdCQUFBO0VBRUEseUJBbERFO0VBbURGLHlCQUFBO0FBOUJaOztBQStCWTtFQUNFLGNBckRBO0FBd0JkOztBQWlDUTtFQUNFLHlCQTFESTtFQTJESix5QkFBQTtBQS9CVjs7QUFpQ1U7RUFDRSxjQTlERTtBQStCZDs7QUFzQ0U7RUFDRSx5QkF0RVU7QUFrQ2QiLCJmaWxlIjoiY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICM3ODQ0OTQ7XG5cbiVpbnB1dCB7XG4gIHBhZGRpbmc6IDEzcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgY29sb3I6ICM5Nzc0NzQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xufVxuXG4uY29udGFpbmVyX2NvbnN1bHRhIHtcbiAgLmN1ZXJwb19ib2xldGluIHtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgIH1cblxuICAgIC5leHBsaWNhY2lvbiB7XG4gICAgICAuY29udGVudF9leHBsaWNhY2lvbiB7XG4gICAgICAgIC5pY29ubyB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uc3VsdGFfYm9sZXRvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgIH1cbiAgICAgIC5mb3JtdWxhcmlvIHtcbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAuaW5wdXRfY29udGVudCB7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSAzOCAqL1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICAgICAgICBAZXh0ZW5kICVpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgQGV4dGVuZCAlaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA2ICovXG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBpZV9ib2xldGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 6621:
/*!********************************************************************!*\
  !*** ./src/app/juegos/pega3/components/sorteo/sorteo.component.ts ***!
  \********************************************************************/
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
SorteoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SorteoComponent, selectors: [["pega3-sorteo"]], decls: 2, vars: 0, template: function SorteoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sorteo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0ZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 392:
/*!**************************************************************************************!*\
  !*** ./src/app/juegos/pega3/components/ticket-consulta/ticket-consulta.component.ts ***!
  \**************************************************************************************/
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
TicketConsultaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketConsultaComponent, selectors: [["pega3-ticket-consulta"]], inputs: { ticket: "ticket" }, decls: 18, vars: 7, consts: [[1, "contenedor_informacion_ticket"], [1, "contenedor_informacion_ticket_derecho"], [1, "ticket_titulo"], [4, "ngIf"], [1, "ticket_title"], [1, "ticket_monto"], [1, "ticket_entero_fraccion"], [1, "ticket_entero"], [4, "ngFor", "ngForOf"]], template: function TicketConsultaComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, ctx.premio, "5.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketNumbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe], styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo[_ngcontent-%COMP%]   .contenedor_informacion_ticket_izquierdo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 120px;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-size: 16px;\n  margin-left: 10px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Helvetica\";\n  font-style: normal;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 30px;\n  -webkit-text-stroke: 2px #784494;\n  text-align: center;\n  color: #784494;\n  font-family: \"Hanuman\" !important;\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_monto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #784494;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 20px;\n  -webkit-text-stroke: 2px #784494;\n  text-align: center;\n  font-style: italic;\n  color: #784494;\n  font-family: \"Helvetica\";\n  margin: 10px 0px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #784494;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0 0 15px 0;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4px solid #784494;\n  border-radius: 150px;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #000;\n  margin: 0px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_informacion_ticket_derecho[_ngcontent-%COMP%]   .ticket_entero_fraccion[_ngcontent-%COMP%]   .ticket_fraccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1000px) {\n  .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n    padding: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC1jb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFhTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhSO0FBZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsWUFBQTtBQWJSO0FBZU07RUFDRSx3QkE1Q1E7RUE2Q1IsZUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQk07RUFDRSxXQUFBO0VBQ0EsbUNBbERXO0VBbURYLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZFI7QUFrQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FqRU07RUFrRU4saUNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFFTTtFQTJFTixtQ0EvRVc7QUE4RG5CO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFvQk07RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4Rk07RUF5Rk4sd0JBOUZRO0VBK0ZSLGdCQUFBO0FBbEJSO0FBcUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBakdNO0VBa0dOLG1DQXRHVztBQW1GbkI7QUF1Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQTlHYTtBQXlGbkI7QUF5QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXZCVjtBQTBCUTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQWpJTztFQW1JUCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6Qlo7QUE4Qk07RUFDRSxrQkFBQTtBQTVCUjtBQThCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTVCVjtBQStCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTdCVjtBQStCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FqS087RUFrS1AsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3Qlo7QUFxQ0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0VBcENOO0FBQ0YiLCJmaWxlIjoidGlja2V0LWNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1wcmVtaW86IFwiSGFudW1hblwiO1xuJGZ1ZW50ZS10aXR1bG86IFwiSGVsdmV0aWNhXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICM3ODQ0OTQ7XG5cbi5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG8ge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG5cbiAgICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXRfaXpxdWllcmRvX2xvZ28ge1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldF9penF1aWVyZG9fYmFycmEge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbmVkb3JfaW5mb3JtYWNpb25fdGlja2V0X2RlcmVjaG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC50aWNrZXRfdGl0dWxvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpY2tldF9tb250byB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJGNvbG9yLWxvdHRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXByZW1pbyFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICB9XG5cbiAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICB9XG4gICAgfVxuICAgIC50aWNrZXRfdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1sb3R0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlja2V0X2VudGVyb19mcmFjY2lvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgLnRpY2tldF9lbnRlcm8ge1xuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aWNrZXRfZnJhY2Npb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRpY2tldF9lbnRlcm8ge1xuICAgIGRpdiB7XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1999:
/*!**********************************************************************************!*\
  !*** ./src/app/juegos/pega3/components/ticket-ventas/ticket-ventas.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketVentasComponent": () => (/* binding */ TicketVentasComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/venta.service */ 4172);
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
  selectors: [["pega3-ticket-ventas"]],
  inputs: {
    ticket: "ticket",
    sorteo: "sorteo"
  },
  outputs: {
    delete: "delete"
  },
  decls: 23,
  vars: 7,
  consts: [[1, "contenedor_informacion_ticket"], [4, "ngIf"], ["src", "assets/trash.svg", "alt", "", 1, "trash", 3, "click"], ["src", "assets/img/pega3-sombra.png", "alt", "", 1, "logoTicket"]],
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
  styles: [".contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: white;\n  border-radius: 20px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #784494;\n  background-color: #784494;\n  position: relative;\n  box-sizing: border-box;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  color: white;\n  margin: 5px;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   .fractionsBox[_ngcontent-%COMP%]   .fraccion[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  margin: 4px;\n  padding: 5px;\n  text-align: center;\n  width: 16%;\n  background-color: white;\n  border: 1px solid black;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 6%;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(360deg) brightness(108%) contrast(109%);\n  top: 20px;\n  right: 20px;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.trash[_ngcontent-%COMP%]:hover {\n  width: 8%;\n  transition: width 0.3s ease;\n}\n.contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  bottom: 5px;\n  right: 5px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    top: 132px;\n    right: 5px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .contenedor_informacion_ticket[_ngcontent-%COMP%]   img.logoTicket[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 115px;\n    width: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWJhO0VBY2IseUJBZGE7RUFlYixrQkFBQTtFQUNBLHNCQUFBO0FBUEY7QUFRRTtFQUNFLGtDQXJCYTtFQXNCYixlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBM0JhO0FBc0JuQjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0UsbUNBcENhO0VBcUNiLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUxOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUdBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBUEo7QUFTRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQVBKO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBKO0FBV0E7RUFFSTtJQUNFLGVBQUE7RUFUSjtFQVdFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUFUSjtBQUNGO0FBWUE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFYSjtBQUNGIiwiZmlsZSI6InRpY2tldC12ZW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItYm90dG9uOiAjNzg0NDk0O1xuXG4uY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwIHtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgfVxuICB9XG4gIC5mcmFjdGlvbnNCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5mcmFjY2lvbiB7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICBtYXJnaW46IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxNiU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuICBpbWcudHJhc2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgzNjBkZWcpXG4gICAgICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gIH1cbiAgaW1nLnRyYXNoOmhvdmVyIHtcbiAgICB3aWR0aDogOCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG4gIGltZy5sb2dvVGlja2V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3R0b206IDVweDtcbiAgICByaWdodDogNXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGVuZWRvcl9pbmZvcm1hY2lvbl90aWNrZXQge1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBpbWcubG9nb1RpY2tldCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICB0b3A6IDEzMnB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gICAgaW1nLmxvZ29UaWNrZXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMTVweDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 300:
/*!****************************************************************************************!*\
  !*** ./src/app/juegos/pega3/components/ultimo-resultado/ultimo-resultado.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimoResultadoComponent": () => (/* binding */ UltimoResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function UltimoResultadoComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.ultimoResultado, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UltimoResultadoComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Los resultados no est\u00E1n disponibles por el momento, por favor revisa m\u00E1s tarde ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class UltimoResultadoComponent {
    constructor(router) {
        this.router = router;
        this.isError = false;
        this.ultimoResultado = '';
    }
    ngOnInit() {
        try {
            this.ultimoResultado =
                localStorage.getItem('pega3UltimoResultado');
            /*       let data = JSON.parse(localStorage.getItem('pega3UltimoResultado')!);
            this.ticketNumbers = data.ultimoResultadoFacilotto.combinacion1.split('');
            this.ticketGanador = {
              ticketIndex: data.ultimoResultadoFacilotto.codigo,
              description: 'Boleto Ganador',
              ticketNumbers: this.ticketNumbers,
              numeroSorteo: data.numeroSorteo,
              sorteo: data.sorteo,
              valorPremio: data.premioPrincipal.valorPremio,
            }; */
        }
        catch (e) {
            this.isError = true;
        }
    }
    verUltimoBoletin() {
        //let sorteo = this.ticketGanador.numeroSorteo;
        this.router.navigateByUrl(`/consultas/pega3/boletin`);
    }
    verResultados() {
        this.router.navigateByUrl(`/consultas/pega3`);
    }
}
UltimoResultadoComponent.ɵfac = function UltimoResultadoComponent_Factory(t) { return new (t || UltimoResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
UltimoResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UltimoResultadoComponent, selectors: [["pega3-ultimo-resultado"]], decls: 10, vars: 2, consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["src", "assets/img/pega3-sombra.png", "alt", ""], ["size", "2px"], [4, "ngIf"], [1, "boton_comprar"], [3, "click"], [1, "scroll"], ["alt", "", 3, "src"], [1, "consultaError"]], template: function UltimoResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UltimoResultadoComponent_ng_container_5_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UltimoResultadoComponent_ng_container_6_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UltimoResultadoComponent_Template_button_click_8_listener() { return ctx.verUltimoBoletin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "VER BOLETIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  height: 80px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: auto;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Monstserrat Bold\";\n  font-style: italic;\n  font-size: 16px;\n  color: white;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border-color: #784494;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  padding: 9px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 50px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: auto 10px;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_titulo[_ngcontent-%COMP%]   .contenedor_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 14px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 32px;\n  -webkit-text-stroke: 2px #784494;\n  color: #fff;\n  font-family: \"Monstserrat Bold\";\n  margin: 5px 0px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .monto_sorteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 14px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: #784494;\n  font-family: \"Monstserrat Bold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Monstserrat SemiBold\";\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  font-size: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_monto_premio[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_n[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fff;\n  margin-left: 10px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .contenedor_informacion_ticket[_ngcontent-%COMP%]   .contenedor_codigo_barra[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 58%;\n  padding: 15px 30px;\n  background-color: #784494;\n  border: 1px solid #784494;\n  border-radius: 15px;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 10px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  width: 40%;\n  padding: 15px 15px !important;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #784494;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin: 20px auto;\n  margin-top: 5px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  font-size: 17px;\n  color: #fff;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 15px 0;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .ticket_entero[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 14px;\n  color: #000;\n  margin: 0px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-template-rows: repeat(4, auto);\n  text-align: left;\n}\n.contenedor_ticket[_ngcontent-%COMP%]   .texto_premios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBKO0FBU0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0VBQ0EsK0JBeEJVO0VBeUJWLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0UsVUFBQTtFQUNBLHFCQTVCVTtBQW1CZDtBQVlFO0VBQ0UsY0FBQTtFQVlBOzs7U0FBQTtBQWxCSjtBQU9JO0VBQ0UsV0FBQTtBQUxOO0FBT0k7RUFDRSx3QkFBQTtBQUxOO0FBUUk7RUFDRSxXQUFBO0FBTk47QUFjSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVpOO0FBZUk7RUFDRSxtQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZE47QUFnQk07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBZFI7QUFnQlE7RUFDRSxrQkFBQTtBQWRWO0FBZ0JVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFkWjtBQWtCUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBaEJWO0FBa0JVO0VBQ0UsbUNBNUZPO0VBNkZQLGVBQUE7QUFoQlo7QUFxQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQXBCUjtBQXNCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFwQlY7QUFzQlU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBcEhJO0VBcUhKLGVBQUE7QUFwQlo7QUF1QlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0F2SEU7RUF3SEYsK0JBN0hJO0FBd0doQjtBQXlCUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0F0SVM7QUErR25CO0FBeUJVO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQXZCWjtBQTBCVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7QUF6Qlo7QUEyQlk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUF6QmQ7QUE0Qlk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBMUJkO0FBZ0NNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBOUJSO0FBZ0NRO0VBQ0UsV0FBQTtBQTlCVjtBQW9DRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFsQ0o7QUFvQ0k7RUFLRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkExTFE7RUEyTFIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBaE1XO0VBaU1YLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBdENOO0FBd0JNO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FBdEJSO0FBbUNNO0VBQ0Usc0JBQUE7RUFDQSxjQXJNTTtBQW9LZDtBQXNDRTtFQUNFLFlBQUE7RUFDQSwrQkFqTlk7RUFrTlosZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FBckNKO0FBd0NFO0VBQ0Usa0JBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBL05VO0VBZ09WLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF0Q047QUF5Q0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXZDTjtBQXlDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0E3T1c7RUE4T1gsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXZDUjtBQTRDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQTVDSjtBQThDSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNUNOIiwiZmlsZSI6InVsdGltby1yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90dG86ICM3ODQ0OTQ7XG5cbi5jb250ZW5lZG9yX3RpY2tldCB7XG4gIC5sb2dvX3RpY2tldCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGhlaWdodDogODBweDtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGhyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICB9XG5cbiAgLnNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICB9XG5cbiAgICAvKiAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50LFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH0gKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yX2luZm9ybWFjaW9uX3RpY2tldCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgLmNvbnRlbmVkb3JfdGl0dWxvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogOXB4O1xuXG4gICAgICAgIC5jb250ZW5lZG9yX2xvZ28ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbmVkb3JfaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiBhdXRvIDEwcHg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVuZWRvcl9tb250b19wcmVtaW8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLm1vbnRvX3NvcnRlbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuXG4gICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVuZWRvcl9udW1lcm9zIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1hcmdpbjogbGVmdDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcblxuICAgICAgICAgIC5udW1lcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW5lZG9yX24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcblxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVuZWRvcl9jb2RpZ29fYmFycmEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm90b25fY29tcHJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIHdpZHRoOiA1OCU7XG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50ZXh0byB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLnRpY2tldF9lbnRlcm8ge1xuICAgIHBhZGRpbmctbGVmdDogMTNweDtcblxuICAgIGg1IHtcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcblxuICAgICAgcCB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50ZXh0b19wcmVtaW9zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7813:
/*!******************************************************************!*\
  !*** ./src/app/juegos/pega3/components/venta/venta.component.ts ***!
  \******************************************************************/
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
VentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["pega3-venta"]], decls: 2, vars: 0, template: function VentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6002:
/*!**********************************************!*\
  !*** ./src/app/juegos/pega3/pega3.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pega3Module": () => (/* binding */ Pega3Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consulta/consulta.component */ 6984);
/* harmony import */ var _components_boletin_boletin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/boletin/boletin.component */ 6460);
/* harmony import */ var _components_sorteo_sorteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sorteo/sorteo.component */ 6621);
/* harmony import */ var _components_venta_venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/venta/venta.component */ 7813);
/* harmony import */ var _components_ultimo_resultado_ultimo_resultado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ultimo-resultado/ultimo-resultado.component */ 300);
/* harmony import */ var _components_ticket_consulta_ticket_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ticket-consulta/ticket-consulta.component */ 392);
/* harmony import */ var _components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-ventas/ticket-ventas.component */ 1999);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class Pega3Module {
}
Pega3Module.ɵfac = function Pega3Module_Factory(t) { return new (t || Pega3Module)(); };
Pega3Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: Pega3Module });
Pega3Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](Pega3Module, { declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaComponent,
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

/***/ 4172:
/*!********************************************************!*\
  !*** ./src/app/juegos/pega3/services/venta.service.ts ***!
  \********************************************************/
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
        let address = '/pega3';
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
        let address = '/pega3';
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
        let address = '/pega3';
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