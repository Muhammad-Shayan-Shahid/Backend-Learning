import {body , validationResult} from 'express-validator'

const validate = (req , res , next)=>{
            const error = validationResult(req)

            if(error.isEmpty()){
                return next();
            }

            res.status(400).json({
                error : error.array()
            })
        }

export const registerValidation = 

[
        body("username").isString().withMessage("username must be String") ,
        body("email").isEmail().withMessage("email should be valid email address") ,
        body("password").isLength({min : 6 , max : 12}).withMessage("Password Length incompaitable"),
        validate

]  