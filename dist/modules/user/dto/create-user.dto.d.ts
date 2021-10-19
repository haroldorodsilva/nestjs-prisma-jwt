import { UserRole } from "@prisma/client";
export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    active: boolean;
    role: UserRole;
}
