const express = require("express");
const postRouter = express.Router();
const postControllers = require("../controllers/post.controllers")
const multer = require("multer"); // it gives power to express jo file express raed na kr sky phr is ki hellp sy krta hy.....
const identifyUser = require("../middlewares/auth.middlewares");
const upload = multer({storage : multer.memoryStorage()})


/*
post -- it is protected Api means only those user access that 
jhave a token no one other than that user is allowed...
*/


//create post 
postRouter.post("/", upload.single("image") ,identifyUser ,postControllers.createPostController)


//get post on basis of userID
postRouter.get("/", identifyUser , postControllers.getPostController)


// get a specific post onlt for autorized user........

postRouter.get("/details/:postId", identifyUser , postControllers.getPostDetailController)

/**
 * @route : api/posts/likes/:postId
 * @desc : Like a psot....
 * @access : Private
 */
postRouter.post("/likes/:postId", identifyUser , postControllers.likePostController)

/**
 * @route : api/posts/likes/feed
 * @desc : get post created in DB
 * @access : Private
 */

postRouter.get("/feed" , identifyUser ,postControllers.getFeedController )

module.exports = postRouter