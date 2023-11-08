const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter discription"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter price"],
        maxLength: [8, "Price cannot exceed 8 character"]
    },
    discount: {
        type: Number,
        required: [true, "Please Enter discount"],
        maxLength: [3, "Price cannot exceed 8 character"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Plase enter category"]
    },
    Stock: {
        type: Number,
        required: [true, "Please enter stock"],
        maxLength: [4, "Cannot exceed limit"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)
