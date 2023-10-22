import { Navigate, Route, Routes } from "react-router-dom";
import { GuardedRoute } from "./guarded-route";
import { Login } from "../modules/auth/login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route
        path="/login"
        element={
          <GuardedRoute isAuthenticated>
            <Login />
          </GuardedRoute>
        }
      />
    </Routes>
  );
};
