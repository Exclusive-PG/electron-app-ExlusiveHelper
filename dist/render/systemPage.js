"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableLinkDataCards = exports.renderSystemPage = void 0;
const RenderContent = document.querySelector(".cardsRenderComponent");
const renderCards_1 = require("./renderCards");
const cpuData_1 = require("./pages/cpuData");
const gpuData_1 = require("./pages/gpuData");
const ramData_1 = require("./pages/ramData");
const NetworkData_1 = require("./pages/NetworkData");
const renderSystemPage = () => {
    let stringCard = '';
    let NameNodeCards = "card-system-all";
    console.log(renderCards_1.os.ArrayAll);
    renderCards_1.os.ArrayAll.forEach((item) => {
        stringCard += `
            <div  data_key = "${item.data_key}" class="${NameNodeCards} ${item.isNotEmpty ? "active-card-system" : "inactive-card-system"}">
                <div class="label-card-system">${item.Label}</div>
            
            
            
            </div>
        `;
    });
    let stringRes = `<div class = "main_wrapper">
    <span class="btnBack"><i class="fas fa-reply fa-2x"></i></span>
        <h2 class="headline_system_page">System</h2>
    <div class="cards_data">
       ${stringCard}
       </div>
    </div>`;
    RenderContent.innerHTML = stringRes;
};
exports.renderSystemPage = renderSystemPage;
let activeSection = '';
const checkRenderedSection = (tempKey, callback) => {
    if (activeSection !== tempKey) {
        activeSection = tempKey;
        callback();
        console.log("render");
    }
    else {
        console.log("not render");
        return;
    }
};
const enableLinkDataCards = (NodesItem) => {
    console.log(NodesItem);
    NodesItem.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.hasAttribute("data_key") && !item.classList.contains("inactive-card-system")) {
                let tempKey = item.getAttribute("data_key").toLowerCase();
                console.log(tempKey);
                switch (tempKey) {
                    case "cpu":
                        checkRenderedSection(tempKey, () => (0, cpuData_1.renderCPUdata)(document.querySelector(".renderCurrentData")));
                        break;
                    case "graphics":
                        checkRenderedSection(tempKey, () => (0, gpuData_1.renderGPUdata)(document.querySelector(".renderCurrentData")));
                        break;
                    case "ram":
                        checkRenderedSection(tempKey, () => (0, ramData_1.renderRAMdata)(document.querySelector(".renderCurrentData")));
                        break;
                    case "network":
                        checkRenderedSection(tempKey, () => (0, NetworkData_1.renderNetworkData)(document.querySelector(".renderCurrentData")));
                        break;
                }
                document.querySelector(".items_content").style.transform = `translateX(-100%)`;
            }
            else {
                console.log("NOT FOUND");
            }
            document.querySelector(".BackRenderTempData").addEventListener("click", () => {
                document.querySelector(".items_content").style.transform = `translateX(0)`;
            });
        });
    });
};
exports.enableLinkDataCards = enableLinkDataCards;
//# sourceMappingURL=systemPage.js.map