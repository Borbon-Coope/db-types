import {Tag} from './tag';

/**
 * Representa un producto suministrado por un negocio.
 * Por el momento NO tiene variantes (como talla o color).
 * Si se necesitaran variantes, es necesario crear varios productos
 * Por ejemplo: camiseta blanca, camiseta azul, camiseta verde, etc
 */
export interface Product {
  /** Nombre del producto */
  name: string;

  /** Descripcion del producto */
  description: string;

  /** Costo unitario del producto */
  cost: number;

  /** Firebase User Id del negocio (de firebase auth) */
  businessId: string;

  /** Lista de Etiquetas a las que pertenece el producto - ver {@link Tag} */
  tags: Tag[];

  /** URL de la foto de producto (almacenada en Firebase Storage) */
  productPhoto: string;

  /** fecha y hora de creacion */
  created: number;

  /** fecha y hora de ultima actualizacion */
  lastUpdate: number;

  /** Indica si el producto fue borrado o no */
  deleted?: boolean;

  /** Indica la cantidad de productos dispobibles */
  amountAvailable: number;
}
