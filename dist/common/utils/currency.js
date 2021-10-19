"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
const formatCurrency = (text) => {
    if (!text || text === 'undefined')
        return '0,00';
    let value = `${typeof text === 'string' ? text : text.toFixed(2)}`;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    return value;
};
exports.formatCurrency = formatCurrency;
//# sourceMappingURL=currency.js.map