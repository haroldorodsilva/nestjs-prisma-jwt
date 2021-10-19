"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFilePath = exports.removeFile = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const removeFile = (fileName, subFolder) => {
    if (!fileName)
        return false;
    const folder = (0, path_1.join)(__dirname, '..', '..', 'uploads');
    const filePath = subFolder
        ? (0, path_1.join)(folder, subFolder, fileName)
        : (0, path_1.join)(folder, fileName);
    if (fs_1.default.existsSync(filePath)) {
        fs_1.default.unlinkSync(filePath);
    }
    return true;
};
exports.removeFile = removeFile;
const removeFilePath = (path) => {
    if (!path)
        return false;
    if (fs_1.default.existsSync(path)) {
        fs_1.default.unlinkSync(path);
    }
    return true;
};
exports.removeFilePath = removeFilePath;
//# sourceMappingURL=removeFile.js.map