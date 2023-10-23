import {AxiosError} from "axios";

export interface User {
    id: string;
    email: string;
    isActivated: boolean;
}
export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User
}

export interface BaseApiError {
    name: string;
    message: string;
    [key: string]: unknown;
}

export type BaseAxiosError = AxiosError<BaseApiError>;


