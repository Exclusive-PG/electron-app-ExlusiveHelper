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
exports.renderUsbData = void 0;
const renderCards_1 = require("../renderCards");
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const checkNullValue = (value) => (value === null || value === "") ? "Missing" : value;
const renderUsbData = (innerDiv) => {
    //<i class="fab fa-windows"></i>
    let usbOutput = ``;
    renderCards_1.os.USB.forEach((item, index) => {
        usbOutput += `
        <div class="content_usb">
                <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
                <i class="fab fa-usb"></i> ${checkNullValue(item.name)} 
              </a>
              <div class="collapse" id="collapseExample${index}">
            <div class="card card-body">
                <div class="wrapper_card_usb">
                    <div class="id_usb">ID : ${item.id} </div>    
                    <div class="type_usb">Type : ${item.type} </div> 
                    <div class="vendor_usb">Vendor : ${item.vendor} <i class="fas fa-trademark"></i></div> 
                    <div class="manufacturer_usb">Manufacturer : ${checkNullValue(item.manufacturer)} </div>
                    <div class="maxPower_usb">MaxPower : ${item.maxPower} </div>  
                    <div class="SerialNumber_usb">SerialNumber : ${checkNullValue(item.serialNumber)} </div>  
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
    <div class="usb_data">
   <h2>USB</h2>
            <div class="usb_render_data_wrapper">
                ${usbOutput}

            </div>
    </div>

</div>
    `;
};
exports.renderUsbData = renderUsbData;
//# sourceMappingURL=usbData.js.map