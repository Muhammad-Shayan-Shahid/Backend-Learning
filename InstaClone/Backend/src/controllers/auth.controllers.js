const userModel = require("../models/user.models");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


async function registerController (req , res){
    const {username , email , password , bio , profileImg} = req.body;

    const isUserExist = await userModel.findOne({
        $or : [
            {username} , 
            {email}
        ]
    })

    if(isUserExist){
        return res.status(409).json({
            message : "User already exist"
        })
    }

    const hash = await bcrypt.hash(password ,10) ;

    const user = await userModel.create({
        username , 
        email , 
        password : hash, 
        bio , 
        profileImg
    })
    
    /*
    Token Purpose :
    1. User ka data hona chahee
    2. data unique ho
    */

    const token = jwt.sign(
        {
        id : user._id ,
        username : user.username
    }
    , process.env.JWT_SECRET ,
     {expiresIn : "1d"})

     res.cookie("token" , token)

     res.status(201).json({
        message : "User register Succesfully.." , 
        user : {
            email : user.email ,
            username : user.username ,
            bio : user.bio ,
            profileImg : user.profileImg
        }
     })
}


// login

async function loginController (req  ,res){

    const {username , password , email} = req.body ;
  
    const user = await userModel.findOne({
        $or : [
            {
                username : username
            },  
            {
                email : email
            }
]
    })

    if(!user){
        return res.status(401).json({
            message : "User not found"
        })
    }

    const isValidPassword = await bcrypt.compare(password , user.password);

    if(!isValidPassword){
        return res.status(401).json({
             message : "Invalid Password"
        })
    }

    const token = jwt.sign(
        {
        id : user._id ,
        username : user.username
    }
    , process.env.JWT_SECRET ,
     {expiresIn : "1d"})

     res.cookie("token" , token)

    res.status(200).json({
        message : "User Logined Successfully.." ,
        user : {
            username : user.username ,
            email : user.email ,
            bio : user.bio , 
            profile : user.profileImg
        }
    })


}

module.exports = {
    registerController ,
    loginController
}