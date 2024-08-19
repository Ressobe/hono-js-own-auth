import { Layout } from "../components/layout";
import { LoginForm } from "../components/login-form";
import { LoginProps } from "../types";

export function LoginPage(props: LoginProps) {
  return (
    <Layout>
      <LoginForm {...props} />
    </Layout>
  );
}
