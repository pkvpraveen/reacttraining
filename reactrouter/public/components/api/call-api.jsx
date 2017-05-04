var axios = require('axios');

const OPEN_WHEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f9064c7bc75e5bdfb646db4c6ff2199d&units=metric';

module.exports = {
    getTemp: function (location) {
        const encodedLocation = encodeURIComponent(location);
        const requestURL = `${OPEN_WHEATER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestURL).then(function (response) {
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }

        }, function (response) {
            throw new Error(response.data.message);
        });
    }
};