"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderNetworkData = void 0;
const renderCards_1 = require("./../renderCards");
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const checkEmpty = (object) => {
    if (object === "" || object === null || object === undefined) {
        return `Missing`;
    }
    else
        return object;
};
const renderNetworkData = (innerDiv) => {
    console.log(renderCards_1.os.networkInterfaces);
    let networkDataRender = "";
    // carrierChanges: 0
    // dhcp: true
    // dnsSuffix: ""
    // duplex: ""
    // ieee8021xAuth: "Not defined"
    // ieee8021xState: "Disabled"
    // iface: "Ethernet"
    // ifaceName: "Intel(R) Ethernet Connection (2) I219-V"
    // internal: false
    // ip4: "192.168.0.109"
    // ip4subnet: "255.255.255.0"
    // ip6: "fe80::845f:f082:47b4:912c"
    // ip6subnet: "ffff:ffff:ffff:ffff::"
    // mac: "b0:6e:bf:35:d4:f1"
    // mtu: ""
    // operstate: "up"
    // speed: 100
    // type: "wired"
    // virtual: false
    renderCards_1.os.networkInterfaces.forEach((item, index) => {
        networkDataRender += `
    <div class="content_network">
            <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
            <i class="fas fa-broadcast-tower"></i>  ${item.ifaceName} 
          </a>
          <div class="collapse" id="collapseExample${index}">
        <div class="card card-body">
            <div class="dhcp_net">DHCP : ${item.dhcp ? "Enabled" : "Disabled"}</div>
            <div class ="ieee8021xAuth_net">ieee8021xAuth : ${checkEmpty(item.ieee8021xAuth)}</div>
            <div class="ieee8021xState_net">ieee8021xState : ${checkEmpty(item.ieee8021xState)}</div>
            <div class="iface_net">Iface : ${checkEmpty(item.iface)}</div>
            <div class="ip4_net">IP4 : ${checkEmpty(item.ip4)}</div>
            <div class="ip4subnet_net">IP4subnet : ${checkEmpty(item.ip4subnet)}</div>
            <div class="ip6_net">IP6 : ${checkEmpty(item.ip6)}</div>
            <div class="ip6subnet_net">IP6subnet : ${checkEmpty(item.ip6subnet)}</div>
            <div class="mac_net">MAC : ${checkEmpty(item.mac)}</div>
            <div class="speed_net">Speed : ${checkEmpty(item.speed)}</div>
            <div class="type_net">Type : ${checkEmpty(item.type)} </div>
        </div>
 </div>
 </div>
            `;
    });
    innerDiv.innerHTML = `
<div class="renderTempData">

    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    
    <div class="network_data">
    <h3>Network</h3>
    <div class="render_data_network">${networkDataRender}</div>


    </div>
</div>
    `;
};
exports.renderNetworkData = renderNetworkData;
//# sourceMappingURL=NetworkData.js.map