// Handlers/RoleHandler.ts
import { getRoles } from "../Services/RolesServices";
import { Role } from "../Types/Roles";

export const fetchRoles = async (): Promise<Role[]> => {
    try {
        const roles = await getRoles();
        return roles;
    } catch (error) {
        console.error('Error al obtener los roles:', error);
        throw error;
    }
};
