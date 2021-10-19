import * as Yup from "yup";
import { yupFile } from "./yup.schema.file";

export const yupFiles = (required: boolean) => {
  return Yup.array().of(yupFile(required));
};
