import { useMemo } from 'react';
import { z } from 'zod';

export type AuthFormValues = z.infer<ReturnType<typeof useAuthValidation>>;
export const authDefaultValues: AuthFormValues = {
    email: '',
    password: '',
};

export const useAuthValidation = () => {
    return useMemo(
        () =>
            z.object({
                email: z.string(),
                password: z.string(),
            }),
        [],
    );
};