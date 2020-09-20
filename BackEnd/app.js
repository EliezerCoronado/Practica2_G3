const express = require('express');
const {dbConnection} = require('./database/config');
const cors = require('cors');







//servidor de express
const app = express();
//configuración CORS
app.use(cors());

//lectura y parseo de body
app.use(express.json());

//Base de dataos
dbConnection();

//rutas
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/login', require('./routes/auth'));



app.listen(3000,()=>{
    console.log('Servidor corriendo en puerto 3000');
});