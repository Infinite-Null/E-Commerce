const express = require("express")
const { getAllProducts,createProduct,updateProduct,deleteProduct,getSingleProduct} = require("../Controllers/productControllers")
const {isAuthenticatedUser,authorizeRoles} = require("../Middleware/auth")


const Router=express.Router()

Router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"),getAllProducts)
Router.route("/products/:id").get(getSingleProduct)
Router.route("/products/new").post(isAuthenticatedUser,createProduct)
Router.route("/products/:id").patch(isAuthenticatedUser,updateProduct)
Router.route("/products/:id").delete(isAuthenticatedUser,deleteProduct)

module.exports=Router
