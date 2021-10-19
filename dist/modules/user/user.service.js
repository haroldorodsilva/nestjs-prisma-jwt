"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const exists = await this.prisma.user.findUnique({
            where: { email: createUserDto.email },
        });
        if (exists)
            throw new common_1.BadRequestException("Usuário já existe");
        const confirmationToken = crypto.randomBytes(32).toString("hex");
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(createUserDto.password, salt);
        const user = await this.prisma.user.create({
            data: Object.assign(Object.assign({}, createUserDto), { password, salt, confirmationToken }),
        });
        delete user.password;
        return user;
    }
    async findAll(filter) {
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
            where: Object.assign({}, (filter.field &&
                filter.value && {
                [filter.field]: {
                    startsWith: filter.value,
                    mode: "insensitive",
                },
            })),
            orderBy: {
                name: "asc",
            },
        });
        return { results: find, page, limit: take, pages: 0 };
    }
    async findOne(id) {
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
        if (!user)
            throw new common_1.NotFoundException("Usuário não existe");
        return user;
    }
    async update(id, updateUserDto) {
        const exists = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!exists)
            throw new common_1.BadRequestException("Usuário não existe");
        if (updateUserDto === null || updateUserDto === void 0 ? void 0 : updateUserDto.password)
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, exists.salt);
        const user = await this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
        delete user.password;
        return user;
    }
    async delete(id) {
        const exists = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!exists)
            throw new common_1.BadRequestException("Usuário não existe");
        await this.prisma.user.delete({ where: { id } });
    }
    async findByEmail(email) {
        return await this.prisma.user.findUnique({
            where: { email },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map