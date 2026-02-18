const express = require("express");
const authControllers = require("../controllers/auth.controllers")
// const { json } = require("stream/consumers");
// const { profile } = require("console");


const authRouter = express.Router()

authRouter.post("/register", authControllers.registerController )

authRouter.post("/login" , authControllers.loginController)

module.exports = authRouter;