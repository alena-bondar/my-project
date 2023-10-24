import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { AuthResponse, User } from "../../types";
import { bindObject } from "../../utils/zustand-utils";

export const useSessionStore = create(
  immer(
    combine(
      {
        currentUser: null as User | null,
      },
      (set, get) => {
          return bindObject({
              setSession(data: AuthResponse) {
                  set({
                      currentUser: data.user,
                  });
                  localStorage.setItem("token", data.accessToken);

              },

              removeSession() {
                  set({
                      currentUser: null,
                  });
                  localStorage.removeItem("token");

              },
          })
      },
    ),
  ),
);
