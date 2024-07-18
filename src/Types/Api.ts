// Types/Api.ts

export interface ApiResponse<T> {
    data?: T;
    message?: string;
    success?: boolean;
    token?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    role?: string;
    status: boolean;
}
