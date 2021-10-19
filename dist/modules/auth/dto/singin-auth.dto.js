"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingInAuthDto = void 0;
const useSchema_decorator_1 = require("../../../common/decorators/useSchema.decorator");
const yup_1 = require("../../../common/yup");
const schema = yup_1.default.object({
    email: yup_1.default.string().email().required(),
    password: yup_1.default.string().min(4).required(),
});
let SingInAuthDto = class SingInAuthDto {
};
SingInAuthDto = __decorate([
    (0, useSchema_decorator_1.UseSchema)(schema)
], SingInAuthDto);
exports.SingInAuthDto = SingInAuthDto;
//# sourceMappingURL=singin-auth.dto.js.map