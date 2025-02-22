import { Coords, UserStatus } from '../other/shared';
import { Tag } from '../product/tag';
/** tipo del contacto adicional, como redes sociales o sitio web */
export declare type BusinessContactType = 'Facebook' | 'Instagram' | 'Website' | 'Other Phone' | 'Fax';
/** Contacto de un negocio (e.g. Facebook, Instagram, etc) */
export interface BusinessContact {
    /** tipo del contacto - ver {@link BusinessContact} */
    contactType: BusinessContactType;
    /** url del contacto */
    contactUrl: string;
}
/**
 * Representa un usuario de un negocio del sistema
 */
export interface Business {
    /** id de firebase auth */
    firebaseUserId: string;
    /** URL de la foto de perfil (almacenada en Firebase Storage) */
    profilePhoto: string;
    /** nombre del negocio */
    name: string;
    /** numero de celular del negocio*/
    cellPhone: string;
    provincia: string;
    canton: string;
    distrito: string;
    /** otras señas de la direccion del negocio */
    otherDirections: string;
    /** ubicacion actual del negocio, utilizado para calcular rutas de los envios */
    currentLocation: Coords;
    /** estado de la cuenta de usario de un negocio (si fue o no aprobado por un usuario admin) - ver {@link UserStatus}*/
    userStatus: UserStatus;
    /** contactos extra fuera del correo y telefono - ver {@link BusinessContact}*/
    contacts: BusinessContact[];
    /** correo electronico del negocio */
    email: string;
    /** descripcion del negocio */
    description: string;
    /** Lista de tags a las que pertenece este negocio - ver {@link Tag}*/
    tagIds: Tag[];
    /** fecha y hora de creacion */
    created: number;
    /** fecha y hora de ultima actualizacion */
    lastUpdate: number;
    /** token para los mensajes de la nube */
    fcmToken: string;
}
