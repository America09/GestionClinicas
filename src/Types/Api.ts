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

export interface CreateUserRequest {
    username: string;
    email: string;
    password: string;
    roleId: number;
}


export interface ConfirmAccountResponse {
    message: string;
}

export interface AxiosErrorResponse {
    response?: {
        data: {
            message: string;
        };
    };
}
export interface CreateUserDto {
    username: string;
    email: string;
    password: string;
}

export interface UserDto {
    id: number;
    username: string;
    email: string;
    status: boolean;
    roleId: number;
    roleName: string;
}

export interface RequestPasswordResetResponse {
    message: string;
}
export interface ResetPasswordResponse {
    message: string;
}