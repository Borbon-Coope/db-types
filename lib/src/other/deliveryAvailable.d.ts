/**
 * Representa ordenes que estan disponibles para ser tomadas por
 * usuarios ciclistas.  Posiblemente sea generada por un Cloud Function
 * que se dispara cuando se crean ordenes
 */
export interface DeliveryAvailable {
    /** Id de la orden */
    orderId: string;
    /**Lista de IDs de los ciclistas a los que se les asigna la entrega como disponible */
    bikersId: string[];
}
