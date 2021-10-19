import yup from "src/common/yup";
import { UseSchema } from "src/common/decorators/useSchema.decorator";
import { UserRole } from ".prisma/client";

const schema = yup.object({
  password: yup.string().min(4).optional(),
  role: yup.mixed<UserRole>().oneOf(Object.values(UserRole)).optional(),
  active: yup.string().optional(),
});

@UseSchema(schema)
export class UpdateUserDto {
  name?: string;
  password?: string;
  active?: boolean;
  role?: UserRole;
}
