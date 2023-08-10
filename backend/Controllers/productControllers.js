const Product=require('../Models/productModel')


//Admin route
exports.createProduct=async(req,res,next)=>{
    const product=new Product(req.body)
    product.save().then((doc)=>{
        res.status(201).json({
            success:true,
            product:doc
        })
    }).catch((e)=>{
        console.log(e)
    })
}

exports.getAllProducts=(req,res)=>{
   Product.find().then((e)=>{
    res.status(200).json({
    success:true,
    Products:e
    })
   }).catch((e)=>{
    console.log(e)
   })
}