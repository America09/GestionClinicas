import clientAxios from '../Config/Axios';
import { User, ConfirmAccountResponse, CreateUserDto, UserDto } from '../Types/Api';

export const getUserProfile = async (): Promise<User> => {
    const response = await clientAxios.get<User>('/api/User/profile');
    return response.data;
};


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