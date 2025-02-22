# db-types

Proyecto Coope: Documentos NoSQL para Firestore

## Pasos para agregar cambios

1. Hacer pull con lo último de `main`
1. Crear un branch nuevo a partir de `main`
1. Implementar los cambios requerido
   1. **IMPORTANTE:** no olviden actualizar el archivo `index.ts`
1. Actualizar la versión en el archivo `package.json`
1. Ejecutar `npm run ci` y verificar que no hayan errores
1. Agregar **TODOS** los archivos a git (todo lo que haya bajo `lib` y `docs`)
   1. por ejemplo `git add .`
1. Crear un _pull request_ en github. 
1. Luego de que el _pull request_ haya sido fusionado y el _tag_ nuevo haya sido creado, actualizar las dependencias en los proyectos afectados.

## Estados Orden 

![Estados Orden](Coope-EstadosOrden.jpg) 