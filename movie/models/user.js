const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    birthday:Date,
    city:String,
    email:String,
    password:String,
    role:String
})

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel