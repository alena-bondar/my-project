import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../../components";
import { loginDefaultValues, useLoginValidation } from "./validation";
import {Button} from "../../components/Button";

export const Login = () => {
  const loginValidation = useLoginValidation();
  const { control, handleSubmit } = useForm({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(loginValidation),
  });

  const handleFormSubmit = handleSubmit((values) => {
    console.log("VALUES", values);
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
      <Button buttonType="submit" name="Submit"/>
    </form>
  );
};
