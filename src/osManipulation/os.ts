import OSController from "./OScontroller";
import "./../animation_ts/cardItem";
import "./../render/renderCards";
import "./../getIp/getIp"
import { getInfoTempFiles, MB, GB , KB } from "../fs_path/getTempFiles";


const fs = require("fs");

const gpuInfo = require('gpu-info');

gpuInfo().then(function(data:any) {
    console.log('GPUS:', data);
});

// let arrayData= [];


//             getInfoTempFiles(MB).then((data:any)=>{
//                 document.querySelector<HTMLDivElement>(".item_1").innerHTML = `${data} MB`;
//                 arrayData.push(data);
//             })
//             getInfoTempFiles(GB).then((data:any)=>{
             
//                document.querySelector<HTMLDivElement>(".item_2").innerHTML = `${data} GB`;
//                arrayData.push(data);
//             })
//             getInfoTempFiles(KB).then((data:any)=>{
//                document.querySelector<HTMLDivElement>(".item_3").innerHTML = `${data} KB`;
//                arrayData.push(data);
        
//             })
//             getInfoTempFiles().then((data:any)=>{
//                document.querySelector<HTMLDivElement>(".item_4").innerHTML = `${data} bytes`;
//                arrayData.push(data);

           
//             })






const osController = new OSController();

const circleCPUsage:SVGCircleElement = document.querySelector<SVGCircleElement> (".cpu_usage");
const circleRAMsage:SVGCircleElement = document.querySelector<SVGCircleElement> (".memory_usage");


const drawCircle = (percent:number,circleElem:SVGCircleElement,elementInput:HTMLDivElement) =>{
try{
    let circumference = 2 * Math.PI * circleElem.r.baseVal.value;
    elementInput.innerHTML = `${(percent).toFixed(2)} %`;
    circleElem.style.strokeDashoffset = `${circumference - percent/ 100 * circumference}`;
    circleElem.style.strokeDasharray = `${circumference} ${circumference}`;
}
catch(err){
    console.log((err as Error).message)
}
}


// setInterval(()=>{

//             drawCircle(osController.getCPUPercent(),circleCPUsage, document.querySelector(".data_cpu_usage"));
//             drawCircle(osController.getRamPercent(),circleRAMsage, document.querySelector(".data_free_mem"));

//     },2000);




window.addEventListener("DOMContentLoaded",()=>{

    

//     si.graphics().then((data:any)=>{
//             console.log(data);
          
//     })
    
//     si.memLayout().then((data:any)=>{
//         console.log(data);
      
// })
// si.cpu().then((data:any)=>{
//     console.log(data);
  
//})
    
})

window.addEventListener("load",()=>{
    document.querySelector(".welcome_user_home").innerHTML = `<h2>Welcome , ${osController.getUserInfo().username}</h2>`;
})

document.querySelector(".cards-info").addEventListener('wheel', (evt:any) => {
    evt.preventDefault();
    document.querySelector(".cards-info").scrollLeft += evt.deltaY;
  });



//     let  data:Array<number> =[0,0];
    
//     var Chart = require('chart.js');
//     const canvas = <HTMLCanvasElement> document.getElementById('chart');
//     let ctx = canvas.getContext('2d');
   
//     var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//         label: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data
// }]
// },
// // Configuration options go here
//     options: {}
// });

// function addData(chart:any, label:any, data:any) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset:any) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }
// let tempS:any = 0;
// setInterval(() => {
// if(tempS== 7) return;

//     addData(chart,"CPU usage",data.push(osController.getCPUPercent()))
// },2000)