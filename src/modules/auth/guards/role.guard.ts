import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRole = this.reflector.get<string>(
      "role",
      context.getHandler()
    );

    if (!requiredRole) return true;

    const request = context.switchToHttp().getRequest();
    const userRole = request.user.role;

    return userRole === requiredRole;
  }
}
