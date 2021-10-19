"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
const response_user_dto_1 = require("../../user/dto/response-user.dto");
exports.GetUser = (0, common_1.createParamDecorator)((data, req) => {
    return req.args[0].user;
});
//# sourceMappingURL=get-user.decorator.js.map