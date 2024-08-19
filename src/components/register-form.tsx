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
import { RegisterProps } from "../types";

export function RegisterForm({ zodErrors, values }: RegisterProps) {
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
            value={values?.name ?? ""}
          />
          <span class={errorClass}>{zodErrors?.name?._errors.toString()}</span>
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Email: </label>
          <input
            class={input}
            type="email"
            name="email"
            placeholder="you@email.com"
            value={values?.email ?? ""}
          />
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

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Confirm password: </label>
          <input
            class={input}
            type="password"
            name="confirmPassword"
            placeholder="********"
          />
          <span class={errorClass}>
            {zodErrors?.confirmPassword?._errors.toString()}
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
