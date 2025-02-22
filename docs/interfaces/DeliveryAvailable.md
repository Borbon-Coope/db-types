[ride-dbtypes](../README.md) / [Exports](../modules.md) / DeliveryAvailable

# Interface: DeliveryAvailable

Representa ordenes que estan disponibles para ser tomadas por
usuarios ciclistas.  Posiblemente sea generada por un Cloud Function
que se dispara cuando se crean ordenes

## Table of contents

### Properties

- [bikersId](DeliveryAvailable.md#bikersid)
- [orderId](DeliveryAvailable.md#orderid)

## Properties

### bikersId

• **bikersId**: `string`[]

Lista de IDs de los ciclistas a los que se les asigna la entrega como disponible

#### Defined in

[src/other/deliveryAvailable.ts:11](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/other/deliveryAvailable.ts#L11)

___

### orderId

• **orderId**: `string`

Id de la orden

#### Defined in

[src/other/deliveryAvailable.ts:8](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/other/deliveryAvailable.ts#L8)
