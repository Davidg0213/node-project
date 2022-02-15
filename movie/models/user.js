// const {mongoose} = require("../config/db")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    birthday:Date,
    city:String,
    email:String,
    password:String,
    role:Number
})
 

module.exports = mongoose.model("users", userSchema)