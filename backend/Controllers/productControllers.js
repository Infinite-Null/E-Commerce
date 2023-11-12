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
        }
    })
}


exports.createProduct = async (req, res, _) => {
    req.body.user = req.user.id
    const product = new Product(req.body)
    product.images = []
    if (req.files.File[0] === undefined) {
        console.log(req.files.File.data)
        try {
            const result = await Upload(req.files.File.data)
            const Re = {
                public_id: result.public_id,
                url: result.url
            }
            product.images.push(Re)
            product.save({
                validateBeforeSave: false
            }).then((e) => {
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
        } catch (e) {
            console.log("createProduct() failed to upload to cloudnary single file")
            console.log(e.message)
            res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            })
        }
    } else {
        let i = 0
        for (i; i < req.files.File.length; i++) {
            try {
                const result = await Upload(req.files.File[i].data)
                const Re = {
                    public_id: result.public_id,
                    url: result.url
                }
                product.images.push(Re)
            } catch (e) {
                console.log("createProduct() failed to upload to cloudnary multi file")
                console.log(e.message)
                res.status(500).json({
                    success: false,
                    message: "Something Went Wrong"
                })
            }
        }
        product.save({
            validateBeforeSave: false
        }).then((e) => {
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
}

//Update One with image
exports.UpdateWithImage = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        product.images.map((e) => {
            cloudinary.uploader
                .destroy(e.public_id)
                .then(result => console.log(result));
        })
        product.images = []
        if (req.files.File[0] === undefined) {
            console.log(req.files.File.data)
            try {
                const result = await Upload(req.files.File.data)
                const Re = {
                    public_id: result.public_id,
                    url: result.url
                }
                product.images.push(Re)
                product.save({
                    validateBeforeSave: false
                }).then((e) => {
                    Product.updateOne({_id: req.params.id}, req.body).then((doc) => {
                        res.status(200).json({
                            success: true,
                            details: doc
                        })
                    }).catch((e) => {
                        res.status(500).json({
                            message: "Failed",
                            error: e.message
                        })
                    })
                }).catch(e => {
                    res.status(500).json({
                        message: "Failed",
                        error: e.message
                    })
                })
            } catch (e) {
                console.log("UpdateWithImage() failed to upload single image")
                console.log(e.message)
                res.status(500).json({
                    success: false,
                    message: "Something Went Wrong"
                })
            }
        } else {
            let i = 0
            for (i; i < req.files.File.length; i++) {
                try {
                    const result = await Upload(req.files.File[i].data)
                    const Re = {
                        public_id: result.public_id,
                        url: result.url
                    }
                    product.images.push(Re)
                } catch (e) {
                    console.log("UpdateWithImage() failed to upload multiple image")
                    console.log(e.message)
                    res.status(500).json({
                        success: false,
                        message: "Something Went Wrong"
                    })
                }
            }
            product.save({
                validateBeforeSave: false
            }).then((_) => {
                Product.updateOne({_id: req.params.id}, req.body).then((doc) => {
                    res.status(200).json({
                        success: true,
                        details: doc
                    })
                }).catch((e) => {
                    res.status(500).json({
                        message: "Failed",
                        error: e.message
                    })
                })
            }).catch(e => {
                res.status(500).json({
                    message: "Failed",
                    error: e.message
                })
            })
        }
    } catch (e) {
        console.log("UpdateWithImage() failed findById")
        console.log(e.message)
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
}

//Admin route
exports.deleteProduct = async (req, res) => {
    try {
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
            console.log("deleteProduct() failed to deleteOne")
            console.log(e.message)
            res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            })
        })
    } catch (e) {
        console.log("deleteProduct() failed to findById")
        console.log(e.message)
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
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
    Product.find().select("name price Stock category description discount").then((e) => {
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
    try {
        const productCount = await Product.countDocuments()
        const apifeature = new ApiFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(resultPerPage)
        const k = new ApiFeatures(Product.find(), req.query).filter()
        try {
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
        } catch (e) {
            console.log("getAllProducts() failed to Result = await k.query")
            console.log(e.message)
            res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            })
        }
    } catch (e) {
        console.log("getAllProducts() failed to countDocuments")
        console.log(e.message)
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
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
    try {
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
        try {
            await product.save({
                validateBeforeSave: false
            })
            res.status(200).json({
                success: true
            })
        } catch (e) {
            console.log("createProductReview() failed to save")
            console.log(e.message)
            res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            })
        }
    } catch (e) {
        console.log("createProductReview() failed to findById")
        console.log(e.message)
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }

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
    try {
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

        try {
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
        }catch (e) {
            console.log("deleteProductReview() failed to findByIdAndUpdate")
            console.log(e.message)
            res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            })
        }
    } catch (e) {
        console.log("deleteProductReview() failed to findById")
        console.log(e.message)
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
}
