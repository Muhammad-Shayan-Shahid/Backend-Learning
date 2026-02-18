const express = require("express")
const crypto = require("crypto")
const authRouter = express.Router()
const userModel = require("../modules/user.modules")
const jwt = require("jsonwebtoken")

authRouter.post("/register" , async (req , res)=>{
    const {email , name , password} = req.body;

    const isUserExit = await userModel.findOne({email})  
    
    if(isUserExit){
        res.status(400).send({
            message : "User already exist"
        })
    }

    const user = await userModel.create({
        name ,
        email , 
        password : crypto.createHash("sha256").update(password).digest("hex")
    })

    const token  = jwt.sign({
        id : user._id
    } , process.env.JWT_SECRET , {expiresIn : "1h"})

    res.cookie("token " , token)
    console.log("JWT:", process.env.JWT_SECRET);
    res.status(201).json({
        message : "user registerd succesfully.." , 
        user : {
            name : user.name , 
            email : user.email
        }
    })
})


authRouter.post("/get-me" , async (req, res)=>{
    const token = req.cookies.token

    const decoded = jwt.verify(token , process.env.JWT_SECRET)

    const user = await userModel.findById(decoded.id);

    res.json({
        name : user.name , 
        email : user.email
    })
})


authRouter.post("/login" , async (req , res)=>{
    const {email , password} = req.body;
    const user = await userModel.findOne({email})  
    
    if(!user){
        res.status(400).send({
            message : "Invalid User"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    
})

module.exports = authRouter