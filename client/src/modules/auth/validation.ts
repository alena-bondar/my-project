import { useMemo } from 'react';
import { z } from 'zod';

export type LoginFormValues = z.infer<ReturnType<typeof useLoginValidation>>;
export const loginDefaultValues: LoginFormValues = {
    email: '',
    password: '',
};

export const useLoginValidation = () => {
    return useMemo(
        () =>
            z.object({
                email: z.string(),
                password: z.string(),
            }),
        [],
    );
};