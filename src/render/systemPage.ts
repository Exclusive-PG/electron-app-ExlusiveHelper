const RenderContent = document.querySelector(".cardsRenderComponent");
import OSController, { IitemArrayInfo } from './../osManipulation/OScontroller';
import { os } from './renderCards';
import {drawCircle } from './../osManipulation/os';


let osModule = require("os");


export const renderSystemPage = () =>{
    let stringCard ='';
    let NameNodeCards = "card-system-all"
    console.log(os.ArrayAll)
    os.ArrayAll.forEach((item:IitemArrayInfo)=>{
      
        stringCard +=`
            <div  data_key = "${item.data_key}" class="${NameNodeCards} ${item.isNotEmpty ? "active-card-system" : "inactive-card-system"}">
                <div class="label-card-system">${item.Label}</div>
            
            
            
            </div>
        `
    })


    let stringRes = 
    `<div class = "main_wrapper">
    <span class="btnBack"><i class="fas fa-reply fa-2x"></i></span>
        <h2 class="headline_system_page">System</h2>
    <div class="cards_data">
       ${stringCard}
       </div>
    </div>`;

    RenderContent.innerHTML = stringRes;
    
    
}
let activeSection:string = '';

const checkRenderedSection = (tempKey:string,callback:any)=>{
   
    if(activeSection !== tempKey){
        activeSection = tempKey;
        callback();    
        console.log("render")         
    }else {
        console.log("not render");
        return;
    }
}

export const enableLinkDataCards = (NodesItem:NodeListOf<HTMLDivElement>) =>{
    console.log(NodesItem)
    
    NodesItem.forEach((item:HTMLDivElement)=>{
        
            item.addEventListener("click",()=>{
                if(item.hasAttribute("data_key") && !item.classList.contains("inactive-card-system")){

                    let tempKey = item.getAttribute("data_key").toLowerCase();
                    console.log(tempKey);

                    switch(tempKey){
                        case "cpu":
                           
                            checkRenderedSection(tempKey, ()=>renderCPUdata(document.querySelector(".renderCurrentData")));
                           
                            break;
                    }

                    
                  //  document.querySelector(".items_content").classList.add("renderCurrentDataActive");
                  document.querySelector<HTMLDivElement>(".items_content").style.transform = `translateX(-100%)`;


                }else{
                    console.log("NOT FOUND")
                }
                document.querySelector(".BackRenderTempData").addEventListener("click",()=>{
                    document.querySelector<HTMLDivElement>(".items_content").style.transform = `translateX(0)`;
                })
            })
    })
} 

const randomColor:Array<string> = ["#ffd600","#F436BC","#EE2D35"]




const renderCPUdata = (innerDiv:HTMLDivElement)=>{

    console.log(osModule.cpus())
    console.log(os.cpuData)

    let tempCoresData1:string = '';
    let tempCoresData2:string = '';
    let coresData:string = '';
//     osModule.cpus().forEach((item:any,index:number) => {
     
//         tempCoresData1 += `
//         <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${item}">
//         Link with href
//       </a>
//         `    
//     })
   
//    osModule.cpus().forEach((item:any,index:number) => {
     
//     tempCoresData2 += `
// <div class="collapse" id="collapseExample${index}">
//   <div class="card card-body">
//    ${item.model} ${index}
//   </div>
// </div>
//     `
// })
    
// coresData = `
// <div class="cores">
// <div class="links_cores">${tempCoresData1}</div>
// <div class="content_cores">${tempCoresData2}</div>
// </div>
// `
const convertMstoSec = (ms:number):string=>{

    let res:number = (ms/1000/1000);
    return res.toFixed(2);
}
osModule.cpus().forEach((item:any,index:number) => {
    
    coresData += `
    <div class="content_cores">
            <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random()*randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
            Core ${index+1}
          </a>
          <div class="collapse" id="collapseExample${index}">
   <div class="card card-body">
   <div class="name_core"> ${item.model} </div>
   <div class="currentSpeed">Current speed : ${item.speed} <i class="fas fa-tachometer-alt fa-2x"></i> MHz</div>
   <div class="times_core">
        <div>User mode : ${convertMstoSec(item.times.user)} <i class="far fa-clock fa-2x"></i> sec </div>
        <div>Nice mode : ${convertMstoSec(item.times.nice)} <i class="far fa-clock fa-2x"></i> sec</div>
        <div>System mode : ${convertMstoSec(item.times.sys)} <i class="far fa-clock fa-2x"></i> sec</div>
        <div>Idle mode : ${convertMstoSec(item.times.idle)} <i class="far fa-clock fa-2x"></i> sec</div>
   </div>
   </div>
 </div>
 </div>
            `  
              
        })

//<div class="headline">CPU - ${os.cpuData.brand}</div>

    innerDiv.innerHTML = `
    <div class="renderTempData">
    <div class="BackRenderTempData"><i class="fas fa-reply fa-2x"></i></div>
    <div class="cpu_data">
    <div class="headline_cpu">${osModule.cpus()[0].model}</div>

    <div class="wrapper_os_data">
        <div class="cores_cpu">
         ${coresData}
        </div>
        <div class="cpu_usage_wrapper">
        <div class="circle-big">
        <div class="text"> 
         <div class="data_cpu_usage">2758</div>
          <div class="small">CPU Usage</div>
        </div>
        <svg>
          <circle class="bg"cx="105" cy="105" r="100"></circle>
          <circle class=" cpu_usage" cx="109" cy="105" r="100" ></circle>
        </svg>
        </div>   
      </div>
        </div>
    </div>

    </div>
    `
let isReadyToUpdate = false;
const osController = new OSController();
const circleCPUsage:SVGCircleElement = document.querySelector<SVGCircleElement> (".cpu_usage");

setInterval(()=>{
    try{
            drawCircle(osController.getCPUPercent(),circleCPUsage, document.querySelector(".data_cpu_usage"));
            isReadyToUpdate = true
   
        }catch(e){
        console.log((e as Error).message)
        isReadyToUpdate = false;
    }    

    },2000);

}