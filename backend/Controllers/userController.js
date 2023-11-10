// noinspection JSUnresolvedReference
const User = require("../Models/userModel")
const bcrypt = require("bcryptjs")
const sendToken = require('../Utils/jwtToken')
const ErrorHandler = require("../Utils/errorHandling")
const sendEmail = require("../Utils/sendEmail.js")
const crypto = require("crypto");
const nodeMailer = require("nodemailer");
const {SendVerificationMail} = require("../Utils/Email");
//Register User
exports.registerUser = async (req, res) => {
    const userData = await User.find({email: req.body.email})
    if (userData.length !== 0) {
        if (!userData[0].isVerified) {
            await SendVerificationMail(userData[0]._id, userData[0].email)
            res.status(200).json({
                success: false,
                message: "You need to verify yourself, Mail has been sent to your mail please verify yourself"
            })
            return
        }
        res.status(200).json({
            success: false,
            message: "Email is connected to another account and verified, Please Login"
        })
        return
    }
    const {name, email, password} = req.body
    const user = new User({
        name, email, password
    })
    user.save().then(async (e) => {
        await SendVerificationMail(e._id, e.email)
        res.status(200).json({
            message: 'Mail has been sent to your e-mail please verify yourself'
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            details: e.message
        })
    })
}

//Verify User
exports.VerifyUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        if (user.isVerified) {
            res.status(200).json({
                success: false,
                details: "You are already verified!"
            })
            return
        }
        user.isVerified = true
        user.save().then((_) => {
            res.status(200).json({
                success: true,
                details: "Verified Successfully"
            })
        }).catch((e) => {
            res.status(500).json({
                success: false,
                details: e.message
            })
        })

    } catch (e) {
        res.status(500).json({
            success: false,
            details: "Wrong Verification"
        })
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
            if (!doc.isVerified) {
                await SendVerificationMail(doc._id, doc.email)
                res.status(404).json({
                    success: false,
                    details: "You are registered but not verified, Mail has been sent to your mail please verify yourself"
                })
                return
            }
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
    }).then((e) => {
        res.status(200).json({
            success: true,
            data: e,
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


exports.mailtest = async (req, res) => {
    const transporter = nodeMailer.createTransport({
        service: process.env.SMPT_SERVICE,
        secure: true,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: req.body.email,
        subject: req.body.subject,
        html: '<div style="height: 400px;background-color: white"><center><img src="https://media.istockphoto.com/id/1135899660/vector/set-of-colorful-shopping-bags-and-packages.jpg?s=612x612&w=0&k=20&c=DOndmXAcN1M77k3rrlFrYNnsw8hxHGxmJv57tXyyJaQ=" style="height: 200px;width: 200px"/></center><h1 style="color: #00aced;text-align: center">Click Link Below To Verify Yourself</h1>' +
            '<center><a style="background-color: rgb(255, 165, 47);padding: 20px;padding-left: 50px;padding-right: 50px;color: #efefef; border-radius: 10px;margin-top: 20px;">Click Me</a></center></div>'
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({
        message: "mail sent"
    })
}
