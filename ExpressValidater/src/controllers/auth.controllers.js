export async function registerUser(req , res , next) {
    try{
        throw new Error("Encouter an error while registering user...")
    }
    catch(err){
        next(err)
    }
   
}