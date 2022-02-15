const express = require("express")
require("dotenv").config()
const cors = require("cors")
const cookies = require("cookie-parser")
//Trayendo conexión a BD
const connectDB = require("./config/db")

//Importando router
const movies = require("./routes/movies")
const users = require("./routes/users")
const auth = require("./routes/auth")

const app = express()

//Usando middleware globales
//app.use(express.text())
app.use(express.json())
app.use(cors({
    origin:['http://127.0.0.1:5500','http://localhost:3000'],
    credentials:true
}))

app.use(cookies())
// app.use(passport.initialize())

// passport.use(new GoogleStrategy({
//     clientID:,
//     clientSecret:,
//     callbackURL:'http://localhost:4000',
// }))

// Utilizando las rutas
movies(app)
users(app)
auth(app)

app.get('/',(req,res)=>{
    return res.status(200).send('Hola, bienvenido')
})

const port = process.env.PORT || 3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port${port}`));
    }catch (error){
        console.log(error)
    }
};

start();