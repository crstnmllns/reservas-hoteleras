const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida exitosamente
 */
router.get('/', reservaController.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos de la reserva obtenidos correctamente
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', reservaController.obtenerReserva);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               fecha:
 *                 type: string
 *               tipo_habitacion:
 *                 type: string
 *               num_huespedes:
 *                 type: integer
 *               estado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 */
router.post('/', reservaController.crearReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_habitacion:
 *                 type: string
 *               num_huespedes:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', reservaController.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', reservaController.eliminarReserva);

/**
 * @swagger
 * /api/reservas/filtro/hotel:
 *   get:
 *     summary: Filtrar reservas por hotel
 *     parameters:
 *       - in: query
 *         name: hotel
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas
 */
router.get('/filtro/hotel', reservaController.filtrarPorHotel);


/**
 * @swagger
 * /api/reservas/filtro/fecha:
 *   get:
 *     summary: Filtrar reservas por rango de fechas
 *     parameters:
 *       - in: query
 *         name: fecha_inicio
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: fecha_fin
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por fecha
 */
router.get('/filtro/fecha', reservaController.filtrarPorFecha);

/**
 * @swagger
 * /api/reservas/filtro/tipo:
 *   get:
 *     summary: Filtrar reservas por tipo de habitación
 *     parameters:
 *       - in: query
 *         name: tipo_habitacion
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por tipo de habitación
 */
router.get('/filtro/tipo', reservaController.filtrarPorTipoHabitacion);

/**
 * @swagger
 * /api/reservas/filtro/estado:
 *   get:
 *     summary: Filtrar reservas por estado
 *     parameters:
 *       - in: query
 *         name: estado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por estado
 */
router.get('/filtro/estado', reservaController.filtrarPorEstado);

/**
 * @swagger
 * /api/reservas/filtro/huespedes:
 *   get:
 *     summary: Filtrar reservas por número de huéspedes
 *     parameters:
 *       - in: query
 *         name: num_huespedes
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por número de huéspedes
 */
router.get('/filtro/huespedes', reservaController.filtrarPorNumeroHuespedes);

module.exports = router;
