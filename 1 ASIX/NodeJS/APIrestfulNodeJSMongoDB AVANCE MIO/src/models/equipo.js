const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({
    nombreEquipo:{
        type: String,
        required:true
    },
    nombreEstadio:{
        type: String,
        required:true
    },
    capacidadEstadio:{
        type: Number,
        required:true
    },
    fotoEscudo:{
        type: String,
        required:true
    },
    fotoEstadio:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('equipo', equipoSchema);