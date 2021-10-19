import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  Query,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SearchUserDto } from "./dto/search-user.dto";
import { Role } from "../auth/decorators/role.decorator";
import { UserRole } from ".prisma/client";
import { RoleGuard } from "../auth/guards/role.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard, RoleGuard)
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Role(UserRole.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() filtro: SearchUserDto) {
    return this.userService.findAll(filtro);
  }

  @Get(":id")
  findOne(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.userService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    delete updateUserDto["email"];
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  @Role(UserRole.ADMIN)
  delete(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.userService.delete(id);
  }
}
