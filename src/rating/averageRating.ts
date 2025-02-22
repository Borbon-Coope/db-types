import {UserType} from '../other/shared';
/**
 * Promedio de ratings por usuario (puede ser un cliente, un negocio, un repartidor, etc.)
 * Calculado automáticamente por un Cloud Function
 */
export interface AverageRating {
  /** Firebase User Id del usuario calificado (de firebase auth). */
  ratedUserId: string;

  /** Tipo del usuario calificado (customer, business, biker, etc.). */
  ratedUserType: UserType;

  /** Suma total de todos los ratings asignados a este usuario */
  sumOfRatings: number;

  /** Cantidad de ratings asignados a este usuario */
  numberOfRatings: number;

  /** Puntaje promedio => sumOfRatings / numberOfRatings */
  average: number;
}
