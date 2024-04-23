const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre:{
        type: String
    },
    apellidos:{
        type: String
    },
    correo:{
        type: String
    },
    pais:{
        type: String
    },
    contrasena:{
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);