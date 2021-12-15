"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.os = void 0;
const cardItem_1 = require("./../animation_ts/cardItem");
const aos_1 = __importDefault(require("aos"));
const OScontroller_1 = __importDefault(require("./../osManipulation/OScontroller"));
const si = require('systeminformation');
let array = [];
exports.os = new OScontroller_1.default();
let pathToImages = "assets/images/";
exports.os.getData().then(() => {
    array.push({ MainLabel: "Videocard", subLabel: "Name:" + exports.os.graphicsData.controllers[0].name, asideLabel: `Total Memory:${(exports.os.graphicsData.controllers[0].memoryTotal / 1024).toString()} GB`, imageData: `${pathToImages}videocard.png ` });
    array.push({ MainLabel: "CPU", subLabel: "Brand:" + exports.os.cpuData.brand, asideLabel: `Cores:${exports.os.cpuData.cores.toString()}`, imageData: `${pathToImages}cpu.png ` });
    array.push({ MainLabel: "RAM", subLabel: `Total Memory : ${(exports.os.memLayoutData[0].size / 1024 / 1024 / 1024).toString()}` + " GB", asideLabel: `SDRAM : ${exports.os.memLayoutData[0].type}`, imageData: `${pathToImages}ram.png ` });
    if (exports.os.wifiConnections.length !== 0) {
        array.push({ MainLabel: "Wifi", subLabel: exports.os.networkInterfaces[0].ip4, asideLabel: exports.os.networkInterfaces[0].ifaceName, imageData: `${pathToImages}wifi.png ` });
    }
    array.push({ MainLabel: "Network", subLabel: `MAC : ${exports.os.networkInterfaces[0].mac}`, asideLabel: exports.os.networkInterfaces[0].ifaceName, imageData: `${pathToImages}network.png ` });
    renderCards(document.querySelector(".cards-info"), array);
    (0, cardItem_1.hoverCardEffect)();
});
const renderCards = (innerRender, arrayCards) => {
    let tempResult = "";
    arrayCards.forEach((item, index) => {
        tempResult += `
        <div class="item">
        <div class="backgrond_anim"></div>
        <div class="text_item item_${index + 1} render">
            <div class="MainLabel">${item.MainLabel}</div>
            <div class="subLabel">${item.subLabel}</div>
            <div class="asideLabel">${item.asideLabel}</div>
            <div class="images"><img alt =${item.MainLabel} src=${item.imageData}/></div>
        </div>
        </div>`;
    });
    innerRender.innerHTML = tempResult;
    aos_1.default.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 2000,
    });
};
//# sourceMappingURL=renderCards.js.map