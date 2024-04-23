const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const rutasEquipo = require('./routes/equipo')


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', rutasEquipo);

//RUTA

app.get("/", (req,res) =>{
    res.send('Bienvenidos a mi API')
})

app.listen(port, () => console.log('Server listening at port: ', port));

//CONEXIÓN A MONGODB
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to Database'))
.catch((error) => console.error(error))