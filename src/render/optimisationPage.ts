const RenderContent = document.querySelector(".cardsRenderComponent");






export const renderoptimisationPage = () =>{



    let stringRes = 
    `<div class = "main_wrapper">
    <span class="btnBack"><i class="fas fa-reply fa-2x"></i></span>
        <h2 class="headline_optimisation_page">Optimisation</h2>
    <div class="render_optimisation_data">
    optimisation render section
       </div>
    </div>`;

    RenderContent.innerHTML = stringRes;
    
    
}
