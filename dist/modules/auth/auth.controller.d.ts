import { ResponseUserDto } from "../user/dto/response-user.dto";
import { AuthService } from "./auth.service";
import { SingInAuthDto } from "./dto/singin-auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(singIn: SingInAuthDto): Promise<{
        token: string;
    }>;
    getMe(user: ResponseUserDto): ResponseUserDto;
}
