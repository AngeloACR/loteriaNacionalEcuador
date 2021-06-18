
var xml2js = require('xml2js');
var parser = xml2js.Parser();
var fs = require('fs');

module.exports.agregarResultados = async (req, res) => {
    try {
        let sorteo = req.body.sorteo;
        let tipoLoteria = req.body.tipoLoteria;
        let filePath = `uploads/resultados/PREM-${tipoLoteria}-${sorteo}.xml`
        fs.readFile(filePath, 'utf8', async function (err, xmlData) {
            if (err) throw err;
            let data = await parser.parseStringPromise(xmlData)

            response = {
                data
            }

            res.status(200).json(response);
        });
    } catch (e) {
        res.status(400).json(e.toString());
    }
};