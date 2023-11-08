const express = require("express")
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    createProductReview, getProductReview, deleteProductReview, searchProduct, getAllProductsAdmin, SendFile,
    UpdateWithImage
} = require("../Controllers/productControllers")
const {isAuthenticatedUser, authorizeRoles} = require("../Middleware/auth")


const Router = express.Router()

Router.route("/products").get(getAllProducts)
Router.route("/search").get(searchProduct)
Router.route("/products/get-all/admin").get(getAllProductsAdmin)
// Router.route("/products/file").post(SendFile)
Router.route("/products/:id").get(getSingleProduct)
Router.route("/admin/products/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct)
Router.route("/admin/products/:id").patch(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
Router.route("/admin/productsWithImage/:id").patch(isAuthenticatedUser, authorizeRoles("admin"), UpdateWithImage)
Router.route("/admin/products/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
Router.route("/review").put(isAuthenticatedUser, createProductReview)
Router.route("/reviews").get(getProductReview).delete(isAuthenticatedUser, deleteProductReview)

module.exports = Router
