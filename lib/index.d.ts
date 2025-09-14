export { AdminRole, AdminUser } from './src/admin/admin';
export { Biker, BikerStatus } from './src/biker/biker';
export { Business, BusinessContact, BusinessContactType } from './src/business/business';
export { Customer } from './src/customer/customer';
export { Order, OrderItem, Route, Location, OrderStatus, PaymentMethod, statusInSpanish, paymentMethodInSpanish } from './src/order/order';
export { Rating } from './src/rating/rating';
export { AverageRating } from './src/rating/averageRating';
export { DeliveryAvailable } from './src/other/deliveryAvailable';
export { Product } from './src/product/product';
export { Tag } from './src/product/tag';
export { ConfigItem, SinpeData } from './src/admin/configItem';
export { UserStatus, Coords, UserType } from './src/other/shared';
export { Message } from "./src/order/chat";
/**
 * Colecciones de Firestore
 */
export declare enum FirestoreCollections {
    /** Coleccion de {@link AdminUser} */
    adminUsers = "adminUsers",
    /** Coleccion de {@link Biker} */
    bikers = "bikers",
    /** Coleccion de {@link Business} */
    businesses = "businesses",
    /** Coleccion de {@link Customer} */
    customers = "customers",
    /** Coleccion de {@link Order} */
    orders = "orders",
    /** Coleccion de {@link Rating} */
    ratings = "ratings",
    /** Coleccion de {@link Message} */
    chat = "chat",
    /** Coleccion de {@link AverageRating} */
    averageRating = "averageRating",
    /** Coleccion de {@link DeliveryAvailable} */
    deliveriesAvailable = "deliveriesAvailable",
    /** Coleccion de {@link Product} */
    products = "products",
    /** Coleccion de {@link Tag} */
    tags = "tags",
    /** Coleccion de {@link ConfigItem} */
    configItems = "configItems"
}
