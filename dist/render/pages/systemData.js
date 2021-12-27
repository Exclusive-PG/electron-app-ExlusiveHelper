"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSystemData = void 0;
const renderCards_1 = require("./../renderCards");
// arch: "x64"
// build: "19041"
// codename: ""
// codepage: " 866"
// distro: "Microsoft Windows 10 Pro"
// fqdn: "DESKTOP-E08K873"
// hostname: "DESKTOP-E08K873"
// hypervisor: false
// kernel: "10.0.19041"
// logofile: "windows"
// platform: "Windows"
// release: "10.0.19041"
// remoteSession: false
// serial: "00331-10000-00001-AA896"
// servicepack: "0.0"
// uefi: true
const renderSystemData = (innerDiv) => {
    const { OS } = renderCards_1.os;
    //<i class="fab fa-windows"></i>
    /// render result text content
    innerDiv.innerHTML = `
    <div class="renderTempData">

    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    <div class="system_data">
            <center><h2 class="name_os_system">${OS.distro}</h2></center>
            <div class="system_render_data_wrapper">
                <div class="architecture_system">Architecture : ${OS.arch} ${OS.distro.toLowerCase().includes("windows") && "<i class='fab fa-windows'></i>"}</div>
                <div class="hostname_system">Hostname : ${OS.hostname} <i class="fab fa-stack-overflow"></i></div>
                <div class="hypervisor_system">Hypervisor : ${OS.hypervisor} <i class="far fa-eye"></i></div>
                <div class="kernel_system">Kernel : ${OS.kernel} <i class="fab fa-centercode"></i></div>
                <div class="platform_system">Platform : ${OS.platform} ${OS.distro.toLowerCase().includes("windows") && "<i class='fab fa-windows'></i>"}</div>
                <div class="release_system">Release : ${OS.release} <i class="fab fa-stack-overflow"></i> </div>
                <div class="serial_system">Serial number: ${OS.serial} <i class="fab fa-stack-overflow"></i></div>
                <div class="uefi_system">UEFI: ${OS.uefi ? "Enabled" : "Disabled"} <i class="fas fa-microchip"></i></div>
          

            </div>
    </div>

</div>
    `;
};
exports.renderSystemData = renderSystemData;
//# sourceMappingURL=systemData.js.map