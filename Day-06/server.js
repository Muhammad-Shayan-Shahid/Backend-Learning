/*
 -- 1. Server start krna 
 -- 2. Database connect krna
*/

require("dotenv").config()
const app = require('./src/app')
const connectDB = require('./src/config/database')

connectDB()

app.listen(3000,()=>{
    console.log("Running........")
})