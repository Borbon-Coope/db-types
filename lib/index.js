"use strict";
// ! Recuerden hacer export de cada interface
// ! que necesiten exponer para ser consumida
// ! por las aplicaciones de Ionic y Angular
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreCollections = exports.paymentMethodInSpanish = exports.statusInSpanish = void 0;
var order_1 = require("./src/order/order");
Object.defineProperty(exports, "statusInSpanish", { enumerable: true, get: function () { return order_1.statusInSpanish; } });
Object.defineProperty(exports, "paymentMethodInSpanish", { enumerable: true, get: function () { return order_1.paymentMethodInSpanish; } });
/**
 * Colecciones de Firestore
 */
var FirestoreCollections;
(function (FirestoreCollections) {
    /** Coleccion de {@link AdminUser} */
    FirestoreCollections["adminUsers"] = "adminUsers";
    /** Coleccion de {@link Biker} */
    FirestoreCollections["bikers"] = "bikers";
    /** Coleccion de {@link Business} */
    FirestoreCollections["businesses"] = "businesses";
    /** Coleccion de {@link Customer} */
    FirestoreCollections["customers"] = "customers";
    /** Coleccion de {@link Order} */
    FirestoreCollections["orders"] = "orders";
    /** Coleccion de {@link Rating} */
    FirestoreCollections["ratings"] = "ratings";
    /** Coleccion de {@link Message} */
    FirestoreCollections["chat"] = "chat";
    /** Coleccion de {@link AverageRating} */
    FirestoreCollections["averageRating"] = "averageRating";
    /** Coleccion de {@link DeliveryAvailable} */
    FirestoreCollections["deliveriesAvailable"] = "deliveriesAvailable";
    /** Coleccion de {@link Product} */
    FirestoreCollections["products"] = "products";
    /** Coleccion de {@link Tag} */
    FirestoreCollections["tags"] = "tags";
    /** Coleccion de {@link ConfigItem} */
    FirestoreCollections["configItems"] = "configItems";
})(FirestoreCollections || (exports.FirestoreCollections = FirestoreCollections = {}));
//# sourceMappingURL=index.js.map