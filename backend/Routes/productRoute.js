const express = require("express")
const { getAllProducts,createProduct} = require("../Controllers/productControllers")

const Router=express.Router()

Router.route("/products").get(getAllProducts)
Router.route("/products/new").post(createProduct)

module.exports=Router