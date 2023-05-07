const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');
//no funciona con localhost, se pone un puerto local/el puerto que da mongo/el nombre de la base


const objetodb = mongoose.connection

objetodb.on('connected', ()=>(console.log('conexion correcta a mongoose')))
objetodb.on('error', ()=>(console.log('error en la conexion a mongoose')))

module.exports = mongoose
