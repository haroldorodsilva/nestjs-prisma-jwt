import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import * as crypto from "crypto";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { SearchUserDto } from "./dto/search-user.dto";
import { ResponseUserDto } from "./dto/response-user.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (exists) throw new BadRequestException("Usuário já existe");

    const confirmationToken = crypto.randomBytes(32).toString("hex");
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.prisma.user.create({
      data: { ...createUserDto, password, salt, confirmationToken },
    });

    delete user.password;

    // const mail = {
    //   to: user.email,
    //   from: "noreply@application.com",
    //   subject: "Email de confirmação",
    //   template: "email-confirmation",
    //   context: {
    //     token: user.confirmationToken,
    //   },
    // };
    // await this.mailerService.sendMail(mail);

    return user;
  }

  async findAll(filter?: SearchUserDto) {
    const take = filter.limit || 10;
    const page = filter.page || 1;
    const skip = (page - 1) * take;

    const find = await this.prisma.user.findMany({
      skip,
      take,
      select: {
        id: true,
        email: true,
        name: true,
        active: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        ...(filter.field &&
          filter.value && {
          [filter.field]: {
            startsWith: filter.value,
            mode: "insensitive",
          },
        }),
      },
      orderBy: {
        name: "asc",
      },
    });
    return { results: find, page, limit: take, pages: 0 };
  }

  async findOne(id: string): Promise<ResponseUserDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        active: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) throw new NotFoundException("Usuário não existe");

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const exists = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!exists) throw new BadRequestException("Usuário não existe");

    if (updateUserDto?.password)
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        exists.salt
      );

    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    delete user.password;

    return user;
  }

  async delete(id: string) {
    const exists = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!exists) throw new BadRequestException("Usuário não existe");

    await this.prisma.user.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }
}
