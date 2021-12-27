"use strict";
// 0:
// default: false
// id: 1
// local: true
// model: "Send To Microsoft OneNote 2010 Driver"
// name: "Отправить в OneNote 2010"
// shared: false
// status: "Idle"
// uri: null
// uuid: null
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPrinterData = void 0;
const renderCards_1 = require("../renderCards");
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const renderPrinterData = (innerDiv) => {
    //<i class="fab fa-windows"></i>
    let printerOutput = ``;
    renderCards_1.os.printer.forEach((item, index) => {
        printerOutput += `
        <div class="content_printer">
                <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
                ${item.model} 
              </a>
              <div class="collapse" id="collapseExample${index}">
            <div class="card card-body">
                <div class="wrapper_card_printer">
                    <div class="id_printer">ID : ${item.id} <i class="fas fa-terminal"></i></div>    
                    <div class="default_printer">Default : ${item.default ? "Yes" : "No"} ${item.default ? "<i class='fas fa-lock'></i>" : "<i class='fas fa-lock-open'></i>"}</div>
                    <div class="local_printer">Local : ${item.local ? "Yes" : "No"} <i class="fas fa-map-marker-alt"></i></div>
                    <div class="name_printer">Name : ${item.name} <i class="fab fa-xbox"></i></div>
                    <div class="status_printer">Status : ${item.status} <i class="far fa-eye"></i></div>
                    <div class="shared_printer">Shared : ${item.shared ? "Yes" : "No"} <i class="far fa-share-square"></i></div>
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
    <div class="printer_data">
   <h2>Printer</h2>
            <div class="printer_render_data_wrapper">
                ${printerOutput}

            </div>
    </div>

</div>
    `;
};
exports.renderPrinterData = renderPrinterData;
//# sourceMappingURL=printerData.js.map