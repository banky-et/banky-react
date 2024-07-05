import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterUserFormData, useRegisterMutation } from "../../../api";

export const useRegisterUser = () => {
  const { register, handleSubmit } = useForm<RegisterUserFormData>();
  const {
    mutateAsync: registerMutation,
    isPending,
    error,
  } = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterUserFormData) => {
    try {
      await registerMutation(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fields: {
      phoneNumber: register("phoneNumber", {
        required: true,
        minLength: 10,
        maxLength: 10,
      }),
      pin: register("pin", {
        required: true,
        minLength: 4,
        maxLength: 4,
      }),
      name: register("name", {
        required: true,
        minLength: 3,
        maxLength: 50,
      }),
    },
    onSubmit: handleSubmit(onSubmit),
    isPending,
    error,
  };
};
