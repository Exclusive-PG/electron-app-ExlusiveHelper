"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const osUtils = require('os-utils');
const os = require('os');
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
}
exports.default = OSController;
//# sourceMappingURL=OScontroller.js.map