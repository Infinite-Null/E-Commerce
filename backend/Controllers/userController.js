// noinspection JSUnresolvedReference
const User = require("../Models/userModel")
const cloudinary = require('cloudinary')
const bcrypt = require("bcryptjs")
const sendToken = require('../Utils/jwtToken')
const ErrorHandler = require("../Utils/errorHandling")
const sendEmail = require("../Utils/sendEmail.js")
const crypto = require("crypto");
const JWT = require("jsonwebtoken")
//Register User
exports.registerUser = async (req, res) => {
    try {
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "avatars",
            width: 150,
            crop: "scale",
        })
        const {name, email, password} = req.body
        const user = new User({
            name, email, password, avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
        })

        user.save().then((_) => {
            sendToken(user, 201, res)
        }).catch((e) => {
            res.status(500).json({
                success: false,
                details: e.message
            })
        })
    } catch (e) {
        console.log(e)
    }
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
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
    const message = `Your password reset token is : \n\n ${resetPasswordUrl}\n\n 
    If you have not requested it please ignore it`

    try {
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })
    } catch (e) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save({validateBeforeSave: false})
        return next(new ErrorHandler(e.message, 500))
    }
}

exports.resetPassword = async (req, res, next) => {
    //creating hash token
    const resetPasswordToken = crypto.createHash("sha256")
        .update(req.params.token)
        .digest("hex")
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    })

    if (!user) {
        return next(new ErrorHandler("Reset Password Token is invalid or has been expired", 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    sendToken(user, 200, res)
}

// Get User Details
exports.getUserDetails = async (req, res) => {
    User.findById(req.user._id).then((user) => {
        res.status(200).json({
            success: true,
            user
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

// Update Password
exports.updatePassword = async (req, res) => {
    const user = await User.findById(req.user._id).select("+password")
    const match = await bcrypt.compare(req.body.oldPassword, user.password)

    if (!match) {
        return res.status(400).json({
            success: false,
            message: "Old password doesn't match"
        })
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "New Password doesn't match confirm password"
        })
    }

    user.password = req.body.newPassword
    await user.save()
    sendToken(user, 200, res)
}

// Update Profile
exports.updateProfile = async (req, res) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    User.findByIdAndUpdate(req.user._id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    }).then((_) => {
        res.status(200).json({
            success: true,
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

// Get all user admin
exports.getAllUser = async (req, res) => {
    User.find().then((users) => {
        res.status(200).json({
            success: true,
            users
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

// Get single user admin
exports.getSingleUser = async (req, res) => {
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }
        res.status(200).json({
            success: true,
            user
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

// Update user role admin
exports.updateRole = async (req, res) => {
    User.updateOne({_id: req.params.id}, {role: req.body.role}).then((message) => {
        res.status(200).json({
            success: true,
            message
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

//Delete user admin
exports.deleteUser = async (req, res) => {
    User.deleteOne({_id: req.params.id}).then((message) => {
        res.status(200).json({
            success: true,
            message
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}