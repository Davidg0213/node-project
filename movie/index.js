const express = require("express")
const cors = require("cors")
const cookies = require("cookie-parser")
const config = require("./config")

//conexión con la BDD
const {connection}= require("./config/db")
connection()

//importa routers



//definiendo app

const app = express()

//middlewares



//usando rutas


//conexión servidor

app.get("/",(req,res)=>{
    return res.status(200).send("Hola")
})

app.listen(config.port,()=>{
    console.log("Servidor: http://localhost:"+config.port)
})