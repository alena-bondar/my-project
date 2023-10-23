import { request } from "./request";
import {
  User,
  AuthResponse,
} from "../types";

export const api = {
  me: {
    get: () => request.get<User>("/me"),
  },
  user: {
    registration: (email: string, password: string) =>
      request.post<AuthResponse>("/registration", { email, password }),
    login: (email: string, password: string) =>
      request.post<AuthResponse>("/login", { email, password }),
    logout: () => request.post("/logout"),
  },
  users: {
    getAll: () => request.get("/users"),
  },
};
