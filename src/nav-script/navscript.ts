import { renderSystemPage, enableLinkDataCards } from "../render/systemPage"
import { renderoptimisationPage } from './../render/optimisationPage';



const lengthCards =  document.querySelectorAll<HTMLDivElement>(".wave-card").length
const NodeListCards = document.querySelectorAll<HTMLDivElement>(".wave-card")

const checkRenderedPage = (currentData:string,item:any,callback:any) =>{
    if(currentData !== item.getAttribute("data-card-nav")){
        currentData = item.getAttribute("data-card-nav");
        getActiveSystemPage()
        callback();
    }else {
         getActiveSystemPage();
         return;
    }
}


NodeListCards.forEach((item:HTMLDivElement)=>{
let currentData:string = '' ;

    item.addEventListener("click",()=>{
        if(item.hasAttribute("data-card-nav")){

          //  console.log(item.getAttribute("data-card-nav"))
          
           

            switch(item.getAttribute("data-card-nav")){

                case "system":
                    checkRenderedPage(currentData,item,()=>renderSystemPage())
                        
                       
                        
                break;


                case "optimisation":
                    checkRenderedPage(currentData,item,()=>renderoptimisationPage())

                break;


            }

           
       
            enableLinkDataCards(document.querySelectorAll(`.card-system-all`));
            getBtnBack();
        }
    })
})

const getBtnBack = () =>{
document.querySelector(".btnBack").addEventListener("click",()=>{
    document.querySelector(".RenderContent").classList.remove("renderContentActive")
})
}

const getActiveSystemPage = () =>{
    document.querySelector(".RenderContent").classList.add("renderContentActive")
}