import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { User } from '../../types';
import { bindObject } from '../../utils/zustand-utils';

export const useSessionStore = create(
    immer(
        combine(
            {
                currentUser: null as User | null,
            },
            (set, get) =>
                bindObject({
                    setSession(user: User) {
                        set({
                            currentUser: user,
                        });
                    },

                    removeSession() {
                        set({
                            currentUser: null,
                        });
                    },

                }),
        ),
    ),
);