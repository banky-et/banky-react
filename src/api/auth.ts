import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../context";
import { extractResponse } from "./helpers";
import { RegisterUserFormData, RegisterUserResponse } from "./models";

export const useRegisterMutation = () => {
  const axios = useAxios();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterUserFormData) =>
      axios
        .post("/auth/register", data)
        .then(extractResponse<RegisterUserResponse>),
  });
};
