const express=require("express")
const { registerUser, loginUser, logout } = require("../Controllers/userController")
const Router=express.Router()

Router.route("/register").post(registerUser)
Router.route("/login").post(loginUser)
Router.route("/logout").post(logout)

module.exports=Router