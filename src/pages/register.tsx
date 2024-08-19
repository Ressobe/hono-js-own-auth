import { Layout } from "../components/layout";
import { RegisterForm } from "../components/register-form";
import { RegisterProps } from "../types";

export function RegisterPage(props: RegisterProps) {
  return (
    <Layout>
      <RegisterForm {...props} />
    </Layout>
  );
}
