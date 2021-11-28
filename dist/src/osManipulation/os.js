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
const OScontroller_1 = __importDefault(require("./../../dist/osManipulation/OScontroller"));
const os = require("os");
const osUtils = require('os-utils');
const si = require('systeminformation');
const gpuInfo = require('gpu-info');
gpuInfo().then(function (data) {
    console.log('GPUS:', data);
});
//const electron = require("electron");
//const ipcRender = electron.ipcRenderer;
// setInterval(()=>{
// osUtils.cpuUsage((v:any)=>{
//     document.querySelector(".cpus").innerHTML = `CPU Usage: ${(v*100).toFixed(2)} %`;
// });
//     document.querySelector(".totalmem").innerHTML = `TotalMem: ${(os.totalmem()/1024/1024/1024).toFixed(2)} GB`;
//     document.querySelector(".freemem").innerHTML = `FreeMem: ${(os.freemem()/1024/1024/1024).toFixed(2)} GB`;
// },1000);
// promises style - new since version 3
const osController = new OScontroller_1.default();
setInterval(() => {
    console.log(osController);
    // console.log("DUDE");
}, 1000);
setInterval(() => {
    osUtils.cpuUsage((v) => {
        let circumference = 2 * Math.PI * document.querySelector(".cpu_usage").r.baseVal.value;
        document.querySelector(".data_cpu_usage").innerHTML = `${(v * 100).toFixed(2)} %`;
        document.querySelector(".cpu_usage").style.strokeDashoffset = `${circumference - (v * 100) / 100 * circumference}`;
        document.querySelector(".cpu_usage").style.strokeDasharray = `${circumference} ${circumference}`;
    });
    document.querySelector(".data_total_mem").innerHTML = `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`;
    document.querySelector(".data_free_mem").innerHTML = `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`;
}, 1000);
//  const { execSync } = require('child_process');
// setInterval(()=>{
//    // const code = execSync('wmic path win32_VideoController get AdapterRAM', { stdio: 'inherit' });
//    cpuData();
//     //console.log(code);
// },1000)
//},5000)
let temp;
window.addEventListener("DOMContentLoaded", () => {
    si.graphics().then((data) => {
        temp = data;
        // console.log(temp)
    });
});
let interval = setInterval(() => {
    if (temp !== undefined)
        clearInterval(interval);
    console.log(temp);
}, 1000);
function cpuData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield si.graphics();
            console.log('CPU Information:');
            console.log('- manufucturer: ' + data.manufacturer);
            console.log('- brand: ' + data.brand);
            console.log('- speed: ' + data.speed);
            console.log('- cores: ' + data.cores);
            console.log('- physical cores: ' + data.physicalCores);
            console.log('...');
        }
        catch (e) {
            console.log(e);
        }
    });
}
//# sourceMappingURL=os.js.map