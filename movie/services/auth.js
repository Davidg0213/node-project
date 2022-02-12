const Users = require("./users")
const jwt = require("jsonwebtoken")
const { jwt_secret } = require("../config")

class Auth{

    constructor(){
        this.users = new Users()
    }

    async login(email,password){
        const user = await this.users.getByEmail(email)
        if(user && user.password === password){
          
            const data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            }
            const token = jwt.sign(data,jwt_secret,{expiresIn:"1d"})
            return {success:true,data,token}
        }

        return {success:false,message:"Las credenciales no coinciden"}
    }

    async signup(userData){
        if(await this.users.getByEmail(userData.email)){
            return {succes:false,message:"Usuario ya registrado"}
        }else{
            const user = await this.users.create(userData)
            const data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            }
            const token = jwt.sign(data,jwt_secret,{expiresIn:"1d"})
            return {succes:true,data,token}
        }
        
    }
}

module.exports = Auth