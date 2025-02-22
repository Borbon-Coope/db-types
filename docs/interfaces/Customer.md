[ride-dbtypes](../README.md) / [Exports](../modules.md) / Customer

# Interface: Customer

Representa un usuario cliente de RIDE

## Table of contents

### Properties

- [cellPhone](Customer.md#cellphone)
- [created](Customer.md#created)
- [currentLocation](Customer.md#currentlocation)
- [email](Customer.md#email)
- [fcmToken](Customer.md#fcmtoken)
- [firebaseUserId](Customer.md#firebaseuserid)
- [firstName](Customer.md#firstname)
- [lastName](Customer.md#lastname)
- [lastUpdate](Customer.md#lastupdate)
- [profilePhoto](Customer.md#profilephoto)

## Properties

### cellPhone

• **cellPhone**: `string`

numero de celular del usuario

#### Defined in

[src/customer/customer.ts:23](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L23)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/customer/customer.ts:32](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L32)

___

### currentLocation

• **currentLocation**: [`Coords`](Coords.md)

ubicacion actual del negocio, utilizado para calcular rutas de los envios

#### Defined in

[src/customer/customer.ts:29](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L29)

___

### email

• **email**: `string`

correo electronico del usuario

#### Defined in

[src/customer/customer.ts:14](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L14)

___

### fcmToken

• **fcmToken**: `string`

token para los mensajes de la nube

#### Defined in

[src/customer/customer.ts:20](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L20)

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

[src/customer/customer.ts:17](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L17)

___

### firstName

• **firstName**: `string`

nombre completo del usuario

#### Defined in

[src/customer/customer.ts:8](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L8)

___

### lastName

• **lastName**: `string`

apellidos del usuario

#### Defined in

[src/customer/customer.ts:11](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L11)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/customer/customer.ts:35](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L35)

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

[src/customer/customer.ts:26](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/customer/customer.ts#L26)
