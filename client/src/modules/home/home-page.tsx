import { useCallback } from "react";
import { Button } from "../../components/Button";
import {useLogout} from "../auth/api/use-logout";

export const HomePage = () => {
  const { mutate: userLogout } = useLogout();

  const handleLogout = useCallback(() => {
    userLogout();
  }, []);

  return (
    <div>
      <Button buttonType="button" name="Logout" onClick={handleLogout} />
    </div>
  );
};
