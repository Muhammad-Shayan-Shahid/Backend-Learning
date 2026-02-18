const mongoose = require("mongoose")

const userSchema  = new mongoose.Schema({
    username : {
        type : String ,
        unique : [true , "User name already exist "] ,
        required : [true , "User name is required "]
    } ,
    email : {
        type :String ,
        unique : [true , "Email already exist "] ,
        required : [true , "Email is required "]
    } , 
    password : {
        type : String ,
        required : [true , "Passowrd is required "]
    } ,
    bio : {
        type : String
    } ,
    profileImg  : {
        type : String ,
        default : "https://ik.imagekit.io/nrry2bkzut/defaultImg.webp"
    }

})

const userModel = mongoose.model("users" , userSchema)

module.exports = userModel