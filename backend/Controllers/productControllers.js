const Product=require('../Models/productModel')
const ApiFeatures = require('../Utils/apifeatures')
const ErrorHandler = require('../Utils/errorHandling')


//Admin route
exports.createProduct=async(req,res,next)=>{
    const product=new Product(req.body)
    product.save().then((doc)=>{
        res.status(201).json({
            success:true,
            product:doc
        })
    }).catch((e)=>{
        res.status(500).json({
            success:false,
            details:e.message
        })
    })
}


//Admin route
exports.updateProduct=async(req,res)=>{
    Product.updateOne({_id:req.params.id},req.body).then((doc)=>{
        res.status(200).json({
            success:true,
            details:doc
        })
    }).catch((e)=>{
        return next(new ErrorHandler("Product Not Found",404))
    })
}


//Admin route
exports.deleteProduct=async(req,res)=>{
    Product.deleteOne({_id:req.params.id}).then((e)=>{
        res.status(200).json({
            success:true,
            details:e
        })
    }).catch((e)=>{
        return next(new ErrorHandler("Product Not Found",404))
    })
}



exports.getSingleProduct=(req,res,next)=>{
    Product.findOne({_id:req.params.id}).then((doc)=>{
        res.status(200).json({
            success:true,
            Product:doc
        })
    }).catch((e)=>{
        return next(new ErrorHandler("Product Not Found",404))
    })
}

exports.getAllProducts=async (req,res)=>{
  const resultPerPage=5
  const productCount=await Product.countDocuments()
  const apifeature= new ApiFeatures(Product.find(),req.query)
  .search()
  .filter()
  .pagination(resultPerPage)
   apifeature.query.then((e)=>{
    res.status(200).json({
    success:true,
    Total_Product:productCount,
    Products:e
    })
   }).catch((e)=>{
    return next(new ErrorHandler("Product Not Found",404))
   })
}