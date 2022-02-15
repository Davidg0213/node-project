const express = require("express")
const {isEditor} = require("../middleware/auth")
const Movies = require("../services/movies")

function movies(app){
    const router = express.Router()
    const moviesService = new Movies()
    app.use("/movies",router)

    router.get("/:id", async (req,res)=>{
        const {id} = req.params
        const movie = await moviesService.get(id)
        return res.status(200).json(movie)
    })

    router.get("/", async (req,res)=>{
        const movies = await moviesService.getAll()
        return res.status(201).json(movies)
    })

    router.post("/:id", isEditor, async(req,res)=>{
        const movie = await moviesService.create(req.body)
        return res.status(201).json(movie)
    })
    router.put("/:id", isEditor, async(req,res)=>{
        const {id} = req.params
        const movie = await moviesService.update(id,reqb.body)
        return res.status(200).json(movie)
    })
    router.delete("/:id", isEditor, async(req,res)=>{
        const {id} = req.params
        const movie = await moviesService.delete(id)
        return res.status(200).json(movie)
    })
}

module.exports = movies