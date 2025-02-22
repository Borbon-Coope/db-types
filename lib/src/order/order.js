"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodInSpanish = exports.statusInSpanish = void 0;
/** Status de la Orden en español */
exports.statusInSpanish = new Map([
    ['Pending', 'Pendiente'],
    ['AcceptedByClient', 'Aceptado por el cliente'],
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
/** Métodos de pago en español */
exports.paymentMethodInSpanish = new Map([
    ['SINPE', 'SINPE'],
    ['Cash', 'Efectivo']
]);
//# sourceMappingURL=order.js.map