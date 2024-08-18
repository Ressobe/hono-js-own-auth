import { Layout } from "../components/layout";
import { RegisterForm } from "../components/register-form";
import { RegisterErrors } from "../types";

type RegisterPageProps = {
  errors?: RegisterErrors;
};

export function RegisterPage({ errors }: RegisterPageProps) {
  return (
    <Layout>
      <RegisterForm errors={errors} />
    </Layout>
  );
}
