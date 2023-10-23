import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { api } from "../../../requests-api/requests-api";

import { useSessionStore } from "../session-store";
import { BaseAxiosError, AuthResponse } from "../../../types";

type UseSignIn = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setSession } = useSessionStore();

  return useMutation<AuthResponse, BaseAxiosError, UseSignIn>({
    mutationFn: async ({ email, password }) => {
      const response = await api.user.login(email, password);
      return response.data;
    },
    onSuccess: (data) => {
      setSession(data);
      navigate("/home");
    },
    onError: (error) => {
      console.log('login error', error);
    },
  });
};
