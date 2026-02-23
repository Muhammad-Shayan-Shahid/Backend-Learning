const mongoose = require("mongoose");
const { post } = require("../app");


const likeSchema  = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId ,
        ref  : "post" ,
        required : [true , "Post id is required for likes."]
    } , 
    user : {
         type : String ,
         required : [true , "Username is required for like a post."]
    } ,
    status  :{
        type : String ,
        default  : "Pending.." ,
        enum  : {
            values : [ " pending" , "accepted" , "rejected"] ,
            message  : "status can only be pendin , accepted and rejected."
        }
    }
} ,
    {timestamps : true}
)

likeSchema.index({post : 1 , user : 1} , {unique : true})

const likeModel = mongoose.model("likes" , likeSchema)

module.exports = likeModel ;