import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from "@nestjs/common";

import { ValidationError } from "yup";

const serializeValidationError = (err: ValidationError) => {
  const validationErrors: { [key: string]: string } = {};

  err.inner.forEach((error) => {
    if (error.path) validationErrors[error.path] = error.message;
  });

  return {
    statusCode: 400,
    error: "Erro na validação dos dados",
    validation: validationErrors,
  };
};

@Injectable()
export class YupValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const { schema } = metatype?.prototype;

    if (!schema) return value;

    try {
      await schema.validate(value, { abortEarly: false });
    } catch (err) {
      throw new BadRequestException(serializeValidationError(err));
    }
    return value;
  }
}
