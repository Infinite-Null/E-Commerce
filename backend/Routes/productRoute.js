const express = require("express")
const { getAllProducts } = require("../Controllers/productControllers")

const Router=express.Router()

Router.route("/products").get(getAllProducts)

module.exports=Router