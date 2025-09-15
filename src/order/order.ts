/**
 * Status de la Orden
 * Processing: el usuario final aceptó el precio de envío Y el negocio se encuentra preparando el pedido.  Todavía no se le ha entregado el pedido al ciclista.
 * AssignedToBiker: orden asignada a ciclista, pero todavía no la ha retirado del negocio
 * InTransit: el ciclista retiró el pedido y se dispone a ir a dejarlo
 * Arriving: el ciclista está a menos de 500mts del destino (opcional, nice to have)
 * Finished: pedido entregado satisfactoriamente al cliente (este evento lo dispara el ciclista)
 * RatedByClient: pedido tiene un review del usuario (este evento lo dispara el cliente)
 * Rejected: Pedido rechazado
 * AcceptedByBiker: Pedido asignado fue aceptado por el ciclista
 * Canceled: el pedido es cancelado por el administrador
 * */
export type OrderStatus =
  | 'Pending'
  | 'Processing'
  | 'AssignedToBiker'
  | 'InTransit'
  | 'Arriving'
  | 'Finished'
  | 'RatedByClient'
  | 'Rejected'
  | 'AcceptedByBiker'
  | 'Canceled';

/** Status de la Orden en español */
export const statusInSpanish = new Map([
  ['Pending', 'Pendiente'],
  ['Processing', 'Procesando'],
  ['AssignedToBiker', 'Asignado a un repartidor'],
  ['InTransit', 'En tránsito'],
  ['Arriving', 'Llegando'],
  ['Finished', 'Finalizado'],
  ['RatedByClient', 'Calificado por el cliente'],
  ['Rejected', 'Rechazado'],
  ['AcceptedByBiker', 'Aceptado por el repartidor'],
  ['Canceled', 'Cancelado']
]);

/** Metodos de pago */
export type PaymentMethod = 'SINPE' | 'Cash' | 'Card';

/** Métodos de pago en español */
export const paymentMethodInSpanish = new Map([
  ['SINPE', 'sinpe'],
  ['Cash', 'efectivo'],
  ['Card', 'tarjeta']
]);

export interface OrderItem {
  /** Firebase User Id del negocio (de firebase auth) */
  businessId: string;

  imageUrl: string;

  lineTotal: number;
  name: string;
  productId: number;
  qty: number;
  tramo: string;
  unitPrice: number;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Route {
  /** Firebase User Id del negocio (de firebase auth) */
  /** destino {@link Location} */
  destination: Location;
  /** origen {@link Location} */
  origin: Location;
  distanceKm: number;
}

/**
 * Representa una orden dentro del sistema
 */
export interface Order {
  addressDetail: string;

  /** Firebase User Id del biker (de firebase auth) */
  bikerId: string;

  bikerName: string;
  /** fecha y hora de creacion */
  created: number;

  /** Firebase User Id del usuario (de firebase auth) */
  customerId: string;

  customerName: string;

  /** lista de item - ver {@link OrderItem} */
  items: OrderItem[];

  itemsCost: number;

  /** Metodo de pago de la orden - ver {@link PaymentMethod} */
  methodOfPayment: PaymentMethod;

  paymentMethod: string;

  /** Route {@link Route} */
  route: Route;

  /** Status de la orden - ver {@link OrderStatus} */
  status: OrderStatus;

  total: number;

  serviceCost: number;

  shippingCost: number;
}
