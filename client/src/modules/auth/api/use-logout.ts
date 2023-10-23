import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { api } from "../../../requests-api/requests-api";

import { useSessionStore } from "../session-store";
import { BaseAxiosError, AuthResponse } from "../../../types";

export const useLogout = () => {
  const navigate = useNavigate();
  const { removeSession } = useSessionStore();

  return useMutation<AuthResponse, BaseAxiosError>({
    mutationFn: async () => {
      const response = await api.user.logout();
      return response.data;
    },
    onSuccess: () => {
      removeSession();
      navigate("/login");
    },
    onError: (error) => {
      console.log(error.response?.data?.name);
    },
  });
};
