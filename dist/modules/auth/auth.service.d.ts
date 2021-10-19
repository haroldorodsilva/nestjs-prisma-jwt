import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/modules/user/user.service";
import { SingInAuthDto } from "./dto/singin-auth.dto";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    authenticate(data: SingInAuthDto): Promise<{
        token: string;
    }>;
    validateUser(credentials: SingInAuthDto): Promise<any>;
}
