"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRAMdata = void 0;
const renderCards_1 = require("./../renderCards");
const cpuData_1 = require("./cpuData");
const os_1 = require("./../../osManipulation/os");
const renderRAMdata = (innerDiv) => {
    console.log(renderCards_1.os.memLayoutData);
    let MemoryRes = ``;
    // bank: "BANK 0"
    // clockSpeed: 2400
    // ecc: false
    // formFactor: "DIMM"
    // manufacturer: "GEIL"
    // partNum: "CL17-17-17 D4-2400"
    // serialNum: "00000000"
    // size: 17179869184
    // type: "DDR4"
    // voltageConfigured: 1.2
    // voltageMax: 0
    // voltageMin: 0
    renderCards_1.os.memLayoutData.forEach((item) => {
        MemoryRes += `
        <div class="bank_ram">Bank : ${item.bank}</div>
        <div class="clockspeed_ram">Clock speed : ${item.clockSpeed} <i class="fas fa-tachometer-alt"></i></div>
        <div class="formfactor_ram">Form factor : ${item.formFactor} <i class="fas fa-memory"></i></div>
        <div class="manufacturer_ram">Manufacturer : ${item.manufacturer} <i class="fas fa-memory"></i></div>
        <div class="partnum_ram">Part num : ${item.partNum} <i class="fab fa-centercode"></i> </div>
        <div class="size_ram">Size : ${item.size / 1024 / 1024 / 1024}GB <i class="fas fa-database"></i></div>
        <div class="type_ram">Type : ${item.type} <i class="fab fa-centercode"></i></div>
        <div class="voltageConfigured_ram">Voltage : ${item.voltageConfigured} V <i class="fas fa-bolt"></i></div>
        `;
    });
    //// RESULT_RENDER
    innerDiv.innerHTML = `
    <div class="renderTempData">
    
        <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
        <div class="ram_data">
        <h1 class="hl_ram">RAM </h1>
        
                <div class="render_data_ram">
               <div class="render_data_ram_text"> ${MemoryRes}</div>
               
               <div class="render_data_circle_usage_mem">
               
                        <div class="circle-big">
                        <div class="text">
                            <div class="data_free_mem">Loading</div>
                            <div class="small">Free memory</div>
                        </div>
                        <svg>
                            <circle class="bg" cx="105" cy="105" r="100"></circle>
                            <circle class="memory_usage" cx="109" cy="105" r="100"></circle>
                        </svg>
                    </div>
               
               </div>


            </div>
        </div>
    
    </div>
        `;
    (0, cpuData_1.updateCircle)(".memory_usage", document.querySelector(".data_free_mem"), () => os_1.osController.getRamPercent(), 5000);
};
exports.renderRAMdata = renderRAMdata;
//# sourceMappingURL=ramData.js.map