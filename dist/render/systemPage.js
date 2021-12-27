"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableLinkDataCards = exports.renderSystemPage = void 0;
const RenderContent = document.querySelector(".cardsRenderComponent");
const renderCards_1 = require("./renderCards");
const cpuData_1 = require("./pages/cpuData");
const gpuData_1 = require("./pages/gpuData");
const ramData_1 = require("./pages/ramData");
const NetworkData_1 = require("./pages/NetworkData");
const systemData_1 = require("./pages/systemData");
const diskData_1 = require("./pages/diskData");
const printerData_1 = require("./pages/printerData");
const audioData_1 = require("./pages/audioData");
const bluetoothData_1 = require("./pages/bluetoothData");
const wifiData_1 = require("./pages/wifiData");
const usbData_1 = require("./pages/usbData");
const batteryData_1 = require("./pages/batteryData");
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
                    case "system":
                        checkRenderedSection(tempKey, () => (0, systemData_1.renderSystemData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "fs":
                        checkRenderedSection(tempKey, () => (0, diskData_1.renderFSData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "printer":
                        checkRenderedSection(tempKey, () => (0, printerData_1.renderPrinterData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "audio":
                        checkRenderedSection(tempKey, () => (0, audioData_1.renderAudioData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "bluetooth":
                        checkRenderedSection(tempKey, () => (0, bluetoothData_1.renderBluetoothData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "wifi":
                        checkRenderedSection(tempKey, () => (0, wifiData_1.renderWifiData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "usb":
                        checkRenderedSection(tempKey, () => (0, usbData_1.renderUsbData)(document.querySelector(".renderCurrentData")));
                        break;
                    case "battery":
                        checkRenderedSection(tempKey, () => (0, batteryData_1.renderBatteryData)(document.querySelector(".renderCurrentData")));
                        break;
                    default:
                        return;
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