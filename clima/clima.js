const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=22cafbcc2743df9c84c762b486e109de&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}