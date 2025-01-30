// 1. IMPORTACIONES
const express = require('express');
const dotenv = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const reservaRoutes = require('./routes/reservaRoutes');

// 2. CONFIGURACIONES
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// 3. MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. CONFIGURACIÓN DE SWAGGER
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Reservas de Hotel",
            version: "1.0.0",
            description: "API para gestionar reservas de hoteles con operaciones CRUD y filtros.",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 5. RUTAS
app.use('/api/reservas', reservaRoutes);

// 6. INICIO DEL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});
