[ride-dbtypes](../README.md) / [Exports](../modules.md) / Biker

# Interface: Biker

Representa un usuario ciclista del sistema

## Table of contents

### Properties

- [canton](Biker.md#canton)
- [cellPhone](Biker.md#cellphone)
- [created](Biker.md#created)
- [distrito](Biker.md#distrito)
- [email](Biker.md#email)
- [fcmToken](Biker.md#fcmtoken)
- [firebaseUserId](Biker.md#firebaseuserid)
- [firstName](Biker.md#firstname)
- [lastName](Biker.md#lastname)
- [lastUpdate](Biker.md#lastupdate)
- [latitude](Biker.md#latitude)
- [longitude](Biker.md#longitude)
- [profilePhoto](Biker.md#profilephoto)
- [provincia](Biker.md#provincia)
- [status](Biker.md#status)
- [userStatus](Biker.md#userstatus)

## Properties

### canton

• **canton**: `string`

#### Defined in

[src/biker/biker.ts:33](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L33)

___

### cellPhone

• **cellPhone**: `string`

numero de celular

#### Defined in

[src/biker/biker.ts:23](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L23)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/biker/biker.ts:38](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L38)

___

### distrito

• **distrito**: `string`

#### Defined in

[src/biker/biker.ts:35](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L35)

___

### email

• **email**: `string`

correo electronico

#### Defined in

[src/biker/biker.ts:20](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L20)

___

### fcmToken

• **fcmToken**: `string`

token para los mensajes de la nube

#### Defined in

[src/biker/biker.ts:47](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L47)

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

[src/biker/biker.ts:11](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L11)

___

### firstName

• **firstName**: `string`

nombre

#### Defined in

[src/biker/biker.ts:14](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L14)

___

### lastName

• **lastName**: `string`

apellidos

#### Defined in

[src/biker/biker.ts:17](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L17)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/biker/biker.ts:41](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L41)

___

### latitude

• **latitude**: `number`

latitud de la posición actual del biker

#### Defined in

[src/biker/biker.ts:50](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L50)

___

### longitude

• **longitude**: `number`

longitud de la posición actual del biker

#### Defined in

[src/biker/biker.ts:53](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L53)

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

[src/biker/biker.ts:26](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L26)

___

### provincia

• **provincia**: `string`

#### Defined in

[src/biker/biker.ts:31](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L31)

___

### status

• **status**: [`BikerStatus`](../modules.md#bikerstatus)

status del ciclista, relacionado con la capacidad de recibir ordenes - ver [BikerStatus](../modules.md#bikerstatus)

#### Defined in

[src/biker/biker.ts:29](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L29)

___

### userStatus

• **userStatus**: [`UserStatus`](../modules.md#userstatus)

estado de la cuenta de usario ciclista (si fue o no aprobado por un usuario admin) - ver [UserStatus](../modules.md#userstatus)

#### Defined in

[src/biker/biker.ts:44](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/biker/biker.ts#L44)
