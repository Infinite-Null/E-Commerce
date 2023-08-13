const express = require("express")
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile
} = require("../Controllers/userController")
const {isAuthenticatedUser} = require("../Middleware/auth");
const Router = express.Router()

Router.route("/register").post(registerUser)
Router.route("/login").post(loginUser)
Router.route("/logout").post(logout)
Router.route("/password/forgot").post(forgotPassword)
Router.route("/password/reset/:token").put(resetPassword)
Router.route("/user/detail").get(isAuthenticatedUser, getUserDetails)
Router.route("/password/update").put(isAuthenticatedUser, updatePassword)
Router.route("/user/update").put(isAuthenticatedUser, updateProfile)

module.exports = Router