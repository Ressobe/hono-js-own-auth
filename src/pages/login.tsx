import { Layout } from "../components/layout";
import { LoginForm } from "../components/login-form";
import { LoginErrors } from "../types";

type LoginPageProps = {
  errors?: LoginErrors;
};

export function LoginPage({ errors }: LoginPageProps) {
  return (
    <Layout>
      <LoginForm errors={errors} />
    </Layout>
  );
}
