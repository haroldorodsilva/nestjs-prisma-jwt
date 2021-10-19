"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabelFromOptions = void 0;
const getLabelFromOptions = (options, findValue) => {
    const find = options.find(({ value }) => value === findValue);
    if (find)
        return find.label;
    return '';
};
exports.getLabelFromOptions = getLabelFromOptions;
//# sourceMappingURL=getLabelFromOptions.js.map