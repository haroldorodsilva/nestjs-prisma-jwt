"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const yup_1 = require("../../../common/yup");
const useSchema_decorator_1 = require("../../../common/decorators/useSchema.decorator");
const client_1 = require(".prisma/client");
const schema = yup_1.default.object({
    password: yup_1.default.string().min(4).optional(),
    role: yup_1.default.mixed().oneOf(Object.values(client_1.UserRole)).optional(),
    active: yup_1.default.string().optional(),
});
let UpdateUserDto = class UpdateUserDto {
};
UpdateUserDto = __decorate([
    (0, useSchema_decorator_1.UseSchema)(schema)
], UpdateUserDto);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map