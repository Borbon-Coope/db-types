/**
 * Status de la Orden
 * Pending: orden creada por el usuario final, a la espera de que asigne un costo de envío Y confirmar que los negocios puedan hacerse cargo del pedido
 * AcceptedByClient: cliente acepta las condiciones y costo del envío, el negocio todavía necesita aprobar que puede encargarse de la orden.
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
export type OrderStatus = 'Pending' | 'AcceptedByClient' | 'Processing' | 'AssignedToBiker' | 'InTransit' | 'Arriving' | 'Finished' | 'RatedByClient' | 'Rejected' | 'AcceptedByBiker' | 'Canceled';
/** Status de la Orden en español */
export declare const statusInSpanish: Map<string, string>;
/** Metodos de pago */
export type PaymentMethod = 'SINPE' | 'Cash' | 'Card';
/** Métodos de pago en español */
export declare const paymentMethodInSpanish: Map<string, string>;
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
    item: OrderItem[];
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
