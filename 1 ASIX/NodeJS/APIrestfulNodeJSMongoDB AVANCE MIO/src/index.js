const express = require('express');
const mongoose = require('mongoose');
var path = require('path'); //LO USO PARA CSS
require('dotenv').config();
const rutasEquipo = require('./routes/equipo')

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());

//USO ESTO PARA QUE CARGUE CSS JUNTO A path
var publicPath = path.resolve(__dirname, 'views');
app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));

app.use('/api', rutasEquipo);

//RUTA

app.get("/", (req,res) =>{
    res.send('Bienvenidos a mi API')
})

app.get("/backend", (req,res) =>
res.sendFile(__dirname + '/views/backend.html'))

app.get("/insert", (req,res) =>
res.sendFile(__dirname + '/views/insert.html'))

app.get("/update", (req,res) =>
res.sendFile(__dirname + '/views/update.html'))

app.get("/delete", (req,res) =>
res.sendFile(__dirname + '/views/delete.html'))

app.listen(port, () => console.log('Server listening at port: ', port));

//CONEXIÓN A MONGODB
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to Database'))
.catch((error) => console.error(error))