import {
  a,
  button,
  fieldsetClass,
  formClass,
  formSection,
  h1,
  h2,
  input,
  labelClass,
} from "../styles/index";

export function RegisterForm() {
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
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Email: </label>
          <input
            class={input}
            type="email"
            name="email"
            placeholder="you@email.com"
          />
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Password: </label>
          <input
            class={input}
            type="password"
            name="password"
            placeholder="********"
          />
        </fieldset>

        <fieldset class={fieldsetClass}>
          <label class={labelClass}>Confirm password: </label>
          <input
            class={input}
            type="password"
            name="confirm-password"
            placeholder="********"
          />
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
