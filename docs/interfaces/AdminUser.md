[ride-dbtypes](../README.md) / [Exports](../modules.md) / AdminUser

# Interface: AdminUser

Representa un usuario administrador del sistema

## Table of contents

### Properties

- [adminRole](AdminUser.md#adminrole)
- [created](AdminUser.md#created)
- [email](AdminUser.md#email)
- [fcmToken](AdminUser.md#fcmtoken)
- [firebaseUserId](AdminUser.md#firebaseuserid)
- [firstName](AdminUser.md#firstname)
- [lastName](AdminUser.md#lastname)
- [lastUpdate](AdminUser.md#lastupdate)
- [profilePhoto](AdminUser.md#profilephoto)
- [userStatus](AdminUser.md#userstatus)

## Properties

### adminRole

• **adminRole**: [`AdminRole`](../modules.md#adminrole)

rol del admin - ver [AdminRole](../modules.md#adminrole)

#### Defined in

[src/admin/admin.ts:28](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L28)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/admin/admin.ts:31](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L31)

___

### email

• **email**: `string`

correo electronico

#### Defined in

[src/admin/admin.ts:22](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L22)

___

### fcmToken

• **fcmToken**: `string`

token para los mensajes de la nube

#### Defined in

[src/admin/admin.ts:40](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L40)

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

[src/admin/admin.ts:13](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L13)

___

### firstName

• **firstName**: `string`

nombre

#### Defined in

[src/admin/admin.ts:16](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L16)

___

### lastName

• **lastName**: `string`

apellidos

#### Defined in

[src/admin/admin.ts:19](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L19)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/admin/admin.ts:34](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L34)

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

[src/admin/admin.ts:25](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L25)

___

### userStatus

• **userStatus**: [`UserStatus`](../modules.md#userstatus)

estado de la cuenta de usario administrado (si fue o no aprobado por un usuario admin ya registrado) - ver [UserStatus](../modules.md#userstatus)

#### Defined in

[src/admin/admin.ts:37](https://github.com/gatitolabs/ride-dbtypes/blob/e4ca18b/src/admin/admin.ts#L37)
