const ErrorHandler = require("../Utils/errorHandling")
const JWT = require("jsonwebtoken")
const User = require("../Models/userModel")

exports.isAuthenticatedUser = async (req, res, next) => {
    const {token} = req.cookies
    if (!token) {
        return next(new ErrorHandler("Please Login To access this route", 401))
    } else {
        const decoded = await JWT.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id)
        next()
    }
}

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            next(new ErrorHandler(`Role ${req.user.role} is not allowed`, 403))
        }
        next()
    }
}