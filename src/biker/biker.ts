import {UserStatus} from '../other/shared';

/** Si el usuario ciclista esta disponible o no para hacer entregas */
export type BikerStatus = 'Disconnected' | 'Available' | 'Delivering';

/**
 * Representa un usuario ciclista del sistema
 */
export interface Biker {
  /** id de firebase auth */
  firebaseUserId: string;

  /** nombre */
  firstName: string;

  /** apellidos */
  lastName: string;

  /** correo electronico */
  email: string;

  /** numero de celular */
  cellPhone: string;

  /** URL de la foto de perfil (almacenada en Firebase Storage) */
  profilePhoto: string;

  /** status del ciclista, relacionado con la capacidad de recibir ordenes - ver {@link BikerStatus} */
  status: BikerStatus;

  provincia: string;

  canton: string;

  distrito: string;

  /** fecha y hora de creacion */
  created: number;

  /** fecha y hora de ultima actualizacion */
  lastUpdate: number;

  /** estado de la cuenta de usario ciclista (si fue o no aprobado por un usuario admin) - ver {@link UserStatus} */
  userStatus: UserStatus;

  /** token para los mensajes de la nube */
  fcmToken: string;

  /** latitud de la posición actual del biker */
  latitude: number;
  
  /**longitud de la posición actual del biker */
  longitude: number;
}
