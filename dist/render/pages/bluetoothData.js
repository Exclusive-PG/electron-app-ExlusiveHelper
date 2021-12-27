"use strict";
// batteryPercent: null
// connected: null
// device: null
// macDevice: null
// macHost: null
// manufacturer: "Microsoft"
// name: "Microsoft Bluetooth Enumerator"
// type: ""
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBluetoothData = void 0;
const renderCards_1 = require("../renderCards");
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const checkNullValue = (value) => value === null ? "Missing" : value;
const renderBluetoothData = (innerDiv) => {
    //<i class="fab fa-windows"></i>
    let bluetoothOutput = ``;
    renderCards_1.os.bluetooth.forEach((item, index) => {
        bluetoothOutput += `
        <div class="content_bluetooth">
                <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
                <i class="fab fa-bluetooth-b"></i> ${item.name} 
              </a>
              <div class="collapse" id="collapseExample${index}">
            <div class="card card-body">
                <div class="wrapper_card_bluetooth">  
                    <div class="manufacturer_bluetooth">Manufacturer : ${item.manufacturer} </div>   
                    <div class="batteryPercent_bluetooth">Battery percent : ${checkNullValue(item.batteryPercent)} </div>   
                    <div class="connected_bluetooth">Connected : ${checkNullValue(item.connected)} </div>   
                    <div class="device_bluetooth">Device : ${checkNullValue(item.device)} </div>   
                </div>
            </div>
     </div>
     </div>
                `;
    });
    /// render result text content
    innerDiv.innerHTML = `
    <div class="renderTempData">

    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    <div class="bluetooth_data">
   <h2>Bluetooth</h2>
            <div class="bluetooth_render_data_wrapper">
                ${bluetoothOutput}

            </div>
    </div>

</div>
    `;
};
exports.renderBluetoothData = renderBluetoothData;
//# sourceMappingURL=bluetoothData.js.map