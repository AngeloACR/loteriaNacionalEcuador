"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["src_app_public_public_module_ts"],{

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
    constructor() { }
    ngOnInit() {
    }
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) { return new (t || PublicComponent)(); };
PublicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublicComponent, selectors: [["app-public"]], decls: 2, vars: 1, consts: [[3, "home"]], template: function PublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ventas-menu-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "consultas-ultimos-resultados");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("home", true);
    } }, directives: [_ventas_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__.MenuHeaderComponent, _consultas_components_ultimos_resultados_ultimos_resultados_component__WEBPACK_IMPORTED_MODULE_1__.UltimosResultadosComponent], styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n  display: flex;\n  width: 30%;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%]   .innerBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 90%;\n  padding: 15px;\n  max-width: 400px;\n  min-width: 320px;\n  margin: 20px auto;\n  border-radius: 30px;\n  background-color: white;\n  box-shadow: 5px 0px 18px 2px rgba(0, 0, 0, 0.3);\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%]   .innerBox[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 610px !important;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%]   .innerBox[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%]   .innerBox[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  width: 90%;\n  padding: 20px 30px;\n  background-color: #11118d;\n  border: 1px solid #11118d;\n  border-radius: 40px;\n  text-align: center;\n  margin: 10px auto;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n.selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%]   .innerBox[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #11118d;\n}\n@media screen and (max-width: 778px) {\n  .iframeBox[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    height: 73vw;\n  }\n\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    width: 95%;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    margin: auto;\n  }\n  .selectionBox[_ngcontent-%COMP%]   .selectorBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUdBLCtDQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtBQUNSO0FBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBaERPO0VBaURQLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBQ1Y7QUFDVTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBT0E7RUFFSTtJQUNFLFlBQUE7RUFMSjs7RUFTQTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFORjtFQU9FO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBTEo7QUFDRjtBQVNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBUEY7RUFRRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQU5KO0FBQ0YiLCJmaWxlIjoicHVibGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbi5zZWxlY3Rpb25Cb3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC5zZWxlY3RvckJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAlO1xuICAgIC5pbm5lckJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiAgICAgIGlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDYxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuYm90b25fY29tcHJhciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMThkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTExOGQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExOGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3OHB4KSB7XG4gIC5pZnJhbWVCb3gge1xuICAgIGlmcmFtZSB7XG4gICAgICBoZWlnaHQ6IDczdnc7XG4gICAgfVxuICB9XG5cbiAgLnNlbGVjdGlvbkJveCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNlbGVjdGlvbkJveCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLnNlbGVjdG9yQm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.component */ 9703);
/* harmony import */ var _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consultas/consultas.module */ 8001);
/* harmony import */ var _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ventas/ventas.module */ 5268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class PublicModule {
}
PublicModule.ɵfac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            //PublicRoutingModule,
            _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_1__.ConsultasModule,
            _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_2__.VentasModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_public_component__WEBPACK_IMPORTED_MODULE_0__.PublicComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        //PublicRoutingModule,
        _consultas_consultas_module__WEBPACK_IMPORTED_MODULE_1__.ConsultasModule,
        _ventas_ventas_module__WEBPACK_IMPORTED_MODULE_2__.VentasModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_public_public_module_ts.js.map