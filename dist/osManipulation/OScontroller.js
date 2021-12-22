"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const osUtils = require('os-utils');
const os = require('os');
const si = require('systeminformation');
class OSController {
    getCPUPercent() {
        osUtils.cpuUsage((v) => {
            this.__cpuUsagePer = v * 100;
            return v * 100;
        });
        return this.__cpuUsagePer;
    }
    getRamPercent() {
        return osUtils.freememPercentage() * 100;
    }
    getUserInfo() {
        return os.userInfo();
    }
    //cpu  = object 
    //graphics = object
    //memory = array
    //network = array
    //wifi = array
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.cpuData = yield si.cpu();
                //   console.log(this.cpuData);
                this.graphicsData = yield si.graphics();
                // console.log(this.graphicsData);
                this.memLayoutData = yield si.memLayout();
                //  console.log(this.memLayoutData);
                this.networkInterfaces = yield si.networkInterfaces();
                //  console.log(this.networkInterfaces);
                this.wifiConnections = yield si.wifiConnections();
                //  console.log(this.wifiConnections);
                this.systemInfo = yield si.system();
                // console.log(this.systemInfo)
                this.OS = yield si.osInfo();
                // console.log(this.OS)
                this.FS = yield si.diskLayout();
                //  console.log(this.FS)
                this.USB = yield si.usb();
                //  console.log(this.USB)
                this.printer = yield si.printer();
                //  console.log(this.printer)
                this.audio = yield si.audio();
                // console.log(this.audio)
                this.bluetooth = yield si.bluetoothDevices();
                //  console.log(this.bluetooth)
                this.battery = yield si.battery();
            }
            catch (e) {
                console.log(e);
            }
            this.ArrayAll = [
                { data: this.cpuData, isNotEmpty: this.cpuData !== null ? true : false, Label: "CPU", data_key: "CPU" },
                { data: this.graphicsData, isNotEmpty: this.graphicsData !== null ? true : false, Label: "Graphics", data_key: "Graphics" },
                { data: this.memLayoutData, isNotEmpty: this.memLayoutData.length !== 0 ? true : false, Label: "Memory/RAM", data_key: "Ram" },
                { data: this.networkInterfaces, isNotEmpty: this.networkInterfaces.length !== 0 ? true : false, Label: "Network", data_key: "Network" },
                { data: this.wifiConnections, isNotEmpty: this.wifiConnections.length !== 0 ? true : false, Label: "Wifi", data_key: "Wifi" },
                { data: this.systemInfo, isNotEmpty: this.systemInfo !== null ? true : false, Label: "System", data_key: "System" },
                { data: this.OS, isNotEmpty: this.OS !== null ? true : false, Label: "OS", data_key: "OS" },
                { data: this.FS, isNotEmpty: this.FS.length !== 0 ? true : false, Label: "FS", data_key: "FS" },
                { data: this.USB, isNotEmpty: this.USB.length !== 0 ? true : false, Label: "USB", data_key: "USB" },
                { data: this.printer, isNotEmpty: this.printer.length !== 0 ? true : false, Label: "Printer", data_key: "Printer" },
                { data: this.audio, isNotEmpty: this.audio.length !== 0 ? true : false, Label: "Audio", data_key: "Audio" },
                { data: this.bluetooth, isNotEmpty: this.bluetooth.length !== 0 ? true : false, Label: "Bluetooth", data_key: "Bluetooth" },
                { data: this.battery, isNotEmpty: this.battery.hasBattery, Label: "Battery", data_key: "Battery" }
            ];
            console.log(this.ArrayAll);
        });
    }
}
exports.default = OSController;
//# sourceMappingURL=OScontroller.js.map