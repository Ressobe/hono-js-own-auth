import { z, ZodFormattedError } from "zod";
import { LoginSchema, RegisterSchema } from "../schemas";

export type LoginErrors = ZodFormattedError<z.infer<typeof LoginSchema>>;

export type RegisterErrors = ZodFormattedError<z.infer<typeof RegisterSchema>>;

export type LoginValues = Partial<z.infer<typeof LoginSchema>>;

export type RegisterValues = Partial<z.infer<typeof RegisterSchema>>;

export type LoginProps = {
  zodErrors?: LoginErrors;
  values?: LoginValues;
  customError?: string;
};

export type RegisterProps = {
  zodErrors?: RegisterErrors;
  values?: RegisterValues;
  customError?: string;
  sucessMessage?: string;
};
