"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["default-src_app_ventas_ventas_module_ts"],{

/***/ 5937:
/*!**********************************************************!*\
  !*** ./src/app/juegos/loteria/services/venta.service.ts ***!
  \**********************************************************/
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
        let address = '/loteria';
        let endpoint = `/cache/sorteosDisponibles`;
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
        let address = '/loteria';
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
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5095:
/*!*************************************************************!*\
  !*** ./src/app/juegos/millonaria/services/venta.service.ts ***!
  \*************************************************************/
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
        let address = '/millonaria';
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
    obtenerSeries(sorteo, authData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let endpoint = '/getSeries';
        let address = '/millonaria';
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http
                .get(address, {
                params: {
                    lotteryToken: authData.lotteryToken,
                    user: authData.user,
                    sorteo,
                },
                headers: headers,
            })
                .subscribe((data) => {
                let aux = data.map((element) => {
                    return {
                        serie: element,
                        status: false,
                    };
                });
                resolve(aux);
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
        let address = '/millonaria';
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
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7368:
/*!******************************************************************************!*\
  !*** ./src/app/ventas/components/boton-de-juego/boton-de-juego.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotonDeJuegoComponent": () => (/* binding */ BotonDeJuegoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



class BotonDeJuegoComponent {
    constructor() {
        this.authError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        switch (this.name) {
            case 'loteria':
                this.tipoLoteria = {
                    loteria: true,
                };
                break;
            case 'lotto':
                this.tipoLoteria = {
                    lotto: true,
                };
                break;
            case 'pozo':
                this.tipoLoteria = {
                    pozo: true,
                };
                break;
            default:
                this.tipoLoteria = {
                    millonaria: true,
                };
                break;
        }
    }
    checkToken(e) {
        if (!this.token) {
            e.stopPropagation();
            e.preventDefault();
            this.authError.emit();
            return;
        }
    }
}
BotonDeJuegoComponent.ɵfac = function BotonDeJuegoComponent_Factory(t) { return new (t || BotonDeJuegoComponent)(); };
BotonDeJuegoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BotonDeJuegoComponent, selectors: [["app-boton-de-juego"]], inputs: { image: "image", link: "link", name: "name", loteria: "loteria", token: "token" }, outputs: { authError: "authError" }, decls: 3, vars: 4, consts: [[1, "lotteryBox", 3, "href", "ngClass", "click"], ["alt", "", 1, "lotteryImg", 3, "src"]], template: function BotonDeJuegoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotonDeJuegoComponent_Template_a_click_0_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Jugar\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", ctx.name)("ngClass", ctx.tipoLoteria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".lotteryBox[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-style: italic;\n  font-weight: 700;\n  font-size: 25px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 420px;\n  height: 140px;\n  margin: 20px 20px 20px 0;\n  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);\n  border-radius: 45.5px;\n}\n.lotteryBox[_ngcontent-%COMP%]   .lotteryImg[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: width 0.3s ease;\n}\n.lotteryBox[_ngcontent-%COMP%]:hover   .lotteryImg[_ngcontent-%COMP%] {\n  width: 60%;\n  transition: width 0.3s ease;\n}\n.lotteryBox[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: none;\n}\n.loteria[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n  border: 3px solid #28AAE1;\n}\n.lotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 3px solid #b51f20;\n}\n.pozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 3px solid #04b865;\n}\n.millonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 3px solid #b51f20;\n}\n@media screen and (max-width: 800px) {\n  .lotteryBox[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdG9uLWRlLWp1ZWdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFBO0FBVUE7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7QUFYRjtBQWFFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFFQSwyQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtBQWRKO0FBbUJBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQWhCRjtBQW1CQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFoQkY7QUFtQkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBaEJGO0FBbUJBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQWhCRjtBQW9CQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJib3Rvbi1kZS1qdWVnby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vLi4vc2Fzcy9mb250cy5zY3NzXCIpOyAqL1xuJGNvbG9yLWxvdGVyaWE6ICMyOEFBRTE7XG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG4kY29sb3ItcG96bzogIzA0Yjg2NTtcbiRjb2xvci1taWxsb25hcmlhOiAjYjUxZjIwO1xuJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuLmxvdHRlcnlCb3gge1xuXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIFxuICBjb2xvcjogI2ZmZmZmZjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDQyMHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA0NS41cHg7XG5cbiAgLmxvdHRlcnlJbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG5cbiAgJjpob3ZlciAubG90dGVyeUltZ3tcbiAgICB3aWR0aDogNjAlO1xuXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG5cbiAgLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi5sb3RlcmlhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4QUFFMTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzI4QUFFMTtcbn1cblxuLmxvdHRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2I1MWYyMDtcbn1cblxuLnBvem8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRiODY1O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDRiODY1O1xufVxuXG4ubWlsbG9uYXJpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNiNTFmMjA7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmxvdHRlcnlCb3h7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1616:
/*!****************************************************************!*\
  !*** ./src/app/ventas/components/carrito/carrito.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoComponent": () => (/* binding */ CarritoComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _juegos_loteria_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../juegos/loteria/components/ticket-ventas/ticket-ventas.component */ 9444);
/* harmony import */ var _juegos_lotto_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../juegos/lotto/components/ticket-ventas/ticket-ventas.component */ 555);
/* harmony import */ var _juegos_pozo_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/pozo/components/ticket-ventas/ticket-ventas.component */ 1410);
/* harmony import */ var _juegos_millonaria_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../juegos/millonaria/components/ticket-ventas/ticket-ventas.component */ 9568);










function CarritoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " No hay boletos en tu carrito, escoge tu n\u00FAmero de la suerte y empieza a ganar con nosotros! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function CarritoComponent_div_6_ng_container_2_loteria_ticket_ventas_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "loteria-ticket-ventas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("deleteTicket", function CarritoComponent_div_6_ng_container_2_loteria_ticket_ventas_1_Template_loteria_ticket_ventas_deleteTicket_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r10.deleteLoteria(item_r4);
    })("deleteFraccion", function CarritoComponent_div_6_ng_container_2_loteria_ticket_ventas_1_Template_loteria_ticket_ventas_deleteFraccion_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r13.deleteFraccionLoteria(item_r4, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ticket", item_r4.ticket)("sorteo", item_r4.sorteo);
  }
}

function CarritoComponent_div_6_ng_container_2_lotto_ticket_ventas_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "lotto-ticket-ventas", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("delete", function CarritoComponent_div_6_ng_container_2_lotto_ticket_ventas_2_Template_lotto_ticket_ventas_delete_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r16.deleteLotto(item_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ticket", item_r4.ticket)("sorteo", item_r4.sorteo);
  }
}

function CarritoComponent_div_6_ng_container_2_pozo_ticket_ventas_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pozo-ticket-ventas", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("delete", function CarritoComponent_div_6_ng_container_2_pozo_ticket_ventas_3_Template_pozo_ticket_ventas_delete_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r20.deletePozo(item_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ticket", item_r4.ticket)("sorteo", item_r4.sorteo);
  }
}

function CarritoComponent_div_6_ng_container_2_millonaria_ticket_ventas_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "millonaria-ticket-ventas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("deleteTicket", function CarritoComponent_div_6_ng_container_2_millonaria_ticket_ventas_4_Template_millonaria_ticket_ventas_deleteTicket_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r24.deleteMillonaria(item_r4);
    })("deleteFraccion", function CarritoComponent_div_6_ng_container_2_millonaria_ticket_ventas_4_Template_millonaria_ticket_ventas_deleteFraccion_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r27.deleteFraccionMillonaria(item_r4, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ticket", item_r4.ticket)("sorteo", item_r4.sorteo);
  }
}

function CarritoComponent_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CarritoComponent_div_6_ng_container_2_loteria_ticket_ventas_1_Template, 1, 2, "loteria-ticket-ventas", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CarritoComponent_div_6_ng_container_2_lotto_ticket_ventas_2_Template, 1, 2, "lotto-ticket-ventas", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CarritoComponent_div_6_ng_container_2_pozo_ticket_ventas_3_Template, 1, 2, "pozo-ticket-ventas", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CarritoComponent_div_6_ng_container_2_millonaria_ticket_ventas_4_Template, 1, 2, "millonaria-ticket-ventas", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4.tipoLoteria == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4.tipoLoteria == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4.tipoLoteria == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4.tipoLoteria == 14);
  }
}

function CarritoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CarritoComponent_div_6_ng_container_2_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.seleccionadosCarrito);
  }
}

function CarritoComponent_ng_container_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Total con descuento: ", ctx_r30.totalConDesc, " ");
  }
}

const _c0 = function (a0, a1, a2, a3) {
  return {
    fondoLoteria: a0,
    fondoLotto: a1,
    fondoPozo: a2,
    fondoMillonaria: a3
  };
};

function CarritoComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "hr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CarritoComponent_ng_container_7_div_5_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CarritoComponent_ng_container_7_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r31.eliminar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "BORRAR TODO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CarritoComponent_ng_container_7_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r33.comprar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " COMPRAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](5, _c0, ctx_r2.isLoteriaNacional, ctx_r2.isLotto, ctx_r2.isPozoMillonario, ctx_r2.isLaMillonaria));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total: ", ctx_r2.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hasDiscount(ctx_r2.totalConDesc));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](10, _c0, ctx_r2.isLoteriaNacional, ctx_r2.isLotto, ctx_r2.isPozoMillonario, ctx_r2.isLaMillonaria));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](15, _c0, ctx_r2.isLoteriaNacional, ctx_r2.isLotto, ctx_r2.isPozoMillonario, ctx_r2.isLaMillonaria));
  }
}

class CarritoComponent {
  constructor(cart) {
    this.cart = cart;
    this.isResumen = false;
    this.emitirCompra = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.eliminarTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deleteLoteriaTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deleteLoteriaFraccion = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deleteMillonariaFraccion = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deleteLottoTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deletePozoTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deleteMillonariaTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.isLoteriaNacional = false;
    this.isLotto = false;
    this.isPozoMillonario = false;
    this.isLaMillonaria = false;
  }

  comprar() {
    this.emitirCompra.emit();
  }

  eliminar() {
    this.eliminarTodo.emit();
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.seleccionadosCarrito = _this.cart.ticketsCarrito; //this.seleccionadosCarrito = (await this.cart.getCarrito()).carrito

      _this.seleccionadosCarrito = _this.seleccionadosCarrito.length != 0 ? _this.seleccionadosCarrito.reverse() : []; //this.seleccionadosCarrito = this.seleccionadosCarrito? this.seleccionadosCarrito.reverse(): [];

      switch (_this.tipoLoteria) {
        case "loteria":
          _this.isLoteriaNacional = true;
          _this.logoPath = "assets/img/loteria-carrito.svg";
          break;

        case "lotto":
          _this.isLotto = true;
          _this.logoPath = "assets/img/lotto-carrito.svg";
          break;

        case "pozo":
          _this.isPozoMillonario = true;
          _this.logoPath = "assets/img/pozo-carrito.svg";
          break;

        case "millonaria":
          _this.isLaMillonaria = true;
          _this.logoPath = "assets/img/lotto-carrito.svg";
          break;
      }

      _this.getTotal();
    })();
  }

  hasDiscount(total) {
    return parseInt(total.replace("$", ""));
  }

  ngDoCheck() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      //this.seleccionadosCarrito = (await this.cart.getCarrito()).carrito
      _this2.seleccionadosCarrito = _this2.cart.getCarritoLocal();
      _this2.seleccionadosCarrito = _this2.seleccionadosCarrito.length != 0 ? _this2.seleccionadosCarrito.reverse() : []; //await this.cart.setTotal();

      _this2.getTotal();
    })();
  }

  checkTicketsLoteria() {
    if (this.ticketsLoteria) {
      return Object.keys(this.ticketsLoteria).length != 0;
    } else return false;
  }

  checkTicketsLotto() {
    if (this.ticketsLotto) {
      return Object.keys(this.ticketsLotto).length != 0;
    } else return false;
  }

  checkTicketsPozo() {
    if (this.ticketsPozo) {
      return Object.keys(this.ticketsPozo).length != 0;
    } else return false;
  }

  checkTicketsLaMillonaria() {
    if (this.ticketsMillonaria) {
      return Object.keys(this.ticketsMillonaria).length != 0;
    } else return false;
  }

  deleteLoteria(ticket) {
    this.deleteLoteriaTicket.emit(ticket);
  }

  deleteFraccionLoteria(ticket, fraccion) {
    let data = {
      ticket,
      fraccion
    };
    this.deleteLoteriaFraccion.emit(data);
  }

  deleteFraccionMillonaria(ticket, fraccion) {
    let data = {
      ticket,
      fraccion
    };
    this.deleteMillonariaFraccion.emit(data);
  }

  deleteLotto(ticket) {
    this.deleteLottoTicket.emit(ticket);
  }

  deleteMillonaria(ticket) {
    this.deleteMillonariaTicket.emit(ticket);
  }

  deletePozo(ticket) {
    this.deletePozoTicket.emit(ticket);
  }

  getTotal() {
    this.total = this.formatNumber(this.cart.getTotal());
    this.totalConDesc = this.formatNumber(this.cart.getTotalConDesc());
  }

  formatNumber(number) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD" // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

    });
    return formatter.format(number);
  }

}

CarritoComponent.ɵfac = function CarritoComponent_Factory(t) {
  return new (t || CarritoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_1__.CarritoService));
};

CarritoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CarritoComponent,
  selectors: [["app-carrito"]],
  inputs: {
    logo: "logo",
    ticketsLoteria: "ticketsLoteria",
    ticketsLotto: "ticketsLotto",
    ticketsPozo: "ticketsPozo",
    ticketsMillonaria: "ticketsMillonaria",
    tickets: "tickets",
    tipoLoteria: "tipoLoteria",
    isResumen: "isResumen"
  },
  outputs: {
    emitirCompra: "emitirCompra",
    eliminarTodo: "eliminarTodo",
    deleteLoteriaTicket: "deleteLoteriaTicket",
    deleteLoteriaFraccion: "deleteLoteriaFraccion",
    deleteMillonariaFraccion: "deleteMillonariaFraccion",
    deleteLottoTicket: "deleteLottoTicket",
    deletePozoTicket: "deletePozoTicket",
    deleteMillonariaTicket: "deleteMillonariaTicket"
  },
  decls: 8,
  vars: 10,
  consts: [[1, "contenedor_ticket"], [1, "logo_ticket"], ["alt", "", 3, "src"], ["size", "2px", 3, "ngClass"], ["class", "detailBox", 4, "ngIf"], [4, "ngIf"], [1, "detailBox"], [1, "noItem"], [1, "scroll"], [4, "ngFor", "ngForOf"], ["style", "width: 100%", 3, "ticket", "sorteo", "deleteTicket", "deleteFraccion", 4, "ngIf"], ["style", "width: 100%", 3, "ticket", "sorteo", "delete", 4, "ngIf"], [2, "width", "100%", 3, "ticket", "sorteo", "deleteTicket", "deleteFraccion"], [2, "width", "100%", 3, "ticket", "sorteo", "delete"], [1, "totalsBox"], ["class", "totalsBox", 4, "ngIf"], [1, "boton_comprar"], [1, "botonEliminar", 3, "click"], [3, "ngClass", "click"]],
  template: function CarritoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "hr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CarritoComponent_div_5_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CarritoComponent_div_6_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CarritoComponent_ng_container_7_Template, 13, 20, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](5, _c0, ctx.isLoteriaNacional, ctx.isLotto, ctx.isPozoMillonario, ctx.isLaMillonaria));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.seleccionadosCarrito && ctx.seleccionadosCarrito.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.seleccionadosCarrito && ctx.seleccionadosCarrito.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.checkTicketsLoteria() || ctx.checkTicketsLotto() || ctx.checkTicketsPozo() || ctx.checkTicketsLaMillonaria());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _juegos_loteria_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_2__.TicketVentasComponent, _juegos_lotto_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_3__.TicketVentasComponent, _juegos_pozo_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_4__.TicketVentasComponent, _juegos_millonaria_components_ticket_ventas_ticket_ventas_component__WEBPACK_IMPORTED_MODULE_5__.TicketVentasComponent],
  styles: [".contenedor_ticket.fondoLoteria[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n  border: 1px solid #28AAE1;\n}\n\n.contenedor_ticket.fondoPozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.contenedor_ticket.fondoLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket.fondoMillonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 305px;\n  border-radius: 30px;\n  overflow: hidden;\n  padding: 15px;\n  background-color: white;\n  box-shadow: 5px 0px 18px 2px rgba(0, 0, 0, 0.3);\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  min-height: 20px;\n  max-height: 40vh;\n  padding: 0 10px;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .ticketBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .noItem[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n  color: black;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: auto;\n  margin: 15px auto;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .totalsBox[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 15px;\n  border-radius: 40px;\n  margin: 5px;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLoteria[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n  border: 1px solid #28AAE1;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLoteria[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28AAE1;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLotto[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoPozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoPozo[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #04b865;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoMillonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  color: white;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoMillonaria[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   .botonEliminar[_ngcontent-%COMP%] {\n  background-color: black;\n  border: 1px solid black;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   .botonEliminar[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: black;\n  transition: background-color 0.5s ease;\n}\n\n@media screen and (max-width: 1000px) {\n  .contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 10vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSx5QkFOYTtFQU9iLHlCQUFBO0FBVEY7O0FBV0E7RUFDRSx5QkFSVztFQVNYLHlCQUFBO0FBUkY7O0FBVUE7RUFDRSx5QkFiWTtFQWNaLHlCQUFBO0FBUEY7O0FBU0E7RUFDRSx5QkFmaUI7RUFnQmpCLHlCQUFBO0FBTkY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBSUEsK0NBQUE7QUFORjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFPSTtFQUNFLHdCQUFBO0FBTE47O0FBUUk7RUFDRSxVQUFBO0FBTk47O0FBU0k7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQTjs7QUFVSTtFQUNFLG1CQUFBO0FBUk47O0FBV0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVE47O0FBV007RUFDRSxXQUFBO0FBVFI7O0FBV1E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVRWOztBQWNJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFaTjs7QUFnQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWRKOztBQWdCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFkTjs7QUFrQkU7RUFDRSxVQUFBO0FBaEJKOztBQWtCRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBaEJKOztBQW1CRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQko7O0FBbUJJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0F2SFc7RUF3SFgsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFqQk47O0FBbUJJO0VBQ0UseUJBNUhTO0VBNkhULHlCQUFBO0FBakJOOztBQWtCTTtFQUNFLHNCQUFBO0VBQ0EsY0FoSU87RUFpSVAsc0NBQUE7QUFoQlI7O0FBbUJJO0VBQ0UseUJBcElRO0VBcUlSLHlCQUFBO0FBakJOOztBQWtCTTtFQUNFLHNCQUFBO0VBQ0EsY0F4SU07RUF5SU4sc0NBQUE7QUFoQlI7O0FBbUJJO0VBQ0UseUJBNUlPO0VBNklQLHlCQUFBO0FBakJOOztBQWtCTTtFQUNFLHNCQUFBO0VBQ0EsY0FoSks7RUFpSkwsc0NBQUE7QUFoQlI7O0FBbUJJO0VBQ0UseUJBcEphO0VBcUpiLFlBQUE7RUFDQSx5QkFBQTtBQWpCTjs7QUFrQk07RUFDRSx1QkFBQTtFQUNBLGNBekpXO0VBMEpYLHNDQUFBO0FBaEJSOztBQW1CSTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7QUFqQk47O0FBa0JNO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUFoQlI7O0FBcUJBO0VBR007SUFDRSxZQUFBO0VBcEJOO0FBQ0YiLCJmaWxlIjoiY2Fycml0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOEFBRTE7XG4kY29sb3ItbG90dG86ICNiNTFmMjA7XG4kY29sb3ItcG96bzogIzA0Yjg2NTtcbiRjb2xvci1taWxsb25hcmlhOiAjYjUxZjIwO1xuXG4uY29udGVuZWRvcl90aWNrZXQuZm9uZG9Mb3RlcmlhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcbn1cbi5jb250ZW5lZG9yX3RpY2tldC5mb25kb1Bvem8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XG59XG4uY29udGVuZWRvcl90aWNrZXQuZm9uZG9Mb3R0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvO1xufVxuLmNvbnRlbmVkb3JfdGlja2V0LmZvbmRvTWlsbG9uYXJpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbWlsbG9uYXJpYTtcbn1cbi5jb250ZW5lZG9yX3RpY2tldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDMwNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAuZGV0YWlsQm94IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuc2Nyb2xsIHtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLnRpY2tldEJveCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm9JdGVtIHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgLmxvZ29fdGlja2V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgfVxuICB9XG5cbiAgaHIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLnRvdGFsc0JveCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5ib3Rvbl9jb21wcmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG4gICAgfVxuICAgIGJ1dHRvbi5mb25kb0xvdGVyaWEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3R0b247XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgICBidXR0b24uZm9uZG9Mb3R0byB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbi5mb25kb1Bvem8ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcG96bztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXBvem87XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgICBidXR0b24uZm9uZG9NaWxsb25hcmlhIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLW1pbGxvbmFyaWE7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC5ib3RvbkVsaW1pbmFye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250ZW5lZG9yX3RpY2tldCB7XG4gICAgLmxvZ29fdGlja2V0IHtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG4gIFxufSJdfQ== */"]
});

/***/ }),

/***/ 5543:
/*!********************************************************************************************!*\
  !*** ./src/app/ventas/components/confirmacion-de-venta/confirmacion-de-venta.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionDeVentaComponent": () => (/* binding */ ConfirmacionDeVentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../descripcion-de-venta/descripcion-de-venta.component */ 7179);




class ConfirmacionDeVentaComponent {
    constructor(ventas) {
        this.ventas = ventas;
        this.compraConfirmada = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.compraCancelada = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.comprarDespues = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.user = this.ventas.getAuthData().user;
    }
    confirmarCompra() {
        this.compraConfirmada.emit();
    }
    volver() {
        this.comprarDespues.emit();
    }
    cancelarCompra() {
        this.compraCancelada.emit("La compra no se pudo procesar, por favor intente mas tarde");
    }
}
ConfirmacionDeVentaComponent.ɵfac = function ConfirmacionDeVentaComponent_Factory(t) { return new (t || ConfirmacionDeVentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_0__.VentasService)); };
ConfirmacionDeVentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfirmacionDeVentaComponent, selectors: [["app-confirmacion-de-venta"]], inputs: { compra: "compra" }, outputs: { compraConfirmada: "compraConfirmada", compraCancelada: "compraCancelada", comprarDespues: "comprarDespues" }, decls: 10, vars: 2, consts: [[1, "blackBox", 3, "click"], [1, "paymentBox"], [3, "compra", "user"], [1, "buttonBox"], [1, "backButton", 3, "click"], [1, "confirmationButton", 3, "click"]], template: function ConfirmacionDeVentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmacionDeVentaComponent_Template_div_click_0_listener() { return ctx.volver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-descripcion-de-venta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Seguro que deseas efectuar la compra?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmacionDeVentaComponent_Template_button_click_6_listener() { return ctx.volver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmacionDeVentaComponent_Template_button_click_8_listener() { return ctx.confirmarCompra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Confirmar compra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("compra", ctx.compra)("user", ctx.user);
    } }, directives: [_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_1__.DescripcionDeVentaComponent], styles: [".paymentBox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 70%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  overflow-y: scroll;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 30px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n  color: #fff;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.confirmationButton[_ngcontent-%COMP%] {\n  background-color: green;\n  border: 1px solid green;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.confirmationButton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: green;\n  transition: background-color 0.4s ease;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.backButton[_ngcontent-%COMP%] {\n  background-color: red;\n  border: 1px solid red;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.backButton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: red;\n  transition: background-color 0.4s ease;\n}\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n@media screen and (max-width: 1000px) {\n  .paymentBox[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hY2lvbi1kZS12ZW50YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQXBCVztFQXFCWCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRU07RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFDUTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBQ1Y7QUFFTTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUNRO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFDVjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQUZGO0FBSUE7RUFDRTtJQUNFLFVBQUE7RUFERjtBQUNGO0FBR0E7RUFFSTtJQUNFLHNCQUFBO0VBRko7QUFDRiIsImZpbGUiOiJjb25maXJtYWNpb24tZGUtdmVudGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuLnBheW1lbnRCb3gge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgLmJ1dHRvbkJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgJi5jb25maXJtYXRpb25CdXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5iYWNrQnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ibGFja0JveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogODAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnBheW1lbnRCb3gge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wYXltZW50Qm94IHtcbiAgICAuYnV0dG9uQm94e1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7179:
/*!******************************************************************************************!*\
  !*** ./src/app/ventas/components/descripcion-de-venta/descripcion-de-venta.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescripcionDeVentaComponent": () => (/* binding */ DescripcionDeVentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _juegos_pozo_services_venta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../juegos/pozo/services/venta.service */ 3630);
/* harmony import */ var _juegos_lotto_services_venta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../juegos/lotto/services/venta.service */ 2736);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function DescripcionDeVentaComponent_h3_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " N\u00FAmero de Orden: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.ticketId);
} }
function DescripcionDeVentaComponent_div_11_div_4_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Total con descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.formatNumber(item_r9.subtotalConDesc));
} }
function DescripcionDeVentaComponent_div_11_div_4_ng_container_30_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r15 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r15.fraccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r13.formatNumber(ganador_r15.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.formatNumber(ganador_r15.valorPremio - ganador_r15.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r13.formatNumber(ganador_r15.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r15.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_11_div_4_ng_container_30_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "FRACCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "VALOR DEL PREMIO CON DESC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Premio ", i_r17 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r16.fraccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.formatNumber(ganador_r16.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.formatNumber(ganador_r16.valorPremio - ganador_r16.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.formatNumber(ganador_r16.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r16.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_11_div_4_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Boleto ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "FRACCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "VALOR DEL PREMIO CON DESCUENTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DescripcionDeVentaComponent_div_11_div_4_ng_container_30_div_16_Template, 11, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DescripcionDeVentaComponent_div_11_div_4_ng_container_30_div_17_Template, 25, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r9.detalleGanador);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r9.detalleGanador);
} }
function DescripcionDeVentaComponent_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Fecha del sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Combinaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Fracciones seleccionadas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Cantidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DescripcionDeVentaComponent_div_11_div_4_p_29_Template, 4, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DescripcionDeVentaComponent_div_11_div_4_ng_container_30_Template, 18, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.combinacion1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.fracciones.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.fracciones.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.formatNumber(item_r9.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.tieneDescuento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.hasGanador);
} }
function DescripcionDeVentaComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "LOTER\u00CDA NACIONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DescripcionDeVentaComponent_div_11_div_4_Template, 31, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.compra.loteria);
} }
function DescripcionDeVentaComponent_div_12_div_4_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Antojito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.nombreAntojito(item_r20.combinacion5));
} }
function DescripcionDeVentaComponent_div_12_div_4_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Total con descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r22.formatNumber(item_r20.subtotalConDesc));
} }
function DescripcionDeVentaComponent_div_12_div_4_ng_container_39_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r28 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r26.formatNumber(ganador_r28.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r26.formatNumber(ganador_r28.valorPremio - ganador_r28.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r26.formatNumber(ganador_r28.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r28.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_12_div_4_ng_container_39_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "VALOR DEL PREMIO CON DESC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Premio ", i_r30 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r27.formatNumber(ganador_r29.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r27.formatNumber(ganador_r29.valorPremio - ganador_r29.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r27.formatNumber(ganador_r29.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r29.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_12_div_4_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Boleto ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "VALOR DEL PREMIO CON DESCUENTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DescripcionDeVentaComponent_div_12_div_4_ng_container_39_div_14_Template, 9, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DescripcionDeVentaComponent_div_12_div_4_ng_container_39_div_15_Template, 21, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r20.detalleGanador);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r20.detalleGanador);
} }
function DescripcionDeVentaComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Fecha del sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Combinaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " LottoPlus: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Lottito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Nos Vemos Jefe: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DescripcionDeVentaComponent_div_12_div_4_p_27_Template, 4, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cantidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, DescripcionDeVentaComponent_div_12_div_4_p_38_Template, 4, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, DescripcionDeVentaComponent_div_12_div_4_ng_container_39_Template, 16, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.combinacion1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.combinacion3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.combinacion2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.combinacion4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r20.combinacion5 && item_r20.combinacion5 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.formatNumber(item_r20.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r20.tieneDescuento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r20.hasGanador);
} }
function DescripcionDeVentaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "LOTTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DescripcionDeVentaComponent_div_12_div_4_Template, 40, 10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.compra.lotto);
} }
function DescripcionDeVentaComponent_div_13_div_4_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Total con descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r34.formatNumber(item_r33.subtotalConDesc));
} }
function DescripcionDeVentaComponent_div_13_div_4_ng_container_34_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r39 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r37.formatNumber(ganador_r39.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r37.formatNumber(ganador_r39.valorPremio - ganador_r39.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r37.formatNumber(ganador_r39.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r39.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_13_div_4_ng_container_34_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "VALOR DEL PREMIO CON DESC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Premio ", i_r41 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r38.formatNumber(ganador_r40.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r38.formatNumber(ganador_r40.valorPremio - ganador_r40.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r38.formatNumber(ganador_r40.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r40.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_13_div_4_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Boleto ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "VALOR DEL PREMIO CON DESCUENTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DescripcionDeVentaComponent_div_13_div_4_ng_container_34_div_14_Template, 9, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DescripcionDeVentaComponent_div_13_div_4_ng_container_34_div_15_Template, 21, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r33.detalleGanador);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r33.detalleGanador);
} }
function DescripcionDeVentaComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Fecha del sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Boleto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Mascota: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Combinaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Cantidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DescripcionDeVentaComponent_div_13_div_4_p_33_Template, 4, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DescripcionDeVentaComponent_div_13_div_4_ng_container_34_Template, 16, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r33.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r33.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r33.combinacion1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r32.nombreMascota(item_r33.mascota));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r33.combinacion2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r32.formatNumber(item_r33.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r33.tieneDescuento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r33.hasGanador);
} }
function DescripcionDeVentaComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "POZO MILLONARIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DescripcionDeVentaComponent_div_13_div_4_Template, 35, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.compra.pozo);
} }
function DescripcionDeVentaComponent_div_14_div_4_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Total con descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r45.formatNumber(item_r44.subtotalConDesc));
} }
function DescripcionDeVentaComponent_div_14_div_4_ng_container_34_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r50 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r48.formatNumber(ganador_r50.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r48.formatNumber(ganador_r50.valorPremio - ganador_r50.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r48.formatNumber(ganador_r50.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r50.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_14_div_4_ng_container_34_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "VALOR DEL PREMIO CON DESC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ganador_r51 = ctx.$implicit;
    const i_r52 = ctx.index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Premio ", i_r52 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r49.formatNumber(ganador_r51.valorPremio));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r49.formatNumber(ganador_r51.valorPremio - ganador_r51.valorPremioDescuento), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r49.formatNumber(ganador_r51.valorPremioDescuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ganador_r51.descripcionPremio);
} }
function DescripcionDeVentaComponent_div_14_div_4_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Boleto ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "VALOR DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "DESCUENTO 14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "VALOR DEL PREMIO CON DESCUENTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "DESCRIPCI\u00D3N DEL PREMIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DescripcionDeVentaComponent_div_14_div_4_ng_container_34_div_14_Template, 9, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DescripcionDeVentaComponent_div_14_div_4_ng_container_34_div_15_Template, 21, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r44.detalleGanador);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r44.detalleGanador);
} }
function DescripcionDeVentaComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Fecha del sorteo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Combinaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Serie: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Fracciones seleccionadas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Cantidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DescripcionDeVentaComponent_div_14_div_4_p_33_Template, 4, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DescripcionDeVentaComponent_div_14_div_4_ng_container_34_Template, 16, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r44.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r44.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r44.combinacion1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r44.combinacion2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r44.fracciones.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r44.fracciones.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r43.formatNumber(item_r44.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r44.tieneDescuento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r44.hasGanador);
} }
function DescripcionDeVentaComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "LA MILLONARIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DescripcionDeVentaComponent_div_14_div_4_Template, 35, 9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.compra.millonaria);
} }
function DescripcionDeVentaComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.formatNumber(ctx_r5.compra.amount));
} }
function DescripcionDeVentaComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.formatNumber(ctx_r6.compra.total));
} }
function DescripcionDeVentaComponent_p_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r54.formatNumber(ctx_r54.compra.amountConDesc));
} }
function DescripcionDeVentaComponent_p_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r55.formatNumber(ctx_r55.compra.totalConDesc));
} }
function DescripcionDeVentaComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Total con descuento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DescripcionDeVentaComponent_p_20_span_2_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DescripcionDeVentaComponent_p_20_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.compra.amountConDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.compra.totalConDesc);
} }
class DescripcionDeVentaComponent {
    constructor(pozo, lotto) {
        this.pozo = pozo;
        this.lotto = lotto;
    }
    ngOnInit() {
    }
    nombreMascota(mascota) {
        let mascotaData = this.pozo.obtenerCaracteristicasDeMascota(mascota);
        return mascotaData.nombre;
    }
    nombreAntojito(antojito) {
        let antojitoData = this.lotto.obtenerCaracteristicasDeAntojito(antojito);
        return antojitoData.nombre;
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
DescripcionDeVentaComponent.ɵfac = function DescripcionDeVentaComponent_Factory(t) { return new (t || DescripcionDeVentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_juegos_pozo_services_venta_service__WEBPACK_IMPORTED_MODULE_0__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_juegos_lotto_services_venta_service__WEBPACK_IMPORTED_MODULE_1__.VentaService)); };
DescripcionDeVentaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DescripcionDeVentaComponent, selectors: [["app-descripcion-de-venta"]], inputs: { compra: "compra", user: "user", ticketId: "ticketId" }, decls: 21, vars: 9, consts: [[1, "titleBox"], [1, "containerDetails"], [1, "containerInfoBox"], [1, "titleLoteryBox"], [4, "ngIf"], ["class", "containerInfoBox", 4, "ngIf"], [1, "totalBox"], [1, "titleLoteriaBox"], ["class", "dateLoteryBox loteria", 4, "ngFor", "ngForOf"], [1, "dateLoteryBox", "loteria"], [1, "infoSorteoBox"], [1, "dateTicketBox"], [1, "numberBox"], [1, "montoBox"], [1, "ganadorTitleBox", "loteriaColor"], [1, "ganadorBox"], [1, "ganadorHeaderBox", "loteriaBackground"], [1, "ganadorFraccion"], ["class", "ganadorDetailsBox", 4, "ngFor", "ngForOf"], ["class", "ganadorBoxMobile", 4, "ngFor", "ngForOf"], [1, "ganadorDetailsBox"], [1, "ganadorBoxMobile"], [1, "titleLottoBox"], ["class", "dateLoteryBox lotto", 4, "ngFor", "ngForOf"], [1, "dateLoteryBox", "lotto"], [1, "ganadorTitleBox", "lottoColor"], [1, "ganadorHeaderBox", "lottoBackground"], [1, "titlePozoBox"], ["class", "dateLoteryBox pozo", 4, "ngFor", "ngForOf"], [1, "dateLoteryBox", "pozo"], [1, "ganadorTitleBox", "pozoColor"], [1, "ganadorHeaderBox", "pozoBackground"], [1, "titleMillonariaBox"], ["class", "dateLoteryBox millonaria", 4, "ngFor", "ngForOf"], [1, "dateLoteryBox", "millonaria"], [1, "ganadorTitleBox", "millonariaColor"], [1, "ganadorHeaderBox", "millonariaBackground"]], template: function DescripcionDeVentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "A continuacion un resumen de tu compra:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Usuario: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DescripcionDeVentaComponent_h3_10_Template, 4, 1, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DescripcionDeVentaComponent_div_11_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DescripcionDeVentaComponent_div_12_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DescripcionDeVentaComponent_div_13_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DescripcionDeVentaComponent_div_14_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DescripcionDeVentaComponent_span_18_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DescripcionDeVentaComponent_span_19_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DescripcionDeVentaComponent_p_20_Template, 4, 2, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ticketId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.loteria.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.lotto.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.pozo.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.millonaria.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compra.amountConDesc && ctx.compra.amount != ctx.compra.amountConDesc || ctx.compra.totalConDesc && ctx.compra.total != ctx.compra.totalConDesc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".titleBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  border-bottom: 1px solid #28AAE1;\n  margin-bottom: 23px;\n}\n.titleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 23px;\n  color: #28AAE1;\n  margin: 2px;\n}\n.titleBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteriaBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #28AAE1;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteriaBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLottoBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #b51f20;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLottoBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titlePozoBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #04b865;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titlePozoBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleMillonariaBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #b51f20;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleMillonariaBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox.codigos[_ngcontent-%COMP%] {\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox.codigos[_ngcontent-%COMP%]   .codigo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Monstserrat SemiBold\";\n  font-weight: normal;\n  margin: 8px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 20px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%] {\n  \n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 23px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]:nth-last-child(1) {\n  border: none !important;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%] {\n  width: 30%;\n  border-right: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%] {\n  width: 42%;\n  font-weight: 600;\n  font-size: 15px;\n  border-right: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%] {\n  width: 12%;\n  text-align: center;\n  border-right: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%] {\n  width: 12%;\n  text-align: right;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  \n  font-family: \"Monstserrat Regular\";\n  font-size: 15px;\n  border-right: 1px solid black;\n  width: 70%;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.loteriaColor[_ngcontent-%COMP%] {\n  color: #28AAE1;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.lottoColor[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.pozoColor[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.milloanriaColor[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Monstserrat Bold\";\n  margin: 15px 0 8px 0;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: 5px 0px 18px 3px rgba(0, 0, 0, 0.3);\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 12px 12px 0 0;\n  width: 100%;\n  min-height: 40px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.loteriaBackground[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.lottoBackground[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.pozoBackground[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.millonariaBackground[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 14px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  margin: 5px 0;\n  color: white;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%]   .ganadorFraccion[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  min-height: 40px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 14px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  margin: 5px 0;\n  border-bottom: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]:nth-last-child(1)   p[_ngcontent-%COMP%] {\n  border: none;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   .ganadorFraccion[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: center;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .loteria[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #28AAE1;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .lotto[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .pozo[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .millonaria[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .totalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.containerDetails[_ngcontent-%COMP%]   .totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Regular\";\n}\n.mensajeButtonBox[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 20px;\n  padding: 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #c3c3c3;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover {\n  background-color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 23px;\n  color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n@media screen and (max-width: 1000px) {\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border: none;\n    border-bottom: 1px solid black;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid black;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%] {\n    width: 50%;\n    border: none;\n    text-align: left;\n    margin-bottom: 20px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-bottom: 20px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid black;\n    margin-bottom: 10px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    border-radius: 12px;\n    margin-bottom: 10px;\n    box-shadow: 5px 0px 18px 3px rgba(0, 0, 0, 0.3);\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n    padding: 10px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.loteriaBackground[_ngcontent-%COMP%] {\n    background-color: #28AAE1;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.lottoBackground[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.pozoBackground[_ngcontent-%COMP%] {\n    background-color: #04b865;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.millonariaBackground[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: bold;\n    font-size: 16px;\n    margin: 0;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 20px;\n    border-radius: 0 0 12px 12px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    width: 50%;\n    border-bottom: 1px solid black;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even) {\n    text-align: right;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(odd) {\n    text-align: left;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-last-child(1), .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-last-child(2) {\n    border: none;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NyaXBjaW9uLWRlLXZlbnRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBVkY7QUFXRTtFQUNFLCtCQXBCWTtFQXFCWixlQUFBO0VBQ0EsY0FoQlk7RUFpQlosV0FBQTtBQVRKO0FBWUU7RUFDRSxrQ0F6QmE7QUFlakI7QUFhQTtFQUNFLG1CQUFBO0FBVkY7QUFZSTtFQUNFLGFBQUE7RUFDQSx5QkE3QlU7RUErQlYsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBWE47QUFZTTtFQUNFLFlBQUE7RUFDQSxtQ0F6Q1c7RUEwQ1gsZUFBQTtBQVZSO0FBYUk7RUFDRSxhQUFBO0VBQ0EseUJBekNRO0VBMkNSLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVpOO0FBYU07RUFDRSxZQUFBO0VBQ0EsbUNBdERXO0VBdURYLGVBQUE7QUFYUjtBQWNJO0VBQ0UsYUFBQTtFQUNBLHlCQXJETztFQXVEUCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWNNO0VBQ0UsWUFBQTtFQUNBLG1DQW5FVztFQW9FWCxlQUFBO0FBWlI7QUFlSTtFQUNFLGFBQUE7RUFDQSx5QkFqRWE7RUFtRWIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZE47QUFlTTtFQUNFLFlBQUE7RUFDQSxtQ0FoRlc7RUFpRlgsZUFBQTtBQWJSO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWROO0FBZU07RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFlVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBYlo7QUFtQk07RUFDQSxlQUFBO0VBQ0EsbUNBdkdhO0VBd0dYLG1CQUFBO0VBQ0EsV0FBQTtBQWpCUjtBQWtCUTtFQUNFLGtDQTFHTztBQTBGakI7QUFvQkk7RUFDRSxXQUFBO0FBbEJOO0FBb0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBbEJSO0FBb0JRO0VBQ0UsaUJBQUE7QUFsQlY7QUF1Qkk7RUFDRTs7O0dBQUE7RUFJQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBckJOO0FBc0JNO0VBQ0UsdUJBQUE7QUFwQlI7QUFzQk07RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUFwQlI7QUFxQlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFoSk07QUE2SGhCO0FBb0JVO0VBQ0Usa0NBaEpLO0FBOEhqQjtBQXNCTTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQXBCUjtBQXFCUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQTlKTTtBQTJJaEI7QUFvQlU7RUFDRSxrQ0E5Sks7QUE0SWpCO0FBdUJNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFyQlI7QUFzQlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkE1S007QUF3SmhCO0FBcUJVO0VBQ0Usa0NBNUtLO0FBeUpqQjtBQXdCTTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQXRCUjtBQXVCUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQXpMTTtBQW9LaEI7QUFzQlU7RUFDRSxrQ0F6TEs7QUFxS2pCO0FBd0JNO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQTs7R0FBQTtFQUdBLGtDQXBNUztFQXFNVCxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBdEJSO0FBd0JNO0VBQ0Usc0JBQUE7QUF0QlI7QUF1QlE7RUFDRSxjQXhNTTtBQW1MaEI7QUF1QlE7RUFDRSxjQTFNSTtBQXFMZDtBQXVCUTtFQUNFLGNBNU1HO0FBdUxiO0FBdUJRO0VBQ0UsY0E5TVM7QUF5TG5CO0FBdUJRO0VBQ0UsZUFBQTtFQUNBLCtCQTNOTTtFQTROTixvQkFBQTtBQXJCVjtBQXlCTTtFQUNFLGFBQUE7QUF2QlI7QUF5Qk07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBR0EsK0NBQUE7QUF2QlI7QUF3QlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdEJWO0FBdUJVO0VBQ0UseUJBL09JO0FBME5oQjtBQXVCVTtFQUNFLHlCQWpQRTtBQTROZDtBQXVCVTtFQUNFLHlCQW5QQztBQThOYjtBQXVCVTtFQUNFLHlCQXJQTztBQWdPbkI7QUF1QlU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQW5RSTtFQW9RSixrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBckJaO0FBdUJVO0VBQ0UsVUFBQTtBQXJCWjtBQXdCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdEJWO0FBdUJVO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFyUkk7RUFzUkosa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFyQlo7QUF1QlU7RUFDRSxZQUFBO0FBckJaO0FBdUJVO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBckJaO0FBMkJJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWxTVTtBQXlRaEI7QUEyQkk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBdFNRO0FBNlFkO0FBMkJJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQTFTTztBQWlSYjtBQTJCSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkE5U2E7QUFxUm5CO0FBNkJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQTVCSjtBQThCSTtFQUNFLFdBQUE7RUFDQSwrQkF2VVU7QUEyU2hCO0FBOEJNO0VBQ0UsWUFBQTtFQUNBLGtDQXpVUztBQTZTakI7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7QUFqQ0Y7QUFtQ0U7RUFDRSx1QkFBQTtBQWpDSjtBQW9DRTtFQUNFLG1DQS9WYTtFQWdXYixlQUFBO0VBQ0EsWUFBQTtBQWxDSjtBQXFDRTtFQUNFLFlBQUE7QUFuQ0o7QUFzQ0E7RUFHTTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQXJDTjtFQXNDTTtJQUNFLFdBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VBcENSO0VBc0NNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQXBDUjtFQXVDTTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQXJDUjtFQXVDTTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQXJDUjtFQXVDTTtJQUNFLFdBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBckNSO0VBdUNNO0lBQ0UsYUFBQTtFQXJDUjtFQXVDTTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBR0EsK0NBQUE7RUFyQ1I7RUFzQ1E7SUFDRSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0VBcENWO0VBcUNVO0lBQ0UseUJBelpFO0VBc1hkO0VBcUNVO0lBQ0UseUJBM1pBO0VBd1haO0VBcUNVO0lBQ0UseUJBN1pEO0VBMFhYO0VBcUNVO0lBQ0UseUJBL1pLO0VBNFhqQjtFQXFDVTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0VBbkNaO0VBc0NRO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtFQXBDVjtFQXFDVTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSw4QkFBQTtFQW5DWjtFQW9DWTtJQUNFLGlCQUFBO0VBbENkO0VBb0NZO0lBQ0UsZ0JBQUE7RUFsQ2Q7RUFvQ1k7SUFFRSxZQUFBO0VBbkNkO0FBQ0Y7QUEyQ0E7RUFNWTtJQUNFLGVBQUE7RUE5Q1o7QUFDRiIsImZpbGUiOiJkZXNjcmlwY2lvbi1kZS12ZW50YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1oZWFkZXI6ICM3YzkxYTg7XG4kY29sb3ItbG90ZXJpYTogIzI4QUFFMTtcbiRjb2xvci1sb3R0bzogI2I1MWYyMDtcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xuJGNvbG9yLW1pbGxvbmFyaWE6ICNiNTFmMjA7XG5cbi50aXRsZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbG90ZXJpYTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cblxuICBhIHtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICB9XG59XG4uY29udGFpbmVyRGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC5jb250YWluZXJJbmZvQm94IHtcbiAgICAudGl0bGVMb3RlcmlhQm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90ZXJpYTtcblxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBoMyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZUxvdHRvQm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG5cbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAudGl0bGVQb3pvQm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcblxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBoMyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZU1pbGxvbmFyaWFCb3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlTG90ZXJ5Qm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgJi5jb2RpZ29zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLmNvZGlnbyB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGF0ZUNsaWVudEJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmluZm9DbGllbnRCb3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGVMb3RlcnlCb3gge1xuICAgICAgLyogICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDFmcjtcbiAgICAgIGNvbHVtbi1nYXA6IDNyZW07XG4gKi9cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMjNweDtcbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5pbmZvU29ydGVvQm94IHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGF0ZVRpY2tldEJveCB7XG4gICAgICAgIHdpZHRoOiA0MiU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5udW1iZXJCb3gge1xuICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubW9udG9Cb3gge1xuICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbmZvVGlja2V0Qm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAvKiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gKi9cbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIC5nYW5hZG9yVGl0bGVCb3gge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAmLmxvdGVyaWFDb2xvciB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3RlcmlhO1xuICAgICAgICB9XG4gICAgICAgICYubG90dG9Db2xvciB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgfVxuICAgICAgICAmLnBvem9Db2xvciB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICB9XG4gICAgICAgICYubWlsbG9hbnJpYUNvbG9yIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICBtYXJnaW46IDE1cHggMCA4cHggMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZ2FuYWRvckJveE1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAuZ2FuYWRvckJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgLmdhbmFkb3JIZWFkZXJCb3gge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgJi5sb3RlcmlhQmFja2dyb3VuZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90ZXJpYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5sb3R0b0JhY2tncm91bmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLnBvem9CYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLm1pbGxvbmFyaWFCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2FuYWRvckZyYWNjaW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5nYW5hZG9yRGV0YWlsc0JveCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSBwIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdhbmFkb3JGcmFjY2lvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5sb3RlcmlhIHtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XG4gICAgfVxuICAgIC5sb3R0byB7XG4gICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICB9XG4gICAgLnBvem8ge1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcG96bztcbiAgICB9XG4gICAgLm1pbGxvbmFyaWEge1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcbiAgICB9XG4gIH1cblxuICAudG90YWxCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1lbnNhamVCdXR0b25Cb3gge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgcGFkZGluZzogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG5cbiAgJjpob3ZlciBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyRGV0YWlscyB7XG4gICAgLmNvbnRhaW5lckluZm9Cb3gge1xuICAgICAgLmRhdGVMb3RlcnlCb3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5pbmZvU29ydGVvQm94IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZVRpY2tldEJveCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1iZXJCb3gge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubW9udG9Cb3gge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZ2FuYWRvclRpdGxlQm94IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZ2FuYWRvckJveCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZ2FuYWRvckJveE1vYmlsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgLmdhbmFkb3JIZWFkZXJCb3gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICYubG90ZXJpYUJhY2tncm91bmQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90ZXJpYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubG90dG9CYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5wb3pvQmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5taWxsb25hcmlhQmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2FuYWRvckRldGFpbHNCb3gge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSxcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRhaW5lckRldGFpbHMge1xuICAgIC5jb250YWluZXJJbmZvQm94IHtcbiAgICAgIC5kYXRlTG90ZXJ5Qm94IHtcbiAgICAgICAgLmdhbmFkb3JCb3hNb2JpbGUge1xuICAgICAgICAgIC5nYW5hZG9yRGV0YWlsc0JveCB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9927:
/*!******************************************************************************!*\
  !*** ./src/app/ventas/components/detalle-sorteo/detalle-sorteo.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleSorteoComponent": () => (/* binding */ DetalleSorteoComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);







function DetalleSorteoComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const objeto_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", objeto_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](objeto_r8.dia);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" - ", objeto_r8.sorteo, " - ", objeto_r8.fecha.split(" ")[0], " ");
  }
}

function DetalleSorteoComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Precio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.precio);
  }
}

function DetalleSorteoComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Precio de fracci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.precio);
  }
}

function DetalleSorteoComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Premio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.premio);
  }
}

function DetalleSorteoComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Premio al entero: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.premioLoteria);
  }
}

function DetalleSorteoComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Premio a la fracci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.premio);
  }
}

function DetalleSorteoComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Total de fracciones: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.cantidadDeFracciones);
  }
}

function DetalleSorteoComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function DetalleSorteoComponent_div_28_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r9.handleImgError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.boleto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

class DetalleSorteoComponent {
  constructor(ventas, changeDetectorRef) {
    this.ventas = ventas;
    this.changeDetectorRef = changeDetectorRef;
    this.emitir = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.fondoLoteria = true;
    this.isLoteria = false;
    this.fondoLotto = false;
    this.fondoPozo = false;
    this.imgNotFound = true;
    this.fondoMillonaria = false;
    this.fecha = "";
    this.hora = "";
    this.premio = "";
    this.premioLoteria = "";
    this.precio = "";
  }

  getClassColor(color) {
    switch (color) {
      case "loteria":
        this.tipoLoteria = 1;
        this.fondoLoteria = true;
        this.isLoteria = true;
        this.fondoLotto = false;
        this.fondoMillonaria = false;
        this.fondoPozo = false;
        break;

      case "lotto":
        this.tipoLoteria = 2;
        this.fondoLotto = true;
        this.fondoMillonaria = false;
        this.fondoLoteria = false;
        this.fondoPozo = false;
        break;

      case "pozo":
        this.tipoLoteria = 5;
        this.fondoPozo = true;
        this.fondoLotto = false;
        this.fondoMillonaria = false;
        this.fondoLoteria = false;
        break;

      case "millonaria":
        this.tipoLoteria = 14;
        this.isLoteria = true;
        this.fondoMillonaria = true;
        this.fondoPozo = false;
        this.fondoLotto = false;
        this.fondoLoteria = false;
        break;
    }
  }

  handleImgError() {
    this.imgNotFound = true;
  }

  onEmitir() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.changeDetectorRef.detectChanges();

      _this.boleto = "";
      _this.fecha = _this.seleccionado.fecha.split(" ")[0];
      _this.hora = _this.seleccionado.fecha.split(" ")[1];
      let auxPremio = _this.seleccionado.valorPremioPrincipal;
      let premio = parseFloat(auxPremio).toFixed(2);
      let precio = parseFloat(_this.seleccionado.precio).toFixed(2);
      _this.cantidadDeFracciones = _this.seleccionado.cantidadDeFracciones;

      let auxPremioLoteria = parseInt(premio) * _this.cantidadDeFracciones;

      if (_this.tipoLoteria == 14) {
        auxPremioLoteria = Math.ceil(parseInt(premio) * _this.cantidadDeFracciones / 10) * 10;
      }

      _this.premioLoteria = _this.ventas.formatNumber(auxPremioLoteria).split(".")[0];
      _this.premio = _this.ventas.formatNumber(premio).split(".")[0];
      _this.precio = _this.ventas.formatNumber(precio);

      _this.emitir.emit(_this.seleccionado);

      _this.boleto = yield _this.ventas.obtenerImagenBoleto(_this.tipoLoteria, _this.seleccionado.sorteo);
      _this.imgNotFound = false;

      _this.changeDetectorRef.markForCheck();
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.getClassColor(_this2.color);

      _this2.setSorteoDefault();
      /*
      this.sorteo = await this.ventas.obtenerSorteo(this.loteria);*/

    })();
  }

  setSorteoDefault() {
    this.changeDetectorRef.detectChanges();
    this.seleccionado = this.sorteos[0];
    this.changeDetectorRef.markForCheck();
    this.onEmitir();
  }

}

DetalleSorteoComponent.ɵfac = function DetalleSorteoComponent_Factory(t) {
  return new (t || DetalleSorteoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};

DetalleSorteoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DetalleSorteoComponent,
  selectors: [["app-detalle-sorteo"]],
  inputs: {
    titulo: "titulo",
    color: "color",
    loteria: "loteria",
    sorteos: "sorteos"
  },
  outputs: {
    emitir: "emitir"
  },
  decls: 29,
  vars: 12,
  consts: [[1, "menuBox"], [1, "menuInfo"], [1, "menuSorteo"], [1, "menuItem"], [1, "fechaItem", 3, "ngModel", "ngModelChange", "change"], ["selected", "", "disabled", "", 3, "ngValue"], [4, "ngFor", "ngForOf"], ["class", "menuItem", 4, "ngIf"], [1, "menuPremio"], ["class", "menuImage", 4, "ngIf"], [3, "ngValue"], [1, "menuImage"], ["alt", "", 3, "src", "error"]],
  template: function DetalleSorteoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "SORTEO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " N\u00FAmero: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DetalleSorteoComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.seleccionado = $event;
      })("change", function DetalleSorteoComponent_Template_select_change_7_listener() {
        return ctx.onEmitir();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Seleccione un sorteo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DetalleSorteoComponent_ng_container_10_Template, 5, 4, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Fecha: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Hora: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DetalleSorteoComponent_div_19_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DetalleSorteoComponent_div_20_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "PREMIOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DetalleSorteoComponent_div_24_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DetalleSorteoComponent_div_25_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DetalleSorteoComponent_div_26_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DetalleSorteoComponent_div_27_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DetalleSorteoComponent_div_28_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.seleccionado);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", ctx.sorteoDefault);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sorteos);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.fecha);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hora);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoteria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoteria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoteria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoteria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoteria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoteria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.imgNotFound);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".fondoLoteria[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #28aae1 !important;\n  font-size: 30px !important;\n  color: #28aae1;\n  font-family: \"Monstserrat Bold\";\n}\n\n.fondoMillonaria[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b51f20 !important;\n  font-size: 30px !important;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n\n.fondoLotto[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b51f20 !important;\n  font-size: 30px !important;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n\n.fondoPozo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #04b865 !important;\n  font-size: 30px !important;\n  color: #04b865;\n  font-family: \"Monstserrat Bold\";\n}\n\n.menuBox[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  padding: 0;\n  margin: auto;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  background: #ffffff;\n  box-shadow: 3px 4px 9px rgba(0, 0, 0, 0.25);\n  border-radius: 25px;\n  padding: 15px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  text-align: center;\n  margin: 0;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n  padding: 5px;\n  font-size: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  background-color: transparent;\n  margin: 0 0 4px 0;\n  font-style: italic;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\n  visibility: hidden;\n  display: none;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 0px black;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 3px 3px 3px 10px;\n  font-family: \"Monstserrat Regular\";\n  font-style: normal;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   .fechaItem[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 220px;\n  max-width: 320px;\n  display: block;\n  font-size: 20px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  background-color: #f2f2f2;\n  line-height: 1.3;\n  padding: 4px;\n  margin: 0 0 0 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);\n  border-radius: 0.3em;\n  text-align: center;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   .fechaItem[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   .fechaItem[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  text-align: center;\n  margin: 0;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n  padding: 5px;\n  font-size: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  background-color: transparent;\n  margin: 0 0 4px 0;\n  font-style: italic;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 3px 3px 3px 10px;\n  font-family: \"Monstserrat Regular\";\n  font-style: normal;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuImage[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40%;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  padding: 5px;\n  background-color: transparent;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtc29ydGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFYYztBQUtoQjs7QUFRQTtFQUNFLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBakJjO0FBWWhCOztBQVFBO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkF4QmM7QUFtQmhCOztBQVFBO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkEvQmM7QUEwQmhCOztBQVFBO0VBQ0UsaUJBQUE7RUFFQSxXQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7QUFQRjs7QUFRRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU5KOztBQU9JO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFMTjs7QUFNTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUpSOztBQU9NO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQWpFVztFQWtFWCw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMUjs7QUFPUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBTFY7O0FBTVU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFKWjs7QUFNVTtFQUNFLDhCQUFBO0FBSlo7O0FBUVE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FwRk87RUFxRlQsa0JBQUE7QUFOUjs7QUFTUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0E5Rk87RUErRlAsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFQVjs7QUFRVTtFQUNFLGtCQUFBO0FBTlo7O0FBUVU7RUFDRSxhQUFBO0FBTlo7O0FBV0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQVROOztBQVVNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBUlI7O0FBVU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBcklXO0VBc0lYLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJSOztBQVVRO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBNUlPO0VBNklQLGtCQUFBO0FBUlY7O0FBY0U7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVpKOztBQWFJO0VBQ0UsV0FBQTtBQVhOIiwiZmlsZSI6ImRldGFsbGUtc29ydGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuJGNvbG9yLWJvdHRvbjogIzI4YWFlMTtcblxuLmZvbmRvTG90ZXJpYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjhhYWUxICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI4YWFlMTtcbiAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xufVxuLmZvbmRvTWlsbG9uYXJpYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjUxZjIwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2I1MWYyMDtcbiAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xufVxuXG4uZm9uZG9Mb3R0byB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjUxZjIwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2I1MWYyMDtcbiAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xufVxuXG4uZm9uZG9Qb3pvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNGI4NjUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDRiODY1O1xuICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG59XG5cbi5tZW51Qm94IHtcbiAgLyogUmVjdGFuZ2xlIDQ2ICovXG5cbiAgd2lkdGg6IDEwMCU7XG5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICAubWVudUluZm8ge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDNweCA0cHggOXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC5tZW51U29ydGVvIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaDEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAubWVudUl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG9wdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb24gc3BhbiB7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogM3B4IDNweCAzcHggMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG5cbiAgICAgICAgLmZlY2hhSXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMjBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5tZW51UHJlbWlvIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaDEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLm1lbnVJdGVtIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDNweCAzcHggM3B4IDEwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWVudUltYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 647:
/*!****************************************************************************!*\
  !*** ./src/app/ventas/components/floating-menu/floating-menu.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingMenuComponent": () => (/* binding */ FloatingMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carrito/carrito.component */ 1616);





function FloatingMenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FloatingMenuComponent_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.toggleCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "CARRITO DE COMPRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "JUEGOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "DEPORTES");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.total, " ");
} }
function FloatingMenuComponent_app_carrito_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-carrito", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("emitirCompra", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_emitirCompra_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.comprar(); })("eliminarTodo", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_eliminarTodo_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.deleteAllTickets(); })("deleteLoteriaTicket", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_deleteLoteriaTicket_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.deleteLoteria($event); })("deleteLottoTicket", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_deleteLottoTicket_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.deleteLotto($event); })("deletePozoTicket", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_deletePozoTicket_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.deletePozo($event); })("deleteMillonariaTicket", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_deleteMillonariaTicket_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.deleteMillonaria($event); })("deleteLoteriaFraccion", function FloatingMenuComponent_app_carrito_6_Template_app_carrito_deleteLoteriaFraccion_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.deleteFraccion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ticketsLoteria", ctx_r1.ticketsLoteria)("ticketsLotto", ctx_r1.ticketsLotto)("ticketsPozo", ctx_r1.ticketsPozo)("ticketsMillonaria", ctx_r1.ticketsMillonaria)("tipoLoteria", ctx_r1.tipoLoteria);
} }
class FloatingMenuComponent {
    constructor(cart) {
        this.cart = cart;
        this.isToggled = false;
        this.emitirCompra = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.eliminarTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteLoteriaTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteLoteriaFraccion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteLottoTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deletePozoTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteMillonariaTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.carrito = {};
        this.cerrar = {};
        this.isCart = false;
    }
    ngOnInit() {
        this.carrito = {
            carritoDisplay: false,
        };
        this.cerrar = {
            cerrarDisplay: false,
        };
    }
    toggleBox() {
        this.isToggled = !this.isToggled;
        this.carrito = {
            carritoDisplay: this.isToggled,
        };
        this.cerrar = {
            cerrarDisplay: this.isToggled,
        };
        this.isCart = false;
    }
    toggleCart() {
        this.isCart = true;
    }
    comprar() {
        this.toggleBox();
        this.emitirCompra.emit();
    }
    deleteAllTickets() {
        this.eliminarTodo.emit();
    }
    deleteLoteria(e) {
        this.deleteLoteriaTicket.emit(e);
    }
    deleteLotto(e) {
        this.deleteLottoTicket.emit(e);
    }
    deletePozo(e) {
        this.deletePozoTicket.emit(e);
    }
    deleteMillonaria(e) {
        this.deleteMillonariaTicket.emit(e);
    }
    deleteFraccion(e) {
        this.deleteLoteriaFraccion.emit(e);
    }
    ngDoCheck() {
        this.total = this.cart.getTotal();
        this.total = this.formatNumber(this.total);
    }
    formatNumber(number) {
        // Create our number formatter.
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(number);
    }
}
FloatingMenuComponent.ɵfac = function FloatingMenuComponent_Factory(t) { return new (t || FloatingMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_0__.CarritoService)); };
FloatingMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FloatingMenuComponent, selectors: [["app-floating-menu"]], inputs: { ticketsLoteria: "ticketsLoteria", ticketsMillonaria: "ticketsMillonaria", ticketsLotto: "ticketsLotto", ticketsPozo: "ticketsPozo", tickets: "tickets", tipoLoteria: "tipoLoteria" }, outputs: { emitirCompra: "emitirCompra", eliminarTodo: "eliminarTodo", deleteLoteriaTicket: "deleteLoteriaTicket", deleteLoteriaFraccion: "deleteLoteriaFraccion", deleteLottoTicket: "deleteLottoTicket", deletePozoTicket: "deletePozoTicket", deleteMillonariaTicket: "deleteMillonariaTicket" }, decls: 7, vars: 6, consts: [[1, "floatingBox", 3, "click"], ["src", "assets/carrito-blanco.svg", "alt", "", 1, "carrito", 3, "ngClass"], ["src", "assets/cerrar.svg", "alt", "", 1, "cerrar", 3, "ngClass"], [1, "totalBox", 3, "ngClass"], ["class", "toggleBox", 4, "ngIf"], ["class", "ticketScroller", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "tipoLoteria", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion", 4, "ngIf"], [1, "toggleBox"], [1, "itemBox", 3, "click"], ["src", "assets/carrito-negro.svg", "alt", ""], [1, "totalCartBox"], ["href", "https://www.loteria.com.ec/casino", "target", "_parent", 1, "itemBox"], ["src", "assets/casino.svg", "alt", ""], ["href", "https://www.loteria.com.ec/sport", "target", "_parent", 1, "itemBox"], ["src", "assets/sport.svg", "alt", ""], [1, "ticketScroller", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "tipoLoteria", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion"]], template: function FloatingMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FloatingMenuComponent_Template_div_click_0_listener() { return ctx.toggleBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FloatingMenuComponent_div_5_Template, 15, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FloatingMenuComponent_app_carrito_6_Template, 1, 5, "app-carrito", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.carrito);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.cerrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.carrito);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.total, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isToggled && !ctx.isCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_1__.CarritoComponent], styles: [".floatingBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.toggleBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.totalBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 1000px) {\n  .floatingBox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    bottom: 10px;\n    left: 10px;\n    background-color: #28abe2;\n    width: 60px;\n    height: 60px;\n    z-index: 10000;\n    border-radius: 80px;\n    box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -webkit-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -moz-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n  }\n  .floatingBox[_ngcontent-%COMP%]   .carrito[_ngcontent-%COMP%] {\n    width: 30px;\n    opacity: 1;\n    transition: opacity ease-in 0.3s;\n  }\n  .floatingBox[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%] {\n    width: 0;\n    opacity: 0;\n    transition: opacity ease-in 0.3s;\n  }\n  .floatingBox[_ngcontent-%COMP%]   .carritoDisplay[_ngcontent-%COMP%] {\n    width: 0;\n    opacity: 0;\n    transition: opacity ease-in 0.3s;\n  }\n  .floatingBox[_ngcontent-%COMP%]   .cerrarDisplay[_ngcontent-%COMP%] {\n    width: 25px;\n    opacity: 1;\n    transition: opacity ease-in 0.3s;\n  }\n\n  .toggleBox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n    width: 95%;\n    background-color: rgba(255, 255, 255, 0.95);\n    position: fixed;\n    bottom: 80px;\n    left: 2.5%;\n    padding: 20px 30px;\n    z-index: 10000;\n    box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -webkit-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -moz-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-decoration: none;\n    color: black;\n    font-family: \"Monstserrat SemiBold\";\n    font-size: 14px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]   .totalCartBox[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: white;\n    background-color: #28abe2;\n    border-radius: 10px;\n    margin-left: auto;\n    padding: 6px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: \"Monstserrat SemiBold\";\n    font-size: 14px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]:nth-child(2) {\n    border-width: 1px 0;\n    border-style: solid;\n    border-color: black;\n  }\n\n  .ticketScroller[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 9500;\n    width: 95%;\n    left: 2.5%;\n    top: 40px;\n    max-width: 800px;\n  }\n\n  .totalBox[_ngcontent-%COMP%] {\n    position: fixed;\n    display: block;\n    font-size: 14px;\n    background-color: white;\n    border-radius: 10px;\n    bottom: 25px;\n    left: 70px;\n    margin: 0 5px;\n    padding: 6px 15px;\n    opacity: 1;\n    box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -webkit-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -moz-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    transition: opacity ease-in 0.3s;\n  }\n  .totalBox.carritoDisplay[_ngcontent-%COMP%] {\n    opacity: 0;\n    transition: opacity ease-in 0.3s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0aW5nLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EseUJBdkJXO0lBd0JYLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsbURBQUE7SUFDQSwyREFBQTtJQUNBLHdEQUFBO0VBRkY7RUFJRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7RUFGSjtFQUlFO0lBQ0UsUUFBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtFQUZKO0VBS0U7SUFDRSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGdDQUFBO0VBSEo7RUFLRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7RUFISjs7RUFNQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLDJDQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsbURBQUE7SUFDQSwyREFBQTtJQUNBLHdEQUFBO0VBSEY7RUFJRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUNBekVhO0lBMEViLGVBQUE7RUFGSjtFQUdJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSx5QkEvRU87SUFnRlAsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFETjtFQUdJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBRE47RUFHSTtJQUNFLG1DQXhGVztJQXlGWCxlQUFBO0VBRE47RUFHSTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQUROOztFQUtBO0lBQ0UsZUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtFQUZGOztFQUlBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLG1EQUFBO0lBQ0EsMkRBQUE7SUFDQSx3REFBQTtJQUNBLGdDQUFBO0VBREY7RUFHRTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtFQURKO0FBQ0YiLCJmaWxlIjoiZmxvYXRpbmctbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1ib3R0b246ICMyOGFiZTI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4uZmxvYXRpbmdCb3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9nZ2xlQm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvdGFsQm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mbG9hdGluZ0JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcblxuICAgIC5jYXJyaXRvIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjNzO1xuICAgIH1cbiAgICAuY2VycmFyIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjNzO1xuICAgIH1cblxuICAgIC5jYXJyaXRvRGlzcGxheSB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4zcztcbiAgICB9XG4gICAgLmNlcnJhckRpc3BsYXkge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuM3M7XG4gICAgfVxuICB9XG4gIC50b2dnbGVCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA4MHB4O1xuICAgIGxlZnQ6IDIuNSU7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcbiAgICAuaXRlbUJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC50b3RhbENhcnRCb3gge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50aWNrZXRTY3JvbGxlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk1MDA7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBsZWZ0OiAyLjUlO1xuICAgIHRvcDogNDBweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG4gIC50b3RhbEJveCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvdHRvbTogMjVweDtcbiAgICBsZWZ0OiA3MHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41MSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41MSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41MSk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuM3M7XG5cbiAgICAmLmNhcnJpdG9EaXNwbGF5IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4zcztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2126:
/*!************************************************************************!*\
  !*** ./src/app/ventas/components/instantanea/instantanea.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstantaneaComponent": () => (/* binding */ InstantaneaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function InstantaneaComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SERIE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.premio.combinacion2);
} }
function InstantaneaComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FRACCI\u00D3N: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.premio.fracciones, " ");
} }
class InstantaneaComponent {
    constructor() { }
    ngOnInit() {
        this.sorteo = this.premio.sorteo;
        this.valorPremio = this.formatNumber(parseFloat(this.premio.prizeWithDiscount));
        this.nombrePremio = this.premio.prizeDescription;
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
InstantaneaComponent.ɵfac = function InstantaneaComponent_Factory(t) { return new (t || InstantaneaComponent)(); };
InstantaneaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstantaneaComponent, selectors: [["app-instantanea"]], inputs: { premio: "premio", tipoLoteria: "tipoLoteria" }, decls: 32, vars: 6, consts: [[1, "resultadoBox"], [1, "resultadoDetalles"], ["src", "assets/ganadorbrillante.png", "alt", ""], [1, "detailBox"], ["src", "assets/ganadorpremio.png", "alt", ""], [1, "detailText"], [4, "ngIf"]], template: function InstantaneaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bienvenido al ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pa\u00EDs de los Ganadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Eres una persona afortunada, \u00A1acabas de ganar un premio!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SORTEO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "COMBINACI\u00D3N: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InstantaneaComponent_p_20_Template, 4, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PREMIO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "VALOR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InstantaneaComponent_p_29_Template, 4, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "El valor del premio se acreditar\u00E1 autom\u00E1ticamente en tu cuenta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.premio.sorteo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.premio.combinacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipoLoteria == 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.premio.prizeDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatNumber(ctx.premio.prizeWithDiscount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.premio.fracciones && ctx.premio.fracciones.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".resultadoBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  text-align: left;\n  font-size: 16px;\n  color: white;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 20px;\n  margin: auto;\n  align-self: center;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  margin: 0;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n@media screen and (max-width: 1000px) {\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbnRhbmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFISjtBQUlJO0VBQ0Usa0NBYlc7RUFjWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRk47QUFHTTtFQUNFLCtCQXBCUTtFQXFCUixpQkFBQTtBQURSO0FBRVE7RUFDRSxXQUFBO0FBQVY7QUFHTTtFQUNFLGtDQXpCUztFQTBCVCxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGTjtBQUdNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQUVRO0VBQ0Usa0NBL0NPO0VBZ0RQLGVBQUE7RUFDQSxTQUFBO0FBQVY7QUFDVTtFQUNFLCtCQXJESTtFQXNESixpQkFBQTtBQUNaO0FBT0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUFOTjtFQU9NO0lBQ0UsbUJBQUE7RUFMUjtBQUNGIiwiZmlsZSI6Imluc3RhbnRhbmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuLnJlc3VsdGFkb0JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICAucmVzdWx0YWRvRGV0YWxsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRldGFpbEJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZGV0YWlsVGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5yZXN1bHRhZG9Cb3gge1xuICAgIC5yZXN1bHRhZG9EZXRhbGxlcyB7XG4gICAgICAuZGV0YWlsQm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAuZGV0YWlsVGV4dCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 1022:
/*!**************************************************************************!*\
  !*** ./src/app/ventas/components/instantaneas/instantaneas.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstantaneasComponent": () => (/* binding */ InstantaneasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _instantanea_instantanea_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instantanea/instantanea.component */ 2126);




function InstantaneasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-instantanea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const premio_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.loteriaBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("premio", premio_r1)("tipoLoteria", premio_r1.tipoLoteria);
} }
class InstantaneasComponent {
    constructor() {
        this.premios = [];
        this.isLoteriaNacional = false;
        this.isLotto = false;
        this.isPozoMillonario = false;
        this.isLaMillonaria = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        switch (parseInt(this.tipoLoteria)) {
            case 1:
                this.loteriaBackground = {
                    backgroundLoteriaNacional: true,
                };
                this.loteriaBackgroundButton = {
                    backgroundLoteriaNacionalButton: true,
                };
                break;
            case 2:
                this.loteriaBackground = {
                    backgroundLotto: true,
                };
                this.loteriaBackgroundButton = {
                    backgroundLottoButton: true,
                };
                break;
            case 14:
                this.loteriaBackground = {
                    backgroundMillonaria: true,
                };
                this.loteriaBackgroundButton = {
                    backgroundMillonariaButton: true,
                };
                break;
            default:
                this.loteriaBackground = {
                    backgroundPozoMillonario: true,
                };
                this.loteriaBackgroundButton = {
                    backgroundPozoMillonarioButton: true,
                };
                break;
        }
        this.resultados.forEach((resultado) => {
            let ticket = {
                tipoLoteria: parseInt(resultado.tipoLoteria),
                sorteo: resultado.numeroSorteo,
                drawDate: resultado.fechaCaducidad,
                combinacion: resultado.combinacion1,
                combinacion2: resultado.combinacion2,
                fracciones: resultado.fraccion,
                prize: resultado.valorPremio,
                prizeWithDiscount: resultado.valorPremioDescuento,
                prizeDescription: resultado.descripcionPremio,
            };
            this.premios.push(ticket);
        });
    }
    closeBox() {
        this.close.emit("");
    }
}
InstantaneasComponent.ɵfac = function InstantaneasComponent_Factory(t) { return new (t || InstantaneasComponent)(); };
InstantaneasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InstantaneasComponent, selectors: [["app-instantaneas"]], inputs: { resultados: "resultados", tipoLoteria: "tipoLoteria", isLoteriaNacional: "isLoteriaNacional", isLotto: "isLotto", isPozoMillonario: "isPozoMillonario", isLaMillonaria: "isLaMillonaria" }, outputs: { close: "close" }, decls: 6, vars: 2, consts: [[1, "blackBox", 3, "click"], [1, "resultsBox"], ["class", "resultBox", 4, "ngFor", "ngForOf"], [1, "buttonsBox"], [3, "ngClass", "click"], [1, "resultBox"], [1, "messageBox", 3, "ngClass"], [3, "premio", "tipoLoteria"]], template: function InstantaneasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstantaneasComponent_Template_div_click_0_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InstantaneasComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstantaneasComponent_Template_button_click_4_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ir a resumen de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.premios);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.loteriaBackgroundButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _instantanea_instantanea_component__WEBPACK_IMPORTED_MODULE_0__.InstantaneaComponent], styles: [".backgroundLoteriaNacional[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n}\n\n.backgroundLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundPozoMillonario[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n\n.backgroundMillonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundLoteriaNacionalButton[_ngcontent-%COMP%] {\n  border: 1px solid #28AAE1;\n  background-color: #28AAE1;\n}\n\n.backgroundLoteriaNacionalButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28AAE1 !important;\n  transition: background-color 0.5s ease;\n}\n\n.backgroundLottoButton[_ngcontent-%COMP%] {\n  border: 1px solid #b51f20;\n  background-color: #b51f20;\n}\n\n.backgroundLottoButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20 !important;\n  transition: background-color 0.5s ease;\n}\n\n.backgroundPozoMillonarioButton[_ngcontent-%COMP%] {\n  border: 1px solid #04b865;\n  background-color: #04b865;\n}\n\n.backgroundPozoMillonarioButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #04b865 !important;\n  transition: background-color 0.5s ease;\n}\n\n.backgroundMillonariaButton[_ngcontent-%COMP%] {\n  border: 1px solid #b51f20;\n  background-color: #b51f20;\n  color: white;\n}\n\n.backgroundMillonariaButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20 !important;\n  transition: background-color 0.5s ease;\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.resultsBox[_ngcontent-%COMP%] {\n  width: 40%;\n  max-height: 80%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: transparent;\n}\n\n.resultBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resultBox[_ngcontent-%COMP%]   .messageBox[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 1px;\n  border-radius: 23px;\n}\n\n.closeBox[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  border-radius: 500px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: red;\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\n.closeBox[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.buttonsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 300px;\n}\n\n.buttonsBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 15px;\n  border-radius: 40px;\n  margin: 5px;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n\n@media screen and (max-width: 1000px) {\n  .resultsBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbnRhbmVhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0FBREY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBREU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFHSjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFGRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUlKOztBQURBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUhFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBS0o7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUpFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBTUo7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFNRjs7QUFIQTtFQUNFLFdBQUE7QUFNRjs7QUFMRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBTEU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQTdIYTtFQThIYixXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQU9KOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJpbnN0YW50YW5lYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuLmJhY2tncm91bmRMb3RlcmlhTmFjaW9uYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBQUUxO1xufVxuLmJhY2tncm91bmRMb3R0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG59XG4uYmFja2dyb3VuZFBvem9NaWxsb25hcmlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0Yjg2NTtcbn1cbi5iYWNrZ3JvdW5kTWlsbG9uYXJpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XG59XG5cbi5iYWNrZ3JvdW5kTG90ZXJpYU5hY2lvbmFsQnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4QUFFMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4QUFFMTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzI4QUFFMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICB9XG59XG4uYmFja2dyb3VuZExvdHRvQnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1MWYyMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogI2I1MWYyMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICB9XG59XG4uYmFja2dyb3VuZFBvem9NaWxsb25hcmlvQnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0Yjg2NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0Yjg2NTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzA0Yjg2NSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICB9XG59XG4uYmFja2dyb3VuZE1pbGxvbmFyaWFCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjUxZjIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUxZjIwO1xuICBjb2xvcjogd2hpdGU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNiNTFmMjAgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbiAgfVxufVxuLmJsYWNrQm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA4MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlc3VsdHNCb3gge1xuICB3aWR0aDogNDAlO1xuICBtYXgtaGVpZ2h0OiA4MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMTVweDtcbiAgei1pbmRleDogMTAwMDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5yZXN1bHRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgLm1lc3NhZ2VCb3gge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgfVxufVxuXG4uY2xvc2VCb3gge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNsb3NlQm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b25zQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucmVzdWx0c0JveCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 7404:
/*!******************************************************************!*\
  !*** ./src/app/ventas/components/menu-box/menu-box.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuBoxComponent": () => (/* binding */ MenuBoxComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pagos.service */ 6862);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _boton_de_juego_boton_de_juego_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../boton-de-juego/boton-de-juego.component */ 7368);
/* harmony import */ var _floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../floating-menu/floating-menu.component */ 647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);
/* harmony import */ var _confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmacion-de-venta/confirmacion-de-venta.component */ 5543);
/* harmony import */ var _instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../instantaneas/instantaneas.component */ 1022);
/* harmony import */ var _venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../venta-finalizada/venta-finalizada.component */ 8332);
/* harmony import */ var _saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../saldo-insuficiente/saldo-insuficiente.component */ 5022);
/* harmony import */ var _venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../venta-cancelada/venta-cancelada.component */ 3983);

















function MenuBoxComponent_app_loader_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-loader", 13);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("message", ctx_r0.loadingMessage);
  }
}

function MenuBoxComponent_app_error_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeError", function MenuBoxComponent_app_error_7_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r7.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("msg", ctx_r1.errorMessage)("title", ctx_r1.errorTitle);
  }
}

function MenuBoxComponent_app_confirmacion_de_venta_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-confirmacion-de-venta", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("compraConfirmada", function MenuBoxComponent_app_confirmacion_de_venta_8_Template_app_confirmacion_de_venta_compraConfirmada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r9.confirmarCompra();
    })("compraCancelada", function MenuBoxComponent_app_confirmacion_de_venta_8_Template_app_confirmacion_de_venta_compraCancelada_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r11.cancelarCompra($event);
    })("comprarDespues", function MenuBoxComponent_app_confirmacion_de_venta_8_Template_app_confirmacion_de_venta_comprarDespues_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r12.dismissCompras();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("compra", ctx_r2.detalleCompra);
  }
}

function MenuBoxComponent_app_instantaneas_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-instantaneas", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("close", function MenuBoxComponent_app_instantaneas_9_Template_app_instantaneas_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r13.abrirFinalizar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("resultados", ctx_r3.instantaneas)("isLoteriaNacional", true);
  }
}

function MenuBoxComponent_app_venta_finalizada_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-venta-finalizada", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("volver", function MenuBoxComponent_app_venta_finalizada_10_Template_app_venta_finalizada_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r15.finalizarCompra();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("compra", ctx_r4.detalleCompra);
  }
}

function MenuBoxComponent_app_saldo_insuficiente_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-saldo-insuficiente", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("volver", function MenuBoxComponent_app_saldo_insuficiente_11_Template_app_saldo_insuficiente_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r17.dismissCompras();
    })("recarga", function MenuBoxComponent_app_saldo_insuficiente_11_Template_app_saldo_insuficiente_recarga_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r19.irARecarga();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("message", ctx_r5.recargaDeSaldoMessage);
  }
}

function MenuBoxComponent_app_venta_cancelada_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-venta-cancelada", 19);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("message", ctx_r6.cancelMessage);
  }
}

class MenuBoxComponent {
  constructor(actRoute, lottery, paymentService, cart, router) {
    this.actRoute = actRoute;
    this.lottery = lottery;
    this.paymentService = paymentService;
    this.cart = cart;
    this.router = router;
    this.linkLotto = "";
    this.linkLoteriaNacional = "";
    this.linkPozoMillonario = "";
    this.linkMillonaria = "";
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
    this.isInstantaneas = false;
    this.cancelMessage = "";
    this.isError = false;
    this.actRoute.params.subscribe(params => {
      this.token = params["token"];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.loadingMessage = "Espera mientras procesamos tu información";
        _this.isLoading = true;

        if (_this.token) {
          let data = yield _this.lottery.authUser(_this.token);
          _this.lotteryToken = data.lotteryToken;

          if (_this.lotteryToken) {
            _this.linkLoteriaNacional = `/compra_tus_juegos/loteria/${_this.token}`;
            _this.linkLotto = `/compra_tus_juegos/lotto/${_this.token}`;
            _this.linkPozoMillonario = `/compra_tus_juegos/pozo/${_this.token}`;
            _this.linkMillonaria = `/compra_tus_juegos/millonaria/${_this.token}`;
          }

          yield _this.getCarritoTickets(); //this.getTotal();
        }

        _this.isLoading = false;
      } catch (e) {
        _this.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this.openError(errorMessage, errorTitle);
      }
    })();
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.isInstantaneas = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  getTotal() {
    this.total = this.cart.getTotal();
  }

  comprar() {
    this.dismissCompras();
    let loteriaAux = this.ticketsLoteria;
    let loteria = [];

    for (let id in loteriaAux) {
      let aux = {};
      aux["combinacion1"] = loteriaAux[id].ticket.combinacion;
      aux["fracciones"] = loteriaAux[id].ticket.seleccionados;
      aux["subtotal"] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux["fecha"] = loteriaAux[id].sorteo.fecha;
      aux["sorteo"] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }

    let lottoAux = this.ticketsLotto;
    let lotto = [];

    for (let id in lottoAux) {
      let aux = {};
      aux["combinacion1"] = lottoAux[id].ticket.combinacion1;
      aux["combinacion2"] = lottoAux[id].ticket.combinacion2;
      aux["combinacion3"] = lottoAux[id].ticket.combinacion3;
      aux["combinacion4"] = lottoAux[id].ticket.combinacion4;
      aux["sorteo"] = lottoAux[id].sorteo.sorteo;
      aux["subtotal"] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux["fecha"] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }

    let pozoAux = this.ticketsPozo;
    let pozo = [];

    for (let id in pozoAux) {
      let aux = {};
      aux["combinacion1"] = pozoAux[id].ticket.combinacion1;
      aux["combinacion2"] = pozoAux[id].ticket.combinacion2;
      aux["mascota"] = pozoAux[id].ticket.mascota;
      aux["sorteo"] = pozoAux[id].sorteo.sorteo;
      aux["subtotal"] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux["fecha"] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }

    let millonariaAux = this.ticketsMillonaria;
    let millonaria = [];

    for (let id in millonariaAux) {
      let aux = {};
      aux["combinacion1"] = millonariaAux[id].ticket.combinacion1;
      aux["combinacion2"] = millonariaAux[id].ticket.combinacion2;
      aux["fracciones"] = millonariaAux[id].ticket.seleccionados;
      aux["subtotal"] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
      aux["subtotalConDesc"] = parseFloat(millonariaAux[id].subtotalConDesc).toFixed(2);
      aux["tieneDescuento"] = millonariaAux[id].tieneDescuento;
      aux["fecha"] = millonariaAux[id].sorteo.fecha;
      aux["sorteo"] = millonariaAux[id].sorteo.sorteo;
      millonaria.push(aux);
    }

    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);
    this.detalleCompra = {
      loteria,
      millonaria,
      lotto,
      pozo,
      amount,
      amountConDesc
    };
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  irARecarga() {}

  confirmarCompra() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.isLoading = true;
        _this2.loadingMessage = "Espera mientras procesamos tu compra";
        let hasBalance = yield _this2.paymentService.hasBalance(0, _this2.token);

        if (hasBalance) {
          let reservaId = _this2.cart.getReservaId();

          let cartValidation = yield _this2.cart.validarCarrito(reservaId);

          if (cartValidation) {
            let response = yield _this2.paymentService.confirmarCompra(_this2.token, reservaId);

            if (response.status) {
              if (response.instantanea.status) {
                _this2.dismissCompras();

                _this2.instantaneas = response.instantanea.data;
                _this2.isInstantaneas = true;
              } else {
                _this2.instantaneas = "";

                _this2.abrirFinalizar();
              }
            } else {
              _this2.cancelarCompra("");
            }
          }

          _this2.isLoading = false;
        } else {
          _this2.isLoading = false;
          let message = "Tu saldo es insuficiente para realizar la compra";

          _this2.recargarSaldo(message);
        }
      } catch (e) {
        _this2.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this2.openError(errorMessage, errorTitle);
      }
    })();
  }

  cancelarCompra(e) {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  abrirFinalizar() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.dismissCompras();

      yield _this3.cart.borrarCarrito();
      _this3.compraFinalizada = true;
    })();
  }

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  deleteMillonariaTicket(data) {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this4.loadingMessage = "Removiendo boleto del carrito";
        _this4.isLoading = true;
        let ticket = _this4.ticketsMillonaria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this4.lottery.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this4.lottery.eliminarBoletosDeReserva(_this4.token, ticket, sorteo, fracciones, 14, reservaId);
        }

        delete _this4.ticketsMillonaria[identificador];
        yield _this4.cart.removeFromCart(ticket, 1);
        yield _this4.cart.setCarritoMillonaria(_this4.ticketsMillonaria);
        yield _this4.getCarritoTickets(); //this.getTotal();
        //await this.setDescuento(14);

        _this4.isLoading = false;
      } catch (e) {
        _this4.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this4.openError(errorMessage, errorTitle);
      }
    })();
  }

  deleteLoteriaTicket(data) {
    var _this5 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this5.loadingMessage = "Removiendo boleto del carrito";
        _this5.isLoading = true;
        let ticket = _this5.ticketsLoteria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this5.lottery.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this5.lottery.eliminarBoletosDeReserva(_this5.token, ticket, sorteo, fracciones, 1, reservaId);
        }

        delete _this5.ticketsLoteria[identificador];
        yield _this5.cart.setCarritoLoteria(_this5.ticketsLoteria);
        yield _this5.getCarritoTickets();

        _this5.getTotal();

        _this5.isLoading = false;
      } catch (e) {
        _this5.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this5.openError(errorMessage, errorTitle);
      }
    })();
  }

  deleteLottoTicket(data) {
    var _this6 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fraccion = "";
        _this6.loadingMessage = "Removiendo boleto del carrito";
        _this6.isLoading = true;
        let ticket = _this6.ticketsLotto[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this6.lottery.getReservaId();

        let response = yield _this6.lottery.eliminarBoletosDeReserva(_this6.token, ticket, sorteo, fraccion, 2, reservaId);
        delete _this6.ticketsLotto[identificador];
        yield _this6.cart.setCarritoLotto(_this6.ticketsLotto);
        yield _this6.getCarritoTickets();

        _this6.getTotal();

        _this6.isLoading = false;
      } catch (e) {
        _this6.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this6.openError(errorMessage, errorTitle);
      }
    })();
  }

  deleteLoteriaFraccion(data) {
    var _this7 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this7.loadingMessage = "Removiendo boleto del carrito";
        _this7.isLoading = true;
        let identificador = data.ticket.ticket.identificador;
        let ticket = data.ticket.ticket;
        let sorteo = data.ticket.sorteo;
        let fraccion = data.fraccion;

        let reservaId = _this7.cart.getReservaId();

        let response = yield _this7.lottery.eliminarBoletosDeReserva(_this7.token, ticket, sorteo, [fraccion], 1, reservaId);

        let index = _this7.ticketsLoteria[identificador].ticket.seleccionados.findIndex(x => x == fraccion);

        _this7.ticketsLoteria[identificador].ticket.seleccionados.splice(index, 1);

        if (_this7.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
          delete _this7.ticketsLoteria[identificador];
        }

        yield _this7.cart.setCarritoLoteria(_this7.ticketsLoteria);
        yield _this7.getCarritoTickets();

        _this7.getTotal();

        _this7.isLoading = false;
      } catch (e) {
        _this7.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this7.openError(errorMessage, errorTitle);
      }
    })();
  }

  deletePozoTicket(data) {
    var _this8 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fraccion = "";
        _this8.loadingMessage = "Removiendo boleto del carrito";
        _this8.isLoading = true;
        let ticket = _this8.ticketsPozo[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this8.lottery.getReservaId();

        let response = yield _this8.lottery.eliminarBoletosDeReserva(_this8.token, ticket, sorteo, fraccion, 5, reservaId);
        delete _this8.ticketsPozo[identificador];
        yield _this8.cart.setCarritoPozo(_this8.ticketsPozo);
        yield _this8.getCarritoTickets();

        _this8.getTotal();

        _this8.isLoading = false;
      } catch (e) {
        _this8.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this8.openError(errorMessage, errorTitle);
      }
    })();
  }

  deleteAllTickets() {
    var _this9 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this9.loadingMessage = "Removiendo boletos del carrito";
        _this9.isLoading = true;
        let boletosLoteria = Object.keys(_this9.ticketsLoteria).map(key => {
          return {
            ticket: _this9.ticketsLoteria[key].ticket,
            sorteo: _this9.ticketsLoteria[key].sorteo
          };
        });
        let boletosLotto = Object.keys(_this9.ticketsLotto).map(key => {
          return {
            ticket: _this9.ticketsLotto[key].ticket,
            sorteo: _this9.ticketsLotto[key].sorteo
          };
        });
        let boletosPozo = Object.keys(_this9.ticketsPozo).map(key => {
          return {
            ticket: _this9.ticketsPozo[key].ticket,
            sorteo: _this9.ticketsPozo[key].sorteo
          };
        });

        let reservaId = _this9.lottery.getReservaId();
        /*       await this.lottery.eliminarTodosLosBoletosDeReserva(
                this.token,
                boletosLoteria,
                boletosLotto,
                boletosPozo,
                reservaId
              ); */


        yield _this9.cart.borrarCarrito();
        yield _this9.getCarritoTickets();

        _this9.getTotal();

        _this9.isLoading = false;
      } catch (e) {
        _this9.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;
        let errorTitle = "Error";

        _this9.openError(errorMessage, errorTitle);
      }
    })();
  }

  getCarritoTickets() {
    var _this10 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this10.cart.buscarCarrito();
      _this10.ticketsLoteria = carrito.loteria;
      _this10.ticketsLotto = carrito.lotto;
      _this10.ticketsPozo = carrito.pozo;
    })();
  }

  authError() {
    this.openError("Por favor, para poder comprar tu boleto preferido, deberás iniciar sesión en tu cuenta", "Aviso");
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

MenuBoxComponent.ɵfac = function MenuBoxComponent_Factory(t) {
  return new (t || MenuBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_2__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
};

MenuBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: MenuBoxComponent,
  selectors: [["app-menu-box"]],
  decls: 13,
  vars: 19,
  consts: [[1, "selectionBox"], ["image", "assets/img/loteria-sombra-2.png", "name", "loteria", 3, "link", "token", "authError"], ["image", "assets/img/lotto-sombra.png", "name", "lotto", 3, "link", "token", "authError"], ["image", "assets/img/pozo-sombra.png", "name", "pozo", 3, "link", "token", "authError"], ["image", "assets/img/millonaria-sombra.png", "name", "millonaria", 3, "link", "token", "authError"], ["tipoLoteria", "loteria", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion", "emitirCompra", "eliminarTodo"], ["loader", "loteria", 3, "message", 4, "ngIf"], [3, "msg", "title", "closeError", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues", 4, "ngIf"], ["tipoloteria", "14", "class", "paymentItem", 3, "resultados", "isLoteriaNacional", "close", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "volver", 4, "ngIf"], ["class", "paymentItem", 3, "message", "volver", "recarga", 4, "ngIf"], ["class", "paymentItem", 3, "message", 4, "ngIf"], ["loader", "loteria", 3, "message"], [3, "msg", "title", "closeError"], [1, "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues"], ["tipoloteria", "14", 1, "paymentItem", 3, "resultados", "isLoteriaNacional", "close"], [1, "paymentItem", 3, "compra", "volver"], [1, "paymentItem", 3, "message", "volver", "recarga"], [1, "paymentItem", 3, "message"]],
  template: function MenuBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-boton-de-juego", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("authError", function MenuBoxComponent_Template_app_boton_de_juego_authError_1_listener() {
        return ctx.authError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "app-boton-de-juego", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("authError", function MenuBoxComponent_Template_app_boton_de_juego_authError_2_listener() {
        return ctx.authError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "app-boton-de-juego", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("authError", function MenuBoxComponent_Template_app_boton_de_juego_authError_3_listener() {
        return ctx.authError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "app-boton-de-juego", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("authError", function MenuBoxComponent_Template_app_boton_de_juego_authError_4_listener() {
        return ctx.authError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "app-floating-menu", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("deleteLoteriaTicket", function MenuBoxComponent_Template_app_floating_menu_deleteLoteriaTicket_5_listener($event) {
        return ctx.deleteLoteriaTicket($event);
      })("deleteLottoTicket", function MenuBoxComponent_Template_app_floating_menu_deleteLottoTicket_5_listener($event) {
        return ctx.deleteLottoTicket($event);
      })("deletePozoTicket", function MenuBoxComponent_Template_app_floating_menu_deletePozoTicket_5_listener($event) {
        return ctx.deletePozoTicket($event);
      })("deleteMillonariaTicket", function MenuBoxComponent_Template_app_floating_menu_deleteMillonariaTicket_5_listener($event) {
        return ctx.deleteMillonariaTicket($event);
      })("deleteLoteriaFraccion", function MenuBoxComponent_Template_app_floating_menu_deleteLoteriaFraccion_5_listener($event) {
        return ctx.deleteLoteriaFraccion($event);
      })("emitirCompra", function MenuBoxComponent_Template_app_floating_menu_emitirCompra_5_listener() {
        return ctx.comprar();
      })("eliminarTodo", function MenuBoxComponent_Template_app_floating_menu_eliminarTodo_5_listener() {
        return ctx.deleteAllTickets();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, MenuBoxComponent_app_loader_6_Template, 1, 1, "app-loader", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MenuBoxComponent_app_error_7_Template, 1, 2, "app-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, MenuBoxComponent_app_confirmacion_de_venta_8_Template, 1, 1, "app-confirmacion-de-venta", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, MenuBoxComponent_app_instantaneas_9_Template, 1, 2, "app-instantaneas", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, MenuBoxComponent_app_venta_finalizada_10_Template, 1, 1, "app-venta-finalizada", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, MenuBoxComponent_app_saldo_insuficiente_11_Template, 1, 1, "app-saldo-insuficiente", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, MenuBoxComponent_app_venta_cancelada_12_Template, 1, 1, "app-venta-cancelada", 12);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", ctx.linkLoteriaNacional)("token", ctx.lotteryToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", ctx.linkLotto)("token", ctx.lotteryToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", ctx.linkPozoMillonario)("token", ctx.lotteryToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", ctx.linkMillonaria)("token", ctx.lotteryToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ticketsLoteria", ctx.ticketsLoteria)("ticketsLotto", ctx.ticketsLotto)("ticketsPozo", ctx.ticketsPozo)("ticketsMillonaria", ctx.ticketsMillonaria);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.confirmacionDeCompra);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isInstantaneas);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.compraFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.saldoInsuficiente);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.compraCancelada);
    }
  },
  directives: [_boton_de_juego_boton_de_juego_component__WEBPACK_IMPORTED_MODULE_4__.BotonDeJuegoComponent, _floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_5__.FloatingMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_7__.ErrorComponent, _confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmacionDeVentaComponent, _instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_9__.InstantaneasComponent, _venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_10__.VentaFinalizadaComponent, _saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_11__.SaldoInsuficienteComponent, _venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_12__.VentaCanceladaComponent],
  styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px;\n}\n\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0U7RUFDRTtJQUNFLGFBQUE7RUFFSjtBQUNGIiwiZmlsZSI6Im1lbnUtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGlvbkJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLnNlbGVjdGlvbkJveHtcbiAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgfVxuICB9Il19 */"]
});

/***/ }),

/***/ 4481:
/*!************************************************************************!*\
  !*** ./src/app/ventas/components/menu-header/menu-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuHeaderComponent": () => (/* binding */ MenuHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);




function MenuHeaderComponent_app_error_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeError", function MenuHeaderComponent_app_error_25_Template_app_error_closeError_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.closeError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("msg", ctx_r0.errorMessage)("title", ctx_r0.errorTitle);
} }
class MenuHeaderComponent {
    constructor(actRoute) {
        this.actRoute = actRoute;
        this.home = false;
        this.homeClass = {
            home: this.home,
        };
        this.isError = false;
        this.actRoute.params.subscribe((params) => {
            this.token = params['token'];
        });
    }
    ngOnInit() {
        this.homeClass = {
            home: this.home,
        };
        this.linkLoteriaNacional = `/compra_tus_juegos/loteria/${this.token}`;
        this.linkLotto = `/compra_tus_juegos/lotto/${this.token}`;
        this.linkPozoMillonario = `/compra_tus_juegos/pozo/${this.token}`;
        this.linkLaMillonaria = `/compra_tus_juegos/millonaria/${this.token}`;
        this.linkJuegosOnline = `/inicio`;
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
MenuHeaderComponent.ɵfac = function MenuHeaderComponent_Factory(t) { return new (t || MenuHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
MenuHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuHeaderComponent, selectors: [["ventas-menu-header"]], inputs: { home: "home" }, decls: 26, vars: 11, consts: [[1, "container", 3, "ngClass"], ["routerLinkActive", "title loteria", 2, "display", "none", 3, "routerLink", "click"], ["routerLinkActive", "title lotto", 2, "display", "none", 3, "routerLink", "click"], ["routerLinkActive", "title pozo", 2, "display", "none", 3, "routerLink", "click"], ["routerLinkActive", "title millonaria", 2, "display", "none", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "contenedor_loteria", "loteria", 3, "routerLink"], ["src", "assets/img/loteria-sombra-2.png"], ["routerLinkActive", "active", 1, "contenedor_loteria", "lotto", 3, "routerLink", "click"], ["src", "assets/img/lotto-sombra.png", "alt", ""], ["routerLinkActive", "active", 1, "contenedor_loteria", "pozo", 3, "routerLink", "click"], ["src", "assets/img/pozo-sombra.png", "alt", ""], ["routerLinkActive", "active", 1, "contenedor_loteria", "millonaria", 3, "routerLink", "click"], ["src", "assets/img/millonaria-sombra.png", "alt", ""], ["routerLinkActive", "active", 1, "contenedor_loteria", "juegosOnline", 3, "routerLink"], ["src", "assets/img/juegos-online.png", "alt", ""], [3, "msg", "title", "closeError", 4, "ngIf"], [3, "msg", "title", "closeError"]], template: function MenuHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_1_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " LOTERIA NACIONAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_3_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " LOTTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_5_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " POZO MILLONARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_7_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " LA MILLONARIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " (click)=\"checkToken($event)\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_13_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_16_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_19_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MenuHeaderComponent_app_error_25_Template, 1, 2, "app-error", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.homeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkLoteriaNacional);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkLotto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkPozoMillonario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkLaMillonaria);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkLoteriaNacional);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkLotto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkPozoMillonario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkLaMillonaria);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkJuegosOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  border-bottom: 1px solid #28aae1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 20%;\n  height: 50px;\n  margin: 20px 20px 20px 0;\n  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);\n  border-radius: 45.5px;\n  font-family: \"Helvetica\";\n  font-style: italic;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: none;\n  color: #ffffff;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria.millonaria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria.millonaria[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria.juegosOnline[_ngcontent-%COMP%] {\n  display: none;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin: 0;\n  transition: width 0.3s ease;\n  background-color: transparent;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 80px;\n  transition: width 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 30px;\n  position: relative;\n  bottom: 0px;\n  text-decoration: none;\n  text-align: center;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 10px;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%] {\n  width: 19%;\n  height: 92px;\n  font-size: 25px;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 34%;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria.juegosOnline[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block !important;\n  font-family: \"Helvetica\";\n  font-style: italic;\n  width: 25%;\n  font-weight: 700;\n  font-size: 25px;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: none !important;\n  margin-right: 20px;\n}\n.container[_ngcontent-%COMP%]   .title.loteria[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #28aae1;\n}\n.container[_ngcontent-%COMP%]   .title.lotto[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b51f20;\n}\n.container[_ngcontent-%COMP%]   .title.pozo[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #04b865;\n}\n.container[_ngcontent-%COMP%]   .title.millonaria[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b51f20;\n}\n.loteria[_ngcontent-%COMP%] {\n  color: #28aae1;\n  background-color: #28aae1;\n}\n.lotto[_ngcontent-%COMP%] {\n  color: #b51f20;\n  background-color: #b51f20;\n}\n.pozo[_ngcontent-%COMP%] {\n  color: #04b865;\n  background-color: #04b865;\n}\n.millonaria[_ngcontent-%COMP%] {\n  color: #b51f20;\n  background-color: #b51f20;\n}\n.juegosOnline[_ngcontent-%COMP%] {\n  color: #15295b;\n  background-color: #15295b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGNBQUE7QUFiSjtBQWVJO0VBQ0UsWUFBQTtBQWJOO0FBZUk7RUFDRSxZQUFBO0FBYk47QUFnQkk7RUFDRSxhQUFBO0FBZE47QUFpQkk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFmTjtBQWtCSTtFQUNFLFdBQUE7RUFFQSwyQkFBQTtBQWpCTjtBQW1CSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQTdEVztFQThEWCxlQUFBO0FBakJOO0FBc0JJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcEJOO0FBc0JNO0VBQ0UsVUFBQTtBQXBCUjtBQXVCTTtFQUNFLFVBQUE7QUFyQlI7QUF1Qk07RUFDRSxhQUFBO0FBckJSO0FBMEJFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBeEJKO0FBMEJFO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBeEJKO0FBeUJJO0VBQ0UsZ0NBQUE7QUF2Qk47QUEwQkk7RUFDRSxnQ0FBQTtBQXhCTjtBQTJCSTtFQUNFLGdDQUFBO0FBekJOO0FBNEJJO0VBQ0UsZ0NBQUE7QUExQk47QUErQkE7RUFDRSxjQWhJYztFQWlJZCx5QkFqSWM7QUFxR2hCO0FBK0JBO0VBQ0UsY0FwSVk7RUFxSVoseUJBcklZO0FBeUdkO0FBK0JBO0VBQ0UsY0F4SVc7RUF5SVgseUJBeklXO0FBNkdiO0FBK0JBO0VBQ0UsY0E1SWlCO0VBNklqQix5QkE3SWlCO0FBaUhuQjtBQStCQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQTVCRiIsImZpbGUiOiJtZW51LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1sb3RlcmlhOiAjMjhhYWUxO1xuJGNvbG9yLWxvdHRvOiAjYjUxZjIwO1xuJGNvbG9yLXBvem86ICMwNGI4NjU7XG4kY29sb3ItbWlsbG9uYXJpYTogI2I1MWYyMDtcbi8vJGNvbG9yLXBvem86ICMwNTczMzM7XG5cbiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbG90ZXJpYTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmNvbnRlbmVkb3JfbG90ZXJpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAwO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQ1LjVweDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgJi5taWxsb25hcmlhIGltZyB7XG4gICAgICB3aWR0aDogMTEwcHg7XG4gICAgfVxuICAgICYubWlsbG9uYXJpYTpob3ZlciBpbWcge1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgICYuanVlZ29zT25saW5lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciBpbWcge1xuICAgICAgd2lkdGg6IDgwcHg7XG5cbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICB9XG4gICAgLmJvdG9uIHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICYuaG9tZSB7XG4gICAgLmNvbnRlbmVkb3JfbG90ZXJpYSB7XG4gICAgICB3aWR0aDogMTklO1xuICAgICAgaGVpZ2h0OiA5MnB4O1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICB9XG4gICAgICAmLmp1ZWdvc09ubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gIFxuICAgIH1cbiAgfVxuICAuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB3aWR0aDogMjUlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgJi5sb3RlcmlhIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItbG90ZXJpYTtcbiAgICB9XG5cbiAgICAmLmxvdHRvIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgfVxuXG4gICAgJi5wb3pvIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItcG96bztcbiAgICB9XG5cbiAgICAmLm1pbGxvbmFyaWEge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvci1taWxsb25hcmlhO1xuICAgIH1cbiAgfVxufVxuXG4ubG90ZXJpYSB7XG4gIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XG59XG5cbi5sb3R0byB7XG4gIGNvbG9yOiAkY29sb3ItbG90dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbn1cblxuLnBvem8ge1xuICBjb2xvcjogJGNvbG9yLXBvem87XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xufVxuXG4ubWlsbG9uYXJpYSB7XG4gIGNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG59XG5cbi5qdWVnb3NPbmxpbmUge1xuICBjb2xvcjogIzE1Mjk1YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1Mjk1Yjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5022:
/*!**************************************************************************************!*\
  !*** ./src/app/ventas/components/saldo-insuficiente/saldo-insuficiente.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoInsuficienteComponent": () => (/* binding */ SaldoInsuficienteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class SaldoInsuficienteComponent {
    constructor() {
        this.volver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.recarga = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    cerrar() {
        this.volver.emit();
    }
    recargar() {
        this.recarga.emit();
    }
}
SaldoInsuficienteComponent.ɵfac = function SaldoInsuficienteComponent_Factory(t) { return new (t || SaldoInsuficienteComponent)(); };
SaldoInsuficienteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaldoInsuficienteComponent, selectors: [["app-saldo-insuficiente"]], inputs: { message: "message" }, outputs: { volver: "volver", recarga: "recarga" }, decls: 12, vars: 1, consts: [[1, "blackBox", 3, "click"], [1, "logBox"], [1, "closeButton"], [1, "closeB", 3, "click"], [1, "errorHeader"], [1, "errorContent"], ["type", "button", 1, "formButton", 3, "click"]], template: function SaldoInsuficienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaldoInsuficienteComponent_Template_div_click_0_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaldoInsuficienteComponent_Template_button_click_3_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AVISO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaldoInsuficienteComponent_Template_button_click_9_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "VOLVER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".logBox[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 3px;\n  max-height: 80%;\n  z-index: 100000;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  overflow: hidden;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.formButton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 52px;\n  color: white;\n  background-color: red;\n  margin: auto;\n  margin-top: 5px;\n  margin-bottom: 23px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: red;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.formButton[_ngcontent-%COMP%]:hover {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]:active {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-size: 23px;\n  font-weight: bold;\n  width: 100%;\n  text-decoration: none !important;\n}\n\n.formButton[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.closeButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 23px;\n  height: 23px;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  color: white;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: red;\n}\n\n.errorHeader[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 23px;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n  margin: 0;\n  text-align: center;\n}\n\n.errorContent[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n  padding-top: 42px;\n  padding-bottom: 42px;\n  margin: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGRvLWluc3VmaWNpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNhbGRvLWluc3VmaWNpZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dCb3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgei1pbmRleDogMTAwMDAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ibGFja0JveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogODAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtQnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybUJ1dHRvbiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm1CdXR0b246aG92ZXIgcCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idXR0b25Cb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLmNsb3NlQnV0dG9uIC5jbG9zZUIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xvc2VCdXR0b24gLmNsb3NlQjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmVkO1xufVxuXG4uZXJyb3JIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvckNvbnRlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy10b3A6IDQycHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MnB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3983:
/*!********************************************************************************!*\
  !*** ./src/app/ventas/components/venta-cancelada/venta-cancelada.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaCanceladaComponent": () => (/* binding */ VentaCanceladaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class VentaCanceladaComponent {
    constructor() {
        this.closeBox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    close() {
        this.closeBox.emit('Cerrando error');
    }
}
VentaCanceladaComponent.ɵfac = function VentaCanceladaComponent_Factory(t) { return new (t || VentaCanceladaComponent)(); };
VentaCanceladaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaCanceladaComponent, selectors: [["app-venta-cancelada"]], inputs: { message: "message" }, outputs: { closeBox: "closeBox" }, decls: 6, vars: 1, consts: [[1, "blackBox", 3, "click"], [1, "paymentBox"], [3, "click"]], template: function VentaCanceladaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VentaCanceladaComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VentaCanceladaComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Volver a la loter\u00ECa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.paymentBox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 70%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhLWNhbmNlbGFkYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ2ZW50YS1jYW5jZWxhZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2tCb3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDgwMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucGF5bWVudEJveCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDAwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8332:
/*!**********************************************************************************!*\
  !*** ./src/app/ventas/components/venta-finalizada/venta-finalizada.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaFinalizadaComponent": () => (/* binding */ VentaFinalizadaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../descripcion-de-venta/descripcion-de-venta.component */ 7179);




class VentaFinalizadaComponent {
    constructor(ventas) {
        this.ventas = ventas;
        this.volver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.user = this.ventas.getAuthData().user;
    }
    seguirJugando() {
        this.volver.emit();
    }
}
VentaFinalizadaComponent.ɵfac = function VentaFinalizadaComponent_Factory(t) { return new (t || VentaFinalizadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_0__.VentasService)); };
VentaFinalizadaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VentaFinalizadaComponent, selectors: [["app-venta-finalizada"]], inputs: { compra: "compra" }, outputs: { volver: "volver" }, decls: 13, vars: 2, consts: [[1, "blackBox", 3, "click"], [1, "paymentBox"], [1, "closeButton"], [1, "closeB", 3, "click"], [1, "mensajeBox"], [3, "compra", "user"], [1, "mensajeButtonBox", 3, "click"]], template: function VentaFinalizadaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentaFinalizadaComponent_Template_div_click_0_listener() { return ctx.seguirJugando(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentaFinalizadaComponent_Template_button_click_3_listener() { return ctx.seguirJugando(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00A1FELICIDADES!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Tu compra se realizo con exito. Te deseamos mucha suerte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-descripcion-de-venta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentaFinalizadaComponent_Template_button_click_11_listener() { return ctx.seguirJugando(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u00A1SIGUE JUGANDO! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("compra", ctx.compra)("user", ctx.user);
    } }, directives: [_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_1__.DescripcionDeVentaComponent], styles: [".closeButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 23px;\n  height: 23px;\n}\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  color: red;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0;\n}\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n.paymentBox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 70%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  overflow-y: scroll;\n}\n.paymentBox[_ngcontent-%COMP%]   .mensajeButtonBox[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px;\n  border-radius: 30px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n  color: #fff;\n  background-color: green;\n  border: 1px solid green;\n}\n.paymentBox[_ngcontent-%COMP%]   .mensajeButtonBox[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: green;\n  transition: background-color 0.4s ease;\n}\n@media screen and (max-width: 1000px) {\n  .paymentBox[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhLWZpbmFsaXphZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMRjtBQU1FO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFKSjtBQUtJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBSE47QUFPQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFKRjtBQU9BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUpGO0FBS0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBeERhO0VBeURiLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUhOO0FBT0E7RUFDRTtJQUNFLFVBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InZlbnRhLWZpbmFsaXphZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xuXG4kY29sb3ItbG90ZXJpYTogIzdjOTFhODtcbi5jbG9zZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgLmNsb3NlQiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDIwMDA7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuLmJsYWNrQm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA4MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBheW1lbnRCb3gge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC5tZW5zYWplQnV0dG9uQm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnBheW1lbnRCb3gge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4802:
/*!**********************************************************************************!*\
  !*** ./src/app/ventas/containers/detalle-de-venta/detalle-de-venta.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleDeVentaComponent": () => (/* binding */ DetalleDeVentaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pagos.service */ 6862);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/descripcion-de-venta/descripcion-de-venta.component */ 7179);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);










function DetalleDeVentaComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-descripcion-de-venta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("compra", ctx_r0.compra)("user", ctx_r0.user)("ticketId", ctx_r0.ticketId);
  }
}

function DetalleDeVentaComponent_app_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 4);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

function DetalleDeVentaComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("closeError", function DetalleDeVentaComponent_app_error_2_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r3.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("msg", ctx_r2.errorMessage);
  }
}

class DetalleDeVentaComponent {
  constructor(actRoute, pagos, ventas) {
    this.actRoute = actRoute;
    this.pagos = pagos;
    this.ventas = ventas;
    this.compraReady = false;
    this.isError = false;
    this.actRoute.params.subscribe(params => {
      let aux = params['id'];
      this.accountId = aux.split('-')[0];
      this.ticketId = aux.split('-')[1];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.loadingMessage = 'Consultando el detalle de tu compra';
        _this.isLoading = true;
        _this.compra = yield _this.pagos.getCompra(_this.ticketId, _this.accountId);
        _this.user = _this.compra.user ? _this.compra.user : _this.ventas.getAuthData().user;
        _this.ganador = yield _this.pagos.getGanador(_this.ticketId);

        if (_this.ganador.status) {
          let resultadosGanadores = _this.ganador.values;

          _this.compra.loteria.forEach(element => {
            element['detalleGanador'] = [];
          });

          _this.compra.lotto.forEach(element => {
            element['detalleGanador'] = [];
          });

          _this.compra.pozo.forEach(element => {
            element['detalleGanador'] = [];
          });

          _this.compra.millonaria.forEach(element => {
            element['detalleGanador'] = [];
          });

          for (let i = 0; i < resultadosGanadores.length; i++) {
            const ganador = resultadosGanadores[i];
            let ganadorIndex;

            switch (ganador.tipoLoteria) {
              case 1:
                ganadorIndex = _this.compra.loteria.findIndex(x => x.combinacion1 == ganador.combinacion1 && x.sorteo == ganador.numeroSorteo);

                if (ganadorIndex != -1) {
                  _this.compra.loteria[ganadorIndex]['hasGanador'] = true;

                  _this.compra.loteria[ganadorIndex]['detalleGanador'].push(ganador);
                }

                break;

              case 2:
                ganadorIndex = _this.compra.lotto.findIndex(x => x.combinacion1 == ganador.combinacion1 && x.sorteo == ganador.numeroSorteo);

                if (ganadorIndex != -1) {
                  _this.compra.lotto[ganadorIndex]['hasGanador'] = true;

                  _this.compra.lotto[ganadorIndex]['detalleGanador'].push(ganador);
                }

                break;

              case 5:
                ganadorIndex = _this.compra.pozo.findIndex(x => x.combinacion1 == ganador.combinacion1 && x.sorteo == ganador.numeroSorteo);

                if (ganadorIndex != -1) {
                  _this.compra.pozo[ganadorIndex]['hasGanador'] = true;

                  _this.compra.pozo[ganadorIndex]['detalleGanador'].push(ganador);
                }

                break;

              case 14:
                ganadorIndex = _this.compra.millonaria.findIndex(x => x.combinacion1 == ganador.combinacion1 && x.sorteo == ganador.numeroSorteo);

                if (ganadorIndex != -1) {
                  _this.compra.millonaria[ganadorIndex]['hasGanador'] = true;

                  _this.compra.millonaria[ganadorIndex]['detalleGanador'].push(ganador);
                }

                break;
            }
          }
        }

        _this.compraReady = true;
        _this.isLoading = false;
      } catch (e) {
        console.log(e.message);
        _this.isLoading = false;

        _this.openError(e.message);
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

DetalleDeVentaComponent.ɵfac = function DetalleDeVentaComponent_Factory(t) {
  return new (t || DetalleDeVentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_1__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_2__.VentasService));
};

DetalleDeVentaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DetalleDeVentaComponent,
  selectors: [["app-detalle-de-venta"]],
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["loader", "loteria", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], [3, "compra", "user", "ticketId"], ["loader", "loteria", 3, "message"], [3, "msg", "closeError"]],
  template: function DetalleDeVentaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, DetalleDeVentaComponent_ng_container_0_Template, 2, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DetalleDeVentaComponent_app_loader_1_Template, 1, 1, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DetalleDeVentaComponent_app_error_2_Template, 1, 1, "app-error", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.compraReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isError);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_3__.DescripcionDeVentaComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent],
  styles: [".titleBox[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n  font-weight: 600;\n}\n.titleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 14px;\n}\n.titleBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBo[_ngcontent-%COMP%]   x[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBo[_ngcontent-%COMP%]   x[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  color: #000;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .fondoBox[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: #7c91a8;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 20px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 1fr;\n  grid-column-gap: 3rem;\n  column-gap: 3rem;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  font-family: \"Monstserrat Regular\";\n  font-size: 15px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 600;\n}\n.totalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 70px;\n  display: flex;\n  justify-content: flex-end;\n}\n.totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  color: #000;\n}\n.totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n}\n.mensajeButtonBox[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 20px;\n  padding: 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #c3c3c3;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover {\n  background-color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 23px;\n  color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtZGUtdmVudGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFFO0VBQ0Usa0NBZGE7RUFlYixlQUFBO0FBTko7QUFTRTtFQUNFLGtDQW5CYTtBQVlqQjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBVEo7QUFXSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQWhDYTtFQWlDYixlQUFBO0FBVE47QUFhRTtFQUNFLDhCQUFBO0VBQ0EseUJBbkNZO0VBb0NaLGtCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsV0FBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFaTjtBQWNNO0VBQ0UsaUJBQUE7QUFaUjtBQWlCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFmSjtBQWlCSTtFQUNFLGlCQUFBO0FBZk47QUFpQk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFmUjtBQW1CSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQXpFVztFQTBFWCxlQUFBO0FBakJOO0FBbUJNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBakJSO0FBb0JNO0VBQ0Usa0JBQUE7QUFsQlI7QUFxQk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBbkJSO0FBeUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQXZCRjtBQXlCRTtFQUNFLGtDQXRHYTtFQXVHYixXQUFBO0FBdkJKO0FBeUJJO0VBQ0UsVUFBQTtBQXZCTjtBQTRCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtBQTNCRjtBQTZCRTtFQUNFLHVCQUFBO0FBM0JKO0FBOEJFO0VBQ0UsbUNBL0hhO0VBZ0liLGVBQUE7RUFDQSxZQUFBO0FBNUJKO0FBK0JFO0VBQ0UsWUFBQTtBQTdCSiIsImZpbGUiOiJkZXRhbGxlLWRlLXZlbnRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcblxuJGNvbG9yLWxvdGVyaWE6ICM3YzkxYTg7XG5cbi50aXRsZUJveCB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICBhIHtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICB9XG59XG5cbi5jb250YWluZXJJbmZvQm94IHtcbiAgLnRpdGxlTG90ZXJ5Qm8geCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICAuZm9uZG9Cb3gge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90ZXJpYTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5kYXRlQ2xpZW50Qm94IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5pbmZvQ2xpZW50Qm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGVMb3RlcnlCb3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyO1xuICAgIGNvbHVtbi1nYXA6IDNyZW07XG5cbiAgICAuaW5mb1NvcnRlb0JveCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mb1RpY2tldEJveCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAgIC5kYXRlVGlja2V0Qm94IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAubnVtYmVyQm94IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubW9udG9Cb3gge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRvdGFsQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG59XG5cbi5tZW5zYWplQnV0dG9uQm94IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIHBhZGRpbmc6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuXG4gICY6aG92ZXIgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 1546:
/*!**********************************************************!*\
  !*** ./src/app/ventas/containers/home/home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu-box/menu-box.component */ 7404);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu-box");
    } }, directives: [_components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_0__.MenuBoxComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9020:
/*!****************************************************************!*\
  !*** ./src/app/ventas/containers/loteria/loteria.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoteriaComponent": () => (/* binding */ LoteriaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/pagos.service */ 6862);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _juegos_loteria_services_venta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/loteria/services/venta.service */ 5937);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/floating-menu/floating-menu.component */ 647);
/* harmony import */ var _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/detalle-sorteo/detalle-sorteo.component */ 9927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/autotab.directive */ 3444);
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/carrito/carrito.component */ 1616);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/style-paginator.directive */ 6560);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);
/* harmony import */ var _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/confirmacion-de-venta/confirmacion-de-venta.component */ 5543);
/* harmony import */ var _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/instantaneas/instantaneas.component */ 1022);
/* harmony import */ var _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/venta-finalizada/venta-finalizada.component */ 8332);
/* harmony import */ var _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/saldo-insuficiente/saldo-insuficiente.component */ 5022);
/* harmony import */ var _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/venta-cancelada/venta-cancelada.component */ 3983);
/* harmony import */ var _shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/paginate.pipe */ 2343);

























function LoteriaComponent_div_1_div_35_tr_3_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const numero_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", numero_r20, " ");
  }
}

function LoteriaComponent_div_1_div_35_tr_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function LoteriaComponent_div_1_div_35_tr_3_div_13_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const item_r21 = restoredCtx.$implicit;
      const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r23.fraccionSeleccionada(ctx_r23.page_size * (ctx_r23.page_number - 1) + i_r17, item_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const ticket_r16 = ctx_r26.$implicit;
    const i_r17 = ctx_r26.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "", ticket_r16.identificador, "-", item_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", ctx_r19.isSelected(ctx_r19.page_size * (ctx_r19.page_number - 1) + i_r17, item_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("for", "", ticket_r16.identificador, "-", item_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r21);
  }
}

function LoteriaComponent_div_1_div_35_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, LoteriaComponent_div_1_div_35_tr_3_p_5_Template, 2, 1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Seleccionar todas las fracciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function LoteriaComponent_div_1_div_35_tr_3_Template_input_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const i_r17 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r27.seleccionarTodo(ctx_r27.page_size * (ctx_r27.page_number - 1) + i_r17);
    })("ngModelChange", function LoteriaComponent_div_1_div_35_tr_3_Template_input_ngModelChange_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const i_r17 = restoredCtx.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r29.allFractions[ctx_r29.page_size * (ctx_r29.page_number - 1) + i_r17] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, LoteriaComponent_div_1_div_35_tr_3_div_13_Template, 4, 6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ticket_r16.combinacion.split(""));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r15.allFractions[ctx_r15.page_size * (ctx_r15.page_number - 1) + i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ticket_r16.fraccionesDisponibles);
  }
}

function LoteriaComponent_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, LoteriaComponent_div_1_div_35_tr_3_Template, 15, 3, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "paginacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "hr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "mat-paginator", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("page", function LoteriaComponent_div_1_div_35_Template_mat_paginator_page_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r30.handlerPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](4, 3, ctx_r14.ticketsDisponibles, ctx_r14.page_size, ctx_r14.page_number));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("length", ctx_r14.ticketsDisponibles.length)("pageSize", ctx_r14.page_size);
  }
}

function LoteriaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-detalle-sorteo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitir", function LoteriaComponent_div_1_Template_app_detalle_sorteo_emitir_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r32.procesaEmitir($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "\u00BFC\u00F3mo quieres comprar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LoteriaComponent_div_1_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r34.tipoSeleccion = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "Selecci\u00F3n individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "5 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "30 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "50 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "Ingresa tu n\u00FAmero de la suerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LoteriaComponent_div_1_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r35.combinacionDeLaSuerte[0] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LoteriaComponent_div_1_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r36.combinacionDeLaSuerte[1] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LoteriaComponent_div_1_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r37.combinacionDeLaSuerte[2] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LoteriaComponent_div_1_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r38.combinacionDeLaSuerte[3] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LoteriaComponent_div_1_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r39.combinacionDeLaSuerte[4] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function LoteriaComponent_div_1_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r40.buscarNumero();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](32, "BUSCAR NUMERO");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34, " Si quieres cambiar tu n\u00FAmero, ingr\u00E9salo nuevamente y haz click en \"Buscar n\u00FAmero\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, LoteriaComponent_div_1_div_35_Template, 8, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "app-carrito", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitirCompra", function LoteriaComponent_div_1_Template_app_carrito_emitirCompra_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r41.comprar();
    })("eliminarTodo", function LoteriaComponent_div_1_Template_app_carrito_eliminarTodo_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r42.deleteAllTickets();
    })("deleteLoteriaTicket", function LoteriaComponent_div_1_Template_app_carrito_deleteLoteriaTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r43.deleteLoteriaTicket($event);
    })("deleteLottoTicket", function LoteriaComponent_div_1_Template_app_carrito_deleteLottoTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r44.deleteLottoTicket($event);
    })("deleteMillonariaTicket", function LoteriaComponent_div_1_Template_app_carrito_deleteMillonariaTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r45.deleteMillonariaTicket($event);
    })("deletePozoTicket", function LoteriaComponent_div_1_Template_app_carrito_deletePozoTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r46.deletePozoTicket($event);
    })("deleteLoteriaFraccion", function LoteriaComponent_div_1_Template_app_carrito_deleteLoteriaFraccion_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r47.deleteLoteriaFraccion($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](24);

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](26);

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](28);

    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](30);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("sorteos", ctx_r0.sorteo)("loteria", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r0.tipoSeleccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r10)("ngModel", ctx_r0.combinacionDeLaSuerte[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r11)("ngModel", ctx_r0.combinacionDeLaSuerte[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r12)("ngModel", ctx_r0.combinacionDeLaSuerte[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r13)("ngModel", ctx_r0.combinacionDeLaSuerte[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx_r0.ticketsLoteria)("ticketsMillonaria", ctx_r0.ticketsMillonaria)("ticketsLotto", ctx_r0.ticketsLotto)("ticketsPozo", ctx_r0.ticketsPozo);
  }
}

function LoteriaComponent_app_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader", 51);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

function LoteriaComponent_app_error_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function LoteriaComponent_app_error_4_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r48.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r2.errorMessage);
  }
}

function LoteriaComponent_app_error_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function LoteriaComponent_app_error_5_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r50.closeValidationError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r3.validationErrorMessage);
  }
}

function LoteriaComponent_app_confirmacion_de_venta_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-confirmacion-de-venta", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("compraConfirmada", function LoteriaComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraConfirmada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r52.confirmarCompra();
    })("compraCancelada", function LoteriaComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraCancelada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r54.cancelarCompra();
    })("comprarDespues", function LoteriaComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_comprarDespues_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r55.dismissCompras();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r4.detalleCompra);
  }
}

function LoteriaComponent_app_instantaneas_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-instantaneas", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function LoteriaComponent_app_instantaneas_7_Template_app_instantaneas_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r56.abrirFinalizar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("resultados", ctx_r5.instantaneas)("isLoteriaNacional", true);
  }
}

function LoteriaComponent_app_venta_finalizada_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-venta-finalizada", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function LoteriaComponent_app_venta_finalizada_8_Template_app_venta_finalizada_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r58.finalizarCompra();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r6.detalleCompra);
  }
}

function LoteriaComponent_app_saldo_insuficiente_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-saldo-insuficiente", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function LoteriaComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r60.dismissCompras();
    })("recarga", function LoteriaComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_recarga_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r62.irARecarga();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r7.recargaDeSaldoMessage);
  }
}

function LoteriaComponent_app_venta_cancelada_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-venta-cancelada", 57);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r8.cancelMessage);
  }
}

class LoteriaComponent {
  constructor(lotteryService, paymentService, cart, loteria, actRoute, router, changeDetectorRef) {
    this.lotteryService = lotteryService;
    this.paymentService = paymentService;
    this.cart = cart;
    this.loteria = loteria;
    this.actRoute = actRoute;
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.combinacionDeLaSuerte = ['', '', '', '', ''];
    this.mostrar = false;
    this.fondo = false;
    this.tipoSeleccion = 96;
    this.showNumeros = false;
    this.page_size = 9;
    this.page_number = 1;
    this.pageSizeOptions = [5, 10, 20, 100];
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
    this.isInstantaneas = false;
    this.cancelMessage = '';
    this.showComponents = false;
    this.isError = false;
    this.isValidationError = false;
    this.actRoute.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.loadingMessage = 'Cargando los sorteos disponibles';
        _this.isLoading = true;

        if (_this.token) {
          let data = yield _this.lotteryService.authUser(_this.token);
        }

        yield _this.getCarritoTickets();

        let authData = _this.lotteryService.getAuthData();

        _this.sorteo = yield _this.loteria.obtenerSorteo(authData);
        _this.descuentos = yield _this.lotteryService.obtenerDescuentos();
        _this.isLoading = false;
        _this.showComponents = true;
      } catch (e) {
        console.log(e.message);
        _this.isLoading = false;

        _this.openError(e.message);
      }
    })();
  }

  getCarritoTickets() {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this2.cart.buscarCarrito();
      _this2.ticketsLoteria = carrito.loteria;
      _this2.ticketsLotto = carrito.lotto;
      _this2.ticketsMillonaria = carrito.millonaria;
      _this2.ticketsPozo = carrito.pozo;
    })();
  }

  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.showNumeros = false;
  }

  buscarNumero() {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this3.loadingMessage = 'Buscando combinaciones disponibles';
        _this3.isLoading = true;
        _this3.showNumeros = false;

        let combinacion = _this3.combinacionDeLaSuerte.map(element => {
          element = element.toString();

          if (element == null || element == undefined || element == '') {
            return '_';
          } else {
            return element;
          }
        });

        let authData = _this3.lotteryService.getAuthData();

        _this3.ticketsDisponibles = yield _this3.loteria.obtenerTickets(_this3.sorteoSeleccionado.sorteo, combinacion.join(''), '', _this3.tipoSeleccion, authData);
        _this3.allFractions = [];

        _this3.ticketsDisponibles.forEach(ticket => {
          _this3.allFractions.push(false);
        });

        _this3.combinacionDeLaSuerte = ['', '', '', '', ''];
        _this3.showNumeros = true;
        _this3.isLoading = false;
      } catch (e) {
        _this3.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this3.openError(errorMessage);
      }
    })();
  }

  handlerPage(e) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  fraccionSeleccionada(idTicket, fraccion) {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this4.changeDetectorRef.detectChanges();

        if (_this4.allFractions[idTicket]) _this4.allFractions[idTicket] = false;

        _this4.changeDetectorRef.markForCheck();

        let index = _this4.ticketsDisponibles[idTicket].seleccionados.indexOf(fraccion);

        if (index != -1) {
          let identificador = _this4.ticketsDisponibles[idTicket].identificador;
          let ticketLoteria = _this4.ticketsLoteria[identificador];
          let aux = {
            ticket: ticketLoteria,
            fraccion
          };
          yield _this4.deleteLoteriaFraccion(aux);

          _this4.changeDetectorRef.detectChanges(); //this.ticketsDisponibles![idTicket].seleccionados.pop();


          _this4.ticketsDisponibles[idTicket].seleccionados.splice(index, 1);

          _this4.changeDetectorRef.markForCheck();
        } else {
          let count = (yield _this4.cart.getCount()) + 1;

          _this4.changeDetectorRef.detectChanges();

          _this4.ticketsDisponibles[idTicket].seleccionados.push(fraccion);

          _this4.changeDetectorRef.markForCheck();

          if (count <= 1000) {
            yield _this4.pushToSeleccionado(_this4.ticketsDisponibles[idTicket], [fraccion]);
          } else {
            _this4.changeDetectorRef.detectChanges();

            _this4.ticketsDisponibles[idTicket].seleccionados.pop();

            _this4.changeDetectorRef.markForCheck();

            let errorMessage = 'Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.';

            _this4.openError(errorMessage);
          }
        }

        yield _this4.setDescuento(1);
      } catch (e) {
        _this4.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this4.openError(errorMessage);
      }
    })();
  }

  setDescuento(tipoLoteria) {
    var _this5 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return;

      let descuentos = _this5.descuentos.filter(element => parseInt(element.tipoLoteria) == tipoLoteria);

      for (let index = 0; index < descuentos.length; index++) {
        const element = descuentos[index];
        let conteo = yield _this5.cart.contarBoletos(element.sorteo, tipoLoteria);

        if (conteo >= parseInt(element.cantidad)) {
          yield _this5.cart.calcularDescuento(element);
        } else {
          yield _this5.cart.eliminarDescuento(element, tipoLoteria);
        }

        yield _this5.getCarritoTickets();
      }

      yield _this5.cart.setTotalConDesc();
    })();
  }

  seleccionarTodo(id) {
    var _this6 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this6.changeDetectorRef.detectChanges();

        _this6.allFractions[id] = !_this6.allFractions[id];

        _this6.changeDetectorRef.markForCheck(); //      let fracciones = [...this.ticketsDisponibles![id].fraccionesDisponibles];


        let fracciones = [..._this6.ticketsDisponibles[id].fraccionesDisponibles.filter(x => !_this6.ticketsDisponibles[id].seleccionados.includes(x))];

        if (_this6.allFractions[id]) {
          let count = (yield _this6.cart.getCount()) + (fracciones.length - _this6.ticketsDisponibles[id].seleccionados.length);

          if (count <= 1000) {
            _this6.ticketsDisponibles[id].seleccionados = _this6.ticketsDisponibles[id].seleccionados.concat(fracciones);
            yield _this6.pushToSeleccionado(_this6.ticketsDisponibles[id], fracciones);
          } else {
            _this6.changeDetectorRef.detectChanges();

            _this6.allFractions[id] = false;

            _this6.changeDetectorRef.markForCheck();

            let errorMessage = 'Incluir los boletos excede el límite de compra. Si quieres escoger estos boletos, por favor elimina algunos de tu carrito.';

            _this6.openError(errorMessage);
          }
        } else {
          let identificador = _this6.ticketsDisponibles[id].identificador;
          yield _this6.deleteLoteriaTicket(_this6.ticketsLoteria[identificador]);
          _this6.ticketsDisponibles[id].seleccionados = [];
        }

        yield _this6.setDescuento(1);
      } catch (e) {
        _this6.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this6.openError(errorMessage);
      }
    })();
  }

  pushToSeleccionado(ticket, fracciones) {
    var _this7 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this7.loadingMessage = 'Agregando boleto al carrito';
        _this7.isLoading = true;
        yield _this7.getCarritoTickets();
        let subtotalTest = parseFloat(_this7.sorteoSeleccionado.precio) * fracciones.length;
        let subtotal = parseFloat(_this7.sorteoSeleccionado.precio) * ticket.seleccionados.length;
        let aux = {
          ticket,
          fracciones,
          sorteo: _this7.sorteoSeleccionado,
          subtotal
        };
        let hasBalance = yield _this7.paymentService.hasBalance(subtotalTest, _this7.token);

        if (hasBalance) {
          _this7.ticketsLoteria[ticket.identificador] = aux;

          let reservaId = _this7.cart.getReservaId();

          let response = yield _this7.lotteryService.reservarBoletos(_this7.token, aux, 1, reservaId);

          _this7.cart.setReservaId(response);

          yield _this7.cart.setCarrito(aux, 1);
          yield _this7.cart.setCarritoLoteria(_this7.ticketsLoteria);
          yield _this7.getCarritoTickets(); //this.getTotal();

          _this7.isLoading = false;
        } else {
          _this7.isLoading = false;
          let message = 'Tu saldo es insuficiente para agregar este boleto al carrito';

          var idTicket = _this7.ticketsDisponibles.findIndex(p => p.identificador == ticket.identificador);

          _this7.ticketsDisponibles[idTicket].seleccionados = _this7.ticketsDisponibles[idTicket].seleccionados.filter(el => !fracciones.includes(el));
          _this7.allFractions[idTicket] = false;

          _this7.recargarSaldo(message);
        }
      } catch (e) {
        _this7.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this7.openError(errorMessage);
      }
    })();
  }

  isSelected(idTicket, idFraccion) {
    let ticket = this.ticketsDisponibles[idTicket];

    if (ticket.seleccionados.indexOf(idFraccion) != -1) {
      return true;
    } else {
      return false;
    }
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.isInstantaneas = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  getTotal() {
    this.changeDetectorRef.detectChanges();
    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }

  comprar() {
    this.dismissCompras();
    let loteriaAux = this.ticketsLoteria;
    let loteria = [];

    for (let id in loteriaAux) {
      let aux = {};
      aux['combinacion1'] = loteriaAux[id].ticket.combinacion;
      aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(loteriaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = loteriaAux[id].tieneDescuento;
      aux['fecha'] = loteriaAux[id].sorteo.fecha;
      aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }

    let lottoAux = this.ticketsLotto;
    let lotto = [];

    for (let id in lottoAux) {
      let aux = {};
      aux['combinacion1'] = lottoAux[id].ticket.combinacion1;
      aux['combinacion2'] = lottoAux[id].ticket.combinacion2;
      aux['combinacion3'] = lottoAux[id].ticket.combinacion3;
      aux['combinacion4'] = lottoAux[id].ticket.combinacion4;
      aux['sorteo'] = lottoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(lottoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = lottoAux[id].tieneDescuento;
      aux['fecha'] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }

    let pozoAux = this.ticketsPozo;
    let pozo = [];

    for (let id in pozoAux) {
      let aux = {};
      aux['combinacion1'] = pozoAux[id].ticket.combinacion1;
      aux['combinacion2'] = pozoAux[id].ticket.combinacion2;
      aux['mascota'] = pozoAux[id].ticket.mascota;
      aux['sorteo'] = pozoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(pozoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = pozoAux[id].tieneDescuento;
      aux['fecha'] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }

    let millonariaAux = this.ticketsMillonaria;
    let millonaria = [];

    for (let id in millonariaAux) {
      let aux = {};
      aux['combinacion1'] = millonariaAux[id].ticket.combinacion1;
      aux['combinacion2'] = millonariaAux[id].ticket.combinacion2;
      aux['fracciones'] = millonariaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(millonariaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = millonariaAux[id].tieneDescuento;
      aux['fecha'] = millonariaAux[id].sorteo.fecha;
      aux['sorteo'] = millonariaAux[id].sorteo.sorteo;
      millonaria.push(aux);
    }

    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);
    this.detalleCompra = {
      loteria,
      millonaria,
      lotto,
      pozo,
      amount,
      amountConDesc
    };
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  irARecarga() {}

  confirmarCompra() {
    var _this8 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this8.isLoading = true;
        _this8.loadingMessage = 'Espera mientras procesamos tu compra';
        let hasBalance = yield _this8.paymentService.hasBalance(0, _this8.token);

        if (hasBalance) {
          let reservaId = _this8.cart.getReservaId();

          let cartValidation = yield _this8.cart.validarCarrito(reservaId);

          if (cartValidation.status) {
            let response = yield _this8.paymentService.confirmarCompra(_this8.token, reservaId);

            if (response.status) {
              if (response.instantanea.status) {
                _this8.dismissCompras();

                _this8.instantaneas = response.instantanea.data;
                _this8.isInstantaneas = true;
              } else {
                _this8.instantaneas = '';

                _this8.abrirFinalizar();
              }
            } else {
              _this8.cancelarCompra();
            }
          } else {
            _this8.openValidationError(cartValidation.message);
          }

          _this8.isLoading = false;
        } else {
          _this8.isLoading = false;
          let message = 'Tu saldo es insuficiente para realizar la compra';

          _this8.recargarSaldo(message);
        }
      } catch (e) {
        _this8.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this8.openError(errorMessage);
      }
    })();
  }

  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  abrirFinalizar() {
    var _this9 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this9.dismissCompras();

      yield _this9.cart.borrarCarrito();
      _this9.compraFinalizada = true;
    })();
  }

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  deleteLoteriaTicket(data) {
    var _this10 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this10.getCarritoTickets();
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this10.loadingMessage = 'Removiendo boleto del carrito';
        _this10.isLoading = true;
        let sorteo = _this10.ticketsLoteria[identificador].sorteo;
        let ticket = _this10.ticketsLoteria[identificador].ticket;

        let reservaId = _this10.cart.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this10.lotteryService.eliminarBoletosDeReserva(_this10.token, ticket, sorteo, fracciones, 1, reservaId);
        }

        delete _this10.ticketsLoteria[identificador];
        yield _this10.cart.removeFromCart(ticket, 1);
        yield _this10.cart.setCarritoLoteria(_this10.ticketsLoteria); //this.getTotal();

        if (_this10.ticketsDisponibles && _this10.ticketsDisponibles.length) {
          let deletedIndex = _this10.ticketsDisponibles.findIndex(x => x.identificador === identificador);

          if (deletedIndex != -1) {
            _this10.allFractions[deletedIndex] = false;
            _this10.ticketsDisponibles[deletedIndex].seleccionados = [];
          }
        }

        yield _this10.setDescuento(1);
        _this10.isLoading = false;
      } catch (e) {
        _this10.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this10.openError(errorMessage);
      }
    })();
  }

  deleteLottoTicket(data) {
    var _this11 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this11.getCarritoTickets();
        let identificador = data.ticket.identificador;
        let fraccion = '';
        _this11.loadingMessage = 'Removiendo boleto del carrito';
        _this11.isLoading = true;
        let ticket = _this11.ticketsLotto[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this11.cart.getReservaId();

        let response = yield _this11.lotteryService.eliminarBoletosDeReserva(_this11.token, ticket, sorteo, fraccion, 2, reservaId);
        delete _this11.ticketsLotto[identificador];
        yield _this11.cart.removeFromCart(ticket, 2);
        yield _this11.cart.setCarritoLotto(_this11.ticketsLotto); //this.getTotal();

        yield _this11.setDescuento(2);
        _this11.isLoading = false;
      } catch (e) {
        _this11.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this11.openError(errorMessage);
      }
    })();
  }

  deletePozoTicket(data) {
    var _this12 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this12.getCarritoTickets();
        _this12.loadingMessage = 'Removiendo boleto del carrito';
        _this12.isLoading = true;
        let identificador = data.ticket.identificador;
        let fraccion = '';
        let ticket = _this12.ticketsPozo[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this12.cart.getReservaId();

        let response = yield _this12.lotteryService.eliminarBoletosDeReserva(_this12.token, ticket, sorteo, fraccion, 5, reservaId);
        delete _this12.ticketsPozo[identificador];
        yield _this12.cart.removeFromCart(ticket, 5);
        yield _this12.cart.setCarritoPozo(_this12.ticketsPozo); //this.getTotal();

        yield _this12.setDescuento(5);
        _this12.isLoading = false;
      } catch (e) {
        _this12.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this12.openError(errorMessage);
      }
    })();
  }

  deleteLoteriaFraccion(data) {
    var _this13 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this13.loadingMessage = 'Removiendo boleto del carrito';
        _this13.isLoading = true;
        yield _this13.getCarritoTickets();
        let identificador = data.ticket.ticket.identificador;
        let ticket = data.ticket.ticket;
        let sorteo = data.ticket.sorteo;
        let fraccion = data.fraccion;

        let reservaId = _this13.cart.getReservaId();

        let response = yield _this13.lotteryService.eliminarBoletosDeReserva(_this13.token, ticket, sorteo, [fraccion], 1, reservaId);

        let indexA = _this13.ticketsLoteria[identificador].ticket.seleccionados.findIndex(x => x == fraccion);

        _this13.ticketsLoteria[identificador].ticket.seleccionados.splice(indexA, 1);

        let indexB = _this13.ticketsLoteria[identificador].fracciones.findIndex(x => x == fraccion);

        _this13.ticketsLoteria[identificador].fracciones.splice(indexB, 1);

        if (_this13.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
          yield _this13.cart.removeFromCart(_this13.ticketsLoteria[identificador], 1);
          delete _this13.ticketsLoteria[identificador];
        } else {
          yield _this13.cart.setCarrito(_this13.ticketsLoteria[identificador], 1);
          _this13.ticketsLoteria[identificador].subtotal -= parseFloat(sorteo.precio);
        }

        yield _this13.cart.setCarritoLoteria(_this13.ticketsLoteria); //this.getTotal();

        yield _this13.setDescuento(1);
        _this13.isLoading = false;
      } catch (e) {
        _this13.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this13.openError(errorMessage);
      }
    })();
  }

  deleteMillonariaTicket(data) {
    var _this14 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this14.loadingMessage = 'Removiendo boleto del carrito';
        _this14.isLoading = true;
        let ticket = _this14.ticketsMillonaria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this14.lotteryService.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this14.lotteryService.eliminarBoletosDeReserva(_this14.token, ticket, sorteo, fracciones, 14, reservaId);
        }

        delete _this14.ticketsMillonaria[identificador];
        yield _this14.cart.removeFromCart(ticket, 1);
        yield _this14.cart.setCarritoMillonaria(_this14.ticketsMillonaria);
        yield _this14.getCarritoTickets(); //this.getTotal();

        yield _this14.setDescuento(14);
        _this14.isLoading = false;
      } catch (e) {
        _this14.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this14.openError(errorMessage);
      }
    })();
  }

  deleteAllTickets() {
    var _this15 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this15.loadingMessage = 'Removiendo boletos del carrito';
        _this15.isLoading = true;
        yield _this15.getCarritoTickets();
        let boletosLoteria = Object.keys(_this15.ticketsLoteria).map(key => {
          return {
            ticket: _this15.ticketsLoteria[key].ticket,
            sorteo: _this15.ticketsLoteria[key].sorteo
          };
        });
        let boletosLotto = Object.keys(_this15.ticketsLotto).map(key => {
          return {
            ticket: _this15.ticketsLotto[key].ticket,
            sorteo: _this15.ticketsLotto[key].sorteo
          };
        });
        let boletosPozo = Object.keys(_this15.ticketsPozo).map(key => {
          return {
            ticket: _this15.ticketsPozo[key].ticket,
            sorteo: _this15.ticketsPozo[key].sorteo
          };
        });

        let reservaId = _this15.cart.getReservaId();
        /*       await this.lotteryService.eliminarTodosLosBoletosDeReserva(
          this.token!,
          boletosLoteria,
          boletosLotto,
          boletosPozo,
          reservaId
        ); */


        Object.keys(_this15.ticketsLoteria).forEach(key => {
          if (_this15.ticketsDisponibles && _this15.ticketsDisponibles.length != 0) {
            let deletedIndex = _this15.ticketsDisponibles.findIndex(x => x.identificador == key);

            if (deletedIndex != -1) {
              _this15.allFractions[deletedIndex] = false;
              _this15.ticketsDisponibles[deletedIndex].seleccionados = [];
            }
          }
        });
        yield _this15.cart.borrarCarrito(); //this.getTotal();

        _this15.isLoading = false;
      } catch (e) {
        _this15.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this15.openError(errorMessage);
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

  openValidationError(msg) {
    this.validationErrorMessage = msg;
    this.isValidationError = true;
  }

  closeValidationError() {
    this.isValidationError = false;
    this.validationErrorMessage = '';
    window.location.reload();
  }

}

LoteriaComponent.ɵfac = function LoteriaComponent_Factory(t) {
  return new (t || LoteriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_2__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_juegos_loteria_services_venta_service__WEBPACK_IMPORTED_MODULE_4__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef));
};

LoteriaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: LoteriaComponent,
  selectors: [["app-loteria"]],
  decls: 11,
  vars: 13,
  consts: [["class", "contenedor_loteria", 4, "ngIf"], ["loader", "loteria", 3, "message", 4, "ngIf"], ["tipoLoteria", "loteria", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteLoteriaFraccion", "deleteMillonariaTicket"], [3, "msg", "closeError", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues", 4, "ngIf"], ["tipoLoteria", "1", "class", "paymentItem", 3, "resultados", "isLoteriaNacional", "close", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "volver", 4, "ngIf"], ["class", "paymentItem", 3, "message", "volver", "recarga", 4, "ngIf"], ["class", "paymentItem", 3, "message", 4, "ngIf"], [1, "contenedor_loteria"], [1, "ventasBox"], ["titulo", "Loteria Nacional", "color", "loteria", 1, "infoBox", 3, "sorteos", "loteria", "emitir"], [1, "contenedor_seleccion"], [1, "selectBox"], [1, "contenedor_select"], ["name", "", "id", "", 1, "select_option", 3, "ngModel", "ngModelChange"], ["value", "96", 1, "option"], ["value", "5", 1, "option"], ["value", "30", 1, "option"], ["value", "50", 1, "option"], [1, "numeros_suerte"], [1, "numeros"], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte0", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input1", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte1", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input2", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte2", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input3", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte3", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input4", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte4", 3, "ngModel", "ngModelChange"], ["input5", ""], [1, "activado", 3, "click"], [1, "tagItem"], ["class", "contenedor_numeros_suerte", 4, "ngIf"], ["tipoLoteria", "loteria", 1, "ticketScroller", 3, "ticketsLoteria", "ticketsMillonaria", "ticketsLotto", "ticketsPozo", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deleteMillonariaTicket", "deletePozoTicket", "deleteLoteriaFraccion"], [1, "contenedor_numeros_suerte"], [4, "ngFor", "ngForOf"], ["size", "2px", "color", "gray", 2, "width", "100%"], [1, "contenedor_botones"], ["style-paginator", "", 3, "length", "pageSize", "page"], [1, "tooltip"], [1, "contenedor_numeros"], [1, "combinationBox"], [1, "seleccionAll"], ["type", "checkbox", 2, "position", "relative", "width", "20px", "opacity", "1", "margin-left", "5px", 3, "ngModel", "click", "ngModelChange"], [1, "contenedor_fracciones"], ["class", "fracciones", 4, "ngFor", "ngForOf"], [1, "fracciones"], ["type", "checkbox", 1, "checkbox", 3, "checked", "id", "click"], [3, "for"], ["loader", "loteria", 3, "message"], [3, "msg", "closeError"], [1, "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues"], ["tipoLoteria", "1", 1, "paymentItem", 3, "resultados", "isLoteriaNacional", "close"], [1, "paymentItem", 3, "compra", "volver"], [1, "paymentItem", 3, "message", "volver", "recarga"], [1, "paymentItem", 3, "message"]],
  template: function LoteriaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ventas-menu-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, LoteriaComponent_div_1_Template, 37, 17, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, LoteriaComponent_app_loader_2_Template, 1, 1, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "app-floating-menu", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitirCompra", function LoteriaComponent_Template_app_floating_menu_emitirCompra_3_listener() {
        return ctx.comprar();
      })("eliminarTodo", function LoteriaComponent_Template_app_floating_menu_eliminarTodo_3_listener() {
        return ctx.deleteAllTickets();
      })("deleteLoteriaTicket", function LoteriaComponent_Template_app_floating_menu_deleteLoteriaTicket_3_listener($event) {
        return ctx.deleteLoteriaTicket($event);
      })("deleteLottoTicket", function LoteriaComponent_Template_app_floating_menu_deleteLottoTicket_3_listener($event) {
        return ctx.deleteLottoTicket($event);
      })("deletePozoTicket", function LoteriaComponent_Template_app_floating_menu_deletePozoTicket_3_listener($event) {
        return ctx.deletePozoTicket($event);
      })("deleteLoteriaFraccion", function LoteriaComponent_Template_app_floating_menu_deleteLoteriaFraccion_3_listener($event) {
        return ctx.deleteLoteriaFraccion($event);
      })("deleteMillonariaTicket", function LoteriaComponent_Template_app_floating_menu_deleteMillonariaTicket_3_listener($event) {
        return ctx.deleteMillonariaTicket($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, LoteriaComponent_app_error_4_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, LoteriaComponent_app_error_5_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, LoteriaComponent_app_confirmacion_de_venta_6_Template, 1, 1, "app-confirmacion-de-venta", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, LoteriaComponent_app_instantaneas_7_Template, 1, 2, "app-instantaneas", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, LoteriaComponent_app_venta_finalizada_8_Template, 1, 1, "app-venta-finalizada", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, LoteriaComponent_app_saldo_insuficiente_9_Template, 1, 1, "app-saldo-insuficiente", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, LoteriaComponent_app_venta_cancelada_10_Template, 1, 1, "app-venta-cancelada", 8);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.showComponents);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx.ticketsLoteria)("ticketsLotto", ctx.ticketsLotto)("ticketsPozo", ctx.ticketsPozo)("ticketsMillonaria", ctx.ticketsMillonaria);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isValidationError);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.confirmacionDeCompra);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isInstantaneas);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.compraFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.saldoInsuficiente);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.compraCancelada);
    }
  },
  directives: [_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__.MenuHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__.FloatingMenuComponent, _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__.DetalleSorteoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.PatternValidator, _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__.AutoTabDirective, _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__.CarritoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__.StylePaginatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.CheckboxControlValueAccessor, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__.ErrorComponent, _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmacionDeVentaComponent, _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__.InstantaneasComponent, _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__.VentaFinalizadaComponent, _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__.SaldoInsuficienteComponent, _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__.VentaCanceladaComponent],
  pipes: [_shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: [".tooltip[_ngcontent-%COMP%] {\n  \n  background: #ffffff;\n  border-radius: 20px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  max-height: 260px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  font-style: normal;\n  font-weight: 700;\n  font-size: 25px !important;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  font-family: \"Monstserrat Bold\";\n  opacity: 0.7;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 0 10px;\n  \n  align-items: center;\n  \n  \n  \n  text-align: left;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: italic;\n  font-weight: bold;\n  width: 100%;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%] {\n  \n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n  height: 50px;\n  border: 4.5px solid #28aae1;\n  background-color: #fff;\n  border-radius: 150px;\n  font-size: 25px;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  color: #000;\n}\n.tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: opacity 1s ease;\n  -webkit-transition: opacity 1s ease;\n  top: 4rem;\n  left: 0.6rem;\n  z-index: 500;\n  background-color: #d1c6c6;\n  padding: 3px 30px;\n  border-radius: 20px;\n  \n  margin-left: -999em;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-family: Calibri, Geneva, Tahoma, Arial, sans-serif;\n  position: absolute;\n  left: 1em;\n  top: 2em;\n  z-index: 99;\n  margin-left: 0;\n  width: 250px;\n}\n.tooltip[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  border: 0;\n  margin: -10px 0 0 -55px;\n  float: left;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   em[_ngcontent-%COMP%] {\n  font-family: Candara, Tahoma, Geneva, sans-serif;\n  font-size: 1.2em;\n  font-weight: bold;\n  display: block;\n  padding: 0.2em 0 0.6em 0;\n}\n.classic[_ngcontent-%COMP%] {\n  padding: 0.8em 1em;\n}\n.custom[_ngcontent-%COMP%] {\n  padding: 0.5em 0.8em 0.8em 2em;\n}\n*[_ngcontent-%COMP%]   html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.classic[_ngcontent-%COMP%] {\n  padding: 0.8em 1em;\n}\n*[_ngcontent-%COMP%]   html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.classic[_ngcontent-%COMP%] {\n  background: #ffffaa;\n  border: 1px solid #ffad33;\n}\n.fondoNormal[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n.fondoAzul[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  color: #fff;\n}\n.numeros_grupo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, auto) 1fr;\n}\n.numeros_grupo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.numeros_grupo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  padding: 8px 6px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n  border: 1.5px solid #000;\n  border-radius: 2px;\n  color: #000;\n  -moz-appearance: textfield;\n  margin-right: 3px;\n  background-color: #fff;\n}\n.contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 10px auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(4, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  \n  width: 25%;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  \n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 25px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  margin: 10px 10px 10px 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 25px;\n  font-weight: bold;\n  border: 4.5px solid #28aae1;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  padding: 15px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  border-radius: 30px;\n  border: 1px solid #28aae1;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #28aae1;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  background-color: #fff;\n  color: #444;\n  margin: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 1px solid #28aae1;\n  margin: 5px auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #28aae1;\n  font-family: \"Monstserrat Regular\";\n  background-color: #28aae1;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #28aae1;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #fff;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #28aae1;\n  color: #28aae1;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #28aae1;\n  border: 1px solid transparent;\n  color: #fff;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .paymentBox[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0 8px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   .activado[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, auto);\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: 15px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWkY7QUFjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFaSjtBQWVFO0VBQ0UseUJBdEJXO0VBdUJYLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUFiSjtBQWdCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBZE47QUFlTTtFQUNFLE1BQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUVBLCtCQTdEUTtFQThEUixZQUFBO0VBQ0EsWUFBQTtBQWhCUjtBQW1CSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakJOO0FBbUJNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWpCUjtBQW9CTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBbEJSO0FBc0JJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBcEJOO0FBc0JNO0VBQ0U7MkNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFwQlI7QUFzQlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcEJWO0FBdUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBckJWO0FBd0JRO0VBQ0UseUJBdkhLO0VBd0hMLFdBQUE7QUF0QlY7QUE2QkE7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBM0JGO0FBOEJBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBM0JGO0FBOEJBO0VBQ0Usa0JBQUE7QUEzQkY7QUE4QkE7RUFDRSw4QkFBQTtBQTNCRjtBQThCQTtFQUNFLHVCQUFBO0FBM0JGO0FBOEJBO0VBQ0Usa0JBQUE7QUEzQkY7QUE4QkE7RUFDRSx1QkFBQTtBQTNCRjtBQThCQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUEzQkY7QUE4QkE7RUFDRSx5QkFBQTtBQTNCRjtBQThCQTtFQUNFLHlCQXJNYTtFQXNNYixXQUFBO0FBM0JGO0FBOEJBO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0FBM0JGO0FBNkJFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBM0JKO0FBOEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQWhPZTtFQWlPZixlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUE1Qko7QUFrQ0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQS9CRjtBQWlDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUEvQko7QUFnQ0k7RUFDRSxXQUFBO0FBOUJOO0FBZ0NJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBOUJOO0FBZ0NNO0VBQ0UsZUFBQTtBQTlCUjtBQWlDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUEvQlI7QUFpQ1E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBL0JWO0FBaUNVO0VBQ0UsbUNBalJPO0VBa1JQLGVBQUE7QUEvQlo7QUFrQ1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBelJLO0VBMFJMLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUFqQ1o7QUFrQ1k7RUFDRSxrQkFBQTtBQWhDZDtBQWtDWTtFQUNFLGFBQUE7QUFoQ2Q7QUFvQ1U7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQWxDWjtBQW9DWTtFQUNFOztHQUFBO0VBR0EsVUFBQTtFQUNBLGdCQUFBO0FBbENkO0FBbUNjO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWpDaEI7QUFrQ2dCO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQWhDbEI7QUFvQ1k7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbENkO0FBbUNjO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFqQ2hCO0FBbUNjO0VBQ0UseUJBblZEO0VBb1ZDLG1CQUFBO0VBQ0Esc0NBQUE7QUFqQ2hCO0FBdUNRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFyQ1Y7QUF1Q1U7RUFDRSxtQ0EzV087RUE0V1AsZUFBQTtBQXJDWjtBQXdDVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUF0Q1o7QUF1Q1k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQTVYSztFQTZYTCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBckNkO0FBd0NZOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQXRDZDtBQTJDUTtFQUNFLHlCQXRZSztFQXVZTCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQXBaTztFQXFaUCxlQUFBO0VBQ0EsZUFBQTtBQXpDVjtBQTJDVTtFQUNFLHVCQUFBO0VBQ0EsY0FwWkc7RUFxWkgsc0NBQUE7QUF6Q1o7QUE2Q007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUEzQ1I7QUE2Q1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0F6YVM7RUEwYVQsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUEzQ1Y7QUE2Q1U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTNDWjtBQWdETTtFQUNFLG1DQW5jUztFQW9jVCxlQUFBO0FBOUNSO0FBaURNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUEvQ1I7QUFpRFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtBQWhEVjtBQWtEVTtFQUNFLGFBQUE7QUFoRFo7QUFrRFk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakRkO0FBbURjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQWpEaEI7QUFvRGM7RUFDRSx5QkFyZUQ7RUFzZUMsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQWxEaEI7QUFxRGM7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFuRGhCO0FBb0RnQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFsRGxCO0FBb0RrQjtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQWxEcEI7QUFzRGdCO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQXBEbEI7QUFzRGtCO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBcERwQjtBQTREUTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBMURWO0FBOERNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUE1RFI7QUE4RFE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQTVEVjtBQStEUTtFQUNFLGVBQUE7QUE3RFY7QUFnRVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBbGpCTztFQW1qQlAseUJBNWlCSztFQTZpQkwsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE5RFY7QUFnRVU7RUFDRSxvQkFBQTtBQTlEWjtBQWlFVTtFQUNFLHNCQUFBO0FBL0RaO0FBa0VVO0VBQ0UsdUJBQUE7RUFDQSxjQTVqQkc7RUE2akJILHNDQUFBO0FBaEVaO0FBbUVVO0VBQ0UsWUFBQTtBQWpFWjtBQXNFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXBFUjtBQXNFUTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBcGxCSztFQXFsQkwsK0JBOWxCTTtFQStsQk4sZUFBQTtFQUNBLGVBQUE7QUFwRVY7QUFzRVU7RUFDRSx5QkExbEJHO0VBMmxCSCw2QkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQXBFWjtBQTJFRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBekVKO0FBNkVBO0VBQ0U7SUFDRSxVQUFBO0VBMUVGOztFQTRFQTtJQUNFLHNCQUFBO0VBekVGO0VBMEVFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBeEVKO0VBMkVFO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtFQXpFSjtFQTJFSTtJQUNFLGVBQUE7RUF6RU47RUEyRU07SUFDRSxXQUFBO0VBekVSO0VBNkVJO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUEzRU47RUE0RU07SUFDRSxlQUFBO0lBQ0EsdUJBQUE7RUExRVI7RUEyRVE7SUFDRSx3QkFBQTtFQXpFVjtFQTJFUTtJQUNFLGdCQUFBO0VBekVWO0VBK0VNO0lBQ0Usc0NBQUE7RUE3RVI7RUFnRk07SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUE5RVI7RUFtRkU7SUFDRSxhQUFBO0VBakZKO0FBQ0YiLCJmaWxlIjoibG90ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XG5cbi8vIEVzdGlsb3MgZGUgY29tcG9uZW50ZSB0b29sdGlwXG5cbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XG5cbi50b29sdGlwIHtcbiAgLyogUmVjdGFuZ2xlIDQwICovXG5cbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICAuY29tYmluYXRpb25Cb3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHAge1xuICAgICAgICAvKiA0ICovXG5cbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY2Npb25BbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICAgICAgLyogcGFkZGluZzogMDsgKi9cbiAgICAgIC8qIG1hcmdpbjogMDsgKi9cbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbmVkb3JfZnJhY2Npb25lcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5mcmFjY2lvbmVzIHtcbiAgICAgICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7ICovXG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50b29sdGlwIHNwYW4ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICB0b3A6IDRyZW07XG4gIGxlZnQ6IDAuNnJlbTtcbiAgei1pbmRleDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjNmM2O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAvKiB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7ICovXG4gIG1hcmdpbi1sZWZ0OiAtOTk5ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRvb2x0aXA6aG92ZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBHZW5ldmEsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMWVtO1xuICB0b3A6IDJlbTtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIGltZyB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAtMTBweCAwIDAgLTU1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b29sdGlwOmhvdmVyIGVtIHtcbiAgZm9udC1mYW1pbHk6IENhbmRhcmEsIFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuMmVtIDAgMC42ZW0gMDtcbn1cblxuLmNsYXNzaWMge1xuICBwYWRkaW5nOiAwLjhlbSAxZW07XG59XG5cbi5jdXN0b20ge1xuICBwYWRkaW5nOiAwLjVlbSAwLjhlbSAwLjhlbSAyZW07XG59XG5cbiogaHRtbCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jbGFzc2ljIHtcbiAgcGFkZGluZzogMC44ZW0gMWVtO1xufVxuXG4qIGh0bWwgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY2xhc3NpYyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmYWE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFkMzM7XG59XG5cbi5mb25kb05vcm1hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5mb25kb0F6dWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm51bWVyb3NfZ3J1cG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBhdXRvKSAxZnI7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBwIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogOHB4IDZweDtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMS41cHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4vLyBFc3RpbG9zIGRlIGNvbXBvbmVudCB0b29sdGlwXG5cbi5jb250ZW5lZG9yX2xvdGVyaWEge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gIC52ZW50YXNCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzAlO1xuICAgIC5pbmZvQm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLnRhZ0l0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5zZWxlY3RCb3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5jb250ZW5lZG9yX3NlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbGVjdF9vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3B0aW9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblxuICAgICAgICAgICAgLm9wdGlvbiB7XG4gICAgICAgICAgICAgIC8qICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICovXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAvKiBmaXggc3BlY2lmaWMgZm9yIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAtMTAwMDBweDtcbiAgICAgICAgICAgICAgJiArIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm51bWVyb3Mge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBib3JkZXI6IDQuNXB4IHNvbGlkICRjb2xvci1ib3R0b247XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50YWJzX2FuaW1hbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAxMnB4IDE1cHggMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgICAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gICAgICAgICAgZ2FwOiAxMHB4IDE1cHg7XG5cbiAgICAgICAgICB0ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDdweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWNjaW9uX251bWVybyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIC5pbWFnZW5fYW5pbWFsIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gOHB4O1xuXG4gICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubnVtZXJvcyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHIge1xuICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW5lZG9yX2JvdG9uZXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuZGVzYXBhcmVjZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwYXJlY2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYm90b24ge1xuICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkgaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSBpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwcHggMCAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYm90b25fYm9sZXRvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxN3B4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGlja2V0U2Nyb2xsZXIge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucGF5bWVudEJveCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuICAuY29udGVuZWRvcl9sb3RlcmlhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5pbmZvQm94IHtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcblxuICAgICAgLnNlbGVjdEJveCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuY29udGVuZWRvcl9zZWxlY3Qge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5udW1lcm9zX3N1ZXJ0ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZhZG8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGFibGUge1xuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgYXV0byk7XG4gICAgICAgIH1cblxuICAgICAgICBociB7XG4gICAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRTY3JvbGxlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 9749:
/*!************************************************************!*\
  !*** ./src/app/ventas/containers/lotto/lotto.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottoComponent": () => (/* binding */ LottoComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _juegos_lotto_services_venta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../juegos/lotto/services/venta.service */ 2736);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../..//services/pagos.service */ 6862);
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/floating-menu/floating-menu.component */ 647);
/* harmony import */ var _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/detalle-sorteo/detalle-sorteo.component */ 9927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/autotab.directive */ 3444);
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/carrito/carrito.component */ 1616);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/style-paginator.directive */ 6560);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);
/* harmony import */ var _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/confirmacion-de-venta/confirmacion-de-venta.component */ 5543);
/* harmony import */ var _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/instantaneas/instantaneas.component */ 1022);
/* harmony import */ var _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/venta-finalizada/venta-finalizada.component */ 8332);
/* harmony import */ var _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/saldo-insuficiente/saldo-insuficiente.component */ 5022);
/* harmony import */ var _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/venta-cancelada/venta-cancelada.component */ 3983);
/* harmony import */ var _shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/paginate.pipe */ 2343);

























function LottoComponent_div_1_div_37_tr_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r19.sorteoSeleccionado.combinacion3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ticket_r17.combinacion3);
  }
}

function LottoComponent_div_1_div_37_tr_3_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r20.sorteoSeleccionado.combinacion2, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ticket_r17.combinacion2);
  }
}

function LottoComponent_div_1_div_37_tr_3_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r21.sorteoSeleccionado.combinacion4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ticket_r17.combinacion4);
  }
}

function LottoComponent_div_1_div_37_tr_3_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r22.sorteoSeleccionado.combinacion5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r22.obtenerAntojito(ticket_r17.combinacion5), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}

function LottoComponent_div_1_div_37_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function LottoComponent_div_1_div_37_tr_3_Template_input_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const i_r18 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r27.seleccionarTicket(ctx_r27.page_size * (ctx_r27.page_number - 1) + i_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, LottoComponent_div_1_div_37_tr_3_p_9_Template, 4, 2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, LottoComponent_div_1_div_37_tr_3_p_10_Template, 4, 2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, LottoComponent_div_1_div_37_tr_3_p_11_Template, 4, 2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, LottoComponent_div_1_div_37_tr_3_p_12_Template, 3, 2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", ticket_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ticket_r17.combinacion1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ticket_r17.combinacion3 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ticket_r17.combinacion2 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ticket_r17.combinacion4 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ticket_r17.combinacion5 && ticket_r17.combinacion5 != "");
  }
}

function LottoComponent_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, LottoComponent_div_1_div_37_tr_3_Template, 13, 6, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "paginacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "hr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "mat-paginator", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("page", function LottoComponent_div_1_div_37_Template_mat_paginator_page_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r29.handlerPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](4, 3, ctx_r15.ticketsDisponibles, ctx_r15.page_size, ctx_r15.page_number));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("length", ctx_r15.ticketsDisponibles.length)("pageSize", ctx_r15.page_size);
  }
}

function LottoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-detalle-sorteo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitir", function LottoComponent_div_1_Template_app_detalle_sorteo_emitir_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r31.procesaEmitir($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "\u00BFC\u00F3mo quieres comprar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r33.tipoSeleccion = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "Selecci\u00F3n individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "5 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "30 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "50 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "Ingresa tu n\u00FAmero de la suerte:");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r34.combinacionDeLaSuerte[0] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "input", 22, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r35.combinacionDeLaSuerte[1] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "input", 22, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r36.combinacionDeLaSuerte[2] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "input", 22, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r37.combinacionDeLaSuerte[3] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "input", 22, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r38.combinacionDeLaSuerte[4] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function LottoComponent_div_1_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r39.combinacionDeLaSuerte[5] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function LottoComponent_div_1_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r40.buscarNumero();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34, "BUSCAR NUMERO");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36, " Si quieres cambiar tu n\u00FAmero, ingr\u00E9salo nuevamente y haz click en \"Buscar n\u00FAmero\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, LottoComponent_div_1_div_37_Template, 8, 7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "app-carrito", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteLoteriaTicket", function LottoComponent_div_1_Template_app_carrito_deleteLoteriaTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r41.deleteLoteriaTicket($event);
    })("deleteLottoTicket", function LottoComponent_div_1_Template_app_carrito_deleteLottoTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r42.deleteLottoTicket($event);
    })("deletePozoTicket", function LottoComponent_div_1_Template_app_carrito_deletePozoTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r43.deletePozoTicket($event);
    })("deleteLoteriaFraccion", function LottoComponent_div_1_Template_app_carrito_deleteLoteriaFraccion_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r44.deleteLoteriaFraccion($event);
    })("deleteMillonariaTicket", function LottoComponent_div_1_Template_app_carrito_deleteMillonariaTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r45.deleteMillonariaTicket($event);
    })("emitirCompra", function LottoComponent_div_1_Template_app_carrito_emitirCompra_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r46.comprar();
    })("eliminarTodo", function LottoComponent_div_1_Template_app_carrito_eliminarTodo_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r47.deleteAllTickets();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](24);

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](26);

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](28);

    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](30);

    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](32);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("sorteos", ctx_r0.sorteo)("loteria", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r0.tipoSeleccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r10)("ngModel", ctx_r0.combinacionDeLaSuerte[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r11)("ngModel", ctx_r0.combinacionDeLaSuerte[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r12)("ngModel", ctx_r0.combinacionDeLaSuerte[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r13)("ngModel", ctx_r0.combinacionDeLaSuerte[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r14)("ngModel", ctx_r0.combinacionDeLaSuerte[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx_r0.ticketsLoteria)("ticketsLotto", ctx_r0.ticketsLotto)("ticketsMillonaria", ctx_r0.ticketsMillonaria)("ticketsPozo", ctx_r0.ticketsPozo);
  }
}

function LottoComponent_app_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader", 45);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

function LottoComponent_app_error_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function LottoComponent_app_error_4_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r48.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r2.errorMessage);
  }
}

function LottoComponent_app_error_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function LottoComponent_app_error_5_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r50.closeValidationError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r3.validationErrorMessage);
  }
}

function LottoComponent_app_confirmacion_de_venta_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-confirmacion-de-venta", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("compraConfirmada", function LottoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraConfirmada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r52.confirmarCompra();
    })("compraCancelada", function LottoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraCancelada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r54.cancelarCompra();
    })("comprarDespues", function LottoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_comprarDespues_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r55.dismissCompras();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r4.detalleCompra);
  }
}

function LottoComponent_app_instantaneas_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-instantaneas", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function LottoComponent_app_instantaneas_7_Template_app_instantaneas_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r56.abrirFinalizar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("resultados", ctx_r5.instantaneas)("isLoteriaNacional", true);
  }
}

function LottoComponent_app_venta_finalizada_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-venta-finalizada", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function LottoComponent_app_venta_finalizada_8_Template_app_venta_finalizada_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r58.finalizarCompra();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r6.detalleCompra);
  }
}

function LottoComponent_app_saldo_insuficiente_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-saldo-insuficiente", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function LottoComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r60.dismissCompras();
    })("recarga", function LottoComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_recarga_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r62.irARecarga();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r7.recargaDeSaldoMessage);
  }
}

function LottoComponent_app_venta_cancelada_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-venta-cancelada", 51);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r8.cancelMessage);
  }
}

class LottoComponent {
  constructor(lotteryService, actRoute, cart, lotto, changeDetectorRef, paymentService, router) {
    this.lotteryService = lotteryService;
    this.actRoute = actRoute;
    this.cart = cart;
    this.lotto = lotto;
    this.changeDetectorRef = changeDetectorRef;
    this.paymentService = paymentService;
    this.router = router;
    this.combinacionDeLaSuerte = ['', '', '', '', '', ''];
    this.page_size = 9;
    this.page_number = 1;
    this.showNumeros = false;
    this.tipoSeleccion = 96;
    this.ticketsLotto = {};
    this.ticketsPozo = {};
    this.ticketsLoteria = {};
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
    this.cancelMessage = '';
    this.isInstantaneas = false;
    this.showComponents = false;
    this.isError = false;
    this.isValidationError = false;
    this.actRoute.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  getTotal() {
    this.changeDetectorRef.detectChanges();
    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }

  buscarNumero() {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.loadingMessage = 'Buscando combinaciones disponibles';
        _this.isLoading = true;
        _this.showNumeros = false;

        let combinacion = _this.combinacionDeLaSuerte.map(element => {
          if (element == null || element == undefined || element == '') {
            return '_';
          } else {
            return element;
          }
        });

        let authData = _this.lotteryService.getAuthData();

        _this.ticketsDisponibles = yield _this.lotto.obtenerTickets(_this.sorteoSeleccionado.sorteo, combinacion.join(''), '', _this.tipoSeleccion, authData);
        _this.combinacionDeLaSuerte = ['', '', '', '', '', ''];
        _this.showNumeros = true;
        _this.isLoading = false;
      } catch (e) {
        _this.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this.openError(errorMessage);
      }
    })();
  }

  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.showNumeros = false;
  }

  seleccionarTicket(id) {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.ticketsDisponibles[id].status = !_this2.ticketsDisponibles[id].status;

        if (!_this2.ticketsDisponibles[id].status) {
          let identificador = _this2.ticketsDisponibles[id].identificador;
          let ticketLotto = _this2.ticketsLotto[identificador];
          yield _this2.deleteLottoTicket(ticketLotto);
        } else {
          let count = (yield _this2.cart.getCount()) + 1;

          if (count <= 1000) {
            yield _this2.pushToSeleccionado(_this2.ticketsDisponibles[id]);
          } else {
            _this2.changeDetectorRef.detectChanges();

            _this2.ticketsDisponibles[id].status = false;

            _this2.changeDetectorRef.markForCheck();

            let errorMessage = 'Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.';

            _this2.openError(errorMessage);
          }
        }

        yield _this2.setDescuento(2);
      } catch (e) {
        _this2.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this2.openError(errorMessage);
      }
    })();
  }

  pushToSeleccionado(ticket) {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this3.loadingMessage = 'Agregando boleto al carrito';
        _this3.isLoading = true;
        let subtotal = _this3.sorteoSeleccionado.precio;
        let aux = {
          ticket,
          sorteo: _this3.sorteoSeleccionado,
          subtotal
        };
        let hasBalance = yield _this3.paymentService.hasBalance(subtotal, _this3.token);

        if (hasBalance) {
          _this3.ticketsLotto[ticket.identificador] = aux;

          let reservaId = _this3.lotteryService.getReservaId();

          let response = yield _this3.lotteryService.reservarBoletos(_this3.token, aux, 2, reservaId);

          _this3.lotteryService.setReservaId(response);

          yield _this3.cart.setCarrito(aux, 2);
          yield _this3.cart.setCarritoLotto(_this3.ticketsLotto);
          yield _this3.getCarritoTickets(); //this.getTotal();

          _this3.isLoading = false;
        } else {
          _this3.isLoading = false;
          let message = 'Tu saldo es insuficiente para agregar este boleto al carrito';
          _this3.ticketsDisponibles.find(x => x.identificador === ticket.identificador).status = false;

          _this3.recargarSaldo(message);
        }
      } catch (e) {
        _this3.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this3.openError(errorMessage);
      }
    })();
  }

  irARecarga() {}

  abrirResumen() {
    this.router.navigate([`compra_tus_juegos/resumen/${this.token}`]);
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  comprar() {
    this.dismissCompras();
    let loteriaAux = this.ticketsLoteria;
    let loteria = [];

    for (let id in loteriaAux) {
      let aux = {};
      aux['combinacion1'] = loteriaAux[id].ticket.combinacion;
      aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(loteriaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = loteriaAux[id].tieneDescuento;
      aux['fecha'] = loteriaAux[id].sorteo.fecha;
      aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }

    let lottoAux = this.ticketsLotto;
    let lotto = [];

    for (let id in lottoAux) {
      let aux = {};
      aux['combinacion1'] = lottoAux[id].ticket.combinacion1;
      aux['combinacion2'] = lottoAux[id].ticket.combinacion2;
      aux['combinacion3'] = lottoAux[id].ticket.combinacion3;
      aux['combinacion4'] = lottoAux[id].ticket.combinacion4;
      aux['sorteo'] = lottoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(lottoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = lottoAux[id].tieneDescuento;
      aux['fecha'] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }

    let pozoAux = this.ticketsPozo;
    let pozo = [];

    for (let id in pozoAux) {
      let aux = {};
      aux['combinacion1'] = pozoAux[id].ticket.combinacion1;
      aux['combinacion2'] = pozoAux[id].ticket.combinacion2;
      aux['mascota'] = pozoAux[id].ticket.mascota;
      aux['sorteo'] = pozoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(pozoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = pozoAux[id].tieneDescuento;
      aux['fecha'] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }

    let millonariaAux = this.ticketsMillonaria;
    let millonaria = [];

    for (let id in millonariaAux) {
      let aux = {};
      aux['combinacion1'] = millonariaAux[id].ticket.combinacion1;
      aux['combinacion2'] = millonariaAux[id].ticket.combinacion2;
      aux['fracciones'] = millonariaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(millonariaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = millonariaAux[id].tieneDescuento;
      aux['fecha'] = millonariaAux[id].sorteo.fecha;
      aux['sorteo'] = millonariaAux[id].sorteo.sorteo;
      millonaria.push(aux);
    }

    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);
    this.detalleCompra = {
      loteria,
      millonaria,
      lotto,
      pozo,
      amount,
      amountConDesc
    };
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  confirmarCompra() {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this4.isLoading = true;
        _this4.loadingMessage = 'Espera mientras procesamos tu compra';
        let hasBalance = yield _this4.paymentService.hasBalance(0, _this4.token);

        if (hasBalance) {
          let reservaId = _this4.lotteryService.getReservaId();

          let cartValidation = yield _this4.cart.validarCarrito(reservaId);

          if (cartValidation.status) {
            let response = yield _this4.paymentService.confirmarCompra(_this4.token, reservaId);
            _this4.isLoading = false;

            if (response.status) {
              if (response.instantanea.status) {
                _this4.dismissCompras();

                _this4.instantaneas = response.instantanea.data;
                _this4.isInstantaneas = true;
              } else {
                _this4.instantaneas = '';

                _this4.abrirFinalizar();
              }
            } else {
              _this4.cancelarCompra();
            }
          } else {
            _this4.openValidationError(cartValidation.message);
          }

          _this4.isLoading = false;
        } else {
          _this4.isLoading = false;
          let message = 'Tu saldo es insuficiente para realizar la compra';

          _this4.recargarSaldo(message);
        }
      } catch (e) {
        _this4.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this4.openError(errorMessage);
      }
    })();
  }

  abrirFinalizar() {
    var _this5 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this5.dismissCompras();

      yield _this5.cart.borrarCarrito();
      _this5.compraFinalizada = true;
    })();
  }

  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  handlerPage(e) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ngOnInit() {
    var _this6 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this6.loadingMessage = 'Cargando los sorteos disponibles';
        _this6.isLoading = true;

        if (_this6.token) {
          let data = yield _this6.lotteryService.authUser(_this6.token);
        }

        yield _this6.getCarritoTickets(); //this.getTotal();

        let authData = _this6.lotteryService.getAuthData();

        _this6.sorteo = yield _this6.lotto.obtenerSorteo(authData);
        _this6.descuentos = yield _this6.lotteryService.obtenerDescuentos();
        _this6.isLoading = false;
        _this6.showComponents = true;
      } catch (e) {
        _this6.isLoading = false;
        console.log(e.message);
        let errorMessage = 'Ha ocurrido un error obteniendo los sorteos disponibles. Por favor, verifique si tiene la sesión iniciada e intente de nuevo.';

        _this6.openError(errorMessage);
      }
    })();
  }

  setDescuento(tipoLoteria) {
    var _this7 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return;

      let descuentos = _this7.descuentos.filter(element => parseInt(element.tipoLoteria) == tipoLoteria);

      for (let index = 0; index < descuentos.length; index++) {
        const element = descuentos[index];
        let conteo = yield _this7.cart.contarBoletos(element.sorteo, tipoLoteria);

        if (conteo >= parseInt(element.cantidad)) {
          yield _this7.cart.calcularDescuento(element);
        } else {
          yield _this7.cart.eliminarDescuento(element, tipoLoteria);
        }

        yield _this7.getCarritoTickets();
      }

      yield _this7.cart.setTotalConDesc();
    })();
  }

  obtenerAntojito(antojito) {
    return this.lotto.obtenerCaracteristicasDeAntojito(antojito).ruta;
  }

  deleteLoteriaFraccion(data) {
    var _this8 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this8.loadingMessage = 'Removiendo boleto del carrito';
        _this8.isLoading = true;
        let identificador = data.ticket.ticket.identificador;
        let ticket = data.ticket.ticket;
        let sorteo = data.ticket.sorteo;
        let fraccion = data.fraccion;

        let reservaId = _this8.cart.getReservaId();

        let response = yield _this8.lotteryService.eliminarBoletosDeReserva(_this8.token, ticket, sorteo, [fraccion], 1, reservaId);

        let index = _this8.ticketsLoteria[identificador].ticket.seleccionados.findIndex(x => x == fraccion);

        _this8.ticketsLoteria[identificador].ticket.seleccionados.splice(index, 1);

        if (_this8.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
          delete _this8.ticketsLoteria[identificador];
        }

        yield _this8.cart.setCarritoLoteria(_this8.ticketsLoteria);
        yield _this8.getCarritoTickets(); //this.getTotal();

        yield _this8.setDescuento(1);
        _this8.isLoading = false;
      } catch (e) {
        _this8.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this8.openError(errorMessage);
      }
    })();
  }

  deleteLoteriaTicket(data) {
    var _this9 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this9.loadingMessage = 'Removiendo boleto del carrito';
        _this9.isLoading = true;
        let ticket = _this9.ticketsLoteria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this9.lotteryService.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this9.lotteryService.eliminarBoletosDeReserva(_this9.token, ticket, sorteo, fracciones, 1, reservaId);
        }

        delete _this9.ticketsLoteria[identificador];
        yield _this9.cart.removeFromCart(ticket, 1);
        yield _this9.cart.setCarritoLoteria(_this9.ticketsLoteria);
        yield _this9.getCarritoTickets(); //this.getTotal();

        yield _this9.setDescuento(1);
        _this9.isLoading = false;
      } catch (e) {
        _this9.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this9.openError(errorMessage);
      }
    })();
  }

  deleteMillonariaTicket(data) {
    var _this10 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this10.loadingMessage = 'Removiendo boleto del carrito';
        _this10.isLoading = true;
        let ticket = _this10.ticketsMillonaria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this10.lotteryService.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this10.lotteryService.eliminarBoletosDeReserva(_this10.token, ticket, sorteo, fracciones, 14, reservaId);
        }

        delete _this10.ticketsMillonaria[identificador];
        yield _this10.cart.removeFromCart(ticket, 1);
        yield _this10.cart.setCarritoMillonaria(_this10.ticketsMillonaria);
        yield _this10.getCarritoTickets(); //this.getTotal();

        yield _this10.setDescuento(14);
        _this10.isLoading = false;
      } catch (e) {
        _this10.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this10.openError(errorMessage);
      }
    })();
  }

  deleteLottoTicket(data) {
    var _this11 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this11.loadingMessage = 'Removiendo boleto del carrito';
        _this11.isLoading = true;
        let identificador = data.ticket.identificador;
        let fraccion = '';
        let ticket = _this11.ticketsLotto[identificador].ticket;
        let sorteo = _this11.ticketsLotto[identificador].sorteo;

        let reservaId = _this11.lotteryService.getReservaId();

        let response = yield _this11.lotteryService.eliminarBoletosDeReserva(_this11.token, ticket, sorteo, fraccion, 2, reservaId);
        delete _this11.ticketsLotto[identificador];
        yield _this11.cart.removeFromCart(ticket, 2);
        yield _this11.cart.setCarritoLotto(_this11.ticketsLotto);

        if (_this11.ticketsDisponibles && _this11.ticketsDisponibles.length) {
          let deletedIndex = _this11.ticketsDisponibles.findIndex(x => x.identificador === identificador);

          if (deletedIndex != -1) _this11.ticketsDisponibles[deletedIndex].status = false;
        }

        yield _this11.getCarritoTickets(); //this.getTotal();

        yield _this11.setDescuento(2);
        _this11.isLoading = false;
      } catch (e) {
        _this11.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this11.openError(errorMessage);
      }
    })();
  }

  deletePozoTicket(data) {
    var _this12 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fraccion = '';
        _this12.loadingMessage = 'Removiendo boleto del carrito';
        _this12.isLoading = true;
        let ticket = _this12.ticketsPozo[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this12.lotteryService.getReservaId();

        let response = yield _this12.lotteryService.eliminarBoletosDeReserva(_this12.token, ticket, sorteo, fraccion, 5, reservaId);
        delete _this12.ticketsPozo[identificador];
        yield _this12.cart.removeFromCart(ticket, 5);
        yield _this12.cart.setCarritoPozo(_this12.ticketsPozo);
        yield _this12.getCarritoTickets(); //this.getTotal();

        yield _this12.setDescuento(5);
        _this12.isLoading = false;
      } catch (e) {
        _this12.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this12.openError(errorMessage);
      }
    })();
  }

  deleteAllTickets() {
    var _this13 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this13.loadingMessage = 'Removiendo boletos del carrito';
        _this13.isLoading = true;
        let boletosLoteria = Object.keys(_this13.ticketsLoteria).map(key => {
          return {
            ticket: _this13.ticketsLoteria[key].ticket,
            sorteo: _this13.ticketsLoteria[key].sorteo
          };
        });
        let boletosLotto = Object.keys(_this13.ticketsLotto).map(key => {
          return {
            ticket: _this13.ticketsLotto[key].ticket,
            sorteo: _this13.ticketsLotto[key].sorteo
          };
        });
        let boletosPozo = Object.keys(_this13.ticketsPozo).map(key => {
          return {
            ticket: _this13.ticketsPozo[key].ticket,
            sorteo: _this13.ticketsPozo[key].sorteo
          };
        });

        let reservaId = _this13.lotteryService.getReservaId();
        /*       await this.lotteryService.eliminarTodosLosBoletosDeReserva(
          this.token,
          boletosLoteria,
          boletosLotto,
          boletosPozo,
          reservaId
        ); */


        Object.keys(_this13.ticketsLotto).forEach(key => {
          if (_this13.ticketsDisponibles && _this13.ticketsDisponibles.length != 0) {
            let deletedIndex = _this13.ticketsDisponibles.findIndex(x => x.identificador == key);

            if (deletedIndex != -1) _this13.ticketsDisponibles[deletedIndex].status = false;
          }
        });
        yield _this13.cart.borrarCarrito();
        yield _this13.getCarritoTickets(); //this.getTotal();

        _this13.isLoading = false;
      } catch (e) {
        _this13.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this13.openError(errorMessage);
      }
    })();
  }

  getCarritoTickets() {
    var _this14 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this14.cart.buscarCarrito();
      _this14.ticketsLoteria = carrito.loteria;
      _this14.ticketsLotto = carrito.lotto;
      _this14.ticketsMillonaria = carrito.millonaria;
      _this14.ticketsPozo = carrito.pozo;
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

  openValidationError(msg) {
    this.validationErrorMessage = msg;
    this.isValidationError = true;
  }

  closeValidationError() {
    this.isValidationError = false;
    this.validationErrorMessage = '';
    window.location.reload();
  }

}

LottoComponent.ɵfac = function LottoComponent_Factory(t) {
  return new (t || LottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_2__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_juegos_lotto_services_venta_service__WEBPACK_IMPORTED_MODULE_3__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_4__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router));
};

LottoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: LottoComponent,
  selectors: [["app-lotto"]],
  decls: 11,
  vars: 13,
  consts: [["class", "contenedor_loteria", 4, "ngIf"], ["tipoLoteria", "lotto", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteLoteriaFraccion", "deleteMillonariaTicket", "emitirCompra", "eliminarTodo"], ["loader", "lotto", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues", 4, "ngIf"], ["tipoLoteria", "2", "class", "paymentItem", 3, "resultados", "isLoteriaNacional", "close", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "volver", 4, "ngIf"], ["class", "paymentItem", 3, "message", "volver", "recarga", 4, "ngIf"], ["class", "paymentItem", 3, "message", 4, "ngIf"], [1, "contenedor_loteria"], [1, "ventasBox"], ["titulo", "Lotto", "color", "lotto", 1, "infoBox", 3, "sorteos", "loteria", "emitir"], [1, "contenedor_seleccion"], [1, "selectBox"], [1, "contenedor_select"], ["name", "", "id", "", 1, "select_option", 3, "ngModel", "ngModelChange"], ["value", "96", 1, "option"], ["value", "5", 1, "option"], ["value", "30", 1, "option"], ["value", "50", 1, "option"], [1, "numeros_suerte"], [1, "numeros"], ["type", "text", "name", "", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "1", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input1", ""], ["input2", ""], ["input3", ""], ["input4", ""], ["input5", ""], ["type", "text", "name", "", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "1", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", 3, "ngModel", "ngModelChange"], ["input6", ""], [1, "activado", 3, "click"], [1, "tagItem"], ["class", "contenedor_numeros_suerte", 4, "ngIf"], ["tipoLoteria", "lotto", 1, "ticketScroller", 3, "ticketsLoteria", "ticketsLotto", "ticketsMillonaria", "ticketsPozo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteLoteriaFraccion", "deleteMillonariaTicket", "emitirCompra", "eliminarTodo"], [1, "contenedor_numeros_suerte"], [4, "ngFor", "ngForOf"], ["size", "2px", "color", "gray"], [1, "contenedor_botones"], ["style-paginator", "", 3, "length", "pageSize", "page"], [1, "contenedor"], ["type", "checkbox", 3, "checked", "click"], [1, "contenedor_numeros"], [1, "contenedor_fracciones"], [4, "ngIf"], ["alt", "", 3, "src"], ["loader", "lotto", 3, "message"], [3, "msg", "closeError"], [1, "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues"], ["tipoLoteria", "2", 1, "paymentItem", 3, "resultados", "isLoteriaNacional", "close"], [1, "paymentItem", 3, "compra", "volver"], [1, "paymentItem", 3, "message", "volver", "recarga"], [1, "paymentItem", 3, "message"]],
  template: function LottoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ventas-menu-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, LottoComponent_div_1_Template, 39, 19, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-floating-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteLoteriaTicket", function LottoComponent_Template_app_floating_menu_deleteLoteriaTicket_2_listener($event) {
        return ctx.deleteLoteriaTicket($event);
      })("deleteLottoTicket", function LottoComponent_Template_app_floating_menu_deleteLottoTicket_2_listener($event) {
        return ctx.deleteLottoTicket($event);
      })("deletePozoTicket", function LottoComponent_Template_app_floating_menu_deletePozoTicket_2_listener($event) {
        return ctx.deletePozoTicket($event);
      })("deleteLoteriaFraccion", function LottoComponent_Template_app_floating_menu_deleteLoteriaFraccion_2_listener($event) {
        return ctx.deleteLoteriaFraccion($event);
      })("deleteMillonariaTicket", function LottoComponent_Template_app_floating_menu_deleteMillonariaTicket_2_listener($event) {
        return ctx.deleteMillonariaTicket($event);
      })("emitirCompra", function LottoComponent_Template_app_floating_menu_emitirCompra_2_listener() {
        return ctx.comprar();
      })("eliminarTodo", function LottoComponent_Template_app_floating_menu_eliminarTodo_2_listener() {
        return ctx.deleteAllTickets();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, LottoComponent_app_loader_3_Template, 1, 1, "app-loader", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, LottoComponent_app_error_4_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, LottoComponent_app_error_5_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, LottoComponent_app_confirmacion_de_venta_6_Template, 1, 1, "app-confirmacion-de-venta", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, LottoComponent_app_instantaneas_7_Template, 1, 2, "app-instantaneas", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, LottoComponent_app_venta_finalizada_8_Template, 1, 1, "app-venta-finalizada", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, LottoComponent_app_saldo_insuficiente_9_Template, 1, 1, "app-saldo-insuficiente", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, LottoComponent_app_venta_cancelada_10_Template, 1, 1, "app-venta-cancelada", 8);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.showComponents);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx.ticketsLoteria)("ticketsLotto", ctx.ticketsLotto)("ticketsPozo", ctx.ticketsPozo)("ticketsMillonaria", ctx.ticketsMillonaria);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isValidationError);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.confirmacionDeCompra);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isInstantaneas);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.compraFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.saldoInsuficiente);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.compraCancelada);
    }
  },
  directives: [_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__.MenuHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__.FloatingMenuComponent, _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__.DetalleSorteoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__.AutoTabDirective, _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__.CarritoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__.StylePaginatorDirective, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__.ErrorComponent, _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmacionDeVentaComponent, _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__.InstantaneasComponent, _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__.VentaFinalizadaComponent, _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__.SaldoInsuficienteComponent, _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__.VentaCanceladaComponent],
  pipes: [_shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: [".contenedor[_ngcontent-%COMP%] {\n  \n  background: #ffffff;\n  border-radius: 20px;\n}\n.contenedor[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #b51f20;\n  margin: auto !important;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_numeros[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_fracciones[_ngcontent-%COMP%] {\n  border-radius: 0 0 10px 10px;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 35px !important;\n  font-weight: bold;\n  margin: 10px;\n  font-family: \"Monstserrat Bold\";\n  opacity: 0.7;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 0 0 10px 10px;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n  margin: 0 0 10px 0;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  width: 150px;\n}\n.contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 10px auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(4, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  \n  width: 25%;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  \n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 25px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  margin: 10px 10px 10px 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-size: 25px;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4.5px solid #b51f20;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  padding: 15px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_numeros[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_fracciones[_ngcontent-%COMP%] {\n  border-radius: 0 0 10px 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  background-color: #fff;\n  color: #444;\n  margin: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  margin: auto;\n  margin: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #b51f20;\n  font-family: \"Monstserrat Regular\";\n  background-color: #b51f20;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #fff;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b51f20;\n  border: 1px solid transparent;\n  color: #fff;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0 6px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   .activado[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, auto);\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: auto;\n    margin: 10px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBUko7QUFVRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBUko7QUFXRTtFQUNFLHlCQXpCVTtFQTBCVixzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQVRKO0FBV0U7RUFDRSw0QkFBQTtBQVRKO0FBV0U7RUFDRSw0QkFBQTtBQVRKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFUSjtBQVdJO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFqRFU7RUFrRFYsWUFBQTtBQVROO0FBWUU7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7QUFWSjtBQVdJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQVVNO0VBQ0UsYUFBQTtBQVJSO0FBVU07RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQVJSO0FBZ0JBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFkRjtBQWdCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFkSjtBQWVJO0VBQ0UsV0FBQTtBQWJOO0FBZUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWVNO0VBQ0UsZUFBQTtBQWJSO0FBZU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWJSO0FBY1E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBWlY7QUFjVTtFQUNFLG1DQWxITztFQW1IUCxlQUFBO0FBWlo7QUFlVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0ExSEs7RUEySEwsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQWRaO0FBZ0JZO0VBQ0Usa0JBQUE7QUFkZDtBQWdCWTtFQUNFLGFBQUE7QUFkZDtBQWtCVTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBaEJaO0FBa0JZO0VBQ0U7O0dBQUE7RUFHQSxVQUFBO0VBQ0EsZ0JBQUE7QUFoQmQ7QUFpQmM7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZmhCO0FBZ0JnQjtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFkbEI7QUFrQlk7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaEJkO0FBaUJjO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFmaEI7QUFpQmM7RUFDRSx5QkF6TEY7RUEwTEUsbUJBQUE7RUFDQSxzQ0FBQTtBQWZoQjtBQXFCUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBbkJWO0FBcUJVO0VBQ0UsbUNBN01PO0VBOE1QLGVBQUE7QUFuQlo7QUFzQlU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBcEJaO0FBcUJZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBL05LO0VBZ09MLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFuQmQ7QUFzQlk7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBcEJkO0FBeUJRO0VBQ0UseUJBM09JO0VBNE9KLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBclBPO0VBc1BQLGVBQUE7RUFDQSxlQUFBO0FBdkJWO0FBeUJVO0VBQ0UsdUJBQUE7RUFDQSxjQXpQRTtFQTBQRixzQ0FBQTtBQXZCWjtBQTJCTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQXpCUjtBQTJCUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQTFRUztFQTJRVCxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXpCVjtBQTJCVTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBekJaO0FBOEJNO0VBQ0UsbUNBcFNTO0VBcVNULGVBQUE7QUE1QlI7QUErQk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQTdCUjtBQStCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0FBOUJWO0FBZ0NVO0VBQ0UsYUFBQTtBQTlCWjtBQWdDWTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEvQmQ7QUFpQ2M7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBL0JoQjtBQWtDYztFQUNFLHlCQTFVRjtFQTJVRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBaENoQjtBQWtDYztFQUNFLDRCQUFBO0FBaENoQjtBQWtDYztFQUNFLDRCQUFBO0FBaENoQjtBQW1DYztFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQWpDaEI7QUFrQ2dCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWhDbEI7QUFrQ2tCO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBaENwQjtBQW9DZ0I7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBbENsQjtBQW9Da0I7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFsQ3BCO0FBMENRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBeENWO0FBNENNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUExQ1I7QUE0Q1E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQTFDVjtBQTZDUTtFQUNFLGVBQUE7QUEzQ1Y7QUE4Q1E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBelpPO0VBMFpQLHlCQXZaSTtFQXdaSixXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTVDVjtBQThDVTtFQUNFLG9CQUFBO0FBNUNaO0FBK0NVO0VBQ0Usc0JBQUE7QUE3Q1o7QUFnRFU7RUFDRSx1QkFBQTtFQUNBLGNBdmFFO0VBd2FGLHNDQUFBO0FBOUNaO0FBaURVO0VBQ0UsWUFBQTtBQS9DWjtBQW9ETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWxEUjtBQW9EUTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBL2JJO0VBZ2NKLCtCQXJjTTtFQXNjTixlQUFBO0VBQ0EsZUFBQTtBQWxEVjtBQW9EVTtFQUNFLHlCQXJjRTtFQXNjRiw2QkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQWxEWjtBQXdERTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdERKO0FBMERBO0VBQ0U7SUFDRSxzQkFBQTtFQXZERjtFQXdERTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQXRESjtFQXlERTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUF2REo7RUF5REk7SUFDRSxlQUFBO0VBdkROO0VBeURNO0lBQ0UsV0FBQTtFQXZEUjtFQTJESTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBekROO0VBMERNO0lBQ0UsZUFBQTtJQUNBLHVCQUFBO0VBeERSO0VBeURRO0lBQ0Usd0JBQUE7RUF2RFY7RUEwRFE7SUFDRSxnQkFBQTtFQXhEVjtFQThETTtJQUNFLHNDQUFBO0VBNURSO0VBK0RNO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQTdEUjtFQWtFRTtJQUNFLGFBQUE7RUFoRUo7QUFDRiIsImZpbGUiOiJsb3R0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1sb3R0bzogI2I1MWYyMDtcblxuLy8gRXN0aWxvcyBkZWwgY29tcG9uZW50ZSBzZWxlY2Npb24gTG90dG9cbi5jb250ZW5lZG9yIHtcbiAgLyogUmVjdGFuZ2xlIDQwICovXG5cbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICBociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLmNvbnRlbmVkb3JfbnVtZXJvcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IC5jb250ZW5lZG9yX2ZyYWNjaW9uZXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIH1cbiAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICB9XG4gIC5jb250ZW5lZG9yX2ZyYWNjaW9uZXMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICBwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBFc3RpbG9zIGNvbXBvbmVudGUgc2VsZWNpY29uIExvdHRvXG5cbi5jb250ZW5lZG9yX2xvdGVyaWEge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG5cbiAgLnZlbnRhc0JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgLmluZm9Cb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jb250ZW5lZG9yX3NlbGVjY2lvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAudGFnSXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RCb3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuY29udGVuZWRvcl9zZWxlY3Qge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rfb3B0aW9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcblxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3B0aW9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblxuICAgICAgICAgICAgLm9wdGlvbiB7XG4gICAgICAgICAgICAgIC8qICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICovXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAvKiBmaXggc3BlY2lmaWMgZm9yIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAtMTAwMDBweDtcbiAgICAgICAgICAgICAgJiArIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubnVtZXJvc19zdWVydGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubnVtZXJvcyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50YWJzX2FuaW1hbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAxMnB4IDE1cHggMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgICAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gICAgICAgICAgZ2FwOiAxMHB4IDE1cHg7XG5cbiAgICAgICAgICB0ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDdweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY29udGVuZWRvcl9udW1lcm9zIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLmNvbnRlbmVkb3JfZnJhY2Npb25lcyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW5lZG9yX3NlbGVjY2lvbl9udW1lcm8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAuaW1hZ2VuX2FuaW1hbCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDhweDtcblxuICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm51bWVyb3Mge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbmVkb3JfYm90b25lcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5kZXNhcGFyZWNlciB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXBhcmVjZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3RvbiB7XG4gICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkgaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSBpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwcHggMCAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3Rvbl9ib2xldG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE3cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudGlja2V0U2Nyb2xsZXIge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29udGVuZWRvcl9sb3RlcmlhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5pbmZvQm94IHtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcblxuICAgICAgLnNlbGVjdEJveCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuY29udGVuZWRvcl9zZWxlY3Qge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5udW1lcm9zX3N1ZXJ0ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDZweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY3RpdmFkbyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRTY3JvbGxlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 6465:
/*!**********************************************************************!*\
  !*** ./src/app/ventas/containers/millonaria/millonaria.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MillonariaComponent": () => (/* binding */ MillonariaComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/pagos.service */ 6862);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _juegos_millonaria_services_venta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/millonaria/services/venta.service */ 5095);
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/floating-menu/floating-menu.component */ 647);
/* harmony import */ var _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/detalle-sorteo/detalle-sorteo.component */ 9927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/autotab.directive */ 3444);
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/carrito/carrito.component */ 1616);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/style-paginator.directive */ 6560);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);
/* harmony import */ var _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/confirmacion-de-venta/confirmacion-de-venta.component */ 5543);
/* harmony import */ var _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/instantaneas/instantaneas.component */ 1022);
/* harmony import */ var _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/venta-finalizada/venta-finalizada.component */ 8332);
/* harmony import */ var _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/saldo-insuficiente/saldo-insuficiente.component */ 5022);
/* harmony import */ var _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/venta-cancelada/venta-cancelada.component */ 3983);
/* harmony import */ var _shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/paginate.pipe */ 2343);

























function MillonariaComponent_div_1_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MillonariaComponent_div_1_div_7_div_1_Template_input_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const serie_r16 = restoredCtx.$implicit;
      const i_r17 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r18.agregar($event, serie_r16, i_r17);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const serie_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("id", "serie-", serie_r16.serie, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", serie_r16.status)("value", serie_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("for", "serie-", serie_r16.serie, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](serie_r16.serie);
  }
}

function MillonariaComponent_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MillonariaComponent_div_1_div_7_div_1_Template, 5, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r9.seleccionSeries);
  }
}

function MillonariaComponent_div_1_div_37_tr_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MillonariaComponent_div_1_div_37_tr_3_div_19_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const item_r24 = restoredCtx.$implicit;
      const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r26.fraccionSeleccionada(ctx_r26.page_size * (ctx_r26.page_number - 1) + i_r22, item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const ticket_r21 = ctx_r29.$implicit;
    const i_r22 = ctx_r29.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "", ticket_r21.identificador, "-", item_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", ctx_r23.isSelected(ctx_r23.page_size * (ctx_r23.page_number - 1) + i_r22, item_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("for", "", ticket_r21.identificador, "-", item_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r24);
  }
}

function MillonariaComponent_div_1_div_37_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Serie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Seleccionar todas las fracciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MillonariaComponent_div_1_div_37_tr_3_Template_input_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const i_r22 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r30.seleccionarTodo(ctx_r30.page_size * (ctx_r30.page_number - 1) + i_r22);
    })("ngModelChange", function MillonariaComponent_div_1_div_37_tr_3_Template_input_ngModelChange_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const i_r22 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r32.allFractions[ctx_r32.page_size * (ctx_r32.page_number - 1) + i_r22] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, MillonariaComponent_div_1_div_37_tr_3_div_19_Template, 4, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ticket_r21.combinacion1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ticket_r21.combinacion2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r20.allFractions[ctx_r20.page_size * (ctx_r20.page_number - 1) + i_r22]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ticket_r21.fraccionesDisponibles);
  }
}

function MillonariaComponent_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, MillonariaComponent_div_1_div_37_tr_3_Template, 21, 4, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "paginacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "hr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "mat-paginator", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("page", function MillonariaComponent_div_1_div_37_Template_mat_paginator_page_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r33.handlerPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](4, 3, ctx_r14.ticketsDisponibles, ctx_r14.page_size, ctx_r14.page_number));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("length", ctx_r14.ticketsDisponibles.length)("pageSize", ctx_r14.page_size);
  }
}

function MillonariaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-detalle-sorteo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitir", function MillonariaComponent_div_1_Template_app_detalle_sorteo_emitir_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r35.procesaEmitir($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Selecciona tus series de la suerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, MillonariaComponent_div_1_div_7_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "\u00BFC\u00F3mo quieres comprar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MillonariaComponent_div_1_Template_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r37.tipoSeleccion = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Selecci\u00F3n individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "5 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "30 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, "50 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23, "Ingresa tu n\u00FAmero de la suerte:");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MillonariaComponent_div_1_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r38.combinacionDeLaSuerte[0] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MillonariaComponent_div_1_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r39.combinacionDeLaSuerte[1] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MillonariaComponent_div_1_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r40.combinacionDeLaSuerte[2] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MillonariaComponent_div_1_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r41.combinacionDeLaSuerte[3] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MillonariaComponent_div_1_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r42.buscarNumero();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34, " BUSCAR BOLETOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36, " Si quieres cambiar tu n\u00FAmero, ingr\u00E9salo nuevamente y haz click en \"Buscar n\u00FAmero\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, MillonariaComponent_div_1_div_37_Template, 8, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "app-carrito", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitirCompra", function MillonariaComponent_div_1_Template_app_carrito_emitirCompra_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r43.comprar();
    })("eliminarTodo", function MillonariaComponent_div_1_Template_app_carrito_eliminarTodo_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r44.deleteAllTickets();
    })("deleteLoteriaTicket", function MillonariaComponent_div_1_Template_app_carrito_deleteLoteriaTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r45.deleteLoteriaTicket($event);
    })("deleteLottoTicket", function MillonariaComponent_div_1_Template_app_carrito_deleteLottoTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r46.deleteLottoTicket($event);
    })("deletePozoTicket", function MillonariaComponent_div_1_Template_app_carrito_deletePozoTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r47.deletePozoTicket($event);
    })("deleteMillonariaTicket", function MillonariaComponent_div_1_Template_app_carrito_deleteMillonariaTicket_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r48.deleteMillonariaTicket($event);
    })("deleteLoteriaFraccion", function MillonariaComponent_div_1_Template_app_carrito_deleteLoteriaFraccion_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r49.deleteLoteriaFraccion($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](28);

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](30);

    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](32);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("sorteos", ctx_r0.sorteo)("loteria", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.seleccionSeries.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r0.tipoSeleccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r11)("ngModel", ctx_r0.combinacionDeLaSuerte[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r12)("ngModel", ctx_r0.combinacionDeLaSuerte[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("appAutoTab", _r13)("ngModel", ctx_r0.combinacionDeLaSuerte[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx_r0.ticketsLoteria)("ticketsMillonaria", ctx_r0.ticketsMillonaria)("ticketsLotto", ctx_r0.ticketsLotto)("ticketsPozo", ctx_r0.ticketsPozo);
  }
}

function MillonariaComponent_app_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader", 58);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

function MillonariaComponent_app_error_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function MillonariaComponent_app_error_4_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r50.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r2.errorMessage);
  }
}

function MillonariaComponent_app_error_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function MillonariaComponent_app_error_5_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r52.closeValidationError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r3.validationErrorMessage);
  }
}

function MillonariaComponent_app_confirmacion_de_venta_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-confirmacion-de-venta", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("compraConfirmada", function MillonariaComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraConfirmada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r54.confirmarCompra();
    })("compraCancelada", function MillonariaComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraCancelada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r56.cancelarCompra();
    })("comprarDespues", function MillonariaComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_comprarDespues_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r57.dismissCompras();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r4.detalleCompra);
  }
}

function MillonariaComponent_app_instantaneas_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-instantaneas", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function MillonariaComponent_app_instantaneas_7_Template_app_instantaneas_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r58.abrirFinalizar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("resultados", ctx_r5.instantaneas)("isLoteriaNacional", true);
  }
}

function MillonariaComponent_app_venta_finalizada_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-venta-finalizada", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function MillonariaComponent_app_venta_finalizada_8_Template_app_venta_finalizada_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r60.finalizarCompra();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r6.detalleCompra);
  }
}

function MillonariaComponent_app_saldo_insuficiente_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-saldo-insuficiente", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function MillonariaComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r62.dismissCompras();
    })("recarga", function MillonariaComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_recarga_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r64.irARecarga();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r7.recargaDeSaldoMessage);
  }
}

function MillonariaComponent_app_venta_cancelada_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-venta-cancelada", 64);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r8.cancelMessage);
  }
}

class MillonariaComponent {
  constructor(lotteryService, actRoute, paymentService, cart, millonaria, router, changeDetectorRef) {
    this.lotteryService = lotteryService;
    this.actRoute = actRoute;
    this.paymentService = paymentService;
    this.cart = cart;
    this.millonaria = millonaria;
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.combinacionDeLaSuerte = ['', '', '', ''];
    this.seriesTabs = [];
    this.page_size = 9;
    this.page_number = 1;
    this.showNumeros = false;
    this.seriesReady = false;
    this.ticketsMillonaria = {};
    this.tipoSeleccion = 96;
    this.showComponents = false;
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
    this.cancelMessage = '';
    this.isInstantaneas = false;
    this.ticketsLoteria = {};
    this.ticketsPozo = {};
    this.ticketsLotto = {};
    this.isError = false;
    this.isValidationError = false;
    this.actRoute.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  getTotal() {
    this.changeDetectorRef.detectChanges();
    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }

  agregar(event, serie, i) {
    if (this.seleccionSeries[i].status === false) {
      if (this.seriesTabs.length < 4) {
        this.seleccionSeries[i].status = true;
        this.seriesTabs.push(this.seleccionSeries[i]);
      } else {
        event.preventDefault();
        this.openError('Solo puedes seleccionar un máximo de 4 series.');
        this.changeDetectorRef.detectChanges();
        this.seleccionSeries[i].status = false;
        this.changeDetectorRef.markForCheck();
      }
    } else {
      this.seleccionSeries[i].status = false;
      this.seriesTabs = this.seriesTabs.filter(element => {
        return element.serie !== serie.serie;
      });
    }

    localStorage.setItem('seriesSeleccionadas', JSON.stringify(this.seleccionSeries));
  }

  fraccionSeleccionada(idTicket, fraccion) {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.changeDetectorRef.detectChanges();

        if (_this.allFractions[idTicket]) _this.allFractions[idTicket] = false;

        _this.changeDetectorRef.markForCheck();

        let index = _this.ticketsDisponibles[idTicket].seleccionados.indexOf(fraccion);

        if (index != -1) {
          let identificador = _this.ticketsDisponibles[idTicket].identificador;
          let ticketMillonaria = _this.ticketsMillonaria[identificador];
          let aux = {
            ticket: ticketMillonaria,
            fraccion
          };
          yield _this.deleteMillonariaFraccion(aux);

          _this.changeDetectorRef.detectChanges(); //this.ticketsDisponibles[idTicket].seleccionados.pop();


          _this.ticketsDisponibles[idTicket].seleccionados.splice(index, 1);

          _this.changeDetectorRef.markForCheck();
        } else {
          let count = (yield _this.cart.getCount()) + 1;

          _this.changeDetectorRef.detectChanges();

          _this.ticketsDisponibles[idTicket].seleccionados.push(fraccion);

          _this.changeDetectorRef.markForCheck();

          if (count <= 1000) {
            yield _this.pushToSeleccionado(_this.ticketsDisponibles[idTicket], [fraccion]);
          } else {
            _this.changeDetectorRef.detectChanges();

            _this.ticketsDisponibles[idTicket].seleccionados.pop();

            _this.changeDetectorRef.markForCheck();

            let errorMessage = 'Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.';

            _this.openError(errorMessage);
          }
        }

        yield _this.setDescuento(1);
      } catch (e) {
        _this.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this.openError(errorMessage);
      }
    })();
  }

  remover(serie) {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.seriesTabs = _this2.seriesTabs.filter(element => {
        return element.nombre !== serie;
      });
      _this2.seleccionSeries = _this2.seleccionSeries.map(element => {
        if (element.nombre === serie) {
          element.status = false;
        }

        return element;
      });
      yield _this2.cart.setCarritoMillonaria(_this2.ticketsMillonaria);
    })();
  }

  seleccionarTodo(id) {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this3.changeDetectorRef.detectChanges();

        _this3.allFractions[id] = !_this3.allFractions[id];

        _this3.changeDetectorRef.markForCheck(); //      let fracciones = [...this.ticketsDisponibles[id].fraccionesDisponibles];


        let fracciones = [..._this3.ticketsDisponibles[id].fraccionesDisponibles.filter(x => !_this3.ticketsDisponibles[id].seleccionados.includes(x))];

        if (_this3.allFractions[id]) {
          let count = (yield _this3.cart.getCount()) + (fracciones.length - _this3.ticketsDisponibles[id].seleccionados.length);

          if (count <= 1000) {
            _this3.ticketsDisponibles[id].seleccionados = _this3.ticketsDisponibles[id].seleccionados.concat(fracciones);
            yield _this3.pushToSeleccionado(_this3.ticketsDisponibles[id], fracciones);
          } else {
            _this3.changeDetectorRef.detectChanges();

            _this3.allFractions[id] = false;

            _this3.changeDetectorRef.markForCheck();

            let errorMessage = 'Incluir los boletos excede el límite de compra. Si quieres escoger estos boletos, por favor elimina algunos de tu carrito.';

            _this3.openError(errorMessage);
          }
        } else {
          let identificador = _this3.ticketsDisponibles[id].identificador;
          yield _this3.deleteLoteriaTicket(_this3.ticketsLoteria[identificador]);
          _this3.ticketsDisponibles[id].seleccionados = [];
        }

        yield _this3.setDescuento(1);
      } catch (e) {
        _this3.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this3.openError(errorMessage);
      }
    })();
  }

  pushToSeleccionado(ticket, fracciones) {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this4.loadingMessage = 'Agregando boleto al carrito';
        _this4.isLoading = true;
        yield _this4.getCarritoTickets();
        let subtotalTest = parseFloat(_this4.sorteoSeleccionado.precio) * fracciones.length;
        let subtotal = parseFloat(_this4.sorteoSeleccionado.precio) * ticket.seleccionados.length;
        let aux = {
          ticket,
          fracciones,
          sorteo: _this4.sorteoSeleccionado,
          subtotal
        };
        let hasBalance = yield _this4.paymentService.hasBalance(subtotalTest, _this4.token);

        if (hasBalance) {
          _this4.ticketsMillonaria[ticket.identificador] = aux;

          let reservaId = _this4.cart.getReservaId();

          let response = yield _this4.lotteryService.reservarBoletos(_this4.token, aux, 14, reservaId);

          _this4.cart.setReservaId(response);

          yield _this4.cart.setCarrito(aux, 14);
          yield _this4.cart.setCarritoMillonaria(_this4.ticketsMillonaria);
          yield _this4.getCarritoTickets(); //this.getTotal();

          _this4.isLoading = false;
        } else {
          _this4.isLoading = false;
          let message = 'Tu saldo es insuficiente para agregar este boleto al carrito';

          var idTicket = _this4.ticketsDisponibles.findIndex(p => p.identificador == ticket.identificador);

          _this4.ticketsDisponibles[idTicket].seleccionados = _this4.ticketsDisponibles[idTicket].seleccionados.filter(el => !fracciones.includes(el));
          _this4.allFractions[idTicket] = false;

          _this4.recargarSaldo(message);
        }
      } catch (e) {
        _this4.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this4.openError(errorMessage);
      }
    })();
  }

  isSelected(idTicket, idFraccion) {
    let ticket = this.ticketsDisponibles[idTicket];

    if (ticket.seleccionados.indexOf(idFraccion) != -1) {
      return true;
    } else {
      return false;
    }
  }

  handlerPage(e) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ordenaCombinacion(a, b) {
    return a - b;
  }

  buscarNumero() {
    var _this5 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this5.loadingMessage = 'Buscando combinaciones disponibles';
        _this5.isLoading = true;
        _this5.showNumeros = false;

        let combinacion = _this5.combinacionDeLaSuerte.map(element => {
          element = element.toString();

          if (element == null || element == undefined || element == '') {
            return '_';
          } else {
            return element;
          }
        });

        let combinacionFigura = _this5.seriesTabs.map(serie => {
          return serie.serie;
        });

        combinacionFigura.sort(_this5.ordenaCombinacion);

        let authData = _this5.lotteryService.getAuthData();

        _this5.ticketsDisponibles = yield _this5.millonaria.obtenerTickets(_this5.sorteoSeleccionado.sorteo, combinacion.join(''), combinacionFigura.join(''), _this5.tipoSeleccion, authData);
        _this5.allFractions = [];

        _this5.ticketsDisponibles.forEach(ticket => {
          _this5.allFractions.push(false);
        });

        _this5.seleccionSeries = yield _this5.millonaria.obtenerSeries(_this5.sorteoSeleccionado.sorteo, authData);
        _this5.seriesTabs = [];
        _this5.combinacionDeLaSuerte = ['', '', '', ''];
        _this5.showNumeros = true;
        _this5.isLoading = false;
      } catch (e) {
        _this5.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this5.openError(errorMessage);
      }
    })();
  }

  procesaEmitir(sorteo) {
    var _this6 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this6.loadingMessage = 'Cargando la información del sorteo';
      _this6.isLoading = true;
      _this6.sorteoSeleccionado = sorteo;
      _this6.showNumeros = false;
      _this6.seleccionSeries = [];
      _this6.seriesTabs = [];

      let authData = _this6.lotteryService.getAuthData();

      _this6.seleccionSeries = yield _this6.millonaria.obtenerSeries(_this6.sorteoSeleccionado.sorteo, authData);
      _this6.isLoading = false;
    })();
  }

  abrirResumen() {
    this.router.navigate([`compra_tus_juegos/resumen/${this.token}`]);
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  comprar() {
    this.dismissCompras();
    let loteriaAux = this.ticketsLoteria;
    let loteria = [];

    for (let id in loteriaAux) {
      let aux = {};
      aux['combinacion1'] = loteriaAux[id].ticket.combinacion;
      aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(loteriaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = loteriaAux[id].tieneDescuento;
      aux['fecha'] = loteriaAux[id].sorteo.fecha;
      aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }

    let lottoAux = this.ticketsLotto;
    let lotto = [];

    for (let id in lottoAux) {
      let aux = {};
      aux['combinacion1'] = lottoAux[id].ticket.combinacion1;
      aux['combinacion2'] = lottoAux[id].ticket.combinacion2;
      aux['combinacion3'] = lottoAux[id].ticket.combinacion3;
      aux['combinacion4'] = lottoAux[id].ticket.combinacion4;
      aux['sorteo'] = lottoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(lottoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = lottoAux[id].tieneDescuento;
      aux['fecha'] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }

    let pozoAux = this.ticketsPozo;
    let pozo = [];

    for (let id in pozoAux) {
      let aux = {};
      aux['combinacion1'] = pozoAux[id].ticket.combinacion1;
      aux['combinacion2'] = pozoAux[id].ticket.combinacion2;
      aux['mascota'] = pozoAux[id].ticket.mascota;
      aux['sorteo'] = pozoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(pozoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = pozoAux[id].tieneDescuento;
      aux['fecha'] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }

    let millonariaAux = this.ticketsMillonaria;
    let millonaria = [];

    for (let id in millonariaAux) {
      let aux = {};
      aux['combinacion1'] = millonariaAux[id].ticket.combinacion1;
      aux['combinacion2'] = millonariaAux[id].ticket.combinacion2;
      aux['fracciones'] = millonariaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(millonariaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = millonariaAux[id].tieneDescuento;
      aux['fecha'] = millonariaAux[id].sorteo.fecha;
      aux['sorteo'] = millonariaAux[id].sorteo.sorteo;
      millonaria.push(aux);
    }

    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);
    this.detalleCompra = {
      loteria,
      millonaria,
      lotto,
      pozo,
      amount,
      amountConDesc
    };
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  confirmarCompra() {
    var _this7 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this7.isLoading = true;
        _this7.loadingMessage = 'Espera mientras procesamos tu compra';
        let hasBalance = yield _this7.paymentService.hasBalance(0, _this7.token);

        if (hasBalance) {
          let reservaId = _this7.lotteryService.getReservaId();

          let cartValidation = yield _this7.cart.validarCarrito(reservaId);

          if (cartValidation.status) {
            let response = yield _this7.paymentService.confirmarCompra(_this7.token, reservaId);
            _this7.isLoading = false;

            if (response.status) {
              if (response.instantanea.status) {
                _this7.dismissCompras();

                _this7.instantaneas = response.instantanea.data;
                _this7.isInstantaneas = true;
              } else {
                _this7.instantaneas = '';

                _this7.abrirFinalizar();
              }
            } else {
              _this7.cancelarCompra();
            }
          } else {
            _this7.openValidationError(cartValidation.message);
          }

          _this7.isLoading = false;
        } else {
          _this7.isLoading = false;
          let message = 'Tu saldo es insuficiente para realizar la compra';

          _this7.recargarSaldo(message);
        }
      } catch (e) {
        _this7.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this7.openError(errorMessage);
      }
    })();
  }

  abrirFinalizar() {
    var _this8 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this8.dismissCompras();

      yield _this8.cart.borrarCarrito();
      _this8.compraFinalizada = true;
    })();
  }

  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  irARecarga() {}

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  ngOnInit() {
    var _this9 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this9.isLoading = true;

        if (_this9.token) {
          let data = yield _this9.lotteryService.authUser(_this9.token);
        }

        yield _this9.getCarritoTickets(); //this.getTotal();
        //TODO: Preguntar como quiere que venga la variable tabs, si llena o no

        let authData = _this9.lotteryService.getAuthData();

        _this9.sorteo = yield _this9.millonaria.obtenerSorteo(authData);
        _this9.seleccionSeries = [];
        _this9.seleccionSeries = yield _this9.millonaria.obtenerSeries(_this9.sorteo[0].sorteo, authData);

        _this9.seleccionSeries.forEach(element => {
          _this9.seriesTabs.forEach(elemento => {
            if (elemento.nombre === element.nombre) {
              element.status = elemento.status;
            }
          });
        });

        localStorage.setItem('seriesSeleccionadas', JSON.stringify(_this9.seleccionSeries));
        _this9.descuentos = yield _this9.lotteryService.obtenerDescuentos();
        _this9.isLoading = false;
        _this9.showComponents = true;
      } catch (e) {
        _this9.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this9.openError(errorMessage);
      }
    })();
  }

  setDescuento(tipoLoteria) {
    var _this10 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return;

      let descuentos = _this10.descuentos.filter(element => parseInt(element.tipoLoteria) == tipoLoteria);

      for (let index = 0; index < descuentos.length; index++) {
        const element = descuentos[index];
        let conteo = yield _this10.cart.contarBoletos(element.sorteo, tipoLoteria);

        if (conteo >= parseInt(element.cantidad)) {
          yield _this10.cart.calcularDescuento(element);
        } else {
          yield _this10.cart.eliminarDescuento(element, tipoLoteria);
        }

        yield _this10.getCarritoTickets();
      }

      yield _this10.cart.setTotalConDesc();
    })();
  }

  deleteLoteriaTicket(data) {
    var _this11 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this11.loadingMessage = 'Removiendo boleto del carrito';
        _this11.isLoading = true;
        let ticket = _this11.ticketsLoteria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this11.lotteryService.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this11.lotteryService.eliminarBoletosDeReserva(_this11.token, ticket, sorteo, fracciones, 1, reservaId);
        }

        delete _this11.ticketsLoteria[identificador];
        yield _this11.cart.removeFromCart(ticket, 14);
        yield _this11.cart.setCarritoLoteria(_this11.ticketsLoteria);
        yield _this11.getCarritoTickets(); //this.getTotal();

        yield _this11.setDescuento(1);
        _this11.isLoading = false;
      } catch (e) {
        _this11.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this11.openError(errorMessage);
      }
    })();
  }

  deleteLottoTicket(data) {
    var _this12 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fraccion = '';
        _this12.loadingMessage = 'Removiendo boleto del carrito';
        _this12.isLoading = true;
        let ticket = _this12.ticketsLotto[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this12.lotteryService.getReservaId();

        let response = yield _this12.lotteryService.eliminarBoletosDeReserva(_this12.token, ticket, sorteo, fraccion, 2, reservaId);
        delete _this12.ticketsLotto[identificador];
        yield _this12.cart.removeFromCart(ticket, 2);
        yield _this12.cart.setCarritoLotto(_this12.ticketsLotto);
        yield _this12.getCarritoTickets(); //this.getTotal();

        yield _this12.setDescuento(2);
        _this12.isLoading = false;
      } catch (e) {
        _this12.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this12.openError(errorMessage);
      }
    })();
  }

  deleteLoteriaFraccion(data) {
    var _this13 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this13.loadingMessage = 'Removiendo boleto del carrito';
        _this13.isLoading = true;
        let identificador = data.ticket.ticket.identificador;
        let ticket = data.ticket.ticket;
        let sorteo = data.ticket.sorteo;
        let fraccion = data.fraccion;

        let reservaId = _this13.cart.getReservaId();

        let response = yield _this13.lotteryService.eliminarBoletosDeReserva(_this13.token, ticket, sorteo, [fraccion], 1, reservaId);

        let index = _this13.ticketsLoteria[identificador].ticket.seleccionados.findIndex(x => x == fraccion);

        _this13.ticketsLoteria[identificador].ticket.seleccionados.splice(index, 1);

        if (_this13.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
          delete _this13.ticketsLoteria[identificador];
        }

        yield _this13.cart.removeFromCart(ticket, 1);
        yield _this13.cart.setCarritoLoteria(_this13.ticketsLoteria);
        yield _this13.getCarritoTickets(); //this.getTotal();

        yield _this13.setDescuento(1);
        _this13.isLoading = false;
      } catch (e) {
        _this13.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this13.openError(errorMessage);
      }
    })();
  }

  deleteMillonariaFraccion(data) {
    var _this14 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this14.loadingMessage = 'Removiendo boleto del carrito';
        _this14.isLoading = true;
        yield _this14.getCarritoTickets();
        let identificador = data.ticket.ticket.identificador;
        let ticket = data.ticket.ticket;
        let sorteo = data.ticket.sorteo;
        let fraccion = data.fraccion;

        let reservaId = _this14.cart.getReservaId();

        let response = yield _this14.lotteryService.eliminarBoletosDeReserva(_this14.token, ticket, sorteo, [fraccion], 14, reservaId);

        let indexA = _this14.ticketsMillonaria[identificador].ticket.seleccionados.findIndex(x => x == fraccion);

        _this14.ticketsMillonaria[identificador].ticket.seleccionados.splice(indexA, 1);

        let indexB = _this14.ticketsMillonaria[identificador].fracciones.findIndex(x => x == fraccion);

        _this14.ticketsMillonaria[identificador].fracciones.splice(indexB, 1);

        if (_this14.ticketsMillonaria[identificador].ticket.seleccionados.length == 0) {
          yield _this14.cart.removeFromCart(_this14.ticketsMillonaria[identificador], 1);
          delete _this14.ticketsMillonaria[identificador];
        } else {
          yield _this14.cart.setCarrito(_this14.ticketsMillonaria[identificador], 1);
          _this14.ticketsMillonaria[identificador].subtotal -= parseFloat(sorteo.precio);
        }

        yield _this14.cart.setCarritoMillonaria(_this14.ticketsMillonaria); //this.getTotal();

        yield _this14.setDescuento(14);
        _this14.isLoading = false;
      } catch (e) {
        _this14.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this14.openError(errorMessage);
      }
    })();
  }

  deleteMillonariaTicket(data) {
    var _this15 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this15.getCarritoTickets();
        _this15.loadingMessage = 'Removiendo boleto del carrito';
        _this15.isLoading = true;
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        let ticket = _this15.ticketsMillonaria[identificador].ticket;
        let sorteo = _this15.ticketsMillonaria[identificador].sorteo;

        let reservaId = _this15.lotteryService.getReservaId();

        let response = yield _this15.lotteryService.eliminarBoletosDeReserva(_this15.token, ticket, sorteo, fracciones, 14, reservaId);
        delete _this15.ticketsMillonaria[identificador];
        yield _this15.cart.removeFromCart(ticket, 14);
        yield _this15.cart.setCarritoMillonaria(_this15.ticketsMillonaria);

        if (_this15.ticketsDisponibles && _this15.ticketsDisponibles.length) {
          let deletedIndex = _this15.ticketsDisponibles.findIndex(x => x.identificador === identificador);

          if (deletedIndex != -1) _this15.ticketsDisponibles[deletedIndex].status = false;
        }

        yield _this15.getCarritoTickets(); //this.getTotal();

        yield _this15.setDescuento(14);
        _this15.isLoading = false;
      } catch (e) {
        _this15.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this15.openError(errorMessage);
      }
    })();
  }

  deletePozoTicket(data) {
    var _this16 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this16.getCarritoTickets();
        _this16.loadingMessage = 'Removiendo boleto del carrito';
        _this16.isLoading = true;
        let identificador = data.ticket.identificador;
        let fraccion = '';
        let ticket = _this16.ticketsPozo[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this16.cart.getReservaId();

        let response = yield _this16.lotteryService.eliminarBoletosDeReserva(_this16.token, ticket, sorteo, fraccion, 5, reservaId);
        delete _this16.ticketsPozo[identificador];
        yield _this16.cart.removeFromCart(ticket, 5);
        yield _this16.cart.setCarritoPozo(_this16.ticketsPozo); //this.getTotal();

        yield _this16.setDescuento(5);
        _this16.isLoading = false;
      } catch (e) {
        _this16.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this16.openError(errorMessage);
      }
    })();
  }

  deleteAllTickets() {
    var _this17 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this17.loadingMessage = 'Removiendo boletos del carrito';
        _this17.isLoading = true;
        let boletosLoteria = Object.keys(_this17.ticketsLoteria).map(key => {
          return {
            ticket: _this17.ticketsLoteria[key].ticket,
            sorteo: _this17.ticketsLoteria[key].sorteo
          };
        });
        let boletosLotto = Object.keys(_this17.ticketsLotto).map(key => {
          return {
            ticket: _this17.ticketsLotto[key].ticket,
            sorteo: _this17.ticketsLotto[key].sorteo
          };
        });
        let boletosMillonaria = Object.keys(_this17.ticketsMillonaria).map(key => {
          return {
            ticket: _this17.ticketsMillonaria[key].ticket,
            sorteo: _this17.ticketsMillonaria[key].sorteo
          };
        });

        let reservaId = _this17.lotteryService.getReservaId();
        /*       await this.lotteryService.eliminarTodosLosBoletosDeReserva(
          this.token,
          boletosLoteria,
          boletosLotto,
          boletosMillonaria,
          reservaId
        ); */


        Object.keys(_this17.ticketsMillonaria).forEach(key => {
          if (_this17.ticketsDisponibles && _this17.ticketsDisponibles.length != 0) {
            let deletedIndex = _this17.ticketsDisponibles.findIndex(x => x.identificador == key);

            if (deletedIndex != -1) _this17.ticketsDisponibles[deletedIndex].status = false;
          }
        });
        yield _this17.cart.borrarCarrito();
        yield _this17.getCarritoTickets(); //this.getTotal();

        _this17.isLoading = false;
      } catch (e) {
        _this17.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this17.openError(errorMessage);
      }
    })();
  }

  getCarritoTickets() {
    var _this18 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this18.cart.buscarCarrito();
      _this18.ticketsLoteria = carrito.loteria;
      _this18.ticketsLotto = carrito.lotto;
      _this18.ticketsMillonaria = carrito.millonaria;
      _this18.ticketsPozo = carrito.pozo;
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

  openValidationError(msg) {
    this.validationErrorMessage = msg;
    this.isValidationError = true;
  }

  closeValidationError() {
    this.isValidationError = false;
    this.validationErrorMessage = '';
    window.location.reload();
  }

}

MillonariaComponent.ɵfac = function MillonariaComponent_Factory(t) {
  return new (t || MillonariaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_2__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_juegos_millonaria_services_venta_service__WEBPACK_IMPORTED_MODULE_4__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef));
};

MillonariaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: MillonariaComponent,
  selectors: [["app-millonaria"]],
  decls: 11,
  vars: 13,
  consts: [["class", "contenedor_loteria", 4, "ngIf"], ["tipoLoteria", "millonaria", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion"], ["loader", "millonaria", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues", 4, "ngIf"], ["tipoLoteria", "14", "class", "paymentItem", 3, "resultados", "isLoteriaNacional", "close", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "volver", 4, "ngIf"], ["class", "paymentItem", 3, "message", "volver", "recarga", 4, "ngIf"], ["class", "paymentItem", 3, "message", 4, "ngIf"], [1, "contenedor_loteria"], [1, "ventasBox"], ["titulo", "La Millonaria", "color", "millonaria", 1, "infoBox", 3, "sorteos", "loteria", "emitir"], [1, "contendor_seleccion"], [1, "contenedor_select_animales"], ["class", "options", 4, "ngIf"], [1, "selectBox"], [1, "contenedor_select"], ["name", "", "id", "", 1, "select_option", 3, "ngModel", "ngModelChange"], ["value", "96", 1, "option"], ["value", "5", 1, "option"], ["value", "30", 1, "option"], ["value", "50", 1, "option"], [1, "numeros_suerte"], [1, "numeros"], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte0", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input1", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte1", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input2", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte2", 3, "appAutoTab", "ngModel", "ngModelChange"], ["input3", ""], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]*", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", "name", "combinacionDeLaSuerte3", 3, "ngModel", "ngModelChange"], ["input4", ""], [1, "activado", 3, "click"], [1, "tagItem"], ["class", "contenedor_numeros_suerte", 4, "ngIf"], ["tipoLoteria", "millonaria", 1, "ticketScroller", 3, "ticketsLoteria", "ticketsMillonaria", "ticketsLotto", "ticketsPozo", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion"], [1, "options"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "option"], ["type", "checkbox", "name", "serie", 3, "checked", "value", "id", "click"], [3, "for"], [1, "contenedor_numeros_suerte"], [4, "ngFor", "ngForOf"], ["size", "2px", "color", "gray", 2, "width", "100%"], [1, "contenedor_botones"], ["style-paginator", "", 3, "length", "pageSize", "page"], [1, "tooltip"], [1, "contenedor_numeros"], [1, "combinationBox"], [1, "serieBox"], [1, "serieTitle"], [1, "serieItem"], [1, "seleccionAll"], ["type", "checkbox", 2, "position", "relative", "width", "20px", "opacity", "1", "margin-left", "5px", 3, "ngModel", "click", "ngModelChange"], [1, "contenedor_fracciones"], ["class", "fracciones", 4, "ngFor", "ngForOf"], [1, "fracciones"], ["type", "checkbox", 1, "checkbox", 3, "checked", "id", "click"], ["loader", "millonaria", 3, "message"], [3, "msg", "closeError"], [1, "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues"], ["tipoLoteria", "14", 1, "paymentItem", 3, "resultados", "isLoteriaNacional", "close"], [1, "paymentItem", 3, "compra", "volver"], [1, "paymentItem", 3, "message", "volver", "recarga"], [1, "paymentItem", 3, "message"]],
  template: function MillonariaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ventas-menu-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MillonariaComponent_div_1_Template, 39, 16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-floating-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitirCompra", function MillonariaComponent_Template_app_floating_menu_emitirCompra_2_listener() {
        return ctx.comprar();
      })("eliminarTodo", function MillonariaComponent_Template_app_floating_menu_eliminarTodo_2_listener() {
        return ctx.deleteAllTickets();
      })("deleteLoteriaTicket", function MillonariaComponent_Template_app_floating_menu_deleteLoteriaTicket_2_listener($event) {
        return ctx.deleteLoteriaTicket($event);
      })("deleteLottoTicket", function MillonariaComponent_Template_app_floating_menu_deleteLottoTicket_2_listener($event) {
        return ctx.deleteLottoTicket($event);
      })("deletePozoTicket", function MillonariaComponent_Template_app_floating_menu_deletePozoTicket_2_listener($event) {
        return ctx.deletePozoTicket($event);
      })("deleteMillonariaTicket", function MillonariaComponent_Template_app_floating_menu_deleteMillonariaTicket_2_listener($event) {
        return ctx.deleteMillonariaTicket($event);
      })("deleteLoteriaFraccion", function MillonariaComponent_Template_app_floating_menu_deleteLoteriaFraccion_2_listener($event) {
        return ctx.deleteLoteriaFraccion($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, MillonariaComponent_app_loader_3_Template, 1, 1, "app-loader", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, MillonariaComponent_app_error_4_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, MillonariaComponent_app_error_5_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, MillonariaComponent_app_confirmacion_de_venta_6_Template, 1, 1, "app-confirmacion-de-venta", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, MillonariaComponent_app_instantaneas_7_Template, 1, 2, "app-instantaneas", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, MillonariaComponent_app_venta_finalizada_8_Template, 1, 1, "app-venta-finalizada", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, MillonariaComponent_app_saldo_insuficiente_9_Template, 1, 1, "app-saldo-insuficiente", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, MillonariaComponent_app_venta_cancelada_10_Template, 1, 1, "app-venta-cancelada", 8);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.showComponents);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx.ticketsLoteria)("ticketsLotto", ctx.ticketsLotto)("ticketsPozo", ctx.ticketsPozo)("ticketsMillonaria", ctx.ticketsMillonaria);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isValidationError);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.confirmacionDeCompra);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isInstantaneas);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.compraFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.saldoInsuficiente);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.compraCancelada);
    }
  },
  directives: [_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__.MenuHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__.FloatingMenuComponent, _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__.DetalleSorteoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.PatternValidator, _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__.AutoTabDirective, _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__.CarritoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__.StylePaginatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.CheckboxControlValueAccessor, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__.ErrorComponent, _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmacionDeVentaComponent, _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__.InstantaneasComponent, _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__.VentaFinalizadaComponent, _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__.SaldoInsuficienteComponent, _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__.VentaCanceladaComponent],
  pipes: [_shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: [".tooltip[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  background: #ffffff;\n  border-radius: 20px;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  max-height: 300px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   .serieBox[_ngcontent-%COMP%] {\n  border: 4.5px solid #b51f20;\n  border-radius: 15px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   .serieBox[_ngcontent-%COMP%]   .serieTitle[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   .serieBox[_ngcontent-%COMP%]   .serieItem[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  font-weight: bold;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px !important;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  font-family: \"Monstserrat Bold\";\n  opacity: 0.7;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 0 10px;\n  \n  align-items: center;\n  \n  \n  \n  text-align: left;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: italic;\n  font-weight: bold;\n  width: 100%;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%] {\n  \n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n  height: 50px;\n  border: 4.5px solid #b51f20;\n  background-color: #fff;\n  border-radius: 150px;\n  font-size: 25px;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  color: white;\n}\n.tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: opacity 1s ease;\n  -webkit-transition: opacity 1s ease;\n  top: 4rem;\n  left: 0.6rem;\n  z-index: 500;\n  background-color: #d1c6c6;\n  padding: 3px 30px;\n  border-radius: 20px;\n  \n  margin-left: -999em;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-family: Calibri, Geneva, Tahoma, Arial, sans-serif;\n  position: absolute;\n  left: 1em;\n  top: 2em;\n  z-index: 99;\n  margin-left: 0;\n  width: 250px;\n}\n.tooltip[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  border: 0;\n  margin: -10px 0 0 -55px;\n  float: left;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   em[_ngcontent-%COMP%] {\n  font-family: Candara, Tahoma, Geneva, sans-serif;\n  font-size: 1.2em;\n  font-weight: bold;\n  display: block;\n  padding: 0.2em 0 0.6em 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(4, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  \n  margin: 10px;\n  width: 25%;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  border: 4.5px solid #b51f20;\n  border-radius: 15px;\n  background-color: white;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  \n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 25px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin: 0 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  font-size: 25px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4.5px solid #b51f20;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n  padding: 15px;\n  border-radius: 30px;\n  max-height: 50px;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  padding: 15px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  background-color: #f2f2f2;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);\n  border-radius: 0.3em;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: transparent;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(5, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 10px;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  border: 4.5px solid #b51f20;\n  border-radius: 20px;\n  font-weight: bold;\n  background-color: white;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  width: 100%;\n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  background-color: #fff;\n  color: #444;\n  margin: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 1px solid #b51f20;\n  margin: 15px auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #b51f20;\n  font-family: \"Monstserrat Regular\";\n  background-color: #b51f20;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: white;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b51f20;\n  border: 1px solid transparent;\n  color: white;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto);\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: 15px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBVko7QUFhRTtFQUNFLHlCQXBCVztFQXFCWCxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBWEo7QUFjRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWFNO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQVhSO0FBWVE7RUFDRSwwQkFBQTtBQVZWO0FBWVE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBVlY7QUFhTTtFQUNFLE1BQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUVBLCtCQXJFUTtFQXNFUixZQUFBO0VBQ0EsWUFBQTtBQWRSO0FBaUJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFmTjtBQWlCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFmUjtBQWtCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBaEJSO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBbEJOO0FBb0JNO0VBQ0U7MkNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFvQlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBbEJWO0FBcUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBbkJWO0FBc0JRO0VBQ0UseUJBaElLO0VBaUlMLFlBQUE7QUFwQlY7QUEyQkE7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekJGO0FBNEJBO0VBQ0UsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBekJGO0FBNEJBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekJGO0FBNEJBO0VBQ0UsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBekJGO0FBOEJBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUE1QkY7QUE4QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBNUJKO0FBNkJJO0VBQ0UsV0FBQTtBQTNCTjtBQTZCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTNCTjtBQTZCTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUEzQlI7QUE2QlE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEzQlY7QUE2QlU7RUFDRSxtQ0ExTk87RUEyTlAsZUFBQTtBQTNCWjtBQThCVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FsT0s7RUFtT0wsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQTVCWjtBQTZCWTtFQUNFLGtCQUFBO0FBM0JkO0FBNkJZO0VBQ0UsYUFBQTtBQTNCZDtBQStCVTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBN0JaO0FBK0JZO0VBQ0U7O0dBQUE7RUFHQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBN0JkO0FBOEJjO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE1QmhCO0FBNkJnQjtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUEzQmxCO0FBK0JZO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTdCZDtBQThCYztFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBNUJoQjtBQThCYztFQUNFLHlCQWpTRDtFQWtTQyxtQkFBQTtFQUNBLHNDQUFBO0FBNUJoQjtBQWtDUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBaENWO0FBa0NVO0VBQ0UsbUNBeFRPO0VBeVRQLGVBQUE7QUFoQ1o7QUFtQ1U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQWpDWjtBQWtDWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQTFVSztFQTJVTCwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBaENkO0FBbUNZOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQWpDZDtBQW1DWTtFQUNFLHlCQWhWQztFQWlWRCx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQTNWRztFQTRWSCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBakNkO0FBbUNjO0VBQ0UsdUJBQUE7RUFDQSxjQS9WRDtFQWdXQyxzQ0FBQTtBQWpDaEI7QUF1Q1E7RUFDRSx5QkExV1M7RUEyV1QsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBalhPO0VBa1hQLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFyQ1Y7QUF1Q1U7RUFDRSx1QkFBQTtFQUNBLGNBeFhPO0VBeVhQLHNDQUFBO0FBckNaO0FBMENNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXhDUjtBQTBDUTtFQUNFLG1DQXhZUztFQXlZVCxlQUFBO0FBeENWO0FBMkNRO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBL1lPO0VBZ1pQLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7QUF6Q1Y7QUEyQ1U7RUFDRSxrQkFBQTtBQXpDWjtBQTJDVTtFQUNFLGFBQUE7QUF6Q1o7QUE2Q1E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFuYVM7RUFvYVQsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBM0NWO0FBNkNVO0VBQ0Usd0JBQUE7QUEzQ1o7QUE4Q1U7RUFDRSxVQUFBO0FBNUNaO0FBK0NVO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBN0NaO0FBZ0RVO0VBQ0UsbUJBQUE7QUE5Q1o7QUFnRFU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTlDWjtBQStDWTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUE3Q2Q7QUE4Q2M7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQTVDaEI7QUFnRFU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBOUNaO0FBK0NZO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE3Q2Q7QUErQ1k7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUE3Q2Q7QUFrRE07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFoRFI7QUFrRFE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0F6ZlM7RUEwZlQsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFoRFY7QUFrRFU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWhEWjtBQXFETTtFQUNFLG1DQW5oQlM7RUFvaEJULGVBQUE7QUFuRFI7QUFxRE07RUFDRSxlQUFBO0FBbkRSO0FBcURNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFuRFI7QUFxRFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtBQXBEVjtBQXNEVTtFQUNFLGFBQUE7QUFwRFo7QUFzRFk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBckRkO0FBdURjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQXJEaEI7QUF3RGM7RUFDRSx5QkF4akJEO0VBeWpCQyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBdERoQjtBQXlEYztFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXZEaEI7QUF3RGdCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXREbEI7QUF3RGtCO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBdERwQjtBQTBEZ0I7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBeERsQjtBQTBEa0I7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF4RHBCO0FBZ0VRO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBRUEsaUJBQUE7QUEvRFY7QUFrRU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWhFUjtBQWtFUTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBaEVWO0FBbUVRO0VBQ0UsZUFBQTtBQWpFVjtBQW9FUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0Fwb0JPO0VBcW9CUCx5QkFsb0JTO0VBbW9CVCxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWxFVjtBQW9FVTtFQUNFLG9CQUFBO0FBbEVaO0FBcUVVO0VBQ0Usc0JBQUE7QUFuRVo7QUFzRVU7RUFDRSx1QkFBQTtFQUNBLGNBbHBCTztFQW1wQlAsc0NBQUE7QUFwRVo7QUF1RVU7RUFDRSxZQUFBO0FBckVaO0FBMEVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBeEVSO0FBMEVRO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0ExcUJTO0VBMnFCVCwrQkFockJNO0VBaXJCTixlQUFBO0VBQ0EsZUFBQTtBQXhFVjtBQTBFVTtFQUNFLHlCQWhyQk87RUFpckJQLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBeEVaO0FBOEVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUE1RUo7QUFnRkE7RUFDRTtJQUNFLHNCQUFBO0VBN0VGO0VBOEVFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBNUVKO0VBK0VFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBN0VKO0VBK0VJO0lBQ0UsZUFBQTtFQTdFTjtFQStFTTtJQUNFLFdBQUE7RUE3RVI7RUFnRk07SUFDRSxXQUFBO0lBQ0EsU0FBQTtFQTlFUjtFQStFUTtJQUNFLHVCQUFBO0VBN0VWO0VBbUZNO0lBQ0Usc0NBQUE7RUFqRlI7RUFvRk07SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFsRlI7RUF1RkU7SUFDRSxhQUFBO0VBckZKO0FBQ0YiLCJmaWxlIjoibWlsbG9uYXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1taWxsb25hcmlhOiAjYjUxZjIwO1xuLy8kY29sb3ItbWlsbG9uYXJpYTogIzA1NzMzMztcblxuJGNvbG9yLWJvdHRvbjogI2I1MWYyMDtcblxuLnRvb2x0aXAge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuY29udGVuZWRvcl9udW1lcm9zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIC5jb21iaW5hdGlvbkJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnNlcmllQm94IHtcbiAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAuc2VyaWVUaXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcmllSXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICAvKiA0ICovXG5cbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY2Npb25BbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICAgICAgLyogcGFkZGluZzogMDsgKi9cbiAgICAgIC8qIG1hcmdpbjogMDsgKi9cbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbmVkb3JfZnJhY2Npb25lcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5mcmFjY2lvbmVzIHtcbiAgICAgICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7ICovXG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9vbHRpcCBzcGFuIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgdG9wOiA0cmVtO1xuICBsZWZ0OiAwLjZyZW07XG4gIHotaW5kZXg6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxYzZjNjtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgLyogdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlOyAqL1xuICBtYXJnaW4tbGVmdDogLTk5OWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b29sdGlwOmhvdmVyIHNwYW4ge1xuICBmb250LWZhbWlseTogQ2FsaWJyaSwgR2VuZXZhLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFlbTtcbiAgdG9wOiAyZW07XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciBpbWcge1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogLTEwcHggMCAwIC01NXB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9vbHRpcDpob3ZlciBlbSB7XG4gIGZvbnQtZmFtaWx5OiBDYW5kYXJhLCBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjJlbSAwIDAuNmVtIDA7XG59XG5cbi8vIEVzdGlsb3MgZGUgc2VsZWNjaW9uIGFuaW1hbFxuXG4uY29udGVuZWRvcl9sb3RlcmlhIHtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gIC52ZW50YXNCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzAlO1xuICAgIC5pbmZvQm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY29udGVuZG9yX3NlbGVjY2lvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuc2VsZWN0Qm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuY29udGVuZWRvcl9zZWxlY3Qge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0X29wdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3B0aW9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblxuICAgICAgICAgICAgLm9wdGlvbiB7XG4gICAgICAgICAgICAgIC8qICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICovXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAvKiBmaXggc3BlY2lmaWMgZm9yIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAtMTAwMDBweDtcbiAgICAgICAgICAgICAgJiArIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm51bWVyb3Mge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm90dG9uO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0X2FuaW1hbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0X29wdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9wdGlvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLWJvdHRvbjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIC8qIGZpeCBzcGVjaWZpYyBmb3IgRmlyZWZveCAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogLTEwMDAwcHg7XG4gICAgICAgICAgICAmICsgbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUxZjIwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50YWJzX2FuaW1hbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAxMnB4IDE1cHggMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgICAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLnRhZ0l0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gICAgICAgICAgZ2FwOiAxMHB4IDE1cHg7XG5cbiAgICAgICAgICB0ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDdweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWNjaW9uX251bWVybyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIC5pbWFnZW5fYW5pbWFsIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gOHB4O1xuXG4gICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubnVtZXJvcyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHIge1xuICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcblxuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY29udGVuZWRvcl9ib3RvbmVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmRlc2FwYXJlY2VyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcGFyZWNlciB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvdG9uIHtcbiAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkgaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSBpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwcHggMCAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJvdG9uX2JvbGV0byB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE3cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbWlsbG9uYXJpYTtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRpY2tldFNjcm9sbGVyIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRlbmVkb3JfbG90ZXJpYSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuaW5mb0JveCB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbnRlbmRvcl9zZWxlY2Npb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG5cbiAgICAgIC5zZWxlY3RCb3gge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1lcm9zX3N1ZXJ0ZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpY2tldFNjcm9sbGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 9394:
/*!**********************************************************!*\
  !*** ./src/app/ventas/containers/pozo/pozo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PozoComponent": () => (/* binding */ PozoComponent)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/pagos.service */ 6862);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _juegos_pozo_services_venta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/pozo/services/venta.service */ 3630);
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/floating-menu/floating-menu.component */ 647);
/* harmony import */ var _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/detalle-sorteo/detalle-sorteo.component */ 9927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/carrito/carrito.component */ 1616);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/style-paginator.directive */ 6560);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/error/error.component */ 3772);
/* harmony import */ var _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/confirmacion-de-venta/confirmacion-de-venta.component */ 5543);
/* harmony import */ var _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/instantaneas/instantaneas.component */ 1022);
/* harmony import */ var _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/venta-finalizada/venta-finalizada.component */ 8332);
/* harmony import */ var _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/saldo-insuficiente/saldo-insuficiente.component */ 5022);
/* harmony import */ var _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/venta-cancelada/venta-cancelada.component */ 3983);
/* harmony import */ var _shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/paginate.pipe */ 2343);
























function PozoComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PozoComponent_div_1_div_8_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const animal_r12 = restoredCtx.$implicit;
      const i_r13 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return ctx_r14.agregar(animal_r12, i_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const animal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "nombre-", animal_r12.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("checked", animal_r12.status)("value", animal_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("for", "nombre-", animal_r12.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", animal_r12.ruta, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"])("alt", animal_r12.nombre);
  }
}

function PozoComponent_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r10.over25ErrorTag, " ");
  }
}

function PozoComponent_div_1_div_35_table_1_tr_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const numero_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](numero_r21);
  }
}

function PozoComponent_div_1_div_35_table_1_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PozoComponent_div_1_div_35_table_1_tr_2_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r23);
      const i_r19 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return ctx_r22.seleccionarTicket(ctx_r22.page_size * (ctx_r22.page_number - 1) + i_r19);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, PozoComponent_div_1_div_35_table_1_tr_2_p_7_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("checked", ticket_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r17.obtenerAnimal(ticket_r18.mascota), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ticket_r18.display);
  }
}

function PozoComponent_div_1_div_35_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PozoComponent_div_1_div_35_table_1_tr_2_Template, 8, 3, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "paginacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "hr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](3, 1, ctx_r16.ticketsDisponibles, ctx_r16.page_size, ctx_r16.page_number));
  }
}

function PozoComponent_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PozoComponent_div_1_div_35_table_1_Template, 5, 5, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "mat-paginator", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("page", function PozoComponent_div_1_div_35_Template_mat_paginator_page_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return ctx_r24.handlerPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r11.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("length", ctx_r11.ticketsDisponibles.length)("pageSize", ctx_r11.page_size);
  }
}

function PozoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "app-detalle-sorteo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("emitir", function PozoComponent_div_1_Template_app_detalle_sorteo_emitir_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r26.procesaEmitir($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Selecciona tus mascotas de la suerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, PozoComponent_div_1_div_8_Template, 4, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12, "\u00BFC\u00F3mo quieres comprar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function PozoComponent_div_1_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r28.tipoSeleccion = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, "Selecci\u00F3n individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "5 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19, "30 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21, "50 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, " Ingresa tu n\u00FAmero de la suerte: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r29.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r30.combinacionDeLaSuerte[0] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r31.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r32.combinacionDeLaSuerte[1] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r33.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r34.combinacionDeLaSuerte[2] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r35.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r36.combinacionDeLaSuerte[3] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, PozoComponent_div_1_div_30_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PozoComponent_div_1_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r37.buscarNumero();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](32, " BUSCAR CARTONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34, " Si quieres cambiar tu cart\u00F3n, ingresa los n\u00FAmeros nuevamente y haz click en \"Buscar cartones\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, PozoComponent_div_1_div_35_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "app-carrito", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("emitirCompra", function PozoComponent_div_1_Template_app_carrito_emitirCompra_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r38.comprar();
    })("eliminarTodo", function PozoComponent_div_1_Template_app_carrito_eliminarTodo_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r39.deleteAllTickets();
    })("deleteLoteriaTicket", function PozoComponent_div_1_Template_app_carrito_deleteLoteriaTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r40.deleteLoteriaTicket($event);
    })("deleteLottoTicket", function PozoComponent_div_1_Template_app_carrito_deleteLottoTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r41.deleteLottoTicket($event);
    })("deletePozoTicket", function PozoComponent_div_1_Template_app_carrito_deletePozoTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r42.deletePozoTicket($event);
    })("deleteMillonariaTicket", function PozoComponent_div_1_Template_app_carrito_deleteMillonariaTicket_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r43.deleteMillonariaTicket($event);
    })("deleteLoteriaFraccion", function PozoComponent_div_1_Template_app_carrito_deleteLoteriaFraccion_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r44.deleteLoteriaFraccion($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("sorteos", ctx_r0.sorteo)("loteria", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r0.seleccionAnimales);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r0.tipoSeleccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r0.combinacionDeLaSuerte[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.over25Error);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ticketsLoteria", ctx_r0.ticketsLoteria)("ticketsMillonaria", ctx_r0.ticketsMillonaria)("ticketsLotto", ctx_r0.ticketsLotto)("ticketsPozo", ctx_r0.ticketsPozo);
  }
}

function PozoComponent_app_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-loader", 46);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

function PozoComponent_app_error_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-error", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeError", function PozoComponent_app_error_4_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r45.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("msg", ctx_r2.errorMessage);
  }
}

function PozoComponent_app_error_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-error", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeError", function PozoComponent_app_error_5_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r47.closeValidationError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("msg", ctx_r3.validationErrorMessage);
  }
}

function PozoComponent_app_confirmacion_de_venta_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-confirmacion-de-venta", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("compraConfirmada", function PozoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraConfirmada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r49.confirmarCompra();
    })("compraCancelada", function PozoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraCancelada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r51.cancelarCompra();
    })("comprarDespues", function PozoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_comprarDespues_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r52.dismissCompras();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("compra", ctx_r4.detalleCompra);
  }
}

function PozoComponent_app_instantaneas_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-instantaneas", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("close", function PozoComponent_app_instantaneas_7_Template_app_instantaneas_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r53.abrirFinalizar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("resultados", ctx_r5.instantaneas)("isLoteriaNacional", true);
  }
}

function PozoComponent_app_venta_finalizada_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-venta-finalizada", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("volver", function PozoComponent_app_venta_finalizada_8_Template_app_venta_finalizada_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r55.finalizarCompra();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("compra", ctx_r6.detalleCompra);
  }
}

function PozoComponent_app_saldo_insuficiente_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-saldo-insuficiente", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("volver", function PozoComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r57.dismissCompras();
    })("recarga", function PozoComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_recarga_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r59.irARecarga();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("message", ctx_r7.recargaDeSaldoMessage);
  }
}

function PozoComponent_app_venta_cancelada_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-venta-cancelada", 52);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("message", ctx_r8.cancelMessage);
  }
}

class PozoComponent {
  constructor(lotteryService, actRoute, paymentService, cart, pozo, router, changeDetectorRef) {
    this.lotteryService = lotteryService;
    this.actRoute = actRoute;
    this.paymentService = paymentService;
    this.cart = cart;
    this.pozo = pozo;
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.combinacionDeLaSuerte = ['', '', '', ''];
    this.animalesTabs = [];
    this.page_size = 12;
    this.page_number = 1;
    this.showNumeros = false;
    this.ticketsPozo = {};
    this.over25Error = false;
    this.over25ErrorTag = 'Los números no pueden ser mayores a 25. Por favor, toma esto en cuenta al ingresar tus números preferidos.';
    this.tipoSeleccion = 96;
    this.showComponents = false;
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
    this.cancelMessage = '';
    this.isInstantaneas = false;
    this.ticketsLoteria = {};
    this.ticketsLotto = {};
    this.isError = false;
    this.isValidationError = false;
    this.actRoute.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  getTotal() {
    this.changeDetectorRef.detectChanges();
    this.total = this.cart.getTotal();
    this.changeDetectorRef.markForCheck();
  }

  agregar(animal, i) {
    if (this.seleccionAnimales[i].status === false) {
      this.seleccionAnimales[i].status = true;
      this.animalesTabs.push(this.seleccionAnimales[i]);
    } else {
      this.seleccionAnimales[i].status = false;
      this.animalesTabs = this.animalesTabs.filter(element => {
        return element.nombre !== animal.nombre;
      });
    }

    localStorage.setItem('animalesSeleccionados', JSON.stringify(this.seleccionAnimales));
    localStorage.setItem('animalesTabs', JSON.stringify(this.animalesTabs));
  }

  remover(animal) {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.animalesTabs = _this.animalesTabs.filter(element => {
        return element.nombre !== animal;
      });
      _this.seleccionAnimales = _this.seleccionAnimales.map(element => {
        if (element.nombre === animal) {
          element.status = false;
        }

        return element;
      });
      yield _this.cart.setCarritoPozo(_this.ticketsPozo);
      localStorage.setItem('animalesTabs', JSON.stringify(_this.animalesTabs));
    })();
  }

  seleccionarTicket(id) {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this2.changeDetectorRef.detectChanges();

        _this2.ticketsDisponibles[id].status = !_this2.ticketsDisponibles[id].status;

        _this2.changeDetectorRef.markForCheck();

        if (!_this2.ticketsDisponibles[id].status) {
          let identificador = _this2.ticketsDisponibles[id].identificador;
          let ticketPozo = _this2.ticketsPozo[identificador];
          yield _this2.deletePozoTicket(ticketPozo);
        } else {
          let count = (yield _this2.cart.getCount()) + 1;

          if (count <= 1000) {
            yield _this2.pushToSeleccionado(_this2.ticketsDisponibles[id]);
          } else {
            _this2.changeDetectorRef.detectChanges();

            _this2.ticketsDisponibles[id].status = false;

            _this2.changeDetectorRef.markForCheck();

            let errorMessage = 'Incluir el boleto excede el límite de compra. Si quieres escoger este boleto, por favor elimina algún otro de tu carrito.';

            _this2.openError(errorMessage);
          }
        }

        yield _this2.setDescuento(5);
      } catch (e) {
        _this2.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this2.openError(errorMessage);
      }
    })();
  }

  pushToSeleccionado(ticket) {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this3.loadingMessage = 'Agregando boleto al carrito';
        _this3.isLoading = true;
        let subtotal = _this3.sorteoSeleccionado.precio;
        let aux = {
          ticket,
          sorteo: _this3.sorteoSeleccionado,
          subtotal
        };
        let hasBalance = yield _this3.paymentService.hasBalance(subtotal, _this3.token);

        if (hasBalance) {
          _this3.ticketsPozo[ticket.identificador] = aux;

          let reservaId = _this3.lotteryService.getReservaId();

          let response = yield _this3.lotteryService.reservarBoletos(_this3.token, aux, 5, reservaId);

          _this3.lotteryService.setReservaId(response);

          yield _this3.cart.setCarrito(aux, 5);
          yield _this3.cart.setCarritoPozo(_this3.ticketsPozo);
          yield _this3.getCarritoTickets(); //this.getTotal();

          _this3.isLoading = false;
        } else {
          _this3.isLoading = false;
          let message = 'Tu saldo es insuficiente para agregar este boleto al carrito';
          _this3.ticketsDisponibles.find(x => x.identificador === ticket.identificador).status = false;

          _this3.recargarSaldo(message);
        }
      } catch (e) {
        _this3.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this3.openError(errorMessage);
      }
    })();
  }

  handlerPage(e) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  obtenerMascota(mascota) {
    return this.pozo.obtenerMascota(mascota);
  }

  ordenaCombinacion(a, b) {
    return a - b;
  }

  validate() {
    let isHigher = false;
    this.combinacionDeLaSuerte.forEach((number, i) => {
      let aux = parseInt(number);

      if (aux > 25) {
        this.combinacionDeLaSuerte[i] = '';
        this.over25Error = true;
        setTimeout(() => {
          this.over25Error = false;
        }, 6000);
      }
    });
  }

  buscarNumero() {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this4.loadingMessage = 'Buscando combinaciones disponibles';
        _this4.isLoading = true;
        _this4.showNumeros = false;

        let combinacion = _this4.combinacionDeLaSuerte.map(number => {
          let numero = number;

          if (numero.length < 2) {
            numero = `0${numero}`;
          }

          if (numero == '0' || numero == '00') {
            return '';
          }

          return numero;
        });

        let combinacionFigura = _this4.animalesTabs.map(animal => {
          return animal.identificador;
        });

        combinacion.sort(_this4.ordenaCombinacion);
        combinacionFigura.sort(_this4.ordenaCombinacion);

        let authData = _this4.lotteryService.getAuthData();

        _this4.ticketsDisponibles = yield _this4.pozo.obtenerTickets(_this4.sorteoSeleccionado.sorteo, combinacion.join(''), combinacionFigura.join(''), _this4.tipoSeleccion, authData);
        _this4.combinacionDeLaSuerte = ['', '', '', ''];
        _this4.showNumeros = true;
        _this4.isLoading = false;
      } catch (e) {
        _this4.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this4.openError(errorMessage);
      }
    })();
  }

  seleccionarVarios(tipoSeleccion) {
    var _this5 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        if (tipoSeleccion != 1) {
          let selectedIndexs = [];

          for (let i = 0; i < tipoSeleccion; i++) {
            let index = Math.floor(Math.random() * _this5.ticketsDisponibles.length);

            while (selectedIndexs.indexOf(index) != -1) {
              index = Math.floor(Math.random() * _this5.ticketsDisponibles.length);
            }

            let ticket = _this5.ticketsDisponibles[index];
            yield _this5.pushToSeleccionado(ticket);
            selectedIndexs.push(index);
          }
        }
      } catch (e) {
        _this5.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this5.openError(errorMessage);
      }
    })();
  }

  procesaEmitir(sorteo) {
    this.sorteoSeleccionado = sorteo;
    this.showNumeros = false;
  }

  obtenerAnimal(mascota) {
    return this.pozo.obtenerMascota(mascota);
  }

  abrirResumen() {
    this.router.navigate([`compra_tus_juegos/resumen/${this.token}`]);
  }

  dismissCompras() {
    this.confirmacionDeCompra = false;
    this.compraFinalizada = false;
    this.saldoInsuficiente = false;
    this.compraCancelada = false;
  }

  volver() {
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  comprar() {
    this.dismissCompras();
    let loteriaAux = this.ticketsLoteria;
    let loteria = [];

    for (let id in loteriaAux) {
      let aux = {};
      aux['combinacion1'] = loteriaAux[id].ticket.combinacion;
      aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(loteriaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = loteriaAux[id].tieneDescuento;
      aux['fecha'] = loteriaAux[id].sorteo.fecha;
      aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
      loteria.push(aux);
    }

    let lottoAux = this.ticketsLotto;
    let lotto = [];

    for (let id in lottoAux) {
      let aux = {};
      aux['combinacion1'] = lottoAux[id].ticket.combinacion1;
      aux['combinacion2'] = lottoAux[id].ticket.combinacion2;
      aux['combinacion3'] = lottoAux[id].ticket.combinacion3;
      aux['combinacion4'] = lottoAux[id].ticket.combinacion4;
      aux['sorteo'] = lottoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(lottoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(lottoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = lottoAux[id].tieneDescuento;
      aux['fecha'] = lottoAux[id].sorteo.fecha;
      lotto.push(aux);
    }

    let pozoAux = this.ticketsPozo;
    let pozo = [];

    for (let id in pozoAux) {
      let aux = {};
      aux['combinacion1'] = pozoAux[id].ticket.combinacion1;
      aux['combinacion2'] = pozoAux[id].ticket.combinacion2;
      aux['mascota'] = pozoAux[id].ticket.mascota;
      aux['sorteo'] = pozoAux[id].sorteo.sorteo;
      aux['subtotal'] = parseFloat(pozoAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(pozoAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = pozoAux[id].tieneDescuento;
      aux['fecha'] = pozoAux[id].sorteo.fecha;
      pozo.push(aux);
    }

    let millonariaAux = this.ticketsMillonaria;
    let millonaria = [];

    for (let id in millonariaAux) {
      let aux = {};
      aux['combinacion1'] = millonariaAux[id].ticket.combinacion1;
      aux['combinacion2'] = millonariaAux[id].ticket.combinacion2;
      aux['fracciones'] = millonariaAux[id].ticket.seleccionados;
      aux['subtotal'] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
      aux['subtotalConDesc'] = parseFloat(millonariaAux[id].subtotalConDesc).toFixed(2);
      aux['tieneDescuento'] = millonariaAux[id].tieneDescuento;
      aux['fecha'] = millonariaAux[id].sorteo.fecha;
      aux['sorteo'] = millonariaAux[id].sorteo.sorteo;
      millonaria.push(aux);
    }

    let amount = parseFloat(this.paymentService.getTotal()).toFixed(2);
    let amountConDesc = parseFloat(this.cart.getTotalConDesc()).toFixed(2);
    this.detalleCompra = {
      loteria,
      millonaria,
      lotto,
      pozo,
      amount,
      amountConDesc
    };
    this.confirmacionDeCompra = true;
  }

  finalizarCompra() {
    this.paymentService.finalizarCompra();
    this.dismissCompras();
    this.router.navigateByUrl(`/compra_tus_juegos/${this.token}`);
  }

  confirmarCompra() {
    var _this6 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this6.isLoading = true;
        _this6.loadingMessage = 'Espera mientras procesamos tu compra';
        let hasBalance = yield _this6.paymentService.hasBalance(0, _this6.token);

        if (hasBalance) {
          let reservaId = _this6.lotteryService.getReservaId();

          let cartValidation = yield _this6.cart.validarCarrito(reservaId);

          if (cartValidation.status) {
            let response = yield _this6.paymentService.confirmarCompra(_this6.token, reservaId);
            _this6.isLoading = false;

            if (response.status) {
              if (response.instantanea.status) {
                _this6.dismissCompras();

                _this6.instantaneas = response.instantanea.data;
                _this6.isInstantaneas = true;
              } else {
                _this6.instantaneas = '';

                _this6.abrirFinalizar();
              }
            } else {
              _this6.cancelarCompra();
            }
          } else {
            _this6.openValidationError(cartValidation.message);
          }

          _this6.isLoading = false;
        } else {
          _this6.isLoading = false;
          let message = 'Tu saldo es insuficiente para realizar la compra';

          _this6.recargarSaldo(message);
        }
      } catch (e) {
        _this6.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this6.openError(errorMessage);
      }
    })();
  }

  abrirFinalizar() {
    var _this7 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this7.dismissCompras();

      yield _this7.cart.borrarCarrito();
      _this7.compraFinalizada = true;
    })();
  }

  cancelarCompra() {
    this.dismissCompras();
    this.compraCancelada = true;
  }

  irARecarga() {}

  recargarSaldo(message) {
    this.recargaDeSaldoMessage = message;
    this.dismissCompras();
    this.saldoInsuficiente = true;
  }

  ngOnInit() {
    var _this8 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this8.isLoading = true;

        if (_this8.token) {
          let data = yield _this8.lotteryService.authUser(_this8.token);
        }

        yield _this8.getCarritoTickets(); //this.getTotal();

        _this8.loadingMessage = 'Cargando los sorteos disponibles';
        _this8.seleccionAnimales = JSON.parse(localStorage.getItem('animalesSeleccionados'));
        _this8.animalesTabs = JSON.parse(localStorage.getItem('animalesTabs')); //TODO: Preguntar como quiere que venga la variable tabs, si llena o no

        _this8.seleccionAnimales.forEach(element => {
          _this8.animalesTabs.forEach(elemento => {
            if (elemento.nombre === element.nombre) {
              element.status = elemento.status;
            }
          });
        });

        localStorage.setItem('animalesSeleccionados', JSON.stringify(_this8.seleccionAnimales));

        let authData = _this8.lotteryService.getAuthData();

        _this8.sorteo = yield _this8.pozo.obtenerSorteo(authData);
        _this8.descuentos = yield _this8.lotteryService.obtenerDescuentos();
        _this8.isLoading = false;
        _this8.showComponents = true;
      } catch (e) {
        _this8.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this8.openError(errorMessage);
      }
    })();
  }

  setDescuento(tipoLoteria) {
    var _this9 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return;

      let descuentos = _this9.descuentos.filter(element => parseInt(element.tipoLoteria) == tipoLoteria);

      for (let index = 0; index < descuentos.length; index++) {
        const element = descuentos[index];
        let conteo = yield _this9.cart.contarBoletos(element.sorteo, tipoLoteria);

        if (conteo >= parseInt(element.cantidad)) {
          yield _this9.cart.calcularDescuento(element);
        } else {
          yield _this9.cart.eliminarDescuento(element, tipoLoteria);
        }

        yield _this9.getCarritoTickets();
      }

      yield _this9.cart.setTotalConDesc();
    })();
  }

  deleteLoteriaTicket(data) {
    var _this10 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this10.loadingMessage = 'Removiendo boleto del carrito';
        _this10.isLoading = true;
        let ticket = _this10.ticketsLoteria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this10.lotteryService.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this10.lotteryService.eliminarBoletosDeReserva(_this10.token, ticket, sorteo, fracciones, 1, reservaId);
        }

        delete _this10.ticketsLoteria[identificador];
        yield _this10.cart.removeFromCart(ticket, 5);
        yield _this10.cart.setCarritoLoteria(_this10.ticketsLoteria);
        yield _this10.getCarritoTickets(); //this.getTotal();

        yield _this10.setDescuento(1);
        _this10.isLoading = false;
      } catch (e) {
        _this10.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this10.openError(errorMessage);
      }
    })();
  }

  deleteMillonariaTicket(data) {
    var _this11 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fracciones = data.ticket.seleccionados;
        _this11.loadingMessage = 'Removiendo boleto del carrito';
        _this11.isLoading = true;
        let ticket = _this11.ticketsMillonaria[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this11.lotteryService.getReservaId();

        if (fracciones.length != 0) {
          let response = yield _this11.lotteryService.eliminarBoletosDeReserva(_this11.token, ticket, sorteo, fracciones, 14, reservaId);
        }

        delete _this11.ticketsMillonaria[identificador];
        yield _this11.cart.removeFromCart(ticket, 1);
        yield _this11.cart.setCarritoMillonaria(_this11.ticketsMillonaria);
        yield _this11.getCarritoTickets(); //this.getTotal();

        yield _this11.setDescuento(14);
        _this11.isLoading = false;
      } catch (e) {
        _this11.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this11.openError(errorMessage);
      }
    })();
  }

  deleteLottoTicket(data) {
    var _this12 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        let identificador = data.ticket.identificador;
        let fraccion = '';
        _this12.loadingMessage = 'Removiendo boleto del carrito';
        _this12.isLoading = true;
        let ticket = _this12.ticketsLotto[identificador].ticket;
        let sorteo = data.sorteo;

        let reservaId = _this12.lotteryService.getReservaId();

        let response = yield _this12.lotteryService.eliminarBoletosDeReserva(_this12.token, ticket, sorteo, fraccion, 2, reservaId);
        delete _this12.ticketsLotto[identificador];
        yield _this12.cart.removeFromCart(ticket, 2);
        yield _this12.cart.setCarritoLotto(_this12.ticketsLotto);
        yield _this12.getCarritoTickets(); //this.getTotal();

        yield _this12.setDescuento(2);
        _this12.isLoading = false;
      } catch (e) {
        _this12.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this12.openError(errorMessage);
      }
    })();
  }

  deleteLoteriaFraccion(data) {
    var _this13 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this13.loadingMessage = 'Removiendo boleto del carrito';
        _this13.isLoading = true;
        let identificador = data.ticket.ticket.identificador;
        let ticket = data.ticket.ticket;
        let sorteo = data.ticket.sorteo;
        let fraccion = data.fraccion;

        let reservaId = _this13.cart.getReservaId();

        let response = yield _this13.lotteryService.eliminarBoletosDeReserva(_this13.token, ticket, sorteo, [fraccion], 1, reservaId);

        let index = _this13.ticketsLoteria[identificador].ticket.seleccionados.findIndex(x => x == fraccion);

        _this13.ticketsLoteria[identificador].ticket.seleccionados.splice(index, 1);

        if (_this13.ticketsLoteria[identificador].ticket.seleccionados.length == 0) {
          delete _this13.ticketsLoteria[identificador];
        }

        yield _this13.cart.removeFromCart(ticket, 1);
        yield _this13.cart.setCarritoLoteria(_this13.ticketsLoteria);
        yield _this13.getCarritoTickets(); //this.getTotal();

        yield _this13.setDescuento(1);
        _this13.isLoading = false;
      } catch (e) {
        _this13.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this13.openError(errorMessage);
      }
    })();
  }

  deletePozoTicket(data) {
    var _this14 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this14.loadingMessage = 'Removiendo boleto del carrito';
        _this14.isLoading = true;
        let identificador = data.ticket.identificador;
        let fraccion = '';
        let ticket = _this14.ticketsPozo[identificador].ticket;
        let sorteo = _this14.ticketsPozo[identificador].sorteo;

        let reservaId = _this14.lotteryService.getReservaId();

        let response = yield _this14.lotteryService.eliminarBoletosDeReserva(_this14.token, ticket, sorteo, fraccion, 5, reservaId);
        delete _this14.ticketsPozo[identificador];
        yield _this14.cart.removeFromCart(ticket, 5);
        yield _this14.cart.setCarritoPozo(_this14.ticketsPozo);

        if (_this14.ticketsDisponibles && _this14.ticketsDisponibles.length) {
          let deletedIndex = _this14.ticketsDisponibles.findIndex(x => x.identificador === identificador);

          if (deletedIndex != -1) _this14.ticketsDisponibles[deletedIndex].status = false;
        }

        yield _this14.getCarritoTickets(); //this.getTotal();

        yield _this14.setDescuento(5);
        _this14.isLoading = false;
      } catch (e) {
        _this14.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this14.openError(errorMessage);
      }
    })();
  }

  deleteAllTickets() {
    var _this15 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this15.loadingMessage = 'Removiendo boletos del carrito';
        _this15.isLoading = true;
        let boletosLoteria = Object.keys(_this15.ticketsLoteria).map(key => {
          return {
            ticket: _this15.ticketsLoteria[key].ticket,
            sorteo: _this15.ticketsLoteria[key].sorteo
          };
        });
        let boletosLotto = Object.keys(_this15.ticketsLotto).map(key => {
          return {
            ticket: _this15.ticketsLotto[key].ticket,
            sorteo: _this15.ticketsLotto[key].sorteo
          };
        });
        let boletosPozo = Object.keys(_this15.ticketsPozo).map(key => {
          return {
            ticket: _this15.ticketsPozo[key].ticket,
            sorteo: _this15.ticketsPozo[key].sorteo
          };
        });

        let reservaId = _this15.lotteryService.getReservaId();
        /*       await this.lotteryService.eliminarTodosLosBoletosDeReserva(
          this.token,
          boletosLoteria,
          boletosLotto,
          boletosPozo,
          reservaId
        ); */


        Object.keys(_this15.ticketsPozo).forEach(key => {
          if (_this15.ticketsDisponibles && _this15.ticketsDisponibles.length != 0) {
            let deletedIndex = _this15.ticketsDisponibles.findIndex(x => x.identificador == key);

            if (deletedIndex != -1) _this15.ticketsDisponibles[deletedIndex].status = false;
          }
        });
        yield _this15.cart.borrarCarrito();
        yield _this15.getCarritoTickets(); //this.getTotal();

        _this15.isLoading = false;
      } catch (e) {
        _this15.isLoading = false;
        console.log(e.message);
        let errorMessage = e.message;

        _this15.openError(errorMessage);
      }
    })();
  }

  getCarritoTickets() {
    var _this16 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this16.cart.buscarCarrito();
      _this16.ticketsLoteria = carrito.loteria;
      _this16.ticketsLotto = carrito.lotto;
      _this16.ticketsMillonaria = carrito.millonaria;
      _this16.ticketsPozo = carrito.pozo;
    })();
  }

  openError(msg) {
    this.errorMessage = msg;
    this.isError = true;
  }

  closeError() {
    this.isError = false;
  }

  openValidationError(msg) {
    this.validationErrorMessage = msg;
    this.isValidationError = true;
  }

  closeValidationError() {
    this.isValidationError = false;
    this.validationErrorMessage = '';
    window.location.reload();
  }

}

PozoComponent.ɵfac = function PozoComponent_Factory(t) {
  return new (t || PozoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_2__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_juegos_pozo_services_venta_service__WEBPACK_IMPORTED_MODULE_4__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef));
};

PozoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: PozoComponent,
  selectors: [["app-pozo"]],
  decls: 11,
  vars: 13,
  consts: [["class", "contenedor_loteria", 4, "ngIf"], ["tipoLoteria", "pozo", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteLoteriaFraccion", "deleteMillonariaTicket"], ["loader", "pozo", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues", 4, "ngIf"], ["tipoLoteria", "5", "class", "paymentItem", 3, "resultados", "isLoteriaNacional", "close", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "volver", 4, "ngIf"], ["class", "paymentItem", 3, "message", "volver", "recarga", 4, "ngIf"], ["class", "paymentItem", 3, "message", 4, "ngIf"], [1, "contenedor_loteria"], [1, "ventasBox"], ["titulo", "Pozo Millonario", "color", "pozo", 1, "infoBox", 3, "sorteos", "loteria", "emitir"], [1, "contendor_seleccion"], [1, "contenedor_select_animales"], [1, "options"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "selectBox"], [1, "contenedor_select"], ["name", "", "id", "", 1, "select_option", 3, "ngModel", "ngModelChange"], ["value", "96", 1, "option"], ["value", "5", 1, "option"], ["value", "30", 1, "option"], ["value", "50", 1, "option"], [1, "numeros_suerte"], [1, "numeros"], ["type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "2", "name", "", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", 3, "ngModel", "input", "ngModelChange"], ["class", "errorTag", 4, "ngIf"], [1, "activado", 3, "click"], [1, "tagItem"], ["class", "contenedor_numeros_suerte", 4, "ngIf"], ["tipoLoteria", "pozo", 1, "ticketScroller", 3, "ticketsLoteria", "ticketsMillonaria", "ticketsLotto", "ticketsPozo", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion"], [1, "option"], ["type", "checkbox", "name", "nombre", 3, "checked", "value", "id", "click"], [3, "for"], [3, "src", "alt"], [1, "errorTag"], [1, "contenedor_numeros_suerte"], [4, "ngIf"], [1, "contenedor_botones"], ["style-paginator", "", 3, "length", "pageSize", "page"], [4, "ngFor", "ngForOf"], ["size", "2px", "color", "gray"], ["type", "checkbox", "name", "", "id", "", 3, "checked", "click"], [1, "contenedor_seleccion_numero"], [1, "imagen_animal"], ["alt", "", 3, "src"], ["loader", "pozo", 3, "message"], [3, "msg", "closeError"], [1, "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues"], ["tipoLoteria", "5", 1, "paymentItem", 3, "resultados", "isLoteriaNacional", "close"], [1, "paymentItem", 3, "compra", "volver"], [1, "paymentItem", 3, "message", "volver", "recarga"], [1, "paymentItem", 3, "message"]],
  template: function PozoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ventas-menu-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PozoComponent_div_1_Template, 37, 14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "app-floating-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("emitirCompra", function PozoComponent_Template_app_floating_menu_emitirCompra_2_listener() {
        return ctx.comprar();
      })("eliminarTodo", function PozoComponent_Template_app_floating_menu_eliminarTodo_2_listener() {
        return ctx.deleteAllTickets();
      })("deleteLoteriaTicket", function PozoComponent_Template_app_floating_menu_deleteLoteriaTicket_2_listener($event) {
        return ctx.deleteLoteriaTicket($event);
      })("deleteLottoTicket", function PozoComponent_Template_app_floating_menu_deleteLottoTicket_2_listener($event) {
        return ctx.deleteLottoTicket($event);
      })("deletePozoTicket", function PozoComponent_Template_app_floating_menu_deletePozoTicket_2_listener($event) {
        return ctx.deletePozoTicket($event);
      })("deleteLoteriaFraccion", function PozoComponent_Template_app_floating_menu_deleteLoteriaFraccion_2_listener($event) {
        return ctx.deleteLoteriaFraccion($event);
      })("deleteMillonariaTicket", function PozoComponent_Template_app_floating_menu_deleteMillonariaTicket_2_listener($event) {
        return ctx.deleteMillonariaTicket($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, PozoComponent_app_loader_3_Template, 1, 1, "app-loader", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, PozoComponent_app_error_4_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, PozoComponent_app_error_5_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, PozoComponent_app_confirmacion_de_venta_6_Template, 1, 1, "app-confirmacion-de-venta", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, PozoComponent_app_instantaneas_7_Template, 1, 2, "app-instantaneas", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, PozoComponent_app_venta_finalizada_8_Template, 1, 1, "app-venta-finalizada", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, PozoComponent_app_saldo_insuficiente_9_Template, 1, 1, "app-saldo-insuficiente", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, PozoComponent_app_venta_cancelada_10_Template, 1, 1, "app-venta-cancelada", 8);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showComponents);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ticketsLoteria", ctx.ticketsLoteria)("ticketsLotto", ctx.ticketsLotto)("ticketsPozo", ctx.ticketsPozo)("ticketsMillonaria", ctx.ticketsMillonaria);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isValidationError);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.confirmacionDeCompra);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isInstantaneas);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.compraFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.saldoInsuficiente);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.compraCancelada);
    }
  },
  directives: [_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__.MenuHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__.FloatingMenuComponent, _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__.DetalleSorteoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.MaxLengthValidator, _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_8__.CarritoComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginator, _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_9__.StylePaginatorDirective, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_11__.ErrorComponent, _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_12__.ConfirmacionDeVentaComponent, _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_13__.InstantaneasComponent, _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_14__.VentaFinalizadaComponent, _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_15__.SaldoInsuficienteComponent, _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_16__.VentaCanceladaComponent],
  pipes: [_shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_17__.PaginatePipe],
  styles: [".contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  padding: 15px;\n  border-radius: 30px;\n  max-height: 50px;\n  border: 1px solid #04b865;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #04b865;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: transparent;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(5, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  background-color: transparent;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  width: 100%;\n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 25px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin: 0 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  font-size: 25px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4.5px solid #04b865;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .errorTag[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  margin-top: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: transparent;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(5, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  background-color: transparent;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  width: 100%;\n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 5px;\n  \n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  width: 35px;\n  height: 35px;\n  border: 4.5px solid #04b865;\n  border-radius: 150px;\n  background-color: #fff;\n  font-weight: bold;\n  color: #444;\n  margin: 2px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  margin: auto;\n  margin: 15px auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #04b865;\n  font-family: \"Monstserrat Regular\";\n  background-color: #04b865;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #04b865;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #fff;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #04b865;\n  color: #04b865;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #04b865;\n  border: 1px solid transparent;\n  color: #fff;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto);\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: auto;\n    margin: 15px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQVpGO0FBY0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBWko7QUFhSTtFQUNFLFdBQUE7QUFYTjtBQWFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWE47QUFhTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWFRO0VBQ0UseUJBbkNHO0VBb0NILGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBM0NPO0VBNENQLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFYVjtBQWFVO0VBQ0UsdUJBQUE7RUFDQSxjQWxEQztFQW1ERCxzQ0FBQTtBQVhaO0FBY1E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFaVjtBQWNVO0VBQ0UsbUNBaEVPO0VBaUVQLGVBQUE7QUFaWjtBQWVVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQXhFSztFQXlFTCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBZFo7QUFlWTtFQUNFLGtCQUFBO0FBYmQ7QUFlWTtFQUNFLGFBQUE7QUFiZDtBQWlCVTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQTVGQztFQTZGRCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUFmWjtBQWlCWTtFQUNFLHdCQUFBO0FBZmQ7QUFrQlk7RUFDRSxVQUFBO0FBaEJkO0FBbUJZO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBakJkO0FBb0JZO0VBQ0UsbUJBQUE7QUFsQmQ7QUFvQlk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBbEJkO0FBbUJjO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBakJoQjtBQWtCZ0I7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWhCbEI7QUFvQlk7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbEJkO0FBbUJjO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFqQmhCO0FBbUJjO0VBQ0UseUJBMUpIO0VBMkpHLG1CQUFBO0VBQ0Esc0NBQUE7QUFqQmhCO0FBdUJRO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFyQlY7QUFzQlU7RUFDRSxtQ0E3S087RUE4S1AsZUFBQTtBQXBCWjtBQXVCVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBckJaO0FBc0JZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBL0xLO0VBZ01MLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFwQmQ7QUF1Qlk7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBckJkO0FBeUJVO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXZCWjtBQTJCTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF6QlI7QUEyQlE7RUFDRSxtQ0ExTlM7RUEyTlQsZUFBQTtBQXpCVjtBQTRCUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQWpPTztFQWtPUCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBM0JWO0FBNEJVO0VBQ0Usa0JBQUE7QUExQlo7QUE0QlU7RUFDRSxhQUFBO0FBMUJaO0FBOEJRO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBclBHO0VBc1BILGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQTVCVjtBQThCVTtFQUNFLHdCQUFBO0FBNUJaO0FBK0JVO0VBQ0UsVUFBQTtBQTdCWjtBQWdDVTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQTlCWjtBQWlDVTtFQUNFLG1CQUFBO0FBL0JaO0FBaUNVO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQS9CWjtBQWdDWTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQTlCZDtBQStCYztFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBN0JoQjtBQWlDVTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUEvQlo7QUFnQ1k7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTlCZDtBQWdDWTtFQUNFLHlCQW5URDtFQW9UQyxtQkFBQTtFQUNBLHNDQUFBO0FBOUJkO0FBbUNNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBakNSO0FBbUNRO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBdFVTO0VBdVVULGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBakNWO0FBbUNVO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFqQ1o7QUFzQ007RUFDRSxtQ0FoV1M7RUFpV1QsZUFBQTtBQXBDUjtBQXNDTTtFQUNFLGVBQUE7QUFwQ1I7QUFzQ007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXBDUjtBQXNDUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0FBckNWO0FBdUNVO0VBQ0UsYUFBQTtBQXJDWjtBQXVDWTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF0Q2Q7QUF3Q2M7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQXRDaEI7QUF5Q2M7RUFDRSx5QkF6WUg7RUEwWUcsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQXZDaEI7QUEwQ2M7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUF6Q2hCO0FBMkNnQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBekNsQjtBQTJDa0I7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUF6Q3BCO0FBNkNnQjtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBM0NsQjtBQTRDa0I7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUExQ3BCO0FBa0RRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWhEVjtBQW9ETTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBbERSO0FBb0RRO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFsRFY7QUFxRFE7RUFDRSxlQUFBO0FBbkRWO0FBc0RRO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQTdkTztFQThkUCx5QkEzZEc7RUE0ZEgsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFwRFY7QUFzRFU7RUFDRSxvQkFBQTtBQXBEWjtBQXVEVTtFQUNFLHNCQUFBO0FBckRaO0FBd0RVO0VBQ0UsdUJBQUE7RUFDQSxjQTNlQztFQTRlRCxzQ0FBQTtBQXREWjtBQXlEVTtFQUNFLFlBQUE7QUF2RFo7QUE0RE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUExRFI7QUE0RFE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQW5nQkc7RUFvZ0JILCtCQXpnQk07RUEwZ0JOLGVBQUE7RUFDQSxlQUFBO0FBMURWO0FBNERVO0VBQ0UseUJBemdCQztFQTBnQkQsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUExRFo7QUFnRUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTlESjtBQWtFQTtFQUNFO0lBQ0Usc0JBQUE7RUEvREY7RUFnRUU7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUE5REo7RUFpRUU7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUEvREo7RUFpRUk7SUFDRSxlQUFBO0VBL0ROO0VBaUVNO0lBQ0UsV0FBQTtFQS9EUjtFQWtFTTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBaEVSO0VBaUVRO0lBQ0UsdUJBQUE7RUEvRFY7RUFxRU07SUFDRSxzQ0FBQTtFQW5FUjtFQXNFTTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFwRVI7RUF5RUU7SUFDRSxhQUFBO0VBdkVKO0FBQ0YiLCJmaWxlIjoicG96by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XG5cbiRjb2xvci1wb3pvOiAjMDRiODY1O1xuLy8kY29sb3ItcG96bzogIzA1NzMzMztcblxuJGNvbG9yLWJvdHRvbjogIzI4YWFlMTtcblxuLy8gRXN0aWxvcyBkZSBzZWxlY2Npb24gYW5pbWFsXG5cbi5jb250ZW5lZG9yX2xvdGVyaWEge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG5cbiAgLnZlbnRhc0JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgLmluZm9Cb3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jb250ZW5kb3Jfc2VsZWNjaW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5zZWxlY3RCb3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250ZW5lZG9yX3NlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rfb3B0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcblxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9wdGlvbnMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXBvem87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAvKiBmaXggc3BlY2lmaWMgZm9yIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAtMTAwMDBweDtcbiAgICAgICAgICAgICAgJiArIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1lcm9zX3N1ZXJ0ZSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XG4gICAgICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLXBvem87XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXJyb3JUYWcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY29udGVuZWRvcl9zZWxlY3RfYW5pbWFsZXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDEwMDtcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3Rfb3B0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9wdGlvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIC8qIGZpeCBzcGVjaWZpYyBmb3IgRmlyZWZveCAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogLTEwMDAwcHg7XG4gICAgICAgICAgICAmICsgbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudGFic19hbmltYWxlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzI2KTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMTJweCAxNXB4IDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDclO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAgICAgICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgICAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICAgIC50YWdJdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgdGFibGUge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICAgICAgICAgIGdhcDogMTBweCAxNXB4O1xuXG4gICAgICAgICAgdHIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW5lZG9yX3NlbGVjY2lvbl9udW1lcm8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIC8qIFJlY3RhbmdsZSA0NSAqL1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgICAgICAgICAgICAgIC5pbWFnZW5fYW5pbWFsIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubnVtZXJvcyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItcG96bztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHIge1xuICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW5lZG9yX2JvdG9uZXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuZGVzYXBhcmVjZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwYXJlY2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYm90b24ge1xuICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSBpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggMCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIGkge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDBweCAwIDNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYm90b25fYm9sZXRvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxN3B4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRpY2tldFNjcm9sbGVyIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRlbmVkb3JfbG90ZXJpYSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuaW5mb0JveCB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbnRlbmRvcl9zZWxlY2Npb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG5cbiAgICAgIC5zZWxlY3RCb3gge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1lcm9zX3N1ZXJ0ZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC5udW1lcm9zIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aWNrZXRTY3JvbGxlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 9384:
/*!****************************************************!*\
  !*** ./src/app/ventas/services/carrito.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoService": () => (/* binding */ CarritoService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class CarritoService {
  constructor(http) {
    this.http = http;
    this.total = 0;
    this.totalConDesc = 0;
    this.ticketsLoteria = {};
    this.ticketsLotto = {};
    this.ticketsPozo = {};
    this.ticketsMillonaria = {};
    this.ticketsCarrito = [];
    this.reservaId = 0;
    this.mySource = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.source;
  }

  eliminarDescuento(element, tipoLoteria) {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let sorteo = element.sorteo;

      switch (tipoLoteria) {
        case 1:
          let loteria = _this.getLoteriaLocal();

          for (let id in loteria) {
            if (loteria[id].sorteo.sorteo == sorteo) {
              loteria[id].tieneDescuento = false;
              loteria[id].subtotalConDesc = 0;
            }
          }

          _this.setLoteriaLocal(loteria);

          break;

        case 2:
          let lotto = _this.getLottoLocal();

          for (let id in lotto) {
            if (lotto[id].sorteo.sorteo == sorteo) {
              lotto[id].tieneDescuento = false;
              lotto[id].subtotalConDesc = 0;
            }
          }

          _this.setLottoLocal(lotto);

          break;

        case 5:
          let pozo = _this.getPozoLocal();

          for (let id in pozo) {
            if (pozo[id].sorteo.sorteo == sorteo) {
              pozo[id].tieneDescuento = false;
              pozo[id].subtotalConDesc = 0;
            }
          }

          _this.setPozoLocal(pozo);

          break;

        case 14:
          let millonaria = _this.getMillonariaLocal();

          for (let id in millonaria) {
            if (millonaria[id].sorteo.sorteo == sorteo) {
              millonaria[id].tieneDescuento = false;
              millonaria[id].subtotalConDesc = 0;
            }
          }

          _this.setMillonariaLocal(millonaria);

          break;
      }

      yield _this.actualizarCarrito();
    })();
  }

  calcularDescuento(descuento) {
    var _this2 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return;
      let precioConDescuento = descuento.valorConDescuento;
      let sorteo = descuento.sorteo;

      switch (descuento.tipoLoteria) {
        case '1':
          let loteria = _this2.getLoteriaLocal();

          for (let id in loteria) {
            if (loteria[id].sorteo.sorteo == sorteo) {
              loteria[id].tieneDescuento = true;
              loteria[id].subtotalConDesc = loteria[id].ticket.seleccionados.length * parseFloat(precioConDescuento);
            }
          }

          _this2.setLoteriaLocal(loteria);

          break;

        case '2':
          let lotto = _this2.getLottoLocal();

          for (let id in lotto) {
            if (lotto[id].sorteo.sorteo == sorteo) {
              lotto[id].tieneDescuento = true;
              lotto[id].subtotalConDesc = parseFloat(precioConDescuento);
            }
          }

          _this2.setLottoLocal(lotto);

          break;

        case '5':
          let pozo = _this2.getPozoLocal();

          for (let id in pozo) {
            if (pozo[id].sorteo.sorteo == sorteo) {
              pozo[id].tieneDescuento = true;
              pozo[id].subtotalConDesc = parseFloat(precioConDescuento);
            }
          }

          _this2.setPozoLocal(pozo);

          break;

        case '14':
          let millonaria = _this2.getMillonariaLocal();

          for (let id in millonaria) {
            if (millonaria[id].sorteo.sorteo == sorteo) {
              millonaria[id].tieneDescuento = true;
              millonaria[id].subtotalConDesc = parseFloat(precioConDescuento);
            }
          }

          _this2.setMillonariaLocal(millonaria);

          break;
      }

      yield _this2.actualizarCarrito();
    })();
  }

  contarBoletos(sorteo, tipoLoteria) {
    var _this3 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let aux = _this3.getCarritoLocal();

      let boletos = aux.filter(item => item.sorteo.sorteo == sorteo && item.tipoLoteria == tipoLoteria);
      let conteo;

      switch (tipoLoteria) {
        case 1:
          conteo = boletos.reduce((total, value) => {
            return total + value.ticket.seleccionados.length;
          }, 0);
          break;

        case 14:
          conteo = boletos.reduce((total, value) => {
            return total + value.ticket.seleccionados.length;
          }, 0);
          break;

        default:
          conteo = boletos.length;
          break;
      }

      return conteo;
    })();
  }

  removeFromCart(ticket, tipoLoteria) {
    var _this4 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this4.getCarrito();
      let deletedIndex = carrito.findIndex(x => x.identificador === ticket.identificador && x.tipoLoteria == tipoLoteria);
      carrito.splice(deletedIndex, 1);
      _this4.ticketsCarrito = carrito;
      localStorage.setItem('seleccionadosCarrito', JSON.stringify(carrito));
    })();
  }

  getReservaId() {
    let reservaId = JSON.parse(localStorage.getItem('reservaId'));

    if (reservaId && reservaId != '') {
      return reservaId;
    } else {
      return 0;
    }
  }

  setReservaId(id) {
    localStorage.setItem('reservaId', JSON.stringify(id));
  }

  getCount() {
    var _this5 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = yield _this5.getCarrito();
      let count = 0;

      if (carrito && carrito.length) {
        carrito.forEach(item => {
          if (item.tipoLoteria == 1) {
            count += item.ticket.seleccionados.length;
          } else {
            count += 1;
          }
        });
      }

      return count;
    })();
  }

  setCarrito(ticket, tipoLoteria) {
    var _this6 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let carrito = _this6.getCarritoLocal();

      if (!carrito) carrito = [];
      ticket['identificador'] = ticket.ticket.identificador;
      ticket['tipoLoteria'] = tipoLoteria;
      let addIndex = carrito.findIndex(x => x.identificador === ticket.identificador);

      if ((tipoLoteria == 1 || tipoLoteria == 14) && addIndex != -1) {
        carrito[addIndex] = ticket;
      } else {
        carrito.push(ticket);
      }

      _this6.ticketsCarrito = carrito;
      localStorage.setItem('seleccionadosCarrito', JSON.stringify(carrito));
    })();
  }

  actualizarCarrito() {
    var _this7 = this;

    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let address = '/reservas';
        let endpoint = '/cache';
        let user = JSON.parse(localStorage.getItem('userData')).playerDocument;
        let body = {
          loteria: _this7.getLoteriaLocal(),
          lotto: _this7.getLottoLocal(),
          pozo: _this7.getPozoLocal(),
          millonaria: _this7.getMillonariaLocal(),
          carrito: _this7.getCarritoLocal(),
          total: _this7.getTotal(),
          reservaId: _this7.getReservaId(),
          user
        };
        endpoint = `${endpoint}/actualizarCarrito`;
        address = _this7.mySource + address + endpoint;

        _this7.http.post(address, body, {
          headers: headers
        }).subscribe(data => {
          resolve('Done');
        }, error => {
          reject(new Error(error.error.message));
        });
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  setCarritoLoteria(tickets) {
    var _this8 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          localStorage.setItem('seleccionadosLoteria', JSON.stringify(tickets)); //this.ticketsLoteria = tickets;

          yield _this8.setTotal();
          yield _this8.actualizarCarrito();
          resolve('Done');
        });

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  setCarritoMillonaria(tickets) {
    var _this9 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          localStorage.setItem('seleccionadosMillonaria', JSON.stringify(tickets)); //this.ticketsLoteria = tickets;

          yield _this9.setTotal();
          yield _this9.actualizarCarrito();
          resolve('Done');
        });

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  setCarritoLotto(tickets) {
    var _this10 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          localStorage.setItem('seleccionadosLotto', JSON.stringify(tickets)); //this.ticketsLotto = tickets;

          yield _this10.setTotal();
          yield _this10.actualizarCarrito();
          resolve('Done');
        });

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

  setCarritoPozo(tickets) {
    var _this11 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          localStorage.setItem('seleccionadosPozo', JSON.stringify(tickets)); //this.ticketsPozo = tickets;

          yield _this11.setTotal();
          yield _this11.actualizarCarrito();
          resolve('Done');
        });

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }

  setCarritoLocal(data) {
    localStorage.setItem('seleccionadosCarrito', JSON.stringify(data));
  }

  setLoteriaLocal(data) {
    localStorage.setItem('seleccionadosLoteria', JSON.stringify(data));
  }

  setMillonariaLocal(data) {
    localStorage.setItem('seleccionadosMillonaria', JSON.stringify(data));
  }

  setLottoLocal(data) {
    localStorage.setItem('seleccionadosLotto', JSON.stringify(data));
  }

  setPozoLocal(data) {
    localStorage.setItem('seleccionadosPozo', JSON.stringify(data));
  }

  getCarritoLocal() {
    let carrito = JSON.parse(localStorage.getItem('seleccionadosCarrito'));

    if (carrito && carrito.length) {
      return carrito;
    } else {
      return [];
    }
  }

  getLoteriaLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosLoteria'));
  }

  getMillonariaLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosMillonaria'));
  }

  getLottoLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosLotto'));
  }

  getPozoLocal() {
    return JSON.parse(localStorage.getItem('seleccionadosPozo'));
  }

  buscarCarrito() {
    var _this12 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref6 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          let address = '/reservas';
          let endpoint = '/cache';
          let user = JSON.parse(localStorage.getItem('userData')).playerDocument;
          let body = {
            user
          };
          endpoint = `${endpoint}/getCarrito`;
          address = _this12.mySource + address + endpoint;

          _this12.http.post(address, body, {
            headers: headers
          }).subscribe( /*#__PURE__*/function () {
            var _ref7 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (data) {
              let reservaId = _this12.getReservaId();

              if (data.carrito.length == 0) {
                _this12.borrarCarrito();

                data.carrito = [];
                data.loteria = {};
                data.lotto = {};
                data.pozo = {};
                data.millonaria = {};
                data.reservaId = 0;
              }

              _this12.setCarritoLocal(data.carrito);

              _this12.setLoteriaLocal(data.loteria);

              _this12.setLottoLocal(data.lotto);

              _this12.setMillonariaLocal(data.millonaria);

              _this12.setPozoLocal(data.pozo);

              _this12.setReservaId(data.reservaId);

              yield _this12.setTotal();
              resolve(data);
            });

            return function (_x13) {
              return _ref7.apply(this, arguments);
            };
          }(), error => {
            reject(new Error(error.error.message));
          });
        });

        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    })();
  }

  validarCarrito(reservaId) {
    var _this13 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref8 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          let address = '/reservas';
          let endpoint = '/cache';
          let user = JSON.parse(localStorage.getItem('userData')).playerDocument;
          let token = JSON.parse(localStorage.getItem('userData')).lotteryToken;
          let body = {
            user,
            token,
            reservaId
          };
          endpoint = `${endpoint}/validar`;
          address = _this13.mySource + address + endpoint;

          _this13.http.post(address, body, {
            headers: headers
          }).subscribe(data => {
            /*           if (!data.status) {
              reject(new Error(data.message));
            }
            */
            resolve(data);
          }, error => {
            reject(new Error(error.error.message));
          });
        });

        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    })();
  }

  getCarrito() {
    var _this14 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref9 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let carritoDB = yield _this14.buscarCarrito();
          resolve(carritoDB.carrito); //resolve(JSON.parse(localStorage.getItem("seleccionadosCarrito")));
        });

        return function (_x16, _x17) {
          return _ref9.apply(this, arguments);
        };
      }());
    })();
  }

  getCarritoLoteria() {
    var _this15 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref10 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let carritoDB = yield _this15.buscarCarrito();
          resolve(carritoDB.loteria); //resolve(JSON.parse(localStorage.getItem("seleccionadosLoteria")));
        });

        return function (_x18, _x19) {
          return _ref10.apply(this, arguments);
        };
      }());
    })();
  }

  getCarritoLotto() {
    var _this16 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref11 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let carritoDB = yield _this16.buscarCarrito();
          resolve(carritoDB.lotto); //resolve(JSON.parse(localStorage.getItem("seleccionadosLotto")));
        });

        return function (_x20, _x21) {
          return _ref11.apply(this, arguments);
        };
      }());
    })();
  }

  getCarritoPozo() {
    var _this17 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref12 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let carritoDB = yield _this17.buscarCarrito();
          resolve(carritoDB.pozo); //resolve(JSON.parse(localStorage.getItem("seleccionadosPozo")));
        });

        return function (_x22, _x23) {
          return _ref12.apply(this, arguments);
        };
      }());
    })();
  }

  getCarritoMillonaria() {
    var _this18 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref13 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let carritoDB = yield _this18.buscarCarrito();
          resolve(carritoDB.millonaria); //resolve(JSON.parse(localStorage.getItem("seleccionadosPozo")));
        });

        return function (_x24, _x25) {
          return _ref13.apply(this, arguments);
        };
      }());
    })();
  }

  borrarCarrito() {
    var _this19 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this19.ticketsCarrito = [];
      _this19.ticketsLoteria = {};
      _this19.ticketsLotto = {};
      _this19.ticketsPozo = {};
      _this19.ticketsMillonaria = {};
      _this19.reservaId = 0;
      _this19.total = 0;
      localStorage.removeItem('seleccionadosLoteria');
      localStorage.removeItem('seleccionadosLotto');
      localStorage.removeItem('seleccionadosPozo');
      localStorage.removeItem('seleccionadosCarrito');
      localStorage.removeItem('seleccionadosMillonaria');
      localStorage.removeItem('reservaId');
      localStorage.removeItem('total');
      localStorage.removeItem('totalConDesc');
      return new Promise( /*#__PURE__*/function () {
        var _ref14 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          let address = '/reservas';
          let endpoint = '/cache';
          let user = JSON.parse(localStorage.getItem('userData')).playerDocument;
          let body = {
            user
          };
          endpoint = `${endpoint}/borrarCarrito`;
          address = _this19.mySource + address + endpoint;

          _this19.http.post(address, body, {
            headers: headers
          }).subscribe(data => {
            resolve('Done');
          }, error => {
            reject(new Error(error.error.message));
          });
        });

        return function (_x26, _x27) {
          return _ref14.apply(this, arguments);
        };
      }());
    })();
  }

  setTotalConDesc() {
    var _this20 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref15 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          //await this.buscarCarrito();
          let loteriaAux = _this20.getLoteriaLocal();

          let lottoAux = _this20.getLottoLocal();

          let pozoAux = _this20.getPozoLocal();

          let millonariaAux = _this20.getMillonariaLocal();

          let loteriaConDesc = 0;

          for (let id in loteriaAux) {
            if (loteriaAux[id].tieneDescuento) {
              loteriaConDesc += parseFloat(loteriaAux[id].subtotalConDesc);
            } else {
              loteriaConDesc += parseFloat(loteriaAux[id].subtotal);
            }
          }

          let lottoConDesc = 0;

          for (let id in lottoAux) {
            if (lottoAux[id].tieneDescuento) {
              lottoConDesc += parseFloat(lottoAux[id].subtotalConDesc);
            } else {
              lottoConDesc += parseFloat(lottoAux[id].subtotal);
            }
          }

          let pozoConDesc = 0;

          for (let id in pozoAux) {
            if (pozoAux[id].tieneDescuento) {
              pozoConDesc += parseFloat(pozoAux[id].subtotalConDesc);
            } else {
              pozoConDesc += parseFloat(pozoAux[id].subtotal);
            }
          }

          let millonariaConDesc = 0;

          for (let id in millonariaAux) {
            if (millonariaAux[id].tieneDescuento) {
              millonariaConDesc += parseFloat(millonariaAux[id].subtotalConDesc);
            } else {
              millonariaConDesc += parseFloat(millonariaAux[id].subtotal);
            }
          }

          let auxConDesc = loteriaConDesc + lottoConDesc + pozoConDesc + millonariaConDesc;
          _this20.totalConDesc = auxConDesc;
          localStorage.setItem('totalConDesc', JSON.stringify(auxConDesc));
          resolve('Done');
        });

        return function (_x28, _x29) {
          return _ref15.apply(this, arguments);
        };
      }());
    })();
  }

  setTotal() {
    var _this21 = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref16 = (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          //await this.buscarCarrito();
          let loteriaAux = _this21.getLoteriaLocal();

          let lottoAux = _this21.getLottoLocal();

          let pozoAux = _this21.getPozoLocal();

          let millonariaAux = _this21.getMillonariaLocal();

          let loteria = 0;

          for (let id in loteriaAux) {
            loteria += parseFloat(loteriaAux[id].subtotal);
          }

          let lotto = 0;

          for (let id in lottoAux) {
            lotto += parseFloat(lottoAux[id].subtotal);
          }

          let pozo = 0;

          for (let id in pozoAux) {
            pozo += parseFloat(pozoAux[id].subtotal);
          }

          let millonaria = 0;

          for (let id in millonariaAux) {
            millonaria += parseFloat(millonariaAux[id].subtotal);
          }

          let aux = loteria + lotto + pozo + millonaria;
          _this21.total = aux;
          localStorage.setItem('total', JSON.stringify(aux));
          resolve('Done');
        });

        return function (_x30, _x31) {
          return _ref16.apply(this, arguments);
        };
      }());
    })();
  }

  getTotal() {
    //return this.total;
    let total = JSON.parse(localStorage.getItem('total'));

    if (total) {
      return total;
    } else {
      return 0;
    }
  }

  getTotalConDesc() {
    //return this.total;
    let total = JSON.parse(localStorage.getItem('totalConDesc'));

    if (total) {
      return total;
    } else {
      return 0;
    }
  }

}

CarritoService.ɵfac = function CarritoService_Factory(t) {
  return new (t || CarritoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

CarritoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CarritoService,
  factory: CarritoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6862:
/*!**************************************************!*\
  !*** ./src/app/ventas/services/pagos.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagosService": () => (/* binding */ PagosService)
/* harmony export */ });
/* harmony import */ var _home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _carrito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrito.service */ 9384);






class PagosService {
  constructor(cart, http) {
    this.cart = cart;
    this.http = http;
    this.mySource = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.source;
  }

  getAuthData() {
    let data = JSON.parse(localStorage.getItem('userData'));
    let lotteryToken = data.lotteryToken;
    let user = data.playerDocument;
    let personalId = data.personaId;
    let accountId = data.accountId;
    if (data.user_ == 'italtronicprep') user = data.user_;
    let response = {
      lotteryToken,
      user,
      personalId,
      accountId
    };
    return response;
  }

  reservarSaldo() {}

  liberarSaldo() {}

  recargarSaldo() {}

  hasBalance(subtotal, token) {
    let cartTotal = parseFloat(this.cart.getTotal());
    let testAmount = parseFloat(subtotal) + cartTotal;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); //let endpoint = "/inquiry";

    let address = '/wallet';
    let endpoint = '';
    let body = {
      token
    };
    endpoint = `${endpoint}/getBalance`;
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        let balance = parseFloat(data.balance);
        let hasBalance = balance >= testAmount;
        resolve(hasBalance);
      }, error => {
        reject(new Error(error.error.message));
      });
    });
  }

  getCompra(ticketId, accountId) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/ventas';
    let endpoint = '';
    let body = {
      ticketId,
      accountId
    };
    endpoint = `${endpoint}/getCompra`;
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        if (!data.status) {
          reject(new Error('No se pudo encontrar la compra solicitada'));
        }

        resolve(data.values);
      }, error => {
        reject(new Error(error.error.message));
      });
    });
  }

  getGanador(ticketId) {
    ticketId = ticketId.toString();
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let address = '/ganadores';
    let endpoint = '';
    let body = {
      ticketId
    };
    endpoint = `${endpoint}/getGanador`;
    address = this.mySource + address + endpoint;
    return new Promise((resolve, reject) => {
      this.http.post(address, body, {
        headers: headers
      }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(new Error(error.error.message));
      });
    });
  }

  confirmarCompra(token, reservaId) {
    var _this = this;

    return (0,_home_angeloacr_Proyectos_loteriaNacional_app_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let loteria = yield _this.cart.getCarritoLoteria();
      let lotto = yield _this.cart.getCarritoLotto();
      let pozo = yield _this.cart.getCarritoPozo();
      let millonaria = yield _this.cart.getCarritoMillonaria();

      let total = _this.cart.getTotal();

      let totalConDesc = _this.cart.getTotalConDesc();

      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let address = '/ventas';
      let endpoint = '';

      let authData = _this.getAuthData();

      let body = {
        loteria,
        lotto,
        pozo,
        millonaria,
        lotteryToken: authData.lotteryToken,
        user: authData.user,
        personaId: authData.personalId,
        accountId: authData.accountId,
        amount: total,
        amountConDesc: totalConDesc,
        hasDescuento: !(total == totalConDesc),
        token,
        reservaId
      };
      endpoint = `${endpoint}/comprarBoletos`;
      address = _this.mySource + address + endpoint;
      return new Promise((resolve, reject) => {
        _this.http.post(address, body, {
          headers: headers
        }).subscribe(data => {
          let response = data;
          resolve(response);
        }, error => {
          //reject(new Error(error.error.message));
          reject(new Error('Ha ocurrido un error procesando la compra. Por favor, intente de nuevo.'));
        });
      });
    })();
  }

  cancelarCompra() {}

  finalizarCompra() {
    this.cart.borrarCarrito();
  }

  getTotal() {
    let total = JSON.parse(localStorage.getItem('total'));

    if (total) {
      return total;
    } else {
      return 0;
    }
  }

}

PagosService.ɵfac = function PagosService_Factory(t) {
  return new (t || PagosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_carrito_service__WEBPACK_IMPORTED_MODULE_2__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

PagosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PagosService,
  factory: PagosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1987:
/*!***************************************************!*\
  !*** ./src/app/ventas/services/ventas.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasService": () => (/* binding */ VentasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class VentasService {
    constructor(http) {
        this.http = http;
        this.mySource = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.source;
    }
    formatNumber(number) {
        // Create our number formatter.
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(number);
    }
    getAuthData() {
        let data = JSON.parse(localStorage.getItem('userData'));
        let response = {
            user: '',
            lotteryToken: '',
        };
        if (data) {
            let lotteryToken = data.lotteryToken;
            let user = data.playerDocument;
            //if (data.user_ == 'italtronicprep') user = data.user_;
            response = {
                lotteryToken,
                user,
            };
        }
        return response;
    }
    obtenerDescuentos() {
        return;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let address = '/ventas';
        let endpoint = '/getDescuentos';
        let authData = this.getAuthData();
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
                let descuentos = data;
                resolve(descuentos);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    obtenerImagenBoleto(tipoLoteria, sorteo) {
        let sourceBoletos = `${this.mySource}/uploads/boletos/`;
        return new Promise((resolve, reject) => {
            let boletoAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.png`;
            resolve(boletoAddress);
        });
    }
    authUser(token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let address = '/auth';
        let endpoint = '/';
        let body = {
            token,
        };
        address = this.mySource + address + endpoint;
        return new Promise((resolve, reject) => {
            this.http.post(address, body, { headers: headers }).subscribe((data) => {
                localStorage.setItem('userData', JSON.stringify(data));
                resolve(data);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    getReservaId() {
        if (JSON.parse(localStorage.getItem('reservaId')) &&
            JSON.parse(localStorage.getItem('reservaId')) != '') {
            return JSON.parse(localStorage.getItem('reservaId'));
        }
        else {
            return 0;
        }
    }
    setReservaId(id) {
        localStorage.setItem('reservaId', JSON.stringify(id));
    }
    reservarBoletos(token, boleto, tipoLoteria, reservaId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let address = '/reservas';
        let endpoint = '/reservarBoletos';
        address = this.mySource + address + endpoint;
        let authData = this.getAuthData();
        let body = {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
            reservaId,
        };
        let aux;
        switch (tipoLoteria) {
            case 1:
                aux = [
                    {
                        combinacion: boleto.ticket.combinacion,
                        fracciones: boleto.fracciones,
                        sorteo: boleto.sorteo,
                    },
                ];
                body['loteria'] = aux;
                break;
            case 2:
                aux = [
                    {
                        combinacion: boleto.ticket.combinacion1,
                        sorteo: boleto.sorteo,
                    },
                ];
                body['lotto'] = aux;
                break;
            case 5:
                aux = [
                    {
                        combinacion: boleto.ticket.combinacion1,
                        sorteo: boleto.sorteo,
                    },
                ];
                body['pozo'] = aux;
                break;
            case 14:
                aux = [
                    {
                        combinacion: boleto.ticket.combinacion1,
                        combinacion2: boleto.ticket.combinacion2,
                        fracciones: boleto.fracciones,
                        sorteo: boleto.sorteo,
                    },
                ];
                body['millonaria'] = aux;
                break;
        }
        return new Promise((resolve, reject) => {
            this.http.post(address, body, { headers: headers }).subscribe((data) => {
                let response = data;
                resolve(response);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    eliminarBoletosDeReserva(token, boleto, sorteo, fracciones, tipoLoteria, reservaId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let address = '/reservas';
        let endpoint = '/eliminarBoletosDeReserva';
        address = this.mySource + address + endpoint;
        let authData = this.getAuthData();
        let body = {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
            reservaId,
        };
        let aux;
        switch (tipoLoteria) {
            case 1:
                aux = [
                    {
                        combinacion: boleto.combinacion,
                        fracciones,
                        sorteo: sorteo,
                    },
                ];
                body['loteria'] = aux;
                break;
            case 2:
                aux = [
                    {
                        combinacion: boleto.combinacion1,
                        sorteo: sorteo,
                    },
                ];
                body['lotto'] = aux;
                break;
            case 5:
                aux = [
                    {
                        combinacion: boleto.combinacion1,
                        sorteo: sorteo,
                    },
                ];
                body['pozo'] = aux;
                break;
            case 14:
                aux = [
                    {
                        combinacion: boleto.combinacion1,
                        combinacion2: boleto.combinacion2,
                        fracciones,
                        sorteo: sorteo,
                    },
                ];
                body['millonaria'] = aux;
                break;
        }
        return new Promise((resolve, reject) => {
            this.http.post(address, body, { headers: headers }).subscribe((data) => {
                let response = data;
                resolve(response);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
    eliminarTodosLosBoletosDeReserva(token, boletosLoteria, boletosLotto, boletosPozo, boletosMillonaria, reservaId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let address = '/reservas';
        let endpoint = '/eliminarBoletosDeReserva';
        address = this.mySource + address + endpoint;
        let authData = this.getAuthData();
        let body = {
            lotteryToken: authData.lotteryToken,
            user: authData.user,
            reservaId,
        };
        let auxLoteria = [];
        let auxLotto = [];
        let auxPozo = [];
        let auxMillonaria = [];
        boletosLoteria.forEach((boleto) => {
            auxLoteria.push({
                combinacion: boleto.ticket.combinacion,
                fracciones: boleto.ticket.seleccionados,
                sorteo: boleto.sorteo,
            });
            body['loteria'] = auxLoteria;
        });
        boletosLotto.forEach((boleto) => {
            auxLotto.push({
                combinacion: boleto.ticket.combinacion1,
                sorteo: boleto.sorteo,
            });
            body['lotto'] = auxLotto;
        });
        boletosPozo.forEach((boleto) => {
            auxPozo.push({
                combinacion: boleto.ticket.combinacion1,
                sorteo: boleto.sorteo,
            });
            body['pozo'] = auxPozo;
        });
        boletosMillonaria.forEach((boleto) => {
            auxMillonaria.push({
                combinacion: boleto.ticket.combinacion1,
                sorteo: boleto.sorteo,
            });
            body['millonaria'] = auxMillonaria;
        });
        return new Promise((resolve, reject) => {
            this.http.post(address, body, { headers: headers }).subscribe((data) => {
                let response = data;
                resolve(response);
            }, (error) => {
                reject(new Error(error.error.message));
            });
        });
    }
}
VentasService.ɵfac = function VentasService_Factory(t) { return new (t || VentasService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentasService, factory: VentasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2114:
/*!*************************************************!*\
  !*** ./src/app/ventas/ventas-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasRoutingModule": () => (/* binding */ VentasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _containers_detalle_de_venta_detalle_de_venta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/detalle-de-venta/detalle-de-venta.component */ 4802);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/home/home.component */ 1546);
/* harmony import */ var _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/loteria/loteria.component */ 9020);
/* harmony import */ var _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/lotto/lotto.component */ 9749);
/* harmony import */ var _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/millonaria/millonaria.component */ 6465);
/* harmony import */ var _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/pozo/pozo.component */ 9394);
/* harmony import */ var _ventas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ventas.component */ 6959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: '',
        component: _ventas_component__WEBPACK_IMPORTED_MODULE_6__.VentasComponent,
        children: [{ path: 'detalle/:id', component: _containers_detalle_de_venta_detalle_de_venta_component__WEBPACK_IMPORTED_MODULE_0__.DetalleDeVentaComponent },
            { path: "loteria/:token", component: _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_2__.LoteriaComponent },
            { path: "millonaria/:token", component: _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_4__.MillonariaComponent },
            { path: "lotto/:token", component: _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_3__.LottoComponent },
            {
                path: "pozo/:token",
                component: _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_5__.PozoComponent
            },
            { path: ":token", component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent }
        ],
    },
];
class VentasRoutingModule {
}
VentasRoutingModule.ɵfac = function VentasRoutingModule_Factory(t) { return new (t || VentasRoutingModule)(); };
VentasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: VentasRoutingModule });
VentasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](VentasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 6959:
/*!********************************************!*\
  !*** ./src/app/ventas/ventas.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasComponent": () => (/* binding */ VentasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class VentasComponent {
    constructor() { }
    ngOnInit() {
    }
}
VentasComponent.ɵfac = function VentasComponent_Factory(t) { return new (t || VentasComponent)(); };
VentasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentasComponent, selectors: [["app-ventas"]], decls: 1, vars: 0, template: function VentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5268:
/*!*****************************************!*\
  !*** ./src/app/ventas/ventas.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasModule": () => (/* binding */ VentasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventas-routing.module */ 2114);
/* harmony import */ var _ventas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventas.component */ 6959);
/* harmony import */ var _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirmacion-de-venta/confirmacion-de-venta.component */ 5543);
/* harmony import */ var _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/venta-finalizada/venta-finalizada.component */ 8332);
/* harmony import */ var _components_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/descripcion-de-venta/descripcion-de-venta.component */ 7179);
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carrito/carrito.component */ 1616);
/* harmony import */ var _components_instantanea_instantanea_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/instantanea/instantanea.component */ 2126);
/* harmony import */ var _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/instantaneas/instantaneas.component */ 1022);
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu-header/menu-header.component */ 4481);
/* harmony import */ var _components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu-box/menu-box.component */ 7404);
/* harmony import */ var _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/floating-menu/floating-menu.component */ 647);
/* harmony import */ var _containers_detalle_de_venta_detalle_de_venta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/detalle-de-venta/detalle-de-venta.component */ 4802);
/* harmony import */ var _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/loteria/loteria.component */ 9020);
/* harmony import */ var _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/pozo/pozo.component */ 9394);
/* harmony import */ var _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/lotto/lotto.component */ 9749);
/* harmony import */ var _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/millonaria/millonaria.component */ 6465);
/* harmony import */ var _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/detalle-sorteo/detalle-sorteo.component */ 9927);
/* harmony import */ var _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../juegos/loteria/loteria.module */ 8015);
/* harmony import */ var _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../juegos/lotto/lotto.module */ 3366);
/* harmony import */ var _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../juegos/pozo/pozo.module */ 458);
/* harmony import */ var _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../juegos/millonaria/millonaria.module */ 4181);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./containers/home/home.component */ 1546);
/* harmony import */ var _components_boton_de_juego_boton_de_juego_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/boton-de-juego/boton-de-juego.component */ 7368);
/* harmony import */ var _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/venta-cancelada/venta-cancelada.component */ 3983);
/* harmony import */ var _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/saldo-insuficiente/saldo-insuficiente.component */ 5022);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2316);































class VentasModule {
}
VentasModule.ɵfac = function VentasModule_Factory(t) { return new (t || VentasModule)(); };
VentasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: VentasModule });
VentasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
            _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_17__.LoteriaModule,
            _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_18__.LottoModule,
            _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_19__.PozoModule,
            _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_20__.MillonariaModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__.SharedModule,
            _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentasRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](VentasModule, { declarations: [_ventas_component__WEBPACK_IMPORTED_MODULE_1__.VentasComponent,
        _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmacionDeVentaComponent,
        _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_3__.VentaFinalizadaComponent,
        _components_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_4__.DescripcionDeVentaComponent,
        _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_5__.CarritoComponent,
        _components_instantanea_instantanea_component__WEBPACK_IMPORTED_MODULE_6__.InstantaneaComponent,
        _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_7__.InstantaneasComponent,
        _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_8__.MenuHeaderComponent,
        _components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_9__.MenuBoxComponent,
        _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_10__.FloatingMenuComponent,
        _containers_detalle_de_venta_detalle_de_venta_component__WEBPACK_IMPORTED_MODULE_11__.DetalleDeVentaComponent,
        _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_12__.LoteriaComponent,
        _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_13__.PozoComponent,
        _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_14__.LottoComponent,
        _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_15__.MillonariaComponent,
        _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_16__.DetalleSorteoComponent,
        _containers_home_home_component__WEBPACK_IMPORTED_MODULE_22__.HomeComponent,
        _components_boton_de_juego_boton_de_juego_component__WEBPACK_IMPORTED_MODULE_23__.BotonDeJuegoComponent,
        _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_24__.VentaCanceladaComponent,
        _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_25__.SaldoInsuficienteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
        _juegos_loteria_loteria_module__WEBPACK_IMPORTED_MODULE_17__.LoteriaModule,
        _juegos_lotto_lotto_module__WEBPACK_IMPORTED_MODULE_18__.LottoModule,
        _juegos_pozo_pozo_module__WEBPACK_IMPORTED_MODULE_19__.PozoModule,
        _juegos_millonaria_millonaria_module__WEBPACK_IMPORTED_MODULE_20__.MillonariaModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__.SharedModule,
        _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentasRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule], exports: [_ventas_component__WEBPACK_IMPORTED_MODULE_1__.VentasComponent,
        _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmacionDeVentaComponent,
        _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_3__.VentaFinalizadaComponent,
        _components_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_4__.DescripcionDeVentaComponent,
        _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_5__.CarritoComponent,
        _components_instantanea_instantanea_component__WEBPACK_IMPORTED_MODULE_6__.InstantaneaComponent,
        _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_7__.InstantaneasComponent,
        _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_8__.MenuHeaderComponent,
        _components_menu_box_menu_box_component__WEBPACK_IMPORTED_MODULE_9__.MenuBoxComponent,
        _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_10__.FloatingMenuComponent,
        _containers_detalle_de_venta_detalle_de_venta_component__WEBPACK_IMPORTED_MODULE_11__.DetalleDeVentaComponent,
        _containers_loteria_loteria_component__WEBPACK_IMPORTED_MODULE_12__.LoteriaComponent,
        _containers_pozo_pozo_component__WEBPACK_IMPORTED_MODULE_13__.PozoComponent,
        _containers_lotto_lotto_component__WEBPACK_IMPORTED_MODULE_14__.LottoComponent,
        _containers_millonaria_millonaria_component__WEBPACK_IMPORTED_MODULE_15__.MillonariaComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_ventas_ventas_module_ts.js.map