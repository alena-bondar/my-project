import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../../components";
import {
    authDefaultValues,
    useAuthValidation,
} from "./validation";
import { Button } from "../../components/Button";
import { useSignIn } from "./api/use-sign-in";

export const SignIn = () => {
  const authValidation = useAuthValidation();
  const { mutate: signInUser } = useSignIn();
  const { control, handleSubmit } = useForm({
    defaultValues: authDefaultValues,
    resolver: zodResolver(authValidation),
  });

  const handleFormSubmit = handleSubmit((values) => {
      signInUser({
      email: values.email,
      password: values.password,
    });
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Field
        control={control}
        name="email"
        type="email"
        placeholder="Email"
        title="Email"
      />
      <Field
        control={control}
        name="password"
        type="password"
        placeholder="Password"
        title="Password"
      />
      <Button buttonType="submit" name="Login" />
    </form>
  );
};
