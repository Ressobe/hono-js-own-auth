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
} from "./style";

export function LoginForm() {
  return (
    <section class={formSection}>
      <h1 class={h1}>Sign in to your account</h1>
      <h2 class={h2}>Sign in and see what is new!</h2>

      <form class={formClass}>
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
