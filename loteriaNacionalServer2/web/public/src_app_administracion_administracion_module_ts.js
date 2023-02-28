"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["src_app_administracion_administracion_module_ts"],{

/***/ 5898:
/*!*****************************************************************!*\
  !*** ./src/app/administracion/administracion-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracionRoutingModule": () => (/* binding */ AdministracionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracion.component */ 6836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _administracion_component__WEBPACK_IMPORTED_MODULE_0__.AdministracionComponent }];
class AdministracionRoutingModule {
}
AdministracionRoutingModule.ɵfac = function AdministracionRoutingModule_Factory(t) { return new (t || AdministracionRoutingModule)(); };
AdministracionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdministracionRoutingModule });
AdministracionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdministracionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6836:
/*!************************************************************!*\
  !*** ./src/app/administracion/administracion.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracionComponent": () => (/* binding */ AdministracionComponent)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_administracion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/administracion.service */ 6025);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);





class AdministracionComponent {
  constructor(administracionService) {
    this.administracionService = administracionService;
    this.codigos = [];
    this.showPromo = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.showPromo = yield _this.administracionService.getStatus(); //this.codigos = (await this.administracionService.obtenerCodigos() as any).values
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
      const response = yield _this2.administracionService.cargarImagenes(formData);
    })();
  }

  generarTxt() {
    var _this3 = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.codigos = _this3.administracionService.obtenerTxt().subscribe(data => {
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
      yield _this4.administracionService.setStatus(_this4.showPromo);
    })();
  }

}

AdministracionComponent.ɵfac = function AdministracionComponent_Factory(t) {
  return new (t || AdministracionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_administracion_service__WEBPACK_IMPORTED_MODULE_1__.AdministracionService));
};

AdministracionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdministracionComponent,
  selectors: [["app-administracion"]],
  decls: 9,
  vars: 1,
  consts: [[1, "containerBox"], [3, "ngModel", "ngModelChange", "change"], ["type", "button", "mat-raised-button", "", 3, "click"], ["hidden", "", "accept", "image/*", "multiple", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], [3, "click"]],
  template: function AdministracionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-slide-toggle", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdministracionComponent_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
        return ctx.showPromo = $event;
      })("change", function AdministracionComponent_Template_mat_slide_toggle_change_1_listener() {
        return ctx.changePopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Habilitar popup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdministracionComponent_Template_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

        return _r0.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Escoja la(s) imagen(es) del popup ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdministracionComponent_Template_input_change_5_listener() {
        return ctx.imagenesSeleccionadas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdministracionComponent_Template_button_click_7_listener() {
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
  styles: [".containerBox[_ngcontent-%COMP%] {\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.containerBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  height: 30px;\n  padding: 5px 50px;\n  outline: none;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n  background-color: #28aae1;\n  border: 1px solid #28aae1;\n}\n.containerBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28aae1;\n  transition: background-color 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQWRhO0VBZWIsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFqQlc7RUFrQlgseUJBQUE7QUFESjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSxjQXJCUztFQXNCVCxzQ0FBQTtBQUFOIiwiZmlsZSI6ImFkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjMjhhYWUxO1xyXG4uY29udGFpbmVyQm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweCA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3R0b247XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 9048:
/*!*********************************************************!*\
  !*** ./src/app/administracion/administracion.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracionModule": () => (/* binding */ AdministracionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _administracion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracion-routing.module */ 5898);
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracion.component */ 6836);
/* harmony import */ var _components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/popup-promo/popup-promo.component */ 3991);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









class AdministracionModule {
}
AdministracionModule.ɵfac = function AdministracionModule_Factory(t) { return new (t || AdministracionModule)(); };
AdministracionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdministracionModule });
AdministracionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _administracion_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracionRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdministracionModule, { declarations: [_administracion_component__WEBPACK_IMPORTED_MODULE_1__.AdministracionComponent, _components_popup_promo_popup_promo_component__WEBPACK_IMPORTED_MODULE_2__.PopupPromoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _administracion_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracionRoutingModule] }); })();


/***/ }),

/***/ 3991:
/*!********************************************************************************!*\
  !*** ./src/app/administracion/components/popup-promo/popup-promo.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupPromoComponent": () => (/* binding */ PopupPromoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_administracion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/administracion.service */ 6025);
/* harmony import */ var _shared_positioning_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/positioning.directive */ 1343);





class PopupPromoComponent {
  constructor(administracionService) {
    this.administracionService = administracionService;
    this.closePromo = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.bannerLink = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.bannerLink = yield _this.administracionService.getBannerLink();
    })();
  }

  close() {
    this.closePromo.emit();
  }

}

PopupPromoComponent.ɵfac = function PopupPromoComponent_Factory(t) {
  return new (t || PopupPromoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_administracion_service__WEBPACK_IMPORTED_MODULE_1__.AdministracionService));
};

PopupPromoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PopupPromoComponent,
  selectors: [["app-popup-promo"]],
  outputs: {
    closePromo: "closePromo"
  },
  decls: 13,
  vars: 0,
  consts: [[1, "blackBox", 3, "click"], ["id", "myModal", "floatingItem", "", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-header"], ["aria-label", "Close", 1, "close", 3, "click"], [1, "modal-content"], [1, "modal-body"], ["target", "_parent", "href", "https://www.loteria.com.ec/#/loteria/compra_tus_juegos"], ["src", "assets/popupPozo.gif", 1, "Desktop", 3, "click"], ["src", "assets/popupPozo.gif", 1, "Ipad", 2, "max-width", "100%", 3, "click"], ["src", "assets/popupPozo.gif", 1, "Mobile", 3, "click"]],
  template: function PopupPromoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupPromoComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupPromoComponent_Template_button_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_8_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_10_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupPromoComponent_Template_img_click_12_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  directives: [_shared_positioning_directive__WEBPACK_IMPORTED_MODULE_2__.PositioningDirective],
  styles: [".Ipad[_ngcontent-%COMP%], .Mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.Desktop[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 500000;\n  position: fixed;\n  transform: translateX(-50%);\n  left: 50%;\n  cursor: pointer;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  \n  \n  display: flex;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.65);\n  padding: 5px;\n  right: 0;\n  top: 0;\n  border-radius: 25px;\n  position: absolute;\n  z-index: 1000000;\n  margin: -15px;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  width: 20px;\n  height: 30px;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  cursor: pointer;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n@media (max-width: 1240px) {\n  .Desktop[_ngcontent-%COMP%], .Mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Ipad[_ngcontent-%COMP%] {\n    display: block;\n    width: 96vw;\n  }\n}\n\n@media (max-width: 600px) {\n  .Desktop[_ngcontent-%COMP%], .Ipad[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .Mobile[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXByb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDSTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDTjs7QUFBTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyV0FBQTtFQUdBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7O0FBR0k7RUFDRSxZQUFBO0FBRE47O0FBRU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFOztJQUVFLGFBQUE7RUFIRjs7RUFLQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFOztJQUVFLGFBQUE7RUFIRjs7RUFLQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoicG9wdXAtcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSXBhZCxcclxuLk1vYmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLkRlc2t0b3Age1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgei1pbmRleDogNTAwMDAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXYge1xyXG4gICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgLyogdG9wOiAtMTBweDsgKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgICBtYXJnaW46IC0xNXB4O1xyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjMwMDAnJTNlJTNjcGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMDExLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDkuNDE0IDhsNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAxMC0xLjQxNHonLyUzZSUzYy9zdmclM2VcIilcclxuICAgICAgICAgIGNlbnRlci8xZW0gYXV0byBuby1yZXBlYXQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxhY2tCb3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA4MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjQwcHgpIHtcclxuICAuRGVza3RvcCxcclxuICAuTW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5JcGFkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDk2dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuRGVza3RvcCxcclxuICAuSXBhZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuTW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 6025:
/*!*******************************************************************!*\
  !*** ./src/app/administracion/services/administracion.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracionService": () => (/* binding */ AdministracionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class AdministracionService {
    constructor(http) {
        this.http = http;
        this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.source;
    }
    getBannerLink() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let address = '/administracion';
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
        let endpoint = '/getCodeCsv';
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
AdministracionService.ɵfac = function AdministracionService_Factory(t) { return new (t || AdministracionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AdministracionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdministracionService, factory: AdministracionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_administracion_administracion_module_ts.js.map