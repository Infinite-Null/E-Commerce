// noinspection JSUnresolvedReference

const Order = require("../Models/orderModel")
const Product = require('../Models/productModel')
const User = require("../Models/userModel")

// Create new Order
exports.newOrder = async (req, res) => {

    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body
    const order = new Order({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })
    order.save().then(async (e) => {
        const order = await Order.findById(e.id)
        for (const ord of order.orderItems) {
            await updateStock(ord.product, ord.quantity)
        }
        res.status(201).json({
            success: true,
            order:e
        })
    })
}
// update Comments --Admin
exports.updateComment = async (req,res) => {
    const order = await Order.findById(req.params.id)
    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order Not Found"
        })
    }
    if (order.orderStatus === "Delivered") {
        return res.status(400).json({
            success: false,
            message: "Already Delivered"
        })
    }

    order.comment = req.body.comment

    await order.save({validateBeforeSave: false})
    res.status(200).json({
        success: true
    })
}

// update Order status --Admin
exports.updateOrderStatus = async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order Not Found"
        })
    }
    if (order.orderStatus === "Delivered") {
        return res.status(400).json({
            success: false,
            message: "Already Delivered"
        })
    }

    order.orderStatus = req.body.status

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now()
    }

    await order.save({validateBeforeSave: false})
    res.status(200).json({
        success: true
    })
}

// Get Single Order
exports.getSingleOrder = async (req, res) => {
    Order.findById(req.params.id).populate("user", "name email").then((order) => {
        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            })
        }
        res.status(200).json({
            success: true,
            order
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

// Get Logged-in user orders
exports.getLoggedInUserOrders = async (req, res) => {
    Order.find({user: req.user._id}).then((order) => {
        if (order.length === 0) {
            return res.status(404).json({
                success: true,
                message: "No orders yet"
            })
        }
        res.status(200).json({
            success: true,
            order
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

// Get all orders --admin
exports.getAllOrders = async (req, res) => {
    Order.find().then((order) => {
        if (order.length === 0) {
            return res.status(404).json({
                success: true,
                message: "No orders yet"
            })
        }
        let totalAmount = 0
        order.forEach((e) => {
            totalAmount += e.totalPrice
        })
        res.status(200).json({
            success: true,
            order,
            totalAmount
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}



async function updateStock(id, quantity) {
    const product = await Product.findById(id)

    product.Stock -= quantity

    await product.save({validateBeforeSave: false})
}

// Delete order --admin
exports.deleteOrders = async (req, res) => {
    Order.deleteOne({_id: req.params.id}).then((doc) => {
        res.status(200).json({
            success: true,
            message: doc
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

exports.Dashboard = async (req, res) => {
    const TotalUsers = await User.countDocuments()
    Order.find().select("totalPrice").then((e) => {
        Product.find().select("Stock").then((p) => {
            res.status(200).json({
                TotalProducts: p.length,
                TotalOrders: e.length,
                TotalUsers,
                Orders: e,
                Products: p
            })
        }).catch((e) => {
            res.status(500).json({
                message: e.message
            })
        })
    }).catch((e) => {
        res.status(500).json({
            message: e.message
        })
    })
}
