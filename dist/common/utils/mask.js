"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTelefone = exports.clearMaskNumber = void 0;
const clearMaskNumber = (value) => {
    if (value)
        return value.replace(/\D+/g, '');
    return '';
};
exports.clearMaskNumber = clearMaskNumber;
const formatTelefone = (phone) => {
    if (!phone)
        return '';
    let mask = phone.replace(/\D/g, '');
    mask = mask.replace(/^0/, '');
    if (mask.length > 10) {
        return mask.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    }
    if (mask.length > 5) {
        return mask.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    }
    if (mask.length > 2) {
        return mask.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    }
    return mask.replace(/^(\d*)/, '($1');
};
exports.formatTelefone = formatTelefone;
//# sourceMappingURL=mask.js.map