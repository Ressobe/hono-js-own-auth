import { z, ZodFormattedError } from "zod";
import { LoginSchema, RegisterSchema } from "../schemas";

export type LoginErrors = ZodFormattedError<z.infer<typeof LoginSchema>>;

export type RegisterErrors = ZodFormattedError<z.infer<typeof RegisterSchema>>;
