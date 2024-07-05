import { RegisterUserInterface } from "./register-ui";
import { useRegisterUser } from "./use-register-user";

export const RegisterPage = () => {
  const register = useRegisterUser();
  return <RegisterUserInterface {...register} />;
};
