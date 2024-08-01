import { confirmAccount, getUserProfile } from '../Services/UserService';
import { User } from '../Types/Api';

export const fetchUsers = async (): Promise<User> => {
    try {
        const userProfile = await getUserProfile();
        return userProfile;
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
        throw error;
    }
};

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