import { FC, ReactNode } from "react";
import { useSessionStore } from "../modules/auth/session-store";
import { Navigate } from "react-router-dom";

type GuardedRouteProps = {
  isAuthenticated?: boolean;
  children: ReactNode;
};

export const GuardedRoute: FC<GuardedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  const { currentUser } = useSessionStore();

  console.log('isAuthenticated', isAuthenticated)

  if (!isAuthenticated) {
    if (!currentUser?.id) return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && currentUser?.id)
    return <Navigate to="/home" replace />;

  return <>{children}</>;
};
