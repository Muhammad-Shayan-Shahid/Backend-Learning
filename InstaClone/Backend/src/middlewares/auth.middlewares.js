const jwt = require("jsonwebtoken");

async function identifyUser(req , res , next){
    
    const token = req.cookies.token


    if(!token){
        res.status(401).json({
          message : "Token is not created. Unauthorized Access.."
        })
    }

    let decoded = null ;
    try{
        decoded = jwt.verify(token , process.env.JWT_SECRET)
    }
    catch(err){
        res.status(409).json({
            message : "Unauthorized Access..."
        })
    }

    req.user = decoded 

    next()
}

module.exports = identifyUser
