[ride-dbtypes](../README.md) / [Exports](../modules.md) / AverageRating

# Interface: AverageRating

Promedio de ratings por usuario (puede ser un cliente, un negocio, un repartidor, etc.)
Calculado automáticamente por un Cloud Function

## Table of contents

### Properties

- [average](AverageRating.md#average)
- [numberOfRatings](AverageRating.md#numberofratings)
- [ratedUserId](AverageRating.md#rateduserid)
- [ratedUserType](AverageRating.md#ratedusertype)
- [sumOfRatings](AverageRating.md#sumofratings)

## Properties

### average

• **average**: `number`

Puntaje promedio => sumOfRatings / numberOfRatings

#### Defined in

[src/rating/averageRating.ts:20](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/averageRating.ts#L20)

___

### numberOfRatings

• **numberOfRatings**: `number`

Cantidad de ratings asignados a este usuario

#### Defined in

[src/rating/averageRating.ts:17](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/averageRating.ts#L17)

___

### ratedUserId

• **ratedUserId**: `string`

Firebase User Id del usuario calificado (de firebase auth).

#### Defined in

[src/rating/averageRating.ts:8](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/averageRating.ts#L8)

___

### ratedUserType

• **ratedUserType**: [`UserType`](../modules.md#usertype)

Tipo del usuario calificado (customer, business, biker, etc.).

#### Defined in

[src/rating/averageRating.ts:11](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/averageRating.ts#L11)

___

### sumOfRatings

• **sumOfRatings**: `number`

Suma total de todos los ratings asignados a este usuario

#### Defined in

[src/rating/averageRating.ts:14](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/averageRating.ts#L14)
