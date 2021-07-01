const Sorteo = require('../model/sorteo');
const UltimoSorteo = require('../model/ultimoSorteo');

const Lottery = require('../../loterianacional/controller/main');

const sorteosController = {

    deleteSorteo: async function (id) {
        try {
            let response = await this.getSorteoById(id);
            let sorteo = response.values;
            let deleteRes = await sorteo.remove();
            response = {
                status: true,
                values: deleteRes
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    addSorteo: async function (element) {
        try {
            let newSorteo = new Sorteo(element);
            let sorteo = await newSorteo.save()
            let response = {
                status: true,
                values: sorteo
            }
            return response;
        } catch (error) {
            console.log(error.toString())
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getSorteos: async function (tipoLoteria) {
        try {
            const query = { 'tipoLoteria': tipoLoteria };
            let sorteos = await Sorteo.find(query)
            let response = {
                status: true,
                values: sorteos
            }
            return response;
        } catch (error) { throw error; }
    },

    getSorteoByNumber: async function (numeroSorteo) {
        try {
            let query = { 'sorteo': numeroSorteo }
            let sorteo = await Sorteo.findOne(query)
            let response;
            if (sorteo) {
                response = {
                    status: true,
                    values: sorteo
                }
            } else {
                response = {
                    status: false
                }
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getSorteoById: async function (id) {
        try {
            let query = { '_id': id }
            let sorteo = await Sorteo.findOne(query)
            let response = {
                status: true,
                values: sorteo
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getUltimoSorteoByTipoLoteria: async function (tipoLoteria) {
        try {
            let query = { 'tipoLoteria': tipoLoteria }
            let sorteo = await UltimoSorteo.findOne(query)
            let response;
            if (sorteo) {
                response = {
                    status: true,
                    values: sorteo
                }
            } else {
                response = {
                    status: false
                }
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    updateSorteo: async function (numeroSorteo, data) {
        try {
            let sorteoResponse = await this.getSorteoByNumber(numeroSorteo)
            let sorteo = sorteoResponse.values;
            sorteo = await sorteo.save();
            response = {
                status: true,
                values: sorteo
            }
            return response

        } catch (error) {
            let response = {
                status: false,
                msg: error.toString()
            }
            return response
        }
    },
    setUltimoSorteo: async function (tipoLoteria) {
        try {

            let response = await sorteosController.getSorteos(tipoLoteria);
            let sorteos = response.values;
            let ultimoSorteo = sorteos[0];
            let sorteosLength = sorteos.length;
            for (let i = 0; i < sorteosLength; i++) {
                const sorteo = sorteos[i];
                if (ultimoSorteo.sorteo < sorteo.sorteo) {
                    ultimoSorteo = sorteo;
                }
            }
            let data = {
                tipoLoteria,
                sorteo: ultimoSorteo.sorteo,
                ultimoSorteo: ultimoSorteo._id
            }
            let ultimoSorteoResponse = await sorteosController.getUltimoSorteoByTipoLoteria(tipoLoteria);
            if (ultimoSorteoResponse.status) {
                console.log('Actualizando ultimo sorteo');
                ultimoSorteoResponse.values.ultimoSorteo = data.ultimoSorteo;
                ultimoSorteoResponse.values.sorteo = data.sorteo;
                let newUltimoSorteo = await ultimoSorteoResponse.values.save()
            } else {
                console.log('Creando ultimo sorteo');
                let newUltimoSorteo = new UltimoSorteo(data)
                newUltimoSorteo = await newUltimoSorteo.save()
            }
        } catch (e) {
            console.log(e.toString());
        }

    },
    updateSorteos: async function () {
        try {
            console.log("Actualizando sorteos")
            let response = await Lottery.autenticarUsuario();
            let token = response.token;

            let sorteosLotto = await Lottery.consultarSorteosJugados(2, token);
            let sorteosLoteriaNacional = await Lottery.consultarSorteosJugados(1, token);
            let sorteosPozoMillonario = await Lottery.consultarSorteosJugados(5, token);
            let lottoLength = sorteosLotto.length;
            response = [];
            console.log('Empezando a guardar sorteos')
            for (let i = 0; i < lottoLength; i++) {
                const sorteo = sorteosLotto[i];
                let auxSorteo = await sorteosController.getSorteoByNumber(parseInt(sorteo.SortId));
                let data = {
                    tipoLoteria: 2,
                    sorteo: sorteo.SortId,
                    nombre: sorteo.SortNomb,
                    precio: sorteo.PVP,
                    fecha: sorteo.FSort,
                    cantidadDeFracciones: sorteo.CFrac,
                    valorPremioPrincipal: sorteo.VPremio,
                }
                if (auxSorteo.status) {
                    let updatedSorteo = await sorteosController.updateSorteo(data.sorteo, data);
                    response.push(updatedSorteo)
                } else {
                    let newSorteo = await sorteosController.addSorteo(data);
                    response.push(newSorteo)
                }
            }
            await mainController.setUltimoSorteo(2);
            let loteriaLength = sorteosLoteriaNacional.length;
            for (let i = 0; i < loteriaLength; i++) {
                const sorteo = sorteosLoteriaNacional[i];
                let auxSorteo = await sorteosController.getSorteoByNumber(parseInt(sorteo.SortId));
                let data = {
                    tipoLoteria: 1,
                    sorteo: sorteo.SortId,
                    nombre: sorteo.SortNomb,
                    precio: sorteo.PVP,
                    fecha: sorteo.FSort,
                    cantidadDeFracciones: sorteo.CFrac,
                    valorPremioPrincipal: sorteo.VPremio,
                }
                if (auxSorteo.status) {
                    let updatedSorteo = await sorteosController.updateSorteo(data.sorteo, data);
                    response.push(updatedSorteo)
                } else {
                    let newSorteo = await sorteosController.addSorteo(data);
                    response.push(newSorteo)
                }
            }
            await mainController.setUltimoSorteo(1);
            let pozoLength = sorteosPozoMillonario.length;
            for (let i = 0; i < pozoLength; i++) {
                const sorteo = sorteosPozoMillonario[i];
                let auxSorteo = await sorteosController.getSorteoByNumber(parseInt(sorteo.SortId));
                let data = {
                    tipoLoteria: 5,
                    sorteo: sorteo.SortId,
                    nombre: sorteo.SortNomb,
                    precio: sorteo.PVP,
                    fecha: sorteo.FSort,
                    cantidadDeFracciones: sorteo.CFrac,
                    valorPremioPrincipal: sorteo.VPremio,
                }
                if (auxSorteo.status) {
                    let updatedSorteo = await sorteosController.updateSorteo(data.sorteo, data);
                    response.push(updatedSorteo)
                } else {
                    let newSorteo = await sorteosController.addSorteo(data);
                    response.push(newSorteo)
                }
            }
            await mainController.setUltimoSorteo(5);
            let responseAux = {
                status: true,
                values: response
            }
            return responseAux
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

}
module.exports = sorteosController