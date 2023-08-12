const ErrorHandler = require('../Utils/errorHandling')
const User=require("../Models/userModel")
const bcrypt=require("bcryptjs")
const JWT=require("jsonwebtoken")
const sendToken = require('../Utils/jwtToken')
//Register User

exports.registerUser=async(req,res)=>{
    const {name,email,password}=req.body

    const user=new User({name,email,password,avatar:{
        public_id:"This is sample",
        url:"ProfilePic"
    }})

    user.save().then((doc)=>{
        sendToken(user,201,res)
    }).catch((e)=>{
        res.status(500).json({
            success:false,
            details:e.message
        })
    })
}

//Login User

exports.loginUser=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        res.status(400).json({
            success:false,
            details:"Please give email and password"
        })
    }
    User.findOne({email:email}).select("+password").then(async(doc)=>{
        if(!doc){
            res.status(404).json({
                success:false,
                details:"No user with given email"
            })
        }else{
            //compared the encrypted password
            try{
                const login=await bcrypt.compare(password,doc.password)
                if(login){
                    //generated token
                   sendToken(doc,200,res)
    
                }else{
                    res.status(403).json({
                        success:false,
                        details:"Password or Email incorrect"
                    })
                }
            }catch(e){
                res.status(500).json({
                    success:false,
                    details:e.message
            })
            }
        }
    })
}