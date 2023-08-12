const express = require("express")
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct
} = require("../Controllers/productControllers")
const {isAuthenticatedUser, authorizeRoles} = require("../Middleware/auth")


const Router = express.Router()

Router.route("/products").get(isAuthenticatedUser, getAllProducts)
Router.route("/products/:id").get(getSingleProduct)
Router.route("/products/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct)
Router.route("/products/:id").patch(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
Router.route("/products/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

module.exports = Router
