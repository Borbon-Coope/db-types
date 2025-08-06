import { UserStatus } from '../other/shared';
/**
 * Tipo de usuario adminsitrador
 */
export type AdminRole = 'Full' | 'Other';
/**
 * Representa un usuario administrador del sistema
 */
export interface AdminUser {
    /** id de firebase auth */
    firebaseUserId: string;
    /** nombre */
    firstName: string;
    /** apellidos */
    lastName: string;
    /** correo electronico */
    email: string;
    /** URL de la foto de perfil (almacenada en Firebase Storage) */
    profilePhoto: string;
    /** rol del admin - ver {@link AdminRole}*/
    adminRole: AdminRole;
    /** fecha y hora de creacion */
    created: number;
    /** fecha y hora de ultima actualizacion */
    lastUpdate: number;
    /** estado de la cuenta de usario administrado (si fue o no aprobado por un usuario admin ya registrado) - ver {@link UserStatus} */
    userStatus: UserStatus;
    /** token para los mensajes de la nube */
    fcmToken: string;
}
