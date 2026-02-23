const express = require("express")
const userControllers = require("../controllers/user.controllers")
const identifyUser = require("../middlewares/auth.middlewares");
const userRouter = express.Router()

/**
 * @route : api/users/follow/:username
 * @desc : Folloew a user
 * @access : Private
 */
userRouter.post("/follow/:username" , identifyUser , userControllers.followUserControllers)

/**
 * @route : api/users/unfollow/:username
 * @desc : UNFolloew a user
 * @access : Private
 */
userRouter.post("/unfollow/:username" , identifyUser , userControllers.unFollowUserControllers)

module.exports = userRouter