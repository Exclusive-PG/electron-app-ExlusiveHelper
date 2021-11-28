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
exports.getInfoTempFiles = exports.BYTES = exports.KB = exports.MB = exports.GB = void 0;
const fs = require("fs");
const os = require("os");
exports.GB = "GB";
exports.MB = "MB";
exports.KB = "KB";
exports.BYTES = "bytes";
let _getInfoTempFiles = new Promise((resolve, reject) => {
    let sumSize = 0;
    let filenames = fs.readdirSync(`${os.homedir()}/AppData/Local/Temp`);
    filenames.forEach((item) => {
        sumSize += fs.statSync(`${os.homedir()}/AppData/Local/Temp/${item}`).size;
    });
    return setTimeout(() => {
        resolve(sumSize);
    }, 1000);
});
function getInfoTempFiles(sizeShow = "bytes") {
    return __awaiter(this, void 0, void 0, function* () {
        let res = 0;
        yield _getInfoTempFiles.then((data) => {
            res = data;
            console.log(res);
        });
        switch (sizeShow) {
            case exports.GB:
                return (res / 1024 / 1024 / 1024).toFixed(2);
            case exports.MB:
                return (res / 1024 / 1024).toFixed(0);
            case exports.KB:
                return (res / 1024).toFixed(0);
            case exports.BYTES:
                return (res).toFixed(0);
        }
    });
}
exports.getInfoTempFiles = getInfoTempFiles;
// fs.stat(`${os.homedir()}/AppData/Local/Temp/`+ item, (err:any, fileStats:any) => {
//     if (err) {
//       //console.log(err)
//     } else {
//       console.log(fileStats.size)
//       sumSize += parseInt(fileStats.size);
//     }
//   })
//# sourceMappingURL=getTempFiles.js.map