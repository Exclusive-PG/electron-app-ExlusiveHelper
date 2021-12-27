// bytesPerSector: 512
import { os } from './../renderCards';
// device: "SCSI\\DISK&VEN_TOSHIBA&PROD_DT01ACA100\\4&BFDEFCD&0&000000"
// firmwareRevision: "MS2OA750"
// interfaceType: "SATA"
// name: "TOSHIBA DT01ACA100"
// sectorsPerTrack: 63
// serialNum: "28OLYHDNS"
// size: 1000202273280
// smartStatus: "Ok"
// temperature: null
// totalCylinders: 121601
// totalHeads: 255
// totalSectors: 1953520065
// totalTracks: 31008255
// tracksPerCylinder: 255
// type: "HD"
// vendor: "Toshiba"
export const renderFSData = (innerDiv:HTMLDivElement)=>{
    
   
    //<i class="fab fa-windows"></i>
    
    let fsOutput : string = ``;

    os.FS.forEach((item:any,index:number) => {
        fsOutput += `
        <div class="render_item_fs_${index+1}">
        <center><h2 class="name_fs_system">${item.name} <i class="far fa-hdd"></i></h2></center>
        <center><div class="device_fs">Device : ${item.device}</div> </center>
            
        <div class="grid_other_data_fs_system_${index+1} grid_data_fs_system">        
                <div class="firmwareRevision_fs">Firmware revision : ${item.firmwareRevision} <i class="fas fa-code-branch"></i></div>
                <div class="interfaceType_fs">Interface Type : ${item.interfaceType} <i class="fab fa-centercode"></i> </div>
                <div class="serialNum_fs">Serial num : ${item.serialNum} <i class="fab fa-centercode"></i></div>
                <div class="size_fs">Size : ${(item.size/1024/1024/1024).toFixed(0)} GB <i class="fas fa-database"></i></div>
                <div class="smartStatus_fs">Smart status : ${item.smartStatus} <i class="fas fa-robot"></i></div>
                <div class="totalCylinders_fs">Total cylinders : ${item.totalCylinders} <i class="fab fa-wolf-pack-battalion"></i></div>
                <div class="totalHeads_fs">Total heads : ${item.totalHeads} <i class="fab fa-wolf-pack-battalion"></i></div>
                <div class="totalSectors_fs">Total sectors : ${item.totalSectors} <i class="fab fa-wolf-pack-battalion"></i></div>
                <div class="totalTracks_fs">Total tracks : ${item.totalTracks} <i class="fab fa-wolf-pack-battalion"></i></div>
                <div class="type_fs">Type : ${item.type} <i class="fas fa-hdd"></i></div>
                <div class="vendor_fs">Vendor : ${item.vendor} <i class="fas fa-trademark"></i></div>
            </div>
        </div>
        `
    });
    
    /// render result text content

    innerDiv.innerHTML = `
    <div class="renderTempData">

    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    <div class="fs_data">
            
            <div class="fs_render_data_wrapper">
                ${fsOutput}

            </div>
    </div>

</div>
    `
}