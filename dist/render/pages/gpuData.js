"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGPUdata = void 0;
const renderCards_1 = require("../renderCards");
// clockCore: 1265
// clockMemory: 3504
// driverVersion: "471.96"
// fanSpeed: 29
// memoryFree: 2860
// memoryTotal: 4096
// memoryUsed: 1236
// model: "NVIDIA GeForce GTX 1050 Ti"
// name: "NVIDIA GeForce GTX 1050 Ti"
// pciBus: "00000000:01:00.0"
// powerLimit: 75
// subDeviceId: "0x862A1043"
// temperatureGpu: 33
// utilizationGpu: 3
// utilizationMemory: 2
// vendor: "NVIDIA"
// vram: 4096
// vramDynamic: false
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const renderGPUdata = (innerDiv) => {
    console.log(renderCards_1.os.graphicsData.controllers[0]);
    let controllers = "";
    renderCards_1.os.graphicsData.controllers.forEach((item, index) => {
        controllers +=
            `
<div class = "content_controllers">
        <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
        Controller ${index + 1}
      </a>
    <div class="collapse" id="collapseExample${index}">
      <div class="card card-body">
        <div class="wrapper_card_controller">
            <div class="data_controller">
            <h3>Advanced</h3>
                <div class = "clockCore">Clock core : ${item.clockCore} <i class="fab fa-centercode"></i> </div>
                <div class = "clockMemory">Clock memory :${item.clockMemory} <i class="fas fa-memory"></i> </div>
                <div class = "driverVersion">Driver version:${item.driverVersion} <i class="fab fa-red-river"></i> </div>      
                <div class = "model">Model : ${item.model} <i class="fas fa-microchip"></i></div>
                <div class = "subDeviceId">subDeviceId : ${item.subDeviceId} <i class="fas fa-shield-alt"></i> </div>
                <div class = "utilizationGpu">Utilization GPU : ${item.utilizationGpu} <i class="fas fa-recycle"></i></div>
                <div class = "utilizationMemory">Utilization memory : ${item.utilizationMemory} <i class="fas fa-recycle"></i></div>
                <div class = "vendor">Vendor : ${item.vendor} <i class="fas fa-trademark"></i></div>
                <div class = "vram">Vram : ${item.vram} <i class="fas fa-microchip"></i> </div>
                <div class = "vramDynamic">Vram dynamic : ${item.vramDynamic ? "Yes" : "No"} <i class="fas fa-microchip"></i></div>
            </div>
       
                <div class="data_memory">   
                <h3>Memory</h3>                         
                    <div class = "memoryFree">
                    <div>Memory free : ${item.memoryFree} MB</div> 
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${Math.round((item.memoryFree / item.memoryTotal) * 100)}%"></div>
                    </div>
                    </div>
                    
                    <div class = "memoryTotal">
                        <div>Memory total : ${item.memoryTotal} MB</div>
                        <div class="progress">
                        <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                        </div>
                    </div>
                    
                    <div class = "memoryUsed">
                        <div>Memory used : ${item.memoryUsed} MB</div>
                        <div class="progress">
                        <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${Math.round((item.memoryUsed / item.memoryTotal) * 100)}%"></div>
                        </div>
                    </div>
                </div>

            <div class="indicators">
            <h3>Indicators</h3>
            <div class = "fanSpeed">Fan speed :${item.fanSpeed} <i class="fas fa-tachometer-alt"></i> </div>
            <div class = "powerLimit">Power limit : ${item.powerLimit} <i class="fab fa-superpowers"></i> </div>
            <div class = "temperatureGpu">Temperature GPU : ${item.temperatureGpu} <i class="fas fa-thermometer-half"></i> </div>
            </div>



        </div>
    </div>
        </div>
</div>
        `;
    });
    //     builtin: false
    // connection: "HDMI"
    // currentRefreshRate: 60
    // currentResX: 1920
    // currentResY: 1080
    // deviceName: "\\\\.\\DISPLAY1"
    // main: true
    // model: "Generic PnP Monitor"
    // pixelDepth: 32
    // positionX: 0
    // positionY: 0
    // resolutionX: 1920
    // resolutionY: 1080
    // sizeX: 48
    // sizeY: 27
    // vendor: "(Standard monitor types)"
    let displays = "";
    renderCards_1.os.graphicsData.displays.forEach((item, index) => {
        displays += `
<div class="content_displays">
        <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
        Display ${index + 1}
        </a>
    <div class="collapse" id="collapseExample${index}">
        <div class="card card-body">
            <div class="wrapper_card_body">
                <div class="data_screen">
                    <div class="connection">Сonnection : ${item.connection} <i class="fas fa-fire"></i> </div>
                    <div class="currentRefreshRate">Сurrent refresh rate : ${item.currentRefreshRate} <i class="fas fa-sync-alt"></i></div>
                    <div class="currentResX">Current resX : ${item.currentResX} <i class="fas fa-arrows-alt-h"></i></div>
                    <div class="currentResY">Current resY : ${item.currentResY} <i class="fas fa-arrows-alt-h" style="transform:rotate(90deg);"></i></div>
                    <div class="main">Main : ${item.main ? "Yes" : "No"} <i class="fas fa-home"></i></div>
                    <div class="model">Model : ${item.model} <i class="fas fa-desktop"></i></div>
                    <div class="pixelDepth">Pixel depth : ${item.pixelDepth} <i class="fas fa-desktop"></i></div>
                    <div class="deviceName">Device name : ${item.deviceName} <i class="fas fa-desktop"></i></div>
                    <div class="vendor">Vendor : ${item.vendor} <i class="fas fa-trademark"></i></div>
                </div>

                <div class="screen_show">
         
                    <div class="screen">
                    <div class="currentResX_screen_show">${item.currentResX} px</div>
                    <div class="currentResY_screen_show">${item.currentResY} px</div>
                        <span class="index_screen">${index + 1}</span>
                   
                    </div>
                </div>
            </div>
    </div>
        </div>

</div>
         `;
    });
    //// RESULT_RENDER
    innerDiv.innerHTML = `
<div class="renderTempData">

    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    <div class="graphics_data">
    <h1 class="hl_graphics">Controllers</h1>
    <div class="controllers">${controllers}</div>
    <h1 class="hl_graphics">Displays</h1>
    <div class="display">${displays}</div>
    </div>

</div>
    `;
};
exports.renderGPUdata = renderGPUdata;
//# sourceMappingURL=gpuData.js.map