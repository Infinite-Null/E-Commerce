const express = require("express")
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateRole,
    deleteUser, mailtest, VerifyUser
} = require("../Controllers/userController")
const {isAuthenticatedUser, authorizeRoles} = require("../Middleware/auth");
const Router = express.Router()

Router.route("/register").post(registerUser)
Router.route("/login").post(loginUser)
Router.route("/logout").post(logout)
Router.route("/password/forgot").post(forgotPassword)
Router.route("/password/reset/:id").post(resetPassword)
Router.route("/user/detail").get(isAuthenticatedUser, getUserDetails)
Router.route("/password/update").put(isAuthenticatedUser, updatePassword)
Router.route("/user/update").put(isAuthenticatedUser, updateProfile)
Router.route("/user/verify/:id").post(VerifyUser)
Router.route("/user/mail/test").post(mailtest)
Router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)
Router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
Router.route("/admin/updateRole/:id").post(isAuthenticatedUser, authorizeRoles("admin"), updateRole)
Router.route("/admin/deleteUser/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)

module.exports = Router
