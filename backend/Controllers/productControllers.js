// noinspection JSUnresolvedReference,JSVoidFunctionReturnValueUsed

const Product = require('../Models/productModel')
const ApiFeatures = require('../Utils/apifeatures')
const ErrorHandler = require('../Utils/errorHandling')
const cloudinary = require("cloudinary")


//Admin route
function Upload(buffer) {
    return new Promise(function (resolve, reject) {
        cloudinary.v2.uploader.upload_stream({
            resource_type: "image",
            folder: "Ecommerce"
        }, onDone).end(buffer)

        function onDone(error, result) {
            if (error) {
                reject(error)
                return
            }
            resolve(result)
            // console.log(result)
            // res.status(200).json({
            //     message: result
            // })
        }
    })
}


exports.createProduct = async (req, res, _) => {
    req.body.user = req.user.id
    const product = new Product(req.body)
    product.images = []
    if (req.files.File[0] === undefined) {
        console.log(req.files.File.data)
        const result = await Upload(req.files.File.data)
        const Re = {
            public_id: result.public_id,
            url: result.url
        }
        product.images.push(Re)
        product.save().then((e) => {
            res.status(200).json({
                message: "Success",
                data: e
            })
        }).catch(e => {
            res.status(500).json({
                message: "Failed",
                error: e.message
            })
        })
        console.log("single file")
    } else {
        let i = 0
        for (i; i < req.files.File.length; i++) {
            const result = await Upload(req.files.File[i].data)
            const Re = {
                public_id: result.public_id,
                url: result.url
            }
            product.images.push(Re)
        }
        product.save().then((e) => {
            res.status(200).json({
                message: "Success",
                data: e
            })
        }).catch(e => {
            res.status(500).json({
                message: "Failed",
                error: e.message
            })
        })
    }
    // console.log(product.images)
    // product.save().then((doc) => {
    //     res.status(201).json({
    //         success: true,
    //         product: doc
    //     })
    // }).catch((e) => {
    //     res.status(500).json({
    //         success: false,
    //         details: e.message
    //     })
    // })
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
    const product = await Product.findById(req.params.id)
    product.images.map((e) => {
        cloudinary.uploader
            .destroy(e.public_id)
            .then(result => console.log(result));
    })
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

exports.getAllProductsAdmin = async (req, res) => {
    Product.find().select("name price Stock category description").then((e) => {
        res.status(200).json({
            products: e
        })
    }).catch(e => {
        res.status(400).json({
            error: e.message
        })
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
    Product.find({
        category: {
            $regex: req.query.keyword.toString(),
            $options: "xi"
        }
    }).select("name images.url Stock price").then((e) => {
        res.status(200).json({
            products: e
        })
    }).catch((e) => {
        res.status(200).json({
            error: e.message
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

    await Product.findByIdAndUpdate(req.query.productId, {
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


// exports.SendFile = async (req, res) => {
// const file = req.files.File
// console.log(req.files)
// const arrayBuffer = await file.arrayBuffer();
// const buffer = Buffer.from(file.data) //  <-- convert to Buffer
// console.log(buffer)
// cloudinary.v2.uploader.upload_stream({resource_type: "image",folder:"Ecommerce"}, onDone).end(buffer)
//
// function onDone(error, result) {
//     if (error) {
//         res.status(200).json({
//             message: "error"
//         })
//         return
//     }
//     console.log(result)
//     res.status(200).json({
//         message: "Hi"
//     })
// }

// cloudinary.v2.uploader.upload(req.files.File,
//     {
//         quality_analysis: true,
//         folder: "Practice",
//     },
//     function (error, result) {
//         res.status(200).json({
//             message: "Hi"
//         })
//         console.log(result);
//     })
// }
