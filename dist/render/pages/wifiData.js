"use strict";
// {
//     id: 'Wi-Fi',
//     iface: 'en0',
//     name: 'AirPort',
//     model: 'AirPort',
//     ssid: 'my-own-internet',
//     bssid: '01:23:45:67:89:0a',
//     channel: 36,
//     frequency: 5180,
//     type: '802.11',
//     security: 'wpa2-psk',
//     signalLevel: 46,
//     txRate: '405'
//   },
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderWifiData = void 0;
const renderCards_1 = require("../renderCards");
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const renderWifiData = (innerDiv) => {
    //<i class="fab fa-windows"></i>
    let wifiOutput = ``;
    renderCards_1.os.wifiConnections.forEach((item, index) => {
        wifiOutput += `
        <div class="content_wifi">
                <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
                <i class="fas fa-wifi"></i> ${item.name} 
              </a>
              <div class="collapse" id="collapseExample${index}">
            <div class="card card-body">
                <div class="wrapper_card_wifi">
                    <div class="id_wifi">ID : ${item.id}   </div>    
                    <div class="ssid_wifi">ssid : ${item.ssid}  </div> 
                    <div class="bssid_wifi">bssid : ${item.bssid}  </div> 
                    <div class="channel_wifi">Channel : ${item.channel}  </div> 
                    <div class="frequency_wifi">Frequency : ${item.frequency}  </div>
                    <div class="type_wifi">Type : ${item.type}  </div>
                    <div class="security_wifi">Security : ${item.security}  </div>
                    <div class="signalLevel_wifi">Signal level : ${item.signalLevel}  </div>
                    <div class="txRate_wifi">txRate : ${item.txRate}  </div>
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
    <div class="wifi_data">
   <h2>Wifi</h2>
            <div class="wifi_render_data_wrapper">
                ${wifiOutput}

            </div>
    </div>

</div>
    `;
};
exports.renderWifiData = renderWifiData;
//# sourceMappingURL=wifiData.js.map