"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const osUtils = require('os-utils');
class OSController {
    constructor() {
        this.s = 10;
        console.log(this.s);
    }
    getCPUPercent() {
        osUtils.cpuUsage((v) => {
            return v * 100;
        });
    }
}
exports.default = OSController;
//# sourceMappingURL=OScontroller.js.map