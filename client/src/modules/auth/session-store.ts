import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import {AuthResponse, User} from '../../types';
import { bindObject } from '../../utils/zustand-utils';

export const useSessionStore = create(
    immer(
        combine(
            {
                currentUser: null as User | null,
            },
            (set, get) =>
                bindObject({
                    setSession(data: AuthResponse) {
                        localStorage.setItem('token', data.accessToken)
                        set({
                            currentUser: data.user,
                        });
                    },

                    removeSession() {
                        localStorage.removeItem('token')
                        set({
                            currentUser: null,
                        });
                    },

                }),
        ),
    ),
);