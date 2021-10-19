"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = exports.dateTimeFormat = exports.dateFormat = void 0;
const date_fns_1 = require("date-fns");
exports.dateFormat = 'dd/MM/yyyy';
exports.dateTimeFormat = 'dd/MM/yyyy HH:mm:ss';
const formatDateTime = (value, mask = exports.dateTimeFormat) => {
    if (!value)
        return '';
    return (0, date_fns_1.format)(typeof value === 'string' ? (0, date_fns_1.parseISO)(value) : value, mask);
};
exports.formatDateTime = formatDateTime;
//# sourceMappingURL=date.js.map