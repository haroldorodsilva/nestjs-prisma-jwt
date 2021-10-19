import { UserRole } from ".prisma/client";

export class ResponseUserDto {
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
