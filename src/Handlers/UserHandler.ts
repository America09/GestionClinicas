import { getUserProfile } from '../Services/UserService';
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