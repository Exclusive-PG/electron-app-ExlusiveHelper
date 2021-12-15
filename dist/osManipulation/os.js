"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawCircle = void 0;
const OScontroller_1 = __importDefault(require("./OScontroller"));
require("./../animation_ts/cardItem");
require("./../render/renderCards");
require("./../getIp/getIp");
require("./../nav-script/navscript");
const fs = require("fs");
const gpuInfo = require('gpu-info');
gpuInfo().then(function (data) {
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
const osController = new OScontroller_1.default();
//const circleCPUsage:SVGCircleElement = document.querySelector<SVGCircleElement> (".cpu_usage");
const circleRAMsage = document.querySelector(".memory_usage");
const drawCircle = (percent, circleElem, elementInput) => {
    try {
        let circumference = 2 * Math.PI * circleElem.r.baseVal.value;
        elementInput.innerHTML = `${(percent).toFixed(2)} %`;
        circleElem.style.strokeDashoffset = `${circumference - percent / 100 * circumference}`;
        circleElem.style.strokeDasharray = `${circumference} ${circumference}`;
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.drawCircle = drawCircle;
// setInterval(()=>{
//             drawCircle(osController.getCPUPercent(),circleCPUsage, document.querySelector(".data_cpu_usage"));
//             drawCircle(osController.getRamPercent(),circleRAMsage, document.querySelector(".data_free_mem"));
//     },2000);
window.addEventListener("DOMContentLoaded", () => {
    //     si.graphics().then((data:any)=>{
    //             console.log(data);
    //     })
    //     si.memLayout().then((data:any)=>{
    //         console.log(data);
    // })
    // si.cpu().then((data:any)=>{
    //     console.log(data);
    //})
});
window.addEventListener("load", () => {
    document.querySelector(".welcome_user_home").innerHTML = `<h2>Welcome , ${osController.getUserInfo().username}</h2>`;
});
document.querySelector(".cards-info").addEventListener('wheel', (evt) => {
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
//# sourceMappingURL=os.js.map