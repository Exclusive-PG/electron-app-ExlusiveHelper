import renderWeatherAndTime from "./../render/renderTimeWeather";


const axios = require('axios');
const APIkey = '39f0a57b825915c88c4e6fd88440ea37';
const lang = 'ru'
const version = '2.5'

interface ResponseIP{

    data:IPinner
   
}

interface IPinner{
    country:string
    city:string
    regionName:string
    query:string
}


export interface IWeather{
  
        main : string,
        description: string,
        icon :string
        temp: string
        ipAddress:string
        localCity:string
}

let _ObjWeatherData:IWeather
let _ipAddress:string ;
let _localCity : string ;

axios.get('http://ip-api.com/json')
  .then( (response:ResponseIP) =>{
    
    console.log(response.data.query);
    _ipAddress = response.data.query;
   
    return response;
  })
  .catch(function (error:Error) {
    // handle error
    console.log(error);
  })
  .then(function (response:ResponseIP) {
      console.log(response)
    axios.get(`https://api.openweathermap.org/data/${version}/weather?q=${response.data.city}&appid=${APIkey}&lang=${lang}`).
    then((response:any)=>{
        console.log(response)

        const {data} = response;
        const {main,weather} = data;
        
        _localCity = data.name
        
         _ObjWeatherData = {
        main : weather[0].main,
        description:weather[0].description,
        icon : weather[0].icon,
        temp:(parseInt(main.temp) - 273).toFixed(0).toString(),
        ipAddress:_ipAddress,
        localCity : _localCity
        }
        
        renderWeatherAndTime(document.querySelector<HTMLDivElement>(".date_time_weather_wrapper"),_ObjWeatherData)
    })
  })

//http://openweathermap.org/img/wn/${dataWeather.icon}@2x.png