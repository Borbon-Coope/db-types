import { UserType } from '../other/shared';
/**
 * Rating proporcionado por un usuario para un negocio u otro usuario.
 */
export interface Rating {
    /** Firebase User Id del usuario que proporcionó el rating */
    raterUserId: string;
    /** Tipo del usuario que proporcionó el rating */
    raterUserType: UserType;
    /** Valor numérico del rating (puede ser una puntuación, estrella, etc.) */
    ratingValue: number;
    /** Comentario recibido */
    feedback: string;
    /** Firebase User Id del usuario calificado (de firebase auth). */
    ratedUserId: string;
    /** Tipo del usuario calificado (customer, business, biker, etc.). */
    ratedUserType: UserType;
}
