import { IWeather } from "./../getIp/getIp";

const renderWeatherAndTime = (innerRender:HTMLDivElement,objWeather:IWeather):void=>{
    let tempResult :string = "";
   

    tempResult+=`
        <div class="inner_wrapper_weather">
            <div class="icon_w" ><img src="http://openweathermap.org/img/wn/${objWeather.icon}@2x.png"/></div>
            <div class="temp_w">${objWeather.temp} &deg; </div>
            <div class="descr_w">&nbsp;${objWeather.description} </div>
            
           
        </div>
    `
        
  

   

   innerRender.innerHTML = tempResult;
   
}

export default renderWeatherAndTime;