const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    date: Date,
    rating: Number
})

const MovieModel = mongoose.model("movies", movieSchema)

module.exports = MovieModel