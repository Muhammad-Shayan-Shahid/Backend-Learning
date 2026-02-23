const express = require("express");
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const authRouter = express.Router()

authRouter.post("/register" , async (req , res)=>{
    const {name , email , password} = req.body

    const isUserExist = await userModel.findOne({email})

    if(isUserExist){
        res.status(400).json({
        message : "With this account already account exist" 
    })}

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({ 
        name , email , password : hash
    })

    const token = jwt.sign(
        {
            id : user._id , 
            email : user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("Jwt_Tooken" ,token)

    res.status(201).json({
        message : "User registered" ,
        user,
        token
    })

})

authRouter.post("/protected" , (req , res)=>{
        console.log(req.cookies)

        res.status(200).json({
            message : "This is protected route..."
        })
})

// Controller -- wo sb fnction tb execute hn jab ek api call ho...

authRouter.post("/login" , async (req , res)=>{

        const {email , password} = req.body

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(404).json({
                message : "User not found with this email"
            })
        }

        const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex") ;

        if(!isPasswordMatched){
            return res.status(401).json({
                message : "Inavlid Password"
            })
        }

        const token = jwt.sign(
        {
            id : user._id , 
            email : user.email
        },
        process.env.JWT_SECRET
    )
    
    res.cookie("Jwt_Tooken" ,token)

    res.status(201).json({
        message : "User Login" ,
        user,
    })
})

module.exports = authRouter