import { Navigate, Route, Routes } from "react-router-dom";
import { GuardedRoute } from "./guarded-route";
import { SignIn } from "../modules/auth/sign-in";
import { SignUp } from "../modules/auth/sign-up";
import { HomePage } from "../modules/home/home-page";
import { User } from "../modules/user/user";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <GuardedRoute>
            <HomePage />
          </GuardedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <GuardedRoute isAuthenticated>
            <SignIn />
          </GuardedRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <GuardedRoute>
            <SignUp />
          </GuardedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <GuardedRoute>
            <User />
          </GuardedRoute>
        }
      />
    </Routes>
  );
};
