[ride-dbtypes](README.md) / Exports

# ride-dbtypes

## Table of contents

### Enumerations

- [FirestoreCollections](enums/FirestoreCollections.md)

### Interfaces

- [AdminUser](interfaces/AdminUser.md)
- [AverageRating](interfaces/AverageRating.md)
- [Biker](interfaces/Biker.md)
- [Business](interfaces/Business.md)
- [BusinessContact](interfaces/BusinessContact.md)
- [ConfigItem](interfaces/ConfigItem.md)
- [Coords](interfaces/Coords.md)
- [Customer](interfaces/Customer.md)
- [DeliveryAvailable](interfaces/DeliveryAvailable.md)
- [Message](interfaces/Message.md)
- [Order](interfaces/Order.md)
- [OrderItem](interfaces/OrderItem.md)
- [Product](interfaces/Product.md)
- [Rating](interfaces/Rating.md)
- [SinpeData](interfaces/SinpeData.md)
- [Tag](interfaces/Tag.md)

### Type aliases

- [AdminRole](modules.md#adminrole)
- [BikerStatus](modules.md#bikerstatus)
- [BusinessContactType](modules.md#businesscontacttype)
- [OrderStatus](modules.md#orderstatus)
- [PaymentMethod](modules.md#paymentmethod)
- [UserStatus](modules.md#userstatus)
- [UserType](modules.md#usertype)

### Variables

- [paymentMethodInSpanish](modules.md#paymentmethodinspanish)
- [statusInSpanish](modules.md#statusinspanish)

## Type aliases

### AdminRole

Ƭ **AdminRole**: ``"Full"`` \| ``"Other"``

Tipo de usuario adminsitrador

#### Defined in

[src/admin/admin.ts:6](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L6)

___

### BikerStatus

Ƭ **BikerStatus**: ``"Disconnected"`` \| ``"Available"`` \| ``"Delivering"``

Si el usuario ciclista esta disponible o no para hacer entregas

#### Defined in

[src/biker/biker.ts:4](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L4)

___

### BusinessContactType

Ƭ **BusinessContactType**: ``"Facebook"`` \| ``"Instagram"`` \| ``"Website"`` \| ``"Other Phone"`` \| ``"Fax"``

tipo del contacto adicional, como redes sociales o sitio web

#### Defined in

[src/business/business.ts:5](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L5)

___

### OrderStatus

Ƭ **OrderStatus**: ``"Pending"`` \| ``"AcceptedByClient"`` \| ``"Processing"`` \| ``"AssignedToBiker"`` \| ``"InTransit"`` \| ``"Arriving"`` \| ``"Finished"`` \| ``"RatedByClient"`` \| ``"Rejected"`` \| ``"AcceptedByBiker"`` \| ``"Canceled"``

Status de la Orden
Pending: orden creada por el usuario final, a la espera de que RIDE asigne un costo de envío Y confirmar que el negocio puede hacerse cargo del pedido
AcceptedByClient: cliente acepta las condiciones y costo del envío, el negocio todavía necesita aprobar que puede encargarse de la orden.
Processing: el usuario final aceptó el precio de envío Y el negocio se encuentra preparando el pedido.  Todavía no se le ha entregado el pedido al ciclista.
AssignedToBiker: orden asignada a ciclista, pero todavía no la ha retirado del negocio
InTransit: el ciclista retiró el pedido y se dispone a ir a dejarlo
Arriving: el ciclista está a menos de 500mts del destino (opcional, nice to have)
Finished: pedido entregado satisfactoriamente al cliente (este evento lo dispara el ciclista)
RatedByClient: pedido tiene un review del usuario (este evento lo dispara el cliente)
Rejected: Pedido rechazado
AcceptedByBiker: Pedido asignado fue aceptado por el ciclista
Canceled: el pedido es cancelado por el administrador

#### Defined in

[src/order/order.ts:19](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L19)

___

### PaymentMethod

Ƭ **PaymentMethod**: ``"SINPE"`` \| ``"Cash"``

Metodos de pago

#### Defined in

[src/order/order.ts:48](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L48)

___

### UserStatus

Ƭ **UserStatus**: ``"Pending"`` \| ``"Accepted"`` \| ``"Rejected"``

Status de la cuenta de usuario.  Aplica para
Bikers, Admin y Business

#### Defined in

[src/other/shared.ts:5](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/other/shared.ts#L5)

___

### UserType

Ƭ **UserType**: ``"biker"`` \| ``"customer"`` \| ``"business"``

#### Defined in

[src/other/shared.ts:15](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/other/shared.ts#L15)

## Variables

### paymentMethodInSpanish

• `Const` **paymentMethodInSpanish**: `Map`<`string`, `string`\>

Métodos de pago en español

#### Defined in

[src/order/order.ts:51](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L51)

___

### statusInSpanish

• `Const` **statusInSpanish**: `Map`<`string`, `string`\>

Status de la Orden en español

#### Defined in

[src/order/order.ts:33](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L33)
