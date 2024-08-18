import {
  a,
  button,
  errorClass,
  fieldsetClass,
  formClass,
  formSection,
  h1,
  h2,
  input,
  labelClass,
} from "../styles";
import { RegisterErrors } from "../types";

type RegisterFormProps = {
  errors?: RegisterErrors;
};

export function RegisterForm({ errors }: RegisterFormProps) {
  return (
    <section class={formSection}>
      <h1 class={h1}>Create an account</h1>
      <h2 class={h2}>Sign up now and unlock exclusive access!</h2>

      <form method="post" class={formClass}>
        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Your name: </label>
          <input
            class={input}
            type="text"
            name="name"
            placeholder="First Last"
          />
          <span class={errorClass}>{errors?.name?._errors.toString()}</span>
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Email: </label>
          <input
            class={input}
            type="email"
            name="email"
            placeholder="you@email.com"
          />
          <span class={errorClass}>{errors?.email?._errors.toString()}</span>
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Password: </label>
          <input
            class={input}
            type="password"
            name="password"
            placeholder="********"
          />
          <span class={errorClass}>{errors?.password?._errors.toString()}</span>
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Confirm password: </label>
          <input
            class={input}
            type="password"
            name="confirm-password"
            placeholder="********"
          />
          <span class={errorClass}>
            {errors?.confirmPassword?._errors.toString()}
          </span>
        </fieldset>
        <button class={button} type="submit">
          Create Accoount
        </button>
        <a class={a} href="/login">
          Sign in
        </a>
      </form>
    </section>
  );
}
