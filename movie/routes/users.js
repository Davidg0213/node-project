const express = require("express")
const Users = require("../services/users")

function users(app){
    const router = express.Router()
    const usersService = new Users()
    app.use("/users", router)

    router.get("/:id",async(req,res)=>{
        const {id} = req.params
        const user = await usersService.get(id)
        return res.status(200).json(user)
    })

    router.get("/", async(req,res)=>{
        const users = await usersService.getAll()
        return res.status(200).json(users)
    })
    
    router.post("/",async (req,res)=>{
        const {id} = req.params
        const user = await usersService.update(id,req.body)
        return res.status(200).json(user)
    })
    router.delete("/:id", async (req,res)=>{
        const {id} = req.params
        const user = await usersService.delete(id)
        return res.status(200).json(user)
    })
}

module.exports = users


