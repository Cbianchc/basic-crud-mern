const express = require ('express')
const app = express()
//declaro esto despues de instalar express

//Importar conexion mongoDB
const archivodb = require('./conexiones')

//importacion del archivo de rutas y model usuario
const rutausuario = require('./rutas/usuario')
//creamos la const y requerimos el archivo usuario y damos la ruta

//Importar body parse
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


//para hacer una prueba que todo esta bien.
app.use('/api/usuario', rutausuario)
// ahora hay que mapear esta ruta, eso lo estoy haciendo directamente en usuarios para que este archivo quede mas limpio


app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor v9!')
})


//configurar server
app.listen(5000, function(){
    console.log('EL servidor NODE funciona correcto V4')
})
