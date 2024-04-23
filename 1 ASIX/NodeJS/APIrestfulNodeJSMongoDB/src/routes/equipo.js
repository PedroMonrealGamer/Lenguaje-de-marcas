const express = require('express');
const equipoSchema = require('../models/equipo')
const router = express.Router();

// Crear equipo
router.post('/equipos', (req, res) => {
    const equipo = equipoSchema(req.body);
    equipo.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => res.json({ mensaje: error }));
});

//LISTAR TODOS LOS EQUIPOS

router.get('/equipos', (req, res) => {
    equipoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router;
