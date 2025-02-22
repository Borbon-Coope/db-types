[ride-dbtypes](../README.md) / [Exports](../modules.md) / OrderItem

# Interface: OrderItem

Representa un item dentro de una orden.  La informacion se copia de la
coleccion de productos.  Si el producto es borrado, este item persiste
como informacion historica de las ordenes de un usuario.

## Table of contents

### Properties

- [cost](OrderItem.md#cost)
- [name](OrderItem.md#name)
- [notes](OrderItem.md#notes)
- [productId](OrderItem.md#productid)

## Properties

### cost

• **cost**: `number`

costo del producto

#### Defined in

[src/order/order.ts:67](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L67)

___

### name

• **name**: `string`

nombre del producto

#### Defined in

[src/order/order.ts:65](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L65)

___

### notes

• **notes**: `string`

notas para el producto dentro de la orden

#### Defined in

[src/order/order.ts:69](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L69)

___

### productId

• **productId**: `string`

Id del producto (de la coleccion de productos - puede ser de un producto borrado)

#### Defined in

[src/order/order.ts:63](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/order/order.ts#L63)
