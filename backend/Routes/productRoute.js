const express = require("express")
const { getAllProducts,createProduct,updateProduct,deleteProduct,getSingleProduct} = require("../Controllers/productControllers")


const Router=express.Router()

Router.route("/products").get(getAllProducts)
Router.route("/products/:id").get(getSingleProduct)
Router.route("/products/new").post(createProduct)
Router.route("/products/:id").patch(updateProduct)
Router.route("/products/:id").delete(deleteProduct)

module.exports=Router
