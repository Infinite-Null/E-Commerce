const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt =require("bcryptjs")
const JWT=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[40,"Name cannot exceed 40 character"],
        minLength:[2,"Name should be bigger than 2 character"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"password should be more than 8 character"],
        select:false
    },
    avatar:{
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
    },
    role:{
        type:String,
        default:"user",
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

//JWT TOKEN
userSchema.methods.getJWTToken=function(){
        return JWT.sign({id:this._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRE
        })
}


module.exports=mongoose.model("User",userSchema)