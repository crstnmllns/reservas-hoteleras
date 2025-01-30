# API de Reservas de Hotel

## Descripción

Esta API permite gestionar reservas de hoteles mediante operaciones CRUD y varios filtros. Incluye documentación generada con Swagger y OpenAPI.

## Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalación y Configuración

### 1. Clonar el Repositorio

```sh
 git clone <URL_DEL_REPOSITORIO>
 cd reservacionHotelera
```

### 2. Instalar Dependencias

```sh
 npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega:

```env
PORT=8080
```

## Ejecución del Proyecto

### 1. Levantar el Servidor

```sh
 npm run start
```

El servidor se ejecutará en `http://localhost:8080`.

### 2. Acceder a la Documentación Swagger

La documentación de la API estará disponible en:

```
http://localhost:8080/api-docs
```

## Endpoints de la API

### CRUD de Reservas

- **Crear una reserva** - `POST /api/reservas`
- **Obtener todas las reservas** - `GET /api/reservas`
- **Obtener una reserva por ID** - `GET /api/reservas/{id}`
- **Actualizar una reserva** - `PUT /api/reservas/{id}`
- **Eliminar una reserva** - `DELETE /api/reservas/{id}`

### Filtros de Reservas

- **Filtrar por hotel** - `GET /api/reservas/filtro/hotel?hotel=HotelNombre`
- **Filtrar por rango de fechas** - `GET /api/reservas/filtro/fecha?fecha_inicio=YYYY-MM-DD&fecha_fin=YYYY-MM-DD`
- **Filtrar por tipo de habitación** - `GET /api/reservas/filtro/tipo?tipo_habitacion=Doble`
- **Filtrar por estado** - `GET /api/reservas/filtro/estado?estado=Confirmada`
- **Filtrar por número de huéspedes** - `GET /api/reservas/filtro/huespedes?num_huespedes=3`

## Herramientas

- **Express.js** - Framework de Node.js
- **Swagger UI** - Documentación interactiva de la API

## Contribuciones

Si deseas contribuir, realiza un fork del repositorio y envía un pull request con tus mejoras.

## Licencia

Este proyecto se distribuye bajo la licencia MIT.

