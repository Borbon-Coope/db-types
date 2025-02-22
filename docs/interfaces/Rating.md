[ride-dbtypes](../README.md) / [Exports](../modules.md) / Rating

# Interface: Rating

Rating proporcionado por un usuario para un negocio u otro usuario.

## Table of contents

### Properties

- [feedback](Rating.md#feedback)
- [ratedUserId](Rating.md#rateduserid)
- [ratedUserType](Rating.md#ratedusertype)
- [raterUserId](Rating.md#rateruserid)
- [raterUserType](Rating.md#raterusertype)
- [ratingValue](Rating.md#ratingvalue)

## Properties

### feedback

• **feedback**: `string`

Comentario recibido

#### Defined in

[src/rating/rating.ts:16](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/rating.ts#L16)

___

### ratedUserId

• **ratedUserId**: `string`

Firebase User Id del usuario calificado (de firebase auth).

#### Defined in

[src/rating/rating.ts:19](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/rating.ts#L19)

___

### ratedUserType

• **ratedUserType**: [`UserType`](../modules.md#usertype)

Tipo del usuario calificado (customer, business, biker, etc.).

#### Defined in

[src/rating/rating.ts:22](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/rating.ts#L22)

___

### raterUserId

• **raterUserId**: `string`

Firebase User Id del usuario que proporcionó el rating

#### Defined in

[src/rating/rating.ts:7](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/rating.ts#L7)

___

### raterUserType

• **raterUserType**: [`UserType`](../modules.md#usertype)

Tipo del usuario que proporcionó el rating

#### Defined in

[src/rating/rating.ts:10](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/rating.ts#L10)

___

### ratingValue

• **ratingValue**: `number`

Valor numérico del rating (puede ser una puntuación, estrella, etc.)

#### Defined in

[src/rating/rating.ts:13](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/rating/rating.ts#L13)
