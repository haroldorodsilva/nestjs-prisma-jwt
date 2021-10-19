import { createParamDecorator } from "@nestjs/common";
import { ResponseUserDto } from "src/modules/user/dto/response-user.dto";

export const GetUser = createParamDecorator((data, req): ResponseUserDto => {
  return req.args[0].user;
});
