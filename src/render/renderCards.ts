
import { hoverCardEffect } from './../animation_ts/cardItem';

import AOS from 'aos';

import OSController from './../osManipulation/OScontroller';

const si = require('systeminformation');


interface cardI{
    MainLabel:string,
    subLabel : string,
    asideLabel :string,
    imageData :string
}


let array:Array<cardI> = [];


export let os = new OSController();

let pathToImages = "assets/images/";
os.getData().then(()=>{
    
    array.push({MainLabel:"Videocard",subLabel:"Name:"+os.graphicsData.controllers[0].name,asideLabel:`Total Memory:${(os.graphicsData.controllers[0].memoryTotal/1024).toString()} GB`,imageData:`${pathToImages}videocard.png `})
   
    array.push({MainLabel:"CPU",subLabel:"Brand:"+os.cpuData.brand,asideLabel:`Cores:${os.cpuData.cores.toString()}`,imageData:`${pathToImages}cpu.png `})

    array.push({MainLabel:"RAM",subLabel:`Total Memory : ${(os.memLayoutData[0].size/1024/1024/1024).toString()}` + " GB",asideLabel:`SDRAM : ${os.memLayoutData[0].type}`,imageData:`${pathToImages}ram.png `})

    if(os.wifiConnections.length !== 0){
    array.push({MainLabel:"Wifi",subLabel:os.networkInterfaces[0].ip4,asideLabel:os.networkInterfaces[0].ifaceName,imageData:`${pathToImages}wifi.png `})
    }
    array.push({MainLabel:"Network",subLabel:`MAC : ${os.networkInterfaces[0].mac}`,asideLabel:os.networkInterfaces[0].ifaceName,imageData:`${pathToImages}network.png `})

    renderCards(document.querySelector<HTMLDivElement>(".cards-info"),array);
    hoverCardEffect();
})


const renderCards = (innerRender:HTMLDivElement,arrayCards:Array<any>):void=>{
    let tempResult :string = "";
    arrayCards.forEach((item:cardI,index:number)=>{
        
        tempResult+=`
        <div class="item">
        <div class="backgrond_anim"></div>
        <div class="text_item item_${index+1} render">
            <div class="MainLabel">${item.MainLabel}</div>
            <div class="subLabel">${item.subLabel}</div>
            <div class="asideLabel">${item.asideLabel}</div>
            <div class="images"><img alt =${item.MainLabel} src=${item.imageData}/></div>
        </div>
        </div>`
    })

   

   innerRender.innerHTML = tempResult;
   AOS.init({
       
  
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay:2000,
    })
}

