import { os } from "../renderCards";
import { drawCircle,osController } from "./../../osManipulation/os";


const randomColor:Array<string> = ["#ffd600","#F436BC","#EE2D35"]
let osModule = require("os");


const convertMstoSec = (ms:number):string=>{

    let res:number = (ms/1000/1000);
    return res.toFixed(2);
}


export const renderCPUdata = (innerDiv:HTMLDivElement)=>{

    console.log(osModule.cpus())
    console.log(os.cpuData)

    let coresData:string = '';


osModule.cpus().forEach((item:any,index:number) => {
    
    coresData += `
    <div class="content_cores">
            <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random()*randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
            Core ${index+1}
          </a>
          <div class="collapse" id="collapseExample${index}">
   <div class="card card-body">
   <div class="name_core"> ${item.model} </div>
   <div class="currentSpeed">Current speed : ${item.speed} <i class="fas fa-tachometer-alt "></i> MHz</div>
   <div class="times_core">
        <div>User mode : ${convertMstoSec(item.times.user)} <i class="far fa-clock "></i> sec </div>
        <div>Nice mode : ${convertMstoSec(item.times.nice)} <i class="far fa-clock "></i> sec</div>
        <div>System mode : ${convertMstoSec(item.times.sys)} <i class="far fa-clock "></i> sec</div>
        <div>Idle mode : ${convertMstoSec(item.times.idle)} <i class="far fa-clock "></i> sec</div>
   </div>
   </div>
 </div>
 </div>
            `  
              
        })


    innerDiv.innerHTML = `
    <div class="renderTempData">
    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    <div class="cpu_data">
    <div class="headline_cpu">${osModule.cpus()[0].model}</div>

    <div class="other_data_cpu">
   
    <center class="wrapper_detail_info">
        <h2 class="headline_detail_info"><i class="fas fa-check">
            </i> Detail info <i class="fas fa-check"></i>
        </h2>
        <div class="cpu_img"></div>
   
   </center> 

    <div class="wrapper_data_cpu_other">
    
        <div class="manufacturer_cpu">Manufacturer : ${os.cpuData.manufacturer} <i class="fas fa-microchip"></i></div>
        <div class="model_cpu">Model :${os.cpuData.model} <i class="fas fa-microchip"></i></div>
        <div class="physicalCores_cpu">Physical cores : ${os.cpuData.physicalCores} <i class="fab fa-centercode"></i>  </div>

        <div class="speed_cpu">Current speed : ${os.cpuData.speed} <i class="fas fa-tachometer-alt"></i></div>
        <div class="max_speed_cpu">Maximun speed : ${os.cpuData.speedMax} <i class="fas fa-tachometer-alt"></i></div>
        <div class="min_speed_cpu">Minimum speed : ${os.cpuData.speedMin} <i class="fas fa-tachometer-alt"></i></div>
        <div class="stepping_cpu">Stepping CPU: ${os.cpuData.stepping} <i class="fas fa-shoe-prints"></i> </div>
        <div class="vendor_cpu">Vendor : ${os.cpuData.vendor} <i class="fas fa-microchip"></i></div>
        <div class="virtualization_cpu">Virtualization : ${os.cpuData.virtualization ? "Yes" : "No"} <i class="fas fa-microchip"></i></div>
    </div>
</div>



    <div class="wrapper_os_data">
        <div class="cores_cpu">
         ${coresData}
        </div>
<div class="cpu_usage_wrapper">
    <div class="circle-big">
       
        <div class="text"> 
         <div class="data_cpu_usage">Loading...</div>
          <div class="small">CPU Usage</div>
        </div>
                <svg>
                <circle class="bg"cx="105" cy="105" r="100"></circle>
                <circle class="cpu_usage" cx="109" cy="105" r="100" ></circle>
                </svg>
        
    </div>   
      
</div>
</div>



    </div>
    </div>
    `

    updateCircle(".cpu_usage",document.querySelector(".data_cpu_usage"),()=>osController.getCPUPercent(),2000);
}

export function updateCircle(CircleElement:string,elementInput:HTMLDivElement,callback:any,intervalUpdate:number){
    let isReadyToUpdate : NodeJS.Timeout ;
    let circle = document.querySelector<SVGCircleElement>(`${CircleElement}`);
    circle.style.stroke = `${randomColor[Math.floor(Math.random()*randomColor.length)]}`;
//


isReadyToUpdate = setInterval(()=>{
    try{
   
     

        if(!document.querySelector<SVGCircleElement>(`${CircleElement}`)){
            clearInterval(isReadyToUpdate)
             console.log("stop update")
        }
            
            drawCircle(callback(),circle,elementInput);
            console.log("update")
   
        }catch(e){
        console.log((e as Error).message)
        clearInterval(isReadyToUpdate)
        console.log("stop update")
    }    

    },intervalUpdate);
}