import { getPermissions } from "../Services/PermisosServices";
import { Permission } from "../Types/Roles";

export const fetchPermissions = async (): Promise<Permission[]> => {
    try {
        const permissions = await getPermissions();
        return permissions;
    } catch (error) {
        console.error('Error al obtener los permisos:', error);
        throw error;
    }
};