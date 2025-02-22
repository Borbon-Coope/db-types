/**
 * Representa una etiqueta (tag) de un producto o negocio
 * e.g. pizza, hamburguesa, ropa, libros, etc
 */
export interface Tag {
    /** nombre del tag (e.g. pizza) */
    name: string;
    /** descripcion corta del tag (e.g. comida circular con queso y tomate) */
    description: string;
}
