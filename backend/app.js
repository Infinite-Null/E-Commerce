const express=require('express')
const app=express()
const errorMiddleware=require("./Middleware/error")
const cookieParser=require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

const product=require("./Routes/productRoute")
const user=require("./Routes/userRoute")
app.use("/api/v1",product)
app.use("/api/v1",user)

//Midddleware for error
app.use(errorMiddleware)

module.exports=app