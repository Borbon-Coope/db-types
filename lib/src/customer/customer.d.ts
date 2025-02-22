import { Coords } from '../other/shared';
/**
 * Representa un usuario cliente de RIDE
 */
export interface Customer {
    /** nombre completo del usuario */
    firstName: string;
    /** apellidos del usuario */
    lastName: string;
    /** correo electronico del usuario */
    email: string;
    /** id de firebase auth */
    firebaseUserId: string;
    /** token para los mensajes de la nube */
    fcmToken: string;
    /** numero de celular del usuario */
    cellPhone: string;
    /** URL de la foto de perfil (almacenada en Firebase Storage) */
    profilePhoto: string;
    /** ubicacion actual del negocio, utilizado para calcular rutas de los envios */
    currentLocation: Coords;
    /** fecha y hora de creacion */
    created: number;
    /** fecha y hora de ultima actualizacion */
    lastUpdate: number;
}
