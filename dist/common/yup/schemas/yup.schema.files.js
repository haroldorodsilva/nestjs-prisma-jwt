"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yupFiles = void 0;
const Yup = require("yup");
const yup_schema_file_1 = require("./yup.schema.file");
const yupFiles = (required) => {
    return Yup.array().of((0, yup_schema_file_1.yupFile)(required));
};
exports.yupFiles = yupFiles;
//# sourceMappingURL=yup.schema.files.js.map