import { OmitType } from "@nestjs/mapped-types";
import { User, UserRole } from "@prisma/client";
import { UseSchema } from "src/common/decorators/useSchema.decorator";
import yup from "src/common/yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
  role: yup.mixed<UserRole>().oneOf(Object.values(UserRole)).required(),
  active: yup.string().required(),
});

@UseSchema(schema)
export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  active: boolean;
  role: UserRole;
}
