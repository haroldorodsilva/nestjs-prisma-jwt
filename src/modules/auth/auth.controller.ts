import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { ResponseUserDto } from "../user/dto/response-user.dto";
import { AuthService } from "./auth.service";
import { GetUser } from "./decorators/get-user.decorator";
import { SingInAuthDto } from "./dto/singin-auth.dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() singIn: SingInAuthDto) {
    return this.authService.authenticate(singIn);
  }

  @Get("/me")
  @UseGuards(JwtAuthGuard)
  getMe(@GetUser() user: ResponseUserDto) {
    return user;
  }
}
