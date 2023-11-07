const express = require('express')
const app = express()
const errorMiddleware = require("./Middleware/error")
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.json({}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());


const product = require("./Routes/productRoute")
const user = require("./Routes/userRoute")
const order = require("./Routes/orderRoute")

app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)

//Middleware for error
app.use(errorMiddleware)

module.exports = app
