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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".lotteryBox[_ngcontent-%COMP%] {\n  font-family: \"Helvetica\";\n  font-style: italic;\n  font-weight: 700;\n  font-size: 25px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 420px;\n  height: 140px;\n  margin: 20px 20px 20px 0;\n  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);\n  border-radius: 45.5px;\n}\n.lotteryBox[_ngcontent-%COMP%]   .lotteryImg[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: width 0.3s ease;\n}\n.lotteryBox[_ngcontent-%COMP%]:hover   .lotteryImg[_ngcontent-%COMP%] {\n  width: 60%;\n  transition: width 0.3s ease;\n}\n.lotteryBox[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: none;\n}\n.loteria[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n  border: 3px solid #28AAE1;\n}\n.lotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 3px solid #b51f20;\n}\n.pozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 3px solid #04b865;\n}\n.millonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 3px solid #b51f20;\n}\n@media screen and (max-width: 800px) {\n  .lotteryBox[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdG9uLWRlLWp1ZWdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFBO0FBVUE7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7QUFYRjtBQWFFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFFQSwyQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtBQWRKO0FBbUJBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQWhCRjtBQW1CQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFoQkY7QUFtQkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBaEJGO0FBbUJBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQWhCRjtBQW9CQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJib3Rvbi1kZS1qdWVnby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vLi4vc2Fzcy9mb250cy5zY3NzXCIpOyAqL1xyXG4kY29sb3ItbG90ZXJpYTogIzI4QUFFMTtcclxuJGNvbG9yLWxvdHRvOiAjYjUxZjIwO1xyXG4kY29sb3ItcG96bzogIzA0Yjg2NTtcclxuJGNvbG9yLW1pbGxvbmFyaWE6ICNiNTFmMjA7XHJcbiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4ubG90dGVyeUJveCB7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDUuNXB4O1xyXG5cclxuICAubG90dGVyeUltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAubG90dGVyeUltZ3tcclxuICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5sb3RlcmlhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBQUUxO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyOEFBRTE7XHJcbn1cclxuXHJcbi5sb3R0byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjYjUxZjIwO1xyXG59XHJcblxyXG4ucG96byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0Yjg2NTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMDRiODY1O1xyXG59XHJcblxyXG4ubWlsbG9uYXJpYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjYjUxZjIwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAubG90dGVyeUJveHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".contenedor_ticket.fondoLoteria[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n  border: 1px solid #28AAE1;\n}\n\n.contenedor_ticket.fondoPozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.contenedor_ticket.fondoLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket.fondoMillonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 305px;\n  border-radius: 30px;\n  overflow: hidden;\n  padding: 15px;\n  background-color: white;\n  box-shadow: 5px 0px 18px 2px rgba(0, 0, 0, 0.3);\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  min-height: 20px;\n  max-height: 40vh;\n  padding: 0 10px;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .ticketBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .noItem[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n  padding: 10px;\n  color: black;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: auto;\n  margin: 15px auto;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .totalsBox[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 15px;\n  border-radius: 40px;\n  margin: 5px;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLoteria[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n  border: 1px solid #28AAE1;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLoteria[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28AAE1;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoLotto[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoPozo[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border: 1px solid #04b865;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoPozo[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #04b865;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoMillonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  color: white;\n  border: 1px solid #b51f20;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   button.fondoMillonaria[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.5s ease;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   .botonEliminar[_ngcontent-%COMP%] {\n  background-color: black;\n  border: 1px solid black;\n}\n\n.contenedor_ticket[_ngcontent-%COMP%]   .boton_comprar[_ngcontent-%COMP%]   .botonEliminar[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: black;\n  transition: background-color 0.5s ease;\n}\n\n@media screen and (max-width: 1000px) {\n  .contenedor_ticket[_ngcontent-%COMP%]   .logo_ticket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 10vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSx5QkFOYTtFQU9iLHlCQUFBO0FBVEY7O0FBV0E7RUFDRSx5QkFSVztFQVNYLHlCQUFBO0FBUkY7O0FBVUE7RUFDRSx5QkFiWTtFQWNaLHlCQUFBO0FBUEY7O0FBU0E7RUFDRSx5QkFmaUI7RUFnQmpCLHlCQUFBO0FBTkY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBSUEsK0NBQUE7QUFORjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFPSTtFQUNFLHdCQUFBO0FBTE47O0FBUUk7RUFDRSxVQUFBO0FBTk47O0FBU0k7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQTjs7QUFVSTtFQUNFLG1CQUFBO0FBUk47O0FBV0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVE47O0FBV007RUFDRSxXQUFBO0FBVFI7O0FBV1E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVRWOztBQWNJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFaTjs7QUFnQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWRKOztBQWdCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFkTjs7QUFrQkU7RUFDRSxVQUFBO0FBaEJKOztBQWtCRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBaEJKOztBQW1CRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQko7O0FBbUJJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0F2SFc7RUF3SFgsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFqQk47O0FBbUJJO0VBQ0UseUJBNUhTO0VBNkhULHlCQUFBO0FBakJOOztBQWtCTTtFQUNFLHNCQUFBO0VBQ0EsY0FoSU87RUFpSVAsc0NBQUE7QUFoQlI7O0FBbUJJO0VBQ0UseUJBcElRO0VBcUlSLHlCQUFBO0FBakJOOztBQWtCTTtFQUNFLHNCQUFBO0VBQ0EsY0F4SU07RUF5SU4sc0NBQUE7QUFoQlI7O0FBbUJJO0VBQ0UseUJBNUlPO0VBNklQLHlCQUFBO0FBakJOOztBQWtCTTtFQUNFLHNCQUFBO0VBQ0EsY0FoSks7RUFpSkwsc0NBQUE7QUFoQlI7O0FBbUJJO0VBQ0UseUJBcEphO0VBcUpiLFlBQUE7RUFDQSx5QkFBQTtBQWpCTjs7QUFrQk07RUFDRSx1QkFBQTtFQUNBLGNBekpXO0VBMEpYLHNDQUFBO0FBaEJSOztBQW1CSTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7QUFqQk47O0FBa0JNO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUFoQlI7O0FBcUJBO0VBR007SUFDRSxZQUFBO0VBcEJOO0FBQ0YiLCJmaWxlIjoiY2Fycml0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjMjhBQUUxO1xyXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG4kY29sb3ItbWlsbG9uYXJpYTogI2I1MWYyMDtcclxuXHJcbi5jb250ZW5lZG9yX3RpY2tldC5mb25kb0xvdGVyaWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxufVxyXG4uY29udGVuZWRvcl90aWNrZXQuZm9uZG9Qb3pvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcG96bztcclxufVxyXG4uY29udGVuZWRvcl90aWNrZXQuZm9uZG9Mb3R0byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxufVxyXG4uY29udGVuZWRvcl90aWNrZXQuZm9uZG9NaWxsb25hcmlhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbWlsbG9uYXJpYTtcclxufVxyXG4uY29udGVuZWRvcl90aWNrZXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMzA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiA1cHggMHB4IDE4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgLmRldGFpbEJveCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgICAgd2lkdGg6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGwge1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAudGlja2V0Qm94IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vSXRlbSB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9nb190aWNrZXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC50b3RhbHNCb3gge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuYm90b25fY29tcHJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBidXR0b24uZm9uZG9Mb3RlcmlhIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uLmZvbmRvTG90dG8ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24uZm9uZG9Qb3pvIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wb3pvO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uLmZvbmRvTWlsbG9uYXJpYSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3RvbkVsaW1pbmFye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5jb250ZW5lZG9yX3RpY2tldCB7XHJcbiAgICAubG9nb190aWNrZXQge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxufSJdfQ== */"]
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
    } }, directives: [_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_1__.DescripcionDeVentaComponent], styles: [".paymentBox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 70%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  overflow-y: scroll;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 30px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n  color: #fff;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.confirmationButton[_ngcontent-%COMP%] {\n  background-color: green;\n  border: 1px solid green;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.confirmationButton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: green;\n  transition: background-color 0.4s ease;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.backButton[_ngcontent-%COMP%] {\n  background-color: red;\n  border: 1px solid red;\n}\n.paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%]   button.backButton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: red;\n  transition: background-color 0.4s ease;\n}\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n@media screen and (max-width: 1000px) {\n  .paymentBox[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .paymentBox[_ngcontent-%COMP%]   .buttonBox[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hY2lvbi1kZS12ZW50YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQXBCVztFQXFCWCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRU07RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFDUTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBQ1Y7QUFFTTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUNRO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFDVjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQUZGO0FBSUE7RUFDRTtJQUNFLFVBQUE7RUFERjtBQUNGO0FBR0E7RUFFSTtJQUNFLHNCQUFBO0VBRko7QUFDRiIsImZpbGUiOiJjb25maXJtYWNpb24tZGUtdmVudGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbi5wYXltZW50Qm94IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gIC5idXR0b25Cb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAmLmNvbmZpcm1hdGlvbkJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJsYWNrQm94IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogODAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5wYXltZW50Qm94IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnBheW1lbnRCb3gge1xyXG4gICAgLmJ1dHRvbkJveHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".titleBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  border-bottom: 1px solid #28AAE1;\n  margin-bottom: 23px;\n}\n.titleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-size: 23px;\n  color: #28AAE1;\n  margin: 2px;\n}\n.titleBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteriaBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #28AAE1;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteriaBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLottoBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #b51f20;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLottoBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titlePozoBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #04b865;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titlePozoBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleMillonariaBox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #b51f20;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 12px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleMillonariaBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox.codigos[_ngcontent-%COMP%] {\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox.codigos[_ngcontent-%COMP%]   .codigo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Monstserrat SemiBold\";\n  font-weight: normal;\n  margin: 8px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 20px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%] {\n  \n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 23px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]:nth-last-child(1) {\n  border: none !important;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%] {\n  width: 30%;\n  border-right: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%] {\n  width: 42%;\n  font-weight: 600;\n  font-size: 15px;\n  border-right: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%] {\n  width: 12%;\n  text-align: center;\n  border-right: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%] {\n  width: 12%;\n  text-align: right;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  \n  font-family: \"Monstserrat Regular\";\n  font-size: 15px;\n  border-right: 1px solid black;\n  width: 70%;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.loteriaColor[_ngcontent-%COMP%] {\n  color: #28AAE1;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.lottoColor[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.pozoColor[_ngcontent-%COMP%] {\n  color: #04b865;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox.milloanriaColor[_ngcontent-%COMP%] {\n  color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Monstserrat Bold\";\n  margin: 15px 0 8px 0;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: 5px 0px 18px 3px rgba(0, 0, 0, 0.3);\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 12px 12px 0 0;\n  width: 100%;\n  min-height: 40px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.loteriaBackground[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.lottoBackground[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.pozoBackground[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox.millonariaBackground[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 14px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  margin: 5px 0;\n  color: white;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%]   .ganadorFraccion[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  min-height: 40px;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 14px;\n  font-family: \"Monstserrat Bold\";\n  text-align: center;\n  margin: 5px 0;\n  border-bottom: 1px solid black;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]:nth-last-child(1)   p[_ngcontent-%COMP%] {\n  border: none;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   .ganadorFraccion[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: center;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .loteria[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #28AAE1;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .lotto[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .pozo[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n}\n.containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .millonaria[_ngcontent-%COMP%] {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n}\n.containerDetails[_ngcontent-%COMP%]   .totalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.containerDetails[_ngcontent-%COMP%]   .totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Monstserrat Bold\";\n}\n.containerDetails[_ngcontent-%COMP%]   .totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Monstserrat Regular\";\n}\n.mensajeButtonBox[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 20px;\n  padding: 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #c3c3c3;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover {\n  background-color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 23px;\n  color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n@media screen and (max-width: 1000px) {\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border: none;\n    border-bottom: 1px solid black;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid black;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%] {\n    width: 50%;\n    border: none;\n    text-align: left;\n    margin-bottom: 20px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-bottom: 20px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorTitleBox[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid black;\n    margin-bottom: 10px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBox[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    border-radius: 12px;\n    margin-bottom: 10px;\n    box-shadow: 5px 0px 18px 3px rgba(0, 0, 0, 0.3);\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n    padding: 10px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.loteriaBackground[_ngcontent-%COMP%] {\n    background-color: #28AAE1;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.lottoBackground[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.pozoBackground[_ngcontent-%COMP%] {\n    background-color: #04b865;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox.millonariaBackground[_ngcontent-%COMP%] {\n    background-color: #b51f20;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorHeaderBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: bold;\n    font-size: 16px;\n    margin: 0;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 20px;\n    border-radius: 0 0 12px 12px;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    width: 50%;\n    border-bottom: 1px solid black;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even) {\n    text-align: right;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(odd) {\n    text-align: left;\n  }\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-last-child(1), .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-last-child(2) {\n    border: none;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .containerDetails[_ngcontent-%COMP%]   .containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .ganadorBoxMobile[_ngcontent-%COMP%]   .ganadorDetailsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NyaXBjaW9uLWRlLXZlbnRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBVkY7QUFXRTtFQUNFLCtCQXBCWTtFQXFCWixlQUFBO0VBQ0EsY0FoQlk7RUFpQlosV0FBQTtBQVRKO0FBWUU7RUFDRSxrQ0F6QmE7QUFlakI7QUFhQTtFQUNFLG1CQUFBO0FBVkY7QUFZSTtFQUNFLGFBQUE7RUFDQSx5QkE3QlU7RUErQlYsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBWE47QUFZTTtFQUNFLFlBQUE7RUFDQSxtQ0F6Q1c7RUEwQ1gsZUFBQTtBQVZSO0FBYUk7RUFDRSxhQUFBO0VBQ0EseUJBekNRO0VBMkNSLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVpOO0FBYU07RUFDRSxZQUFBO0VBQ0EsbUNBdERXO0VBdURYLGVBQUE7QUFYUjtBQWNJO0VBQ0UsYUFBQTtFQUNBLHlCQXJETztFQXVEUCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWNNO0VBQ0UsWUFBQTtFQUNBLG1DQW5FVztFQW9FWCxlQUFBO0FBWlI7QUFlSTtFQUNFLGFBQUE7RUFDQSx5QkFqRWE7RUFtRWIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZE47QUFlTTtFQUNFLFlBQUE7RUFDQSxtQ0FoRlc7RUFpRlgsZUFBQTtBQWJSO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWROO0FBZU07RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFlVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBYlo7QUFtQk07RUFDQSxlQUFBO0VBQ0EsbUNBdkdhO0VBd0dYLG1CQUFBO0VBQ0EsV0FBQTtBQWpCUjtBQWtCUTtFQUNFLGtDQTFHTztBQTBGakI7QUFvQkk7RUFDRSxXQUFBO0FBbEJOO0FBb0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBbEJSO0FBb0JRO0VBQ0UsaUJBQUE7QUFsQlY7QUF1Qkk7RUFDRTs7O0dBQUE7RUFJQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBckJOO0FBc0JNO0VBQ0UsdUJBQUE7QUFwQlI7QUFzQk07RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUFwQlI7QUFxQlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFoSk07QUE2SGhCO0FBb0JVO0VBQ0Usa0NBaEpLO0FBOEhqQjtBQXNCTTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQXBCUjtBQXFCUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQTlKTTtBQTJJaEI7QUFvQlU7RUFDRSxrQ0E5Sks7QUE0SWpCO0FBdUJNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFyQlI7QUFzQlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkE1S007QUF3SmhCO0FBcUJVO0VBQ0Usa0NBNUtLO0FBeUpqQjtBQXdCTTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQXRCUjtBQXVCUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQXpMTTtBQW9LaEI7QUFzQlU7RUFDRSxrQ0F6TEs7QUFxS2pCO0FBd0JNO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQTs7R0FBQTtFQUdBLGtDQXBNUztFQXFNVCxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBdEJSO0FBd0JNO0VBQ0Usc0JBQUE7QUF0QlI7QUF1QlE7RUFDRSxjQXhNTTtBQW1MaEI7QUF1QlE7RUFDRSxjQTFNSTtBQXFMZDtBQXVCUTtFQUNFLGNBNU1HO0FBdUxiO0FBdUJRO0VBQ0UsY0E5TVM7QUF5TG5CO0FBdUJRO0VBQ0UsZUFBQTtFQUNBLCtCQTNOTTtFQTROTixvQkFBQTtBQXJCVjtBQXlCTTtFQUNFLGFBQUE7QUF2QlI7QUF5Qk07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBR0EsK0NBQUE7QUF2QlI7QUF3QlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdEJWO0FBdUJVO0VBQ0UseUJBL09JO0FBME5oQjtBQXVCVTtFQUNFLHlCQWpQRTtBQTROZDtBQXVCVTtFQUNFLHlCQW5QQztBQThOYjtBQXVCVTtFQUNFLHlCQXJQTztBQWdPbkI7QUF1QlU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQW5RSTtFQW9RSixrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBckJaO0FBdUJVO0VBQ0UsVUFBQTtBQXJCWjtBQXdCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdEJWO0FBdUJVO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFyUkk7RUFzUkosa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFyQlo7QUF1QlU7RUFDRSxZQUFBO0FBckJaO0FBdUJVO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBckJaO0FBMkJJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQWxTVTtBQXlRaEI7QUEyQkk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBdFNRO0FBNlFkO0FBMkJJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQTFTTztBQWlSYjtBQTJCSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkE5U2E7QUFxUm5CO0FBNkJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQTVCSjtBQThCSTtFQUNFLFdBQUE7RUFDQSwrQkF2VVU7QUEyU2hCO0FBOEJNO0VBQ0UsWUFBQTtFQUNBLGtDQXpVUztBQTZTakI7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7QUFqQ0Y7QUFtQ0U7RUFDRSx1QkFBQTtBQWpDSjtBQW9DRTtFQUNFLG1DQS9WYTtFQWdXYixlQUFBO0VBQ0EsWUFBQTtBQWxDSjtBQXFDRTtFQUNFLFlBQUE7QUFuQ0o7QUFzQ0E7RUFHTTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQXJDTjtFQXNDTTtJQUNFLFdBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VBcENSO0VBc0NNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQXBDUjtFQXVDTTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQXJDUjtFQXVDTTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQXJDUjtFQXVDTTtJQUNFLFdBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBckNSO0VBdUNNO0lBQ0UsYUFBQTtFQXJDUjtFQXVDTTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBR0EsK0NBQUE7RUFyQ1I7RUFzQ1E7SUFDRSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0VBcENWO0VBcUNVO0lBQ0UseUJBelpFO0VBc1hkO0VBcUNVO0lBQ0UseUJBM1pBO0VBd1haO0VBcUNVO0lBQ0UseUJBN1pEO0VBMFhYO0VBcUNVO0lBQ0UseUJBL1pLO0VBNFhqQjtFQXFDVTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0VBbkNaO0VBc0NRO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtFQXBDVjtFQXFDVTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSw4QkFBQTtFQW5DWjtFQW9DWTtJQUNFLGlCQUFBO0VBbENkO0VBb0NZO0lBQ0UsZ0JBQUE7RUFsQ2Q7RUFvQ1k7SUFFRSxZQUFBO0VBbkNkO0FBQ0Y7QUEyQ0E7RUFNWTtJQUNFLGVBQUE7RUE5Q1o7QUFDRiIsImZpbGUiOiJkZXNjcmlwY2lvbi1kZS12ZW50YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItaGVhZGVyOiAjN2M5MWE4O1xyXG4kY29sb3ItbG90ZXJpYTogIzI4QUFFMTtcclxuJGNvbG9yLWxvdHRvOiAjYjUxZjIwO1xyXG4kY29sb3ItcG96bzogIzA0Yjg2NTtcclxuJGNvbG9yLW1pbGxvbmFyaWE6ICNiNTFmMjA7XHJcblxyXG4udGl0bGVCb3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxvdGVyaWE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gIH1cclxufVxyXG4uY29udGFpbmVyRGV0YWlscyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAuY29udGFpbmVySW5mb0JveCB7XHJcbiAgICAudGl0bGVMb3RlcmlhQm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XHJcblxyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlTG90dG9Cb3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcblxyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlUG96b0JveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xyXG5cclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZU1pbGxvbmFyaWFCb3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxuXHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGVMb3RlcnlCb3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgJi5jb2RpZ29zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLmNvZGlnbyB7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXRlQ2xpZW50Qm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuaW5mb0NsaWVudEJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlTG90ZXJ5Qm94IHtcclxuICAgICAgLyogICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyO1xyXG4gICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xyXG4gKi9cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmZvU29ydGVvQm94IHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGF0ZVRpY2tldEJveCB7XHJcbiAgICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5udW1iZXJCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vbnRvQm94IHtcclxuICAgICAgICB3aWR0aDogMTIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW5mb1RpY2tldEJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAvKiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICovXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG4gICAgICAuZ2FuYWRvclRpdGxlQm94IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICYubG90ZXJpYUNvbG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5sb3R0b0NvbG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucG96b0NvbG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5taWxsb2FucmlhQ29sb3Ige1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwIDhweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmdhbmFkb3JCb3hNb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmdhbmFkb3JCb3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgLmdhbmFkb3JIZWFkZXJCb3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAmLmxvdGVyaWFCYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdGVyaWE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmxvdHRvQmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYucG96b0JhY2tncm91bmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYubWlsbG9uYXJpYUJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ2FuYWRvckZyYWNjaW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhbmFkb3JEZXRhaWxzQm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSBwIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdhbmFkb3JGcmFjY2lvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG90ZXJpYSB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1sb3RlcmlhO1xyXG4gICAgfVxyXG4gICAgLmxvdHRvIHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgfVxyXG4gICAgLnBvem8ge1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgIH1cclxuICAgIC5taWxsb25hcmlhIHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWxCb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVuc2FqZUJ1dHRvbkJveCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5jb250YWluZXJEZXRhaWxzIHtcclxuICAgIC5jb250YWluZXJJbmZvQm94IHtcclxuICAgICAgLmRhdGVMb3RlcnlCb3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuaW5mb1NvcnRlb0JveCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGVUaWNrZXRCb3gge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubnVtYmVyQm94IHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vbnRvQm94IHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FuYWRvclRpdGxlQm94IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhbmFkb3JCb3gge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhbmFkb3JCb3hNb2JpbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggMHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDBweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggMHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgIC5nYW5hZG9ySGVhZGVyQm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICYubG90ZXJpYUJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3RlcmlhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubG90dG9CYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5wb3pvQmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5taWxsb25hcmlhQmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nYW5hZG9yRGV0YWlsc0JveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSxcclxuICAgICAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNvbnRhaW5lckRldGFpbHMge1xyXG4gICAgLmNvbnRhaW5lckluZm9Cb3gge1xyXG4gICAgICAuZGF0ZUxvdGVyeUJveCB7XHJcbiAgICAgICAgLmdhbmFkb3JCb3hNb2JpbGUge1xyXG4gICAgICAgICAgLmdhbmFkb3JEZXRhaWxzQm94IHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".fondoLoteria[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #28aae1 !important;\n  font-size: 30px !important;\n  color: #28aae1;\n  font-family: \"Monstserrat Bold\";\n}\n\n.fondoMillonaria[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b51f20 !important;\n  font-size: 30px !important;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n\n.fondoLotto[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b51f20 !important;\n  font-size: 30px !important;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n}\n\n.fondoPozo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #04b865 !important;\n  font-size: 30px !important;\n  color: #04b865;\n  font-family: \"Monstserrat Bold\";\n}\n\n.menuBox[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  margin: auto;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%] {\n  width: 65%;\n  display: flex;\n  background: #ffffff;\n  box-shadow: 3px 4px 9px rgba(0, 0, 0, 0.25);\n  border-radius: 25px;\n  padding: 15px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  text-align: center;\n  margin: 0;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n  padding: 5px;\n  font-size: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  background-color: transparent;\n  margin: 0 0 4px 0;\n  font-style: italic;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\n  visibility: hidden;\n  display: none;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 0px black;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 3px 3px 3px 10px;\n  font-family: \"Monstserrat Regular\";\n  font-style: normal;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   .fechaItem[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 220px;\n  max-width: 320px;\n  display: block;\n  font-size: 20px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  background-color: #f2f2f2;\n  line-height: 1.3;\n  padding: 4px;\n  margin: 0 0 0 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);\n  border-radius: 0.3em;\n  text-align: center;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   .fechaItem[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   .fechaItem[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  text-align: center;\n  margin: 0;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n  padding: 5px;\n  font-size: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  background-color: transparent;\n  margin: 0 0 4px 0;\n  font-style: italic;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%]   .menuItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 3px 3px 3px 10px;\n  font-family: \"Monstserrat Regular\";\n  font-style: normal;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuImage[_ngcontent-%COMP%] {\n  display: flex;\n  width: 30%;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  padding: 5px;\n  background-color: transparent;\n}\n\n.menuBox[_ngcontent-%COMP%]   .menuImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 1400px) {\n  .menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%], .menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .menuBox[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n  }\n  .menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuSorteo[_ngcontent-%COMP%], .menuBox[_ngcontent-%COMP%]   .menuInfo[_ngcontent-%COMP%]   .menuPremio[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .menuBox[_ngcontent-%COMP%]   .menuImage[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtc29ydGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFYYztBQUtoQjs7QUFRQTtFQUNFLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBakJjO0FBWWhCOztBQVFBO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkF4QmM7QUFtQmhCOztBQVFBO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkEvQmM7QUEwQmhCOztBQVFBO0VBQ0UsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQU5GOztBQU9FO0VBQ0UsVUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBTko7O0FBT0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUxOOztBQU1NO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSlI7O0FBT007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBcEVXO0VBcUVYLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxSOztBQU9RO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFMVjs7QUFNVTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUpaOztBQU1VO0VBQ0UsOEJBQUE7QUFKWjs7QUFRUTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQXZGTztFQXdGUCxrQkFBQTtBQU5WOztBQVNRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQWpHTztFQWtHUCxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVBWOztBQVFVO0VBQ0Usa0JBQUE7QUFOWjs7QUFRVTtFQUNFLGFBQUE7QUFOWjs7QUFXSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBVE47O0FBVU07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFSUjs7QUFVTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0F4SVc7RUF5SVgsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUlI7O0FBVVE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0EvSU87RUFnSlAsa0JBQUE7QUFSVjs7QUFjRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBWko7O0FBYUk7RUFDRSxXQUFBO0FBWE47O0FBZUE7RUFFSTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFiSjtFQWNJOztJQUVFLFdBQUE7RUFaTjtBQUNGOztBQWdCQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQWRGO0VBZUU7SUFDRSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQWJKO0VBY0k7O0lBRUUsV0FBQTtFQVpOO0VBZUU7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFiSjtBQUNGIiwiZmlsZSI6ImRldGFsbGUtc29ydGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XHJcblxyXG4uZm9uZG9Mb3RlcmlhIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4YWFlMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjhhYWUxO1xyXG4gIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxufVxyXG4uZm9uZG9NaWxsb25hcmlhIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I1MWYyMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjYjUxZjIwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxufVxyXG5cclxuLmZvbmRvTG90dG8ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjUxZjIwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNiNTFmMjA7XHJcbiAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG59XHJcblxyXG4uZm9uZG9Qb3pvIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA0Yjg2NSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDRiODY1O1xyXG4gIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxufVxyXG5cclxuLm1lbnVCb3gge1xyXG4gIC8qIFJlY3RhbmdsZSA0NiAqL1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC5tZW51SW5mbyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLy9taW4td2lkdGg6IDY1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggNHB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAubWVudVNvcnRlbyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVudUl0ZW0ge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgb3B0aW9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3B0aW9uIHNwYW4ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogM3B4IDNweCAzcHggMTBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmVjaGFJdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzg4ODtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lbnVQcmVtaW8ge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAubWVudUl0ZW0ge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogM3B4IDNweCAzcHggMTBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudUltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gIC5tZW51Qm94IHtcclxuICAgIC5tZW51SW5mbyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5tZW51U29ydGVvLFxyXG4gICAgICAubWVudVByZW1pbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLm1lbnVCb3gge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubWVudUluZm8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLm1lbnVTb3J0ZW8sXHJcbiAgICAgIC5tZW51UHJlbWlvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lbnVJbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_1__.CarritoComponent], styles: [".floatingBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.toggleBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.totalBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 1000px) {\n  .floatingBox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    bottom: 10px;\n    left: 10px;\n    background-color: #28abe2;\n    width: 60px;\n    height: 60px;\n    z-index: 10000;\n    border-radius: 80px;\n    box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -webkit-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -moz-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n  }\n  .floatingBox[_ngcontent-%COMP%]   .carrito[_ngcontent-%COMP%] {\n    width: 30px;\n    opacity: 1;\n    transition: opacity ease-in 0.3s;\n  }\n  .floatingBox[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%] {\n    width: 0;\n    opacity: 0;\n    transition: opacity ease-in 0.3s;\n  }\n  .floatingBox[_ngcontent-%COMP%]   .carritoDisplay[_ngcontent-%COMP%] {\n    width: 0;\n    opacity: 0;\n    transition: opacity ease-in 0.3s;\n  }\n  .floatingBox[_ngcontent-%COMP%]   .cerrarDisplay[_ngcontent-%COMP%] {\n    width: 25px;\n    opacity: 1;\n    transition: opacity ease-in 0.3s;\n  }\n\n  .toggleBox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px;\n    width: 95%;\n    background-color: rgba(255, 255, 255, 0.95);\n    position: fixed;\n    bottom: 80px;\n    left: 2.5%;\n    padding: 20px 30px;\n    z-index: 10000;\n    box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -webkit-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -moz-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-decoration: none;\n    color: black;\n    font-family: \"Monstserrat SemiBold\";\n    font-size: 14px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]   .totalCartBox[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: white;\n    background-color: #28abe2;\n    border-radius: 10px;\n    margin-left: auto;\n    padding: 6px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: \"Monstserrat SemiBold\";\n    font-size: 14px;\n  }\n  .toggleBox[_ngcontent-%COMP%]   .itemBox[_ngcontent-%COMP%]:nth-child(2) {\n    border-width: 1px 0;\n    border-style: solid;\n    border-color: black;\n  }\n\n  .ticketScroller[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 9500;\n    width: 95%;\n    left: 2.5%;\n    top: 40px;\n    max-width: 800px;\n  }\n\n  .totalBox[_ngcontent-%COMP%] {\n    position: fixed;\n    display: block;\n    font-size: 14px;\n    background-color: white;\n    border-radius: 10px;\n    bottom: 25px;\n    left: 70px;\n    margin: 0 5px;\n    padding: 6px 15px;\n    opacity: 1;\n    box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -webkit-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    -moz-box-shadow: 0px 10px 50px -16px rgba(0, 0, 0, 0.51);\n    transition: opacity ease-in 0.3s;\n  }\n  .totalBox.carritoDisplay[_ngcontent-%COMP%] {\n    opacity: 0;\n    transition: opacity ease-in 0.3s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0aW5nLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EseUJBdkJXO0lBd0JYLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsbURBQUE7SUFDQSwyREFBQTtJQUNBLHdEQUFBO0VBRkY7RUFJRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7RUFGSjtFQUlFO0lBQ0UsUUFBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtFQUZKO0VBS0U7SUFDRSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGdDQUFBO0VBSEo7RUFLRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7RUFISjs7RUFNQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLDJDQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsbURBQUE7SUFDQSwyREFBQTtJQUNBLHdEQUFBO0VBSEY7RUFJRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUNBekVhO0lBMEViLGVBQUE7RUFGSjtFQUdJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSx5QkEvRU87SUFnRlAsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFETjtFQUdJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBRE47RUFHSTtJQUNFLG1DQXhGVztJQXlGWCxlQUFBO0VBRE47RUFHSTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQUROOztFQUtBO0lBQ0UsZUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtFQUZGOztFQUlBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLG1EQUFBO0lBQ0EsMkRBQUE7SUFDQSx3REFBQTtJQUNBLGdDQUFBO0VBREY7RUFHRTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtFQURKO0FBQ0YiLCJmaWxlIjoiZmxvYXRpbmctbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1ib3R0b246ICMyOGFiZTI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4uZmxvYXRpbmdCb3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b2dnbGVCb3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b3RhbEJveCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmZsb2F0aW5nQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCAtMTZweCByZ2JhKDAsIDAsIDAsIDAuNTEpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41MSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcclxuXHJcbiAgICAuY2Fycml0byB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4zcztcclxuICAgIH1cclxuICAgIC5jZXJyYXIge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnJpdG9EaXNwbGF5IHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjNzO1xyXG4gICAgfVxyXG4gICAgLmNlcnJhckRpc3BsYXkge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuM3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50b2dnbGVCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDgwcHg7XHJcbiAgICBsZWZ0OiAyLjUlO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41MSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCAtMTZweCByZ2JhKDAsIDAsIDAsIDAuNTEpO1xyXG4gICAgLml0ZW1Cb3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLnRvdGFsQ2FydEJveCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aWNrZXRTY3JvbGxlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5NTAwO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGxlZnQ6IDIuNSU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuICAudG90YWxCb3gge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBsZWZ0OiA3MHB4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggLTE2cHggcmdiYSgwLCAwLCAwLCAwLjUxKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCAtMTZweCByZ2JhKDAsIDAsIDAsIDAuNTEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41MSk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4zcztcclxuXHJcbiAgICAmLmNhcnJpdG9EaXNwbGF5IHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuM3M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".resultadoBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  text-align: left;\n  font-size: 16px;\n  color: white;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 20px;\n  margin: auto;\n  align-self: center;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 16px;\n  margin: 0;\n}\n.resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Bold\";\n  font-weight: bold;\n}\n@media screen and (max-width: 1000px) {\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .resultadoBox[_ngcontent-%COMP%]   .resultadoDetalles[_ngcontent-%COMP%]   .detailBox[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbnRhbmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFISjtBQUlJO0VBQ0Usa0NBYlc7RUFjWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRk47QUFHTTtFQUNFLCtCQXBCUTtFQXFCUixpQkFBQTtBQURSO0FBRVE7RUFDRSxXQUFBO0FBQVY7QUFHTTtFQUNFLGtDQXpCUztFQTBCVCxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGTjtBQUdNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQUVRO0VBQ0Usa0NBL0NPO0VBZ0RQLGVBQUE7RUFDQSxTQUFBO0FBQVY7QUFDVTtFQUNFLCtCQXJESTtFQXNESixpQkFBQTtBQUNaO0FBT0E7RUFHTTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUFOTjtFQU9NO0lBQ0UsbUJBQUE7RUFMUjtBQUNGIiwiZmlsZSI6Imluc3RhbnRhbmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbi5yZXN1bHRhZG9Cb3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICAucmVzdWx0YWRvRGV0YWxsZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS10aXR1bG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsQm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmRldGFpbFRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5yZXN1bHRhZG9Cb3gge1xyXG4gICAgLnJlc3VsdGFkb0RldGFsbGVzIHtcclxuICAgICAgLmRldGFpbEJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5kZXRhaWxUZXh0IHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _instantanea_instantanea_component__WEBPACK_IMPORTED_MODULE_0__.InstantaneaComponent], styles: [".backgroundLoteriaNacional[_ngcontent-%COMP%] {\n  background-color: #28AAE1;\n}\n\n.backgroundLotto[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundPozoMillonario[_ngcontent-%COMP%] {\n  background-color: #04b865;\n}\n\n.backgroundMillonaria[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n}\n\n.backgroundLoteriaNacionalButton[_ngcontent-%COMP%] {\n  border: 1px solid #28AAE1;\n  background-color: #28AAE1;\n}\n\n.backgroundLoteriaNacionalButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #28AAE1 !important;\n  transition: background-color 0.5s ease;\n}\n\n.backgroundLottoButton[_ngcontent-%COMP%] {\n  border: 1px solid #b51f20;\n  background-color: #b51f20;\n}\n\n.backgroundLottoButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20 !important;\n  transition: background-color 0.5s ease;\n}\n\n.backgroundPozoMillonarioButton[_ngcontent-%COMP%] {\n  border: 1px solid #04b865;\n  background-color: #04b865;\n}\n\n.backgroundPozoMillonarioButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #04b865 !important;\n  transition: background-color 0.5s ease;\n}\n\n.backgroundMillonariaButton[_ngcontent-%COMP%] {\n  border: 1px solid #b51f20;\n  background-color: #b51f20;\n  color: white;\n}\n\n.backgroundMillonariaButton[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #b51f20 !important;\n  transition: background-color 0.5s ease;\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.resultsBox[_ngcontent-%COMP%] {\n  width: 40%;\n  max-height: 80%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: transparent;\n}\n\n.resultBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resultBox[_ngcontent-%COMP%]   .messageBox[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 1px;\n  border-radius: 23px;\n}\n\n.closeBox[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  border-radius: 500px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: red;\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\n.closeBox[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.buttonsBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 300px;\n}\n\n.buttonsBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 15px;\n  border-radius: 40px;\n  margin: 5px;\n  font-family: \"Monstserrat SemiBold\";\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n}\n\n@media screen and (max-width: 1000px) {\n  .resultsBox[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbnRhbmVhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0FBREY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBREU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFHSjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFGRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUlKOztBQURBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUhFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBS0o7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUpFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBTUo7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFNRjs7QUFIQTtFQUNFLFdBQUE7QUFNRjs7QUFMRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBTEU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQTdIYTtFQThIYixXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQU9KOztBQUhBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJpbnN0YW50YW5lYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbi5iYWNrZ3JvdW5kTG90ZXJpYU5hY2lvbmFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBQUUxO1xyXG59XHJcbi5iYWNrZ3JvdW5kTG90dG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XHJcbn1cclxuLmJhY2tncm91bmRQb3pvTWlsbG9uYXJpbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0Yjg2NTtcclxufVxyXG4uYmFja2dyb3VuZE1pbGxvbmFyaWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kTG90ZXJpYU5hY2lvbmFsQnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjhBQUUxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEFBRTE7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyOEFBRTEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZExvdHRvQnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjUxZjIwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICNiNTFmMjAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZFBvem9NaWxsb25hcmlvQnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDRiODY1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNGI4NjU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwNGI4NjUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gIH1cclxufVxyXG4uYmFja2dyb3VuZE1pbGxvbmFyaWFCdXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNTFmMjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1MWYyMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICNiNTFmMjAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gIH1cclxufVxyXG4uYmxhY2tCb3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA4MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5yZXN1bHRzQm94IHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucmVzdWx0Qm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICAubWVzc2FnZUJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlQm94IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNsb3NlQm94OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uc0JveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnJlc3VsdHNCb3gge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".selectionBox[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px;\n}\n\n@media screen and (max-width: 1000px) {\n  .selectionBox[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0U7RUFDRTtJQUNFLGFBQUE7RUFFSjtBQUNGIiwiZmlsZSI6Im1lbnUtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGlvbkJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLnNlbGVjdGlvbkJveHtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgIH1cclxuICB9Il19 */"]
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




function MenuHeaderComponent_app_error_29_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeError", function MenuHeaderComponent_app_error_29_Template_app_error_closeError_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.closeError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("msg", ctx_r0.errorMessage)("title", ctx_r0.errorTitle);
} }
class MenuHeaderComponent {
    constructor(actRoute) {
        this.actRoute = actRoute;
        this.home = false;
        this.linkLotto = '';
        this.linkLoteriaNacional = '';
        this.linkPozoMillonario = '';
        this.linkLaMillonaria = '';
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
        this.linkJuegosOnline = `https://www.loteria.com.ec/#/juegos`;
    }
    getLink(link) {
        if (!this.token) {
            return '/inicio';
        }
        return link;
    }
    checkToken(e) {
        if (!this.token) {
            e.stopPropagation();
            e.preventDefault();
            this.authError();
        }
        return;
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
MenuHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuHeaderComponent, selectors: [["ventas-menu-header"]], inputs: { home: "home" }, decls: 30, vars: 11, consts: [[1, "container", 3, "ngClass"], ["routerLinkActive", "title loteria", 2, "display", "none", 3, "routerLink"], ["routerLinkActive", "title lotto", 2, "display", "none", 3, "routerLink"], ["routerLinkActive", "title pozo", 2, "display", "none", 3, "routerLink"], ["routerLinkActive", "title millonaria", 2, "display", "none", 3, "routerLink"], [1, "contenedor_loteria", "loteria", 3, "href", "click"], ["src", "assets/img/loteria-sombra-2.png"], [1, "mobile"], [1, "contenedor_loteria", "lotto", 3, "href", "click"], ["src", "assets/img/lotto-sombra.png", "alt", ""], [1, "contenedor_loteria", "pozo", 3, "href", "click"], ["src", "assets/img/pozo-sombra.png", "alt", ""], [1, "contenedor_loteria", "millonaria", 3, "href", "click"], ["src", "assets/img/millonaria-sombra.png", "alt", ""], ["target", "_parent", 1, "contenedor_loteria", "juegosOnline", 3, "href"], ["src", "assets/img/juegos-online.png", "alt", ""], [3, "msg", "title", "closeError", 4, "ngIf"], [3, "msg", "title", "closeError"]], template: function MenuHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " LOTERIA NACIONAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " LOTTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " POZO MILLONARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " LA MILLONARIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_9_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_13_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_17_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuHeaderComponent_Template_a_click_21_listener($event) { return ctx.checkToken($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MenuHeaderComponent_app_error_29_Template, 1, 2, "app-error", 16);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.getLink(ctx.linkLoteriaNacional), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.getLink(ctx.linkLotto), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.getLink(ctx.linkPozoMillonario), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.getLink(ctx.linkLaMillonaria), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.linkJuegosOnline, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent], styles: [".container[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  border-bottom: 1px solid #28aae1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 20%;\n  height: 50px;\n  margin: 20px 20px 20px 0;\n  box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);\n  border-radius: 45.5px;\n  font-family: \"Helvetica\";\n  font-style: italic;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: none;\n  color: #ffffff;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria.millonaria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria.millonaria[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria.juegosOnline[_ngcontent-%COMP%] {\n  display: none;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin: 0;\n  transition: width 0.3s ease;\n  background-color: transparent;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 80px;\n  transition: width 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 30px;\n  position: relative;\n  bottom: 0px;\n  text-decoration: none;\n  text-align: center;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 10px;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%] {\n  width: 19%;\n  height: 50px;\n  font-size: 25px;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 34%;\n}\n.container.home[_ngcontent-%COMP%]   .contenedor_loteria.juegosOnline[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block !important;\n  font-family: \"Helvetica\";\n  font-style: italic;\n  width: 25%;\n  font-weight: 700;\n  font-size: 25px;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: none !important;\n  margin-right: 20px;\n}\n.container[_ngcontent-%COMP%]   .title.loteria[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #28aae1;\n}\n.container[_ngcontent-%COMP%]   .title.lotto[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b51f20;\n}\n.container[_ngcontent-%COMP%]   .title.pozo[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #04b865;\n}\n.container[_ngcontent-%COMP%]   .title.millonaria[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #b51f20;\n}\n.loteria[_ngcontent-%COMP%] {\n  color: #28aae1;\n  background-color: #28aae1;\n}\n.lotto[_ngcontent-%COMP%] {\n  color: #b51f20;\n  background-color: #b51f20;\n}\n.pozo[_ngcontent-%COMP%] {\n  color: #04b865;\n  background-color: #04b865;\n}\n.millonaria[_ngcontent-%COMP%] {\n  color: #b51f20;\n  background-color: #b51f20;\n}\n.juegosOnline[_ngcontent-%COMP%] {\n  color: #15295b;\n  background-color: #15295b;\n}\n@media screen and (max-width: 1000px) {\n  .container[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n  .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 0 20px;\n  }\n  .container[_ngcontent-%COMP%]   .contenedor_loteria[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGNBQUE7QUFiSjtBQWVJO0VBQ0UsWUFBQTtBQWJOO0FBZUk7RUFDRSxZQUFBO0FBYk47QUFnQkk7RUFDRSxhQUFBO0FBZE47QUFpQkk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFmTjtBQWtCSTtFQUNFLFdBQUE7RUFFQSwyQkFBQTtBQWpCTjtBQW1CSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQTdEVztFQThEWCxlQUFBO0FBakJOO0FBc0JJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcEJOO0FBc0JNO0VBQ0UsVUFBQTtBQXBCUjtBQXVCTTtFQUNFLFVBQUE7QUFyQlI7QUF1Qk07RUFDRSxhQUFBO0FBckJSO0FBeUJFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBdkJKO0FBeUJFO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBdkJKO0FBd0JJO0VBQ0UsZ0NBQUE7QUF0Qk47QUF5Qkk7RUFDRSxnQ0FBQTtBQXZCTjtBQTBCSTtFQUNFLGdDQUFBO0FBeEJOO0FBMkJJO0VBQ0UsZ0NBQUE7QUF6Qk47QUE4QkE7RUFDRSxjQS9IYztFQWdJZCx5QkFoSWM7QUFxR2hCO0FBOEJBO0VBQ0UsY0FuSVk7RUFvSVoseUJBcElZO0FBeUdkO0FBOEJBO0VBQ0UsY0F2SVc7RUF3SVgseUJBeElXO0FBNkdiO0FBOEJBO0VBQ0UsY0EzSWlCO0VBNElqQix5QkE1SWlCO0FBaUhuQjtBQThCQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQTNCRjtBQTZCQTtFQUNFO0lBQ0Usa0JBQUE7RUExQkY7RUEyQkU7SUFDRSx3QkFBQTtFQXpCSjtFQTJCRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBekJKO0VBMEJJO0lBQ0Usd0JBQUE7RUF4Qk47QUFDRiIsImZpbGUiOiJtZW51LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1sb3RlcmlhOiAjMjhhYWUxO1xyXG4kY29sb3ItbG90dG86ICNiNTFmMjA7XHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG4kY29sb3ItbWlsbG9uYXJpYTogI2I1MWYyMDtcclxuLy8kY29sb3ItcG96bzogIzA1NzMzMztcclxuXHJcbiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxvdGVyaWE7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5jb250ZW5lZG9yX2xvdGVyaWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NS41cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgJi5taWxsb25hcmlhIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgIH1cclxuICAgICYubWlsbG9uYXJpYTpob3ZlciBpbWcge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5qdWVnb3NPbmxpbmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciBpbWcge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIC5ib3RvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaG9tZSB7XHJcbiAgICAuY29udGVuZWRvcl9sb3RlcmlhIHtcclxuICAgICAgd2lkdGg6IDE5JTtcclxuICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzNCU7XHJcbiAgICAgIH1cclxuICAgICAgJi5qdWVnb3NPbmxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICYubG90ZXJpYSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItbG90ZXJpYTtcclxuICAgIH1cclxuXHJcbiAgICAmLmxvdHRvIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuICAgIH1cclxuXHJcbiAgICAmLnBvem8ge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLXBvem87XHJcbiAgICB9XHJcblxyXG4gICAgJi5taWxsb25hcmlhIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvdGVyaWEge1xyXG4gIGNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90ZXJpYTtcclxufVxyXG5cclxuLmxvdHRvIHtcclxuICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxufVxyXG5cclxuLnBvem8ge1xyXG4gIGNvbG9yOiAkY29sb3ItcG96bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxufVxyXG5cclxuLm1pbGxvbmFyaWEge1xyXG4gIGNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxufVxyXG5cclxuLmp1ZWdvc09ubGluZSB7XHJcbiAgY29sb3I6ICMxNTI5NWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1Mjk1YjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250ZW5lZG9yX2xvdGVyaWF7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgLm1vYmlsZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, styles: [".logBox[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 3px;\n  max-height: 80%;\n  z-index: 100000;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  overflow: hidden;\n  width: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.formButton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 52px;\n  color: white;\n  background-color: red;\n  margin: auto;\n  margin-top: 5px;\n  margin-bottom: 23px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: red;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.formButton[_ngcontent-%COMP%]:hover {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]:active {\n  color: red;\n  background-color: white;\n}\n\n.formButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-size: 23px;\n  font-weight: bold;\n  width: 100%;\n  text-decoration: none !important;\n}\n\n.formButton[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.closeButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 23px;\n  height: 23px;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  color: white;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0;\n}\n\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: red;\n}\n\n.errorHeader[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 23px;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n  margin: 0;\n  text-align: center;\n}\n\n.errorContent[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n  padding-top: 42px;\n  padding-bottom: 42px;\n  margin: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGRvLWluc3VmaWNpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNhbGRvLWluc3VmaWNpZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dCb3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxuICB6LWluZGV4OiAxMDAwMDA7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJsYWNrQm94IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogODAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybUJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm1CdXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtQnV0dG9uOmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm1CdXR0b24gcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtQnV0dG9uOmhvdmVyIHAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idXR0b25Cb3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2xvc2VCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4uY2xvc2VCdXR0b24gLmNsb3NlQiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbiAuY2xvc2VCOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXJyb3JIZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvckNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy10b3A6IDQycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


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
    } }, styles: [".blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n\n.paymentBox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 70%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhLWNhbmNlbGFkYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ2ZW50YS1jYW5jZWxhZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2tCb3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA4MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wYXltZW50Qm94IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuIl19 */"] });


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
    } }, directives: [_descripcion_de_venta_descripcion_de_venta_component__WEBPACK_IMPORTED_MODULE_1__.DescripcionDeVentaComponent], styles: [".closeButton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 23px;\n  height: 23px;\n}\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  color: red;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0;\n}\n.closeButton[_ngcontent-%COMP%]   .closeB[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n.blackBox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 8000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  background-color: rgba(155, 155, 155, 0.5);\n  border: none;\n}\n.paymentBox[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 70%;\n  position: fixed;\n  padding: 15px;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  overflow-y: scroll;\n}\n.paymentBox[_ngcontent-%COMP%]   .mensajeButtonBox[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px;\n  border-radius: 30px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n  color: #fff;\n  background-color: green;\n  border: 1px solid green;\n}\n.paymentBox[_ngcontent-%COMP%]   .mensajeButtonBox[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: green;\n  transition: background-color 0.4s ease;\n}\n@media screen and (max-width: 1000px) {\n  .paymentBox[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhLWZpbmFsaXphZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMRjtBQU1FO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFKSjtBQUtJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBSE47QUFPQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFKRjtBQU9BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUpGO0FBS0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBeERhO0VBeURiLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUhOO0FBT0E7RUFDRTtJQUNFLFVBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InZlbnRhLWZpbmFsaXphZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZnVlbnRlLXRpdHVsbzogXCJNb25zdHNlcnJhdCBCb2xkXCI7XHJcbiRmdWVudGUtc3VidGl0dWxvOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcbiRmdWVudGUtcGFycmFmbzogXCJNb25zdHNlcnJhdCBSZWd1bGFyXCI7XHJcbiRmdWVudGUtYm90b25lczogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG5cclxuJGNvbG9yLWxvdGVyaWE6ICM3YzkxYTg7XHJcbi5jbG9zZUJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbiAgLmNsb3NlQiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjAwMDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYmxhY2tCb3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA4MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNTUsIDE1NSwgMC41KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wYXltZW50Qm94IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgLm1lbnNhamVCdXR0b25Cb3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5wYXltZW50Qm94IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".titleBox[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n  font-weight: 600;\n}\n.titleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  font-size: 14px;\n}\n.titleBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n}\n.containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBo[_ngcontent-%COMP%]   x[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .titleLoteryBo[_ngcontent-%COMP%]   x[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  color: #000;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .fondoBox[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: #7c91a8;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateClientBox[_ngcontent-%COMP%]   .infoClientBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 20px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 1fr;\n  grid-column-gap: 3rem;\n  column-gap: 3rem;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoSorteoBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  font-family: \"Monstserrat Regular\";\n  font-size: 15px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%]   .dateTicketBox[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%]   .numberBox[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.containerInfoBox[_ngcontent-%COMP%]   .dateLoteryBox[_ngcontent-%COMP%]   .infoTicketBox[_ngcontent-%COMP%]   .montoBox[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 600;\n}\n.totalBox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 70px;\n  display: flex;\n  justify-content: flex-end;\n}\n.totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat Regular\";\n  color: #000;\n}\n.totalBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n}\n.mensajeButtonBox[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 20px;\n  padding: 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #c3c3c3;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover {\n  background-color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 23px;\n  color: green;\n}\n.mensajeButtonBox[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtZGUtdmVudGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFFO0VBQ0Usa0NBZGE7RUFlYixlQUFBO0FBTko7QUFTRTtFQUNFLGtDQW5CYTtBQVlqQjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBVEo7QUFXSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQWhDYTtFQWlDYixlQUFBO0FBVE47QUFhRTtFQUNFLDhCQUFBO0VBQ0EseUJBbkNZO0VBb0NaLGtCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsV0FBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFaTjtBQWNNO0VBQ0UsaUJBQUE7QUFaUjtBQWlCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFmSjtBQWlCSTtFQUNFLGlCQUFBO0FBZk47QUFpQk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFmUjtBQW1CSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQXpFVztFQTBFWCxlQUFBO0FBakJOO0FBbUJNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBakJSO0FBb0JNO0VBQ0Usa0JBQUE7QUFsQlI7QUFxQk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBbkJSO0FBeUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQXZCRjtBQXlCRTtFQUNFLGtDQXRHYTtFQXVHYixXQUFBO0FBdkJKO0FBeUJJO0VBQ0UsVUFBQTtBQXZCTjtBQTRCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtBQTNCRjtBQTZCRTtFQUNFLHVCQUFBO0FBM0JKO0FBOEJFO0VBQ0UsbUNBL0hhO0VBZ0liLGVBQUE7RUFDQSxZQUFBO0FBNUJKO0FBK0JFO0VBQ0UsWUFBQTtBQTdCSiIsImZpbGUiOiJkZXRhbGxlLWRlLXZlbnRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1sb3RlcmlhOiAjN2M5MWE4O1xyXG5cclxuLnRpdGxlQm94IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lckluZm9Cb3gge1xyXG4gIC50aXRsZUxvdGVyeUJvIHgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvbmRvQm94IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3RlcmlhO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kYXRlQ2xpZW50Qm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5pbmZvQ2xpZW50Qm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGF0ZUxvdGVyeUJveCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyO1xyXG4gICAgY29sdW1uLWdhcDogM3JlbTtcclxuXHJcbiAgICAuaW5mb1NvcnRlb0JveCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5mb1RpY2tldEJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgICAgIC5kYXRlVGlja2V0Qm94IHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm51bWJlckJveCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9udG9Cb3gge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b3RhbEJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVuc2FqZUJ1dHRvbkJveCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".tooltip[_ngcontent-%COMP%] {\n  \n  background: #ffffff;\n  border-radius: 20px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  max-height: 260px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  font-style: normal;\n  font-weight: 700;\n  font-size: 25px !important;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  font-family: \"Monstserrat Bold\";\n  opacity: 0.7;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 0 10px;\n  \n  align-items: center;\n  \n  \n  \n  text-align: left;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: italic;\n  font-weight: bold;\n  width: 100%;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%] {\n  \n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n  height: 50px;\n  border: 4.5px solid #28aae1;\n  background-color: #fff;\n  border-radius: 150px;\n  font-size: 25px;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  color: #000;\n}\n.tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: opacity 1s ease;\n  -webkit-transition: opacity 1s ease;\n  top: 4rem;\n  left: 0.6rem;\n  z-index: 500;\n  background-color: #d1c6c6;\n  padding: 3px 30px;\n  border-radius: 20px;\n  \n  margin-left: -999em;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-family: Calibri, Geneva, Tahoma, Arial, sans-serif;\n  position: absolute;\n  left: 1em;\n  top: 2em;\n  z-index: 99;\n  margin-left: 0;\n  width: 250px;\n}\n.tooltip[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  border: 0;\n  margin: -10px 0 0 -55px;\n  float: left;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   em[_ngcontent-%COMP%] {\n  font-family: Candara, Tahoma, Geneva, sans-serif;\n  font-size: 1.2em;\n  font-weight: bold;\n  display: block;\n  padding: 0.2em 0 0.6em 0;\n}\n.classic[_ngcontent-%COMP%] {\n  padding: 0.8em 1em;\n}\n.custom[_ngcontent-%COMP%] {\n  padding: 0.5em 0.8em 0.8em 2em;\n}\n*[_ngcontent-%COMP%]   html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.classic[_ngcontent-%COMP%] {\n  padding: 0.8em 1em;\n}\n*[_ngcontent-%COMP%]   html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.classic[_ngcontent-%COMP%] {\n  background: #ffffaa;\n  border: 1px solid #ffad33;\n}\n.fondoNormal[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n.fondoAzul[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  color: #fff;\n}\n.numeros_grupo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, auto) 1fr;\n}\n.numeros_grupo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.numeros_grupo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  padding: 8px 6px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 12px;\n  border: 1.5px solid #000;\n  border-radius: 2px;\n  color: #000;\n  -moz-appearance: textfield;\n  margin-right: 3px;\n  background-color: #fff;\n}\n.contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  max-width: 400px;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  height: 60px;\n  margin: 10px 0;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(4, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  \n  width: 25%;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  \n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 35%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  margin: 10px 10px 10px 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 25px;\n  font-weight: bold;\n  border: 4.5px solid #28aae1;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  padding: 15px;\n  margin: 10px 0;\n  width: 30%;\n  max-width: 300px;\n  border-radius: 30px;\n  border: 1px solid #28aae1;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  height: 60px;\n  font-size: 16px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #28aae1;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #28aae1;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  background-color: #fff;\n  color: #444;\n  margin: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 1px solid #28aae1;\n  margin: 5px auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #28aae1;\n  font-family: \"Monstserrat Regular\";\n  background-color: #28aae1;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #28aae1;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #fff;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #28aae1;\n  color: #28aae1;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #28aae1;\n  border: 1px solid transparent;\n  color: #fff;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n  }\n\n  .paymentBox[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 45px !important;\n    height: 45px !important;\n    font-size: 20px !important;\n    margin: 0 8px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   .activado[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto) !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: 15px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWkY7QUFjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFaSjtBQWVFO0VBQ0UseUJBdEJXO0VBdUJYLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUFiSjtBQWdCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBZE47QUFlTTtFQUNFLE1BQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUVBLCtCQTdEUTtFQThEUixZQUFBO0VBQ0EsWUFBQTtBQWhCUjtBQW1CSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakJOO0FBbUJNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWpCUjtBQW9CTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBbEJSO0FBc0JJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBcEJOO0FBc0JNO0VBQ0U7MkNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFwQlI7QUFzQlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcEJWO0FBdUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBckJWO0FBd0JRO0VBQ0UseUJBdkhLO0VBd0hMLFdBQUE7QUF0QlY7QUE2QkE7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBM0JGO0FBOEJBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBM0JGO0FBOEJBO0VBQ0UsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBM0JGO0FBOEJBO0VBQ0Usa0JBQUE7QUEzQkY7QUE4QkE7RUFDRSw4QkFBQTtBQTNCRjtBQThCQTtFQUNFLHVCQUFBO0FBM0JGO0FBOEJBO0VBQ0Usa0JBQUE7QUEzQkY7QUE4QkE7RUFDRSx1QkFBQTtBQTNCRjtBQThCQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUEzQkY7QUE4QkE7RUFDRSx5QkFBQTtBQTNCRjtBQThCQTtFQUNFLHlCQXJNYTtFQXNNYixXQUFBO0FBM0JGO0FBOEJBO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0FBM0JGO0FBNkJFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBM0JKO0FBOEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQWhPZTtFQWlPZixlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUE1Qko7QUFrQ0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQS9CRjtBQWlDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUEvQko7QUFnQ0k7RUFDRSxXQUFBO0FBOUJOO0FBZ0NJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBOUJOO0FBZ0NNO0VBQ0UsZUFBQTtBQTlCUjtBQWlDTTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUEvQlI7QUFpQ1E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQS9CVjtBQWlDVTtFQUNFLG1DQWxSTztFQW1SUCxlQUFBO0FBL0JaO0FBa0NVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQTFSSztFQTJSTCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUFoQ1o7QUFpQ1k7RUFDRSxrQkFBQTtBQS9CZDtBQWlDWTtFQUNFLGFBQUE7QUEvQmQ7QUFtQ1U7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQWpDWjtBQW1DWTtFQUNFOztHQUFBO0VBR0EsVUFBQTtFQUNBLGdCQUFBO0FBakNkO0FBa0NjO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhDaEI7QUFpQ2dCO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQS9CbEI7QUFtQ1k7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBakNkO0FBa0NjO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFoQ2hCO0FBa0NjO0VBQ0UseUJBclZEO0VBc1ZDLG1CQUFBO0VBQ0Esc0NBQUE7QUFoQ2hCO0FBc0NRO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFwQ1Y7QUFzQ1U7RUFDRSxtQ0E3V087RUE4V1AsZUFBQTtBQXBDWjtBQXVDVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7QUFyQ1o7QUFzQ1k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQTlYSztFQStYTCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBcENkO0FBdUNZOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQXJDZDtBQTBDUTtFQUNFLHlCQXhZSztFQXlZTCxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBdFpPO0VBdVpQLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXhDVjtBQTBDVTtFQUNFLHVCQUFBO0VBQ0EsY0F2Wkc7RUF3Wkgsc0NBQUE7QUF4Q1o7QUE0Q007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUExQ1I7QUE0Q1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0E1YVM7RUE2YVQsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUExQ1Y7QUE0Q1U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTFDWjtBQStDTTtFQUNFLG1DQXRjUztFQXVjVCxlQUFBO0FBN0NSO0FBZ0RNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUE5Q1I7QUFnRFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtBQS9DVjtBQWlEVTtFQUNFLGFBQUE7QUEvQ1o7QUFpRFk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaERkO0FBa0RjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQWhEaEI7QUFtRGM7RUFDRSx5QkF4ZUQ7RUF5ZUMsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQWpEaEI7QUFvRGM7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFsRGhCO0FBbURnQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFqRGxCO0FBbURrQjtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQWpEcEI7QUFxRGdCO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQW5EbEI7QUFxRGtCO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBbkRwQjtBQTJEUTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBekRWO0FBNkRNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUEzRFI7QUE2RFE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQTNEVjtBQThEUTtFQUNFLGVBQUE7QUE1RFY7QUErRFE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBcmpCTztFQXNqQlAseUJBL2lCSztFQWdqQkwsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE3RFY7QUErRFU7RUFDRSxvQkFBQTtBQTdEWjtBQWdFVTtFQUNFLHNCQUFBO0FBOURaO0FBaUVVO0VBQ0UsdUJBQUE7RUFDQSxjQS9qQkc7RUFna0JILHNDQUFBO0FBL0RaO0FBa0VVO0VBQ0UsWUFBQTtBQWhFWjtBQXFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQW5FUjtBQXFFUTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBdmxCSztFQXdsQkwsK0JBam1CTTtFQWttQk4sZUFBQTtFQUNBLGVBQUE7QUFuRVY7QUFxRVU7RUFDRSx5QkE3bEJHO0VBOGxCSCw2QkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQW5FWjtBQTBFRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBeEVKO0FBNEVBO0VBSVE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTVFUjtFQThFUTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQTVFVjs7RUFrRkE7SUFDRSxVQUFBO0VBL0VGOztFQWlGQTtJQUNFLHNCQUFBO0VBOUVGO0VBK0VFO0lBQ0UsV0FBQTtFQTdFSjtFQStFRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQTdFSjtFQWdGRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUE5RUo7RUFnRkk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtFQTlFTjtFQWdGTTtJQUNFLHNCQUFBO0VBOUVSO0VBaUZNO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUEvRVI7RUFnRlE7SUFDRSxlQUFBO0lBQ0Esa0NBQUE7RUE5RVY7RUErRVU7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtFQTdFWjtFQStFVTtJQUNFLGdCQUFBO0VBN0VaO0VBb0ZNO0lBQ0UsaURBQUE7RUFsRlI7RUFxRk07SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUFuRlI7RUF3RkU7SUFDRSxhQUFBO0VBdEZKO0FBQ0YiLCJmaWxlIjoibG90ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItYm90dG9uOiAjMjhhYWUxO1xyXG5cclxuLy8gRXN0aWxvcyBkZSBjb21wb25lbnRlIHRvb2x0aXBcclxuXHJcbiRjb2xvci1ib3R0b246ICMyOGFhZTE7XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgLyogUmVjdGFuZ2xlIDQwICovXHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yX251bWVyb3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC5jb21iaW5hdGlvbkJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwIHtcclxuICAgICAgICAvKiA0ICovXHJcblxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWxlY2Npb25BbGwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgKi9cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAvKiBwYWRkaW5nOiAwOyAqL1xyXG4gICAgICAvKiBtYXJnaW46IDA7ICovXHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVuZWRvcl9mcmFjY2lvbmVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgLmZyYWNjaW9uZXMge1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7ICovXHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoZWNrYm94IHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGVja2JveDpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvb2x0aXAgc3BhbiB7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xyXG4gIHRvcDogNHJlbTtcclxuICBsZWZ0OiAwLjZyZW07XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWM2YzY7XHJcbiAgcGFkZGluZzogM3B4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlOyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAtOTk5ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciBzcGFuIHtcclxuICBmb250LWZhbWlseTogQ2FsaWJyaSwgR2VuZXZhLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxZW07XHJcbiAgdG9wOiAyZW07XHJcbiAgei1pbmRleDogOTk7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciBpbWcge1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IC0xMHB4IDAgMCAtNTVweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIGVtIHtcclxuICBmb250LWZhbWlseTogQ2FuZGFyYSwgVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjJlbSAwIDAuNmVtIDA7XHJcbn1cclxuXHJcbi5jbGFzc2ljIHtcclxuICBwYWRkaW5nOiAwLjhlbSAxZW07XHJcbn1cclxuXHJcbi5jdXN0b20ge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuOGVtIDAuOGVtIDJlbTtcclxufVxyXG5cclxuKiBodG1sIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2xhc3NpYyB7XHJcbiAgcGFkZGluZzogMC44ZW0gMWVtO1xyXG59XHJcblxyXG4qIGh0bWwgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jbGFzc2ljIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmFhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFkMzM7XHJcbn1cclxuXHJcbi5mb25kb05vcm1hbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLmZvbmRvQXp1bCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm51bWVyb3NfZ3J1cG8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0bykgMWZyO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmc6IDhweCA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXN0aWxvcyBkZSBjb21wb25lbnQgdG9vbHRpcFxyXG5cclxuLmNvbnRlbmVkb3JfbG90ZXJpYSB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cclxuICAudmVudGFzQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC5pbmZvQm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnRhZ0l0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdEJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yX3NlbGVjdCB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWxlY3Rfb3B0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuXHJcbiAgICAgICAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgICAgICAgIC8qICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAqL1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgIC8qIGZpeCBzcGVjaWZpYyBmb3IgRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTAwMDBweDtcclxuICAgICAgICAgICAgICAmICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcclxuICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5udW1lcm9zIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50YWJzX2FuaW1hbGVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzI2KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDEycHggMTVweCAwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA3JTtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XHJcbiAgICAgICAgICBnYXA6IDEwcHggMTVweDtcclxuXHJcbiAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5jb250ZW5lZG9yX3NlbGVjY2lvbl9udW1lcm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIC5pbWFnZW5fYW5pbWFsIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubnVtZXJvcyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbmVkb3JfYm90b25lcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5kZXNhcGFyZWNlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFwYXJlY2VyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3RvbiB7XHJcbiAgICAgICAgICB3aWR0aDogM3Z3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzdnc7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggMCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDAgM3B4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvdG9uX2JvbGV0byB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE3cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpY2tldFNjcm9sbGVyIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC50b29sdGlwIHtcclxuICAgIC5jb250ZW5lZG9yX251bWVyb3Mge1xyXG4gICAgICAuY29udGVuZWRvcl9mcmFjY2lvbmVzIHtcclxuICAgICAgICAuZnJhY2Npb25lcyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnBheW1lbnRCb3gge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgLmNvbnRlbmVkb3JfbG90ZXJpYSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLnZlbnRhc0JveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmluZm9Cb3gge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcblxyXG4gICAgICAuc2VsZWN0Qm94IHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yX3NlbGVjdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aXZhZG8ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aWNrZXRTY3JvbGxlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".contenedor[_ngcontent-%COMP%] {\n  \n  background: #ffffff;\n  border-radius: 20px;\n}\n.contenedor[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #b51f20;\n  margin: auto !important;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_numeros[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n}\n.contenedor[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_fracciones[_ngcontent-%COMP%] {\n  border-radius: 0 0 10px 10px;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 35px !important;\n  font-weight: bold;\n  margin: 10px;\n  font-family: \"Monstserrat Bold\";\n  opacity: 0.7;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 0 0 10px 10px;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n  margin: 0 0 10px 0;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n.contenedor[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  width: 150px;\n}\n.contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 30%;\n  max-width: 400px;\n  height: 100%;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  margin: 10px 0;\n  height: 60px;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(4, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  \n  width: 25%;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  \n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 35%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  margin: 10px 10px 10px 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-size: 25px;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4.5px solid #b51f20;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  padding: 15px;\n  margin: 10px 0;\n  width: 30%;\n  height: 60px;\n  max-width: 300px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_numeros[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .contenedor_fracciones[_ngcontent-%COMP%] {\n  border-radius: 0 0 10px 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  background-color: #fff;\n  color: #444;\n  margin: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  margin: auto;\n  margin: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #b51f20;\n  font-family: \"Monstserrat Regular\";\n  background-color: #b51f20;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #fff;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b51f20;\n  border: 1px solid transparent;\n  color: #fff;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0 6px !important;\n    width: 45px !important;\n    height: 45px !important;\n    font-size: 20px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   .activado[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto) !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contenedor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: auto;\n    margin: 10px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBUko7QUFVRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBUko7QUFXRTtFQUNFLHlCQXpCVTtFQTBCVixzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQVRKO0FBV0U7RUFDRSw0QkFBQTtBQVRKO0FBV0U7RUFDRSw0QkFBQTtBQVRKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFUSjtBQVdJO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFqRFU7RUFrRFYsWUFBQTtBQVROO0FBWUU7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7QUFWSjtBQVdJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQVVNO0VBQ0UsYUFBQTtBQVJSO0FBVU07RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQVJSO0FBZ0JBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFkRjtBQWdCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFkSjtBQWVJO0VBQ0UsV0FBQTtBQWJOO0FBZUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFiTjtBQWVNO0VBQ0UsZUFBQTtBQWJSO0FBZU07RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBYlI7QUFjUTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBWlY7QUFjVTtFQUNFLG1DQS9HTztFQWdIUCxlQUFBO0FBWlo7QUFlVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0F2SEs7RUF3SEwsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBYlo7QUFlWTtFQUNFLGtCQUFBO0FBYmQ7QUFlWTtFQUNFLGFBQUE7QUFiZDtBQWlCVTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBZlo7QUFpQlk7RUFDRTs7R0FBQTtFQUdBLFVBQUE7RUFDQSxnQkFBQTtBQWZkO0FBZ0JjO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWRoQjtBQWVnQjtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFibEI7QUFpQlk7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZmQ7QUFnQmM7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWRoQjtBQWdCYztFQUNFLHlCQXZMRjtFQXdMRSxtQkFBQTtFQUNBLHNDQUFBO0FBZGhCO0FBb0JRO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFsQlY7QUFvQlU7RUFDRSxtQ0EzTU87RUE0TVAsZUFBQTtBQWxCWjtBQXFCVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7QUFuQlo7QUFvQlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0E3Tks7RUE4TkwsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQWxCZDtBQXFCWTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFuQmQ7QUF3QlE7RUFDRSx5QkF6T0k7RUEwT0osYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FwUE87RUFxUFAsZUFBQTtFQUNBLGVBQUE7QUF0QlY7QUF3QlU7RUFDRSx1QkFBQTtFQUNBLGNBeFBFO0VBeVBGLHNDQUFBO0FBdEJaO0FBMEJNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBeEJSO0FBMEJRO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBelFTO0VBMFFULGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBeEJWO0FBMEJVO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUF4Qlo7QUE2Qk07RUFDRSxtQ0FuU1M7RUFvU1QsZUFBQTtBQTNCUjtBQThCTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBNUJSO0FBOEJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUFBLGNBQUE7QUE3QlY7QUErQlU7RUFDRSxhQUFBO0FBN0JaO0FBK0JZO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTlCZDtBQWdDYztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUE5QmhCO0FBaUNjO0VBQ0UseUJBelVGO0VBMFVFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUEvQmhCO0FBaUNjO0VBQ0UsNEJBQUE7QUEvQmhCO0FBaUNjO0VBQ0UsNEJBQUE7QUEvQmhCO0FBa0NjO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBaENoQjtBQWlDZ0I7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBL0JsQjtBQWlDa0I7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUEvQnBCO0FBbUNnQjtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFqQ2xCO0FBbUNrQjtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWpDcEI7QUF5Q1E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF2Q1Y7QUEyQ007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXpDUjtBQTJDUTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBekNWO0FBNENRO0VBQ0UsZUFBQTtBQTFDVjtBQTZDUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0F4Wk87RUF5WlAseUJBdFpJO0VBdVpKLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBM0NWO0FBNkNVO0VBQ0Usb0JBQUE7QUEzQ1o7QUE4Q1U7RUFDRSxzQkFBQTtBQTVDWjtBQStDVTtFQUNFLHVCQUFBO0VBQ0EsY0F0YUU7RUF1YUYsc0NBQUE7QUE3Q1o7QUFnRFU7RUFDRSxZQUFBO0FBOUNaO0FBbURNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakRSO0FBbURRO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0E5Ykk7RUErYkosK0JBcGNNO0VBcWNOLGVBQUE7RUFDQSxlQUFBO0FBakRWO0FBbURVO0VBQ0UseUJBcGNFO0VBcWNGLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FBakRaO0FBdURFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFyREo7QUF5REE7RUFDRTtJQUNFLHNCQUFBO0VBdERGO0VBd0RFO0lBQ0UsV0FBQTtFQXRESjtFQXdERTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQXRESjtFQXlERTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUF2REo7RUF5REk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtFQXZETjtFQXlETTtJQUNFLHNCQUFBO0VBdkRSO0VBMERNO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUF4RFI7RUF5RFE7SUFDRSxlQUFBO0lBQ0Esa0NBQUE7RUF2RFY7RUF3RFU7SUFDRSx3QkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQkFBQTtFQXREWjtFQXlEVTtJQUNFLGdCQUFBO0VBdkRaO0VBOERNO0lBQ0UsaURBQUE7RUE1RFI7RUErRE07SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBN0RSO0VBa0VFO0lBQ0UsYUFBQTtFQWhFSjtBQUNGIiwiZmlsZSI6ImxvdHRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1sb3R0bzogI2I1MWYyMDtcclxuXHJcbi8vIEVzdGlsb3MgZGVsIGNvbXBvbmVudGUgc2VsZWNjaW9uIExvdHRvXHJcbi5jb250ZW5lZG9yIHtcclxuICAvKiBSZWN0YW5nbGUgNDAgKi9cclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICBociB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLmNvbnRlbmVkb3JfbnVtZXJvcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IC5jb250ZW5lZG9yX2ZyYWNjaW9uZXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW5lZG9yX2ZyYWNjaW9uZXMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW46IDAgNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFc3RpbG9zIGNvbXBvbmVudGUgc2VsZWNpY29uIExvdHRvXHJcblxyXG4uY29udGVuZWRvcl9sb3RlcmlhIHtcclxuICB3aWR0aDogOTglO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cclxuICAudmVudGFzQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC5pbmZvQm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnRhZ0l0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0Qm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAuY29udGVuZWRvcl9zZWxlY3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VsZWN0X29wdGlvbiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cclxuICAgICAgICAgICAgLm9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgLyogICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICovXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgLyogZml4IHNwZWNpZmljIGZvciBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IC0xMDAwMHB4O1xyXG4gICAgICAgICAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5udW1lcm9zX3N1ZXJ0ZSB7XHJcbiAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubnVtZXJvcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgICBib3JkZXI6IDQuNXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50YWJzX2FuaW1hbGVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzI2KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDEycHggMTVweCAwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA3JTtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XHJcbiAgICAgICAgICBnYXA6IDEwcHggMTVweDtcclxuXHJcbiAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBkaXYge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IC5jb250ZW5lZG9yX251bWVyb3Mge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY29udGVuZWRvcl9mcmFjY2lvbmVzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuY29udGVuZWRvcl9zZWxlY2Npb25fbnVtZXJvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VuX2FuaW1hbCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVuZWRvcl9ib3RvbmVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRlc2FwYXJlY2VyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXBhcmVjZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAzdnc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDN2dztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sb3R0bztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggMCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDAgM3B4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1sb3R0bztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm90b25fYm9sZXRvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTdweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWxvdHRvO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbG90dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aWNrZXRTY3JvbGxlciB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGVuZWRvcl9sb3RlcmlhIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnZlbnRhc0JveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmluZm9Cb3gge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVuZWRvcl9zZWxlY2Npb24ge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcblxyXG4gICAgICAuc2VsZWN0Qm94IHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yX3NlbGVjdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGl2YWRvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZSB7XHJcbiAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0bykgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGlja2V0U2Nyb2xsZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  styles: [".tooltip[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  background: #ffffff;\n  border-radius: 20px;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.tooltip[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  max-height: 300px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   .serieBox[_ngcontent-%COMP%] {\n  border: 4.5px solid #b51f20;\n  border-radius: 15px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   .serieBox[_ngcontent-%COMP%]   .serieTitle[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   .serieBox[_ngcontent-%COMP%]   .serieItem[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  font-weight: bold;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .combinationBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px !important;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  font-family: \"Monstserrat Bold\";\n  opacity: 0.7;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 0 10px;\n  \n  align-items: center;\n  \n  \n  \n  text-align: left;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: italic;\n  font-weight: bold;\n  width: 100%;\n  margin: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .seleccionAll[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%] {\n  \n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: pointer;\n  height: 50px;\n  border: 4.5px solid #b51f20;\n  background-color: #fff;\n  border-radius: 150px;\n  font-size: 25px;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n.tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  color: white;\n}\n.tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: opacity 1s ease;\n  -webkit-transition: opacity 1s ease;\n  top: 4rem;\n  left: 0.6rem;\n  z-index: 500;\n  background-color: #d1c6c6;\n  padding: 3px 30px;\n  border-radius: 20px;\n  \n  margin-left: -999em;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-family: Calibri, Geneva, Tahoma, Arial, sans-serif;\n  position: absolute;\n  left: 1em;\n  top: 2em;\n  z-index: 99;\n  margin-left: 0;\n  width: 250px;\n}\n.tooltip[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  border: 0;\n  margin: -10px 0 0 -55px;\n  float: left;\n  position: absolute;\n}\n.tooltip[_ngcontent-%COMP%]:hover   em[_ngcontent-%COMP%] {\n  font-family: Candara, Tahoma, Geneva, sans-serif;\n  font-size: 1.2em;\n  font-weight: bold;\n  display: block;\n  padding: 0.2em 0 0.6em 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 30%;\n  max-width: 400px;\n  height: 100%;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  margin: 10px 0;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(4, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  \n  margin: 10px;\n  width: 25%;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  border: 4.5px solid #b51f20;\n  border-radius: 15px;\n  background-color: white;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  \n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 35%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 10px 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  font-size: 25px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4.5px solid #b51f20;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border: 1px solid #b51f20;\n  padding: 15px;\n  border-radius: 30px;\n  max-height: 50px;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px auto;\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  padding: 15px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: white;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  height: 60px;\n  margin: 10px 0;\n  width: 30%;\n  max-width: 300px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  background-color: #f2f2f2;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);\n  border-radius: 0.3em;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: transparent;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #b51f20;\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(5, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 10px;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  border: 4.5px solid #b51f20;\n  border-radius: 20px;\n  font-weight: bold;\n  background-color: white;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  width: 100%;\n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #b51f20;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  background-color: #fff;\n  color: #444;\n  margin: 4px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 1px solid #b51f20;\n  margin: 15px auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #b51f20;\n  font-family: \"Monstserrat Regular\";\n  background-color: #b51f20;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #b51f20;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: white;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #b51f20;\n  color: #b51f20;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b51f20;\n  border: 1px solid transparent;\n  color: white;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .tooltip[_ngcontent-%COMP%]   .contenedor_numeros[_ngcontent-%COMP%]   .contenedor_fracciones[_ngcontent-%COMP%]   .fracciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 18px;\n  }\n\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    width: 70px !important;\n    height: 70px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0 6px !important;\n    width: 45px !important;\n    height: 45px !important;\n    font-size: 20px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto) !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: 15px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGxvbmFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBVko7QUFhRTtFQUNFLHlCQXBCVztFQXFCWCxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBWEo7QUFjRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWFNO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQVhSO0FBWVE7RUFDRSwwQkFBQTtBQVZWO0FBWVE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBVlY7QUFhTTtFQUNFLE1BQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUVBLCtCQXJFUTtFQXNFUixZQUFBO0VBQ0EsWUFBQTtBQWRSO0FBaUJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFmTjtBQWlCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFmUjtBQWtCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBaEJSO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBbEJOO0FBb0JNO0VBQ0U7MkNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFvQlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBbEJWO0FBcUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBbkJWO0FBc0JRO0VBQ0UseUJBaElLO0VBaUlMLFlBQUE7QUFwQlY7QUEyQkE7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekJGO0FBNEJBO0VBQ0UsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBekJGO0FBNEJBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekJGO0FBNEJBO0VBQ0UsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBekJGO0FBOEJBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUE1QkY7QUE4QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBNUJKO0FBNkJJO0VBQ0UsV0FBQTtBQTNCTjtBQTZCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTNCTjtBQTZCTTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUEzQlI7QUE2QlE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTNCVjtBQTZCVTtFQUNFLG1DQTNOTztFQTROUCxlQUFBO0FBM0JaO0FBOEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FwT0s7RUFxT0wsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUE1Qlo7QUE2Qlk7RUFDRSxrQkFBQTtBQTNCZDtBQTZCWTtFQUNFLGFBQUE7QUEzQmQ7QUErQlU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQTdCWjtBQStCWTtFQUNFOztHQUFBO0VBR0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQTdCZDtBQThCYztFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNUJoQjtBQTZCZ0I7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBM0JsQjtBQStCWTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE3QmQ7QUE4QmM7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTVCaEI7QUE4QmM7RUFDRSx5QkFwU0Q7RUFxU0MsbUJBQUE7RUFDQSxzQ0FBQTtBQTVCaEI7QUFrQ1E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWhDVjtBQWtDVTtFQUNFLG1DQTNUTztFQTRUUCxlQUFBO0FBaENaO0FBbUNVO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBakNaO0FBa0NZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBN1VLO0VBOFVMLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFoQ2Q7QUFtQ1k7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBakNkO0FBbUNZO0VBQ0UseUJBblZDO0VBb1ZELHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBOVZHO0VBK1ZILGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFqQ2Q7QUFtQ2M7RUFDRSx1QkFBQTtFQUNBLGNBbFdEO0VBbVdDLHNDQUFBO0FBakNoQjtBQXVDUTtFQUNFLHlCQTdXUztFQThXVCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FwWE87RUFxWFAsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXJDVjtBQXVDVTtFQUNFLHVCQUFBO0VBQ0EsY0E1WE87RUE2WFAsc0NBQUE7QUFyQ1o7QUEwQ007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBeENSO0FBMENRO0VBQ0UsbUNBNVlTO0VBNllULGVBQUE7QUF4Q1Y7QUEyQ1E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FuWk87RUFvWlAsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtBQXpDVjtBQTJDVTtFQUNFLGtCQUFBO0FBekNaO0FBMkNVO0VBQ0UsYUFBQTtBQXpDWjtBQTZDUTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQXZhUztFQXdhVCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUEzQ1Y7QUE2Q1U7RUFDRSx3QkFBQTtBQTNDWjtBQThDVTtFQUNFLFVBQUE7QUE1Q1o7QUErQ1U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUE3Q1o7QUFnRFU7RUFDRSxtQkFBQTtBQTlDWjtBQWdEVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBOUNaO0FBK0NZO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTdDZDtBQThDYztFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBNUNoQjtBQWdEVTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE5Q1o7QUErQ1k7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTdDZDtBQStDWTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQTdDZDtBQWtETTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWhEUjtBQWtEUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQTdmUztFQThmVCxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWhEVjtBQWtEVTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBaERaO0FBcURNO0VBQ0UsbUNBdmhCUztFQXdoQlQsZUFBQTtBQW5EUjtBQXFETTtFQUNFLGVBQUE7QUFuRFI7QUFxRE07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQW5EUjtBQXFEUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0FBcERWO0FBc0RVO0VBQ0UsYUFBQTtBQXBEWjtBQXNEWTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFyRGQ7QUF1RGM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBckRoQjtBQXdEYztFQUNFLHlCQTVqQkQ7RUE2akJDLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUF0RGhCO0FBeURjO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBdkRoQjtBQXdEZ0I7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBdERsQjtBQXdEa0I7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUF0RHBCO0FBMERnQjtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUF4RGxCO0FBMERrQjtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQXhEcEI7QUFnRVE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtBQS9EVjtBQWtFTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBaEVSO0FBa0VRO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFoRVY7QUFtRVE7RUFDRSxlQUFBO0FBakVWO0FBb0VRO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQXhvQk87RUF5b0JQLHlCQXRvQlM7RUF1b0JULFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbEVWO0FBb0VVO0VBQ0Usb0JBQUE7QUFsRVo7QUFxRVU7RUFDRSxzQkFBQTtBQW5FWjtBQXNFVTtFQUNFLHVCQUFBO0VBQ0EsY0F0cEJPO0VBdXBCUCxzQ0FBQTtBQXBFWjtBQXVFVTtFQUNFLFlBQUE7QUFyRVo7QUEwRU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF4RVI7QUEwRVE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQTlxQlM7RUErcUJULCtCQXByQk07RUFxckJOLGVBQUE7RUFDQSxlQUFBO0FBeEVWO0FBMEVVO0VBQ0UseUJBcHJCTztFQXFyQlAsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUF4RVo7QUE4RUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTVFSjtBQWdGQTtFQUlRO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFoRlI7RUFrRlE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFoRlY7O0VBc0ZBO0lBQ0Usc0JBQUE7RUFuRkY7RUFxRkU7SUFDRSxXQUFBO0VBbkZKO0VBcUZFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBbkZKO0VBc0ZFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBcEZKO0VBdUZNO0lBQ0UsYUFBQTtFQXJGUjtFQXNGUTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFwRlY7RUF3Rkk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtFQXRGTjtFQXVGTTtJQUNFLHNCQUFBO0VBckZSO0VBd0ZNO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUF0RlI7RUF1RlE7SUFDRSxrQ0FBQTtFQXJGVjtFQXNGVTtJQUNFLHdCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLDBCQUFBO0VBcEZaO0VBMkZNO0lBQ0UsaURBQUE7RUF6RlI7RUE0Rk07SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUExRlI7RUErRkU7SUFDRSxhQUFBO0VBN0ZKO0FBQ0YiLCJmaWxlIjoibWlsbG9uYXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdWVudGUtdGl0dWxvOiBcIk1vbnN0c2VycmF0IEJvbGRcIjtcclxuJGZ1ZW50ZS1zdWJ0aXR1bG86IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuJGZ1ZW50ZS1wYXJyYWZvOiBcIk1vbnN0c2VycmF0IFJlZ3VsYXJcIjtcclxuJGZ1ZW50ZS1ib3RvbmVzOiBcIk1vbnN0c2VycmF0IFNlbWlCb2xkXCI7XHJcblxyXG4kY29sb3ItbWlsbG9uYXJpYTogI2I1MWYyMDtcclxuLy8kY29sb3ItbWlsbG9uYXJpYTogIzA1NzMzMztcclxuXHJcbiRjb2xvci1ib3R0b246ICNiNTFmMjA7XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbmVkb3JfbnVtZXJvcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLmNvbWJpbmF0aW9uQm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5zZXJpZUJveCB7XHJcbiAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgLnNlcmllVGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJpZUl0ZW0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgLyogNCAqL1xyXG5cclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXRpdHVsbztcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VsZWNjaW9uQWxsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgICAgLyogbWFyZ2luOiAwOyAqL1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbmVkb3JfZnJhY2Npb25lcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5mcmFjY2lvbmVzIHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pOyAqL1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGVja2JveCB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbHRpcCBzcGFuIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XHJcbiAgdG9wOiA0cmVtO1xyXG4gIGxlZnQ6IDAuNnJlbTtcclxuICB6LWluZGV4OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxYzZjNjtcclxuICBwYWRkaW5nOiAzcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAvKiB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IC05OTllbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIHNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBHZW5ldmEsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDFlbTtcclxuICB0b3A6IDJlbTtcclxuICB6LWluZGV4OiA5OTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIGltZyB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogLTEwcHggMCAwIC01NXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgZW0ge1xyXG4gIGZvbnQtZmFtaWx5OiBDYW5kYXJhLCBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuMmVtIDAgMC42ZW0gMDtcclxufVxyXG5cclxuLy8gRXN0aWxvcyBkZSBzZWxlY2Npb24gYW5pbWFsXHJcblxyXG4uY29udGVuZWRvcl9sb3RlcmlhIHtcclxuICB3aWR0aDogOTglO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cclxuICAudmVudGFzQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC5pbmZvQm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGVuZG9yX3NlbGVjY2lvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuc2VsZWN0Qm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlbGVjdF9vcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cclxuICAgICAgICAgICAgLm9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgLyogICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICovXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgIC8qIGZpeCBzcGVjaWZpYyBmb3IgRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTAwMDBweDtcclxuICAgICAgICAgICAgICAmICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcclxuICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5udW1lcm9zIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiA0LjVweCBzb2xpZCAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3R0b247XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtYm90b25lcztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbWlsbG9uYXJpYTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW5lZG9yX3NlbGVjdF9hbmltYWxlcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0X29wdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMDtcclxuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuXHJcbiAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogNC41cHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLyogZml4IHNwZWNpZmljIGZvciBGaXJlZm94ICovXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTEwMDAwcHg7XHJcbiAgICAgICAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTFmMjA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudGFic19hbmltYWxlcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyNik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAxMnB4IDE1cHggMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgICAgICByaWdodDogNyU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgICAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAgICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWdJdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgIHRib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcclxuICAgICAgICAgIGdhcDogMTBweCAxNXB4O1xyXG5cclxuICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDdweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm90dG9uO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWNjaW9uX251bWVybyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgLmltYWdlbl9hbmltYWwge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5udW1lcm9zIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvdHRvbjtcclxuXHJcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbmVkb3JfYm90b25lcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5kZXNhcGFyZWNlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFwYXJlY2VyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3RvbiB7XHJcbiAgICAgICAgICB3aWR0aDogM3Z3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzdnc7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbWlsbG9uYXJpYTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSBpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwcHggMCAzcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1pbGxvbmFyaWE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvdG9uX2JvbGV0byB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAxN3B4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1taWxsb25hcmlhO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWlsbG9uYXJpYTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aWNrZXRTY3JvbGxlciB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAudG9vbHRpcCB7XHJcbiAgICAuY29udGVuZWRvcl9udW1lcm9zIHtcclxuICAgICAgLmNvbnRlbmVkb3JfZnJhY2Npb25lcyB7XHJcbiAgICAgICAgLmZyYWNjaW9uZXMge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW5lZG9yX2xvdGVyaWEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudmVudGFzQm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW5mb0JveCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5kb3Jfc2VsZWNjaW9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuXHJcbiAgICAgIC5jb250ZW5lZG9yX3NlbGVjdF9hbmltYWxlcyB7XHJcbiAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNlbGVjdEJveCB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jb250ZW5lZG9yX3NlbGVjdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aWNrZXRTY3JvbGxlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ 1987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/pagos.service */ 6862);
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrito.service */ 9384);
/* harmony import */ var _juegos_pozo_services_venta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../juegos/pozo/services/venta.service */ 3630);
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

























function PozoComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PozoComponent_div_1_div_8_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const animal_r16 = restoredCtx.$implicit;
      const i_r17 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r18.agregar(animal_r16, i_r17);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const animal_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("id", "nombre-", animal_r16.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", animal_r16.status)("value", animal_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("for", "nombre-", animal_r16.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", animal_r16.ruta, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"])("alt", animal_r16.nombre);
  }
}

function PozoComponent_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r14.over25ErrorTag, " ");
  }
}

function PozoComponent_div_1_div_39_table_1_tr_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const numero_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](numero_r25);
  }
}

function PozoComponent_div_1_div_39_table_1_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PozoComponent_div_1_div_39_table_1_tr_2_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const i_r23 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return ctx_r26.seleccionarTicket(ctx_r26.page_size * (ctx_r26.page_number - 1) + i_r23);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PozoComponent_div_1_div_39_table_1_tr_2_p_7_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ticket_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checked", ticket_r22.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r21.obtenerAnimal(ticket_r22.mascota), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ticket_r22.display);
  }
}

function PozoComponent_div_1_div_39_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, PozoComponent_div_1_div_39_table_1_tr_2_Template, 8, 3, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "paginacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "hr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](3, 1, ctx_r20.ticketsDisponibles, ctx_r20.page_size, ctx_r20.page_number));
  }
}

function PozoComponent_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PozoComponent_div_1_div_39_table_1_Template, 5, 5, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "mat-paginator", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("page", function PozoComponent_div_1_div_39_Template_mat_paginator_page_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r28.handlerPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r15.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("length", ctx_r15.ticketsDisponibles.length)("pageSize", ctx_r15.page_size);
  }
}

function PozoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-detalle-sorteo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitir", function PozoComponent_div_1_Template_app_detalle_sorteo_emitir_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r30.procesaEmitir($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Selecciona tus mascotas de la suerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, PozoComponent_div_1_div_8_Template, 4, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "\u00BFC\u00F3mo quieres comprar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function PozoComponent_div_1_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r32.tipoSeleccion = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Selecci\u00F3n individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, "5 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "30 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21, "50 Boletos al azar");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24, "Ingresa tu n\u00FAmero de la suerte:");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r33.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r34.combinacionDeLaSuerte[0] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "input", 25, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r35.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r36.combinacionDeLaSuerte[1] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "input", 25, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r37.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r38.combinacionDeLaSuerte[2] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PozoComponent_div_1_Template_input_input_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r39.validate();
    })("ngModelChange", function PozoComponent_div_1_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r40.combinacionDeLaSuerte[3] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, PozoComponent_div_1_div_34_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PozoComponent_div_1_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r41.buscarNumero();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36, " BUSCAR CARTONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](38, " Si quieres cambiar tu cart\u00F3n, ingresa los n\u00FAmeros nuevamente y haz click en \"Buscar cartones\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](39, PozoComponent_div_1_div_39_Template, 4, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](40, "app-carrito", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitirCompra", function PozoComponent_div_1_Template_app_carrito_emitirCompra_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r42.comprar();
    })("eliminarTodo", function PozoComponent_div_1_Template_app_carrito_eliminarTodo_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r43.deleteAllTickets();
    })("deleteLoteriaTicket", function PozoComponent_div_1_Template_app_carrito_deleteLoteriaTicket_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r44.deleteLoteriaTicket($event);
    })("deleteLottoTicket", function PozoComponent_div_1_Template_app_carrito_deleteLottoTicket_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r45.deleteLottoTicket($event);
    })("deletePozoTicket", function PozoComponent_div_1_Template_app_carrito_deletePozoTicket_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r46.deletePozoTicket($event);
    })("deleteMillonariaTicket", function PozoComponent_div_1_Template_app_carrito_deleteMillonariaTicket_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r47.deleteMillonariaTicket($event);
    })("deleteLoteriaFraccion", function PozoComponent_div_1_Template_app_carrito_deleteLoteriaFraccion_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r48.deleteLoteriaFraccion($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](29);

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](31);

    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](33);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("sorteos", ctx_r0.sorteo)("loteria", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r0.seleccionAnimales);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.over25Error);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.showNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ticketsLoteria", ctx_r0.ticketsLoteria)("ticketsMillonaria", ctx_r0.ticketsMillonaria)("ticketsLotto", ctx_r0.ticketsLotto)("ticketsPozo", ctx_r0.ticketsPozo);
  }
}

function PozoComponent_app_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader", 51);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r1.loadingMessage);
  }
}

function PozoComponent_app_error_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function PozoComponent_app_error_4_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r49.closeError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r2.errorMessage);
  }
}

function PozoComponent_app_error_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-error", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeError", function PozoComponent_app_error_5_Template_app_error_closeError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r51.closeValidationError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msg", ctx_r3.validationErrorMessage);
  }
}

function PozoComponent_app_confirmacion_de_venta_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-confirmacion-de-venta", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("compraConfirmada", function PozoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraConfirmada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r53.confirmarCompra();
    })("compraCancelada", function PozoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_compraCancelada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r55.cancelarCompra();
    })("comprarDespues", function PozoComponent_app_confirmacion_de_venta_6_Template_app_confirmacion_de_venta_comprarDespues_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r56.dismissCompras();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r4.detalleCompra);
  }
}

function PozoComponent_app_instantaneas_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-instantaneas", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function PozoComponent_app_instantaneas_7_Template_app_instantaneas_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r57.abrirFinalizar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("resultados", ctx_r5.instantaneas)("isLoteriaNacional", true);
  }
}

function PozoComponent_app_venta_finalizada_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-venta-finalizada", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function PozoComponent_app_venta_finalizada_8_Template_app_venta_finalizada_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r59.finalizarCompra();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("compra", ctx_r6.detalleCompra);
  }
}

function PozoComponent_app_saldo_insuficiente_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-saldo-insuficiente", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("volver", function PozoComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_volver_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r61.dismissCompras();
    })("recarga", function PozoComponent_app_saldo_insuficiente_9_Template_app_saldo_insuficiente_recarga_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r63.irARecarga();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r7.recargaDeSaldoMessage);
  }
}

function PozoComponent_app_venta_cancelada_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-venta-cancelada", 57);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("message", ctx_r8.cancelMessage);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
  return new (t || PozoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_pagos_service__WEBPACK_IMPORTED_MODULE_2__.PagosService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_carrito_service__WEBPACK_IMPORTED_MODULE_3__.CarritoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_juegos_pozo_services_venta_service__WEBPACK_IMPORTED_MODULE_4__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef));
};

PozoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: PozoComponent,
  selectors: [["app-pozo"]],
  decls: 11,
  vars: 13,
  consts: [["class", "contenedor_loteria", 4, "ngIf"], ["tipoLoteria", "pozo", 3, "ticketsLoteria", "ticketsLotto", "ticketsPozo", "ticketsMillonaria", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteLoteriaFraccion", "deleteMillonariaTicket"], ["loader", "pozo", 3, "message", 4, "ngIf"], [3, "msg", "closeError", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues", 4, "ngIf"], ["tipoLoteria", "5", "class", "paymentItem", 3, "resultados", "isLoteriaNacional", "close", 4, "ngIf"], ["class", "paymentItem", 3, "compra", "volver", 4, "ngIf"], ["class", "paymentItem", 3, "message", "volver", "recarga", 4, "ngIf"], ["class", "paymentItem", 3, "message", 4, "ngIf"], [1, "contenedor_loteria"], [1, "ventasBox"], ["titulo", "Pozo Millonario", "color", "pozo", 1, "infoBox", 3, "sorteos", "loteria", "emitir"], [1, "contendor_seleccion"], [1, "contenedor_select_animales"], [1, "options"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "selectBox"], [1, "contenedor_select"], ["name", "", "id", "", 1, "select_option", 3, "ngModel", "ngModelChange"], ["value", "96", 1, "option"], ["value", "5", 1, "option"], ["value", "30", 1, "option"], ["value", "50", 1, "option"], [1, "numeros_suerte"], [1, "numeros"], ["type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "2", "name", "", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", 3, "appAutoTab", "ngModel", "input", "ngModelChange"], ["input1", ""], ["input2", ""], ["input3", ""], ["type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "2", "name", "", "onInput", "this.value=this.value.replace(/[^0-9]/g,'');", 3, "ngModel", "input", "ngModelChange"], ["input4", ""], ["class", "errorTag", 4, "ngIf"], [1, "activado", 3, "click"], [1, "tagItem"], ["class", "contenedor_numeros_suerte", 4, "ngIf"], ["tipoLoteria", "pozo", 1, "ticketScroller", 3, "ticketsLoteria", "ticketsMillonaria", "ticketsLotto", "ticketsPozo", "emitirCompra", "eliminarTodo", "deleteLoteriaTicket", "deleteLottoTicket", "deletePozoTicket", "deleteMillonariaTicket", "deleteLoteriaFraccion"], [1, "option"], ["type", "checkbox", "name", "nombre", 3, "checked", "value", "id", "click"], [3, "for"], [3, "src", "alt"], [1, "errorTag"], [1, "contenedor_numeros_suerte"], [4, "ngIf"], [1, "contenedor_botones"], ["style-paginator", "", 3, "length", "pageSize", "page"], [4, "ngFor", "ngForOf"], ["size", "2px", "color", "gray"], ["type", "checkbox", "name", "", "id", "", 3, "checked", "click"], [1, "contenedor_seleccion_numero"], [1, "imagen_animal"], ["alt", "", 3, "src"], ["loader", "pozo", 3, "message"], [3, "msg", "closeError"], [1, "paymentItem", 3, "compra", "compraConfirmada", "compraCancelada", "comprarDespues"], ["tipoLoteria", "5", 1, "paymentItem", 3, "resultados", "isLoteriaNacional", "close"], [1, "paymentItem", 3, "compra", "volver"], [1, "paymentItem", 3, "message", "volver", "recarga"], [1, "paymentItem", 3, "message"]],
  template: function PozoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ventas-menu-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PozoComponent_div_1_Template, 41, 17, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "app-floating-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emitirCompra", function PozoComponent_Template_app_floating_menu_emitirCompra_2_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, PozoComponent_app_loader_3_Template, 1, 1, "app-loader", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, PozoComponent_app_error_4_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PozoComponent_app_error_5_Template, 1, 1, "app-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, PozoComponent_app_confirmacion_de_venta_6_Template, 1, 1, "app-confirmacion-de-venta", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PozoComponent_app_instantaneas_7_Template, 1, 2, "app-instantaneas", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, PozoComponent_app_venta_finalizada_8_Template, 1, 1, "app-venta-finalizada", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, PozoComponent_app_saldo_insuficiente_9_Template, 1, 1, "app-saldo-insuficiente", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, PozoComponent_app_venta_cancelada_10_Template, 1, 1, "app-venta-cancelada", 8);
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
  directives: [_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__.MenuHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _components_floating_menu_floating_menu_component__WEBPACK_IMPORTED_MODULE_6__.FloatingMenuComponent, _components_detalle_sorteo_detalle_sorteo_component__WEBPACK_IMPORTED_MODULE_7__.DetalleSorteoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _shared_autotab_directive__WEBPACK_IMPORTED_MODULE_8__.AutoTabDirective, _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__.CarritoComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _shared_style_paginator_directive__WEBPACK_IMPORTED_MODULE_10__.StylePaginatorDirective, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__.ErrorComponent, _components_confirmacion_de_venta_confirmacion_de_venta_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmacionDeVentaComponent, _components_instantaneas_instantaneas_component__WEBPACK_IMPORTED_MODULE_14__.InstantaneasComponent, _components_venta_finalizada_venta_finalizada_component__WEBPACK_IMPORTED_MODULE_15__.VentaFinalizadaComponent, _components_saldo_insuficiente_saldo_insuficiente_component__WEBPACK_IMPORTED_MODULE_16__.SaldoInsuficienteComponent, _components_venta_cancelada_venta_cancelada_component__WEBPACK_IMPORTED_MODULE_17__.VentaCanceladaComponent],
  pipes: [_shared_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: [".contenedor_loteria[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom: 40px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  align-items: flex-end;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  padding: 15px;\n  border-radius: 30px;\n  height: 60px;\n  border: 1px solid #04b865;\n  color: #fff;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n  margin: 10px 0;\n  width: 30%;\n  max-width: 300px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #04b865;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n  width: 30%;\n  max-width: 400px;\n  height: 100%;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  margin: 10px 0;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: transparent;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n  position: relative;\n  width: 100%;\n  height: 180px;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(5, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  background-color: transparent;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  width: 100%;\n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n  width: 35%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 10px 5px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  font-size: 25px;\n  padding: 8px 6px;\n  margin: 0 15px 0 0;\n  text-align: center;\n  font-family: \"Monstserrat SemiBold\";\n  border: 4.5px solid #04b865;\n  border-radius: 150px;\n  color: #000;\n  -moz-appearance: textfield;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-inner-spin-button, .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .errorTag[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  margin-top: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n  z-index: 100;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  font-family: \"Monstserrat Regular\";\n  font-weight: 400;\n  color: #444;\n  line-height: 1.3;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #aaa;\n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: transparent;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: #04b865;\n  position: relative;\n  width: 100%;\n  height: 240px;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  grid-template-columns: repeat(5, 1fr);\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar:vertical {\n  width: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: grey;\n  border-radius: 20px;\n  border: 2px solid grey;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  background-color: transparent;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  vertical-align: middle;\n  width: 100%;\n  border-radius: 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  display: block;\n  float: left;\n  \n  position: absolute;\n  left: -10000px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #fff;\n  text-align: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border-radius: 15px;\n  transition: background-color 0.3s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 11px;\n  background-color: #f2f2f2;\n  color: rgba(0, 0, 0, 0.726);\n  padding: 10px 35px;\n  margin: 8px 12px 15px 0px;\n  position: relative;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tabs_animales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 7%;\n  color: gray;\n  font-size: 15px;\n  background-color: #fff;\n  padding: 4px 8px;\n  border-radius: 10px;\n  \n  text-align: center;\n  \n  \n  \n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Monstserrat SemiBold\";\n  font-size: 16px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .tagItem[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 10px 15px;\n  gap: 10px 15px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n  position: relative;\n  background-color: #f2f2f2;\n  text-align: center;\n  border-radius: 10px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ div[_ngcontent-%COMP%] {\n  background-color: #04b865;\n  border-radius: 10px;\n  color: #fff !important;\n  transition: background-color 0.3s ease-out;\n  opacity: 1;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  \n  background: #ffffff;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .imagen_animal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 30px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin: 8px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .contenedor_seleccion_numero[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  width: 35px;\n  height: 35px;\n  border: 4.5px solid #04b865;\n  border-radius: 150px;\n  background-color: #fff;\n  font-weight: bold;\n  color: #444;\n  margin: 2px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 97%;\n  margin: auto;\n  margin: 15px auto;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .desaparecer[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: default;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .aparecer[_ngcontent-%COMP%] {\n  display: inline;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  border: 1px solid #04b865;\n  font-family: \"Monstserrat Regular\";\n  background-color: #04b865;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  padding: 3px 3px 0 0;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  padding: 3px 0px 0 3px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #04b865;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #fff;\n  padding: 20px 17px;\n  border-radius: 30px;\n  border: 1px solid #04b865;\n  color: #04b865;\n  font-family: \"Monstserrat Bold\";\n  font-size: 13px;\n  cursor: pointer;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .boton_boleto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #04b865;\n  border: 1px solid transparent;\n  color: #fff;\n  transition: background-color 0.4s ease;\n}\n.contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 400px;\n  min-width: 250px;\n}\n@media screen and (max-width: 1000px) {\n  .contenedor_loteria[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ventasBox[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .infoBox[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 20px 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .contenedor_select_animales[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    width: 90px !important;\n    height: 90px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .contenedor_select[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   .selectBox[_ngcontent-%COMP%]   .numeros_suerte[_ngcontent-%COMP%]   .numeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0 6px !important;\n    width: 45px !important;\n    height: 45px !important;\n    font-size: 20px !important;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto);\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .contendor_seleccion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: auto;\n    margin: 15px auto;\n  }\n  .contenedor_loteria[_ngcontent-%COMP%]   .ticketScroller[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvem8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQVpGO0FBY0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBWko7QUFhSTtFQUNFLFdBQUE7QUFYTjtBQWFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWE47QUFhTTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFYUjtBQWFRO0VBQ0UseUJBbkNHO0VBb0NILGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0EzQ087RUE0Q1AsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWFY7QUFhVTtFQUNFLHVCQUFBO0VBQ0EsY0FsREM7RUFtREQsc0NBQUE7QUFYWjtBQWNRO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFaVjtBQWNVO0VBQ0UsbUNBakVPO0VBa0VQLGVBQUE7QUFaWjtBQWVVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0ExRUs7RUEyRUwsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUFiWjtBQWNZO0VBQ0Usa0JBQUE7QUFaZDtBQWNZO0VBQ0UsYUFBQTtBQVpkO0FBZ0JVO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBOUZDO0VBK0ZELGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQWRaO0FBZ0JZO0VBQ0Usd0JBQUE7QUFkZDtBQWlCWTtFQUNFLFVBQUE7QUFmZDtBQWtCWTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWhCZDtBQW1CWTtFQUNFLG1CQUFBO0FBakJkO0FBbUJZO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWpCZDtBQWtCYztFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWhCaEI7QUFpQmdCO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFmbEI7QUFtQlk7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBakJkO0FBa0JjO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFoQmhCO0FBa0JjO0VBQ0UseUJBNUpIO0VBNkpHLG1CQUFBO0VBQ0Esc0NBQUE7QUFoQmhCO0FBc0JRO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFwQlY7QUFxQlU7RUFDRSxtQ0EvS087RUFnTFAsZUFBQTtBQW5CWjtBQXNCVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXFCWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQWpNSztFQWtNTCwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBbkJkO0FBc0JZOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQXBCZDtBQXdCVTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUF0Qlo7QUEwQk07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBeEJSO0FBMEJRO0VBQ0UsbUNBNU5TO0VBNk5ULGVBQUE7QUF4QlY7QUEyQlE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FuT087RUFvT1AsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQTFCVjtBQTJCVTtFQUNFLGtCQUFBO0FBekJaO0FBMkJVO0VBQ0UsYUFBQTtBQXpCWjtBQTZCUTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQXZQRztFQXdQSCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUEzQlY7QUE2QlU7RUFDRSx3QkFBQTtBQTNCWjtBQThCVTtFQUNFLFVBQUE7QUE1Qlo7QUErQlU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUE3Qlo7QUFnQ1U7RUFDRSxtQkFBQTtBQTlCWjtBQWdDVTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUE5Qlo7QUErQlk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUE3QmQ7QUE4QmM7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQTVCaEI7QUFnQ1U7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBOUJaO0FBK0JZO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE3QmQ7QUErQlk7RUFDRSx5QkFyVEQ7RUFzVEMsbUJBQUE7RUFDQSxzQ0FBQTtBQTdCZDtBQWtDTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWhDUjtBQWtDUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQXhVUztFQXlVVCxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWhDVjtBQWtDVTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBaENaO0FBcUNNO0VBQ0UsbUNBbFdTO0VBbVdULGVBQUE7QUFuQ1I7QUFxQ007RUFDRSxlQUFBO0FBbkNSO0FBcUNNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFuQ1I7QUFxQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtBQXBDVjtBQXNDVTtFQUNFLGFBQUE7QUFwQ1o7QUFzQ1k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBckNkO0FBdUNjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFyQ2hCO0FBd0NjO0VBQ0UseUJBM1lIO0VBNFlHLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUF0Q2hCO0FBeUNjO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBeENoQjtBQTBDZ0I7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXhDbEI7QUEwQ2tCO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBeENwQjtBQTRDZ0I7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQTFDbEI7QUEyQ2tCO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBekNwQjtBQWlEUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUEvQ1Y7QUFtRE07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWpEUjtBQW1EUTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBakRWO0FBb0RRO0VBQ0UsZUFBQTtBQWxEVjtBQXFEUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0EvZE87RUFnZVAseUJBN2RHO0VBOGRILFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbkRWO0FBcURVO0VBQ0Usb0JBQUE7QUFuRFo7QUFzRFU7RUFDRSxzQkFBQTtBQXBEWjtBQXVEVTtFQUNFLHVCQUFBO0VBQ0EsY0E3ZUM7RUE4ZUQsc0NBQUE7QUFyRFo7QUF3RFU7RUFDRSxZQUFBO0FBdERaO0FBMkRNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBekRSO0FBMkRRO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FyZ0JHO0VBc2dCSCwrQkEzZ0JNO0VBNGdCTixlQUFBO0VBQ0EsZUFBQTtBQXpEVjtBQTJEVTtFQUNFLHlCQTNnQkM7RUE0Z0JELDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FBekRaO0FBK0RFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUE3REo7QUFpRUE7RUFDRTtJQUNFLHNCQUFBO0VBOURGO0VBZ0VFO0lBQ0UsV0FBQTtFQTlESjtFQWdFRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQTlESjtFQWlFRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQS9ESjtFQWtFUTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFoRVY7RUFvRUk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtFQWxFTjtFQW9FTTtJQUNFLHNCQUFBO0VBbEVSO0VBcUVNO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VBbkVSO0VBb0VRO0lBQ0Usa0NBQUE7RUFsRVY7RUFtRVU7SUFDRSx3QkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQkFBQTtFQWpFWjtFQXdFTTtJQUNFLHNDQUFBO0VBdEVSO0VBeUVNO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQXZFUjtFQTRFRTtJQUNFLGFBQUE7RUExRUo7QUFDRiIsImZpbGUiOiJwb3pvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1ZW50ZS10aXR1bG86IFwiTW9uc3RzZXJyYXQgQm9sZFwiO1xyXG4kZnVlbnRlLXN1YnRpdHVsbzogXCJNb25zdHNlcnJhdCBTZW1pQm9sZFwiO1xyXG4kZnVlbnRlLXBhcnJhZm86IFwiTW9uc3RzZXJyYXQgUmVndWxhclwiO1xyXG4kZnVlbnRlLWJvdG9uZXM6IFwiTW9uc3RzZXJyYXQgU2VtaUJvbGRcIjtcclxuXHJcbiRjb2xvci1wb3pvOiAjMDRiODY1O1xyXG4vLyRjb2xvci1wb3pvOiAjMDU3MzMzO1xyXG5cclxuJGNvbG9yLWJvdHRvbjogIzI4YWFlMTtcclxuXHJcbi8vIEVzdGlsb3MgZGUgc2VsZWNjaW9uIGFuaW1hbFxyXG5cclxuLmNvbnRlbmVkb3JfbG90ZXJpYSB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLnZlbnRhc0JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAuaW5mb0JveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbmRvcl9zZWxlY2Npb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnNlbGVjdEJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLWJvdG9uZXM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlbGVjdF9vcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXBhcnJhZm87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgLyogZml4IHNwZWNpZmljIGZvciBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IC0xMDAwMHB4O1xyXG4gICAgICAgICAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWVyb3Nfc3VlcnRlIHtcclxuICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtc3VidGl0dWxvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm51bWVyb3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDZweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlLXN1YnRpdHVsbztcclxuICAgICAgICAgICAgICBib3JkZXI6IDQuNXB4IHNvbGlkICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZXJyb3JUYWcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW5lZG9yX3NlbGVjdF9hbmltYWxlcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0X29wdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtcGFycmFmbztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcblxyXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3B0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLyogZml4IHNwZWNpZmljIGZvciBGaXJlZm94ICovXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTEwMDAwcHg7XHJcbiAgICAgICAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRhYnNfYW5pbWFsZXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1zdWJ0aXR1bG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTJweCAxNXB4IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDclO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICAgICAgICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1ib3RvbmVzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAudGFnSXRlbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XHJcbiAgICAgICAgICBnYXA6IDEwcHggMTVweDtcclxuXHJcbiAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gZGl2IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWNjaW9uX251bWVybyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAvKiBSZWN0YW5nbGUgNDUgKi9cclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VuX2FuaW1hbCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5udW1lcm9zIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDQuNXB4IHNvbGlkICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW5lZG9yX2JvdG9uZXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuZGVzYXBhcmVjZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcGFyZWNlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgICAgIGhlaWdodDogM3Z3O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBvem87XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZ1ZW50ZS1wYXJyYWZvO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBvem87XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggMCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDAgM3B4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3Rvbl9ib2xldG8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAxN3B4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1wb3pvO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGUtdGl0dWxvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcG96bztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRpY2tldFNjcm9sbGVyIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5jb250ZW5lZG9yX2xvdGVyaWEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudmVudGFzQm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW5mb0JveCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5kb3Jfc2VsZWNjaW9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0X2FuaW1hbGVzIHtcclxuICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAub3B0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWxlY3RCb3gge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLmNvbnRlbmVkb3Jfc2VsZWN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubnVtZXJvc19zdWVydGUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC5udW1lcm9zIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZSB7XHJcbiAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRpY2tldFNjcm9sbGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
      var _ref = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref6 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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
            var _ref7 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (data) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref8 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref9 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref10 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref11 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref12 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref13 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
        var _ref14 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref15 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref16 = (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
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
/* harmony import */ var C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
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

    return (0,C_Users_angel_Proyectos_loteria_loteriaNacionalEcuador_loteriaNacionalFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
            { path: "", component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
            _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentasRoutingModule,
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
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
        _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentasRoutingModule,
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