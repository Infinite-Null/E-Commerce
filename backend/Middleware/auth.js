const ErrorHandler = require("../Utils/errorHandling")
const JWT=require("jsonwebtoken")
const User=require("../Models/userModel")

const isAuthenticatedUser=async(req,res,next)=>{
    const {token} =req.cookies
    if(!token){
        return next(new ErrorHandler("Please Login To access this route",401))
    }else{
        const decoded=await JWT.verify(token,process.env.JWT_SECRET)
        req.user=await User.findById(decoded._id)
        next()
    }
}
module.exports=isAuthenticatedUser