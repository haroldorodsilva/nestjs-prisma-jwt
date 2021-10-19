import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SearchUserDto } from "./dto/search-user.dto";
import { UserRole } from ".prisma/client";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(filtro: SearchUserDto): Promise<{
        results: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            active: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./dto/response-user.dto").ResponseUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<void>;
}
