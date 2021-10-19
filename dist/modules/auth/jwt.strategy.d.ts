import { Strategy } from "passport-jwt";
import { UserService } from "../user/user.service";
import { UserRole } from ".prisma/client";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: {
        id: string;
        role: UserRole;
    }): Promise<import("../user/dto/response-user.dto").ResponseUserDto>;
}
export {};
