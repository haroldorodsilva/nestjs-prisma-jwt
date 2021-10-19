import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { UserRole } from ".prisma/client";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: string; role: UserRole }) {
    const { id, role } = payload;
    // console.log("chamou aqui ", id, role);
    const user = await this.userService.findOne(id);
    if (!user || !user.active) {
      throw new UnauthorizedException("Usuário não encontrado");
    }

    return user;
  }
}
