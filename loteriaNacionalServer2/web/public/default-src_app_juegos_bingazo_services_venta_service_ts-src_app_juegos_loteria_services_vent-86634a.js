"use strict";
(self["webpackChunkloteria_nacional_front"] = self["webpackChunkloteria_nacional_front"] || []).push([["default-src_app_juegos_bingazo_services_venta_service_ts-src_app_juegos_loteria_services_vent-86634a"],{

/***/ 7918:
/*!**********************************************************!*\
  !*** ./src/app/juegos/bingazo/services/venta.service.ts ***!
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
        this.obtenerFrutasSelecionadas();
    }
    obtenerSorteo(authData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        //let endpoint = "/inquiry";
        let endpoint = `/cache/sorteosDisponibles`;
        let address = '/bingazo';
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
        let address = '/bingazo';
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
    obtenerFrutasSelecionadas() {
        this.frutas = [
            { ruta: 'assets/frutas/banano.webp', nombre: 'Banano', identificador: '01', status: false },
            { ruta: 'assets/frutas/pera.webp', nombre: 'Pera', identificador: '02', status: false },
            { ruta: 'assets/frutas/papaya.webp', nombre: 'Papaya', identificador: '03', status: false },
            { ruta: 'assets/frutas/sandia.webp', nombre: 'Sandía', identificador: '04', status: false },
            { ruta: 'assets/frutas/mora.webp', nombre: 'Mora', identificador: '05', status: false },
            { ruta: 'assets/frutas/guayaba.webp', nombre: 'Guayaba', identificador: '06', status: false },
            { ruta: 'assets/frutas/naranja.webp', nombre: 'Naranja', identificador: '07', status: false },
            { ruta: 'assets/frutas/mandarina.webp', nombre: 'Mandarina', identificador: '08', status: false },
            { ruta: 'assets/frutas/melon.webp', nombre: 'Melón', identificador: '09', status: false },
            { ruta: 'assets/frutas/piña.webp', nombre: 'Piña', identificador: '10', status: false },
            { ruta: 'assets/frutas/kiwi.webp', nombre: 'Kiwi', identificador: '11', status: false },
            { ruta: 'assets/frutas/durazno.webp', nombre: 'Durazno', identificador: '12', status: false },
            { ruta: 'assets/frutas/uva.webp', nombre: 'Uva', identificador: '13', status: false },
            { ruta: 'assets/frutas/mango.webp', nombre: 'Mango', identificador: '14', status: false },
            { ruta: 'assets/frutas/coco.webp', nombre: 'Coco', identificador: '15', status: false },
            { ruta: 'assets/frutas/frutilla.webp', nombre: 'Frutilla', identificador: '16', status: false },
            { ruta: 'assets/frutas/guanabana.webp', nombre: 'Guanábana', identificador: '17', status: false },
            { ruta: 'assets/frutas/pitahaya.webp', nombre: 'Pitahaya', identificador: '18', status: false },
            { ruta: 'assets/frutas/manzana.webp', nombre: 'Manzana', identificador: '19', status: false },
            { ruta: 'assets/frutas/limon.webp', nombre: 'Limón', identificador: '20', status: false },
        ];
        localStorage.setItem('frutasSeleccionadas', JSON.stringify(this.frutas));
    }
    obtenerCaracteristicasDeFruta(fruta) {
        let frutas = [
            { ruta: 'assets/frutas/banano.webp', nombre: 'Banano', identificador: '01' },
            { ruta: 'assets/frutas/pera.webp', nombre: 'Pera', identificador: '02' },
            { ruta: 'assets/frutas/papaya.webp', nombre: 'Papaya', identificador: '03' },
            { ruta: 'assets/frutas/sandia.webp', nombre: 'Sandía', identificador: '04' },
            { ruta: 'assets/frutas/mora.webp', nombre: 'Mora', identificador: '05' },
            { ruta: 'assets/frutas/guayaba.webp', nombre: 'Guayaba', identificador: '06' },
            { ruta: 'assets/frutas/naranja.webp', nombre: 'Naranja', identificador: '07' },
            { ruta: 'assets/frutas/mandarina.webp', nombre: 'Mandarina', identificador: '08' },
            { ruta: 'assets/frutas/melon.webp', nombre: 'Melón', identificador: '09' },
            { ruta: 'assets/frutas/piña.webp', nombre: 'Piña', identificador: '10' },
            { ruta: 'assets/frutas/kiwi.webp', nombre: 'Kiwi', identificador: '11' },
            { ruta: 'assets/frutas/durazno.webp', nombre: 'Durazno', identificador: '12' },
            { ruta: 'assets/frutas/uva.webp', nombre: 'Uva', identificador: '13' },
            { ruta: 'assets/frutas/mango.webp', nombre: 'Mango', identificador: '14' },
            { ruta: 'assets/frutas/coco.webp', nombre: 'Coco', identificador: '15' },
            { ruta: 'assets/frutas/frutilla.webp', nombre: 'Frutilla', identificador: '16' },
            { ruta: 'assets/frutas/guanabana.webp', nombre: 'Guanábana', identificador: '17' },
            { ruta: 'assets/frutas/pitahaya.webp', nombre: 'Pitahaya', identificador: '18' },
            { ruta: 'assets/frutas/manzana.webp', nombre: 'Manzana', identificador: '19' },
            { ruta: 'assets/frutas/limon.webp', nombre: 'Limón', identificador: '20' },
        ];
        let aux = frutas.find((x) => x.identificador === fruta);
        return aux;
    }
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

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
                console.log(error);
                reject(new Error(error.error.message));
            });
        });
    }
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 671:
/*!***************************************************************!*\
  !*** ./src/app/juegos/pozoRevancha/services/venta.service.ts ***!
  \***************************************************************/
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
        let address = '/pozoRevancha';
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
        let address = '/pozoRevancha';
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
    obtenerMascota(mascota) {
        let mascotaPath;
        switch (mascota) {
            case '04':
                mascotaPath = 'assets/mascotas/Delfin.webp';
                break;
            case '02':
                mascotaPath = 'assets/mascotas/Perro.webp';
                break;
            case '08':
                mascotaPath = 'assets/mascotas/Llama.webp';
                break;
            case '09':
                mascotaPath = 'assets/mascotas/Papagayo.webp';
                break;
            case '01':
                mascotaPath = 'assets/mascotas/Conejo.webp';
                break;
            case '10':
                mascotaPath = 'assets/mascotas/Mono.webp';
                break;
            case '03':
                mascotaPath = 'assets/mascotas/Galapago.webp';
                break;
            case '05':
                mascotaPath = 'assets/mascotas/Foca.webp';
                break;
            case '06':
                mascotaPath = 'assets/mascotas/Condor.webp';
                break;
            case '07':
                mascotaPath = 'assets/mascotas/Iguana.webp';
                break;
            default:
                break;
        }
        return mascotaPath;
    }
    obtenerAnimalesSelecionados() {
        this.animales = [
            {
                ruta: 'assets/mascotas/Condor.webp',
                identificador: '06',
                nombre: 'Cóndor',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Iguana.webp',
                identificador: '07',
                nombre: 'Iguana',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Conejo.webp',
                identificador: '01',
                nombre: 'Conejo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Delfin.webp',
                identificador: '04',
                nombre: 'Delfín',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Galapago.webp',
                identificador: '03',
                nombre: 'Galápago',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Llama.webp',
                identificador: '08',
                nombre: 'Llama',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Mono.webp',
                identificador: '10',
                nombre: 'Mono',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Papagayo.webp',
                identificador: '09',
                nombre: 'Papagayo',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Perro.webp',
                identificador: '02',
                nombre: 'Perro',
                status: false,
            },
            {
                ruta: 'assets/mascotas/Foca.webp',
                identificador: '05',
                nombre: 'Foca',
                status: false,
            },
        ];
        localStorage.setItem('animalesSeleccionados', JSON.stringify(this.animales));
    }
    obtenerCaracteristicasDeMascota(mascota) {
        let animales = [
            {
                ruta: 'assets/mascotas/Condor.webp',
                identificador: '06',
                nombre: 'Cóndor',
            },
            {
                ruta: 'assets/mascotas/Iguana.webp',
                identificador: '07',
                nombre: 'Iguana',
            },
            {
                ruta: 'assets/mascotas/Conejo.webp',
                identificador: '01',
                nombre: 'Conejo',
            },
            {
                ruta: 'assets/mascotas/Delfin.webp',
                identificador: '04',
                nombre: 'Delfín',
            },
            {
                ruta: 'assets/mascotas/Galapago.webp',
                identificador: '03',
                nombre: 'Galápago',
            },
            {
                ruta: 'assets/mascotas/Llama.webp',
                identificador: '08',
                nombre: 'Llama',
            },
            {
                ruta: 'assets/mascotas/Mono.webp',
                identificador: '10',
                nombre: 'Mono',
            },
            {
                ruta: 'assets/mascotas/Papagayo.webp',
                identificador: '09',
                nombre: 'Papagayo',
            },
            {
                ruta: 'assets/mascotas/Perro.webp',
                identificador: '02',
                nombre: 'Perro',
            },
            {
                ruta: 'assets/mascotas/Foca.webp',
                identificador: '05',
                nombre: 'Foca',
            },
        ];
        let aux = animales.find((x) => x.identificador === mascota);
        return aux;
    }
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_juegos_bingazo_services_venta_service_ts-src_app_juegos_loteria_services_vent-86634a.js.map