const User = require("../Models/userModel")
const bcrypt = require("bcryptjs")
const sendToken = require('../Utils/jwtToken')
const ErrorHandler = require("../Utils/errorHandling")
const sendEmail = require("../Utils/sendEmail.js")

//Register User
exports.registerUser = async (req, res) => {
    const {name, email, password} = req.body

    const user = new User({
        name, email, password, avatar: {
            public_id: "This is sample",
            url: "ProfilePic"
        }
    })

    user.save().then((_) => {
        sendToken(user, 201, res)
    }).catch((e) => {
        res.status(500).json({
            success: false,
            details: e.message
        })
    })
}

//Login User

exports.loginUser = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.status(400).json({
            success: false,
            details: "Please give email and password"
        })
    }
    User.findOne({email: email}).select("+password").then(async (doc) => {
        if (!doc) {
            res.status(404).json({
                success: false,
                details: "No user with given email"
            })
        } else {
            //compared the encrypted password
            try {
                const login = await bcrypt.compare(password, doc.password)
                if (login) {
                    //generated token
                    sendToken(doc, 200, res)

                } else {
                    res.status(403).json({
                        success: false,
                        details: "Password or Email incorrect"
                    })
                }
            } catch (e) {
                res.status(500).json({
                    success: false,
                    details: e.message
                })
            }
        }
    })
}

//Logout User
exports.logout = async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged Out Successfully"
    })
}

//Forgot Password
exports.forgotPassword = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return next(new ErrorHandler("User not found", 404))
    }

    //Get ResetPassword Token
    const resetToken = await user.getResetPasswordToken()

    await user.save({validateBeforeSave: false})
    console.log(resetToken)
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
    const message = `Your password reset token is : \n\n ${resetPasswordUrl}\n\n 
    If you have not requested it please ignore it`

    try{
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })
    }catch (e) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save({validateBeforeSave: false})
        return next(new ErrorHandler(e.message, 500))
    }
}
