import { useCallback } from "react";
import { Button } from "../../components/Button";
import { useLogout } from "../auth/api/use-logout";
import { useSessionStore } from "../auth/session-store";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { mutate: userLogout } = useLogout();

  const handleLogout = useCallback(() => {
    userLogout();
  }, []);

  return (
    <div>
      <Button buttonType="button" name="Logout" onClick={handleLogout} />
      <Link to={"/user"} >Go to user page</Link>
    </div>
  );
};
