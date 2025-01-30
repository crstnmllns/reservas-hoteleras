const reservas = [
    {
        id: 1,
        hotel: "Hotel Paraíso",
        fecha: "2023-05-15",
        tipo_habitacion: "Doble",
        num_huespedes: 2,
        estado: "Confirmada"
    },
    {
        id: 2,
        hotel: "Hotel del Mar",
        fecha: "2023-06-10",
        tipo_habitacion: "Suite",
        num_huespedes: 4,
        estado: "Pendiente"
    },
    {
        id: 3,
        hotel: "Hotel Montaña",
        fecha: "2023-07-01",
        tipo_habitacion: "Individual",
        num_huespedes: 1,
        estado: "Confirmada"
    }
];


exports.crearReserva = (req, res) => {
    const nuevaReserva = { id: reservas.length + 1, ...req.body };
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
};

exports.obtenerReservas = (req, res) => {
    res.json(reservas);
};

exports.obtenerReserva = (req, res) => {
    const reserva = reservas.find(r => r.id === parseInt(req.params.id));
    if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    res.json(reserva);
};

exports.actualizarReserva = (req, res) => {
    const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    
    reservas[index] = { ...reservas[index], ...req.body };
    res.json(reservas[index]);
};

exports.eliminarReserva = (req, res) => {
    const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    
    const reservaEliminada = reservas.splice(index, 1);
    res.json(reservaEliminada);
};

exports.filtrarPorHotel = (req, res) => {
    const { hotel } = req.query;
    const filtradas = reservas.filter(r => r.hotel === hotel);
    res.json(filtradas);
};

exports.filtrarPorFecha = (req, res) => {
    const { fecha_inicio, fecha_fin } = req.query;
    const filtradas = reservas.filter(r => r.fecha >= fecha_inicio && r.fecha <= fecha_fin);
    res.json(filtradas);
};

exports.filtrarPorTipoHabitacion = (req, res) => {
    const { tipo_habitacion } = req.query;
    const filtradas = reservas.filter(r => r.tipo_habitacion === tipo_habitacion);
    res.json(filtradas);
};

exports.filtrarPorEstado = (req, res) => {
    const { estado } = req.query;
    const filtradas = reservas.filter(r => r.estado === estado);
    res.json(filtradas);
};

exports.filtrarPorNumeroHuespedes = (req, res) => {
    const { num_huespedes } = req.query;
    const filtradas = reservas.filter(r => r.num_huespedes >= parseInt(num_huespedes));
    res.json(filtradas);
};
