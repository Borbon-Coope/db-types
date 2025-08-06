/**
 * Status de la cuenta de usuario.  Aplica para
 * Bikers, Admin y Business
 */
export type UserStatus = 'Pending' | 'Accepted' | 'Rejected';
/**
 * Coordenadas
 */
export interface Coords {
    longitude: number;
    latitude: number;
}
export type UserType = 'biker' | 'customer' | 'business';
