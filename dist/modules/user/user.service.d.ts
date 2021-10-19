import { PrismaService } from "src/modules/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SearchUserDto } from "./dto/search-user.dto";
import { ResponseUserDto } from "./dto/response-user.dto";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(filter?: SearchUserDto): Promise<{
        results: {
            id: string;
            name: string;
            email: string;
            active: boolean;
            role: import(".prisma/client").UserRole;
            createdAt: Date;
            updatedAt: Date;
        }[];
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<ResponseUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<void>;
    findByEmail(email: string): Promise<import(".prisma/client").User>;
}
