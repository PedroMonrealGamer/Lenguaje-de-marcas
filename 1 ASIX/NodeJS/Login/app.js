const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/user')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb+srv://pmonreals:dhwZ8Kaong87uEbu@cluster0.wys4rzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(express.static("views"))

app.use(bodyParser.urlencoded({ extended: false }));

//Rutas
//Raiz
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html')
})
//Showing register form
app.get('/register', (req, res) =>{
    res.sendFile(__dirname + '/views/register.html')
})
//Showing login form
app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/views/login.html')
})

//Registrar el usuario
app.post('/register', async (req, res) => {
  console.log(req.body)
  const {nombre, apellidos, correo, pais, contrasena} = req.body;
  try{
    //Si el usuario existe, avisar
    const existingUser = await User.findOne({correo});
console.log('hola:'+ existingUser)
    if(existingUser){
      res.sendFile(__dirname + '/views/registered_ko.html')
    }else{
      const hashedPassword = await bcrypt.hash(contrasena, 10)
      const newUser = new User({
        nombre: nombre, 
        apellidos: apellidos, 
        correo: correo, 
        pais: pais,
        contrasena: hashedPassword,
      })
   
      //Guardar el usuario en la base de datos
      await newUser.save();

      res.sendFile(__dirname + '/views/registered.html')
    }
  }
  catch{
    console.log("error")
    res.status(500).send('Internal server error')
  }

});

//Login usuario

app.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;
  try{
    //Mirar si hay un usuario con ese correo
    const user = await User.findOne({ correo });

    //Si no hay usuario o la contraseña no es correcta
    if(!user || !(await bcrypt.compare(contrasena, user.contrasena))){
      res.sendFile(__dirname + '/views/login_ko.html');
      
    }
    else
    {
    res.sendFile(__dirname + '/views/logged.html');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }

});



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})