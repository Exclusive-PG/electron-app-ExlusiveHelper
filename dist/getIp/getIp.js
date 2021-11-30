"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderTimeWeather_1 = __importDefault(require("./../render/renderTimeWeather"));
const axios = require('axios');
const APIkey = '39f0a57b825915c88c4e6fd88440ea37';
const lang = 'ru';
const version = '2.5';
let _ObjWeatherData;
let _ipAddress;
let _localCity;
axios.get('http://ip-api.com/json')
    .then((response) => {
    console.log(response.data.query);
    _ipAddress = response.data.query;
    return response;
})
    .catch(function (error) {
    // handle error
    console.log(error);
})
    .then(function (response) {
    console.log(response);
    axios.get(`https://api.openweathermap.org/data/${version}/weather?q=${response.data.city}&appid=${APIkey}&lang=${lang}`).
        then((response) => {
        console.log(response);
        const { data } = response;
        const { main, weather } = data;
        _localCity = data.name;
        _ObjWeatherData = {
            main: weather[0].main,
            description: weather[0].description,
            icon: weather[0].icon,
            temp: (parseInt(main.temp) - 273).toFixed(0).toString(),
            ipAddress: _ipAddress,
            localCity: _localCity
        };
        (0, renderTimeWeather_1.default)(document.querySelector(".date_time_weather_wrapper"), _ObjWeatherData);
    });
});
//http://openweathermap.org/img/wn/${dataWeather.icon}@2x.png
//# sourceMappingURL=getIp.js.map