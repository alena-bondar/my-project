import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { api } from "../../../requests-api/requests-api";

import { useSessionStore } from "../session-store";
import { BaseAxiosError, AuthResponse } from "../../../types";

type UseSignUp = {
  email: string;
  password: string;
};

export const useSignUp = () => {
  const navigate = useNavigate();
  const { setSession } = useSessionStore();

  return useMutation<AuthResponse, BaseAxiosError, UseSignUp>({
    mutationFn: async ({ email, password }) => {
      const response = await api.user.registration(email, password);
      return response.data;
    },
    onSuccess: (data) => {
      setSession(data);
      navigate("/home");
    },
    onError: (error) => {
      console.log(error.response?.data?.name);
    },
  });
};
