import { confirmAccount, createUser, requestPasswordReset, resetPassword } from '../Services/UserService';
import { CreateUserDto, UserDto } from '../Types/Api';

export const handleConfirmAccount = async (code: string): Promise<string> => {
    try {
        const message = await confirmAccount(code);
        console.log('Cuenta confirmada exitosamente:', message);
        return message;
    } catch (error: any) {
        console.error('Error al confirmar la cuenta:', error.message);
        throw new Error(error.message || 'Error al confirmar la cuenta');
    }
};

export const handleCreateUser = async (userData: CreateUserDto): Promise<UserDto> => {
    try {
        const newUser = await createUser(userData);
        console.log('Usuario creado exitosamente:', newUser);
        return newUser;
    } catch (error: any) {
        console.error('Error al crear el usuario:', error.message);
        throw new Error(error.message || 'Error al crear el usuario');
    }
};

export const handleRequestPasswordReset = async (email: string): Promise<string> => {
    try {
        const message = await requestPasswordReset(email);
        console.log('Solicitud de restablecimiento de contraseña enviada exitosamente:', message);
        return message;
    } catch (error: any) {
        console.error('Error al solicitar el restablecimiento de contraseña:', error.message);
        throw new Error(error.message || 'Error al solicitar el restablecimiento de contraseña');
    }
};

export const handleResetPassword = async (token: string, newPassword: string): Promise<string> => {
    try {
        const message = await resetPassword(token, newPassword);
        console.log('Contraseña restablecida exitosamente:', message);
        return message;
    } catch (error: any) {
        console.error('Error al restablecer la contraseña:', error.message);
        throw new Error(error.message || 'Error al restablecer la contraseña');
    }
};