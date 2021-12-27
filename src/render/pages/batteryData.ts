// {
//     hasBattery: true,
//     cycleCount: 35,
//     isCharging: false,
//     designedCapacity: 64958,
//     maxCapacity: 65865,
//     currentCapacity: 64856,
//     voltage: 12.767,
//     capacityUnit: 'mWh',
//     percent: 100,
//     timeRemaining: 551,
//     acConnected: false,
//     type: 'Li-ion',
//     model: '',
//     manufacturer: 'Apple',
//     serial: 'F9Y19860Y9AH9XBAX'
//   }

import { os } from "../renderCards";


const checkNullValue = (value :any) => (value === null || value === "") ? "Missing" : value;

export const renderBatteryData = (innerDiv:HTMLDivElement)=>{
    const {battery} = os

    

    
    /// render result text content

    innerDiv.innerHTML = `
    <div class="renderTempData">

    <div class="BackRenderTempData"><i class="fas fa-reply  fa-2x"></i></div>
    <div class="battery_data">
             <center><h2 class="name_os_system">Battery <i class="fas fa-battery-full"></i></h2></center>
            <div class="battery_render_data_wrapper">
                 
                <div class="cycleCount_battery">Cycle count : ${battery.cycleCount}</div>
                <div class="isCharging_battery">Charging: ${battery.isCharging ? "Yes" : "No"}</div>
                <div class="designedCapacity_battery">Designed capacity: ${battery.designedCapacity}</div>
                <div class="maxCapacity_battery">Max capacity: ${battery.maxCapacity}</div>
                <div class="currentCapacity_battery">Current capacity: ${battery.currentCapacity}</div>
                <div class="voltage_battery">Voltage: ${battery.voltage}</div>
                <div class="capacityUnit_battery">CapacityUnit: ${battery.capacityUnit}</div>
                <div class="percent_battery">Percent: ${battery.percent}</div>
                <div class="timeRemaining_battery">Time remaining: ${battery.timeRemaining}</div>
                <div class="acConnected_battery">acConnected: ${battery.acConnected ? "Yes": "No"}</div>
                <div class="type_battery">Type: ${battery.type}</div>
                <div class="manufacturer_battery">Manufacturer: ${battery.manufacturer}</div>
                <div class="serial_battery">Serial: ${battery.serial}</div>
            </div>
    </div>

</div>
    `
}