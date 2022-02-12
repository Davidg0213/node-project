const UserModel = require("../models/user")
class Users{
    async get(id){
        const user = await UserModel.findById(id)
        return user
    }

    async getByEmail(email){
        const user = await UserModel.findOne({email:email})
        return user
    }
    
    async getAll(){
        const users = await UserModel.find()
        return users
    }

    async create(data){
        const user = await UserModel.create(data)
        return user
    }

    async update(id,data){
        const user = await UserModel.findByIdAndUpdate(id,data,{new:true})
        return user
    }
}

module.export = Users