// noinspection JSUnresolvedReference,JSVoidFunctionReturnValueUsed

const Product = require('../Models/productModel')
const ApiFeatures = require('../Utils/apifeatures')
const ErrorHandler = require('../Utils/errorHandling')


//Admin route
exports.createProduct = async (req, res, _) => {
    req.body.user = req.user.id
    const product = new Product(req.body)
    product.save().then((doc) => {
        res.status(201).json({
            success: true,
            product: doc
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            details: e.message
        })
    })
}


//Admin route
exports.updateProduct = async (req, res) => {
    Product.updateOne({_id: req.params.id}, req.body).then((doc) => {
        res.status(200).json({
            success: true,
            details: doc
        })
    }).catch((e) => {
        return next(new ErrorHandler("Product Not Found", 404))
    })
}


//Admin route
exports.deleteProduct = async (req, res) => {
    Product.deleteOne({_id: req.params.id}).then((e) => {
        res.status(200).json({
            success: true,
            details: e
        })
    }).catch((e) => {
        return next(new ErrorHandler("Product Not Found", 404))
    })
}


exports.getSingleProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id}).populate("reviews.user", "avatar").then((doc) => {
        res.status(200).json({
            success: true,
            Product: doc
        })
    }).catch((e) => {
        return next(new ErrorHandler("Product Not Found", 404))
    })
}

exports.getAllProducts = async (req, res, next) => {
    const resultPerPage = 10
    const productCount = await Product.countDocuments()
    const apifeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage)
    const k = new ApiFeatures(Product.find(), req.query).filter()
    const Result = await k.query
    apifeature.query.then((e) => {
        res.status(200).json({
            success: true,
            Total_Product: productCount,
            TotalReaturened: Result.length,
            ResultPerPage: resultPerPage,
            Products: e
        })
    }).catch((e) => {
        return next(new ErrorHandler("Product Not Found", 404))
    })
}

exports.searchProduct = async (req, res, next) => {
    console.log(req.query.keyword)
    Product.find({category: {
            $regex: req.query.keyword.toString(),
            $options: "i"
        }}).select("name images.url").then((e)=>{
        res.status(200).json({
                products:e
        })
    }).catch((e)=>{
        res.status(200).json({
            error:e.message
        })
    })

}

//Create review or update review
exports.createProductReview = async (req, res) => {
    const {rating, comment, productId} = req.body
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }

    const product = await Product.findById(productId)
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }
    const isReviewed = product.reviews.find((rev) => rev.user.toString() === req.user._id.toString())
    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString()) {
                rev.rating = rating
                rev.comment = comment
            }
        })
    } else {
        product.reviews.push(review)
        product.numOfReviews = product.reviews.length
    }
    let avg = 0
    product.reviews.forEach((rev) => {
        avg += rev.rating
    })
    product.ratings = avg / product.reviews.length

    await product.save({
        validateBeforeSave: false
    })

    res.status(200).json({
        success: true
    })

}

//Get reviews for product
exports.getProductReview = async (req, res) => {
    Product.findById(req.query.id).select("reviews").then((doc) => {
        if (!doc) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            reviews: doc
        })
    }).catch((e) => {
        res.status(500).json({
            success: false,
            message: e.message
        })
    })
}

//Delete review
exports.deleteProductReview = async (req, res) => {
    const product = await Product.findById(req.query.productId)
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    const reviews = product.reviews.filter((rev) => {
        return rev._id.toString() !== req.query.id.toString();
    })

    let avg = 0
    reviews.forEach((rev) => {
        avg += rev.rating
    })
    const ratings = avg / reviews.length
    const numOfReviews = reviews.length

    await Product.findByIdAndUpdate(req.query.productId,{
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
    })
}
