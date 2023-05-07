const express = require('express')
const router = express.Router()
//llamar primero a expres y el router de expres

const mongoose = require('mongoose')
const eschema = mongoose.Schema
//tambien llamo a mongoose, por que voy a usar Schema de mongoose

//crear Schema - plantilla 
const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String //este es un campo unico que no lo ve el usuario
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router
//despues creamos la const para guardar, llamos a mongoose.model y pasa un nombre y el eschema creado

//con eso se crea todo el modelo - ahora se trabaja en server.js

// RUta de ejemplo y prueba
// router.get('/ejemplo', (req, res)=> {
//     res.end('Saludo - carga desde ruta ejemplo')
// })

//esta es la ruta para agragar usuarios
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if (!err) {
            res.send('Usuario agregado correctamente')
        } else{
            res.send(err)
        }
    })
})

//ruta para obtener todos los usuarios  obtenerdatausuario
router.get('/obtenerusuario', (req, res) => {
    ModeloUsuario.find({}, function(docs, err){
        if (!err) {
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//ruta para obtener data de usuario para editar obtenerdatausuario
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if (!err) {
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Actualizar el usuario
router.post('/actualizausuario', (req, res) => {
    
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })

})

//Borrar el usuario
router.post('/borrarusuario', (req, res) => {
    
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('usuario borrado correctamente')
        }else{
            res.send(err)
        }
    })

})