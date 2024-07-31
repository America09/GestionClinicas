// Handlers/RoleHandler.ts
/* import { getRoles } from "../Services/RolesServices";
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
 */

import { getRoles, deleteRoleById, updateRoleById, addNewRole } from "../Services/RolesServices";
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

export const deleteRole = async (id: number): Promise<void> => {
    try {
        await deleteRoleById(id);
    } catch (error) {
        console.error('Error al eliminar el rol:', error);
        throw error;
    }
};

export const updateRole = async (id: number, role: Role): Promise<void> => {
    try {
        await updateRoleById(id, role);
    } catch (error) {
        console.error('Error al actualizar el rol:', error);
        throw error;
    }
};

export const addRole = async (role: Partial<Role>): Promise<void> => {
    try {
        await addNewRole(role);
    } catch (error) {
        console.error('Error al agregar el rol:', error);
        throw error;
    }
};
