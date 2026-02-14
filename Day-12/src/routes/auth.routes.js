const express = require("express");
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");

const authRouter = express.Router()

authRouter.post("/register" , async (req , res)=>{
    const {name , email , password} = req.body

    const isUserExist = await userModel.findOne({email})

    if(isUserExist){
        res.status(400).json({
        message : "With this account already account exist" 
    })}

    const user = await userModel.create({
        name , email , password
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

module.exports = authRouter