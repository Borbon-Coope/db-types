[ride-dbtypes](../README.md) / [Exports](../modules.md) / Order

# Interface: Order

Representa una orden dentro del sistema

## Table of contents

### Properties

- [bikerId](Order.md#bikerid)
- [businessId](Order.md#businessid)
- [chat](Order.md#chat)
- [confirmationCode](Order.md#confirmationcode)
- [created](Order.md#created)
- [customerFirstName](Order.md#customerfirstname)
- [customerId](Order.md#customerid)
- [customerLastName](Order.md#customerlastname)
- [deliveryLocation](Order.md#deliverylocation)
- [destinationAddress](Order.md#destinationaddress)
- [distance](Order.md#distance)
- [items](Order.md#items)
- [itemsCost](Order.md#itemscost)
- [lastUpdate](Order.md#lastupdate)
- [methodOfPayment](Order.md#methodofpayment)
- [originAddress](Order.md#originaddress)
- [ratings](Order.md#ratings)
- [reportByBiker](Order.md#reportbybiker)
- [serviceCost](Order.md#servicecost)
- [status](Order.md#status)
- [tip](Order.md#tip)
- [totalCost](Order.md#totalcost)

## Properties

### bikerId

• **bikerId**: `string`

Firebase User Id del biker (de firebase auth)

#### Defined in

[src/order/order.ts:86](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L86)

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

[src/order/order.ts:83](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L83)

___

### chat

• `Optional` **chat**: [`Message`](Message.md)[]

Chat para comunicacion entre el usuario y el biker

#### Defined in

[src/order/order.ts:77](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L77)

___

### confirmationCode

• **confirmationCode**: `string`

Código de confirmación de transferencia SINPE

#### Defined in

[src/order/order.ts:140](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L140)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/order/order.ts:122](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L122)

___

### customerFirstName

• **customerFirstName**: `string`

nombre completo del cliente

#### Defined in

[src/order/order.ts:131](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L131)

___

### customerId

• **customerId**: `string`

Firebase User Id del usuario (de firebase auth)

#### Defined in

[src/order/order.ts:80](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L80)

___

### customerLastName

• **customerLastName**: `string`

apellidos del cliente

#### Defined in

[src/order/order.ts:134](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L134)

___

### deliveryLocation

• **deliveryLocation**: `Coords`

coordenadas de le entrega (se sacan de la ubicacion actual del Customer)

#### Defined in

[src/order/order.ts:125](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L125)

___

### destinationAddress

• **destinationAddress**: `string`

Direccion de entrega de la orden

#### Defined in

[src/order/order.ts:110](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L110)

___

### distance

• **distance**: `number`

Distancia entre la direccion de origen y destino

#### Defined in

[src/order/order.ts:116](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L116)

___

### items

• **items**: [`OrderItem`](OrderItem.md)[]

lista de items en la orden - ver [OrderItem](OrderItem.md)

#### Defined in

[src/order/order.ts:95](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L95)

___

### itemsCost

• **itemsCost**: `number`

Costo de los items de la orden (sin envio)

#### Defined in

[src/order/order.ts:101](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L101)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/order/order.ts:128](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L128)

___

### methodOfPayment

• **methodOfPayment**: [`PaymentMethod`](../modules.md#paymentmethod)

Metodo de pago de la orden - ver [PaymentMethod](../modules.md#paymentmethod)

#### Defined in

[src/order/order.ts:92](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L92)

___

### originAddress

• **originAddress**: `string`

Direccion de origen de la orden

#### Defined in

[src/order/order.ts:113](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L113)

___

### ratings

• **ratings**: `Rating`[]

Calificanes de las órdenes

#### Defined in

[src/order/order.ts:119](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L119)

___

### reportByBiker

• **reportByBiker**: `string`

Reporte del ciclista

#### Defined in

[src/order/order.ts:137](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L137)

___

### serviceCost

• **serviceCost**: `number`

Costo del envio

#### Defined in

[src/order/order.ts:104](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L104)

___

### status

• **status**: [`OrderStatus`](../modules.md#orderstatus)

Status de la orden - ver [OrderStatus](../modules.md#orderstatus)

#### Defined in

[src/order/order.ts:89](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L89)

___

### tip

• **tip**: `number`

Propina para el ciclista

#### Defined in

[src/order/order.ts:107](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L107)

___

### totalCost

• **totalCost**: `number`

Costo total de la orden

#### Defined in

[src/order/order.ts:98](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L98)
