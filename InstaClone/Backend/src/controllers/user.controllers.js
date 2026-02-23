const followModel = require("../models/follow.models")
const userModel = require("../models/user.models")

async function followUserControllers (req , res) {

    const followerUsername = req.user.username 
    const followeeUsername = req.params.username

    const isFolloweeExist = await userModel.findOne({
        username : followeeUsername
    })

    if(!isFolloweeExist){
        return res.status(404).json({
            message : "You are trying to follow a user that not exist."
        })
    }

    if(followeeUsername == followerUsername){
        return res.status(400).json({
            message : "You cannot follow yourself"
        })
    }

    const followRecord  = await followModel.create({
        followers : followerUsername , 
        followee: followeeUsername
    })

    const isAlreadyFollowing = await followModel.findOne({
        followers : followerUsername ,
        followee : followeeUsername
    })

    if(isAlreadyFollowing ){
        return res.status(200).json({
            message : `You are already following ${followeeUsername}` ,
            follow : isAlreadyFollowing
        })
    }

    res.status(201).json({
        message : `You are now following ${followeeUsername}` ,
        follow : followRecord
    })
}

async function unFollowUserControllers (req , res) {

    const followerUsername = req.user.username 
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        followers : followerUsername , 
        followee: followeeUsername
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message : `You are already not following ${followeeUsername}` 
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)
    res.status(200).json({
            message : `You have unfollowed ${followeeUsername}` 
        })
}

module.exports = {
    followUserControllers ,
    unFollowUserControllers
}