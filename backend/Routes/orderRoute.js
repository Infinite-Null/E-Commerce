const express = require("express")
const {isAuthenticatedUser, authorizeRoles} = require("../Middleware/auth");
const {
    newOrder,
    getSingleOrder,
    getLoggedInUserOrders,
    getAllOrders,
    updateOrderStatus,
    deleteOrders, Dashboard, updateComment
} = require("../Controllers/orderController");

const Router = express.Router()

Router.route("/order/all").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders)
Router.route("/dashboard").get(isAuthenticatedUser, authorizeRoles("admin"), Dashboard)
Router.route("/order/me").get(isAuthenticatedUser, getLoggedInUserOrders)
Router.route("/order/new").post(isAuthenticatedUser, newOrder)
Router.route("/order/comment/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateComment)
Router.route("/order/single/:id").get(isAuthenticatedUser, getSingleOrder)
Router.route("/order/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderStatus)
Router.route("/order/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrders)

module.exports = Router
