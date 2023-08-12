const express=require("express")
const { registerUser, loginUser, logout, forgotPassword} = require("../Controllers/userController")
const Router=express.Router()

Router.route("/register").post(registerUser)
Router.route("/login").post(loginUser)
Router.route("/logout").post(logout)
Router.route("/password/forgot").post(forgotPassword)

module.exports=Router