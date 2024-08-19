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
import { LoginProps } from "../types";

export function LoginForm({ zodErrors, values, customError }: LoginProps) {
  return (
    <section class={formSection}>
      <h1 class={h1}>Sign in to your account</h1>
      <h2 class={h2}>Sign in and see what is new!</h2>

      <form method="post" class={formClass}>
        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Email: </label>
          <input
            class={input}
            type="email"
            name="email"
            placeholder="you@email.com"
            value={values?.email ?? ""}
          />
          <span class={errorClass}>{customError}</span>
          <span class={errorClass}>{zodErrors?.email?._errors.toString()}</span>
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Password: </label>
          <input
            class={input}
            type="password"
            name="password"
            placeholder="********"
          />
          <span class={errorClass}>
            {zodErrors?.password?._errors.toString()}
          </span>
        </fieldset>

        <button class={button} type="submit">
          Sign in
        </button>
        <a class={a} href="/register">
          Create Accoount
        </a>
      </form>
    </section>
  );
}
