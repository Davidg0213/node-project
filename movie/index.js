const express = require("express")
const cors = require("cors")
const cookies = require("cookie-parser")
const config = require("./config")

//conexión con la BDD
const {connection}= require("./config/db")
connection()

//importa routers
const movies = require("./routes/movies");
const users = require("./routes/users");
const auth = require("./routes/auth")

const app = express()
//definiendo app

movies(app)
users(app)
auth(app)

//middlewares

app.use(express.json())
app.use(cors)


//usando rutas
app.use("../routes")

//conexión servidor

app.get("/",(req,res)=>{
    return res.status(200).send("Hola")
})

app.listen(config.port,()=>{
    console.log("Servidor: http://localhost:"+config.port)
})