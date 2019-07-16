const lugar = require('./luar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad',
        demand: true
    }

}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
/*
lugar.getLugarLatLng(argv.direccion)
    .then((response) => {
        //console.log(response);
        clima.getClima(response.lat, response.lat)
            .then((response) => {
                console.log(response);
            })
    }).catch(console.log);
*/
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139