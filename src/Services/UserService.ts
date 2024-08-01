import clientAxios from '../Config/Axios';
import {  ConfirmAccountResponse, CreateUserDto, UserDto, RequestPasswordResetResponse, ResetPasswordResponse } from '../Types/Api';


export const confirmAccount = async (code: string): Promise<string> => {
    try {
        const response = await clientAxios.post<ConfirmAccountResponse>('/Users/confirm-account', { code });
        return response.data.message;
    } catch (error: unknown) {
        const axiosError = error as { response?: { data: { message: string } } };

        if (axiosError.response) {
            throw new Error(axiosError.response.data.message || 'Error al confirmar la cuenta');
        }

        throw new Error('Error de red al confirmar la cuenta');
    }
};
export const createUser = async (userData: CreateUserDto): Promise<UserDto> => {
    try {
        const response = await clientAxios.post<UserDto>('/Users', userData);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Error al crear el usuario');
        }
        throw new Error('Error de red al crear el usuario');
    }
};

export const requestPasswordReset = async (email: string): Promise<string> => {
    try {
        const response = await clientAxios.post<RequestPasswordResetResponse>('/Users/request-password-reset', { email });
        return response.data.message;
    } catch (error: unknown) {
        const axiosError = error as { response?: { data: { message: string } } };

        if (axiosError.response) {
            throw new Error(axiosError.response.data.message || 'Error al solicitar el cambio de contraseña');
        }

        throw new Error('Error de red al solicitar el cambio de contraseña');
    }
};

export const resetPassword = async (token: string, newPassword: string): Promise<string> => {
    try {
        const response = await clientAxios.post<ResetPasswordResponse>('/Users/reset-password', {
            token,
            newPassword
        });
        return response.data.message;
    } catch (error: any) {
        console.error('Error al restablecer la contraseña:', error);
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Error al restablecer la contraseña');
        }
        throw new Error('Error de red al restablecer la contraseña');
    }
};