"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkInterfaces = exports.memLayoutData = exports.graphicsData = exports.cpuData = void 0;
const cardItem_1 = require("./../animation_ts/cardItem");
const aos_1 = __importDefault(require("aos"));
const si = require('systeminformation');
let array = [];
si.graphics().then((data) => {
    console.log(data);
});
si.memLayout().then((data) => {
    console.log(data);
});
si.cpu().then((data) => {
    console.log(data);
});
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            exports.cpuData = yield si.cpu();
            exports.graphicsData = yield si.graphics();
            exports.memLayoutData = yield si.memLayout();
            exports.networkInterfaces = yield si.networkInterfaces();
            console.log(exports.networkInterfaces);
        }
        catch (e) {
            console.log(e);
        }
    });
}
getData().then(() => {
    array.push({ MainLabel: "Graphics", subLabel: "Name:" + exports.graphicsData.controllers[0].name, asideLabel: `TotalMemory:${exports.graphicsData.controllers[0].memoryTotal.toString()}` });
    array.push({ MainLabel: "CPU", subLabel: "Brand:" + exports.cpuData.brand, asideLabel: `Cores:${exports.cpuData.cores.toString()}` });
    array.push({ MainLabel: "RAM", subLabel: (exports.memLayoutData[0].size / 1024 / 1024).toString() + " MB", asideLabel: exports.memLayoutData[0].type });
    array.push({ MainLabel: "Ethernet", subLabel: exports.networkInterfaces[0].ip4, asideLabel: exports.networkInterfaces[0].ifaceName });
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