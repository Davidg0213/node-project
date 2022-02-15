require("dotenv").config()

const config = {

    MONGO_URI: process.env.MONGO_URI,
    port:process.env.PORT,
    db_password: process.env.DB_PASSWORD,
    db_username: process.env.DB_USERNAME,
    db_host:process.env.DD_HOST,
    db_name:process.env.DB_NAME
}

module.exports = config