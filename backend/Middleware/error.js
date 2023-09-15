// noinspection JSUnresolvedReference

const ErrorHandler = require("../Utils/errorHandling")

module.exports = (err, req, res) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"

    //Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message, 400)
    }

    //Wrong JWT error
    if (err.name === "JsonWebTokenError") {
        const message = `Json web token is invalid, Try again`
        err = new ErrorHandler(message, 400)
    }

    //JWT Expire error
    if (err.name === "TokenExpiredError") {
        const message = `Json web token is expired, Try again`
        err = new ErrorHandler(message, 400)
    }

    console.log(req)
}