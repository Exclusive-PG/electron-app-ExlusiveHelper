const RenderContent = document.querySelector(".cardsRenderComponent");
import OSController, { IitemArrayInfo } from './../osManipulation/OScontroller';
import { os } from './renderCards';
import { renderCPUdata } from './pages/cpuData';
import { renderGPUdata } from './pages/gpuData';
import { renderRAMdata } from './pages/ramData';
import { renderNetworkData } from './pages/NetworkData';






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
                            
                        case "graphics" :
                            checkRenderedSection(tempKey, ()=>renderGPUdata(document.querySelector(".renderCurrentData")));
                        break;

                        case "ram":
                            checkRenderedSection(tempKey, ()=>renderRAMdata(document.querySelector(".renderCurrentData")));
                        break;

                        case "network" : 
                            checkRenderedSection(tempKey,()=>renderNetworkData(document.querySelector(".renderCurrentData")));
                        break;


                    }

                    
                
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
