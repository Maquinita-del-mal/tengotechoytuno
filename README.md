# tengotechoytuno

## Nombre:

    Backend Api sistema de renta de inmuebles

## Descripción:

    Backend API en nodejs de un sistema de registro y renta de viviendas (departamentos, oficinas, etc...) usando una base de datos de MongoDB

## Pseudo requerimientos:

- El sistema cuenta con 2 roles:

  - Administrador
  - Cliente

- Se necesita registrar los datos personales de todas las personas que quieran registrar viviendasen en el sistema:
  - Nombre
  - Apellidos
  - Fecha de nacimiendo
  - No. identificación
  - Teléfono
  - Correo
  - Dirección actual
  - Contraseña
- Los departamentos, oficinas, etc... son registrados por los clientes y para poder registrar un domicilio, se necesitan los siguiente datos:
  - Calle
  - No. exterior
  - No. interior
  - Zip code
  - Ciudad
  - País
  - Localidad
  - Tipo de oferta (Venta o Renta)
  - Precio
  - Descripción
  - Tipo de inmueble
  - Número de recámaras
  - Fotos del domicilio
- A cada oferta registrada se le pueden adjuntar mensajes, los cuales tienen que llegarle al dueño de la publicación y únicamente el dueño puede ver los mismo. Esos mensajes necesitan llevar la siguiente información:
  - Nombre
  - Correo
  - Teléfono
  - Mensaje
- Los visitantes del sitio que usará el servicio, pueden buscar/consultar los inmuebles disponibles, por medio de una consulta capáz de filtrar dependiendo de los siguientes parámetros que llenará el usario:

  - Filtro por rango de precio
  - Filtro por país y/o localidad
  - Filtro por tipo de inmueble
  - Filtro por número de recámaras

    Nota: Los resultados de la búsqueda con fitros solo deben regresar la primera imágen guardada del inmuble y únicamente mostrará la información básica

- Al seleccionar un inmueble resultante de una búsqueda, se podrá mostrar la informacion detallada del mismo y que se muestre cuántas personas están interesadas en esa oferta

- El sistema debe validar los datos que se ingresan

- No puede haber correos repetidos

- La contraseña deberá encriptarse antes de guardarse en la base

- Los puntos de acceso del servicio deberán estar protegidos menos los de búsqueda de inmueble

## branch template

Todas las ramas deben salir de la rama llamada dev

```
[feat|fix|chore|refactor]/[iniciales]/[qué-se-desarrolla]
```
