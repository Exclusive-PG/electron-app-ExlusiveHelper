
import { hoverCardEffect } from './../animation_ts/cardItem';

import AOS from 'aos';

const si = require('systeminformation');


interface cardI{
    MainLabel:string,
    subLabel : string,
    asideLabel :string
}


let array:Array<cardI> = [];

si.graphics().then((data:any)=>{
    console.log(data);
  
})

si.memLayout().then((data:any)=>{
console.log(data);

})
si.cpu().then((data:any)=>{
console.log(data);

})

export let 
cpuData:any , 
graphicsData:any,
memLayoutData:any,
networkInterfaces:any


async function getData() {
   

    try {
         cpuData = await si.cpu();
      
         graphicsData = await si.graphics();
        
         memLayoutData = await si.memLayout();
        
         networkInterfaces = await si.networkInterfaces()
         console.log(networkInterfaces)
    } catch (e) {
        console.log(e)
    }
}

getData().then(()=>{
    
    array.push({MainLabel:"Graphics",subLabel:"Name:"+graphicsData.controllers[0].name,asideLabel:`TotalMemory:${graphicsData.controllers[0].memoryTotal.toString()}`})
   
    array.push({MainLabel:"CPU",subLabel:"Brand:"+cpuData.brand,asideLabel:`Cores:${cpuData.cores.toString()}`})

    array.push({MainLabel:"RAM",subLabel:(memLayoutData[0].size/1024/1024).toString() + " MB",asideLabel:memLayoutData[0].type})
    
    array.push({MainLabel:"Ethernet",subLabel:networkInterfaces[0].ip4,asideLabel:networkInterfaces[0].ifaceName})


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

