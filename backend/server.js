const app=require("./app")
const dotenv=require("dotenv")
const connectDb=require('./config/database')

dotenv.config({path:"backend/config/.env"})

connectDb()

app.listen(process.env.PORT,()=>{
    console.log(`Server is running in PORT: ${process.env.PORT}`)
})