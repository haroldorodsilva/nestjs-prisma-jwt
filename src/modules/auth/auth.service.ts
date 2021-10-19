import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";

import { UserService } from "src/modules/user/user.service";
import { SingInAuthDto } from "./dto/singin-auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async authenticate(data: SingInAuthDto) {
    const user = await this.validateUser(data);

    if (!user) throw new UnauthorizedException("Credenciais inválidas");

    const jwtPayload = {
      id: user.id,
      role: user.role,
    };
    const token = this.jwtService.sign(jwtPayload);

    return { token };
  }

  async validateUser(credentials: SingInAuthDto): Promise<any> {
    const user = await this.userService.findByEmail(credentials.email);

    const isValid = await bcrypt.compare(credentials.password, user.password);

    if (user && isValid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
