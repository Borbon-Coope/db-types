[ride-dbtypes](../README.md) / [Exports](../modules.md) / Business

# Interface: Business

Representa un usuario de un negocio del sistema

## Table of contents

### Properties

- [canton](Business.md#canton)
- [cellPhone](Business.md#cellphone)
- [contacts](Business.md#contacts)
- [created](Business.md#created)
- [currentLocation](Business.md#currentlocation)
- [description](Business.md#description)
- [distrito](Business.md#distrito)
- [email](Business.md#email)
- [fcmToken](Business.md#fcmtoken)
- [firebaseUserId](Business.md#firebaseuserid)
- [lastUpdate](Business.md#lastupdate)
- [name](Business.md#name)
- [otherDirections](Business.md#otherdirections)
- [profilePhoto](Business.md#profilephoto)
- [provincia](Business.md#provincia)
- [tagIds](Business.md#tagids)
- [userStatus](Business.md#userstatus)

## Properties

### canton

• **canton**: `string`

#### Defined in

[src/business/business.ts:34](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L34)

___

### cellPhone

• **cellPhone**: `string`

numero de celular del negocio

#### Defined in

[src/business/business.ts:30](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L30)

___

### contacts

• **contacts**: [`BusinessContact`](BusinessContact.md)[]

contactos extra fuera del correo y telefono - ver [BusinessContact](BusinessContact.md)

#### Defined in

[src/business/business.ts:48](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L48)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/business/business.ts:60](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L60)

___

### currentLocation

• **currentLocation**: [`Coords`](Coords.md)

ubicacion actual del negocio, utilizado para calcular rutas de los envios

#### Defined in

[src/business/business.ts:42](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L42)

___

### description

• **description**: `string`

descripcion del negocio

#### Defined in

[src/business/business.ts:54](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L54)

___

### distrito

• **distrito**: `string`

#### Defined in

[src/business/business.ts:36](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L36)

___

### email

• **email**: `string`

correo electronico del negocio

#### Defined in

[src/business/business.ts:51](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L51)

___

### fcmToken

• **fcmToken**: `string`

token para los mensajes de la nube

#### Defined in

[src/business/business.ts:66](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L66)

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

[src/business/business.ts:21](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L21)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/business/business.ts:63](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L63)

___

### name

• **name**: `string`

nombre del negocio

#### Defined in

[src/business/business.ts:27](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L27)

___

### otherDirections

• **otherDirections**: `string`

otras señas de la direccion del negocio

#### Defined in

[src/business/business.ts:39](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L39)

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

[src/business/business.ts:24](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L24)

___

### provincia

• **provincia**: `string`

#### Defined in

[src/business/business.ts:32](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L32)

___

### tagIds

• **tagIds**: [`Tag`](Tag.md)[]

Lista de tags a las que pertenece este negocio - ver [Tag](Tag.md)

#### Defined in

[src/business/business.ts:57](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L57)

___

### userStatus

• **userStatus**: [`UserStatus`](../modules.md#userstatus)

estado de la cuenta de usario de un negocio (si fue o no aprobado por un usuario admin) - ver [UserStatus](../modules.md#userstatus)

#### Defined in

[src/business/business.ts:45](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/business/business.ts#L45)
