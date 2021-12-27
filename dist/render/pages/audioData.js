"use strict";
// channel: null
// default: null
// driver: null
// id: "HDAUDIO\\FUNC_01&VEN_10DE&DEV_0080&SUBSYS_1043862A&REV_1001\\5&111E2DA6&0&0001"
// in: null
// manufacturer: "NVIDIA"
// name: "NVIDIA High Definition Audio"
// out: null
// revision: null
// status: "3"
// type: ""
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAudioData = void 0;
const renderCards_1 = require("../renderCards");
const randomColor = ["#ffd600", "#F436BC", "#EE2D35"];
const renderAudioData = (innerDiv) => {
    //<i class="fab fa-windows"></i>
    let audioOutput = ``;
    renderCards_1.os.audio.forEach((item, index) => {
        audioOutput += `
        <div class="content_audio">
                <a class="collapseBtnDataCores" style = "background:${randomColor[Math.floor(Math.random() * randomColor.length)]};" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
                <i class="fas fa-volume-up"></i> ${item.name} 
              </a>
              <div class="collapse" id="collapseExample${index}">
            <div class="card card-body">
                <div class="wrapper_card_audio">
                    <div class="id_audio">ID : ${item.id} <i class="fas fa-terminal"></i></div>    
                    <div class="manufacturer_audio">Manufacturer : ${item.manufacturer} <i class="fas fa-volume-up"></i></div>   
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
    <div class="audio_data">
   <h2>Audio</h2>
            <div class="audio_render_data_wrapper">
                ${audioOutput}

            </div>
    </div>

</div>
    `;
};
exports.renderAudioData = renderAudioData;
//# sourceMappingURL=audioData.js.map