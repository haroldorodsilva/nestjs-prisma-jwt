import { UseSchema } from "src/common/decorators/useSchema.decorator";
import yup from "src/common/yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

@UseSchema(schema)
export class SingInAuthDto {
  email: string;
  password: string;
}
