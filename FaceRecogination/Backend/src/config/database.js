const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Db connected sucessfully...")
    })
    .catch((err)=>{
        console.log("Error : " ,err)
    })
}

module.exports = connectDB