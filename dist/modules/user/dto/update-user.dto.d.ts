import { UserRole } from ".prisma/client";
export declare class UpdateUserDto {
    name?: string;
    password?: string;
    active?: boolean;
    role?: UserRole;
}
